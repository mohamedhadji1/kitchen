import React from "react";
import { Button } from "./ui/button";
import { ChefHat, Phone, Images, Home } from "lucide-react";

const Header = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "gallery", label: "Gallery", icon: Images },
    { id: "contact", label: "Contact", icon: Phone }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-amber-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => setActiveTab("home")}>
            <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-2 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300">
              <ChefHat className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                Chef Aaron
              </h1>
              <p className="text-xs text-gray-500 font-medium">Southern Culinary Artist</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Button
                  key={item.id}
                  variant={activeTab === item.id ? "default" : "ghost"}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 ${
                    activeTab === item.id
                      ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg"
                      : "text-gray-600 hover:text-amber-600 hover:bg-amber-50"
                  }`}
                  onClick={() => setActiveTab(item.id)}
                >
                  <Icon className="w-4 h-4" />
                  <span className="font-medium">{item.label}</span>
                </Button>
              );
            })}
          </nav>

          {/* Mobile menu button */}
          <Button
            variant="outline"
            size="sm"
            className="md:hidden"
            onClick={() => setActiveTab(activeTab === "home" ? "gallery" : activeTab === "gallery" ? "contact" : "home")}
          >
            <Images className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;