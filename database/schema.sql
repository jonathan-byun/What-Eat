set client_min_messages to warning;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;

create schema "public";

CREATE TABLE "public"."user" (
	"id" serial NOT NULL UNIQUE,
	"username" VARCHAR(255) NOT NULL UNIQUE,
	"email" VARCHAR(255) NOT NULL UNIQUE,
	"password" VARCHAR(255) NOT NULL,
	"activationToken" VARCHAR(255) NOT NULL UNIQUE,
	"confirmed?" BOOLEAN NOT NULL,
	CONSTRAINT "user_pk" PRIMARY KEY ("id")
);

insert into "user" ("username","email","password")
VALUES
  ('jonb','jonbpwns@gmail.com','password');
