'use client';

import { UserAvatar } from './user-avatar';
import { useOthers, useSelf } from '@/liveblocks.config';
import { connectionIdToColor } from '@/lib/utils';

const MAX_SHOW_USERS = 2;

export const Participants = () => {
  const users = useOthers();
  const currentUser = useSelf();
  const hasMoreUsers = users.length > MAX_SHOW_USERS;

  return (
    <div className='absolute top-2 right-2 h-12 bg-white rounded-md p-3 flex items-center shadow-md'>
      <div className='flex gap-x-2'>
        {users.slice(0, MAX_SHOW_USERS).map(({ connectionId, info }) => {
          return (
            <UserAvatar
              key={connectionId}
              src={info?.picture}
              name={info?.name}
              fallback={info?.name?.[0] || 'T'}
              borderColor={connectionIdToColor(connectionId)}
            />
          );
        })}
        {currentUser && (
          <UserAvatar
            borderColor={connectionIdToColor(currentUser?.connectionId)}
            src={currentUser?.info?.picture}
            name={currentUser?.info?.name}
            fallback={currentUser?.info?.name?.[0] || 'T'}
          />
        )}

        {hasMoreUsers && (
          <UserAvatar
            name={`${users.length - MAX_SHOW_USERS} more`}
            fallback={`+${users.length - MAX_SHOW_USERS}`}
          />
        )}
      </div>
    </div>
  );
};

export const ParticipantsSkeleton = () => {
  return (
    <div className='absolute top-2 right-2 h-12 bg-white rounded-md p-3 flex items-center shadow-md w-[300px]' />
  );
};
