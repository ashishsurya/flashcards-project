import { Sidebar } from './Sidebar';
import { DeckView } from './display/DeckView';

export const AppWrapper = () => {
  return (
    <div className='flex h-screen flex-row'>
      <div className='flex-[3] p-4'>
        <Sidebar />
      </div>
      <div className='flex-[9] p-4'>
        <DeckView />
      </div>
    </div>
  );
};
