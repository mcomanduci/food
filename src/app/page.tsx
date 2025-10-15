import ImageSlideshow from "@/components/images/images-slides";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="flex gap-12 mx-auto my-12 w-[90%] max-w-300">
        <div className="w-160 h-100">
          <ImageSlideshow />
        </div>
        <div>
          <div className="text-2xl">
            <h1 className="text-[2rem] font-bold font-montserrat tracking-[0.15rem] uppercase bg-[linear-gradient(90deg,#f9572a,#ffc905)] bg-clip-text [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              NextLevel Food for NextLevel Foodies
            </h1>
            <p>Taste & share food from all over the world.</p>
          </div>
          <div className="text-2xl flex gap-4">
            <Link
              rel="stylesheet"
              href="/community"
              className="inline-block mt-4 py-2 px-0 rounded-lg text-[#ff9b05] hover:text-[#f9b241] transition"
            >
              Join the Community
            </Link>
            <Link
              rel="stylesheet"
              href="/meals"
              className="inline-block mt-4 py-2 px-4 rounded-lg text-white bg-[linear-gradient(90deg,#f9572a,#ff9b05)] font-bold hover:bg-[linear-gradient(90deg,#fd4715,#f9b241)] transition"
            >
              Explore Meals
            </Link>
          </div>
        </div>
      </header>
      <main>
        <section className="flex flex-col text-2xl max-w-200 w-[90%] mx-auto my-8 text-center">
          <h2>How it works</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>

        <section className="flex flex-col text-2xl max-w-200 w-[90%] mx-auto my-8 text-center">
          <h2>Why NextLevel Food?</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
      </main>
    </>
  );
}
