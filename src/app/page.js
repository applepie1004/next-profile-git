import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const mainSkills2 = {
    Backend: [
      "Java, Python",
      "Spring Boot, Spring MVC, Spring Security",
      "Maven",
      "IntelliJ, WebStorm",
    ],
    Frontend: ["HTML5, CSS 3, Thymeleaf", "JavaScript, jQuery"],
    DevOps: ["PostgreSQL", "Git, GitHub, GitLab", "Linux"],
    GIS: ["OpenLayers", "PostGIS", "QGIS"],
  };
  const subSkills = ["NextJs", "TailwindCSS"];
  const skillDetail = [
    {
      name: "Java",
      desc: "",
    },
    { name: "Spring Boot", desc: "" },
    { name: "PostgreSQL", desc: "" },
  ];

  return (
    <>
      <div className="min-w-screen pl-5">
        <li className="list-none text-2xl font-bold mt-10 p-3 sm:p-0">
          주요 개발 스킬
        </li>
        {/* <div className="w-full text-sm mt-3 ">
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
        </div> */}
        <div className="w-full text-sm mt-3 ">
          {Object.keys(mainSkills2).map((category, idx) => (
            <div key={idx} className="flex m-5">
              <h2 className="text-lg w-1/6 m-auto">
                <p className="font-medium">{category}</p>
              </h2>
              <ul className="w-5/6">
                {mainSkills2[category].map((skill, idx2) => (
                  <li key={idx2} className="list-disc list-inside mb-2">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <li className="list-none text-2xl font-bold mt-10 p-3 sm:p-0">
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
        {/*<li className="list-none text-2xl font-bold mt-10 p-3 sm:p-0">*/}
        {/*  스킬 상세*/}
        {/*</li>*/}

        {/*<div className="w-full text-sm mt-3 ">*/}
        {/*  {skillDetail.map((sd, idx) => {*/}
        {/*    return (*/}
        {/*      <div key={idx} className="flex">*/}
        {/*        <span>{sd.name}</span>*/}
        {/*        <div dangerouslySetInnerHTML={{ __html: sd.desc }}></div>*/}
        {/*      </div>*/}
        {/*    );*/}
        {/*  })}*/}
        {/*</div>*/}
      </div>
    </>
  );
}
