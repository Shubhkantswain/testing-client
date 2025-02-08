import { json } from "@remix-run/node";
import { Form } from "@remix-run/react";
import * as cookie from "cookie";

export const action = async ({ request }: { request: Request }) => {
  const headers = new Headers();

  // Set a cookie with a value
  const cookieHeader = cookie.serialize("myCookie", "hello_remix", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: 60 * 60 * 24, // 1 day
  });

  headers.append("Set-Cookie", cookieHeader);

  return json({ success: true, message: "Cookie set successfully!" }, { headers });
};

export default function Index() {
  return (
    <div>
      <h1>Set Cookie Example</h1>
      <Form method="post">
        <button type="submit">Set Cookie</button>
      </Form>
    </div>
  );
}
