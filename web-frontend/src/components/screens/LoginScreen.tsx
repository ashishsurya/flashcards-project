import { Input } from '../common/Input';
import logo from '../../../public/logo.svg';
import { trpc } from '../../utils/trpc';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { toast } from 'react-hot-toast';
export const LoginScreen = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const { mutate, isLoading : isSigningIn } = trpc.auth.login.useMutation({
    onError: (error) => {
      const fieldErrors = error.data?.zodError?.fieldErrors;
      const errorsArray: string[] = [];
      if (fieldErrors) {
        Object.entries(fieldErrors).forEach(([, errors]) => {
          if (errors) {
            for (const err in errors) {
              errorsArray.push(errors[err]);
            }
          }
        });
      }
      // tell the user about first error.
      toast.error(errorsArray[0]);
    },
  });

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (emailRef.current && passwordRef.current) {
      const email = emailRef.current.value;
      const password = passwordRef.current.value;

      mutate({ email, password });
    }
  };

  return (
    <div className='grid place-items-center h-full md:h-[80vh]'>
      <div className='p-8  border-slate-600 rounded-md flex flex-col space-y-7'>
        <img
          src={logo}
          alt=''
          className='w-[300px] mx-auto mb-4'
          loading='lazy'
        />
        <h1 className='text-3xl md:text-5xl font-mono text-[#929292]'>
          A minimalist flashcards app
        </h1>
        <form
          onSubmit={handleLogin}
          className='flex flex-col space-y-5 items-stretch w-3/5 mx-auto'
        >
          <Input
            placeholder='enter your email address'
            type='email'
            label='Email'
            fullWidth
            ref={emailRef}
          />
          <Input
            placeholder='enter your password'
            type='password'
            label='Password'
            fullWidth
            ref={passwordRef}
          />
          <button
            type='submit'
            className='bg-slate-200 text-slate-800 px-4 py-2 tracking-tighter font-bold hover:bg-opacity-90'
          >
            Login
          </button>
          <Link
            className='self-center text-slate-400 hover:underline'
            to={'/register'}
          >
            Don't have an account create one here.
          </Link>
        </form>
      </div>
    </div>
  );
};
