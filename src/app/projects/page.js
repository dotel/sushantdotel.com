import ProjectCard from '@/components/ProjectCard/ProjectCard'
import styles from './projects.module.css'
import mlVisualizer from '../../../public/images/ml-visualizer.jpg'
import imageEditor from '../../../public/images/image-editor.jpg'
import findAMovie from '../../../public/images/find-a-movie.png'

const projectsList = [
  {
    image: findAMovie,
    title: 'Findamovie',
    description: 'Cloud-native movie recommendation platform (findamovie.online). Next.js + Tailwind frontend on AWS Amplify; API Gateway + Cognito; ECS ( EC2 ASG) running users-service and movies-service; SageMaker for ML recommendations; DynamoDB and S3; infra via Terraform.',
    link: 'https://findamovie.online',
    code: 'https://github.com/orgs/findamovieforme/repositories',
    enabled: true,
    featured: true
  },
  {
    image: mlVisualizer,
    title: 'ML algorithms visualizer',
    description: 'Web-based visualizer for some famous machine learning algorithms',
    link: 'https://dotel.github.io/ml-algorithms-visualizer',
    code: 'https://github.com/dotel/ml-algorithms-visualizer',
    enabled: true
  },
  {
    image: imageEditor,
    title: 'Web Image editor',
    description: 'Image editor for the web built using vanilla javascript.',
    link: 'https://dotel.github.io/image-editor',
    code: 'https://github.com/dotel/image-editor',
    enabled: true
  }
]

async function Projects(params) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.projectsList}>
        {
          projectsList.map(project => {
            return <ProjectCard key={crypto.randomUUID()} title={project.title} description={project.description} link={project.link} code={project.code} image={project.image} enabled={project.enabled} featured={project.featured} />
          })
        }
      </div>
    </div>
  )
}

export default Projects
