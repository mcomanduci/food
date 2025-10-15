import MealItem from "./meal-item";

interface MealsGridProps {
  meals: {
    id: string;
    title: string;
    slug: string;
    image: string;
    summary: string;
    creator: string;
  }[];
}

export default function MealsGrid({ meals }: MealsGridProps) {
  return (
    <ul className="w-[90%] max-w-360 grid grid-cols-[repeat(auto-fill,minmax(20rem,1fr))] gap-20 mx-auto my-8">
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
}
