import Image from "next/image";

export function AboutSection() {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto max-w-7xl p-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          {/* Text Block - Appears first on mobile, second on desktop */}
          <div className="">
            <h2 className="text-4xl font-bold mb-6 text-foreground">Your Trusted Real Estate Partner</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              With over 15 years of experience in the real estate market, we've helped thousands of families find their
              perfect home. Our comprehensive platform connects buyers and sellers with the most up-to-date property
              listings and market insights.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6 md:mb-0">
              Whether you're a first-time buyer, looking to upgrade, or seeking investment opportunities, our expert
              team and advanced search tools make finding your ideal property simple and stress-free.
            </p>
          </div>
          {/* Image Block - Appears second on mobile, first on desktop */}
          <div className="">
            <Image
              src="/real-estate-team.png"
              alt="Professional real estate team"
              width={600}
              height={400}
              className="rounded-lg shadow-lg object-cover w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
