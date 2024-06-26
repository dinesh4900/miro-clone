'use client';

import { Loader } from 'lucide-react';
import { InfoSkeleton } from './info';
import { ParticipantsSkeleton } from './participants';
import { ToolbarSkeleton } from './toolbar';

export const Loading = () => {
  return (
    <div className='w-full h-full relative bg-nuetral-100 touch-none flex items-center justify-center'>
      <Loader className='h-6 w-6 text-muted-foreground animate-spin' />
      <InfoSkeleton />
      <ParticipantsSkeleton />
      <ToolbarSkeleton />
    </div>
  );
};
