import FadeIn from "../FadeIn"
import Section from "../Section"
import SectionTitle from "../SectionTitle"
import Tag from "../Tag"
import styles from "./index.module.css"
import Patterns from "./patterns"

async function getJobs() {
  return [
    {
      company: "Crema",
      title: "Application Developer III",
      dates: "Aug 2021 - Present",
      text: "As an Application Developer III I am expected to lead both the technical planning and development phases of the project. I help make decisions on the tech stack used for the project as well as function as part of the larger development team. As a senior member of the team I assist the team in working through issues and ensure the highest quality and correctness.",
    },
    {
      company: "Crema",
      title: "Senior Application Developer",
      dates: "Dec 2019 - Aug 2021",
      text: "In this role I helped build web and mobile applications as a member of the production team while also helping mentor and give direction to the development team as a whole. As a Senior developer I'm expected to have wide areas of expertise and be able to advise the development direction of projects.",
    },
    {
      company: "Crema",
      title: "Application Developer",
      dates: "Sep 2016 - Dec 2019",
      text: "While in this role I developed, implemented, and updated software solutions for web and mobile applications. I gained a lot of experience working in a cross-functional team and grew as a developer while working with other talented devs.",
    },
    {
      company: "Code Koalas",
      title: "Team Lead",
      dates: "Sep 2016 - Nov 2017",
      text: "I lead the team that is the Web/Hybrid Application team at CodeKoalas, we used web technologies such as Javascript, Angular, Ionic, Cordova, React, and React Native to build and launch experiences for clients and consumers on multiple platforms.",
    },
    {
      company: "Code Koalas",
      title: "Web Developer",
      dates: "Aug 2014 - Sep 2016",
      text: "I was on the team that developed web sites using HTML, CSS, Javascript, PHP, and Drupal.",
    },
    {
      company: "The Briefcase",
      title: "UX Engineer",
      dates: "May 2014 - Aug 2014",
      text: "I developed and integrated the front-end of Briefcase with the back-end and also made design/usability decisions. I focused on HTML/CSS/JS but occasionally used PHP.",
    },
    {
      company: "The Briefcase",
      title: "UX Intern",
      dates: "Dec 2013 - May 2014",
      text: "I was a front-end user-experience intern that helped implement the web-app and advised on usability decisions.",
    },
  ]
}

export default async function History() {
  const jobs = await getJobs()
  const currentJob = jobs[0]
  const pastJobs = jobs.slice(1)
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
              </div>
            ))}
          </div>
        </>
      </Section>
    </section>
  )
}
