import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Adebayo Johnson",
    role: "Small Business Owner",
    content:
      "DataHub has made managing my business communications so much easier. The bulk purchase feature saves me time and money.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    initials: "AJ",
    category: "Business",
  },
  {
    name: "Fatima Mohammed",
    role: "Student",
    content:
      "Purchasing my JAMB and WAEC pins was seamless. The instant delivery feature is amazing, and customer support is top-notch.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b5c8?w=100&h=100&fit=crop&crop=face",
    initials: "FM",
    category: "Education",
  },
  {
    name: "Chinedu Okafor",
    role: "IT Professional",
    content:
      "The API integration for my app was straightforward. DataHub provides reliable service with excellent uptime.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    initials: "CO",
    category: "Technology",
  },
  {
    name: "Sarah Williams",
    role: "Freelancer",
    content:
      "I love how I can pay all my bills in one place. From data to electricity bills, DataHub has everything I need.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    initials: "SW",
    category: "Lifestyle",
  },
  {
    name: "Ibrahim Yusuf",
    role: "Entrepreneur",
    content:
      "The reseller program has been a game-changer for my business. Great margins and excellent support from the team.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    initials: "IY",
    category: "Business",
  },
  {
    name: "Grace Eze",
    role: "Teacher",
    content:
      "Reliable service every time. I recommend DataHub to all my colleagues for their data and airtime needs.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
    initials: "GE",
    category: "Education",
  },
];

const getCategoryColor = (category: string) => {
  const colors = {
    Business: "bg-blue-100 text-blue-700",
    Education: "bg-green-100 text-green-700",
    Technology: "bg-purple-100 text-purple-700",
    Lifestyle: "bg-orange-100 text-orange-700",
  };
  return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-700";
};

export default function Testimonials() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Enhanced background with gradient and patterns */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50"></div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 text-sm font-medium mb-6 animate-fade-in">
            💬 Customer Stories
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-6 animate-fade-in">
            What Our Customers Say
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed animate-fade-in">
            Don't just take our word for it. Here's what our satisfied customers
            have to say about their experience.
          </p>
        </div>

        {/* Enhanced testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Gradient border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
              <div className="absolute inset-[1px] bg-white rounded-lg"></div>

              {/* Content */}
              <div className="relative z-10">
                <CardContent className="pt-8 pb-8">
                  {/* Quote icon and category badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="relative">
                      <Quote className="h-8 w-8 text-blue-500/20 absolute -top-2 -left-2" />
                      <Quote className="h-6 w-6 text-blue-500" />
                    </div>
                    <Badge
                      className={`${getCategoryColor(
                        testimonial.category
                      )} border-0 text-xs`}
                    >
                      {testimonial.category}
                    </Badge>
                  </div>

                  {/* Star rating with animation */}
                  <div className="flex items-center mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-400 fill-current group-hover:scale-110 transition-transform duration-300"
                        style={{ animationDelay: `${i * 100}ms` }}
                      />
                    ))}
                    <span className="ml-2 text-sm text-gray-500 font-medium">
                      5.0
                    </span>
                  </div>

                  {/* Testimonial content */}
                  <p className="text-gray-700 mb-6 italic leading-relaxed text-lg group-hover:text-gray-900 transition-colors duration-300">
                    "{testimonial.content}"
                  </p>

                  {/* User info with enhanced avatar */}
                  <div className="flex items-center">
                    <div className="relative">
                      <Avatar className="w-14 h-14 border-2 border-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <AvatarImage
                          src={testimonial.avatar}
                          alt={testimonial.name}
                        />
                        <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white font-semibold">
                          {testimonial.initials}
                        </AvatarFallback>
                      </Avatar>
                      {/* Online indicator */}
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-bold text-gray-900 text-lg group-hover:text-blue-600 transition-colors duration-300">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-600 font-medium">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>

                  {/* Decorative element */}
                  <div className="absolute top-6 right-6 w-16 h-16 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                    <Quote className="w-full h-full" />
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="text-center mt-20 animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-blue-600">
                4.9/5
              </div>
              <p className="text-gray-600">Average Rating</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-green-600">
                50,000+
              </div>
              <p className="text-gray-600">Happy Customers</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-purple-600">
                99.9%
              </div>
              <p className="text-gray-600">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
