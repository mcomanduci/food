import fs from "node:fs";
import Database from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

const db = new Database("meals.db");

export interface Meal {
  title: string;
  name: string;
  slug: string;
  summary: string;
  instructions: string;
  image: File;
  createdAt: string;
  updatedAt: string;
  creator: string;
  email: string;
}

export async function getMeals() {
  // await new Promise((resolve) => setTimeout(resolve, 5000));
  // throw new Error("Failed to fetch meals");
  return db.prepare("SELECT * FROM meals").all();
}

export function getMeal(slug: string) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}

export async function saveMeal(meal: Meal) {
  meal.slug = slugify(meal.title, { lower: true, strict: true });
  meal.instructions = xss(meal.instructions);

  const extension = meal.image.name.split(".").pop();
  const fileName = `${meal.slug}.${extension}`;
  const imagePath = `public/images/${fileName}`;

  const bufferedImage = await meal.image.arrayBuffer();

  await fs.promises.writeFile(imagePath, Buffer.from(bufferedImage));

  meal.image = `/images/${fileName}` as unknown as File;

  const { title, summary, slug, instructions, image, creator, email } = meal;

  db.prepare(
    `INSERT INTO meals 
     (title, summary, instructions, creator, creator_email, image, slug) 
     VALUES (?, ?, ?, ?, ?, ?, ?)`
  ).run(title, summary, instructions, creator, email, image, slug);
}
