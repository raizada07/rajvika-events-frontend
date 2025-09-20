import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - Rajvika Event Planners',
  description: 'Get in touch with Rajvika Event Planners for bespoke luxury event planning services.',
};

export default function Contact() {
  return (
    <div className="min-h-screen bg-black text-white py-20 px-8 md:px-20">
      <h1 className="text-6xl font-serif text-center mb-16 text-gold-metallic uppercase tracking-wide">
        Connect With Us
      </h1>

      <section className="max-w-3xl mx-auto mb-20">
        <p className="text-center text-xl mb-12 leading-relaxed font-montserratLight">
          We would be delighted to hear from you and discuss how we can transform your vision into an extraordinary celebration. Please fill out the form below or reach out to us directly.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-900 p-10 rounded-lg shadow-xl border border-gray-800">
            <h2 className="text-3xl font-serif text-gold-metallic mb-8">Send Us a Message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-lg font-montserratLight text-gold-metallic mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-metallic text-white"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg font-montserratLight text-gold-metallic mb-2">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-metallic text-white"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-lg font-montserratLight text-gold-metallic mb-2">Phone Number (Optional)</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-metallic text-white"
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-lg font-montserratLight text-gold-metallic mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-metallic text-white"
                  placeholder="Tell us about your event needs..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gold-metallic text-black font-semibold uppercase tracking-wide text-lg py-3 rounded-md hover:bg-white hover:text-gold-metallic transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Direct Contact Info */}
          <div className="bg-gray-900 p-10 rounded-lg shadow-xl border border-gray-800 flex flex-col justify-center">
            <h2 className="text-3xl font-serif text-gold-metallic mb-8 text-center">Direct Reach</h2>
            <div className="space-y-6 text-center">
              <div>
                <p className="text-lg text-gold-metallic font-semibold mb-2">Email Us:</p>
                <a href="mailto:info@rajvikaevents.com" className="text-white hover:text-gold-metallic transition duration-300">info@rajvikaevents.com</a>
              </div>
              <div>
                <p className="text-lg text-gold-metallic font-semibold mb-2">Call Us:</p>
                <a href="tel:+919876543210" className="text-white hover:text-gold-metallic transition duration-300">+91 98765 43210</a>
              </div>
              <div>
                <p className="text-lg text-gold-metallic font-semibold mb-2">Visit Our Office:</p>
                <p className="text-white">
                  Rajvika Event Planners <br />
                  123, Luxury Tower, Grand Avenue, <br />
                  Mumbai, India - 400001
                </p>
              </div>
              <div className="mt-8">
                <p className="text-lg text-gold-metallic font-semibold mb-2">Follow Us:</p>
                <div className="flex justify-center space-x-6 text-xl">
                  <a href="#" className="text-gold-metallic hover:text-white transition duration-300"><i className="fab fa-facebook-f"></i></a> {/* Add Font Awesome or similar */}
                  <a href="#" className="text-gold-metallic hover:text-white transition duration-300"><i className="fab fa-instagram"></i></a>
                  <a href="#" className="text-gold-metallic hover:text-white transition duration-300"><i className="fab fa-linkedin-in"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}