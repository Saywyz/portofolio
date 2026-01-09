// Portfolio projects data
const projects = [
  {
    name: "BotAI",
    category: "AI & Computer Vision",
    desc: "Web application for classifying bottles with a custom model running locally.",
    link: "https://saywyz.github.io/botai/",
    image: "botai1.png"
  },
  {
    name: "Generative AI Models",
    category: "AI & Computer Vision",
    desc: "Personal work over various generative AI models (AutoEncoders, Diffusion, Flow, Energy...).",
    link: "https://github.com/Saywyz/Generative-AI-models",
    image: "genai.png"
  },
  {
    name: "Paris Road Traffic Forecasting",
    category: "AI & Computer Vision",
    desc: "Trained STGNN model over Paris road traffic dataset to forecast traffic conditions.",
    link: "https://github.com/Saywyz/Paris-road-traffic-forecast",
    image: "pfe.png"
  },
  {
    name: "Character Features Extraction",
    category: "AI & Computer Vision",
    desc: "Using SAM model to create character feature masks from images.",
    link: "https://github.com/Saywyz/character_features",
    image: "char1.png"
  },
    {
    name: "Extraction of Ancient French Texts",
    category: "AI & Computer Vision",
    desc: "Automating the extraction of old and barely legible texts",
    link: "https://github.com/Saywyz/Extraction-of-ancient-texts",
    image: "txt.png"
  },
    {
    name: "Lossless-compression-methods",
    category: "Programming",
    desc: "Haskell implementation of the Lempel-Ziv (LZ) family of lossless data compression algorithms.",
    link: "https://github.com/Saywyz/Lossless-compression-methods",
    image: "lzw.png"
  },
    {
    name: "Work In Progress",
    category: "Data Engineering",
    desc: "Automated ETL pipeline for big data processing.",
    link: "https://github.com/Saywyz",
    image: "wip.png"
  },
];

function createProjectCard(project) {
  const card = document.createElement('div');
  card.className = 'project-card';
  card.tabIndex = 0;
  card.onclick = () => window.open(project.link, '_blank');

  const title = document.createElement('div');
  title.className = 'project-title';
  title.textContent = project.name;

  const desc = document.createElement('div');
  desc.className = 'project-desc';
  desc.textContent = project.desc;

  const imagesDiv = document.createElement('div');
  imagesDiv.className = 'project-images';

  const image = document.createElement('img');
  image.className = 'project-image';
  image.src = `images/${project.image}`;
  image.alt = `${project.name} cover`;
  imagesDiv.appendChild(image);

  card.appendChild(imagesDiv);
  card.appendChild(title);
  card.appendChild(desc);
  return card;
}

document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.projects-container');
  
  // Group projects by category
  const categories = {};
  projects.forEach(project => {
    if (!categories[project.category]) {
      categories[project.category] = [];
    }
    categories[project.category].push(project);
  });

  // Render sections
  for (const [categoryName, categoryProjects] of Object.entries(categories)) {
    const section = document.createElement('div');
    section.className = 'category-section';

    const title = document.createElement('h2');
    title.className = 'category-title';
    title.textContent = categoryName;
    section.appendChild(title);

    const grid = document.createElement('div');
    grid.className = 'projects-grid';
    
    categoryProjects.forEach(project => {
      grid.appendChild(createProjectCard(project));
    });

    section.appendChild(grid);
    container.appendChild(section);
  }
});
