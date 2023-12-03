import { NextResponse } from "next/server"
import getRandomQuote from "@/lib/getRandomCourse"

export async function GET(request: Request) {
    const quote = await getRandomQuote()

    return NextResponse.json(quote)
}