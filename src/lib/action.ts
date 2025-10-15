"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import type { Meal } from "./meals";

function isInvalidText(text: string) {
  return !text || text.trim().length === 0;
}

export async function shareMeal(
  state: { message: string | null },
  formData: FormData
) {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image") as File,
    name: formData.get("name"),
    creator: formData.get("name"),
    email: formData.get("email"),
  };

  if (
    isInvalidText(meal.title as string) ||
    isInvalidText(meal.summary as string) ||
    isInvalidText(meal.instructions as string) ||
    isInvalidText(meal.creator as string) ||
    isInvalidText(meal.email as string) ||
    !meal.email?.toString().includes("@") ||
    !meal.image ||
    meal.image.size === 0
  ) {
    return {
      message: "Invalid input - please check your data.",
    };
  }

  await saveMeal(meal as Meal);
  redirect("/meals");
}
