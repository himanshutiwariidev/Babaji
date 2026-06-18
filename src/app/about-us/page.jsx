
import {
  Award,
  Factory,
  ShieldCheck,
  Leaf,
  Target,
  Eye,
} from "lucide-react";

export default function AboutPage() {
  return (
    <>
  
      <section className="bg-white">
       <div className="w-full h-[150px] md:h-[500px]">
          <img
            src="/about.png"
            alt=""
            className="w-full h-full object-cover"
          />
          
        </div>
        <div className="max-w-7xl mx-auto px-4">
          <div className=" items-center">

         

            <div>
              <span className="text-red-600 font-semibold uppercase tracking-wider">
                About Company
              </span>

              <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-8">
                Babaji Brand Oil Industries
              </h2>

              <div className="space-y-6 text-gray-600 leading-8">
                <p>
                  Welcome to Babaji Brand Oil Industries,
                  a trusted name in the edible oil industry
                  since 1983.
                </p>

                <p>
                  Located in Najafgarh, Delhi, our 2-acre
                  manufacturing facility combines cutting-edge
                  technology with decades of expertise to
                  produce premium quality edible oils and
                  food products.
                </p>

                <p>
                  Our commitment is simple: deliver the
                  highest quality products at competitive
                  prices while maintaining complete customer
                  trust and satisfaction.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-red-600">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="text-center text-white">
              <h3 className="text-5xl font-bold">40+</h3>
              <p className="mt-3">Years Experience</p>
            </div>

            <div className="text-center text-white">
              <h3 className="text-5xl font-bold">2</h3>
              <p className="mt-3">Acre Facility</p>
            </div>

            <div className="text-center text-white">
              <h3 className="text-5xl font-bold">50+</h3>
              <p className="mt-3">Premium Products</p>
            </div>

            <div className="text-center text-white">
              <h3 className="text-5xl font-bold">100%</h3>
              <p className="mt-3">Quality Tested</p>
            </div>

          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">

          <div className="text-center mb-16">
            <span className="text-red-600 font-semibold uppercase">
              Why Choose Us
            </span>

            <h2 className="text-4xl font-bold mt-4">
              Trusted By Families Across India
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <ShieldCheck className="w-12 h-12 text-red-600 mb-5" />
              <h3 className="font-bold text-xl mb-3">
                Quality Assurance
              </h3>
              <p className="text-gray-600">
                Every product undergoes strict quality checks.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <Factory className="w-12 h-12 text-red-600 mb-5" />
              <h3 className="font-bold text-xl mb-3">
                Modern Facility
              </h3>
              <p className="text-gray-600">
                Advanced manufacturing infrastructure.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <Award className="w-12 h-12 text-red-600 mb-5" />
              <h3 className="font-bold text-xl mb-3">
                Trusted Since 1983
              </h3>
              <p className="text-gray-600">
                Four decades of customer confidence.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <Leaf className="w-12 h-12 text-red-600 mb-5" />
              <h3 className="font-bold text-xl mb-3">
                Sustainable Practices
              </h3>
              <p className="text-gray-600">
                Environmentally responsible production.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Mission Vision */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">

          <div className="grid lg:grid-cols-2 gap-8">

            <div className="bg-red-600 text-white rounded-3xl p-10">
              <Target className="w-14 h-14 mb-6" />

              <h3 className="text-3xl font-bold mb-5">
                Our Mission
              </h3>

              <p className="leading-8 text-red-100">
                To provide premium quality edible oils and
                food products while maintaining the highest
                standards of purity, nutrition and customer
                satisfaction.
              </p>
            </div>

            <div className="bg-black text-white rounded-3xl p-10">
              <Eye className="w-14 h-14 mb-6" />

              <h3 className="text-3xl font-bold mb-5">
                Our Vision
              </h3>

              <p className="leading-8 text-gray-300">
                To become India's most trusted food brand
                through innovation, quality excellence and
                sustainable growth.
              </p>
            </div>

          </div>

        </div>
      </section>

     
    </>
  );
}