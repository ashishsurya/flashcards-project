import { forwardRef, useId } from 'react';

interface TextInputProps {
  type: 'text' | 'password' | 'email';
  placeholder: string;
  label?: string;
  fullWidth?: boolean;
  required?: boolean;
}

export const Input = forwardRef<HTMLInputElement, TextInputProps>(
  ({ type, placeholder, label, fullWidth, required }, ref) => {
    const id = useId();

    return (
      <div className='flex flex-col space-y-1'>
        {label && (
          <label className='font-semibold text-lg' htmlFor={label + id}>
            {label}
          </label>
        )}
        <input
          className={`bg-transparent px-4 py-2 border focus:border-2 focus:outline-none ${
            fullWidth && 'w-full'
          }}`}
          type={type}
          id={label + id}
          placeholder={placeholder}
          ref={ref}
          required={required}
        />
      </div>
    );
  }
);
