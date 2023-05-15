import {
  SignInButton,
  SignOutButton,
  SignedIn,
  SignedOut,
} from '@clerk/clerk-react';
import { AppWrapper } from './components/AppWrapper';

export const App = () => {
  return (
    <>
      <SignedOut>
        <LoginDisclaimer />
      </SignedOut>
      <SignedIn>
        <AppWrapper />
      </SignedIn>
    </>
  );
};

const LoginDisclaimer = () => {
  return (
    <div className='flex items-center justify-center flex-col h-[60vh] gap-8'>
      <h3 className='text-3xl font-bold'>Oops!!!, you are logged out</h3>
      <SignInButton>
        <button className='bg-white px-4 py-2 text-black'>Login</button>
      </SignInButton>
    </div>
  );
};
