-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE `authors` (
	`id` int AUTO_INCREMENT NOT NULL,
	`author` varchar(255) NOT NULL,
	CONSTRAINT `authors_id_pk` PRIMARY KEY(`id`),
	CONSTRAINT `author` UNIQUE(`author`)
);
--> statement-breakpoint
CREATE TABLE `categories` (
	`id` int AUTO_INCREMENT NOT NULL,
	`category` varchar(255) NOT NULL,
	CONSTRAINT `categories_id_pk` PRIMARY KEY(`id`),
	CONSTRAINT `category` UNIQUE(`category`)
);
--> statement-breakpoint
CREATE TABLE `courses` (
	`id` int AUTO_INCREMENT NOT NULL,
	`course` varchar(100) NOT NULL,
	`author_id` int NOT NULL,
	`category_id` int NOT NULL,
	CONSTRAINT `courses_id_pk` PRIMARY KEY(`id`),
	CONSTRAINT `course` UNIQUE(`course`)
);
--> statement-breakpoint
CREATE INDEX `author_id_idx` ON `courses` (`author_id`);--> statement-breakpoint
CREATE INDEX `category_id_idx` ON `courses` (`category_id`);
*/