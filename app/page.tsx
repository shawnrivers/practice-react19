"use client";

import { Button } from "@/app/components/Button";
import { Result } from "@/app/components/Result";
import { useForm } from "@/app/hooks/useForm";

export type State =
  | {
      data: Record<string, unknown>;
      error: null;
    }
  | {
      data: null;
      error: Record<string, unknown>;
    }
  | null;

export default function Home() {
  const [state, doAction, isPending] = useForm();

  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <a href="https://ja.react.dev/blog/2024/04/25/react-19">React19</a>
      <h1>useActionState</h1>
      <form
        action={doAction}
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
        }}
      >
        <label>
          Response Body
          <input
            type="text"
            name="body"
            defaultValue={JSON.stringify({ hello: "world!" })}
          />
        </label>
        <label>
          Response Status
          <input type="status" name="status" defaultValue={200} />
        </label>
        <label>
          Delay
          <input type="delay" name="delay" defaultValue={1000} />
        </label>
        <Button />
      </form>
      <Result state={state} pending={isPending} />
    </main>
  );
}
