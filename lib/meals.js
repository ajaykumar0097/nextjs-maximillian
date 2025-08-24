import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
import fs from "node:fs";
import { writeFile } from "fs/promises";

const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return db.prepare("SELECT * FROM meals").all();
}

export function getMeal(slug) {
  //   await new Promise((resolve)=>setTimeout(resolve,2000))
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}

export async function saveMeal(meal) {
  // Generate slug
  meal.slug = slugify(meal.title, { lower: true });

  // Sanitize instructions
  meal.instructions = xss(meal.instructions);

  // Extract file extension
  const extension = meal.image.name.split(".").pop();
  const fileName = `${meal.slug}.${extension}`;

  // Save image to /public/images
  const bufferedImage = await meal.image.arrayBuffer();
  await writeFile(`public/images/${fileName}`, Buffer.from(bufferedImage));

  // Replace image path for DB
  meal.image = `/images/${fileName}`;

  // Insert into DB
  db.prepare(`
    INSERT INTO meals
    (title, summary, instructions, creator, creator_email, image, slug)
    VALUES (
      @title,
      @summary,
      @instructions,
      @creator,
      @creator_email,
      @image,
      @slug
    )
  `).run(meal);

  
}