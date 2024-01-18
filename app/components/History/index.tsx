import FadeIn from "../FadeIn"
import Section from "../Section"
import SectionTitle from "../SectionTitle"
import Tag from "../Tag"
import styles from "./index.module.css"
import Patterns from "./patterns"

interface Job {
  company: string
  title: string
  dates: string
  text: string
  isCurrent: boolean
  tech?: string[]
}

async function getJobs(): Promise<Job[]> {
  return [
    {
      company: "Crema",
      title: "Application Developer III",
      dates: "Aug 2021 - Oct 2023",
      text: "As an Application Developer III I led both the technical planning and development phases of the project, working with team members and client stakeholders to ensure the project achieved all goals. During this role I helped choose the tech stacks, planned the technical foundations for things like development strategy, CI/CD, and deployment, as well as took part in the development and shipping of the projects.",
      isCurrent: false,
      tech: [
        "TypeScript",
        "Next.js",
        "React",
        "Docker",
        "Github CI",
        "Python",
        "Azure",
      ],
    },
    {
      company: "Crema",
      title: "Senior Application Developer",
      dates: "Dec 2019 - Aug 2021",
      text: "As a Senior member of the production team I both helped plan and deliver client projects working daily with all members of the team. These projects ranged from those with a quick turnaround and more long term ones with many release cycles. I was expected to have wide areas of expertise and be able to advise the team at large on technical decisions. As part of my role I was also able to help mentor junior developers at the company.",
      isCurrent: false,
      tech: ["TypeScript", "React", "Material UI", "Github CI", "Redux"],
    },
    {
      company: "Crema",
      title: "Application Developer",
      dates: "Sep 2016 - Dec 2019",
      text: "As a developer at Crema I was a member of the production team that developed and maintained client projects. As a developer I worked closely with all members of the production team and with the client. I helped make technical decisions that would lead to a project’s success.",
      isCurrent: false,
      tech: ["React", "Material UI", "Redux", "TypeScript", "SCSS"],
    },
    {
      company: "Code Koalas",
      title: "Team Lead",
      dates: "Sep 2016 - Nov 2017",
      text: "I lead the team that is the Web/Hybrid Application team at CodeKoalas, we used web technologies such as Javascript, Angular, Ionic, Cordova, React, and React Native to build and launch experiences for clients and consumers on multiple platforms.",
      isCurrent: false,
      tech: ["React", "Redux", "React-Native", "Angular", "Ionic", "SCSS"],
    },
    {
      company: "Code Koalas",
      title: "Web Developer",
      dates: "Aug 2014 - Sep 2016",
      text: "I was on the team that developed web sites using HTML, CSS, Javascript, PHP, and Drupal.",
      isCurrent: false,
      tech: ["HTML", "CSS", "JavaScript", "Drupal"],
    },
    {
      company: "The Briefcase",
      title: "UX Engineer",
      dates: "May 2014 - Aug 2014",
      text: "I developed and integrated the front-end of Briefcase with the back-end and also made design/usability decisions. I focused on HTML/CSS/JS but occasionally used PHP.",
      isCurrent: false,
      tech: ["HTML", "CSS", "JavaScript", "JQuery", "PHP"],
    },
    {
      company: "The Briefcase",
      title: "UX Intern",
      dates: "Dec 2013 - May 2014",
      text: "I was a front-end user-experience intern that helped implement the web-app and advised on usability decisions.",
      isCurrent: false,
      tech: ["HTML", "CSS", "JavaScript"],
    },
  ]
}

export default async function History() {
  const jobs = await getJobs()
  const currentJob = jobs.find((job) => job.isCurrent === true)
  const pastJobs = jobs.filter((job) => !job.isCurrent)

  return (
    <section className={styles.historyTransition} id="history">
      <Patterns />
      <Section className={styles.historyWrapper} element="div">
        <>
          <FadeIn>
            <SectionTitle className={styles.title}>My History</SectionTitle>
          </FadeIn>
          <FadeIn>
            <p>
              I&apos;ve had an interesting journey to get me to where I am now.
              Originally I set out to be a graphic designer, then switched to
              web design in college, and then eventually realized web
              development was my true passion. While growing up, I was always
              interested in computers and took as much time as I could to teach
              myself programming and design. I&apos;ve learned I have a passion
              to create and problem solve; web development is a perfect
              culmination of these two things. <br />
              <br />
              My career so far has taken me from startup to agency. Using a
              myriad of different technologies, frameworks, and methodologies
              I&apos;ve built everything from web applications to marketing
              websites, hybrid and native applications, and then back again.
              Currently I find myself working on web and native applications
              using React and TypeScript as well as the occasional freelance
              website.
            </p>
          </FadeIn>
          <div className={styles.jobHistory}>
            {currentJob ? (
              <FadeIn>
                <div className={styles.currentJob}>
                  <FadeIn>
                    <h3 className={styles.currentJobTitle}>
                      {currentJob.company} - {currentJob.title}
                    </h3>
                  </FadeIn>
                  <FadeIn>
                    <p className={styles.currentJobDates}>{currentJob.dates}</p>
                  </FadeIn>
                  <FadeIn>
                    <p className={styles.currentJobText}>{currentJob.text}</p>
                  </FadeIn>
                </div>
              </FadeIn>
            ) : null}
            {pastJobs.map((job) => (
              <div className={styles.pastJob} key={job.title}>
                <FadeIn>
                  <h3 className={styles.pastJobTitle}>
                    <Tag>{job.company}</Tag> {job.title}
                  </h3>
                </FadeIn>
                <FadeIn>
                  <p className={styles.pastJobDates}>{job.dates}</p>
                </FadeIn>
                <FadeIn>
                  <p className={styles.pastJobText}>{job.text}</p>
                </FadeIn>
                {job.tech ? (
                  <div className={styles.pastJobTech}>
                    <FadeIn>
                      <span className={styles.pastJobTechTitle}>
                        Technologies frequently used:
                      </span>
                    </FadeIn>
                    {job.tech.map((tech, i) => (
                      <FadeIn delay={50 * i} key={tech}>
                        <span className={styles.pastJobTag}>{tech}</span>
                      </FadeIn>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </>
      </Section>
    </section>
  )
}
