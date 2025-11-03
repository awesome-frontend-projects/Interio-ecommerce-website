"use client";
import {
  RiFacebookFill,
  RiInstagramLine,
  RiTwitterXLine,
} from "@remixicon/react";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-grey-clr-2 text-white py-10">
      <div className="container grid gap-10 md:grid-cols-4">
        {/* Brand Info */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Interio</h3>
          <p className="text-gray-400 leading-relaxed">
            Elevate your space with timeless furniture and elegant decor pieces
            crafted with passion and precision.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Shop
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Customer Care */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Customer Care</h4>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="#" className="hover:text-white transition-colors">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Shipping & Returns
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>

        {/* Contact & Socials */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Get In Touch</h4>
          <p className="text-gray-400 mb-3">Email: support@interio.com</p>
          <p className="text-gray-400 mb-5">Phone: +1 234 567 890</p>

          <div className="flex items-center gap-4">
            <a
              href="#"
              className="bg-indigo-600 p-2.5 rounded-full hover:bg-indigo-700 transition-colors"
            >
              <RiFacebookFill size={20} />
            </a>
            <a
              href="#"
              className="bg-indigo-600 p-2.5 rounded-full hover:bg-indigo-700 transition-colors"
            >
              <RiInstagramLine size={20} />
            </a>
            <a
              href="#"
              className="bg-indigo-600 p-2.5 rounded-full hover:bg-indigo-700 transition-colors"
            >
              <RiTwitterXLine size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Interio. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
