import { getMeals } from "@/lib/meals";
import MealsGrid from "./meals-grid";

export default async function MealsLoader() {
  const meals = (await getMeals()) as {
    id: string;
    title: string;
    slug: string;
    image: string;
    summary: string;
    creator: string;
  }[];

  return <MealsGrid meals={meals} />;
}
