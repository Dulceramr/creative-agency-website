import React, { useState } from 'react';
import './ContactModal.scss';

const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    projectType: 'branding'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('loading');
    setSubmitMessage('Scheduling your call...');
    
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Form data submitted:', formData);
      
      setSubmitStatus('success');
      setSubmitMessage('Call scheduled successfully! We\'ll contact you within 24 hours.');
      
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: '',
          projectType: 'branding'
        });
        setSubmitStatus(null);
        setSubmitMessage('');
        onClose();
      }, 3000);
      
    } catch (error) {
      setSubmitStatus('error');
      setSubmitMessage('Failed to schedule call. Please try again or contact us directly.');
      
      setTimeout(() => {
        setSubmitStatus(null);
        setSubmitMessage('');
      }, 4000);
      
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: '',
      projectType: 'branding'
    });
    setSubmitStatus(null);
    setSubmitMessage('');
  };

  if (!isOpen) return null;

  return (
    <div className="contact-modal">
      <div className="contact-modal__overlay" onClick={onClose} />
      
      <div className="contact-modal__content">
        
        <div className="contact-modal__header">
          <h2 className="contact-modal__title">Schedule a Call</h2>
          <p className="contact-modal__subtitle">
            Let's discuss your project and how we can help
          </p>
          <button 
            className="contact-modal__close"
            onClick={() => {
              resetForm();
              onClose();
            }}
            aria-label="Close modal"
            disabled={isSubmitting}
          >
            &times;
          </button>
        </div>
        
        <form className="contact-modal__form" onSubmit={handleSubmit}>
          
          {submitStatus === 'loading' && (
            <div className="contact-modal__feedback contact-modal__feedback--loading">
              <div className="contact-modal__feedback-icon">
                <div className="contact-modal__spinner"></div>
              </div>
              <p className="contact-modal__feedback-text">{submitMessage}</p>
            </div>
          )}
          
          {submitStatus === 'success' && (
            <div className="contact-modal__feedback contact-modal__feedback--success">
              <div className="contact-modal__feedback-icon">
                <span className="contact-modal__checkmark">✓</span>
              </div>
              <div className="contact-modal__feedback-content">
                <h3 className="contact-modal__feedback-title">Success!</h3>
                <p className="contact-modal__feedback-text">{submitMessage}</p>
                <p className="contact-modal__feedback-note">
                  You will be redirected automatically...
                </p>
              </div>
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="contact-modal__feedback contact-modal__feedback--error">
              <div className="contact-modal__feedback-icon">
                <span className="contact-modal__error-mark">!</span>
              </div>
              <div className="contact-modal__feedback-content">
                <h3 className="contact-modal__feedback-title">Oops!</h3>
                <p className="contact-modal__feedback-text">{submitMessage}</p>
                <button 
                  type="button" 
                  className="contact-modal__retry"
                  onClick={() => {
                    setSubmitStatus(null);
                    setSubmitMessage('');
                  }}
                >
                  Try Again
                </button>
              </div>
            </div>
          )}
          
          {!submitStatus || submitStatus === 'error' ? (
            <>
              <div className="contact-modal__grid">
                
                <div className="contact-modal__field">
                  <label htmlFor="name" className="contact-modal__label">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="contact-modal__input"
                    placeholder="John Doe"
                    disabled={isSubmitting}
                  />
                </div>
                
                <div className="contact-modal__field">
                  <label htmlFor="email" className="contact-modal__label">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="contact-modal__input"
                    placeholder="john@example.com"
                    disabled={isSubmitting}
                  />
                </div>
                
                <div className="contact-modal__field">
                  <label htmlFor="phone" className="contact-modal__label">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="contact-modal__input"
                    placeholder="+1 (555) 123-4567"
                    disabled={isSubmitting}
                  />
                </div>
                
                <div className="contact-modal__field">
                  <label htmlFor="company" className="contact-modal__label">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="contact-modal__input"
                    placeholder="Your company name"
                    disabled={isSubmitting}
                  />
                </div>
                
                <div className="contact-modal__field contact-modal__field--full">
                  <label htmlFor="projectType" className="contact-modal__label">
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="contact-modal__select"
                    disabled={isSubmitting}
                  >
                    <option value="branding">Branding & Identity</option>
                    <option value="web">Web Design & Development</option>
                    <option value="uiux">UI/UX Design</option>
                    <option value="consulting">Strategy Consulting</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className="contact-modal__field contact-modal__field--full">
                  <label htmlFor="message" className="contact-modal__label">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="contact-modal__textarea"
                    placeholder="Tell us about your project, timeline, and budget..."
                    disabled={isSubmitting}
                  />
                </div>
                
              </div>
              
              <div className="contact-modal__actions">
                <button
                  type="button"
                  className="contact-modal__cancel"
                  onClick={() => {
                    resetForm();
                    onClose();
                  }}
                  disabled={isSubmitting}
                >
                  Cancel
                </button>
                
                <button
                  type="submit"
                  className="contact-modal__submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Scheduling...' : 'Schedule Call'}
                </button>
              </div>
            </>
          ) : null}
          
        </form>
        
      </div>
    </div>
  );
};

export default ContactModal;