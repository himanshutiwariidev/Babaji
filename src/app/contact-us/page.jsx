"use client";

import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Building2,
} from "lucide-react";

export default function ContactPage() {
  return (
    <main>


      {/* Contact Cards */}
      <section className=" bg-gray-50">
        <div className="w-full h-[180px] md:h-[500px]">
          <img
            src="/contact.png"
            alt=""
            className="w-full h-full object-cover"
          />
          
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-2">

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center mb-5">
                <Phone className="text-red-600" />
              </div>

              <h3 className="font-bold text-xl mb-3">
                Call Us
              </h3>

              <p className="text-gray-600">
                +91 83840 39200
              </p>

              <p className="text-gray-600">
                +91 83840 39200
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center mb-5">
                <Mail className="text-red-600" />
              </div>

              <h3 className="font-bold text-xl mb-3">
                Email Us
              </h3>

              <p className="text-gray-600 break-all">
                babajigroupofficial@gmail.com
              </p>

              <p className="text-gray-600 break-all">
                info@babajigroup.com
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center mb-5">
                <MapPin className="text-red-600" />
              </div>

              <h3 className="font-bold text-xl mb-3">
                Location
              </h3>

              <p className="text-gray-600">
                Nangli Sakrawati Industrial Area,
                Najafgarh, New Delhi - 110043
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center mb-5">
                <Clock className="text-red-600" />
              </div>

              <h3 className="font-bold text-xl mb-3">
                Working Hours
              </h3>

              <p className="text-gray-600">
                Mon - Sat
              </p>

              <p className="text-gray-600">
                9:30 AM - 6:30 PM
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">

          <div className="grid lg:grid-cols-2 gap-16">

            {/* Form */}
            <div>
              <span className="text-red-600 font-semibold uppercase tracking-wider">
                Send Message
              </span>

              <h2 className="text-3xl font-bold mt-3 mb-8">
                Let's Start A Conversation
              </h2>

              <form className="space-y-6">

                <div className="grid md:grid-cols-2 gap-5">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full h-14 px-5 rounded-xl border border-gray-200 focus:outline-none focus:border-red-500"
                  />

                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full h-14 px-5 rounded-xl border border-gray-200 focus:outline-none focus:border-red-500"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full h-14 px-5 rounded-xl border border-gray-200 focus:outline-none focus:border-red-500"
                  />

                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full h-14 px-5 rounded-xl border border-gray-200 focus:outline-none focus:border-red-500"
                  />
                </div>

                <textarea
                  rows="6"
                  placeholder="Write your message..."
                  className="w-full p-5 rounded-xl border border-gray-200 focus:outline-none focus:border-red-500"
                />

                <button
                  type="submit"
                  className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-semibold transition"
                >
                  Send Message
                  <Send size={18} />
                </button>

              </form>
            </div>

            {/* Company Details */}
            <div>
              <span className="text-red-600 font-semibold uppercase tracking-wider">
                Company Information
              </span>

              <h2 className="text-4xl font-bold mt-3 mb-8">
                Babaji Brand Oil Industries
              </h2>

              <div className="bg-gray-50 rounded-3xl p-8">

                <div className="flex gap-4 mb-8">
                  <Building2 className="text-red-600 mt-1" />

                  <div>
                    <h3 className="font-bold text-lg mb-2">
                      Corporate Office
                    </h3>

                    <p className="text-gray-600">
                      KH.NO. 3/1, Plot No. 1,
                      Nangli Sakrawati Industrial Area,
                      Najafgarh, New Delhi - 110043
                    </p>
                  </div>
                </div>

                <div className="space-y-4 text-gray-600">
                  <p>
                    <strong>FSSAI License:</strong>
                    {" "}10020011008084
                  </p>

                  <p>
                    <strong>GST No:</strong>
                    {" "}07AAHCB7986L1ZW
                  </p>

                  <p>
                    <strong>Since:</strong>
                    {" "}1983
                  </p>

                  <p>
                    <strong>Industry:</strong>
                    {" "}Edible Oils & Food Products
                  </p>
                </div>

              </div>

              

            </div>

          </div>

        </div>
      </section>

      {/* Google Map */}
      <section className="h-[550px]">
        <iframe
          src="https://maps.google.com/maps?q=Najafgarh%20Delhi&t=&z=13&ie=UTF8&iwloc=&output=embed"
          className="w-full h-full border-0"
          loading="lazy"
          allowFullScreen
        />
      </section>

    </main>
  );
}