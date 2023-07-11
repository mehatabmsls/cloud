"use client";
import { useState, useRef, useEffect } from "react";

function Navigator() {
  const menuRef = useRef(null);

  const [toggle, setToggle] = useState(false);

  function handleToggle() {
    setToggle((oldState) => !oldState);
  }

  const handleClick = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setToggle(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div className="bg-[#ffffff] text-green-900 h-14 flex justify-between p-4 px-8 sticky">
      <div className=" font-semibold border-l-4 pl-1">
        <div>Cloud9 Technologies</div>
      </div>
      <ul className="lists flex gap-24 font-medium ">
        <a href="#home">
          <li className="cursor-pointer">Home</li>
        </a>
        <a href="#courses">
          <li className="cursor-pointer">Courses</li>
        </a>
        <a href="#about">
          <li className="cursor-pointer">About</li>
        </a>
        <a href="#contact">
          <li className="cursor-pointer">Contact Us</li>
        </a>
      </ul>
      <section
        onClick={handleToggle}
        ref={menuRef}
        className="md:hidden sm:visible flex gap-1 flex-col items-center justify-center cursor-pointer"
      >
        <div className="h-1 w-6 bg-black"></div>
        <div className="h-1 w-6 bg-black"></div>
        <div className="h-1 w-6 bg-black"></div>
      </section>
      {toggle && (
        <div className="bg-black rounded-md absolute right-6 top-10">
          <ul className="text-[#ffffff] p-4 flex flex-col gap-3">
            <a href="#home">
              <li className="cursor-pointer">Home</li>
            </a>
            <a href="#courses">
              <li className="cursor-pointer">Courses</li>
            </a>
            <a href="#about">
              <li className="cursor-pointer">About</li>
            </a>
            <a href="#contact">
              <li className="cursor-pointer">Contact Us</li>
            </a>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navigator;
