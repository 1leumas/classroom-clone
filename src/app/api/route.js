import { NextResponse } from "next/server";
import { Database } from "./database";
import { randomUUID } from "node:crypto";

const database = new Database();

export async function GET() {
  const dbResponse = database.select();
  return NextResponse.json(dbResponse);
}

export async function POST(request) {
  const data = await request.json();
  const newClass = {
    id: randomUUID(),
    title: data.title,
    professor: data.professor,
  };

  database.insert(newClass);
  return NextResponse.json({ success: true });
}

export async function DELETE(request) {
  const data = await request.json();
  database.delete(data.id);
  return NextResponse.json({ success: true });
}
