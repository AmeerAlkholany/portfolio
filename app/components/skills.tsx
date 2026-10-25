// siteConfig import removed as unused
import { defaultSkills } from "@/lib/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-16 bg-black text-white border-t border-zinc-800">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-[#34d399] border-b border-zinc-800 pb-2">
          My Skills
        </h2>
        <ul className="flex flex-wrap gap-4">
          {defaultSkills.map((skill) => (
            <li key={skill}>
              <span className="px-3 py-1 bg-[#34d399] text-black rounded-full text-sm font-medium">
                {skill}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
