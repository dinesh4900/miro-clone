'use client';

import { useOrganizationList } from '@clerk/nextjs';
import { Item } from './item';

export const List = () => {
  const { userMemberships } = useOrganizationList({
    userMemberships: { infinite: true },
  });

  if (!userMemberships.data?.length) return;

  return (
    <ul>
      {userMemberships.data?.map((x, idx) => (
        <Item
          key={idx}
          id={x.organization.id}
          imageUrl={x.organization.imageUrl}
          name={x.organization.name}
        />
      ))}
    </ul>
  );
};
