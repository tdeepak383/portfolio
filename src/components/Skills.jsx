import React, { useEffect, useState } from 'react'

const skillsData = [
  { name: "React.Js", level: 70 },
  { name: "Next.js", level: 60 },
  { name: "Redux", level: 60 },
  { name: "JavaScript", level: 70 },
  { name: "TypeScript", level: 60 },
  { name: "Node.js", level: 50 },
  { name: "HTML", level: 95 },
  { name: "CSS", level: 90 },
  { name: "Bootstrap", level: 80 },
  { name: "Tailwind CSS", level: 80 },
  { name: "Figma", level: 60 },
  { name: "Material UI", level: 80 },
];

function Skills() {
    const [progress, setProgress] = useState(skillsData.map(() => 0));

  // Animate on mount
  useEffect(() => {
    setTimeout(() => {
      setProgress(skillsData.map(skill => skill.level));
    }, 300);
  }, []);


  return (
    <section className="bg-[var(--accent-dark)] text-white py-20 px-6 md:px-16" id='skills'>
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 textbg">
          My Development Skills
        </h2>

        <p className="mb-12 max-w-xl mx-auto">
          Crafting scalable, high-performance web experiences with modern technologies.
        </p>

         {/* Skills */}
        <div className="grid md:grid-cols-2 gap-10">
          {skillsData.map((skill, index) => (
            <div key={index}>

              {/* Label */}
              <div className="flex justify-between mb-3">
                <span className="text-gray-300 tracking-wider">
                  {skill.name}
                </span>

                <span className="text-gray-300">
                  {progress[index]}%
                </span>
              </div>

              {/* Progress bar */}
              <div className="w-full h-3 bg-[var(--accent-dark)] rounded-full overflow-hidden">
                <div
                  className="
                    h-full
                    rounded-full
                    bg-gradient-to-r
                    from-[var(--accent-gradient1)]
                    to-[var(--accent-gradient2)]
                    transition-all
                    duration-[2800ms]
                    ease-out
                  "
                  style={{ width: `${progress[index]}%` }}
                />
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills