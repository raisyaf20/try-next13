"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

async function search(product) {
  const res = await fetch(`https://dummyjson.com/products/search?q=${product}`);
  return res.json();
}

export default function HomeComponent() {
  const [inputSearch, setInputSearch] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [open, setOpen] = useState(false);

  const route = useRouter();

  useEffect(() => {
    async function fetchData() {
      const result = await search(inputSearch);
      setSearchResult(result);
    }

    fetchData();
  }, [inputSearch]);

  return (
    <section className="mt-7 ">
      <div className="container mx-auto">
        <nav className="flex flex-wrap justify-center">
          <input
            type="text"
            placeholder="Search"
            className={`p-2 ${
              open ? "w-[10rem]" : "hidden"
            } lg:w-1/2 border transition-all duration-500 border-slate-400 rounded-l-full focus:outline-none focus:border-teal-500 focus:ring-teal-500 focus:ring-1`}
            onChange={(e) => setInputSearch(e.target.value)}
            id="sr"
          />
          <label
            htmlFor="sr"
            onClick={() => setOpen(true)}
            className={`w-12 cursor-pointer p-2 border border-slate-400 border-l-0 ${
              open ? "rounded-r-full" : "rounded-full w-12 h-12 bg-slate-50"
            } flex justify-center duration-500 items-center`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-search"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
              <path d="M21 21l-6 -6"></path>
            </svg>
          </label>
        </nav>

        <div className="flex gap-5 justify-around flex-wrap p-4">
          {searchResult && searchResult.total !== 0 ? (
            searchResult.products.map((e, i) => (
              <div
                key={i}
                onClick={() => route.push(`/post/${e.id}`)}
                className="card-body border border-slate-200 hover:cursor-pointer hover:shadow-md hover:scale-105 duration-500 p-3 rounded-lg md:w-[16rem]"
              >
                <div className="relative w-[120px] lg:w-[190px] mx-auto">
                  <Image
                    src={e.id === 29 || e.id === 24 ? e.images[0] : e.thumbnail}
                    width="0"
                    height="0"
                    layout="responsive"
                    alt={e.title}
                    className="object-cover rounded-xl mb-1.5"
                  />
                </div>
                <h2 className="text-center text-sm sm:text-xl font-medium">
                  {e.title}
                </h2>
                <div className="block sm:flex gap-5 justify-between mt-1">
                  <p className="font-semibold text-md text-primary">
                    ${e.price}
                  </p>
                  <p>{e.category}</p>
                </div>
              </div>
            ))
          ) : (
            <p>Product not found</p>
          )}
        </div>
      </div>
    </section>
  );
}
