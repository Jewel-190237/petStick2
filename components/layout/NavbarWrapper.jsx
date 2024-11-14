"use client";

import { usePathname } from 'next/navigation';
import Navbar from './Navbar';

export default function NavbarWrapper() {
  const pathname = usePathname();
  const textColor = pathname === '/home2' ? 'white' : 'defaultColor';

  return <Navbar textColor={textColor} />;
}