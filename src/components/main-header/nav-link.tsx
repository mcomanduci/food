"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const path = usePathname();
  const activeClasses =
    "bg-[linear-gradient(90deg,#ff8a05,#f9b331)] bg-clip-text [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]";
  return (
    <Link
      href={href}
      className={`font-bold px-4 py-2 hover:bg-[linear-gradient(90deg,#ff8a05,#f9b331)] hover:bg-clip-text hover:[-webkit-background-clip:text] hover:[-webkit-text-fill-color:transparent] hover:[text-shadow:0_0_18px_rgba(248,190,42,0.8)] transition-all duration-300 active:bg-[linear-gradient(90deg,#ff8a05,#f9b331)] active:bg-clip-text active:[-webkit-background-clip:text] active:[-webkit-text-fill-color:transparent] ${
        path.startsWith(href) && activeClasses
      }`}
    >
      {children}
    </Link>
  );
}
