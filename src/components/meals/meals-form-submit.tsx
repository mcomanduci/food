"use client";

import { useFormStatus } from "react-dom";

export default function MealsFormSubmit() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="border-none py-3 px-8 bg-[linear-gradient(90deg,#f9572a,#ff9b05)] text-white rounded-xs cursor-pointer text-xl shadow-[0_2px_5px_rgba(0,0,0,0.3)] hover:bg-[linear-gradient(90deg,#fd4715,#f9b241)] disabled:bg-[linear-gradient(90deg,#ccc,#ccc)] disabled:cursor-not-allowed disabled:text-[#979797]"
    >
      {pending ? "Submitting..." : "Share Meal"}
    </button>
  );
}
