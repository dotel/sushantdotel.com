import findamovieImage from '../../public/images/find-a-movie.png';
import mlVisualizerImage from '../../public/images/ml-visualizer.jpg';
import imageEditorImage from '../../public/images/image-editor.jpg';

export const FEATURED_PROJECTS = [
  {
    slug: 'atlas',
    title: 'Atlas Commerce AI',
    tagline: 'An agent-native storefront that AI agents can actually shop on.',
    problem:
      'AI agents can chat about products all day, but most storefronts give them no way to actually transact.',
    built:
      'A Next.js storefront with a pgvector RAG chatbot that answers product, order, and policy questions from the live database — and exposes catalog, cart, and checkout actions over WebMCP so external AI agents can browse and purchase end-to-end.',
    impact:
      'Working demo of agent-native commerce, live at atlas.sushantdotel.com.',
    stack: ['Next.js', 'PostgreSQL', 'pgvector', 'Claude API', 'WebMCP', 'GCP'],
    links: {
      live: 'https://atlas.sushantdotel.com/',
    },
    art: {
      kind: 'gradient',
      preset: 'atlas',
    },
  },
  {
    slug: 'findamovie',
    title: 'findamovie.online',
    tagline: 'A cloud-native recommendation engine for the "what should I watch?" problem.',
    problem:
      'People know the mood they\'re in, not what to watch — and most recommendation flows feel like SQL filters in a trench coat.',
    built:
      'A React SPA backed by Go microservices on AWS ECS, with a k-means recommendation pipeline served from SageMaker. DynamoDB and Cognito for state and auth, the whole stack provisioned with Terraform.',
    impact:
      'Live, production cloud-native product running end-to-end ML recommendations.',
    stack: ['React', 'Go', 'AWS ECS', 'SageMaker', 'DynamoDB', 'Terraform'],
    links: {
      live: 'https://findamovie.online',
      code: 'https://github.com/orgs/findamovieforme/repositories',
    },
    art: {
      kind: 'image',
      image: findamovieImage,
    },
  },
  {
    slug: 'job-agent',
    title: 'Autonomous Job Application Agent',
    tagline: 'A personal AI agent that reads job descriptions and applies to them for me.',
    problem:
      'Tailoring and submitting applications across Greenhouse and Workday is repetitive, slow, and a terrible use of an engineer\'s time.',
    built:
      'A Python pipeline using Playwright for browser automation and LangChain + Claude to discover roles, parse job descriptions, match resume fields, and submit tailored applications — end-to-end, without supervision.',
    impact:
      'Drives my own job search. Submits while I sleep.',
    stack: ['Python', 'Playwright', 'LangChain', 'Claude API'],
    links: {},
    art: {
      kind: 'gradient',
      preset: 'agent',
    },
  },
];

export const LAB_PROJECTS = [
  {
    slug: 'ml-visualizer',
    title: 'ML Algorithms Visualizer',
    description:
      'Interactive visualizations of classic machine learning algorithms — built to make the math feel less abstract.',
    stack: ['React', 'D3'],
    links: {
      live: 'https://dotel.github.io/ml-algorithms-visualizer',
      code: 'https://github.com/dotel/ml-algorithms-visualizer',
    },
    art: {
      kind: 'image',
      image: mlVisualizerImage,
    },
  },
  {
    slug: 'image-editor',
    title: 'Web Image Editor',
    description:
      'A canvas-based image editor written in vanilla JavaScript. No framework, no dependencies — just the platform.',
    stack: ['Vanilla JS', 'Canvas API'],
    links: {
      live: 'https://dotel.github.io/image-editor',
      code: 'https://github.com/dotel/image-editor',
    },
    art: {
      kind: 'image',
      image: imageEditorImage,
    },
  },
];
