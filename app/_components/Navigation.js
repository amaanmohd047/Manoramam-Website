import Link from "next/link";
import { auth } from "@/app/_lib/auth";
import Image from "next/image";

export default async function Navigation() {
  const session = await auth();

  return (
    <nav className="z-10 text-xl">
      <ul className="flex gap-16 items-center">
        <li>
          <Link
            href="/suites"
            className="hover:text-accent-500 transition-colors"
          >
            Suites
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="hover:text-accent-500 transition-colors"
          >
            About
          </Link>
        </li>
        <li>
          {session?.user ? (
            <>
              <Link
                href="/account"
                className="hover:text-accent-500 transition-colors flex justify-center items-center"
              >
                <img
                  src={session.user.image}
                  alt={`Profile picture of ${session.user.name}`}
                  className="h-10 rounded-full border-primary-800 border-2 mr-2"
                  referrerPolicy="no-referrer"
                />
                <span>Guest area</span>
              </Link>
            </>
          ) : (
            <>
              <Link
                href="/account"
                className="hover:text-accent-500 transition-colors"
              >
                Guest area
              </Link>
            </>
          )}
        </li>
      </ul>
    </nav>
  );
}
