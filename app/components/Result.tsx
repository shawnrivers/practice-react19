'use client';

import type {State} from '@/app/page';

export const Result: React.FC<{state: State; pending: boolean}> = ({
  state,
  pending,
}) => {
  return pending ? (
    <div>Loading...</div>
  ) : state === null ? (
    <div>Before action</div>
  ) : (
    <>
      {state?.data && <div>Succeeded: {JSON.stringify(state.data)}</div>}
      {state?.error && <div>Failed: {JSON.stringify(state.error)}</div>}
    </>
  );
};
