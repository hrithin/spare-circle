"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { signOut, useSession } from "next-auth/react";


const Navbar = () => {

    const {data: session} = useSession()

  return (
    <nav className="w-full bg-white shadow-md px-6 py-3 flex items-center justify-between sticky top-0 z-50">
      {/* Logo */}
      <Link
        href="/"
        className="text-2xl font-extrabold text-blue-600 hover:text-blue-500 transition-colors"
      >
        SpareCircle
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-6">
        <Link
          href="/listings"
          className="text-gray-700 hover:text-blue-500 transition-colors font-medium"
        >
          My Listings
        </Link>
        <Link
          href="/favorites"
          className="text-gray-700 hover:text-blue-500 transition-colors font-medium"
        >
          Favorites
        </Link>
        <Link
          href="/messages"
          className="text-gray-700 hover:text-blue-500 transition-colors font-medium"
        >
          Messages
        </Link>

        {/* Profile Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="flex items-center gap-2 text-gray-700 hover:text-blue-500 transition-colors px-3 py-2"
            >
              <User className="w-4 h-4" /> {(session?.user.name)? session.user.name : "profile" }
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-44">
            <DropdownMenuItem asChild>
              <Link href="/profile">View Profile</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/settings">Settings</Link>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => signOut({ callbackUrl: "/auth/signin" })}>
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Post Ad Button */}
        <Button
          variant="outline"
          size="sm"
          className="ml-2 text-gray-700 hover:text-blue-500 transition-colors px-4 py-2 font-medium"
        >
          Post an Ad
        </Button>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="w-6 h-6" />
            </Button>
          </SheetTrigger>

          <SheetContent side="right" className="w-64 p-6">
            <SheetHeader>
              <SheetTitle className="text-lg font-semibold">Menu</SheetTitle>
              
                <SheetDescription className="hidden">
                  Navigate through your account and listings
                </SheetDescription>
             
            </SheetHeader>

            <div className="flex flex-col gap-4 mt-6">
              <Link
                href="/listings"
                className="text-gray-700 hover:text-blue-500 transition-colors font-medium"
              >
                Listings
              </Link>
              <Link
                href="/favorites"
                className="text-gray-700 hover:text-blue-500 transition-colors font-medium"
              >
                Favorites
              </Link>
              <Link
                href="/messages"
                className="text-gray-700 hover:text-blue-500 transition-colors font-medium"
              >
                Messages
              </Link>

              {/* Mobile Profile Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="flex items-center gap-2 w-full justify-start text-gray-700 hover:text-blue-500 transition-colors px-3 py-2"
                  >
                    <User className="w-4 h-4" />{(session?.user.name)? session.user.name : "profile" }
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-full">
                  <DropdownMenuItem asChild>
                    <Link href="/profile">View Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/settings">Settings</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => console.log("Logout clicked")}>
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Button
                className="mt-4 px-4 py-2"
                variant="outline"
                size="sm"
              >
                Post an Ad
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
