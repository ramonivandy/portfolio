import Link from "next/link";
import React from "react";

export default function Dashboard() {
  return (
    <div>
      <section className="bg-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-[calc(100vh-128px)]">
          <div className="text-left content-center">
            <h1 className="text-3xl font-bold sm:text-5xl">
             Hi, I am Ramon
              <strong className="font-medium sm:block">
                Backend Dev.
              </strong>
              <p className="font-normal text-3xl">Read more <Link className="text-lime-400 font-semibold" href={'/about'}>About me</Link> or <Link className="text-sky-400 font-semibold" href={'/contact'}>Contact me</Link></p>
            </h1>
          </div>
        </div>
      </section>
    </div>
  );
}
