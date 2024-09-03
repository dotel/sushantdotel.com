import Image from 'next/image';
import styles from './ProjectCard.module.css'
import clsx from 'clsx';

function ProjectCard({ title, description, link, code, image, enabled = false, featured = false }) {
  return (
    <div className={clsx(styles.wrapper, featured ? styles.featured : '', !enabled ? styles.displayHidden : '')}>
      <a href={link} target='_blank' rel='noreferrer' className={styles.imageLink} aria-label={`Open ${title} live demo`}>
        <div className={styles.imageWrapper}>
          <Image
            src={image}
            className={styles.image}
            alt={`Screenshot of ${title}`}
            priority={featured}
          />
        </div>
      </a>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
      <div className={styles.links}>
        <a href={link} target='_blank' rel='noreferrer' className={styles.link}>Live Demo</a>
        {code ? <a href={code} target='_blank' rel='noreferrer' className={styles.link}>Code</a> : null}
      </div>
    </div>
  );
}

export default ProjectCard;
