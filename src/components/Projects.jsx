import Project from "./Project";
import ReactLogo from "../assets/react.svg";

export default function Projects() {
  return (
    <div>
      <section
        className="max-w-5xl mx-auto rounded-md shadow-lg p-5 my-8 grid grid-cols-1 gap-5 bg-neutral-600"
        id="projects"
      >
        <div>
          <div>
            <h2 className="text-4xl font-bold md:text-left text-center py-4 underline underline-offset-auto">
              Projects
            </h2>
            <p className="pb-4 md:text-left text-center">
              These are a couple of projects that I have worked on for
              individuals / companies.
            </p>
            <Project
              name="Website Name Here"
              logo={ReactLogo}
              width="55px"
              description="Website Description Here"
              stack="React, Supabase, Typescript"
              link="/"
            />

            <Project
              name="Website Name Here"
              logo={ReactLogo}
              width="55px"
              description="Website Description Here"
              stack="React, Typescript"
              link="/"
            />

            <Project
              name="Website Name Here"
              logo={ReactLogo}
              width="55px"
              description="Website Description Here"
              stack="React, Typescript"
              link="/"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
