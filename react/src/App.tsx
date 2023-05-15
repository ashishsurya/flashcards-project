import {
  SignInButton,
  SignOutButton,
  SignedIn,
  SignedOut,
  useUser,
} from '@clerk/clerk-react';

export const App = () => {
  const { user } = useUser();
  return (
    <div>
      <SignedIn>
        <h1>hello from clerk</h1>
        {/* <pre>{JSON.stringify(user, null, 2)}</pre> */}
        <p>Welcome , {user?.fullName}</p>
        <SignOutButton />
      </SignedIn>
      <SignedOut>
        <h3>❌ OOPS, not singed in</h3>
        <SignInButton />
      </SignedOut>
    </div>
  );
};
