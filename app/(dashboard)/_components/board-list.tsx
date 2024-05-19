'use client'

import {useQuery} from 'convex/react'
import { api } from '@/convex/_generated/api'
import { EmptyBoards } from "./empty-boards";
import { EmptyFavourites } from "./empty-favourites";
import { EmptySearch } from "./empty-search";
import { BoardCard } from './board-card';
import { NewBoardButton } from './new-board-button';

interface BoardListProps{
  organizationId: string;
  query: {
    search?: string;
    favourite?: string
  }
}

export const BoardList = ({organizationId,query}:BoardListProps ) => {
  const data = useQuery(api.boards.get, {orgId: organizationId})

  if(data === undefined){
    return (
      <div>
        <h2 className='text-3xl'>
          {query?.favourite ? 'Favourite Boards' : 'Team Boards'}
        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 mt-8 pb-10'>
          <NewBoardButton orgId={organizationId} disabled/>
          <BoardCard.Skeleton />
          <BoardCard.Skeleton />
          <BoardCard.Skeleton />
          <BoardCard.Skeleton />
          <BoardCard.Skeleton />
        </div>
      </div>
    )
  }

  if(!data?.length && query.search){
    return (
      <EmptySearch />
    )
  }


  if(!data?.length && query.favourite){
    return (
      <EmptyFavourites />
    )
  }

  if(!data?.length ){
    return (
      <EmptyBoards />
    )
  }
  return(
    <div>
      <h2 className='text-3xl'>{query?.favourite ? 'Favourite Boards' : 'Team Boards'}</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 mt-8 pb-10'>
        <NewBoardButton orgId={organizationId}/>
        {data?.map((board)=> (
           <BoardCard 
              key={board._id}
              id={board._id}
              imageUrl={board.imageUrl}
              authorName={board.authorName}
              authorId={board.authorId}
              createdAt={board._creationTime}
              title={board.title}
              orgId={board.orgId}
              isFavourite={false}  // TODO
           />
        ))}
      </div>
    </div>
  )
}