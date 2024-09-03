import Image from 'next/image';
import styles from './ProjectCard.module.css'
import mlVisualizer from '../../../public/images/ml-visualizer.jpg'
import clsx from 'clsx';

function ProjectCard({ title, description, link, image, enabled = false }) {
  return (
    <div className={clsx(styles.wrapper, !enabled ? styles.displayHidden : '')}>
      <div className={styles.imageWrapper}>
        <Image
          src={image}
          height={250}

          alt="Picture of the author"
        />

      </div>
      <h2>{title}</h2>
      <p>{description}</p>
      <a href={link} target='_blank'>Link</a>
    </div>
  );
}

export default ProjectCard;
