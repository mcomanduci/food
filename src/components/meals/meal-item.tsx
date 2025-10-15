import Link from "next/link";
import Image from "next/image";

interface MealItemProps {
  title: string;
  slug: string;
  image: string;
  summary: string;
  creator: string;
}

export default function MealItem({
  title,
  slug,
  image,
  summary,
  creator,
}: MealItemProps) {
  return (
    <article className="flex flex-col justify-between h-full rounded overflow-hidden transition duration-300 bg-[linear-gradient(90deg,#2c1e19,#25200f)] shadow-[0_0_12px_rgba(0,0,0,0.3)]">
      <header>
        <div className="relative h-60">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>
        <div className="pt-2 px-4">
          <h2 className="text-2xl font-montserrat m-0">{title}</h2>
          <p className="!text-xs text-[#cfa69b] italic m-0">by {creator}</p>
        </div>
      </header>
      <div className="flex flex-col justify-between h-full">
        <p className="px-4 pt-4 m-0">{summary}</p>
        <div className="p-4 text-right">
          <Link
            href={`/meals/${slug}`}
            className="inline-block px-4 py-2 rounded-lg bg-[linear-gradient(90deg,#f9572a,#ff9b05)] text-white font-bold hover:bg-[linear-gradient(90deg,#fd4715,#f9b241)] transition hover:shadow-[0_0_12px_rgba(242,100,18,0.8)]"
          >
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
}
