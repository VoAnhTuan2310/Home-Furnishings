import Logo from './Logo';
import Navbar from './Navbar';
import Actions from './Actions';

export default function Header() {
  return (
    <header className="w-full bg-white h-[70px] flex items-center justify-between px-[54px] sticky top-0 z-50">
      <Logo />
      <Navbar />
      <Actions />
    </header>
  );
}