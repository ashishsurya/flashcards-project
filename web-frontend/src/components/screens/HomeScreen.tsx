import { ProtectedRoute } from '../common/ProtectedRoute';

export const HomeScreen = () => {
  return (
    <ProtectedRoute>
      <div>
        <h1 className='text-center text-5xl tracking-tight font-bold'>
          Welcome to flashcards app
        </h1>
      </div>
    </ProtectedRoute>
  );
};
