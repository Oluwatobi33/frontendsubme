import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Shield,
  Zap,
  Clock,
  GraduationCap,
  Smartphone,
  Tv,
  Bolt,
  Star,
  Users,
  CheckCircle,
} from "lucide-react";

export default function Hero() {
  const [currentService, setCurrentService] = useState(0);
  const [stats, setStats] = useState({
    users: 0,
    transactions: 0,
    uptime: 0,
  });

  const services = [
    { name: "Exam Pins", icon: GraduationCap, color: "text-green-500" },
    { name: "Data Bundles", icon: Smartphone, color: "text-blue-500" },
    { name: "Electricity Bills", icon: Bolt, color: "text-yellow-500" },
    { name: "TV Subscriptions", icon: Tv, color: "text-purple-500" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % services.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Animate stats on mount
    const animateValue = (start, end, duration, callback) => {
      const startTime = Date.now();
      const timer = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const value = Math.floor(start + (end - start) * progress);
        callback(value);
        if (progress === 1) clearInterval(timer);
      }, 16);
    };

    animateValue(0, 50000, 2000, (val) =>
      setStats((prev) => ({ ...prev, users: val }))
    );
    animateValue(0, 1000000, 2500, (val) =>
      setStats((prev) => ({ ...prev, transactions: val }))
    );
    animateValue(0, 99.9, 1500, (val) =>
      setStats((prev) => ({ ...prev, uptime: val }))
    );
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Main Heading with Animation */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 leading-tight">
              Nigeria's Premier
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
                Digital Hub
              </span>
            </h1>

            {/* Dynamic Service Display */}
            <div className="flex items-center justify-center space-x-3 mb-6">
              <span className="text-xl text-blue-200">Specializing in</span>
              <div className="relative h-12 w-48 flex items-center justify-center">
                {services.map((service, index) => (
                  <div
                    key={service.name}
                    className={`absolute flex items-center space-x-2 transition-all duration-500 ${
                      index === currentService
                        ? "opacity-100 scale-100 translate-y-0"
                        : "opacity-0 scale-75 translate-y-4"
                    }`}
                  >
                    <service.icon className={`h-6 w-6 ${service.color}`} />
                    <span className="text-xl font-semibold text-white">
                      {service.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
            Buy WAEC, NECO, NABTEB exam pins, data bundles, pay electricity
            bills, and TV subscriptions.
            <span className="text-cyan-300 font-semibold">
              {" "}
              Fast, secure, and trusted by thousands.
            </span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button
              size="lg"
              className="text-lg px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-200 shadow-2xl"
            >
              <Smartphone className="mr-3 h-5 w-5" />
              Start Shopping
              <ArrowRight className="ml-3 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-10 py-4 border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm transform hover:scale-105 transition-all duration-200"
            >
              <GraduationCap className="mr-3 h-5 w-5" />
              View Services
            </Button>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 transform hover:scale-105 transition-all duration-300">
              <Users className="h-10 w-10 text-cyan-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">
                {stats.users.toLocaleString()}+
              </div>
              <div className="text-blue-200">Happy Customers</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 transform hover:scale-105 transition-all duration-300">
              <CheckCircle className="h-10 w-10 text-green-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">
                {stats.transactions.toLocaleString()}+
              </div>
              <div className="text-blue-200">Transactions</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 transform hover:scale-105 transition-all duration-300">
              <Star className="h-10 w-10 text-yellow-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">
                {stats.uptime.toFixed(1)}%
              </div>
              <div className="text-blue-200">Uptime</div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-3 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <Shield className="h-8 w-8 text-green-400" />
              <span className="text-white font-semibold">
                Bank-Level Security
              </span>
            </div>
            <div className="flex items-center justify-center space-x-3 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <Zap className="h-8 w-8 text-yellow-400" />
              <span className="text-white font-semibold">Instant Delivery</span>
            </div>
            <div className="flex items-center justify-center space-x-3 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <Clock className="h-8 w-8 text-blue-400" />
              <span className="text-white font-semibold">24/7 Support</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
