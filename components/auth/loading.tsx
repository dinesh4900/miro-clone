import NextImage from 'next/image';

export const Loading = () => {
  return (
    <div className='h-full w-full flex flex-col  justify-center items-center'>
      <NextImage
        src='/logo.svg'
        width={120}
        height={120}
        alt='logo'
        className='animate-pulse duration-700'
      />
    </div>
  );
};
