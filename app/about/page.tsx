import React from "react";
import Image from "next/image";
import Photo from "../../public/assets/ramon.jpeg";
import Link from "next/link";

export default function About() {
  return (
    <div>
      <section className="bg-gray-900">
        <div className="min-h-full">
          <div className="flex flex-col h-full">
            <div className="text-center mb-4 md:py-6">
              <p className="font-extrabold text-4xl sm:text-5xl">About</p>
            </div>
            <div className="flex flex-col mb-4">
              <div className="flex justify-center">
                <Image
                  className="w-40 h-40 sm:w-52 sm:h-52 rounded-full mb-4"
                  src={Photo}
                  alt="Author's Photo"
                />
              </div>
              <span className="font-semibold text-lg sm:text-xl mb-1 text-center">
                Ramon Ivandy Setiawan
              </span>
              <span className="text-sm sm:text-base text-gray-300 text-center">
                IT Staff at PT Yamaha Musical Products Asia
              </span>
            </div>
            <div className="">
              <p className="text-base mb-4">
                As a fast-paced learner who can quickly adapt to new roles and
                acquire necessary skills, Ramon has 4 years experience in IT
                field, focusing on web development with JavaScript (Node.js) and
                PHP using Laravel/CI frameworks, along with PostgreSQL or
                MongoDB databases. Familiar with Git for version control,
                Docker, Kafka, Redis, and Mocha/Chai for unit testing. Do code
                using Windows Subsystem for Linux and Postman for API testing.
                Currently, learning Golang, Python, and DevOps culture (Docker,
                Kubernetes).
              </p>
              <p className="font-semibold text-xl sm:text-2xl mb-3">Skills</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-yellow-400 text-black px-1">
                  Javascript
                </span>
                <span className="bg-green-600 text-white px-1">Node.js</span>
                <span className="bg-indigo-600 text-white px-1">PHP</span>
                <span className="bg-blue-500 text-white px-1">Golang</span>
                <span className="bg-gray-700 text-white px-1">Express.js</span>
                <span className="bg-red-600 text-white px-1">Laravel</span>
                <span className="bg-red-500 text-white px-1">
                  CodeIgniter 3
                </span>
                <span className="bg-blue-600 text-white px-1">Docker</span>
                <span className="bg-blue-600 text-white px-1">Kubernetes</span>
                <span className="bg-gray-800 text-white px-1">Kafka</span>
                <span className="bg-yellow-600 text-white px-1">
                  Mocha/chai
                </span>
                <span className="bg-orange-500 text-white px-1">Postman</span>
                <span className="bg-sky-900 text-white px-1">Linux / WSL</span>
                <span className="bg-red-700 text-white px-1">Fortigate</span>
              </div>
              <p className="font-extrabold mt-3">
                Download my Resume{" "}
                <span className="text-fuchsia-400">
                  <Link
                    target="_blank"
                    href="/pdf/2024_CV_Ramon Ivandy Setiawan.pdf"
                    locale={false}
                  >
                    Here!
                  </Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
