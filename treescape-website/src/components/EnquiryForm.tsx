'use client';

import { useState } from 'react';
import { getWhatsAppUrl, EMAIL } from '@/lib/constants';

interface FormData {
  name: string;
  phone: string;
  requirement: string;
  message: string;
}

export default function EnquiryForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    requirement: '',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validate = () => {
    const newErrors: Partial<FormData> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/[^0-9]/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    if (!formData.requirement) newErrors.requirement = 'Please select a requirement';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const text = `New Enquiry from Website
Name: ${formData.name}
Phone: ${formData.phone}
Looking for: ${formData.requirement}
Message: ${formData.message || 'N/A'}`;

    try {
      // Try opening WhatsApp
      window.open(getWhatsAppUrl(text), '_blank');
    } catch (err) {
      // Fallback to mailto
      window.location.href = `mailto:${EMAIL}?subject=New Enquiry: ${formData.requirement}&body=${encodeURIComponent(text)}`;
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-lg mx-auto w-full">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Full Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-green-600'} focus:outline-none focus:ring-2 focus:border-transparent transition-shadow`}
          placeholder="John Doe"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? 'name-error' : undefined}
        />
        {errors.name && <p id="name-error" className="mt-1 text-sm text-red-600">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
          Phone Number *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-lg border ${errors.phone ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-green-600'} focus:outline-none focus:ring-2 focus:border-transparent transition-shadow`}
          placeholder="+91 98765 43210"
          aria-invalid={!!errors.phone}
          aria-describedby={errors.phone ? 'phone-error' : undefined}
        />
        {errors.phone && <p id="phone-error" className="mt-1 text-sm text-red-600">{errors.phone}</p>}
      </div>

      <div>
        <label htmlFor="requirement" className="block text-sm font-medium text-gray-700 mb-1">
          What are you looking for? *
        </label>
        <select
          id="requirement"
          name="requirement"
          value={formData.requirement}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-lg border bg-white ${errors.requirement ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-green-600'} focus:outline-none focus:ring-2 focus:border-transparent transition-shadow`}
          aria-invalid={!!errors.requirement}
          aria-describedby={errors.requirement ? 'requirement-error' : undefined}
        >
          <option value="">Select a category</option>
          <option value="Furniture">Standard Furniture</option>
          <option value="Custom Furniture">Custom Furniture</option>
          <option value="Interior Design">Complete Interior Design</option>
          <option value="Kitchen">Modular Kitchen</option>
          <option value="Wardrobes">Custom Wardrobes</option>
          <option value="Other">Other</option>
        </select>
        {errors.requirement && <p id="requirement-error" className="mt-1 text-sm text-red-600">{errors.requirement}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Additional Details (Optional)
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-green-600 focus:outline-none focus:ring-2 focus:border-transparent transition-shadow resize-y"
          placeholder="Tell us about your space, preferred style, or any specific requirements..."
        />
      </div>

      <button
        type="submit"
        className="w-full bg-green-700 hover:bg-green-800 text-white font-medium py-4 px-6 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 shadow-sm flex justify-center items-center gap-2"
      >
        <span>Send Enquiry</span>
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </button>
    </form>
  );
}
