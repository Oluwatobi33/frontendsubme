"use client";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  Smartphone,
  GraduationCap,
  Zap,
  ChevronDown,
  User,
  Wallet,
} from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const services = [
    { name: "WAEC Pins", icon: GraduationCap, href: "/waec" },
    { name: "NECO Pins", icon: GraduationCap, href: "/neco" },
    { name: "NABTEB Pins", icon: GraduationCap, href: "/nabteb" },
    { name: "Electricity Bills", icon: Zap, href: "/electricity" },
    { name: "Data Bundles", icon: Smartphone, href: "/data" },
  ];

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-700 shadow-xl sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-white/20 rounded-full blur-sm group-hover:blur-md transition-all"></div>
                <div className="relative bg-white/10 backdrop-blur-sm rounded-full p-2 border border-white/20">
                  <Smartphone className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white">DataHub</span>
                <span className="text-xs text-blue-100 -mt-1">
                  Nigeria&apos;s #1 Platform
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center space-x-1 px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
              >
                <span>Services</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 z-50">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      onClick={() => setServicesOpen(false)}
                    >
                      <service.icon className="h-5 w-5" />
                      <span className="font-medium">{service.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="#pricing"
              className="px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
            >
              Pricing
            </Link>
            <Link
              href="#about"
              className="px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
            >
              About
            </Link>
            <Link
              href="#contact"
              className="px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
            >
              Contact
            </Link>

            <div className="flex items-center space-x-3 ml-4 pl-4 border-l border-white/20">
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:bg-white/10 hover:text-white border border-white/20"
              >
                <User className="h-4 w-4 mr-2" />
                Login
              </Button>
              <Button
                size="sm"
                className="bg-white text-blue-600 hover:bg-blue-50 font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
              >
                <Wallet className="h-4 w-4 mr-2" />
                Get Started
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:bg-white/10 p-2 rounded-lg transition-colors"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-white/20">
            <div className="px-2 pt-4 pb-3 space-y-1 bg-gradient-to-b from-blue-600/95 to-purple-700/95 backdrop-blur-sm">
              {/* Mobile Services */}
              <div className="px-3 py-2">
                <div className="text-white/80 font-medium mb-2">Services</div>
                <div className="space-y-1 ml-4">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="flex items-center space-x-3 px-3 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      <service.icon className="h-4 w-4" />
                      <span>{service.name}</span>
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="#pricing"
                className="block px-3 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-colors mx-2"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="#about"
                className="block px-3 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-colors mx-2"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="#contact"
                className="block px-3 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-colors mx-2"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>

              <div className="px-3 py-4 space-y-2 border-t border-white/20 mt-4">
                <Button
                  variant="ghost"
                  className="w-full text-white hover:bg-white/10 hover:text-white border border-white/20"
                >
                  <User className="h-4 w-4 mr-2" />
                  Login
                </Button>
                <Button className="w-full bg-white text-blue-600 hover:bg-blue-50 font-semibold">
                  <Wallet className="h-4 w-4 mr-2" />
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
