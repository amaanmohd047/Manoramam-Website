import Image from "next/image";
import Link from "next/link";

import logo from "@/public/logo-full.png";
import CinzelWrapper from "./ui/CinzelWrapper";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3 z-10">
      <Image
        src={logo}
        alt="Manoramam logo"
        height="60"
        width="60"
        quality={100}
      />
      <CinzelWrapper>
        <span className={"text-xl text-accent-350"}>Manoramam Hotel</span>
      </CinzelWrapper>
    </Link>
  );
}

export default Logo;
