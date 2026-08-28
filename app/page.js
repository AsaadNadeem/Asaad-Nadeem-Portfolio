import Header from "@/component/header";
import Image from "next/image";
import SkillCard from "@/component/skillCard";
import ProjectCard from "@/component/projectCard";
import Heading from "@/component/heading";
import Footer from "@/component/footer";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Header />
      <div
        id="about"
        className="w-full px-7 md:px-28 py-5 md:py-14 bg-linear-to-br from-red-900 to-gray-800 text-white text-center scroll-mt-20"
      >
        <Image
          src="/Asaad Nadeem.jpeg"
          alt="Asaad Nadeem"
          height={300}
          width={300}
          className="float-end border rounded-full p-6"
        />
        <div>
          <p className="text-lg">Assalam o Alaikum, My name is</p>
          <h1 className="text-5xl font-bold font-serif text-amber-100 py-1.5">
            Asaad Nadeem
          </h1>
          <div className="text-2xl font-semibold font-sans flex flex-wrap gap-2 justify-center items-center">
            <h2>Software Engineer</h2>
            <p className="text-3xl hidden md:flex">-</p>
            <h2>MERN Stack Developer</h2>
            <p className="text-3xl hidden md:flex">-</p>
            <h2>Java Programmer</h2>
          </div>
          <p className="py-2 leading-6">
            I&apos;m a passionate MERN Stack Web Developer with hands-on
            experience building responsive, user-friendly web applications.
            Skilled in translating ideas into functional full-stack solutions
            using MongoDB, Express.js, React, and Node.js — with a design-aware
            approach backed by practical UI/UX experience in Figma. Backed by 8+
            months of Java programming experience, with a solid understanding of
            object-oriented principles that supports writing clean, structured,
            and maintainable code.
          </p>
          <a
            href="/Asaad Nadeem.pdf"
            target="_blank"
            className="inline-block mt-2 px-14 py-3 font-bold text-cyan-405 text-cyan-400 uppercase tracking-widest bg-gray-950 border border-cyan-500/50 rounded-full shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_35px_rgba(6,182,212,0.8)] hover:bg-cyan-500 hover:text-gray-950 transition-all duration-300 group overflow-hidden"
          >
            View CV
          </a>
        </div>
      </div>
      <Heading id="skills">Skills</Heading>
      <div className="flex flex-wrap mx-4 mt-7 justify-center gap-4">
        <SkillCard grip="90">
          <SkillCard.Image src="/HTML5.svg" alt="HTML5"></SkillCard.Image>
          <SkillCard.Text>HTML</SkillCard.Text>
        </SkillCard>
        <SkillCard grip="85">
          <SkillCard.Image src="/CSS3.svg" alt="CSS3"></SkillCard.Image>
          <SkillCard.Text>CSS</SkillCard.Text>
        </SkillCard>
        <SkillCard grip="75">
          <SkillCard.Image
            src="/JavaScript.svg"
            alt="JavaScript"
          ></SkillCard.Image>
          <SkillCard.Text>JavaScript</SkillCard.Text>
        </SkillCard>
        <SkillCard grip="90">
          <SkillCard.Image src="/React.svg" alt="React"></SkillCard.Image>
          <SkillCard.Text>React.js</SkillCard.Text>
        </SkillCard>
        <SkillCard grip="83">
          <SkillCard.Image src="/Express.svg" alt="Express"></SkillCard.Image>
          <SkillCard.Text>Express.js</SkillCard.Text>
        </SkillCard>
        <SkillCard grip="65">
          <SkillCard.Image src="/Nextjs.svg" alt="Nextjs"></SkillCard.Image>
          <SkillCard.Text>Next.js</SkillCard.Text>
        </SkillCard>
        <SkillCard grip="75">
          <SkillCard.Image
            src="/tailwindcss.svg"
            alt="tailwindcss"
          ></SkillCard.Image>
          <SkillCard.Text>Tailwind CSS</SkillCard.Text>
        </SkillCard>
        <SkillCard grip="80">
          <SkillCard.Image
            src="/bootstrap.svg"
            alt="bootstrap"
          ></SkillCard.Image>
          <SkillCard.Text>Bootstrap</SkillCard.Text>
        </SkillCard>
        <SkillCard grip="80">
          <SkillCard.Image src="/MongoDB.svg" alt="MongoDB"></SkillCard.Image>
          <SkillCard.Text>MongoDB</SkillCard.Text>
        </SkillCard>
        <SkillCard grip="30">
          <SkillCard.Image src="/seo.svg" alt="seo"></SkillCard.Image>
          <SkillCard.Text>SEO</SkillCard.Text>
        </SkillCard>
        <SkillCard grip="73">
          <SkillCard.Image src="/mysql.svg" alt="mysql"></SkillCard.Image>
          <SkillCard.Text>MySQL</SkillCard.Text>
        </SkillCard>
        <SkillCard grip="99">
          <SkillCard.Image src="/java.svg" alt="java"></SkillCard.Image>
          <SkillCard.Text>Java</SkillCard.Text>
        </SkillCard>
        <SkillCard grip="65">
          <SkillCard.Image
            src="/springboot.svg"
            alt="springboot"
          ></SkillCard.Image>
          <SkillCard.Text>Spring Boot</SkillCard.Text>
        </SkillCard>
        <SkillCard grip="85">
          <SkillCard.Image src="/Figma.svg" alt="Figma"></SkillCard.Image>
          <SkillCard.Text>UI/UX Design</SkillCard.Text>
        </SkillCard>
      </div>
      <Heading id="projects">Projects</Heading>
      <div className="flex flex-wrap mx-4 mt-7 justify-center gap-8 items-center">
        <ProjectCard>
          <ProjectCard.Image
            src="/VisioGuard.png"
            alt="VisioGuard"
          ></ProjectCard.Image>
          <ProjectCard.Title>VisioGuard</ProjectCard.Title>
          <ProjectCard.Tech>
            React.js, Express.js, MongoDB, Bootstrap, API&apos;s, Google OAuth
          </ProjectCard.Tech>
          <ProjectCard.Description>
            This is a sample project description for Project 1. It showcases the
            use of React for the frontend, Node.js for the backend, and MongoDB
            for the database.
          </ProjectCard.Description>
          <ProjectCard.Link href="http://visio-guard-an.vercel.app/">
            Live Demo
          </ProjectCard.Link>
        </ProjectCard>
        <ProjectCard>
          <ProjectCard.Image
            src="/Event-Manager.png"
            alt="Event-Manager"
          ></ProjectCard.Image>
          <ProjectCard.Title>Event Manager</ProjectCard.Title>
          <ProjectCard.Tech>
            React.js, Express.js, MongoDB, Bootstrap
          </ProjectCard.Tech>
          <ProjectCard.Description>
            This is a sample project description for Project 1. It showcases the
            use of React for the frontend, Node.js for the backend, and MongoDB
            for the database.
          </ProjectCard.Description>
          <ProjectCard.Link href="https://github.com/AsaadNadeem/Todo">
            View on Github
          </ProjectCard.Link>
        </ProjectCard>
        <ProjectCard>
          <ProjectCard.Image src="/Zade6.png" alt="Zade6"></ProjectCard.Image>
          <ProjectCard.Title>Zade6</ProjectCard.Title>
          <ProjectCard.Tech>Java, Java GUI, MySQL</ProjectCard.Tech>
          <ProjectCard.Description>
            This is a sample project description for Project 1. It showcases the
            use of React for the frontend, Node.js for the backend, and MongoDB
            for the database.
          </ProjectCard.Description>
          <ProjectCard.Link href="https://github.com/AsaadNadeem/Zade6">
            View on Github
          </ProjectCard.Link>
        </ProjectCard>
        <ProjectCard>
          <ProjectCard.Image
            src="/Hiking-Gear.png"
            alt="Hiking-Gear"
          ></ProjectCard.Image>
          <ProjectCard.Title>Peak Trail Gear UI/UX</ProjectCard.Title>
          <ProjectCard.Tech>Figma</ProjectCard.Tech>
          <ProjectCard.Description>
            This is a sample project description for Project 1. It showcases the
            use of React for the frontend, Node.js for the backend, and MongoDB
            for the database.
          </ProjectCard.Description>
          <ProjectCard.Link href="https://www.behance.net/gallery/248147083/Hiking-Gear-Business-Landing-Website-and-Applicaton">
            View on Behance
          </ProjectCard.Link>
        </ProjectCard>
        <ProjectCard>
          <ProjectCard.Image
            src="/Business-Landing-Page.png"
            alt="Business-Landing-Page"
          ></ProjectCard.Image>
          <ProjectCard.Title>Business Landing Page</ProjectCard.Title>
          <ProjectCard.Tech>HTML5, CSS3</ProjectCard.Tech>
          <ProjectCard.Description>
            This is a sample project description for Project 1. It showcases the
            use of React for the frontend, Node.js for the backend, and MongoDB
            for the database.
          </ProjectCard.Description>
          <ProjectCard.Link href="https://business-landing-page-ten-orcin.vercel.app/">
            Live Demo
          </ProjectCard.Link>
        </ProjectCard>
        <a
          href="https://github.com/AsaadNadeem?tab=repositories"
          target="_blank"
          className="inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-sm border border-neutral-300 rounded-full transition-colors duration-200 hover:bg-neutral-900 hover:text-white hover:border-neutral-900"
        >
          ➜ View More Projects on Github
        </a>
      </div>
      <Heading id="education">Education</Heading>
      <div
        className="
    mt-7 mx-auto w-full max-w-5xl
    rounded-2xl px-5 py-6
    sm:px-7
    md:px-10 md:py-7
    transition-colors duration-300
    hover:bg-blue-200
  "
      >
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div className="flex-1">
            <div className="md:flex items-center gap-2">
              <h3 className="text-xl font-bold text-gray-950 sm:text-2xl">
                BS Software Engineering
              </h3>
              <h4>(Sep, 2025 - July, 2029)</h4>
            </div>

            <div className="mt-4 flex items-start gap-2">
              <p className="font-bold shrink-0">Institution:</p>

              <h4>COMSATS University Islamabad, Islamabad Campus</h4>
            </div>

            <div className="flex items-center gap-2">
              <p className="font-bold shrink-0">Semester:</p>

              <h4>3rd</h4>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <Image
              src="/COMSATS.svg"
              alt="COMSATS"
              width={250}
              height={250}
              className="h-auto w-32 sm:w-40 md:w-48"
            />
          </div>
        </div>
      </div>
      <Heading id="volunteering">Volunteering</Heading>
      <div
        className="
    mt-7 mx-auto w-full max-w-5xl
    rounded-2xl px-5 py-6
    sm:px-7
    md:px-10 md:py-7
    transition-colors duration-300
    hover:bg-orange-200
  "
      >
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-3">
            <div className="md:flex items-center gap-1.5">
              <h3 className="text-xl font-bold text-gray-950 sm:text-2xl">
                IEEE CS CUI-Web Development Team
              </h3>
              <h4>(Feb, 2026 - Present)</h4>
            </div>
            <div className="w-full text-center">
              <a
                href="/IEEE.jpg"
                target="_blank"
                className="w-fit relative inline-flex items-center justify-center px-5 py-2 font-semibold text-orange-500 bg-black border-2 border-orange-500 rounded-full transition-all duration-300 ease-in-out shadow-[0_0_15px_rgba(249,115,22,0.5)] drop-shadow-[0_0_10px_rgba(249,115,22,0.6)] hover:bg-orange-500 hover:text-black hover:shadow-[0_0_30px_rgba(249,115,22,0.8),0_0_60px_rgba(249,115,22,0.4)] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-black"
              >
                View Certificate
              </a>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <Image
              src="/IEEE.png"
              alt="IEEE"
              width={200}
              height={200}
              className="h-auto w-32 sm:w-40 md:w-48"
            />
          </div>
        </div>
      </div>
      <Heading id="courses">Courses</Heading>
      <div
        className="
    mt-7 mx-auto w-full max-w-5xl md:border
    rounded-2xl px-5 py-6
    sm:px-7
    md:px-10 md:py-7
  "
      >
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <h3 className="text-xl font-bold text-gray-950 sm:text-2xl">
            Full Stack Web Development with React & Node.js
          </h3>
          <h4 className="border rounded-full bg-green-400 w-fit px-3 py-1">
            Hunarmand Punjab
          </h4>
        </div>
        <hr className="my-4 border-gray-500" />
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <h3 className="text-xl font-bold text-gray-950 sm:text-2xl">
            Advanced UI/UX Design with Figma
          </h3>
          <h4 className="border rounded-full bg-green-400 w-fit px-3 py-1">
            Hunarmand Punjab
          </h4>
        </div>
        <hr className="my-4 border-gray-500" />
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <h3 className="text-xl font-bold text-gray-950 sm:text-2xl">
            Introduction to SQL
          </h3>
          <h4 className="border rounded-full bg-orange-400 w-fit px-3 py-1">
            SimpliLearn
          </h4>
        </div>
      </div>
      <Footer />
    </div>
  );
}
