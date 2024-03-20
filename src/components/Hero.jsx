import myLogo from "../assets/react.svg";
import "../index.css";

export default function Hero() {
  return (
    <div>
      <header className="shadow-lg bg-gradient-to-br from-sky-400 to-zinc-600 min-h-[30rem] rounded-md mb-8 flex justify-center items-center mt-6 relative p-3 overflow-hidden max-w-5xl mx-auto">
        {/* <img className="absolute left-0 top-0 min-h-full min-w-full" src="" alt=""> */}

        <div className="relative text-white">
          <h2 className="text-5xl md:text-6xl font-light mb-2 text-center uppercase">
            Welcome to my
            <span className="font-bold flex items-center justify-center">
              <img
                src={myLogo}
                alt="React Logo"
                className="h-12 mr-4 App-logo"
              />{" "}
              portfolio
            </span>
          </h2>
          <p className="text-gray-100 text-lg text-center">
            Web developer proficient in React and Tailwind CSS!
          </p>
        </div>
      </header>
    </div>
  );
}
