import Navigation from "@/app/_components/Navigation";
import Logo from "@/app/_components/Logo";

function Header() {
  return (
    <header className="border-b-[0.5px] border-primary-100 px-8 py-4 scroll-smooth">
      <div className="flex justify-between bg-transparent items-center max-w-7xl mx-auto">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
