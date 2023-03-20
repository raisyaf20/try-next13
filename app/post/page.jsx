import Image from "next/image";
import Link from "next/link";

async function getDatas() {
  const products = await fetch("https://dummyjson.com/products?limit=5");
  return products.json();
}

export default async function Layout() {
  const { products } = await getDatas();

  return (
    <div className="container mx-auto">
      <div className="flex gap-5 justify-around flex-wrap">
        {products.map((e, i) => (
          <div
            key={i}
            className="card-body hover:shadow-xl hover:scale-110 duration-500 p-3 rounded-lg md:w-[16rem]"
          >
            <div className="relative w-[150px] mx-auto">
              <Image
                src={e.thumbnail}
                layout="responsive"
                width="0"
                height="0"
                alt={e.title}
                className="rounded-xl shadow-md"
              />
            </div>
            <div className="text-center">
              <h2 className="text-md font-semibold">{e.title}</h2>
              <p className="mb-2">${e.price}</p>
              <Link href={`/post/${e.id}`} className="block">
                <button className="py-1.5 px-7 rounded-full bg-teal-400">
                  Detail
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
