'use client';

import qs from 'query-string';
import { Search } from 'lucide-react';
import { useDebounceValue } from 'usehooks-ts';
import { ChangeEvent, useEffect, useState } from 'react';
import { Input } from './ui/input';
import { useRouter } from 'next/navigation';

export const SearchInput = () => {
  const router = useRouter();

  const [value, setValue] = useState('');
  const debouncedValue = useDebounceValue(value, 500);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    const url = qs.stringifyUrl(
      {
        url: '/',
        query: { search: debouncedValue[0] },
      },
      { skipEmptyString: true, skipNull: true }
    );
    router.push(url);
  }, [debouncedValue]);

  return (
    <div className='w-full relative flex'>
      <Search className='absolute top-1/2 left-3 -translate-y-1/2 text-muted-foreground w-4 h-4' />
      <Input
        className='w-full max-w-[516px] pl-9'
        placeholder='Search boards'
        onChange={handleChange}
      />
    </div>
  );
};
