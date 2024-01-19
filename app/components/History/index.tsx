import { Fragment } from "react"
import PastCaseStudy from "../CaseStudy"
import FadeIn from "../FadeIn"
import PastJob from "../PastJob"
import Section from "../Section"
import SectionTitle from "../SectionTitle"
import styles from "./index.module.css"
import Patterns from "./patterns"

interface CaseStudy {
  name: string
  description: string[]
  challenges: string[]
  tech: string[]
}

interface Job {
  company: string
  title: string
  dates: string
  text: string
  isCurrent: boolean
  tech?: string[]
  caseStudy?: Array<CaseStudy>
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
      caseStudy: [
        {
          name: "Food Delivery App",
          description: [
            "This app would be a food-delivery application used in certain markets. It functioned similarly to well-known food-delivery apps. The main challenges when building this was that the API we would be using was not yet built out, yet the deadline was such that we had to build the UI in tandem with someone else building out the API.",
            "When building the app to begin with we implemented an entire test-api that was mocked with fake data that the app could consume and then be switched over to the real API when it was ready. This let us build the UI as if the API was ready and adjust the mock data as the specifications changed. It led to more up-front time in the initial building stage but the app also had very good test coverage due to a good mock system being in place from the beginning.",
          ],
          challenges: [
            "Codebase with multiple independent teams",
            "D3 based visualization was main form of interacting with UI",
            "Large datasets necessitated performance considerations around data fetching and UI interactions",
          ],
          tech: ["Next.js", "TypeScript", "Tailwind", "Docker"],
        },
        {
          name: "Team Building Tool",
          description: [
            "This tool would be used internally by a company for viewing employee metrics in a way that helps to mitigate bias. It is intended to be used both in board room settings as well as personal computer settings. The main challenges during this project were dealing with a complicated data-set as well as the applications Drag-n-drop based interface.",
            "To deal with the data-set, which was both large in number of data points but also had a lot of relationships, we normalized the data set from a deeply nested structure to a flat structure that our app could use to reduce in-memory size and the complexity to get at the data we needed.",
            "When building the UI for this app we had to ensure that its drag-n-drop interface was intuitive and bug-free because this app would be used in important meetings. We ensured that drag and drop targets were large and obvious, the animations were quick, and that there was feedback for the user as they used the UI.",
          ],
          challenges: [
            "Had to build UI while API was being built out",
            "UI needed complex feature flag system",
          ],
          tech: ["React", "Material UI", "D3", "TypeScript"],
        },
      ],
    },
    {
      company: "Crema",
      title: "Senior Application Developer",
      dates: "Dec 2019 - Aug 2021",
      text: "As a Senior member of the production team I both helped plan and deliver client projects working daily with all members of the team. These projects ranged from those with a quick turnaround and more long term ones with many release cycles. I was expected to have wide areas of expertise and be able to advise the team at large on technical decisions. As part of my role I was also able to help mentor junior developers at the company.",
      isCurrent: false,
      tech: ["TypeScript", "React", "Material UI", "Github CI", "Redux"],
      caseStudy: [
        {
          name: "Company Survey Metrics App",
          description: [
            "This was used to import, organize, and display a large number of metrics from a yearly survey that all teams and employees filled out. The company has a very large number of employees so this tool was used to help them understand the health and needs of the various groupings of teams and employees.",
            "The main technical challenge was building an API that could import and parse the large amount of Excel data to then be displayed in the UI. We achieved this by building the back-end using Ruby on Rails utilizing ActiveRecord and Postgres. We then built out a UI that displays the visualizations and a simple management interface to upload new data.",
          ],
          challenges: [
            "Data only existed as a very large Excel worksheet",
            "Timeline for project was short",
            "The metrics that would be important to show changed frequently throughout development",
          ],
          tech: ["React", "Ruby on Rails", "GraphQL"],
        },
        {
          name: "Large Internal Management Tool",
          description: [
            "This tool was used to manage a number of other custom internal tools for the company. It needed to manage importing and updating large sets of data, manage users and permissions, and manage settings of the other tools as well. The areas of focus for the app were the many different forms and tables being performant and easy to use, while handling different requests from various teams for new feature sets.",
          ],
          challenges: [
            "Codebase handled data management and app settings for multiple independent apps",
            "Various forms with lots of inputs had to be easy to use",
          ],
          tech: ["React", "Redux", "Material UI", "TypeScript"],
        },
      ],
    },
    {
      company: "Crema",
      title: "Application Developer",
      dates: "Sep 2016 - Dec 2019",
      text: "As a developer at Crema I was a member of the production team that developed and maintained client projects. As a developer I worked closely with all members of the production team and with the client. I helped make technical decisions that would lead to a project’s success.",
      isCurrent: false,
      tech: ["React", "Material UI", "Redux", "TypeScript", "SCSS"],
      caseStudy: [
        {
          name: "Employee Metrics Tool",
          description: [
            "This tool would be used internally by a company for viewing employee metrics in a way that helps to mitigate bias. It is intended to be used both in board room settings as well as personal computer settings. The main challenges during this project were dealing with a complicated data-set as well as the applications Drag-n-drop based interface.",
            "To deal with the data-set, which was both large in number of data points but also had a lot of relationships, we normalized the data set from a deeply nested structure to a flat structure that our app could use to reduce in-memory size and the complexity to get at the data we needed.",
            "When building the UI for this app we had to ensure that its drag-n-drop interface was intuitive and bug-free because this app would be used in important meetings. We ensured that drag and drop targets were large and obvious, the animations were quick, and that there was feedback for the user as they used the UI.",
          ],
          challenges: [
            "Converting codebase to TS",
            "Complicated dataset",
            "Drag and Drop Interface",
          ],
          tech: ["React", "SCSS", "Redux", "TypeScript"],
        },
      ],
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
            {pastJobs.slice(0, 3).map((job) => (
              <Fragment key={job.title}>
                <PastJob {...job} />
                {job.caseStudy?.length ? (
                  <div className={styles.caseStudies}>
                    <FadeIn>
                      <span className={styles.caseStudiesLabel}>
                        Products I helped deliver:
                      </span>
                    </FadeIn>
                    {job.caseStudy?.map((caseStudy) => (
                      <PastCaseStudy {...caseStudy} key={caseStudy.name} />
                    ))}
                  </div>
                ) : null}
              </Fragment>
            ))}
            <div className={styles.furtherPastJobs}>
              {pastJobs.slice(3).map((job) => (
                <div className={styles.furtherPastJob} key={job.title}>
                  <PastJob {...job} />
                  {job.caseStudy?.length ? (
                    <div className={styles.caseStudies}>
                      <FadeIn>
                        <span className={styles.caseStudiesLabel}>
                          Products I helped deliver:
                        </span>
                      </FadeIn>
                      {job.caseStudy?.map((caseStudy) => (
                        <PastCaseStudy {...caseStudy} key={caseStudy.name} />
                      ))}
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </>
      </Section>
    </section>
  )
}
