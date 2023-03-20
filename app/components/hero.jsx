import React from "react";
import hp from "@/app/assets/img/hp.png";
import hetset from "@/app/assets/img/hetset.png";
import Image from "next/image";
import Link from "next/link";

export default function HeroComponent() {
  return (
    <section className="container mx-auto mt-5">
      <div className="flex justify-center h-80 p-3 bg-gradient-to-br from-teal-400 to-fuchsia-400 rounded-lg shadow-lg lg:rounded-2xl">
        <div className="self-center w-full relative px-3 text-center  lg:w-1/2">
          <h1 className="text-2xl mb-1 font-bold text-slate-800 lg:text-4xl ">
            Order ya bro
          </h1>
          <p className="text-slate-700 text-base mb-1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Perferendis placeat vero culpa ut porro assumenda reiciendis fuga,
          </p>
          <Link href="/post" className="block mt-4">
            <button className="px-5 py-2.5 rounded-full shadow-lg text-slate-800 bg-teal-500">
              See Product
            </button>
          </Link>
          <div className="absolute w-[20rem] group hidden -top-20 right-[-17rem] lg:block">
            <Image
              src={hp}
              width="10"
              height="10"
              alt="Handphone"
              layout="responsive"
              className="shdw group-hover:scale-110 duration-500 group-hover:rotate-12"
            />
          </div>
          <div className="absolute group hidden  -top-24 left-[-20rem] lg:block">
            <Image
              src={hetset}
              width={200}
              height={200}
              alt="hetset"
              layout="responsive"
              className="shdw group-hover:scale-110 duration-500 group-hover:rotate-12 "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
