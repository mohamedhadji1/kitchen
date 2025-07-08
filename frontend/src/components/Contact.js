import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Badge } from "./ui/badge";
import { Phone, Mail, MessageCircle, MapPin, Clock, Star } from "lucide-react";
import { useToast } from "../hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    guests: "",
    date: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for your inquiry. Chef Aaron will contact you soon!",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      eventType: "",
      guests: "",
      date: "",
      message: ""
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Contact <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">Chef Aaron</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to experience amazing culinary creations? Let's discuss your next event, private dinner, or special celebration.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mt-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-white/80 backdrop-blur-sm border-amber-200 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 flex items-center">
                  <Phone className="w-6 h-6 mr-3 text-amber-600" />
                  Get in Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4 p-4 bg-amber-50 rounded-lg hover:bg-amber-100 transition-colors duration-300">
                  <div className="bg-amber-500 p-3 rounded-full">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <a href="tel:+14242830606" className="text-amber-600 hover:text-amber-700 font-medium">
                      +1 (424) 283-0606
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors duration-300">
                  <div className="bg-green-500 p-3 rounded-full">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">WhatsApp</p>
                    <a 
                      href="https://wa.me/14242830606" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-700 font-medium"
                    >
                      Message on WhatsApp
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-300">
                  <div className="bg-blue-500 p-3 rounded-full">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Business Inquiries</p>
                    <a 
                      href="mailto:automaticartinc@gmail.com" 
                      className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                      automaticartinc@gmail.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Services */}
            <Card className="bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <Star className="w-6 h-6 mr-3" />
                  Our Services
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                    <div className="text-2xl font-bold mb-2">Private Dinners</div>
                    <p className="text-amber-100 text-sm">Intimate culinary experiences</p>
                  </div>
                  <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                    <div className="text-2xl font-bold mb-2">Events & Parties</div>
                    <p className="text-amber-100 text-sm">Memorable celebrations</p>
                  </div>
                  <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                    <div className="text-2xl font-bold mb-2">Holiday Feasts</div>
                    <p className="text-amber-100 text-sm">10-course meal experiences</p>
                  </div>
                  <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                    <div className="text-2xl font-bold mb-2">Family Gatherings</div>
                    <p className="text-amber-100 text-sm">Bringing families together</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="bg-white/80 backdrop-blur-sm border-amber-200 shadow-xl">
              <CardContent className="p-6">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-amber-600">10+</div>
                    <p className="text-gray-600 text-sm">Course Meals</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-orange-600">100+</div>
                    <p className="text-gray-600 text-sm">Happy Clients</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-red-600">5★</div>
                    <p className="text-gray-600 text-sm">Average Rating</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-white/80 backdrop-blur-sm border-amber-200 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">Request a Quote</CardTitle>
              <p className="text-gray-600">Tell us about your culinary needs and we'll create something amazing!</p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="border-amber-200 focus:border-amber-500 focus:ring-amber-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="border-amber-200 focus:border-amber-500 focus:ring-amber-500"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <Input
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 123-4567"
                      className="border-amber-200 focus:border-amber-500 focus:ring-amber-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Event Type</label>
                    <Input
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      placeholder="Private dinner, party, etc."
                      className="border-amber-200 focus:border-amber-500 focus:ring-amber-500"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Number of Guests</label>
                    <Input
                      name="guests"
                      type="number"
                      value={formData.guests}
                      onChange={handleChange}
                      placeholder="4"
                      className="border-amber-200 focus:border-amber-500 focus:ring-amber-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date</label>
                    <Input
                      name="date"
                      type="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="border-amber-200 focus:border-amber-500 focus:ring-amber-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more about your event, dietary preferences, or any special requests..."
                    rows={4}
                    className="border-amber-200 focus:border-amber-500 focus:ring-amber-500"
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white py-3 text-lg font-medium rounded-full shadow-xl hover:scale-105 transition-all duration-300"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Card className="bg-gradient-to-r from-gray-900 to-gray-800 text-white shadow-2xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Create Something <span className="text-amber-400">Amazing</span>?
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Aaron loves to cook and can create something amazing for you, your friends, family, and parties. 
                Don't wait - book your culinary experience today!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  asChild
                  className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-8 py-3 rounded-full shadow-xl hover:scale-105 transition-all duration-300"
                >
                  <a href="tel:+14242830606">
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now
                  </a>
                </Button>
                <Button 
                  asChild
                  variant="outline"
                  className="border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white px-8 py-3 rounded-full backdrop-blur-sm hover:scale-105 transition-all duration-300"
                >
                  <a href="https://wa.me/14242830606" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;