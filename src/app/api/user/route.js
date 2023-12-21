import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req, res) {
    try {
        const studentData = await req.json()
        const student = await prisma.User.create({
            data: studentData
        })
        return NextResponse.json({ success: true, data: student })
    } catch (e) {
        return NextResponse.json({ success: false, error: e }, {
            status: 500,
        })
    }
}

export async function GET(req, res) {
    try {
        const allStudents = await prisma.User.findMany()
        return NextResponse.json({ success: true, data: allStudents })
    } catch (e) {
        return NextResponse.json({ success: false, error: e }, {
            status: 500,
        })
    }
}