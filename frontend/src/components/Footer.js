import React from "react";
import { ChefHat, Phone, Mail, MessageCircle, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
              <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-2 rounded-full">
                <ChefHat className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                  Chef Aaron
                </h3>
                <p className="text-gray-400 text-sm">Southern Culinary Artist</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Bringing generations of Southern culinary tradition to your table with passion, 
              creativity, and exceptional flavor.
            </p>
          </div>

          {/* Services */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-4 text-amber-400">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-amber-400 transition-colors duration-300">Private Dinners</li>
              <li className="hover:text-amber-400 transition-colors duration-300">Event Catering</li>
              <li className="hover:text-amber-400 transition-colors duration-300">Holiday Feasts</li>
              <li className="hover:text-amber-400 transition-colors duration-300">Family Gatherings</li>
              <li className="hover:text-amber-400 transition-colors duration-300">10-Course Meals</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-4 text-amber-400">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <Phone className="w-4 h-4 text-amber-400" />
                <a href="tel:+14242830606" className="text-gray-300 hover:text-amber-400 transition-colors duration-300">
                  +1 (424) 283-0606
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <Mail className="w-4 h-4 text-amber-400" />
                <a href="mailto:automaticartinc@gmail.com" className="text-gray-300 hover:text-amber-400 transition-colors duration-300">
                  automaticartinc@gmail.com
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <MessageCircle className="w-4 h-4 text-amber-400" />
                <a 
                  href="https://wa.me/14242830606" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-amber-400 transition-colors duration-300"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="text-center">
            <p className="text-gray-400 flex items-center justify-center space-x-2">
              <span>© 2025 Chef Aaron. Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>for amazing culinary experiences.</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;