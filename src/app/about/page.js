import styles from './about.module.css'

async function About(params) {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.mainHeading}>
        Hi!
      </h1>

      <p className="text-lg text-gray-700 mb-6">
        I&apos;m Sushant Dotel—
        a full-time Master&apos;s in Computer Science student at the{" "}
        <span className="font-semibold text-black"><a href='https://uh.edu/nsm/computer-science/graduate/'>University of Houston</a>(Graduating in 2026)</span>.
        I&apos;m passionate about building robust, scalable applications and learning new things.
      </p>

      <p className="text-lg text-gray-700 mb-6">
        I thrive working as a full stack engineer where I can design responsive frontends, engineer efficient backends, and explore the latest in AI toolkits and dev frameworks.
        Recently, I&apos;ve been diving into tools like <span className="font-medium">LangChain</span>,
        integrating <span className="font-medium">OpenAI APIs</span>, and exploring how intelligent systems can be embedded into real-world applications. Hence #21DaysOfAIAndCloud challenge! I also plan to stream my learning process on <a href='https://www.youtube.com/@sushantdotel'>YouTube</a> so if you want to see my progress, you can subscribe to my channel!
      </p>

      <p className="text-lg text-gray-700 mt-6">
        Outside of code and classes, I like to spend time with my loved ones, run, play table tennis, keep up with tech trends, and hang out with my techy friends. If you want to connect with me, you can find me on LinkedIn or GitHub at the bottom of the page!
      </p>

    </div>
  )

}

export default About

