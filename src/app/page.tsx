import { fetchAPI } from '../lib/api';
import Image from 'next/image';

interface Event {
  id: number;
  attributes: {
    Title: string;
    Description: string;
    Date: string;
    Location: string;
    MainImage: {
      data: {
        attributes: {
          url: string;
          alternativeText: string;
        };
      };
    };
  };
}

export default async function Home() {
  const eventsData = await fetchAPI("events", { populate: '*' }); // 'populate=*' to get image data

  const events: Event[] = eventsData.data;

  return (
    <div className="min-h-screen bg-black text-gold-metallic">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center">
        <Image
          src="/hero-bg.jpg" // Replace with a luxury event image in public folder
          alt="Luxury Event Background"
          layout="fill"
          objectFit="cover"
          quality={90}
          className="opacity-50"
        />
        <div className="relative z-10 p-8">
          <h1 className="text-6xl md:text-8xl font-serif tracking-widest uppercase text-white drop-shadow-lg">
            RAJVIKA <span className="block text-4xl md:text-6xl mt-4">EVENT PLANNERS</span>
          </h1>
          <p className="mt-8 text-xl md:text-2xl font-montserratLight text-pearl-white drop-shadow-md">
            Where Grandeur Meets Perfection
          </p>
          <button className="mt-12 px-8 py-4 bg-gold-metallic text-black font-semibold uppercase tracking-wide text-lg hover:bg-white hover:text-gold-metallic transition duration-300">
            Request a Consultation
          </button>
        </div>
      </section>

      {/* Events Showcase Section */}
      <section className="py-20 px-8 md:px-20">
        <h2 className="text-5xl font-serif text-center mb-16 text-gold-metallic uppercase tracking-wide">
          Our Exclusive Events
        </h2>

        {events.length === 0 ? (
          <p className="text-center text-xl text-white">No events planned yet. Stay tuned!</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {events.map((event) => (
              <div key={event.id} className="bg-gray-900 shadow-xl overflow-hidden group">
                {event.attributes?.MainImage?.data && (
                  <div className="relative h-72 w-full overflow-hidden">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${event.attributes.MainImage.data.attributes.url}`}
                      alt={event.attributes.MainImage.data.attributes.alternativeText || event.attributes.Title}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-3xl font-serif text-gold-metallic mb-4 uppercase">
                    {event.attributes?.Title}
                  </h3>
                  <p className="text-lg text-white mb-4">
                    {event.attributes?.Description?.substring(0, 150)}...
                  </p>
                  <p className="text-md text-gray-400">
                    <span className="font-semibold">Date:</span> {new Date(event.attributes?.Date).toLocaleDateString()}
                  </p>
                  <p className="text-md text-gray-400">
                    <span className="font-semibold">Location:</span> {event.attributes?.Location}
                  </p>
                  <button className="mt-6 inline-block text-gold-metallic border border-gold-metallic px-6 py-2 hover:bg-gold-metallic hover:text-black transition duration-300">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-white py-12 text-center border-t border-gold-metallic">
        <p className="text-lg">&copy; {new Date().getFullYear()} Rajvika Event Planners. All Rights Reserved.</p>
        <div className="mt-4 flex justify-center space-x-6">
          {/* Add social media icons here */}
          <a href="#" className="text-gold-metallic hover:text-white transition duration-300">Facebook</a>
          <a href="#" className="text-gold-metallic hover:text-white transition duration-300">Instagram</a>
          <a href="#" className="text-gold-metallic hover:text-white transition duration-300">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
}