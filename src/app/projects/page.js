import ProjectCard from '@/components/ProjectCard/ProjectCard'
import styles from './projects.module.css'
import mlVisualizer from '../../../public/images/ml-visualizer.jpg'
import imageEditor from '../../../public/images/image-editor.jpg'

const projectsList = [{
  image: mlVisualizer,
  title: 'ML algorithms visualizer',
  description: 'Web-based visualizer for some famous machine learning algorithms',
  link: 'https://dotel.github.io/ml-algorithms-visualizer',
  enabled: true
}, 
  , {
    image: imageEditor,
  title: 'Web Image editor',
  description: 'Image editor for the web built using vanilla javascript.',
  link: 'https://dotel.github.io/image-editor',
    enabled: true
  },
  {
    image: mlVisualizer,
    title: 'AweBuddy',
    description: 'An online collaboration platform for group studies.',
    link: 'https://awebuddy.com',

}]

async function Projects(params) {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.mainHeading}>
        Projects:
      </h1>

      <div className={styles.projectsList}>
        {
          projectsList.map(project => {
            return <ProjectCard key={crypto.randomUUID()} title={project.title} description={project.description} link={project.link} image={project.image} enabled={project.enabled} />
          })
        }
      </div>
    </div>
  )
}

export default Projects
