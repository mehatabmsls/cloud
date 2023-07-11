"use client";
export default function Courses({ course }) {
  return (
    <div className="bg-[#ffffff] text-ellipsis rounded-md p-4 gap-3 flex flex-col shadow-md w-72 mb-8">
      <div className="mb-2 font-medium text-xl">{course.course}</div>
      <div className="mb-2">Course Duration : {course.duration}</div>
      <button className="bg-green-500 text-white rounded-full py-0.5 px-4 w-24">
        <a href="#contact">Register</a>
      </button>
    </div>
  );
}
