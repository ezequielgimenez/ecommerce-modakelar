import {
  getMeMiddleware,
  getMeController,
  updateUserController,
} from "controllers/me";

import { NextResponse } from "next/server";

async function getHandler(req: Request, data) {
  try {
    const result = await getMeController(data);
    if (!result.success) {
      return NextResponse.json(result, { status: 404 });
    } else {
      return NextResponse.json(result, { status: 201 });
    }
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}

export const GET = getMeMiddleware(getHandler);

export async function PUT(req: Request) {
  try {
    const body = await req.json();
    const result = await updateUserController(body);
    if (!result.success) {
      return NextResponse.json(result, { status: 400 });
    } else {
      return NextResponse.json(result, { status: 200 });
    }
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
