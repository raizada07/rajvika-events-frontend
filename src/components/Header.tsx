import Link from 'next/link';
import Logo from './Logo'; // Import the Logo component

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-80 backdrop-blur-sm shadow-lg py-4 px-8 md:px-20 border-b border-gold-metallic">
      <nav className="flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Logo width={80} height={80} className="mr-4" /> {/* Use your Logo component */}
          <span className="text-3xl font-serif tracking-widest uppercase text-white hover:text-gold-metallic transition duration-300 hidden md:block">
            RAJVIKA <span className="block text-xl">EVENT PLANNERS</span>
          </span>
        </Link>

        <ul className="flex space-x-8 text-lg font-montserratLight">
          <li>
            <Link href="/" className="text-white hover:text-gold-metallic transition duration-300 uppercase">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-white hover:text-gold-metallic transition duration-300 uppercase">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/portfolio" className="text-white hover:text-gold-metallic transition duration-300 uppercase">
              Portfolio
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-white hover:text-gold-metallic transition duration-300 uppercase">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;