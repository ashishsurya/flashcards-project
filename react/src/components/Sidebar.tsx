import { useUser } from '@clerk/clerk-react';
import { useCallback } from 'react';
import { UserCard } from './display/UserCard';

export const Sidebar = () => {
  const { user } = useUser();

  type UserType = typeof user;

  const filterUserForDisplay = useCallback((user: UserType) => {
    return {
      fullName: user?.fullName,
      imageUrl: user?.experimental_imageUrl,
    };
  }, []);

  return (
    <div>
      <UserCard user={filterUserForDisplay(user)} />
    </div>
  );
};
