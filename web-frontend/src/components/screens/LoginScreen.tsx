import { Input } from '../common/Input';
import logo from '../../../public/logo.svg';
import { trpc } from '../../utils/trpc';
export const LoginScreen = () => {
  const { mutate, isLoading, error } = trpc.auth.login.useMutation();

  return (
    <div className='grid place-items-center h-full md:h-[80vh]'>
      <div className='p-8  border-slate-600 rounded-md flex flex-col space-y-7'>
        <img src={logo} alt='' className='w-[300px] mx-auto mb-4' />
        <h1 className='text-3xl md:text-5xl font-mono text-[#929292]'>
          A minimalist flashcards app
        </h1>
        <form className='flex flex-col space-y-5 items-stretch w-3/5 mx-auto'>
          <Input
            placeholder='enter your email address'
            type='email'
            label='Email'
            fullWidth
            required
          />
          <Input
            placeholder='enter your password'
            type='password'
            label='Password'
            fullWidth
            required
          />
          <button className='bg-slate-200 text-slate-800 px-4 py-2 tracking-tighter font-bold hover:bg-opacity-90'>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
