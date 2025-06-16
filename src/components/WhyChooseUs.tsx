import { Card, CardContent } from "@/components/ui/card";
import { Shield, Zap, Clock, Users, Award, Headphones } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Secure & Reliable",
    description:
      "Bank-level security with SSL encryption and secure payment processing",
    gradient: "from-green-500 to-emerald-600",
    bgColor: "bg-green-50",
    iconBg: "bg-gradient-to-br from-green-500 to-emerald-600",
  },
  {
    icon: Zap,
    title: "Instant Processing",
    description:
      "Lightning-fast transactions with immediate service activation",
    gradient: "from-yellow-500 to-orange-600",
    bgColor: "bg-yellow-50",
    iconBg: "bg-gradient-to-br from-yellow-500 to-orange-600",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description:
      "Access our services anytime, anywhere with 99.9% uptime guarantee",
    gradient: "from-blue-500 to-cyan-600",
    bgColor: "bg-blue-50",
    iconBg: "bg-gradient-to-br from-blue-500 to-cyan-600",
  },
  {
    icon: Users,
    title: "Trusted by Thousands",
    description:
      "Over 50,000+ satisfied customers across Nigeria trust our platform",
    gradient: "from-purple-500 to-pink-600",
    bgColor: "bg-purple-50",
    iconBg: "bg-gradient-to-br from-purple-500 to-pink-600",
  },
  {
    icon: Award,
    title: "Best Rates",
    description:
      "Competitive pricing with regular discounts and promotional offers",
    gradient: "from-red-500 to-rose-600",
    bgColor: "bg-red-50",
    iconBg: "bg-gradient-to-br from-red-500 to-rose-600",
  },
  {
    icon: Headphones,
    title: "Expert Support",
    description: "Dedicated customer support team ready to help you 24/7",
    gradient: "from-indigo-500 to-purple-600",
    bgColor: "bg-indigo-50",
    iconBg: "bg-gradient-to-br from-indigo-500 to-purple-600",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-blue-50"></div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6 animate-fade-in">
            ⭐ Why Choose DataHub?
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-6 animate-fade-in">
            Your Trusted Digital Partner
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed animate-fade-in">
            We're committed to providing the best digital services experience in
            Nigeria with unmatched reliability and support
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Card gradient border effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg`}
              ></div>
              <div className="absolute inset-[1px] bg-white rounded-lg"></div>

              {/* Content */}
              <div className="relative z-10">
                <CardContent className="pt-8 pb-8 text-center">
                  {/* Icon with animated background */}
                  <div className="relative mb-6">
                    <div
                      className={`w-20 h-20 ${feature.iconBg} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 mx-auto`}
                    >
                      <feature.icon className="h-10 w-10 text-white" />
                    </div>
                    {/* Glow effect */}
                    <div
                      className={`absolute inset-0 w-20 h-20 ${feature.iconBg} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 mx-auto`}
                    ></div>
                  </div>

                  {/* Title with gradient text */}
                  <h3
                    className={`text-2xl font-bold mb-4 bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300`}
                  >
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed text-base group-hover:text-gray-700 transition-colors duration-300">
                    {feature.description}
                  </p>

                  {/* Decorative element */}
                  <div
                    className={`w-16 h-1 bg-gradient-to-r ${feature.gradient} rounded-full mx-auto mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  ></div>
                </CardContent>
              </div>

              {/* Background pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                <feature.icon className="w-full h-full" />
              </div>
            </Card>
          ))}
        </div>

        {/* Call to action section */}
        <div className="text-center mt-20 animate-fade-in">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ready to get started?
            </h3>
            <p className="text-gray-600 mb-8 text-lg">
              Join thousands of satisfied customers and experience the
              difference today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Get Started Now
              </button>
              <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-blue-500 hover:text-blue-600 transition-all duration-300 transform hover:scale-105">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
