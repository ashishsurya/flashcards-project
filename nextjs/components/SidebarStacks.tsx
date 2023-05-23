import { ScrollArea } from './ui/scroll-area';

const getStacks = async (): Promise<{ title: string }[]> => {
  return new Promise((res) => {
    setTimeout(() => {
      const stacks = Array(20).map((_, i) => ({ title: `Stack ${i}` }));
      res(stacks);
    }, 2000);
  });
};

export const SidebarStacks = async () => {
  const stacks = await getStacks();
  return (
    <ScrollArea className='h-full w-full '>
      <div className='p-4 border'>
        {stacks.map((stack) => (
          <div key={stack.title} className='border w-full h-fit text-sm'>
            {stack.title}
          </div>
        ))}
      </div>
    </ScrollArea>
  );
};
