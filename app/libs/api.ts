export const request = async <T>(params: {
  body: T;
  delay?: number;
  status?: number;
}): Promise<Response> => {
  const { body, delay = 0, status = 200 } = params;
  const param = new URLSearchParams("");
  param.append("body", JSON.stringify(body));
  param.append("delay", delay.toString());
  param.append("status", status.toString());
  const response = await fetch("/api/echo?" + param.toString());
  console.log({ response });
  if (response.body === null) {
    throw new Error("response.body is null");
  }
  return response;
};
