import Image from 'next/image';

export const metadata = {
  title: 'About Us - Rajvika Event Planners',
  description: 'Learn about Rajvika Event Planners, our philosophy, and our dedication to luxury event creation.',
};

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white py-20 px-8 md:px-20">
      <h1 className="text-6xl font-serif text-center mb-16 text-gold-metallic uppercase tracking-wide">
        Our Story & Philosophy
      </h1>

      <section className="max-w-4xl mx-auto mb-20">
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image
              src="/about-us-hero.jpg" // Replace with a sophisticated team/event image
              alt="Rajvika Team"
              width={600}
              height={400}
              objectFit="cover"
              className="rounded-lg shadow-xl border border-gold-metallic"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-4xl font-serif text-gold-metallic mb-6">
              Crafting Unforgettable Moments
            </h2>
            <p className="text-lg mb-6 leading-relaxed font-montserratLight">
              At Rajvika Event Planners, we believe every celebration is a unique story waiting to be told. Born from a passion for perfection and a deep understanding of luxury, we specialize in transforming visions into spectacular realities. Our bespoke approach ensures every detail, from grand conceptualization to flawless execution, resonates with your personal style and exceeds expectations.
            </p>
            <p className="text-lg leading-relaxed font-montserratLight">
              With years of experience in orchestrating high-profile events, we bring unparalleled expertise, creativity, and discretion to every project. We pride ourselves on creating not just events, but cherished memories that last a lifetime.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto text-center mb-20">
        <h2 className="text-4xl font-serif text-gold-metallic mb-8">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-serif text-white mb-4">Excellence</h3>
            <p className="text-md text-gray-300 font-montserratLight">
              We are committed to delivering nothing less than perfection in every aspect of event planning.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-serif text-white mb-4">Discretion</h3>
            <p className="text-md text-gray-300 font-montserratLight">
              Your privacy and the exclusivity of your event are paramount to us.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-serif text-white mb-4">Creativity</h3>
            <p className="text-md text-gray-300 font-montserratLight">
              Innovative designs and imaginative themes define our signature style.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section (Optional - if you want to feature your team) */}
      <section className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-serif text-gold-metallic mb-12">Meet Our Visionaries</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Example Team Member */}
          <div className="bg-gray-900 p-8 rounded-lg shadow-lg border border-gray-800">
            <Image
              src="/team-member-1.jpg" // Replace with actual team member photo
              alt="Team Member Name"
              width={150}
              height={150}
              className="rounded-full mx-auto mb-6 border-4 border-gold-metallic"
            />
            <h3 className="text-2xl font-serif text-gold-metallic mb-2">Priya Sharma</h3>
            <p className="text-lg text-white mb-4">Founder & Lead Planner</p>
            <p className="text-md text-gray-300 font-montserratLight">
              With a decade of experience in luxury event management, Priya leads our team with a passion for creating unparalleled experiences.
            </p>
          </div>
          {/* Add more team members as needed */}
        </div>
      </section>
    </div>
  );
}