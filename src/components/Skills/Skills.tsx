import { Badge } from "../UI/Badge";
import skills from "./skills.json";

export default function Skills() {
  return (
    <section
      className="sm:w-[90%] min-h-screen max-sm:pt-[calc(56px+12px)] mx-auto flex flex-col justify-center"
      id="skills"
    >
      <h2 className="text-3xl font-bold text-center pt-4 mb-10">
        {"//Skills"}
      </h2>
      <div>
        <article className="flex flex-col gap-5 px-5">
          <div className="flex items-center font-medium sm:text-lg justify-center flex-wrap">
            <h5 className="px-1.5">Tech Stack</h5>
          </div>
          <div className="flex gap-4 flex-wrap justify-center">
            {skills.map((item, key) => (
              <Badge variant={"secondary"} key={key}>
                {item}
              </Badge>
            ))}
          </div>
          <hr />
          <div className="flex items-center font-bold sm:text-lg justify-center flex-wrap">
            <h5 className="px-1.5">Soft Skills</h5>
          </div>
          <div className="flex gap-4 flex-wrap justify-center">
            <Badge variant={"secondary"}>Communication</Badge>
            <Badge variant={"secondary"}>Deep Work</Badge>
            <Badge variant={"secondary"}>Time-management</Badge>
          </div>
        </article>
      </div>
    </section>
  );
}
