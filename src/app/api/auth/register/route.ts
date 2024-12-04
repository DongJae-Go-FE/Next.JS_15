import { NextResponse, NextRequest } from "next/server";

import bcrypt from "bcryptjs";
import { dbComment } from "@/util/dbComment";
import { CreateUser } from "@/queries/users";

export async function POST(request: NextRequest) {
  const { name, email, password } = await request.json();

  await dbComment();

  const hashedPassword = await bcrypt.hash(password, 5);

  const newUser = {
    name,
    password: hashedPassword,
    email,
  };

  try {
    await CreateUser(newUser);
  } catch (e) {
    return new NextResponse(`에러: ${e}`, {
      status: 500,
    });
  }

  return new NextResponse("회원가입", {
    status: 201,
  });
}
