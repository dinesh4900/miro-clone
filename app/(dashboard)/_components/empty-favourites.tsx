export const EmptyFavourites = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      {/* Image for empty search - TODO */}
      <h2 className="text-2xl font-semibold  mt-6">No favourite board!</h2>
      <p className="text-muted-foreground text-sm mt-2">try favoriting a board</p>
    </div>
  );
}