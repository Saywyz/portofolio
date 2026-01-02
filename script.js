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
    name: "Data Pipeline",
    category: "Data Engineering",
    desc: "Automated ETL pipeline for big data processing.",
    link: "https://github.com/yourusername/data-pipeline",
    image: "wip.png"
  },
  {
    name: "character_features",
    category: "AI & Computer Vision",
    desc: "Using SAM model to create character feature masks from images.",
    link: "https://github.com/Saywyz/character_features",
    image: "char1.png"
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
