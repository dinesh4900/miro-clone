'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Poppins } from 'next/font/google';
import { api } from '@/convex/_generated/api';
import { Id } from '@/convex/_generated/dataModel';
import { useQuery } from 'convex/react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Hint } from '@/components/hint';
import { useRenameModal } from '@/store/use-rename-modal';
import { Actions } from '@/components/actions';
import { Menu } from 'lucide-react';

interface InfoProps {
  boardId: string;
}

const font = Poppins({ subsets: ['latin'], weight: '600' });

const TabSeperator = () => {
  return <div className='text-neutral-300 px-1.5'>|</div>;
};

export const Info = ({ boardId }: InfoProps) => {
  const { onOpen } = useRenameModal();
  const board = useQuery(api.board.get, { id: boardId as Id<'boards'> });
  console.log(board, '## board');

  if (!board) return <InfoSkeleton />;
  return (
    <div className='absolute top-2 left-2 bg-white rounded-md px-1.5 h-12 flex items-center shadow-md'>
      <Hint label='Go to boards' side='bottom' sideOffset={10}>
        <Button asChild variant={'board'} className='px-2'>
          <Link href='/'>
            <Image src='/logo.svg' alt='logo' height={40} width={40} />
            <span
              className={cn(
                'font-semibold text-xl ml-2 text-black',
                font.className
              )}
            >
              Board
            </span>
          </Link>
        </Button>
      </Hint>
      <TabSeperator />
      <Hint label='Edit title' side='bottom' sideOffset={10}>
        <Button
          variant={'board'}
          className='text-base px-2 font-normal'
          onClick={() => {
            onOpen(board._id, board.title);
          }}
        >
          {board.title}
        </Button>
      </Hint>
      <TabSeperator />
      <div className='ml-8'>
        <Actions
          id={board._id}
          title={board.title}
          side='bottom'
          sideOffset={10}
        >
          <div>
            <Hint label='Main menu' side='bottom' sideOffset={10}>
              <Button size='icon' variant='board'>
                <Menu />
              </Button>
            </Hint>
          </div>
        </Actions>
      </div>
    </div>
  );
};

export const InfoSkeleton = () => {
  return (
    <div className='absolute top-2 left-2 bg-white rounded-md px-1.5 h-12 flex items-center shadow-md w-[300px]' />
  );
};
