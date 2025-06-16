import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Zap, Building } from "lucide-react";

const pricingPlans = [
  {
    name: "Basic",
    price: "0",
    description: "Perfect for personal use",
    features: [
      "Data & Airtime Purchase",
      "Basic TV Subscriptions",
      "Standard Support",
      "Transaction History",
      "Mobile App Access",
    ],
    popular: false,
    icon: Star,
    gradient: "from-gray-500 to-slate-600",
    bgColor: "bg-gray-50",
    iconBg: "bg-gradient-to-br from-gray-500 to-slate-600",
  },
  {
    name: "Premium",
    price: "2,500",
    description: "Best for regular users",
    features: [
      "All Basic Features",
      "Priority Support",
      "Bulk Purchases",
      "API Access",
      "Custom Notifications",
      "Advanced Analytics",
    ],
    popular: true,
    icon: Zap,
    gradient: "from-blue-500 to-purple-600",
    bgColor: "bg-blue-50",
    iconBg: "bg-gradient-to-br from-blue-500 to-purple-600",
  },
  {
    name: "Business",
    price: "10,000",
    description: "For businesses and resellers",
    features: [
      "All Premium Features",
      "Reseller Dashboard",
      "White-label Solution",
      "Dedicated Account Manager",
      "Custom Integration",
      "Volume Discounts",
    ],
    popular: false,
    icon: Building,
    gradient: "from-emerald-500 to-teal-600",
    bgColor: "bg-emerald-50",
    iconBg: "bg-gradient-to-br from-emerald-500 to-teal-600",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-purple-50"></div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-6 animate-fade-in">
            💎 Choose Your Plan
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-purple-900 to-blue-900 bg-clip-text text-transparent mb-6 animate-fade-in">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed animate-fade-in">
            Choose the plan that works best for you. All plans include our core
            services with no hidden fees.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm animate-fade-in ${
                plan.popular ? "scale-105 ring-2 ring-blue-500/20" : ""
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 text-sm font-semibold shadow-lg animate-pulse">
                    ⭐ Most Popular
                  </Badge>
                </div>
              )}

              {/* Card gradient border effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${plan.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg`}
              ></div>
              <div className="absolute inset-[1px] bg-white rounded-lg"></div>

              {/* Content */}
              <div className="relative z-10">
                <CardHeader className="text-center pb-4">
                  {/* Icon with animated background */}
                  <div className="relative mb-6">
                    <div
                      className={`w-16 h-16 ${plan.iconBg} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 mx-auto`}
                    >
                      <plan.icon className="h-8 w-8 text-white" />
                    </div>
                    {/* Glow effect */}
                    <div
                      className={`absolute inset-0 w-16 h-16 ${plan.iconBg} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 mx-auto`}
                    ></div>
                  </div>

                  <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors duration-300">
                    {plan.name}
                  </CardTitle>

                  {/* Price with enhanced styling */}
                  <div className="mt-6 mb-4">
                    <div className="flex items-baseline justify-center">
                      <span className="text-sm font-medium text-gray-500">
                        ₦
                      </span>
                      <span
                        className={`text-5xl font-bold bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent`}
                      >
                        {plan.price}
                      </span>
                      <span className="text-gray-500 ml-2">/month</span>
                    </div>
                  </div>

                  <CardDescription className="text-gray-600 text-base">
                    {plan.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  {/* Features list with enhanced styling */}
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center text-gray-700 group-hover:text-gray-800 transition-colors duration-300"
                      >
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-4">
                          <Check className="h-4 w-4 text-green-600" />
                        </div>
                        <span className="text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Enhanced button */}
                  <Button
                    className={`w-full ${
                      plan.popular
                        ? `bg-gradient-to-r ${plan.gradient} text-white shadow-lg hover:shadow-xl border-0`
                        : "border-2 border-gray-200 hover:border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
                    } transition-all duration-300 transform hover:scale-105 font-semibold py-3 text-base`}
                  >
                    {plan.price === "0" ? "Get Started Free" : "Choose Plan"}
                    <div className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">
                      →
                    </div>
                  </Button>
                </CardContent>
              </div>

              {/* Background pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                <plan.icon className="w-full h-full" />
              </div>
            </Card>
          ))}
        </div>

        {/* Call to action section */}
        <div className="text-center mt-20 animate-fade-in">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Need a custom solution?
            </h3>
            <p className="text-gray-600 mb-8 text-lg">
              Contact our team to discuss enterprise pricing and custom features
              tailored to your business needs
            </p>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-gray-300 hover:border-purple-500 hover:text-purple-600 px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
