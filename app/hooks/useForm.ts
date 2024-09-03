import type { State } from "@/app/page";
import { request } from "@/app/libs/api";
import { useActionState } from "react";

export const useForm = () => {
  return useActionState<Promise<State>, FormData>(async (_, formData) => {
    try {
      const res = await request({
        delay: parseInt(formData.get("delay") as string, 10),
        body: JSON.parse(formData.get("body") as string),
        status: parseInt(formData.get("status") as string, 10),
      });
      const data = (await res.json()) as any;
      if (res.status < 300) {
        return {
          data: data,
          error: null,
        };
      } else {
        return {
          data: null,
          error: data,
        };
      }
    } catch (error) {
      return {
        data: null,
        error: error,
      };
    }
  }, null);
};
