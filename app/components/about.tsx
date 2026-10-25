import { siteConfig } from "@/lib/site-config";

export default function About() {
  return (
    <section id="about" className="py-16 bg-[#0a0a0a] text-white border-t border-zinc-800">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-[#34d399] border-b border-zinc-800 pb-2">
          About Me
        </h2>
        <div className="text-gray-300 leading-relaxed space-y-4">
          <p>{siteConfig.bio}</p>
          <p>
            I specialize in building modern, performant, and accessible web applications using the latest web technologies. My focus is on creating seamless user experiences and scalable architecture.
          </p>
        </div>
      </div>
    </section>
  );
}
