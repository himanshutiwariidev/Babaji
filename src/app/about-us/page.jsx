import {
  Award,
  Factory,
  ShieldCheck,
  Leaf,
  Target,
  Eye,
  Wind,
  FlaskConical,
  IndianRupee,
  Droplets,
  Wheat,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "About Us | Babaji Brand Oil Industries — Trusted Since 1983",
  description:
    "Babaji Brand Oil Industries has been making premium edible oils and food products since 1983 from our 2-acre facility in Najafgarh, Delhi.",
};

const stats = [
  { value: "40+", label: "Years in the industry" },
  { value: "2", label: "Acre manufacturing facility" },
  { value: "50+", label: "Products across categories" },
  { value: "100%", label: "Batches lab tested" },
];

const products = [
  {
    icon: Droplets,
    name: "Mustard Oil",
    desc: "Kachi ghani pungency and natural aroma, processed to retain its character.",
  },
  {
    icon: Wheat,
    name: "MP Chakki Fresh Atta",
    desc: "Sourced from Madhya Pradesh wheat and stone-ground for soft, fresh rotis.",
  },
  {
    icon: Sparkles,
    name: "Besan",
    desc: "Finely milled gram flour with consistent texture for everyday cooking.",
  },
  {
    icon: ShieldCheck,
    name: "Bartan Bar",
    desc: "Tough on grease, easy on hands — a dependable everyday kitchen essential.",
  },
];

const values = [
  {
    icon: Award,
    title: "Best quality, best price",
    desc: "Our founding promise, unchanged since 1983: never trade quality for margin, and never price it out of reach.",
  },
  {
    icon: FlaskConical,
    title: "In-house testing labs",
    desc: "Every batch is checked in our own quality assessment labs before it is allowed to leave the plant.",
  },
  {
    icon: Wind,
    title: "Powered by our own wind unit",
    desc: "A captive wind power unit supports our operations, keeping production cleaner and less grid-dependent.",
  },
  {
    icon: Factory,
    title: "World-class processing",
    desc: "Modern oil processing technology on 2 acres in North India's industrial hub, run by an experienced team.",
  },
];

