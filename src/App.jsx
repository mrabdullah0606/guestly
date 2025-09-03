import { useState } from "react";

import "./App.css";

function App() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Property Owner",
      location: "Miami, FL",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/testimonial-1-ak9oGQuZotpt8ZkXayjkTkM6YuQ4c7.png",
      rating: 5,
      text: "Guestly transformed my vacation rental business! Their automated messaging and seamless booking management increased my occupancy rate by 40%. I can finally focus on growing my portfolio instead of managing day-to-day operations.",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Airbnb Host",
      location: "San Francisco, CA",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/testimonial-2-ATNNFdwIp6XfNdWiclFwBmhiN04a9H.png",
      rating: 5,
      text: "The 24/7 guest support and professional cleaning coordination through Guestly has earned me consistently 5-star reviews. My guests love the smooth check-in process and quick response times.",
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "Multi-Property Manager",
      location: "Austin, TX",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/testimonial-3-Rp8fZ37VrRSLQBzqfDHn3wSAonNt4P.png",
      rating: 5,
      text: "Managing 15 properties across multiple platforms was overwhelming until I found Guestly. Their unified dashboard and automated pricing optimization have increased my revenue by 35% while reducing my workload significantly.",
    },
    {
      id: 4,
      name: "David Thompson",
      role: "Vacation Rental Owner",
      location: "Orlando, FL",
      image:
        " https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/testimonial-4-IOpXQE159moBbVGxsfSgGwTz1LHXl2.png",
      rating: 5,
      text: "Guestly's maintenance coordination and guest communication tools are game-changers. I've gone from spending 20 hours a week on management to just 2 hours, and my guest satisfaction scores have never been higher.",
    },
    {
      id: 5,
      name: "Lisa Park",
      role: "Property Investor",
      location: "Nashville, TN",
      image:
        " https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/testimonial-5-jN2RPHBCKTMoPyYbfu8M1AHfsGOpXW.png",
      rating: 5,
      text: "The detailed analytics and revenue optimization features helped me identify the best pricing strategies. My properties now generate 25% more income compared to when I was managing everything manually.",
    },
    {
      id: 6,
      name: "Robert Martinez",
      role: "Boutique Hotel Owner",
      location: "Savannah, GA",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/testimonial-6-Mwd8HegnS0ytiJXJhIO7drcKJKViUp.png",
      rating: 5,
      text: "Switching to Guestly was the best decision for our boutique hotel. The professional guest experience and streamlined operations have improved our online ratings and repeat bookings dramatically.",
    },
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={`star ${index < rating ? "filled" : ""}`}>
        ★
      </span>
    ));
  };

  // Team member
  const [currentSlide, setCurrentSlide] = useState(0);

  const teamMembers = [
    {
      id: 1,
      name: "Nancy",
      image:
        "https://res.cloudinary.com/damvrxl9f/image/upload/v1756290057/dd4d0e34-8d14-419c-8d6b-e91f4475a5d3_cq4dge.jpg",
      expertise: "EXPERT IN GUEST COMMUNICATION",
      services: [
        "Your Trusted Airbnb Virtual Assistant With 7+ years of customer service experience, I help Airbnb hosts save time and deliver 5-star guest experiences. From managing reservations and guest communication to handling check-ins, calendars, and problem-solving, I make hosting stress-free and professional.My focus is on creating smooth stays, happy guests, and repeat bookings—so you can grow your rental business without overwhelm.",
      ],
      bgColor: "bg-green-100",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(teamMembers.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) =>
        (prev - 1 + Math.ceil(teamMembers.length / 3)) %
        Math.ceil(teamMembers.length / 3)
    );
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const getVisibleMembers = () => {
    const startIndex = currentSlide * 3;
    return teamMembers.slice(startIndex, startIndex + 3);
  };

  // Need help section
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "United States",
    numberOfProperties: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission logic here
  };

  const countries = [
    "United States",
    "Canada",
    "United Kingdom",
    "Australia",
    "Germany",
    "France",
    "Spain",
    "Italy",
    "Netherlands",
    "Switzerland",
    "Austria",
    "Belgium",
    "Denmark",
    "Sweden",
    "Norway",
    "Finland",
    "Ireland",
    "Portugal",
    "Greece",
    "Czech Republic",
    "Poland",
    "Hungary",
    "Croatia",
    "Slovenia",
    "Estonia",
    "Latvia",
    "Lithuania",
    "Mexico",
    "Brazil",
    "Argentina",
    "Chile",
    "Colombia",
    "Peru",
    "Japan",
    "South Korea",
    "Singapore",
    "Hong Kong",
    "Taiwan",
    "Thailand",
    "Malaysia",
    "Philippines",
    "Indonesia",
    "Vietnam",
    "India",
    "UAE",
    "Saudi Arabia",
    "Israel",
    "Turkey",
    "South Africa",
    "Egypt",
    "Morocco",
    "Kenya",
    "Ghana",
    "New Zealand",
    "Fiji",
    "Other",
  ];

  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Header */}
        <a
          href="https://wa.me/447341642789"
          className="whatsapp-float"
          target="_blank"
        >
          <i className="fab fa-whatsapp"></i>
        </a>
        <header className="bg-white header shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0 flex items-center">
                  <div className="w-8 h-8 bg-red-500 rounded-md flex items-center justify-center mr-2">
                    <img
                      className="rounded-md"
                      src="https://res.cloudinary.com/damvrxl9f/image/upload/v1756303855/e36b9d0a-773c-41a8-a71c-07a538228373_tcetac.jpg"
                      alt=""
                    />
                  </div>
                  <span className="text-xl font-bold text-gray-900">
                    Guestly
                  </span>
                </div>
              </div>
              <nav className="hidden md:flex space-x-8">
                <a
                  href="#"
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
                >
                  Guestly VA Services
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
                >
                  Airbnb Hosting Solution
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
                >
                  About Us
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
                >
                  Products
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
                >
                  Blog
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
                >
                  Contact
                </a>
              </nav>
              <button className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-md text-sm font-medium">
                Schedule A Meeting
              </button>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative bg-gray-50 py-20">
          <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
            {/* Floating Icons */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
              <div className="floating-icon icon-1 w-12 h-12 bg-blue-500 rounded-lg opacity-20"></div>
              <div className="floating-icon icon-2 w-10 h-10 bg-green-500 rounded-full opacity-20"></div>
              <div className="floating-icon icon-3 w-8 h-8 bg-yellow-400 rounded-full opacity-20"></div>
              <div className="floating-icon icon-4 w-14 h-14 bg-purple-500 rounded-lg opacity-20"></div>
              <div className="floating-icon icon-5 w-12 h-12 bg-red-500 rounded-lg opacity-20"></div>
              <div className="floating-icon icon-6 w-10 h-10 bg-teal-500 rounded-full opacity-20"></div>
              <div className="floating-icon icon-7 w-6 h-6 bg-orange-400 rounded-full opacity-20"></div>
              <div className="floating-icon icon-8 w-8 h-8 bg-indigo-500 rounded-lg opacity-20"></div>
            </div>

            <div className="relative z-10">
              <h1 className="text-5xl font-bold text-gray-900 mb-4">
                Guestly Assistance
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Your Short-Term Rental Virtual Assistant
              </p>
              <p className="text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
                Guestly Assistance is the only virtual assistant company
                dedicated to short-term rentals. Our trained professionals are
                available 24/7 to manage guest communication, handle bookings,
                and streamline operations — helping you deliver exceptional
                experiences and maximize your rental revenue.
              </p>
              <button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-md text-lg font-medium">
                Schedule A Meeting
              </button>
            </div>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              We Manage Your Short-Term Rentals, So You Can Focus on Growing
              Your Business
            </h2>
            <p className="text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
              At Guestly Assistance, our virtual assistants are trained
              exclusively in short-term rental management. From guest
              communication to day-to-day operations, each assistant is equipped
              to handle your vacation rental tasks with professionalism and
              care. With expertise on the Airbnb platform, your{" "}
              <span className="text-pink-500 font-semibold">
                dedicated Airbnb virtual assistant{" "}
              </span>
              can help streamline your business, enhance guest satisfaction, and
              even boost your rental income by up to 25%. Experience the
              unmatched dedication of our top-tier team, available to support
              you around the clock.
            </p>
          </div>
        </section>

        {/* Platform Logos Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Vacation Rental Platform We Serve
            </h3>
            <p className="text-gray-600 mb-8">
              From Airbnb to booking.com to Vrbo, List your property on all the
              major platforms and let us handle bookings!
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
              <img
                src="/generic-travel-logo.png"
                alt="Airbnb"
                className="h-10"
              />
              <img src="/booking-logo.png" alt="Booking.com" className="h-10" />
              <img src="/vrbo-logo.png" alt="VRBO" className="h-10" />
              <img
                src="/tripadvisor-logo.png"
                alt="TripAdvisor"
                className="h-10"
              />
              <img
                src="/expedia-logo-generic.png"
                alt="Expedia"
                className="h-10"
              />
              <img src="/homeaway-logo.png" alt="HomeAway" className="h-10" />
              <img src="/flipkey-logo.png" alt="FlipKey" className="h-10" />
              <img
                src="/rental-platform-logo.png"
                alt="Other Platform"
                className="h-10"
              />
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Optimize Your Rental Business With Our{" "}
                <span className="text-pink-500">Short-Term Rental VA</span>
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Our short-term rental virtual assistants deliver comprehensive
                support to simplify and optimize your operations. From guest
                communication to property management, we handle every detail
                with 24/7 availability—ensuring your rentals run smoothly, your
                guests stay happy, and your business remains consistently
                profitable.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {/* Service 1 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <img
                    src="/property-listing-icon.png"
                    alt="Property Listing"
                    className="w-8 h-8"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Property Listing Management
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Showcase your rentals with compelling descriptions,
                  eye-catching photos, and competitive pricing. Our Airbnb
                  specialists in India optimize and update listings year-round
                  to boost visibility, attract more bookings, and keep you ahead
                  of the competition.
                </p>
              </div>

              {/* Service 2 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <img
                    src="/guest-communication-icon.png"
                    alt="Guest Communication"
                    className="w-8 h-8"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Guest Communication & Support
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  From inquiries to post-stay follow-ups, we handle all guest
                  communication promptly and professionally. Our 24/7 support
                  ensures smooth stays, positive reviews, and returning happy
                  guests.
                </p>
              </div>

              {/* Service 3 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <img
                    src="/check-in-check-out-icon.png"
                    alt="Check-in Check-out"
                    className="w-8 h-8"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Check-in & Check Out
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Make arrivals and departures seamless with clear instructions,
                  house rules, and 24/7 assistance. We coordinate schedules and
                  special requests to guarantee stress-free guest experiences.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {/* Service 4 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <img
                    src="/cleaning-maintenance-icon.png"
                    alt="Cleaning"
                    className="w-8 h-8"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Cleaning & Maintenance Coordination
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We schedule cleaning between stays and manage repairs with
                  trusted contractors. Every request and cost is tracked—keeping
                  your property spotless, maintained, and guest-ready at all
                  times.
                </p>
              </div>

              {/* Service 5 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <img
                    src="/reservation-management-icon.png"
                    alt="Reservation"
                    className="w-8 h-8"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Reservation & Review Management
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Seamless bookings and glowing reviews are no accident. We
                  synchronize calendars across platforms to prevent double
                  bookings, manage cancellations, and handle modifications. Our
                  team responds to reviews within 24 hours—building strong guest
                  relationships and driving more positive feedback.
                </p>
              </div>

              {/* Service 6 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-pink-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <img
                    src="/dynamic-pricing-icon.png"
                    alt="Dynamic Pricing"
                    className="w-8 h-8"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Dynamic Pricing Optimization
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Maximize revenue with smart, dynamic pricing. Using
                  algorithms, seasonality, competitor analysis, and local
                  events, we adjust your rates in real time. Our flexible
                  pricing strategy ensures your listings stay competitive while
                  offering premium options for guests seeking luxury
                  experiences.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Service 7 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <img
                    src="/co-hosting-support-icon.png"
                    alt="Co-hosting"
                    className="w-8 h-8"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Co-Hosting Support
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Experience hassle-free hosting with our premium co-hosting
                  services. From creating or optimizing listings to managing
                  guest communication, reviews, housekeeping, and maintenance,
                  we handle the details—helping property owners achieve maximum
                  rental income with a hands-off approach.
                </p>
              </div>

              {/* Service 8 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <img
                    src="/channel-manager-icon.png"
                    alt="Channel Manager"
                    className="w-8 h-8"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Channel Manager Integration
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Streamline your operations across Airbnb, Booking.com, and
                  more. We integrate with channel managers to keep your
                  listings, rates, and availability synchronized in real
                  time—preventing double bookings, saving you time, and ensuring
                  maximum exposure for your rentals.
                </p>
              </div>

              {/* Service 9 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <img
                    src="/financial-accounting-icon.png"
                    alt="Financial Support"
                    className="w-8 h-8"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Financial & Accounting Support
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Stay on top of your finances with our complete accounting and
                  bookkeeping support. We manage payment processing, track
                  expenses, prepare detailed financial reports, and assist with
                  tax compliance—giving you a clear, organized financial picture
                  at all times.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Service 10 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <img
                    src="/24-7-support-icon.png"
                    alt="24/7 Support"
                    className="w-8 h-8"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  24/7 VA Support
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Round-the-clock support for you and your guests. Our dedicated
                  virtual assistants are available day and night to resolve
                  issues quickly, provide urgent guest assistance, and keep your
                  short-term rental operations running without interruption.
                </p>
              </div>

              {/* Service 11 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <img
                    src="/legal-compliance-icon.png"
                    alt="Legal Compliance"
                    className="w-8 h-8"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Legal Compliance
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Avoid costly fines and legal risks. Our team ensures your
                  rental business stays compliant by handling licensing,
                  permits, and regulatory requirements. We monitor legal changes
                  so you can focus on guests while we manage the paperwork.
                </p>
              </div>

              {/* Service 12 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <img
                    src="/police-reporting-icon.png"
                    alt="Police Reporting"
                    className="w-8 h-8"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Police Reporting
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Stay compliant with mandatory guest registration and reporting
                  laws. We handle communication with local authorities, manage
                  safety protocols, and take care of all police reporting
                  obligations—so your business operates smoothly and worry-free.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-pink-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-2/3 mb-8 lg:mb-0">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Why Choose Guestly Assistance For Your{" "}
                  <span className="text-pink-500">Short-Term Rental?</span>
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">
                      Get a dedicated virtual assistant for short-term rentals
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">
                      Customized strategies to fit individual property needs and
                      goals
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">
                      Our 24/7 support lets us keep you informed once your guest
                      need us
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">
                      High-quality property listings on top booking platforms
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">
                      Real guest satisfaction priority with best communication
                      and prompt replies
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">
                      Increase revenue by up to 25% with our data-driven tools
                      for guests
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">
                      We handle your short-term rental management
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">
                      Get detailed reports to help you know your revenue and
                      expenses
                    </span>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/3 text-center">
                <img
                  src="/professional-business-person-smiling.png"
                  alt="Professional"
                  className="mx-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* MEET */}
        <section className="meet-section">
          <div className="meet-container">
            <div className="meet-header">
              <h2 className="meet-title">
                Meet Our Short Term Rental Virtual Assistants
              </h2>
              <p className="meet-subtitle">
                At <span className="brand-name">Guestly</span>, we offer a team
                of specialized short-term rental virtual assistants,
                <br />
                each trained to handle different aspects of your short-term
                rental business.
              </p>
            </div>

            <div className="carousel-wrapper">
              <button
                className="carousel-btn carousel-btn-prev"
                onClick={prevSlide}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 18L9 12L15 6"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <div className="team-grid">
                {getVisibleMembers().map((member) => (
                  <div
                    key={member.id}
                    className={`team-card ${member.bgColor}`}
                  >
                    <div className="team-image-container">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="team-image"
                      />
                    </div>
                    <div className="team-content">
                      <h3 className="team-name">{member.name}</h3>
                      <div className="expertise-tag">{member.expertise}</div>
                      <div className="services-tags">
                        {member.services.map((service, index) => (
                          <span key={index} className="service-tag">
                            {service}
                          </span>
                        ))}
                      </div>
                      <button className="view-profile-btn">View Profile</button>
                    </div>
                  </div>
                ))}
              </div>

              <button
                className="carousel-btn carousel-btn-next"
                onClick={nextSlide}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 18L15 12L9 6"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            <div className="carousel-dots">
              {Array.from({ length: Math.ceil(teamMembers.length / 3) }).map(
                (_, index) => (
                  <button
                    key={index}
                    className={`dot ${currentSlide === index ? "active" : ""}`}
                    onClick={() => goToSlide(index)}
                  />
                )
              )}
            </div>
          </div>
        </section>

        {/* testimonials section*/}
        <section className="testimonial-section">
          <div className="testimonial-container">
            <div className="testimonial-header">
              <h2 className="testimonial-title">What Our Clients Say</h2>
              <p className="testimonial-subtitle">
                Join thousands of property owners who trust Guestly to maximize
                their rental income
              </p>
            </div>

            <div className="testimonial-grid">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="testimonial-card">
                  <div className="testimonial-content">
                    <div className="testimonial-rating">
                      {renderStars(testimonial.rating)}
                    </div>
                    <p className="testimonial-text">"{testimonial.text}"</p>
                  </div>

                  <div className="testimonial-author">
                    <div className="author-avatar">
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        onError={(e) => {
                          e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                            testimonial.name
                          )}&background=e91e63&color=fff&size=60`;
                        }}
                      />
                    </div>
                    <div className="author-info">
                      <h4 className="author-name">{testimonial.name}</h4>
                      <p className="author-role">{testimonial.role}</p>
                      <p className="author-location">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="testimonial-stats">
              <div className="stat-item">
                <div className="stat-number">10,000+</div>
                <div className="stat-label">Happy Clients</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">98%</div>
                <div className="stat-label">Satisfaction Rate</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">35%</div>
                <div className="stat-label">Average Revenue Increase</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Support Available</div>
              </div>
            </div>
          </div>
        </section>

        {/* Need Help section */}
        <section className="help-section">
          <div className="help-container">
            <div className="help-content">
              {/* Contact Form */}
              <div className="contact-form-wrapper">
                <div className="contact-form">
                  <h2 className="form-title">
                    Need <span className="text-accent">Help?</span>
                  </h2>
                  <p className="form-subtitle">
                    Please fill out the information and we will get back to you{" "}
                    <span className="text-accent">soon</span>.
                  </p>

                  <form onSubmit={handleSubmit} className="help-form">
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          placeholder="Type your name"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          placeholder="Type your name"
                          required
                        />
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Type Your Email"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Type Your Phone"
                          required
                        />
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="country">Country</label>
                        <select
                          id="country"
                          name="country"
                          value={formData.country}
                          onChange={handleInputChange}
                          required
                        >
                          {countries.map((country) => (
                            <option key={country} value={country}>
                              {country}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="form-group">
                        <label htmlFor="numberOfProperties">
                          Number of Properties
                        </label>
                        <input
                          type="number"
                          id="numberOfProperties"
                          name="numberOfProperties"
                          value={formData.numberOfProperties}
                          onChange={handleInputChange}
                          placeholder="Number of Properties"
                          min="1"
                          required
                        />
                      </div>
                    </div>

                    <button type="submit" className="submit-btn">
                      Submit
                      <svg
                        className="submit-arrow"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M8.5 3L13.5 8L8.5 13M13 8H3"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </form>
                </div>
              </div>

              {/* Help Information */}
              <div className="help-info">
                <h2 className="help-title">How Can We Help?</h2>
                <p className="help-description">
                  At Guestly, we're here to make your short term property
                  management experience as smooth and profitable as possible.
                  Here's how we can help you:
                </p>

                <div className="help-services">
                  <div className="service-item">
                    <h3 className="service-title">
                      Onboarding & Property Assessment
                    </h3>
                    <p className="service-description">
                      We make getting started easy and take a close look at your
                      property to make sure it's all fit!
                    </p>
                  </div>

                  <div className="service-item">
                    <h3 className="service-title">
                      Customized Strategy Development
                    </h3>
                    <p className="service-description">
                      We create a customized plan that fits your specific rental
                      business need and helps maximize your property's
                      potential.
                    </p>
                  </div>

                  <div className="service-item">
                    <h3 className="service-title">Real-Time Support</h3>
                    <p className="service-description">
                      Need help fast? Our team is here to give you quick,
                      real-time support whenever you need it.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-red-500 rounded-md flex items-center justify-center mr-2">
                    <span className="text-white font-bold text-sm">
                      <img
                        className="rounded-md"
                        src="https://res.cloudinary.com/damvrxl9f/image/upload/v1756303855/e36b9d0a-773c-41a8-a71c-07a538228373_tcetac.jpg"
                        alt=""
                      />
                    </span>
                  </div>
                  <span className="text-xl font-bold">Guestly</span>
                </div>
                <p className="text-gray-400 text-sm">
                  Your trusted partner for short-term rental virtual assistant
                  services.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Services</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>
                    <a href="#" className="hover:text-white">
                      Property Management
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Guest Communication
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Cleaning Coordination
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Dynamic Pricing
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Company</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>
                    <a href="#" className="hover:text-white">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Contact
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Careers
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Contact</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>
                    <a href="mailto:support@guestlyvirtualassist.com">
                      Email: support@guestlyvirtualassist.com
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://wa.me/447341642789?text=Hello%20I%20am%20interested%20in%20your%20service"
                      target="_blank"
                    >
                      Phone: +44 7341 642789
                    </a>
                  </li>
                  <li>24/7 Support Available | London UK</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
              <p>&copy; 2025 Guestly. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
