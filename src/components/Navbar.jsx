import React from "react";
import Container from "./Container";

export default function Navbar(props) {
  return (
    <>
    
     <nav className={`navbar w-full h-12 flex items-center navbar-expand-lg px-14 ${props.mode === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
      <h1 className="text-lg">{props.Title}</h1>
      <ul className="flex-grow">
        <li className="text-sm transition duration-300 px-2 ml-5">
          {props.About}
        </li>
      </ul>
      <div className="ml-auto">
        <label
          className={`relative inline-flex cursor-pointer items-center form-check form-switch text-${
            props.mode === "light" ? "black" : "white"
          }`}
        >
          <input
            id="flexSwitchCheckDefault"
            type="checkbox"
            className="peer sr-only"
            onClick={props.toggleMod}
            role="switch"
          />
          <label htmlFor="flexSwitchCheckDefault" className="hidden">
            {props.mode === "light" ? "Enable Dark Mode" : "Disable Dark Mode"}
          </label>
          <div className="peer h-6 w-11 rounded-full border bg-slate-200 after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-slate-800 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-green-300"></div>
        </label>
      </div>
    </nav>
      {/* <div
            classnameName={`form-check form-switch text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              classnameName="form-check-input"
              onClick={props.toggleMod}
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label
              classnameName="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              {props.mode === "light" ? "enable darkMode" : "disable darkMode"}
            </label>
          </div> */}
    </>
  );
}

Navbar.defaultProps = {
  Title: "Text Editor",
  About: "About",
};