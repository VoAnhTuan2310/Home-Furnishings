import Link from 'next/link';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Shop', href: '/shop' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  return (
    <nav>
      <ul className="flex gap-[90px]">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link href={link.href} className="text-base font-medium hover:text-primary transition-colors">
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}