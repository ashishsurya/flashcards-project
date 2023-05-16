export const UserCard = ({
  user,
}: {
  user: {
    fullName: string | null | undefined;
    imageUrl: string | undefined;
  };
}) => {
  return (
    <div className='flex gap-4 p-2 bg-zinc-900 rounded-lg items-center cursor-pointer select-none'>
      <img
        src={user.imageUrl}
        alt='profile_pic'
        width={50}
        height={50}
        className='rounded-full'
      />
      <p className='hidden md:inline-flex font-medium text-lg '>
        {user.fullName}
      </p>
    </div>
  );
};
