import { Sidebar } from '@/components/Sidebar';
import { Suspense } from 'react';

const Home = async () => {
  return (
    <main>
      {/* @ts-ignore */}
      <Sidebar />
      <div className='ml-[350px]'>
        <div className='text-large'>Hello</div>
      </div>
    </main>
  );
};

export default Home;
