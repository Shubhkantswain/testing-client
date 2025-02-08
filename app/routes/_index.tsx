import { json } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";

export const loader = async () => {
  return json({ message: "Welcome to the SSR page in Remix!" });
};

export default function Index() {
  const data = useLoaderData<typeof loader>();

  return (
    <div>
      <h1>{data.message}</h1>
    </div>
  );
}
