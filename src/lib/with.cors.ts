import { NextResponse } from "next/server";

const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN || "*";

export function withCORS(response: Response) {
  const res = new NextResponse(response.body, response);

  res.headers.set("Access-Control-Allow-Origin", "http://localhost:3000");
  res.headers.set("Access-Control-Allow-Credentials", "true");
  res.headers.set("Access-Control-Allow-Methods", "GET,DELETE,PATCH,POST,PUT");
  res.headers.set(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, Authorization, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );

  return res;
}

export function handleOptions() {
  const res = new NextResponse(null, { status: 204 });

  res.headers.set("Access-Control-Allow-Origin", "http://localhost:3000");
  res.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.headers.set(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, Authorization, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );
  res.headers.set("Access-Control-Allow-Credentials", "true");
  return res;
}
