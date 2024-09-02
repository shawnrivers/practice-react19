import type { NextRequest } from "next/server";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const delay = parseInt(searchParams.get("delay") ?? "0", 10);
  const status = parseInt(searchParams.get("status") ?? "200", 10);
  const response = JSON.parse(searchParams.get("body") ?? "");

  await sleep(delay);
  return Response.json(response, {
    status,
  });
}
