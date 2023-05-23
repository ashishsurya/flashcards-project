'use client';

import type { User } from '@clerk/nextjs/server';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { LogOut, LogOutIcon } from 'lucide-react';
import { SignOutButton } from '@clerk/clerk-react';

export const SidebarUser = ({
  name,
  img_url,
}: {
  name: string;
  img_url: string | undefined;
}) => {
  const fallBack = name
    .split(' ')
    .map((x) => x[0])
    .join('');
  return (
    <div className='flex flex-row items-center gap-5 p-2'>
      <Avatar className=''>
        <AvatarImage className='' src={img_url} />
        <AvatarFallback>{fallBack}</AvatarFallback>
      </Avatar>
      <p className='text-large flex-1 font-medium tracking-tight'>{name}</p>
      <SignOutButton>
        <Button variant={'destructive'} className='text-xs'>
          Logout
        </Button>
      </SignOutButton>
    </div>
  );
};
