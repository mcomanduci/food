"use client";

import ImagePicker from "@/components/meals/image-picker";
import MealsFormSubmit from "@/components/meals/meals-form-submit";
import { shareMeal } from "@/lib/action";
import { useActionState } from "react";

export default function ShareMealPage() {
  const [state, formAction] = useActionState(shareMeal, { message: "" });

  return (
    <>
      <header className="mx-auto mt-12 mb-20 max-w-300 text-center text-2xl w-[90%]">
        <h1 className="font-montserrat">
          Share your{" "}
          <span className="bg-[linear-gradient(90deg,#f9572a,#ff8a05)] bg-clip-text [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
            favorite meal
          </span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className="w-[90%] max-w-300 mx-auto my-12 text-white">
        <form className="max-w-200" action={formAction}>
          <div className="flex gap-4">
            <p className="w-full m-0">
              <label
                htmlFor="name"
                className="block mb-1 font-montserrat uppercase text-[#b3aea5] font-bold"
              >
                Your name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="block w-full py-2 px-4 border border-[#454952] bg-[#1c2027] rounded text-xl font-montserrat text-[#ddd6cb] focus:outline-[#f99f2a] focus:outline-1 focus:bg-[#1f252d]"
                required
              />
            </p>
            <p className="w-full m-0">
              <label
                htmlFor="email"
                className="block mb-1 font-montserrat uppercase text-[#b3aea5] font-bold"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="block w-full py-2 px-4 border border-[#454952] bg-[#1c2027] rounded text-xl font-montserrat text-[#ddd6cb] focus:outline-[#f99f2a] focus:outline-1 focus:bg-[#1f252d]"
                required
              />
            </p>
          </div>
          <p>
            <label
              htmlFor="title"
              className="block mb-1 font-montserrat uppercase text-[#b3aea5] font-bold"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="block w-full py-2 px-4 border border-[#454952] bg-[#1c2027] rounded text-xl font-montserrat text-[#ddd6cb] focus:outline-[#f99f2a] focus:outline-1 focus:bg-[#1f252d]"
              required
            />
          </p>
          <p>
            <label
              htmlFor="summary"
              className="block mb-1 font-montserrat uppercase text-[#b3aea5] font-bold"
            >
              Short Summary
            </label>
            <input
              type="text"
              id="summary"
              name="summary"
              className="block w-full py-2 px-4 border border-[#454952] bg-[#1c2027] rounded text-xl font-montserrat text-[#ddd6cb] focus:outline-[#f99f2a] focus:outline-1 focus:bg-[#1f252d]"
              required
            />
          </p>
          <p>
            <label
              htmlFor="instructions"
              className="block mb-1 font-montserrat uppercase text-[#b3aea5] font-bold"
            >
              Instructions
            </label>
            <textarea
              id="instructions"
              name="instructions"
              rows={10}
              className="block w-full py-2 px-4 border border-[#454952] bg-[#1c2027] rounded text-xl font-montserrat text-[#ddd6cb] focus:outline-[#f99f2a] focus:outline-1 focus:bg-[#1f252d]"
              required
            ></textarea>
          </p>
          <ImagePicker label="Your Image" name="image" />
          {state.message && <p>{state.message}</p>}
          <p className="text-right">
            <MealsFormSubmit />
          </p>
        </form>
      </main>
    </>
  );
}
