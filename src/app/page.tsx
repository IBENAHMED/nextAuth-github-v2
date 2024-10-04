import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import ButtonAuth from "./components/ButtonAuth";
import Secret from "./components/Secret";

export default function Home() {

  return (
    <div>
      <div>
        <nav className="flex justify-between">
          <Link href="#">Home</Link>
          <Link href="#">Home</Link>
          <Link href="#">Home</Link>
          <Secret />
        </nav>
        <div>
          <ButtonAuth />
        </div>
      </div>
    </div>
  );
}
