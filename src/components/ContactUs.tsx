import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
  Headphones,
} from "lucide-react";

const contactMethods = [
  {
    icon: MapPin,
    title: "Our Office",
    content: (
      <>
        123 Technology Drive
        <br />
        Victoria Island, Lagos
        <br />
        Nigeria
      </>
    ),
    gradient: "from-blue-500 to-cyan-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: Phone,
    title: "Phone",
    content: (
      <>
        +234 800 DATA HUB
        <br />
        +234 800 3282 482
      </>
    ),
    gradient: "from-green-500 to-emerald-600",
    bgColor: "bg-green-50",
  },
  {
    icon: Mail,
    title: "Email",
    content: (
      <>
        support@datahub.ng
        <br />
        info@datahub.ng
      </>
    ),
    gradient: "from-purple-500 to-pink-600",
    bgColor: "bg-purple-50",
  },
  {
    icon: Clock,
    title: "Business Hours",
    content: (
      <>
        Monday - Friday: 8:00 AM - 8:00 PM
        <br />
        Saturday - Sunday: 10:00 AM - 6:00 PM
        <br />
        <span className="text-blue-600 font-medium">24/7 Online Support</span>
      </>
    ),
    gradient: "from-orange-500 to-red-600",
    bgColor: "bg-orange-50",
  },
];

export default function ContactUs() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Enhanced background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-blue-50"></div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 text-sm font-medium mb-6 animate-fade-in">
            💬 Get in Touch
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-6 animate-fade-in">
            We're Here to Help
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed animate-fade-in">
            Have questions or need support? Our dedicated team is ready to
            assist you 24/7.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Enhanced Contact Form */}
          <Card className="group relative overflow-hidden border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 bg-white/80 backdrop-blur-sm animate-fade-in">
            {/* Gradient border effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
            <div className="absolute inset-[1px] bg-white rounded-lg"></div>

            <div className="relative z-10">
              <CardHeader className="text-center pb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Send className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl md:text-3xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Send us a Message
                </CardTitle>
                <CardDescription className="text-lg text-gray-600">
                  Fill out the form below and we'll get back to you within 24
                  hours.
                </CardDescription>
              </CardHeader>

              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label
                        htmlFor="firstName"
                        className="text-sm font-semibold text-gray-700"
                      >
                        First Name
                      </Label>
                      <Input
                        id="firstName"
                        placeholder="John"
                        className="h-12 border-2 border-gray-200 focus:border-blue-500 transition-colors duration-300"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="lastName"
                        className="text-sm font-semibold text-gray-700"
                      >
                        Last Name
                      </Label>
                      <Input
                        id="lastName"
                        placeholder="Doe"
                        className="h-12 border-2 border-gray-200 focus:border-blue-500 transition-colors duration-300"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="email"
                      className="text-sm font-semibold text-gray-700"
                    >
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      className="h-12 border-2 border-gray-200 focus:border-blue-500 transition-colors duration-300"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="phone"
                      className="text-sm font-semibold text-gray-700"
                    >
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+234 800 000 0000"
                      className="h-12 border-2 border-gray-200 focus:border-blue-500 transition-colors duration-300"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="subject"
                      className="text-sm font-semibold text-gray-700"
                    >
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      placeholder="How can we help you?"
                      className="h-12 border-2 border-gray-200 focus:border-blue-500 transition-colors duration-300"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="message"
                      className="text-sm font-semibold text-gray-700"
                    >
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us more about your inquiry..."
                      rows={4}
                      className="border-2 border-gray-200 focus:border-blue-500 transition-colors duration-300 resize-none"
                    />
                  </div>

                  <Button className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </div>
          </Card>

          {/* Enhanced Contact Information */}
          <div
            className="space-y-6 animate-fade-in"
            style={{ animationDelay: "200ms" }}
          >
            {contactMethods.map((method, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 bg-white/80 backdrop-blur-sm"
                style={{ animationDelay: `${(index + 1) * 150}ms` }}
              >
                {/* Gradient border effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${method.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg`}
                ></div>
                <div className="absolute inset-[1px] bg-white rounded-lg"></div>

                <div className="relative z-10">
                  <CardContent className="pt-8 pb-8">
                    <div className="flex items-start space-x-6">
                      <div
                        className={`w-14 h-14 bg-gradient-to-br ${method.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        <method.icon className="h-7 w-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3
                          className={`text-xl font-bold text-gray-900 mb-3 bg-gradient-to-r ${method.gradient} bg-clip-text group-hover:text-transparent transition-all duration-300`}
                        >
                          {method.title}
                        </h3>
                        <div className="text-gray-600 leading-relaxed">
                          {method.content}
                        </div>
                      </div>
                    </div>

                    {/* Decorative gradient line */}
                    <div
                      className={`w-full h-1 bg-gradient-to-r ${method.gradient} rounded-full mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    ></div>
                  </CardContent>
                </div>
              </Card>
            ))}

            {/* Quick contact options */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              <Button
                variant="outline"
                className="h-14 group border-2 border-blue-200 hover:border-blue-500 hover:bg-blue-50 transition-all duration-300"
              >
                <MessageCircle className="mr-2 h-5 w-5 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-blue-600 font-semibold">Live Chat</span>
              </Button>

              <Button
                variant="outline"
                className="h-14 group border-2 border-green-200 hover:border-green-500 hover:bg-green-50 transition-all duration-300"
              >
                <Headphones className="mr-2 h-5 w-5 text-green-600 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-green-600 font-semibold">
                  Call Support
                </span>
              </Button>
            </div>

            {/* Response time indicator */}
            <div className="text-center mt-8">
              <Badge className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 px-4 py-2 text-sm font-medium border-0">
                ⚡ Average response time: 2 hours
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
