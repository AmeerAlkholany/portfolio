import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-black text-white">
      <div className="font-bold text-xl">AP</div>
      <ul className="flex space-x-4">
        <li><Link href="#about" className="hover:underline">About</Link></li>
        <li><Link href="#projects" className="hover:underline">Projects</Link></li>
        <li><Link href="#skills" className="hover:underline">Skills</Link></li>
        <li><Link href="#contact" className="hover:underline">Contact</Link></li>
      </ul>
    </nav>
  );
}
