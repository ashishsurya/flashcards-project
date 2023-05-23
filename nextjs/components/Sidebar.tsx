import { auth, currentUser } from '@clerk/nextjs';
import { AvatarImage } from '@radix-ui/react-avatar';
import { SidebarUser } from './SidebarUser';
import { SidebarStacks } from './SidebarStacks';
import { Suspense } from 'react';

export const Sidebar = async () => {
  const user = await currentUser();

  return (
    <div className='fixed flex flex-col gap-3 h-screen w-[350px] border-r p-4'>
      <h3 className='text-2xl font-bold tracking-tighter'>Welcome, </h3>
      <SidebarUser
        name={`${user?.firstName} ${user?.lastName}`}
        img_url={user?.profileImageUrl}
      />
      <Suspense fallback={<>Loading.....</>}>
      {/* @ts-ignore */}
        <SidebarStacks />
      </Suspense>
    </div>
  );
};