const milestones = [
  {
    year: "1983",
    title: "The beginning",
    desc: "Babaji Brand Oil Industries starts out in Najafgarh, Delhi, with a single promise — honest quality at a fair price.",
  },
  {
    year: "1990s",
    title: "Building the base",
    desc: "Steady growth across North India as families and retailers make Babaji a regular name in their kitchens.",
  },
  {
    year: "2000s",
    title: "Scaling up",
    desc: "The facility expands to 2 acres and modern oil processing technology is brought in.",
  },
  {
    year: "Today",
    title: "A full food brand",
    desc: "Beyond oils — atta, besan and daily-use essentials, all made under the same quality standards.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative">
        <div className="w-full h-[200px] md:h-[730px]">
          <img
            src="/about-banner.jpeg"
            alt="Babaji Brand Oil Industries manufacturing facility in Najafgarh, Delhi"
            className="w-full h-full object-cover"
          />
        </div>

      </section>

      {/* Intro */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <span className="text-red-600 font-semibold uppercase tracking-wider text-sm">
                About the company
              </span>

              <h2 className="text-3xl md:text-5xl font-bold mt-4 leading-tight">
                Babaji Brand Oil Industries
              </h2>

              <div className="w-16 h-1.5 bg-red-600 rounded-full mt-6" />

              <p className="text-gray-500 mt-6 leading-8">
                Excellence in edible oils since 1983 — and today, a full range
                of everyday food essentials.
              </p>
            </div>

            <div className="lg:col-span-7 space-y-6 text-gray-600 leading-8 text-[15px] md:text-base">
              <p>
                Welcome to Babaji Brand Oil Industries, a pioneering name in the
                edible oil industry since 1983. What began as a modest unit in
                Najafgarh, Delhi has grown into a 2-acre manufacturing facility
                that brings together state-of-the-art technology and four
                decades of hands-on expertise.
              </p>

              <p>
                Our vision has stayed simple and ambitious at the same time: the
                best quality at the best price. That single idea shapes every
                decision we make — from the raw material we refuse to compromise
                on, to the processing techniques we invest in, to the price we
                finally print on the pack.
              </p>

              <p>
                Spanning 2 acres in North India's industrial hub, our plant runs
                world-class oil processing technology supported by a captive
                wind power unit, so a meaningful part of our production stays
                clean and self-reliant. Our in-house quality assessment labs
                check every batch against strict standards before it reaches
                you.
              </p>

              <p>
                Over the years the range has grown well beyond oil. Mustard oil,
                MP chakki fresh atta, besan and daily kitchen essentials all
                carry the same name — and the same promise behind it.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                {[
                  "FSSAI licensed manufacturing",
                  "No compromise on raw material",
                  "Every batch lab tested",
                  "Fair, transparent pricing",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0 mt-1" />
                    <span className="text-gray-700 font-medium leading-6">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-14 md:py-20 bg-red-600">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center text-white lg:border-r lg:last:border-r-0 border-white/25"
              >
                <h3 className="text-4xl md:text-5xl font-bold">{stat.value}</h3>
                <p className="mt-3 text-red-100 text-sm md:text-base">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-2xl mb-14">
            <span className="text-red-600 font-semibold uppercase tracking-wider text-sm">
              Our journey
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4">
              Four decades, one standard
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((m) => (
              <div key={m.year} className="relative pt-8">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gray-100 rounded-full">
                  <div className="w-1/3 h-full bg-red-600 rounded-full" />
                </div>

                <span className="text-red-600 font-bold text-lg">{m.year}</span>
                <h3 className="font-bold text-xl mt-2 mb-3">{m.title}</h3>
                <p className="text-gray-600 leading-7 text-[15px]">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we make */}
      <section className="py-20 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div className="max-w-xl">
              <span className="text-red-600 font-semibold uppercase tracking-wider text-sm">
                What we make
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-4">
                Everyday essentials, made properly
              </h2>
            </div>

            <a
              href="/shop"
              className="inline-flex items-center gap-2 text-red-600 font-semibold hover:gap-3 transition-all"
            >
              View all products
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((p) => (
              <div
                key={p.name}
                className="bg-white rounded-3xl p-8 border border-gray-100 hover:border-red-200 hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center mb-6">
                  <p.icon className="w-7 h-7 text-red-600" />
                </div>
                <h3 className="font-bold text-xl mb-3">{p.name}</h3>
                <p className="text-gray-600 leading-7 text-[15px]">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-red-600 font-semibold uppercase tracking-wider text-sm">
              Why choose us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4">
              Trusted by families across India
            </h2>
            <p className="text-gray-600 mt-5 leading-8">
              Premium quality and competitive pricing are not a trade-off here.
              They are the reason people have kept coming back for 40 years.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-gray-50 rounded-3xl p-8 hover:bg-white hover:shadow-xl transition-all"
              >
                <v.icon className="w-11 h-11 text-red-600 mb-6" />
                <h3 className="font-bold text-xl mb-3 leading-7">{v.title}</h3>
                <p className="text-gray-600 leading-7 text-[15px]">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality & sustainability */}
      <section className="py-20 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100">
              <FlaskConical className="w-12 h-12 text-red-600 mb-6" />
              <h3 className="text-2xl md:text-3xl font-bold mb-5">
                Quality is checked, not assumed
              </h3>
              <p className="text-gray-600 leading-8">
                Our in-house quality assessment labs test every batch for
                purity, consistency and safety before it is packed. Raw material
                is screened on arrival, and nothing moves forward until it
                clears. That is how a 40-year-old name stays intact.
              </p>

              <div className="flex flex-wrap gap-3 mt-8">
                {["Raw material screening", "Batch testing", "FSSAI compliant"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="text-sm font-medium text-red-700 bg-red-50 px-4 py-2 rounded-full"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100">
              <Leaf className="w-12 h-12 text-red-600 mb-6" />
              <h3 className="text-2xl md:text-3xl font-bold mb-5">
                Made with cleaner energy
              </h3>
              <p className="text-gray-600 leading-8">
                A captive wind power unit supports our manufacturing, reducing
                how much we draw from the grid and lowering the footprint of
                every pack we produce. Responsible production is not a campaign
                for us — it is built into how the plant runs.
              </p>

              <div className="flex flex-wrap gap-3 mt-8">
                {["Captive wind power", "Energy efficient", "Low waste"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="text-sm font-medium text-red-700 bg-red-50 px-4 py-2 rounded-full"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-14 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-red-600 text-white rounded-3xl p-8 md:p-12">
              <Target className="w-14 h-14 mb-6" />
              <h3 className="text-2xl md:text-3xl font-bold mb-5">
                Our mission
              </h3>
              <p className="leading-8 text-red-50">
                To deliver premium quality edible oils and food products at
                prices Indian households can rely on — holding the highest
                standards of purity, nutrition and customer satisfaction at
                every step, from sourcing to sealing the pack.
              </p>
            </div>

            <div className="bg-black text-white rounded-3xl p-8 md:p-12">
              <Eye className="w-14 h-14 mb-6" />
              <h3 className="text-2xl md:text-3xl font-bold mb-5">
                Our vision
              </h3>
              <p className="leading-8 text-gray-300">
                To become India's most trusted food brand through innovation,
                consistent quality and sustainable growth — so that the name
                Babaji on a pack is reason enough to pick it up.
              </p>
            </div>
          </div>
        </div>
      </section>

 

      {/* CTA */}
      <section className="py-14 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-black rounded-3xl p-8 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white max-w-2xl mx-auto leading-tight">
              Looking for a distribution or bulk supply partner?
            </h2>

            <p className="text-gray-400 mt-5 max-w-xl mx-auto leading-8">
              Talk to our team about product range, pricing and dealership
              across North India.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <a
                href="tel:+918384039200"
                className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-full transition-colors"
              >
                <Phone className="w-5 h-5" />
                +91 83840 39200
              </a>

              <a
                href="mailto:sales@babajigroup.com"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-full transition-colors"
              >
                <Mail className="w-5 h-5" />
                sales@babajigroup.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}