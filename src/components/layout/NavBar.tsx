"use client"
import Image from "next/image";
import Link from "next/link";
import Button from "../ui/Button";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { LuLogOut } from "react-icons/lu";
 
function NavBar() {
  return (
    <div className="flex justify-between items-center px-4 bg-primary h-14">
      <div className="flex items-center gap-2">
        <Image
          className="h-8 mt-[-10px]"
          src="/logo/logo_w.svg"
          alt="logo"
          width={100}
          height={48}
        />
        <div className="flex items-center gap-4 text-white">
          <Link href="/">قوالب</Link>
          <Link href="/">خدمات</Link>
          <Link href="/">تواصل</Link>
          <Link href="/">نحن</Link>
        </div>
      </div>
      <div>
       <SignedOut>
        <Link href="/sign-in">  
        <Button>تسجيل  </Button>
        </Link>
        <Link href="/sign-up">
        <Button className="bg-white text-primary" variant="outline">انشاء حساب  </Button>
        </Link>
       </SignedOut>
       <SignedIn>
       <UserButton>
       <UserButton.MenuItems>
          <UserButton.Action
            label="Open chat"
            labelIcon={<LuLogOut />}
            onClick={() => alert('init chat')}
          />
  
        </UserButton.MenuItems>
           
       </UserButton>
       </SignedIn>
      </div>
    </div>
  );
}

export default NavBar;
