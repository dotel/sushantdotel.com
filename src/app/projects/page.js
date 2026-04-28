import React from 'react';

import Container from '@/components/Container';
import SectionHeading from '@/components/SectionHeading';
import ProjectArt from '@/components/ProjectArt';
import Reveal from '@/components/Reveal';

import { FEATURED_PROJECTS, LAB_PROJECTS } from '@/data/projects';
import { BLOG_TITLE } from '@/constants';

import styles from './projects.module.css';

export const metadata = {
  title: `Projects — ${BLOG_TITLE}`,
  description:
    'Selected work by Sushant Dotel — agent-native commerce, cloud-native ML, autonomous agents, and lab experiments.',
};

async function Projects() {
  return (
    <Container size="wide" className={styles.wrapper}>
      <Reveal>
        <SectionHeading
          eyebrow="Projects"
          title="Things I've built."
          description="Production systems, weekend experiments, and the lab work in between."
        />
      </Reveal>

      <section
        aria-labelledby="featured-projects"
        className={styles.featuredSection}
      >
        <h2 id="featured-projects" className="sr-only">
          Featured projects
        </h2>
        <ul className={styles.projectGrid}>
          {FEATURED_PROJECTS.map((project, idx) => (
            <Reveal
              as="li"
              key={project.slug}
              delay={Math.min(idx * 0.05, 0.2)}
            >
              <CompactProjectCard project={project} eager={idx === 0} />
            </Reveal>
          ))}
        </ul>
      </section>

      {LAB_PROJECTS.length > 0 && (
        <section
          aria-labelledby="lab-projects"
          className={styles.labSection}
        >
          <Reveal>
            <SectionHeading
              eyebrow="Lab"
              title="Older experiments."
              description="Side projects from before grad school. Still online, still kind of fun."
              id="lab-projects"
            />
          </Reveal>
          <ul className={styles.projectGrid}>
            {LAB_PROJECTS.map((project, idx) => (
              <Reveal
                as="li"
                key={project.slug}
                delay={Math.min(idx * 0.05, 0.15)}
              >
                <CompactProjectCard project={project} />
              </Reveal>
            ))}
          </ul>
        </section>
      )}
    </Container>
  );
}

function CompactProjectCard({ project, eager = false }) {
  const liveLink = project.links?.live;
  const description = project.description || project.tagline || project.built;

  const media = (
    <ProjectArt
      art={project.art}
      title={project.title}
      className={styles.projectArt}
      eager={eager}
    />
  );

  return (
    <article className={styles.projectCard}>
      {liveLink ? (
        <a
          href={liveLink}
          target="_blank"
          rel="noreferrer"
          className={styles.projectMediaLink}
          aria-label={`Open ${project.title} live`}
        >
          {media}
        </a>
      ) : (
        <div className={styles.projectMedia}>{media}</div>
      )}

      <div className={styles.projectBody}>
        <h3 className={styles.projectTitle}>{project.title}</h3>
        <p className={styles.projectDescription}>{description}</p>
        {project.stack?.length > 0 && (
          <ul className={styles.projectStack}>
            {project.stack.map((s) => (
              <li key={s} className={styles.projectChip}>
                {s}
              </li>
            ))}
          </ul>
        )}
        {(liveLink || project.links?.code) && (
          <div className={styles.projectLinks}>
            {liveLink && (
              <a
                href={liveLink}
                target="_blank"
                rel="noreferrer"
                className={styles.projectLink}
              >
                Live <span aria-hidden="true">↗</span>
              </a>
            )}
            {project.links?.code && (
              <a
                href={project.links.code}
                target="_blank"
                rel="noreferrer"
                className={styles.projectLink}
              >
                Source
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

export default Projects;
