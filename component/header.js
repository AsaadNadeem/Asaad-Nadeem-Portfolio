import Link from "next/link";
import Sidebar from "./sidebar";
import Image from "next/image";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-gray-950 px-6 py-3 text-amber-50 md:px-12">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Sidebar />
        <Link href="/" className="font-serif text-2xl font-bold md:text-3xl">
          Asaad Nadeem
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <a href="#about" className="text-lg transition hover:underline">
            About Me
          </a>

          <a href="#skills" className="text-lg transition hover:underline">
            Skills
          </a>

          <a href="#projects" className="text-lg transition hover:underline">
            Projects
          </a>

          <a href="#education" className="text-lg transition hover:underline">
            Education
          </a>

          <a href="#volunteering" className="text-lg transition hover:underline">
            Volunteering
          </a>

          <a href="#courses" className="text-lg transition hover:underline">
            Courses
          </a>
        </nav>

        <div className="hidden md:flex justify-center gap-5">
          <a href="http://linkedin.com/in/asaadnadeem686" target="_blank">
            <Image src="/2504923.png" alt="LinkedIn" width={27} height={27} />
          </a>
          <a href="https://www.facebook.com/asaadnadeem686" target="_blank">
            <Image src="/2504903.png" alt="LinkedIn" width={27} height={27} />
          </a>
          <a href="https://github.com/AsaadNadeem" target="_blank">
            <Image src="/2504911.png" alt="LinkedIn" width={27} height={27} />
          </a>
        </div>

        <a
          href="mailto:asaadnadeem686@gmail.com"
          className="hidden md:flex rounded-full border border-amber-50/30 px-7 py-2 text-sm transition hover:bg-amber-50 hover:text-gray-950"
        >
          Contact
        </a>
      </div>
    </header>
  );
};

export default Header;
