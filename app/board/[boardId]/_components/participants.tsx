import { Skeleton } from '@/components/ui/skeleton';

export const Participants = () => {
  return (
    <div className='absolute top-2 right-2 h-12 bg-white rounded-md p-3 flex items-center shadow-md'>
      Participants
    </div>
  );
};

Participants.Skeleton = function ParticipantSkelton() {
  return (
    <div className='absolute top-2 right-2 h-12 bg-white rounded-md p-3 flex items-center shadow-md w-[300px]'>
      <Skeleton className='w-full h-full bg-muted-400' />
    </div>
  );
};
