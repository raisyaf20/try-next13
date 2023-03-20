import Image from "next/image";
import Link from "next/link";

async function getDetail(id) {
  const detail = await fetch(`https://dummyjson.com/products/${id}`);
  return detail.json();
}

export default async function PageDetail({ params }) {
  const data = await getDetail(params.id);
  return (
    <section>
      <div className="container mx-auto">
        <div className="flex flex-wrap mt-3 lg:bg-slate-100 p-3 px-3 rounded-xl">
          <div className="relative max-w-sm w-full mx-auto mb-2 lg:w-1/2">
            <div className="absolute -left-11 -top-5 lg:-left-24 lg:-top-3">
              <Link href={"/"} className="group">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-arrow-narrow-left group-hover:-translate-x-1 duration-500"
                  width="37"
                  height="37"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M5 12l14 0"></path>
                  <path d="M5 12l4 4"></path>
                  <path d="M5 12l4 -4"></path>
                </svg>
              </Link>
            </div>
            <Image
              alt={data.title}
              src={data.thumbnail}
              width={10}
              height={10}
              layout="responsive"
              className="rounded-lg"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <p className="text-xl font-semibold mb-3 text-slate-800">
              {data.title}
            </p>
            <p className="text-base mb-3">{data.description}</p>
            <p className="font-semibold text-right">${data.price}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
