import { mysqlTable, mysqlSchema, AnyMySqlColumn, primaryKey, unique, int, varchar, index } from "drizzle-orm/mysql-core"
import { sql } from "drizzle-orm"


export const authors = mysqlTable("authors", {
	id: int("id").autoincrement().notNull(),
	author: varchar("author", { length: 255 }).notNull(),
},
(table) => {
	return {
		authorsIdPk: primaryKey({ columns: [table.id], name: "authors_id_pk"}),
		author: unique("author").on(table.author),
	}
});

export const categories = mysqlTable("categories", {
	id: int("id").autoincrement().notNull(),
	category: varchar("category", { length: 255 }).notNull(),
},
(table) => {
	return {
		categoriesIdPk: primaryKey({ columns: [table.id], name: "categories_id_pk"}),
		category: unique("category").on(table.category),
	}
});

export const courses = mysqlTable("courses", {
	id: int("id").autoincrement().notNull(),
	course: varchar("course", { length: 100 }).notNull(),
	authorId: int("author_id").notNull(),
	categoryId: int("category_id").notNull(),
},
(table) => {
	return {
		authorIdIdx: index("author_id_idx").on(table.authorId),
		categoryIdIdx: index("category_id_idx").on(table.categoryId),
		coursesIdPk: primaryKey({ columns: [table.id], name: "courses_id_pk"}),
		course: unique("course").on(table.course),
	}
});