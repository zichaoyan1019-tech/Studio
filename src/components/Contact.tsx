import React, { useState } from 'react';
import FadeIn from './FadeIn';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState<null | 'success'>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setStatus('success');
    setTimeout(() => setStatus(null), 5000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        
        {/* Contact Info */}
        <div>
          <FadeIn>
            <h4 className="text-brand-gold font-sans font-medium tracking-widest uppercase text-xs mb-3">Get in Touch</h4>
            <h2 className="text-4xl md:text-5xl font-serif text-brand-dark mb-6 leading-tight">
              Ready to start your musical journey?
            </h2>
            <p className="font-sans font-light text-brand-dark/70 mb-12 max-w-md">
              Whether you're looking to book a trial lesson or simply have questions about the studio, please feel free to reach out.
            </p>

            <div className="space-y-8 font-sans">
              <div className="flex items-start">
                <MapPin className="text-brand-gold mr-4 flex-shrink-0" size={24} />
                <div>
                  <strong className="block text-brand-dark font-medium mb-1">Studio Location</strong>
                  <span className="text-brand-dark/70 font-light">Music Addition<br/>Bloomington, IN</span>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="text-brand-gold mr-4 flex-shrink-0" size={24} />
                <div>
                  <strong className="block text-brand-dark font-medium mb-1">Email</strong>
                  <a href="mailto:hello@ariastudio.com" className="text-brand-dark/70 font-light hover:text-brand-gold transition-colors">
                    hello@ariastudio.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="text-brand-gold mr-4 flex-shrink-0" size={24} />
                <div>
                  <strong className="block text-brand-dark font-medium mb-1">Phone</strong>
                  <a href="tel:+11234567890" className="text-brand-dark/70 font-light hover:text-brand-gold transition-colors">
                    (123) 456-7890
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <MessageCircle className="text-brand-gold mr-4 flex-shrink-0" size={24} />
                <div>
                  <strong className="block text-brand-dark font-medium mb-1">WeChat</strong>
                  <span className="text-brand-dark/70 font-light">AriaPianoStudio</span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Form */}
        <div>
          <FadeIn delay={0.2}>
            <div className="bg-brand-light p-8 md:p-12 rounded-sm shadow-sm border border-brand-stone/60">
              <h3 className="text-2xl font-serif text-brand-dark mb-6">Book a Trial Lesson</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-brand-dark mb-2">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    className="w-full px-4 py-3 bg-white border border-brand-stone focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none transition-all rounded-sm font-sans font-light"
                    placeholder="Jane Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-brand-dark mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    required
                    className="w-full px-4 py-3 bg-white border border-brand-stone focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none transition-all rounded-sm font-sans font-light"
                    placeholder="jane@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-brand-dark mb-2">Your Message</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    required
                    className="w-full px-4 py-3 bg-white border border-brand-stone focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none transition-all rounded-sm font-sans font-light resize-none"
                    placeholder="Tell me a little about your musical background and goals..."
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full px-6 py-4 bg-brand-dark text-white font-medium tracking-wide hover:bg-brand-gold transition-colors duration-300 rounded-sm"
                >
                  Confirm Booking Request
                </button>

                {status === 'success' && (
                  <p className="text-center text-brand-gold font-medium text-sm mt-4">
                    Thank you! Your message has been sent successfully.
                  </p>
                )}
              </form>
            </div>
          </FadeIn>
        </div>

      </div>
    </section>
  );
}
