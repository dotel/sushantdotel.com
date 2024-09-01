import styles from './ProjectCard.module.css'
function ProjectCard({ title, description, link, image }) {
  return (
    <div className={styles.projectCard}>
      <div className={styles.imageWrapper}>
        <img src={image} alt={title} />
      </div>
      <h2>{title}</h2>
      <p>{description}</p>
      <a href={link} target='_blank'>Link</a>
    </div>
  );
}

export default ProjectCard;
