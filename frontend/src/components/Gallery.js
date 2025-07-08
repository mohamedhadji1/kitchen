import React, { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { mockGalleryData } from "../data/mockData";
import { Heart, Star, ChefHat, Clock } from "lucide-react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Culinary <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">Gallery</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover Aaron's delicious creations - from Southern soul food to gourmet fusion dishes, 
            each plate tells a story of tradition, passion, and culinary excellence.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mt-8"></div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockGalleryData.map((dish, index) => (
            <Card 
              key={index} 
              className="group cursor-pointer overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-amber-200"
              onClick={() => setSelectedImage(dish)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Badge className="bg-amber-500/90 text-white mb-2">
                    <ChefHat className="w-3 h-3 mr-1" />
                    {dish.category}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors duration-300">
                  {dish.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {dish.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center text-amber-500">
                      <Star className="w-4 h-4 mr-1" />
                      <span className="text-sm font-medium">{dish.rating}</span>
                    </div>
                    <div className="flex items-center text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      <span className="text-sm">{dish.cookTime}</span>
                    </div>
                  </div>
                  <Button 
                    size="sm" 
                    variant="ghost" 
                    className="text-amber-600 hover:text-amber-700 hover:bg-amber-50 p-2"
                  >
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Signature <span className="text-amber-600">Creations</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These are some of Aaron's most celebrated dishes that showcase his mastery of Southern cuisine and innovative fusion techniques.
            </p>
          </div>

          <Card className="bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-2xl">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Holiday Feast Specialties</h3>
                  <p className="text-amber-100 mb-6 leading-relaxed">
                    Aaron's skill level allows him to create elaborate 10-course meals perfect for holiday celebrations. 
                    From traditional Southern favorites to modern fusion interpretations, every dish is crafted with love and precision.
                  </p>
                  <div className="flex items-center space-x-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold">10+</div>
                      <div className="text-amber-200 text-sm">Courses</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold">50+</div>
                      <div className="text-amber-200 text-sm">Guests Served</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold">100%</div>
                      <div className="text-amber-200 text-sm">Satisfaction</div>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1695606452743-e4b6872df715"
                    alt="Chef Aaron cooking"
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg"></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Experience Aaron's Amazing Cooking?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Whether it's an intimate dinner, family gathering, or grand celebration, 
            Chef Aaron will create an unforgettable culinary experience for you and your guests.
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-8 py-4 text-lg font-medium rounded-full shadow-xl hover:scale-105 transition-all duration-300"
          >
            Book Chef Aaron Now
          </Button>
        </div>
      </div>

      {/* Modal for selected image */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedImage.title}</h3>
              <p className="text-gray-600 mb-4">{selectedImage.description}</p>
              <div className="flex items-center justify-between">
                <Badge className="bg-amber-500 text-white">{selectedImage.category}</Badge>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center text-amber-500">
                    <Star className="w-4 h-4 mr-1" />
                    <span>{selectedImage.rating}</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{selectedImage.cookTime}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;