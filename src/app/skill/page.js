import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const mainSkills = [
    "JavaScript",
    "HTML5",
    "CSS 3",
    "Java",
    "jQuery",
    "IntelliJ IDEA",
    "PostgreSQL",
    "PostGIS",
    "Spring Boot",
    "Thymeleaf",
    "Git",
    "GitHub",
    "GitLab",
    "Python",
    "Linux",
    "OpenLayers",
    "QGIS",
  ];
  const subSkills = ["NextJs", "TailwindCSS"];

  return (
    <>
      <div className="min-w-screen pl-5">
        <li className="list-none text-xl font-bold mt-10 p-3 sm:p-0">
          주요 개발 스킬
        </li>
        <div className="w-full text-sm mt-3 ">
          {mainSkills.map((ms, idx) => {
            return (
              <span
                key={idx}
                className="inline-block rounded-full px-4 py-2 bg-sky-100 mr-2 mt-3"
              >
                {ms}
              </span>
            );
          })}
        </div>
        <li className="list-none text-xl font-bold mt-10 p-3 sm:p-0">
          서브 개발 스킬
        </li>
        <div className="w-full text-sm mt-3 ">
          {subSkills.map((ss, idx) => {
            return (
              <span
                key={idx}
                className="inline-block rounded-full px-4 py-2 bg-sky-100 mr-2 mt-3"
              >
                {ss}
              </span>
            );
          })}
        </div>
        <li className="list-none text-xl font-bold mt-10 p-3 sm:p-0">
          추가 예정
        </li>
        <div className="w-full text-sm mt-3 "></div>
      </div>
    </>
  );
}
