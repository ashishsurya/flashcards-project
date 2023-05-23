import { SignIn } from '@clerk/nextjs';

export default function Page() {
  return (
    <div className='flex items-center flex-col gap-5 justify-center h-screen'>
      <h1 className='text-3xl lg:text-5xl font-bold tracking-tighter'>Sign in to space.repeat</h1>
      <SignIn />
    </div>
  );
}
