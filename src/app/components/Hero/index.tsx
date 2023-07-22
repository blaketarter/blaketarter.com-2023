import styles from './index.module.css'

// const shapeFill1 = (
//     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1398 622" fill="none">
//         <path d="M0 -24.6677C0 -26.8768 1.79086 -28.6677 4 -28.6677H1393.66C1396.33 -28.6677 1398.25 -26.1053 1397.5 -23.5446L1274.95 395.388C1274.52 396.849 1273.3 397.941 1271.8 398.205L4.69408 621.459C2.24504 621.891 0 620.007 0 617.52V-24.6677Z" fill="currentColor"/>
//     </svg>
// )

const shapeFill1 = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1500 651" preserveAspectRatio="none" fill="none">
        <path d="M0.723803 4.95152C0.343599 2.52509 2.21955 0.332275 4.67558 0.332275L1495.66 0.332275C1498.33 0.332275 1500.25 2.89468 1499.5 5.45537L1376.95 424.388C1376.52 425.849 1375.3 426.941 1373.8 427.205L106.015 650.579C103.81 650.967 101.716 649.471 101.369 647.259L0.723803 4.95152Z" fill="currentColor"/>
    </svg>
)

// const shapeFill3 = (
//     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1331 627" fill="none">
//         <path d="M0 -19.9046C0 -22.1137 1.79086 -23.9046 4 -23.9046H1394.19C1396.69 -23.9046 1398.58 -21.6339 1398.12 -19.1742L1305.98 476.986C1305.66 478.716 1304.24 480.033 1302.49 480.231L4.44801 626.548C2.07644 626.815 0 624.96 0 622.573V-19.9046Z" fill="currentColor"/>
//     </svg>
// )

const shapeFill3 = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1399 651" preserveAspectRatio="none" fill="none">
        <path d="M0 4C0 1.79086 1.79086 0 4 0H1394.19C1396.69 0 1398.58 2.27068 1398.12 4.73037L1305.98 500.891C1305.66 502.621 1304.24 503.938 1302.49 504.135L4.44801 650.452C2.07644 650.72 0 648.864 0 646.478V4Z" fill="currentColor"/>
    </svg>
)

const shapeStroke = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1399 656" preserveAspectRatio="none" fill="none">
        <path d="M4 3.28308H1394.58C1395.17 3.28308 1395.63 3.79419 1395.57 4.38307L1345.1 506.609C1345.05 507.079 1344.68 507.452 1344.21 507.503L4.10765 652.538C3.51618 652.602 3 652.139 3 651.544V4.28307C3 3.7308 3.44771 3.28308 4 3.28308Z" stroke="currentColor" strokeWidth="6"/>
    </svg>
)

export default function Hero() {
    return (
        <section className={styles.heroContainer}>
            {/* <div className={styles.shape4}>
                {shapeStroke}
            </div>
            <div className={styles.shape3}>
                {shapeFill3}
            </div>
            <div className={styles.shape2} />
            <div className={styles.shape1}>
                {shapeFill1}
            </div> */}
            <div className={styles.heroText}>
                <h1 className={styles.headline}>Hi, I&rsquo;m <br /> Blake Tarter</h1>
                <p className={styles.subHeadline}>A Kansas City Based Typescript Developer</p>
            </div>
        </section>
    )
}
