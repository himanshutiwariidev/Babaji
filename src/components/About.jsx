export default function AboutBabaji() {
  return (
    <section
      className="relative overflow-hidden py-5 lg:py-10 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/bgimage.png')", // Your downloaded image
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-red-600/20 backdrop-blur-sm border border-red-500/30 text-red-400 px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium tracking-wide uppercase">
              About Babaji
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl  lg:text-4xl font-bold text-white leading-tight mb-4">
            Babaji Brand Oil Industries
          </h2>

          <h3 className="text-xl md:text-2xl text-yellow-400 font-medium ">
            Excellence in Edible Oils Since 1983
          </h3>

          {/* Divider */}
          <div className="w-24 h-1 bg-red-600 rounded-full mb-5"></div>

          {/* Content */}
          <div className="max-w-xl space-y-6 text-gray-200 text-base md:text-lg ">
            <p>
              Welcome to <strong>Babaji Brand Oil Industries</strong>, a
              pioneering name in the edible oil industry since 1983.
              Located in Najafgarh, Delhi, our 2-acre facility integrates
              state-of-the-art technology with a commitment to delivering
              the finest quality oils at competitive prices.

              At Babaji Brand Oil Industries, our vision is simple yet
              ambitious: <strong>to achieve the best quality at the best prices.</strong>
              This commitment drives every aspect of our operations,
              from sourcing the finest raw materials to employing
              cutting-edge processing techniques.
           
              Spanning 2 acres in North India’s industrial hub,
              our facility boasts world-class technology for oil
              processing. We supplement our operations with a
              captive wind power unit, ensuring sustainable
              production practices.
           
              Our in-house quality assessment labs guarantee that
              every batch meets stringent quality standards,
              ensuring purity, consistency, and trust in every
              product we deliver.
            </p>
          </div>

         
          

         

        </div>
      </div>
    </section>
  );
}