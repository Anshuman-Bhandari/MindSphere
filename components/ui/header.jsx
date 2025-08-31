import React from 'react'
import { SignedOut,SignInButton,UserButton,SignedIn } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from './button'
import { ChevronDown, FileText, GraduationCap, LayoutDashboard, PenBox, StarIcon, TypeOutline } from 'lucide-react'
import { DropdownMenu } from './dropdown-menu'
import { DropdownMenuTrigger } from './dropdown-menu'
import { DropdownMenuContent } from './dropdown-menu'
import { DropdownMenuItem } from './dropdown-menu'
import { checkUser } from '@/lib/checkUser'


const Header = async() => {
    await checkUser();
  return (
    <header className='fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-50 supports-[backdrop-filter]:bg-background/60'>

        <nav className='container mx-auto px-4 h-16 flex items-center justify-between'>
            <Link href="/">
                <Image 
                src="/logo.png" 
                alt="Sensai Logo" 
                width={200} 
                height={60}
                className="h-12 py-1 w-auto object-contain" 
                />
                
            </Link>

            <div className='flex items-centre space-x-2 md:space-x-4'>
                <SignedIn>
                    <Link href={"/dashboard"}> 
                        <Button variant="Outline">
                            <LayoutDashboard className='h-4 w-4'/>
                            <span className='hidden md:block'>Industry Insights</span>
                        </Button>
                    </Link>
                

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button>
                                <StarIcon className='h-4 w-4'/>
                                <span className='hidden md:block'>Growth Tools</span>
                                <ChevronDown className='h-4 w-4'/>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem>
                                <Link href={"/resume"} className='flex items-center gap-2'>
                                    <FileText className='h-4 w-4'/>
                                    <span>Build Resume</span>
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem> 
                                <Link href={"/ai-cover-letter"} className='flex items-center gap-2'>
                                    <PenBox className='h-4 w-4'/>
                                    <span>Cover Letter</span>
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link href={"/interview"} className='flex items-center gap-2'>
                                    <GraduationCap className='h-4 w-4'/>
                                    <span>Interview Prep</span>
                                </Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </SignedIn>

                <SignedOut>
                    <SignInButton>
                        <Button variant="Outline">Sign In</Button>
                    </SignInButton>
                </SignedOut>

                <SignedIn>
                    <UserButton 
                        appearance={{
                            elements:{
                                avatarBox: "w-10 h-10",
                                userButtonPopoverCard: "shadow-xl",
                                userPreviewMainIdentifier: "font-semibold",
                            },
                        }}
                        afterSignOutUrl='/'
                    />
                </SignedIn>
            </div>

        </nav>

    </header>
  )
}

export default Header