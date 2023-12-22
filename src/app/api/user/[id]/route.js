import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// GET A SPECIFIC STUDENT
export async function GET(req, { params }) {
    try {
        const id = params.id
        const student = await prisma.User.findUnique({
            where: {
                id: parseInt(id),
            },
        })
        return NextResponse.json({ success: true, data: student })
    } catch (e) {
        return NextResponse.json({ success: false, error: e }, {
            status: 500,
        })
    }
}

// UPDATE A SPECIFIC STUDENT
export async function PATCH(req, { params }) {
    try {
        const id = params.id
        const bodyData = await req.json()
        console.log(bodyData)
        const updatedStudent = await prisma.User.update({
            where: {
                id: parseInt(id),
            },
            data: bodyData
        })
        return NextResponse.json({ success: true, data: updatedStudent })
    } catch (e) {
        console.log(e)
        return NextResponse.json({ success: false, error: e }, {
            status: 500,
        })
    }
}

// DELETE A SPECIFIC STUDENT
export async function DELETE(req, { params }) {
    try {
        const id = params.id
        console.log(id)
        const student = await prisma.User.delete({
            where: {
                id: parseInt(id),
            },
        })
        return NextResponse.json({ success: true, data: student })
    } catch (e) {
        console.log(e)
        return NextResponse.json({ success: false, error: e }, {
            status: 500,
        })
    }
}