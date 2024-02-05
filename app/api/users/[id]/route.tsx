import { NextRequest, NextResponse } from "next/server";

import schema from "@/app/api/users/schema";
import prisma from "@/prisma/client";

interface Props {
  params: { id: string };
}

export async function GET(request: NextRequest, { params: { id } }: Props) {
  const user = await prisma.user.findUnique({
    where: {
      id: parseInt(id),
    }
  });

  if (user == null) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  return NextResponse.json(user);
}

export async function PUT(request: NextRequest, { params }: Props) {
  const body = await request.json();

  const validation = schema.safeParse(body);

  if (validation.success === false) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

  const id = parseInt(params.id);

  const user = await prisma.user.findUnique({
    where: {
      id,
    },
  });

  if (user == null) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  const updatedUser = await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      name: body.name,
      email: body.email,
    },
  });

  return NextResponse.json(updatedUser);
}

export async function DELETE(request: NextRequest, { params }: Props) {
  const id = parseInt(params.id);

  const user = await prisma.user.findUnique({
    where: {
      id,
    },
  });

  if (user == null) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  await prisma.user.delete({
    where: {
      id: user.id,
    },
  });

  // return NextResponse.json({});
  return new Response(null, {
    status: 204,
  });
}
