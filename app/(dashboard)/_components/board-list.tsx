'use client'

import { EmptyBoards } from "./empty-boards";
import { EmptyFavourites } from "./empty-favourites";
import { EmptySearch } from "./empty-search";

interface BoardListProps{
  organizationId: string;
  query: {
    search?: string;
    favourite?: string
  }
}

export const BoardList = ({organizationId,query}:BoardListProps ) => {
  const data = [] //TODO Api call

  if(!data.length && query.search){
    return (
      <EmptySearch />
    )
  }


  if(!data.length && query.favourite){
    return (
      <EmptyFavourites />
    )
  }

  if(!data.length ){
    return (
      <EmptyBoards />
    )
  }
  return(
    <div>{JSON.stringify(query)}</div>
  )
}