import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { CartContext } from '../context/CartContext';
import './AuthModal.css';

const AuthModal = () => {
  const { login, register, error, loading } = useContext(AuthContext);
  const { authModalOpen, setAuthModalOpen } = useContext(CartContext);

  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formError, setFormError] = useState(null);

  if (!authModalOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError(null);

    if (!email || !password || (!isLogin && !name)) {
      setFormError('Please fill in all fields');
      return;
    }

    try {
      if (isLogin) {
        await login(email, password);
      } else {
        await register(name, email, password);
      }
      // Success: Reset and close modal
      setName('');
      setEmail('');
      setPassword('');
      setAuthModalOpen(false);
    } catch (err) {
      setFormError(err.message || 'Authentication failed');
    }
  };

  return (
    <div className="auth-modal-overlay" onClick={() => setAuthModalOpen(false)}>
      <div className="auth-modal-card" onClick={(e) => e.stopPropagation()}>
        {/* Close button */}
        <button className="auth-close-btn" onClick={() => setAuthModalOpen(false)}>
          &times;
        </button>

        {/* Header Tabs */}
        <div className="auth-tabs">
          <button
            className={`auth-tab-btn ${isLogin ? 'active' : ''}`}
            onClick={() => { setIsLogin(true); setFormError(null); }}
          >
            Sign In
          </button>
          <button
            className={`auth-tab-btn ${!isLogin ? 'active' : ''}`}
            onClick={() => { setIsLogin(false); setFormError(null); }}
          >
            Create Account
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="auth-form">
          <h2 className="auth-title">{isLogin ? 'Welcome Back' : 'Join Truemart'}</h2>
          <p className="auth-subtitle">
            {isLogin ? 'Sign in to access your saved cart, wishlist, and orders.' : 'Create an account for a faster checkout experience.'}
          </p>

          {(formError || error) && (
            <div className="auth-error-alert">
              ⚠️ {formError || error}
            </div>
          )}

          {!isLogin && (
            <div className="auth-form-group">
              <label htmlFor="auth-name">Full Name</label>
              <input
                type="text"
                id="auth-name"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          )}

          <div className="auth-form-group">
            <label htmlFor="auth-email">Email Address</label>
            <input
              type="email"
              id="auth-email"
              placeholder="john@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="auth-form-group">
            <label htmlFor="auth-password">Password</label>
            <input
              type="password"
              id="auth-password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="auth-submit-btn btn-primary" disabled={loading}>
            {loading ? 'Processing...' : isLogin ? 'Sign In' : 'Sign Up'}
          </button>
        </form>

        <div className="auth-footer">
          {isLogin ? (
            <p>
              New to Truemart?{' '}
              <span className="auth-toggle-link" onClick={() => setIsLogin(false)}>
                Create an account
              </span>
            </p>
          ) : (
            <p>
              Already have an account?{' '}
              <span className="auth-toggle-link" onClick={() => setIsLogin(true)}>
                Sign in
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
