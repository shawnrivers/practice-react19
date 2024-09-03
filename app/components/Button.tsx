'use client';
import {useFormStatus} from 'react-dom';

export const Button: React.FC = () => {
  const {pending} = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="rounded border border-gray-300 p-2 disabled:opacity-50"
    >
      Submit
    </button>
  );
};
