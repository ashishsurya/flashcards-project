import Image from 'next/image';
import { Poppins } from 'next/font/google';
import { useUser } from '@clerk/nextjs';
import Sidebar from '@/components/Sidebar';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export default function Home() {
  const { user } = useUser();

  return (
    <div className={poppins.className}>
      <Sidebar />
      <div className='ml-[350px] p-8'>
<p>hello</p>
      </div>
    </div>
  );
}
