"use client";

import { request } from "@/app/libs/api";
import { useActionState } from "react";

export default function Home() {
  // Example of useActionState
  const [state, doAction, isPending] = useActionState<
    Promise<
      | {
          data: Record<string, unknown>;
          error: null;
        }
      | {
          data: null;
          error: Record<string, unknown>;
        }
      | null
    >,
    FormData
  >(async (_, formData) => {
    try {
      const res = await request({
        delay: parseInt(formData.get("delay") as string, 10),
        body: JSON.parse(formData.get("body") as string),
        status: parseInt(formData.get("status") as string, 10),
      });
      return {
        data: res as any,
        error: null,
      };
    } catch (error) {
      return {
        data: null,
        error: error as any,
      };
    }
  }, null);

  // Let's try
  // - useFormStatus
  // - useOptimistic
  // - use
  // - server component ?

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
        <button type="submit" disabled={isPending}>
          Submit
        </button>
      </form>
      <div>
        {isPending
          ? "loading..."
          : state === null
          ? "before action"
          : state.data !== null
          ? JSON.stringify(state.data)
          : (state.error as any)}
      </div>
    </main>
  );
}
