"use client";
import Image from "next/image";
import Courses from "@/components/Courses";
import { useState } from "react";

export default function Home() {
  const [message, setMessage] = useState(null);
  function handleSubmit(e) {
    e.preventDefault();
    const element = document.querySelector("form");
    const formData = new FormData(element);
    fetch(
      "https://script.google.com/macros/s/AKfycbwHDMMaSzed97276Veqpe6tO66HW3pDNavbY6a8itqdUh2OklPzSLmM9ykhlqgye-90/exec",
      {
        redirect: "follow",
        method: "POST",
        body: formData,
      }
    );
    setMessage("✅Sucess");
    setTimeout(() => {
      setMessage(null);
    }, 1000);

    element.reset();
  }
  const [courses, setCourses] = useState([
    {
      course: "Automation testing",
      duration: "30 days",
    },
    {
      course: "Snowflake",
      duration: "30 days",
    },
    {
      course: "AWS + DevOps",
      duration: "2 months",
    },
    {
      course: "Performance Testing-Jmeter & Loadrunner",
      duration: "2 months",
    },
    {
      course: "SQL with Power Bi",
      duration: "45 days",
    },
    {
      course: "Salesforce(Admin + Development)",
      duration: "3 months",
    },
    {
      course: "CyberSecurity",
      duration: "3 months",
    },
  ]);
  return (
    <main
      id="home"
      className="
     flex min-h-screen flex-col items-center"
    >
      <div className="min-w-full min-h-screen flex justify-center font-semibold text-4xl">
        <div className="font-4xl h-96 w-96 text-green-400 flex justify-center items-center gap-2 top-40 absolute z-10">
          <div className=" bg-black flex-col ">
            <div className="text-black bg-green-400 px-4 py-2">Cloud9</div>
            <div className="text-black bg-green-400 px-4 py-2">
              Technologies
            </div>
          </div>
        </div>
        <Image className="mt-14" src="/images/final.jpg" fill />
      </div>
      <section id="courses" className="bg-[#fafafa]">
        <div className="mt-6 text-3xl font-semibold flex justify-center items-center mb-10">
          Courses
        </div>
        <div className="flex gap-6 flex-wrap justify-center my-4">
          {courses.map((course, index) => (
            <Courses key={index} course={course}></Courses>
          ))}
        </div>
      </section>
      <section
        id="about"
        className="bg-[#161616] h-auto w-full text-white flex justify-center"
      >
        <div className="w-full flex flex-col p-4 px-12 ">
          <div className="flex items-center justify-center m-4">
            <h1 className=" text-3xl font-bold text-zinc-300 border-b-4 border-yellow-600">
              About Us
            </h1>
          </div>
          <h2 className="text-2xl m-2 text-[#ffffff]">
            Real-Time Experts as Trainers
          </h2>
          <div className="m-2 text-graytext text-lg">
            You will Learn from the Experts from industry who are Passionate in
            sharing their Knowledge with Learners. Get Personally Mentored by
            the Experts
          </div>
          <h2 className="text-2xl m-2 text-[#ffffff]">Technical Experience</h2>
          <div className="m-2 text-graytext text-lg">
            Our team of experienced professionals has designed comprehensive
            courses with a focus on hands-on learning and practical knowledge.
            Our courses cover a range of topics from automation testing and
            performance testing to AWS and DevOps. We also offer courses on the
            latest technologies such as Snowflake, SQL with Power BI,
            Salesforce, and Cybersecurity.
          </div>
          <h2 className="text-2xl m-2 text-[#ffffff]">Job Support</h2>
          <div className="m-2 text-graytext text-lg">
            We understand the importance of staying up-to-date with the latest
            advancements in technology and are committed to providing you with
            the skills and knowledge you need to succeed in today's fast-paced
            digital world. Our courses are designed to help you develop
            real-world skills and gain the confidence and experience needed to
            propel your career forward.
          </div>
        </div>
        <div className="about w-1/3 flex justify-end object-cover">
          <Image
            src="/images/about.png"
            width={420}
            height={400}
            alt="coding courses"
          />
        </div>
      </section>
      <section id="contact" className="bg-[#ffffff] flex flex-col">
        <h1 className="flex justify-center items-center font-medium text-xl mt-8">
          Contact Us
        </h1>
        <div className="text-green-500 flex justify-center items-center p-2">
          {message}
        </div>
        <form className="form" onSubmit={(e) => handleSubmit(e)}>
          <div className="rounded-md my-4 w-96">
            <section>
              <div className="mx-2" for="name">
                Name *
              </div>
              <div>
                <input
                  id="name"
                  name="Name"
                  type="text"
                  required
                  placeholder="name"
                  className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                />
              </div>
            </section>
            <section>
              <div className="mx-2 mt-4" for="email">
                Email *
              </div>
              <div>
                <input
                  id="email"
                  name="Email"
                  type="email"
                  autocomplete="email"
                  placeholder="example@gmail.com"
                  required
                  className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                />
              </div>
            </section>
            <section>
              <div className="mx-2 mt-4" for="email">
                Phone Number *
              </div>
              <div>
                <input
                  id="number"
                  name="PhoneNumber"
                  type="tel"
                  autocomplete="number"
                  placeholder="1234567890"
                  pattern="[0-9]{10}"
                  required
                  className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                />
              </div>
            </section>
            <section>
              <div className="mx-2 mt-4" for="name">
                Description
              </div>
              <div>
                <textarea
                  id="description"
                  name="Description"
                  rows="4"
                  cols="50"
                  maxLength={300}
                  placeholder="Max 300 Characters"
                  className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 overflow-hidden resize-none"
                />
              </div>
            </section>
            <div className="flex justify-center items-center">
              <input
                className="bg-black text-[#ffffff] w-96 cursor-pointer p-1 my-6 rounded"
                type="submit"
              />
            </div>
          </div>
        </form>
      </section>
    </main>
  );
}
