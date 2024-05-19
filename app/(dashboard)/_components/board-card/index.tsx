'use client'

import NextLink from'next/link'
import NextImage from 'next/image'
import { Overlay } from './overlay';
import {formatDistanceToNow} from 'date-fns'
import { useAuth } from '@clerk/nextjs';
import { Footer } from './footer';
import {Skeleton} from '@/components/ui/skeleton'
interface BoardCardProps{
  id: string;
  imageUrl: string
  authorName: string
  authorId: string
  createdAt: number
  title: string
  orgId: string
  isFavourite: boolean
}

export const BoardCard = ({
  authorId,
  authorName,
  createdAt,
  id,
  imageUrl,
  isFavourite,
  orgId,
  title
}: BoardCardProps) => {

  const { userId } = useAuth()

  const authorLabel = userId === authorId ? 'You' : authorName
  const createdAtLabel = formatDistanceToNow(createdAt)


  return (
    <NextLink href={`/board/${id}`}>
      <div className='group aspect-[100/127] border rounded-lg flex flex-col justify-between overflow-hidden'>
        <div className='relative flex-1 bg-amber-50'>
          <NextImage 
            src={imageUrl}
            alt={title}
            fill
            className='object-fill'
          />
          <Overlay />
        </div>
        <Footer 
          isFavourite={isFavourite}
          title={title}
          authorLabel={authorLabel}
          createdAtLabel={createdAtLabel}
          disabled={false}
          onClick={()=>{}}
        />
      </div>
    </NextLink>
  )
}

BoardCard.Skeleton = function BoardCardSkeleton() {
  return (
    <div className='aspect-[100/127] rounded-lg overflow-hidden'>
      <Skeleton className='h-full w-full'/>
    </div>
  )
}