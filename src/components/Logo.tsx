import Image from 'next/image';

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ width = 120, height = 120, className }) => {
  return (
    <div className={`relative ${className}`} style={{ width: `${width}px`, height: `${height}px` }}>
      <Image
        src="/rajvika-logo.jpg" // Apke Ganesha-inspired logo ki image file ka path
        alt="Rajvika Event Planners Logo"
        layout="fill"
        objectFit="contain"
      />
    </div>
  );
};

export default Logo;