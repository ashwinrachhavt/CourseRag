import { connect } from "@planetscale/database"
import {config} from "../db/config"
import { drizzle } from 'drizzle-orm/planetscale-serverless'
import { courses, authors, categories } from "../db/schema"
import { eq } from "drizzle-orm"

export default async function getAllCourses(): Promise <Course[]> {

    const conn = connect(config)
    const db = drizzle(conn)

    const results : Course[] = await db.select({
        course: courses.course,
        author: authors.author,
        category: categories.category,
    })

        .from(courses)
        .innerJoin(authors, eq(courses.authorId, authors.id))
        .innerJoin(categories, eq(courses.categoryId, categories.id))

    return results
}