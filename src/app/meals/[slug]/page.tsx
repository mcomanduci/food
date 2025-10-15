import { getMeal } from "@/lib/meals";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface MealPageProps {
  params: {
    slug: string;
  };
}

interface Meal {
  id: number;
  title: string;
  image: string;
  creator: string;
  creator_email: string;
  summary: string;
  instructions: string;
}

export async function generateMetadata({ params }: MealPageProps) {
  const meal = getMeal(params.slug) as Meal;
  if (!meal) {
    return {
      title: "Meal Not Found - NextLevel Food",
      description: "The meal you are looking for does not exist.",
    };
  }
  return {
    title: `${meal.title} - NextLevel Food`,
    description: meal.summary,
  };
}

export default function MealPage({ params }: MealPageProps) {
  const meal = getMeal(params.slug) as Meal;
  if (!meal) {
    notFound();
  }

  meal.instructions = meal.instructions.replaceAll(/\n/g, "<br/>");

  return (
    <>
      <header className="flex px-8 py-4 gap-12 m-auto max-w-320">
        <div className="relative w-120 h-80">
          <Image
            src={meal.image}
            alt={meal.title}
            fill
            className="object-cover rounded-lg shadow-[0_2px_10px_rgba(0,0,0,0.5)] animate-[fade-slide-in-from-left_1s_ease-out_forwards]"
            priority
          />
        </div>
        <div className="pt-2 px-4 max-w-160 animate-[fade-slide-in-from-right_1s_ease-out_forwards]">
          <h1 className="m-0 text-[3.5rem] leading-[1.2] uppercase font-montserrat shadow-[0_0_0.5_rgba(0,0,0,0,0.5)]">
            {meal.title}
          </h1>
          <p className="text-2xl text-[#cfa69b] italic">
            by{" "}
            <Link
              href={`mailto:${meal.creator_email}`}
              className="bg-[linear-gradient(90deg,#f9572a,#ff8a05)] bg-clip-text [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] hover:text-shadow-[0_0_18px_rgba(248,190,42,0.8)] transition"
            >
              {meal.creator}
            </Link>
          </p>
          <p className="text-2xl">{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className="text-xl bg-[#6e6464] text-[#13120f] shadow-[0_0_0.5_rgba(0,0,0,0,0.5)] p-8 pt-2 m-8 rounded-lg max-w-240 mx-auto animate-[fade-slide-in-from-bottom_1s_ease-out_forwards]"
          dangerouslySetInnerHTML={{ __html: meal.instructions }}
        ></p>
      </main>
    </>
  );
}
