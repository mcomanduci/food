import Image from "next/image";
import Link from "next/link";
import logoImg from "@/assets/logo.png";
import MainHeaderBackground from "./main-header-background";
import NavLink from "./nav-link";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className="flex justify-between items-center px-8 py-4 md:px-[10%] md:py-8">
        <Link
          href="/"
          className="flex items-center justify-center gap-8 font-bold font-montserrat tracking-[.15rem] uppercase text-2xl"
        >
          <Image
            src={logoImg}
            alt="A plate with food on it"
            width={100}
            height={100}
            className="size-20 object-contain [filter:drop-shadow(0_0_.75rem_rgba(0,0,0,0.5))]"
            priority
          />
          NextLevel Food
        </Link>

        <nav>
          <ul className="flex gap-6 text-xl">
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
