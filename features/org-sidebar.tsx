'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { Poppins } from 'next/font/google';
import { cn } from '@/lib/utils';
import { OrganizationSwitcher } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';
import { LayoutDashboard, Star } from 'lucide-react';

const font = Poppins({ subsets: ['latin'], weight: '600' });

export const OrgSidebar = () => {
  const searchParams = useSearchParams();
  const favourites = searchParams.get('favourite');
  return (
    <div className='hidden lg:flex flex-col space-y-6 w-[206px] pl-5 pt-5'>
      <Link href='/'>
        <div className='flex items-center gap-x-2'>
          <Image src='./logo.svg' alt='logo' height={60} width={60} />
          <span className={cn('font-semibold text-2xl', font.className)}>
            Board
          </span>
        </div>
      </Link>
      <OrganizationSwitcher
        hidePersonal
        appearance={{
          elements: {
            rootBox: {
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
            },
            organizationSwitcherTrigger: {
              padding: '6px',
              width: '100%',
              borderRadius: '8px',
              border: '1px solid #E5E7EB',
              justifyContent: 'space-between',
              background: 'white',
            },
          },
        }}
      />
      <div className='space-y-1 w-full'>
        <Button
          variant={favourites ? 'ghost' : 'secondary'}
          asChild
          size='lg'
          className='font-normal justify-start px-2 w-full'
        >
          <Link href='/'>
            <LayoutDashboard className='w-4 h-4 mr-2' />
            Team boards
          </Link>
        </Button>
        <Button
          variant={favourites ? 'secondary' : 'ghost'}
          asChild
          size='lg'
          className='font-normal justify-start px-2 w-full'
        >
          <Link href={{ pathname: '/', query: { favourite: true } }}>
            <Star className='w-4 h-4 mr-2' />
            Favourite boards
          </Link>
        </Button>
      </div>
    </div>
  );
};
