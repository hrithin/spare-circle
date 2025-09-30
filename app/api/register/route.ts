// app/api/auth/register/route.ts
import { prisma } from "@/lib/prisma";
import { hash } from "bcryptjs";

export async function POST(req: Request) {
  const { name, email, password } = await req.json();

  if (!email || !password) return new Response("Missing fields", { status: 400 });

  const existingUser = await prisma.user.findUnique({ where: { email } });
  if (existingUser) return new Response("User already exists", { status: 400 });

  const hashedPassword = await hash(password, 10);

  await prisma.user.create({
    data: { name, email, password: hashedPassword },
  });

  return new Response("User created", { status: 201 });
}
