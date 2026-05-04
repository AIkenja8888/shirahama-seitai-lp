import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const BASIC_AUTH_USER = "demo";
const BASIC_AUTH_PASSWORD = "9876";

function unauthorized() {
  return new NextResponse("Authentication required", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Protected Area"',
    },
  });
}

export function proxy(request: NextRequest) {
  const authorization = request.headers.get("authorization");

  if (!authorization?.startsWith("Basic ")) {
    return unauthorized();
  }

  const encodedCredentials = authorization.slice("Basic ".length);
  const [user, password] = atob(encodedCredentials).split(":");

  if (user !== BASIC_AUTH_USER || password !== BASIC_AUTH_PASSWORD) {
    return unauthorized();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|avif|ico)$).*)"],
};
