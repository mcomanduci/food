import { Suspense } from "react";
import MealsLoader from "@/components/meals/meals-loader";
import Link from "next/link";

export default function MealsPage() {
  return (
    <>
      <header className="mx-auto my-12 max-w-300 text-center text-2xl">
        <h1 className="font-montserrat">
          Delicious meals, created{" "}
          <span className="bg-[linear-gradient(90deg,#f9572a,#ffc905)] bg-clip-text [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
            by you
          </span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <p>
          <Link
            href="/meals/share"
            className="inline-block mt-4 px-4 py-2 rounded-lg bg-[linear-gradient(90deg,#f9572a,#ff9b05)] text-white font-bold hover:bg-[linear-gradient(90deg,#fd4715,#f9b241)] transition"
          >
            Share Your Favorite Recipe
          </Link>
        </p>
      </header>
      <main>
        <Suspense
          fallback={
            <p className="text-center animate-pulse">Fetching meals...</p>
          }
        >
          <MealsLoader />
        </Suspense>
      </main>
    </>
  );
}
