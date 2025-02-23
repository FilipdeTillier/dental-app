import { NextRequest, NextResponse } from "next/server";
import {
  getSession,
  withMiddlewareAuthRequired,
} from "@auth0/nextjs-auth0/edge";

export default withMiddlewareAuthRequired(async (req: NextRequest) => {
  const res = NextResponse.next();

  const user = await getSession(req, res);

  if (!user) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return res;
});

export const config = {
  matcher: "/dashboard",
};
