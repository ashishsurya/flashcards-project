import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import SidebarStacksWrapper from './SidebarStacksWrapper';

export default function Sidebar() {
  return (
    <div className='fixed w-[350px] h-screen border-2 border-red-500'>
      <p>Sidebar</p>
      <SidebarStacksWrapper />
    </div>
  );
}
