import Image from "next/image";

import mealIcon from "@/assets/icons/meal.png";
import communityIcon from "@/assets/icons/community.png";
import eventsIcon from "@/assets/icons/events.png";

export const metadata = {
  title: "Community - NextLevel Food",
  description: "Join our community and share your favorite recipes!",
};

export default function CommunityPage() {
  return (
    <>
      <header className="mx-auto mt-12 mb-20 w-[90%] max-w-300 text-center text-2xl">
        <h1 className="font-montserrat">
          One shared passion:{" "}
          <span className="bg-[linear-gradient(90deg,#f9572a,#ff8a05)] bg-clip-text [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
            Food
          </span>
        </h1>
        <p>Join our community and share your favorite recipes!</p>
      </header>
      <main className="w-[90%] max-w-300 mx-auto text-center">
        <h2 className="font-montserrat text-[2rem]">Community Perks</h2>

        <ul className="my-12">
          <li className="flex flex-col items-center gap-4">
            <Image
              src={mealIcon}
              alt="A delicious meal"
              width={128}
              height={128}
              className="size-32 object-contain"
            />
            <p className="font-montserrat text-2xl font-bold">
              Share & discover recipes
            </p>
          </li>
          <li className="flex flex-col items-center gap-4">
            <Image
              src={communityIcon}
              alt="A crowd of people, cooking"
              width={128}
              height={128}
              className="size-32 object-contain"
            />
            <p className="font-montserrat text-2xl font-bold">
              Find new friends & like-minded people
            </p>
          </li>
          <li className="flex flex-col items-center gap-4">
            <Image
              src={eventsIcon}
              alt="A crowd of people at a cooking event"
              width={128}
              height={128}
              className="size-32 object-contain"
            />
            <p className="font-montserrat text-2xl font-bold">
              Participate in exclusive events
            </p>
          </li>
        </ul>
      </main>
    </>
  );
}
