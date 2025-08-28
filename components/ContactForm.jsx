"use client";
import React, { useState, useCallback, useMemo } from "react";
import ErrorBoundary from "./ErrorBoundary";

function ContactFormContent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
    inquiryType: "general",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  // Validation rules
  const validationRules = useMemo(
    () => ({
      name: {
        required: true,
        minLength: 2,
        pattern: /^[a-zA-Z\s'-]+$/,
        message:
          "Please enter a valid name (letters, spaces, hyphens, and apostrophes only)",
      },
      email: {
        required: true,
        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: "Please enter a valid email address",
      },
      subject: {
        required: true,
        minLength: 5,
        maxLength: 100,
        message: "Subject must be between 5 and 100 characters",
      },
      message: {
        required: true,
        minLength: 10,
        maxLength: 1000,
        message: "Message must be between 10 and 1000 characters",
      },
      phone: {
        pattern: /^[\+]?[1-9][\d]{0,15}$/,
        message: "Please enter a valid phone number",
      },
    }),
    []
  );

  // Validate individual field
  const validateField = useCallback(
    (name, value) => {
      const rule = validationRules[name];
      if (!rule) return null;

      if (rule.required && (!value || value.trim() === "")) {
        return `${name.charAt(0).toUpperCase() + name.slice(1)} is required`;
      }

      if (value && rule.minLength && value.length < rule.minLength) {
        return (
          rule.message ||
          `${name} must be at least ${rule.minLength} characters`
        );
      }

      if (value && rule.maxLength && value.length > rule.maxLength) {
        return (
          rule.message ||
          `${name} must be no more than ${rule.maxLength} characters`
        );
      }

      if (value && rule.pattern && !rule.pattern.test(value)) {
        return rule.message || `Invalid ${name} format`;
      }

      return null;
    },
    [validationRules]
  );

  // Format phone number
  const formatPhoneNumber = useCallback((value) => {
    const cleaned = value.replace(/\D/g, "");
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`;
    }
    return value;
  }, []);

  const handleInputChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      let formattedValue = value;

      // Format phone number as user types
      if (name === "phone") {
        formattedValue = formatPhoneNumber(value);
      }

      setFormData((prev) => ({
        ...prev,
        [name]: formattedValue,
      }));

      // Clear error when user starts typing
      if (errors[name]) {
        setErrors((prev) => ({
          ...prev,
          [name]: null,
        }));
      }

      // Real-time validation for better UX
      const error = validateField(name, formattedValue);
      if (error) {
        setErrors((prev) => ({
          ...prev,
          [name]: error,
        }));
      }
    },
    [errors, formatPhoneNumber, validateField]
  );

  // Validate entire form
  const validateForm = useCallback(() => {
    const newErrors = {};
    let isValid = true;

    Object.keys(validationRules).forEach((field) => {
      const error = validateField(field, formData[field]);
      if (error) {
        newErrors[field] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  }, [formData, validateField, validationRules]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus(null);

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call - replace with actual endpoint
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          subject: "",
          message: "",
          inquiryType: "general",
        });
        setErrors({});
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl md:rounded-3xl p-4 md:p-8 shadow-lg border border-gray-100">
      {/* Success Message */}
      {submitStatus === "success" && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-2xl">
          <div className="flex items-center">
            <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center mr-3">
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-green-800 font-semibold">
                Message sent successfully!
              </h3>
              <p className="text-green-600 text-sm">
                We'll get back to you within 2 hours during business hours.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Error Message */}
      {submitStatus === "error" && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-2xl">
          <div className="flex items-center">
            <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center mr-3">
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-red-800 font-semibold">
                Failed to send message
              </h3>
              <p className="text-red-600 text-sm">
                Please try again or contact us directly at
                support@logicalcrm.com
              </p>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6" noValidate>
        {/* Inquiry Type */}
        <fieldset>
          <legend className="block text-sm font-semibold text-gray-900 mb-3">
            What can we help you with?
          </legend>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3"
            role="radiogroup"
            aria-labelledby="inquiry-type-legend"
          >
            {[
              { value: "general", label: "General Question" },
              { value: "demo", label: "Request Demo" },
              { value: "support", label: "Technical Support" },
              { value: "sales", label: "Sales Inquiry" },
            ].map((type) => (
              <label key={type.value} className="relative">
                <input
                  type="radio"
                  name="inquiryType"
                  value={type.value}
                  checked={formData.inquiryType === type.value}
                  onChange={handleInputChange}
                  className="sr-only"
                  aria-describedby={`inquiry-${type.value}-desc`}
                />
                <div
                  className={`px-4 py-3 rounded-xl border-2 cursor-pointer transition-all duration-200 text-center ${
                    formData.inquiryType === type.value
                      ? "border-green-500 bg-green-50 text-green-700"
                      : "border-gray-200 hover:border-green-300 focus-within:border-green-500 focus-within:ring-2 focus-within:ring-green-200 text-gray-700"
                  }`}
                  role="radio"
                  aria-checked={formData.inquiryType === type.value}
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      handleInputChange({
                        target: { name: "inquiryType", value: type.value },
                      });
                    }
                  }}
                >
                  <span className="font-medium">{type.label}</span>
                </div>
              </label>
            ))}
          </div>
        </fieldset>

        {/* Name and Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-gray-900 mb-2"
            >
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 rounded-xl border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder-gray-600 ${
                errors.name
                  ? "border-red-300 bg-red-50"
                  : "border-gray-200 hover:border-gray-300"
              }`}
              placeholder="Your full name"
              aria-invalid={errors.name ? "true" : "false"}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            {errors.name && (
              <p
                id="name-error"
                className="mt-1 text-sm text-red-600"
                role="alert"
              >
                {errors.name}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-900 mb-2"
            >
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 rounded-xl border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder-gray-600 ${
                errors.email
                  ? "border-red-300 bg-red-50"
                  : "border-gray-200 hover:border-gray-300"
              }`}
              placeholder="your@email.com"
              aria-invalid={errors.email ? "true" : "false"}
              aria-describedby={errors.email ? "email-error" : undefined}
              autoComplete="email"
            />
            {errors.email && (
              <p
                id="email-error"
                className="mt-1 text-sm text-red-600"
                role="alert"
              >
                {errors.email}
              </p>
            )}
          </div>
        </div>

        {/* Company and Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          <div>
            <label
              htmlFor="company"
              className="block text-sm font-semibold text-gray-900 mb-2"
            >
              Company Name
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 hover:border-gray-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder-gray-600"
              placeholder="Your company name"
              autoComplete="organization"
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-semibold text-gray-900 mb-2"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 rounded-xl border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder-gray-600 ${
                errors.phone
                  ? "border-red-300 bg-red-50"
                  : "border-gray-200 hover:border-gray-300"
              }`}
              placeholder="(555) 123-4567"
              aria-invalid={errors.phone ? "true" : "false"}
              aria-describedby={errors.phone ? "phone-error" : undefined}
              autoComplete="tel"
            />
            {errors.phone && (
              <p
                id="phone-error"
                className="mt-1 text-sm text-red-600"
                role="alert"
              >
                {errors.phone}
              </p>
            )}
          </div>
        </div>

        {/* Subject */}
        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-semibold text-gray-900 mb-2"
          >
            Subject *
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            required
            value={formData.subject}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 rounded-xl border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder-gray-600 ${
              errors.subject
                ? "border-red-300 bg-red-50"
                : "border-gray-200 hover:border-gray-300"
            }`}
            placeholder="What's this about?"
            aria-invalid={errors.subject ? "true" : "false"}
            aria-describedby={errors.subject ? "subject-error" : undefined}
            maxLength={100}
          />
          {errors.subject && (
            <p
              id="subject-error"
              className="mt-1 text-sm text-red-600"
              role="alert"
            >
              {errors.subject}
            </p>
          )}
          <div className="mt-1 text-xs text-gray-500">
            {formData.subject.length}/100 characters
          </div>
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-semibold text-gray-900 mb-2"
          >
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            value={formData.message}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 rounded-xl border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-y placeholder-gray-600 ${
              errors.message
                ? "border-red-300 bg-red-50"
                : "border-gray-200 hover:border-gray-300"
            }`}
            placeholder="Tell us more about what you need help with..."
            aria-invalid={errors.message ? "true" : "false"}
            aria-describedby={errors.message ? "message-error" : "message-help"}
            maxLength={1000}
          />
          {errors.message && (
            <p
              id="message-error"
              className="mt-1 text-sm text-red-600"
              role="alert"
            >
              {errors.message}
            </p>
          )}
          <div className="mt-1 flex justify-between text-xs text-gray-500">
            <span id="message-help">
              Be as detailed as possible to help us assist you better
            </span>
            <span>{formData.message.length}/1000 characters</span>
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold rounded-xl sm:rounded-2xl transition-all duration-200 shadow-lg focus:outline-none focus:ring-4 focus:ring-green-200 focus:ring-opacity-50 ${
              isSubmitting
                ? "opacity-70 cursor-not-allowed"
                : "hover:from-green-700 hover:to-emerald-700 hover:shadow-xl transform hover:scale-105"
            }`}
            aria-describedby="submit-help"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Sending Message...
              </span>
            ) : (
              "Send Message"
            )}
          </button>
          <p id="submit-help" className="text-sm text-gray-500 mt-4">
            We typically respond within 2 hours during business hours
          </p>
        </div>
      </form>
    </div>
  );
}

export default function ContactForm() {
  return (
    <ErrorBoundary>
      <ContactFormContent />
    </ErrorBoundary>
  );
}
