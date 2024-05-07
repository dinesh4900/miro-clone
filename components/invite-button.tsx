import { Plus } from 'lucide-react';
import { OrganizationProfile } from '@clerk/nextjs';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

export const InviteButton = () => {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant='outline'>
            <Plus className='h-4 w-4' />
            Invite members
          </Button>
        </DialogTrigger>
        <DialogContent className='p-0 bg-transparent border-0 max-w-[880px]'>
          <OrganizationProfile />
        </DialogContent>
      </Dialog>
    </div>
  );
};
