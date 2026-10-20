'use client';

import { FormEvent, useState } from 'react';
import Link from 'next/link';
import { 
  BUSINESS_NAME, 
  PHONE, 
  PHONE_DISPLAY, 
  EMAIL, 
  FULL_ADDRESS, 
  HOURS, 
  INSTAGRAM, 
  GOOGLE_MAPS_URL, 
  getWhatsAppUrl 
} from '@/lib/constants';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    requirement: 'Wooden Furniture & Beds',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = `Hello Treescape Living, my name is ${formData.name}.
Phone: ${formData.phone}
Requirement: ${formData.requirement}
Message: ${formData.message}`;
    
    const url = getWhatsAppUrl(text);
    window.open(url, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="bg-[#F8F5F0] text-[#3D2B1F] min-h-screen">
      
      {/* Breadcrumb */}
      <div className="bg-[#FAF8F3] py-3.5 border-b border-[#E8E2D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs text-[#5C3D2E]">
          <Link href="/" className="hover:text-[#2D5A3D]">Home</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-[#3D2B1F] font-semibold">Contact & Showroom</span>
        </div>
      </div>

      {/* Header */}
      <section className="py-14 sm:py-20 bg-[#FDFBF7] border-b border-[#E8E2D8] text-center">
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#2D5A3D]">
            Visit or Message Our Team
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#3D2B1F] mt-2 mb-4">
            Contact & Showroom
          </h1>
          <p className="max-w-2xl mx-auto text-xs sm:text-sm text-[#5C3D2E] leading-relaxed">
            Our physical furniture showroom is open daily from 9:30 AM to 9:30 PM on Sarjapur Road, opposite Prestige City. Drop in to experience our furniture or connect with our team on WhatsApp.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Contact Details Column */}
          <div className="space-y-8">
            <div>
              <span className="text-xs font-semibold tracking-widest uppercase text-[#2D5A3D]">Showroom Location</span>
              <h2 className="font-serif text-3xl font-semibold text-[#3D2B1F] mt-1 mb-4">
                Visit Us in Bengaluru
              </h2>
              <p className="text-xs sm:text-sm text-[#5C3D2E] leading-relaxed">
                Experience tactile timber grain, test sofa ergonomics, and inspect bed joinery in person. Walk-ins are always welcome.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E2D8] shadow-sm space-y-6">
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#2D5A3D]/10 text-[#2D5A3D] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500">Address</h3>
                  <p className="text-sm font-semibold text-[#3D2B1F] mt-0.5">{BUSINESS_NAME}</p>
                  <p className="text-xs sm:text-sm text-[#5C3D2E] leading-relaxed mt-0.5">
                    {FULL_ADDRESS}
                  </p>
                  <p className="text-xs text-[#7C9A6E] mt-1 font-medium">Directly opposite Prestige City, Sarjapur Road</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#2D5A3D]/10 text-[#2D5A3D] flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500">Showroom Hours</h3>
                  <p className="text-sm font-semibold text-[#3D2B1F] mt-0.5">{HOURS}</p>
                  <p className="text-xs text-[#5C3D2E]">Open all 7 days of the week</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#2D5A3D]/10 text-[#2D5A3D] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500">Phone & WhatsApp</h3>
                  <a href={`tel:${PHONE}`} className="text-sm font-bold text-[#2D5A3D] hover:underline block mt-0.5">
                    {PHONE_DISPLAY}
                  </a>
                  <p className="text-xs text-[#5C3D2E]">Direct showroom line & WhatsApp</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#2D5A3D]/10 text-[#2D5A3D] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500">Email</h3>
                  <a href={`mailto:${EMAIL}`} className="text-xs sm:text-sm text-[#3D2B1F] hover:underline block mt-0.5">
                    {EMAIL}
                  </a>
                </div>
              </div>

            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap gap-3.5">
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-[#3D2B1F] hover:bg-[#2D2420] text-white text-xs font-bold uppercase tracking-wider rounded-md shadow flex items-center gap-2"
              >
                <MapPin className="w-4 h-4 text-[#C9A84C]" />
                <span>Get Directions</span>
              </a>

              <a
                href={`tel:${PHONE}`}
                className="px-6 py-3.5 border border-[#3D2B1F] text-[#3D2B1F] hover:bg-[#FAF8F3] text-xs font-bold uppercase tracking-wider rounded-md flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call: {PHONE_DISPLAY}</span>
              </a>

              <a
                href={getWhatsAppUrl('Hello Treescape Living, I would like directions and assistance to visit your showroom today.')}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-[#2D5A3D] hover:bg-[#234730] text-white text-xs font-bold uppercase tracking-wider rounded-md shadow flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp</span>
              </a>
            </div>

          </div>

          {/* Form Column */}
          <div className="bg-white rounded-2xl p-8 sm:p-10 border border-[#E8E2D8] shadow-md">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#2D5A3D]">Online Enquiry</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#3D2B1F] mt-1 mb-2">
              Send an Enquiry
            </h2>
            <p className="text-xs text-[#5C3D2E] mb-6">
              Fill in your details below and submit to instantly connect with our showroom team via WhatsApp.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-[#3D2B1F] mb-1">
                  Your Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-[#E8E2D8] text-sm focus:outline-none focus:ring-2 focus:ring-[#2D5A3D] bg-[#FAF8F3]"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-[#3D2B1F] mb-1">
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  required
                  placeholder="e.g. 9876543210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-[#E8E2D8] text-sm focus:outline-none focus:ring-2 focus:ring-[#2D5A3D] bg-[#FAF8F3]"
                />
              </div>

              <div>
                <label htmlFor="requirement" className="block text-xs font-semibold uppercase tracking-wider text-[#3D2B1F] mb-1">
                  Requirement Category
                </label>
                <select
                  id="requirement"
                  value={formData.requirement}
                  onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-[#E8E2D8] text-sm focus:outline-none focus:ring-2 focus:ring-[#2D5A3D] bg-[#FAF8F3]"
                >
                  <option value="Wooden Beds & Bedroom Suites">Wooden Beds & Bedroom Suites</option>
                  <option value="Living Room Sofas & Seating">Living Room Sofas & Seating</option>
                  <option value="Dining Furniture & Tables">Dining Furniture & Tables</option>
                  <option value="Custom Furniture Atelier">Custom Furniture Atelier</option>
                  <option value="Wardrobes & Storage">Wardrobes & Storage</option>
                  <option value="Kitchen Cabinets">Kitchen Cabinets</option>
                  <option value="Interior Design & Painting">Interior Design & Painting</option>
                  <option value="Other Furniture Query">Other Furniture Query</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-[#3D2B1F] mb-1">
                  Your Requirements / Room Dimensions
                </label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  placeholder="Tell us about the size, timber preferences, or designs you liked..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-[#E8E2D8] text-sm focus:outline-none focus:ring-2 focus:ring-[#2D5A3D] bg-[#FAF8F3]"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 bg-[#2D5A3D] hover:bg-[#234730] text-white text-xs font-bold uppercase tracking-widest rounded-lg shadow-md transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit Enquiry via WhatsApp</span>
              </button>

              {submitted && (
                <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg text-emerald-800 text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Enquiry formatted. WhatsApp opened in a new tab.</span>
                </div>
              )}
            </form>
          </div>

        </div>
      </div>

    </div>
  );
}
