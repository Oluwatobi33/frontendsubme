import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Smartphone, Wifi, Tv, GraduationCap, Zap, Globe } from "lucide-react";

const services = [
  {
    icon: Wifi,
    title: "Data Bundles",
    description:
      "Purchase data plans for all networks - MTN, Airtel, Glo, 9mobile",
    features: ["All Networks", "Instant Activation", "Best Rates"],
    gradient: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
    iconBg: "bg-gradient-to-br from-blue-500 to-cyan-500",
  },
  {
    icon: Smartphone,
    title: "Airtime Top-up",
    description: "Quick and easy airtime recharge for all Nigerian networks",
    features: ["All Networks", "Instant Credit", "No Extra Charges"],
    gradient: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50",
    iconBg: "bg-gradient-to-br from-purple-500 to-pink-500",
  },
  {
    icon: Tv,
    title: "TV Subscriptions",
    description: "Pay for DSTV, GOTV, Startimes, and other TV subscriptions",
    features: ["All Providers", "Auto-Renewal", "Instant Activation"],
    gradient: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50",
    iconBg: "bg-gradient-to-br from-green-500 to-emerald-500",
  },
  {
    icon: GraduationCap,
    title: "Exam Pins",
    description: "Purchase WAEC, NECO, NABTEB, and JAMB exam pins",
    features: ["All Exam Bodies", "Valid Pins", "Instant Delivery"],
    gradient: "from-orange-500 to-red-500",
    bgColor: "bg-orange-50",
    iconBg: "bg-gradient-to-br from-orange-500 to-red-500",
  },
  {
    icon: Zap,
    title: "Electricity Bills",
    description: "Pay your electricity bills for all distribution companies",
    features: ["All DISCOs", "Instant Payment", "Receipt Generation"],
    gradient: "from-yellow-500 to-orange-500",
    bgColor: "bg-yellow-50",
    iconBg: "bg-gradient-to-br from-yellow-500 to-orange-500",
  },
  {
    icon: Globe,
    title: "Internet Bills",
    description:
      "Pay for internet subscriptions - Spectranet, Smile, Swift, etc.",
    features: ["All ISPs", "Quick Payment", "Service Activation"],
    gradient: "from-indigo-500 to-purple-500",
    bgColor: "bg-indigo-50",
    iconBg: "bg-gradient-to-br from-indigo-500 to-purple-500",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50"></div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6 animate-fade-in">
            ✨ Premium Digital Services
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-6 animate-fade-in">
            Our Services
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed animate-fade-in">
            Everything you need for your digital lifestyle in one convenient
            platform
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Card gradient border effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg`}
              ></div>
              <div className="absolute inset-[1px] bg-white rounded-lg"></div>

              {/* Content */}
              <div className="relative z-10">
                <CardHeader className="pb-4">
                  {/* Icon with animated background */}
                  <div className="relative mb-6">
                    <div
                      className={`w-16 h-16 ${service.iconBg} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    {/* Glow effect */}
                    <div
                      className={`absolute inset-0 w-16 h-16 ${service.iconBg} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300`}
                    ></div>
                  </div>

                  <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-base leading-relaxed mt-2">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  {/* Features list with enhanced styling */}
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center text-gray-700 group-hover:text-gray-800 transition-colors duration-300"
                      >
                        <div
                          className={`w-2 h-2 rounded-full mr-4 bg-gradient-to-r ${service.gradient} shadow-sm`}
                        ></div>
                        <span className="text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Enhanced button */}
                  <Button
                    className={`w-full bg-gradient-to-r ${service.gradient} text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-semibold py-3 text-base`}
                  >
                    Get Started
                    <div className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">
                      →
                    </div>
                  </Button>
                </CardContent>
              </div>

              {/* Background pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                <service.icon className="w-full h-full" />
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
              Join thousands of satisfied customers who trust us with their
              digital needs
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Start Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
