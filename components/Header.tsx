"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import type React from "react" // Added import for React

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out bg-blur",
        isScrolled ? " backdrop-blur-md shadow-lg" : "bg-transparent",
      )}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-gradient hover:opacity-80 transition-opacity">
            My Portfolio
          </Link>
          <div className="hidden md:flex space-x-1">
            <NavigationMenu>
              <NavigationMenuList>
                <MenuItem href="#about">About</MenuItem>
                <MenuItem href="#skills">Skills</MenuItem>
                <MenuItem href="#experience">Experience</MenuItem>
                <MenuItem href="#works">Works</MenuItem>
                <MenuItem href="#contact">Contact</MenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col space-y-4 mt-4">
                <NavLink href="#about" onClick={() => setIsOpen(false)}>
                  About
                </NavLink>
                <NavLink href="#skills" onClick={() => setIsOpen(false)}>
                  Skills
                </NavLink>
                <NavLink href="#experience" onClick={() => setIsOpen(false)}>
                  Experience
                </NavLink>
                <NavLink href="#works" onClick={() => setIsOpen(false)}>
                  Works
                </NavLink>
                <NavLink href="#contact" onClick={() => setIsOpen(false)}>
                  Contact
                </NavLink>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}

const MenuItem = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <NavigationMenuItem>
    <Link href={href} legacyBehavior passHref>
      <NavigationMenuLink className={navigationMenuTriggerStyle()}>{children}</NavigationMenuLink>
    </Link>
  </NavigationMenuItem>
)

const NavLink = ({
  href,
  children,
  onClick,
}: {
  href: string
  children: React.ReactNode
  onClick?: () => void
}) => (
  <Link href={href} className="text-lg font-medium hover:text-primary transition-colors duration-200" onClick={onClick}>
    {children}
  </Link>
)

export default Header

