import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Shield, Clock, Users } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Enhanced gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="7" cy="7" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div> */}

        {/* Floating orbs */}
        <div className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/3 w-48 h-48 bg-cyan-400/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Enhanced header */}
        <div className="mb-12 animate-fade-in">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-6 border border-white/30">
            🚀 Ready to Transform Your Digital Experience?
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Join the DataHub
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Revolution Today
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            Join thousands of satisfied customers who trust DataHub for all
            their digital service needs. Start saving time and money today with
            our seamless platform!
          </p>
        </div>

        {/* Enhanced action buttons */}
        <div
          className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fade-in"
          style={{ animationDelay: "200ms" }}
        >
          <Button
            size="lg"
            className="group relative text-lg px-10 py-4 bg-white text-blue-600 hover:bg-gray-100 shadow-2xl hover:shadow-white/25 transition-all duration-300 transform hover:scale-105 border-0"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-white to-gray-100 rounded-lg"></span>
            <span className="relative flex items-center">
              Create Free Account
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </Button>

          <Button
            size="lg"
            variant="ghost"
            className="group text-lg px-10 py-4 text-white border-2 border-white/30 hover:bg-white/10 hover:border-white/50 backdrop-blur-sm transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <span className="flex items-center">
              Download App
              <Download className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform duration-300" />
            </span>
          </Button>
        </div>

        {/* Enhanced trust indicators */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto animate-fade-in"
          style={{ animationDelay: "400ms" }}
        >
          <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                <Users className="h-8 w-8 text-white" />
              </div>
            </div>
            <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
              50K+
            </div>
            <div className="text-blue-100 font-medium">Happy Customers</div>
            <div className="text-blue-200 text-sm mt-2">Growing daily</div>
          </div>

          <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                <Shield className="h-8 w-8 text-white" />
              </div>
            </div>
            <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
              99.9%
            </div>
            <div className="text-blue-100 font-medium">Uptime Guarantee</div>
            <div className="text-blue-200 text-sm mt-2">Always available</div>
          </div>

          <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                <Clock className="h-8 w-8 text-white" />
              </div>
            </div>
            <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
              24/7
            </div>
            <div className="text-blue-100 font-medium">Customer Support</div>
            <div className="text-blue-200 text-sm mt-2">
              We&apos;re here to help
            </div>
          </div>
        </div>

        {/* Additional trust elements */}
        <div
          className="mt-16 animate-fade-in"
          style={{ animationDelay: "600ms" }}
        >
          <p className="text-blue-200 text-lg mb-6">
            Trusted by leading businesses across Nigeria
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-white font-semibold text-lg">MTN</div>
            <div className="text-white font-semibold text-lg">Airtel</div>
            <div className="text-white font-semibold text-lg">Glo</div>
            <div className="text-white font-semibold text-lg">9mobile</div>
            <div className="text-white font-semibold text-lg">DSTV</div>
            <div className="text-white font-semibold text-lg">GOTV</div>
          </div>
        </div>
      </div>
    </section>
  );
}
