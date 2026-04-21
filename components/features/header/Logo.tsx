import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link 
      href="/" 
      className="flex items-center gap-2 hover:opacity-90 transition-opacity cursor-pointer"
    >
      <Image 
        src="/images/logo.png" 
        alt="Furniro Logo" 
        width={50} 
        height={32} 
        priority 
      />
      <span className="text-[34px] font-bold font-montserrat text-black">
        Furniro
      </span>
    </Link>
  );
}