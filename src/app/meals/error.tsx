"use client";

export default function MealsError({ error }: { error: Error }) {
  return (
    <div className="text-center my-24 mx-auto">
      <h2 className="text-2xl font-bold mb-4 font-montserrat">
        Failed to load meals
      </h2>
      <p className="mb-8">
        There was an error fetching the meals. <br /> Please try again later.
      </p>
      <p>{error.message}</p>
      <button
        onClick={() => window.location.reload()}
        className="px-4 py-2 rounded-lg bg-[linear-gradient(90deg,#f9572a,#ff9b05)] text-white font-bold hover:bg-[linear-gradient(90deg,#fd4715,#f9b241)] transition"
      >
        Retry
      </button>
    </div>
  );
}
