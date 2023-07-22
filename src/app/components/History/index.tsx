import Section from '../Section'
import SectionTitle from '../SectionTitle'
import Tag from '../Tag'
import styles from './index.module.css'

const jobs = [
    {
        company: 'Crema',
        title: 'Senior Application Developer',
        dates: 'Dec 2019 - Present',
        text: 'During this role I help build web and mobile applications as a member of the production team while also helping mentor and give direction to the development team as a whole. As a Senior developer I\'m expected to have areas of expertise and be able to advise the development direction of projects.'
    },
    {
        company: 'Crema',
        title: 'Application Developer',
        dates: 'Sep 2016 - Dec 2019',
        text: 'While in this role I developed, implemented, and updated software solutions for web and mobile applications.'
    },
    {
        company: 'Code Koalas',
        title: 'Team Lead',
        dates: 'Sep 2016 - Nov 2017',
        text: 'I lead the team that is the Web/Hybrid Application team at CodeKoalas, we used web technologies such as Javascript, Angular, Ionic, Cordova, React, and React Native to build and launch experiences for clients and consumers on multiple platforms.'
    },
    {
        company: 'Code Koalas',
        title: 'Web Developer',
        dates: 'Aug 2014 - Sep 2016',
        text: 'I was on the team that developed web sites using HTML, CSS, Javascript, PHP, Drupal.'
    },
    {
        company: 'The Briefcase',
        title: 'UX Engineer',
        dates: 'May 2014 - Aug 2014',
        text: 'I developed and integrated the front-end of Briefcase with the back-end and also made design/usability decisions. I focused on HTML/CSS/JS but also tended to use PHP to do my job.'
    },
    {
        company: 'The Briefcase',
        title: 'UX Intern',
        dates: 'Dec 2013 - May 2014',
        text: 'I was a front-end user-experience intern that helped implement the web-app and advised on usability decisions.'
    }
]

export default function History() {
    return (
    <Section className={styles.historyWrapper}>
        <>
            <SectionTitle>My History</SectionTitle>
            <p>I've had an interesting journey to get me to where I am now. Originally I set out to be a graphic designer, then switched to web design in college, and then eventually realized web development was my true passion. While growing up, I was always interested in computers and took as much time as I could to teach myself programming and design. I've learned I have a passion to create and problem solve; web development is a perfect culmination of these two things. <br /><br />My career so far has taken me from startup to agency. Using a myriad of different technologies, frameworks, and methodologies I've built everything from web applications to marketing websites, hybrid and native applications, and then back again. Currently I happily find myself working on web and native applications using React and TypeScript as well as the occasional freelance website.</p>
            <div className={styles.jobHistory}>
                <div className={styles.currentJob}>
                    <h3 className={styles.currentJobTitle}>{jobs[0].company} - {jobs[0].title}</h3>
                    <p className={styles.currentJobDates}>{jobs[0].dates}</p>
                    <p className={styles.currentJobText}>{jobs[0].text}</p>
                </div>
                {jobs.slice(1).map((job) => (
                    <div className={styles.pastJob}>
                        <h3 className={styles.pastJobTitle}><Tag>{job.company}</Tag> {job.title}</h3>
                        <p className={styles.pastJobDates}>{job.dates}</p>
                        <p className={styles.pastJobText}>{job.text}</p>
                    </div>
                ))}
            </div>
        </>
    </Section>
    )
}