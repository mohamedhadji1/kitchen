import React from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Star, Heart, Award, Users } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1640347852794-814af9f94d48')`,
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/30 to-orange-900/30"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fade-in-up">
              <Badge className="mb-6 bg-amber-500/20 text-amber-100 border-amber-300 px-4 py-2 text-sm font-medium">
                Professional Southern Chef
              </Badge>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Chef <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Aaron</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
                From Southern soul food to gourmet fusion dishes, bringing generations of culinary tradition to your table
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-8 py-4 text-lg font-medium rounded-full shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  <Heart className="w-5 h-5 mr-2" />
                  Book Chef Aaron
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-medium rounded-full backdrop-blur-sm hover:scale-105 transition-all duration-300"
                >
                  <Award className="w-5 h-5 mr-2" />
                  View Gallery
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white/95 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                A Journey Through <span className="text-amber-600">Southern Heritage</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mb-8"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <Card className="bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="bg-amber-500 p-3 rounded-full mr-4">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Southern Roots</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Aaron was raised by a southern mother from Mississippi who always cooked soul food and fusion dishes. 
                    Going to his grandmother's for Thanksgiving was the greatest time, surrounded by the most delicious dishes 
                    that would later inspire his culinary journey.
                  </p>
                  <div className="flex items-center text-amber-600">
                    <Star className="w-5 h-5 mr-2" />
                    <span className="font-semibold">Generations of Tradition</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-orange-50 to-red-50 border-orange-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="bg-orange-500 p-3 rounded-full mr-4">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">College Kitchen</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    As a basketball player in college, Aaron learned to cook after requesting those cherished family recipes. 
                    His teammates fell in love with his cooking, which gave him the motivation to learn more and develop his 
                    incredible culinary skills.
                  </p>
                  <div className="flex items-center text-orange-600">
                    <Award className="w-5 h-5 mr-2" />
                    <span className="font-semibold">Passion Ignited</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="mt-12 bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-2xl">
              <CardContent className="p-8 text-center">
                <h3 className="text-3xl font-bold mb-4">Master of Culinary Arts</h3>
                <p className="text-xl mb-6 text-amber-100">
                  Aaron's skill level at cooking allows him to create even 10-course meals such as holiday feasts! 
                  From intimate dinners to grand celebrations, Chef Aaron brings Southern hospitality and gourmet excellence to every dish.
                </p>
                <div className="flex justify-center items-center space-x-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold">10+</div>
                    <div className="text-amber-200">Course Meals</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">100+</div>
                    <div className="text-amber-200">Happy Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">5★</div>
                    <div className="text-amber-200">Reviews</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready for an <span className="text-amber-400">Amazing</span> Culinary Experience?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Aaron loves to cook and can create something amazing for you, your friends, family, and parties. 
            Let's make your next meal unforgettable!
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-10 py-4 text-lg font-medium rounded-full shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Contact Chef Aaron Today
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Hero;