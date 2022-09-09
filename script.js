const menuIcon = document.querySelector('.menu-icon');
const menuItemOne = document.querySelector('.mobile-menu-item-1');
const menuItemTwo = document.querySelector('.mobile-menu-item-2');
const menuItemThree = document.querySelector('.mobile-menu-item-3');
const xMeniIcon = document.querySelector('.x-menu-icon');
const mobileMenu = document.getElementById('mobile-menu');
const header = document.querySelector('.header');
const body = document.querySelector('.body');

menuIcon.onclick = (() => {
  header.classList.remove('header');
  header.classList.toggle('displayNone');
  mobileMenu.classList.remove('displayNone');
  mobileMenu.classList.toggle('mobile-menu');
  body.style.overflow = 'hidden';
});

xMeniIcon.onclick = (() => {
  mobileMenu.classList.remove('mobile-menu');
  mobileMenu.classList.toggle('displayNone');
  header.classList.remove('displayNone');
  header.classList.toggle('header');
  body.style.overflow = 'visible';
});
menuItemOne.onclick = (() => {
  xMeniIcon.click();
  return true;
});
menuItemTwo.onclick = (() => {
  xMeniIcon.click();
  return true;
});
menuItemThree.onclick = (() => {
  xMeniIcon.click();
  return true;
});

const projects = [
  {
    name: 'My Recent Works',
    description: '',
    image: '',
    technologies: [],
    demoLink: '',
    sourceLink: '',
  },
  {
    name: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    image: 'images/multi-post-stories.svg',
    technologies: ['html', 'bootstrap', 'css', 'ruby'],
    demoLink: 'link',
    sourceLink: 'link',
  },
  {
    name: 'Website Protfolio',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    image: 'images/works-project.svg',
    technologies: ['html', 'bootstrap', 'ruby'],
    demoLink: 'link',
    sourceLink: 'link',
  },
  {
    name: 'Website Protfolio',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    image: 'images/works-project.svg',
    technologies: ['html', 'bootstrap', 'ruby'],
    demoLink: 'link',
    sourceLink: 'link',
  },
  {
    name: 'Website Protfolio',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    image: 'images/works-project.svg',
    technologies: ['html', 'bootstrap', 'ruby'],
    demoLink: 'link',
    sourceLink: 'link',
  },
  {
    name: 'Website Protfolio',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    image: 'images/works-project.svg',
    technologies: ['html', 'bootstrap', 'ruby'],
    demoLink: 'link',
    sourceLink: 'link',
  },
  {
    name: 'Website Protfolio',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    image: 'images/works-project.svg',
    technologies: ['html', 'bootstrap', 'ruby'],
    demoLink: 'link',
    sourceLink: 'link',
  },
  {
    name: 'Website Protfolio',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    image: 'images/works-project.svg',
    technologies: ['html', 'bootstrap', 'ruby'],
    demoLink: 'link',
    sourceLink: 'link',
  },
];

let projectList = `
  <ul class="works-grid">
`;

projects.forEach((project, index) => {
  if (index === 0) {
    projectList += `
      <li class="works-title">
        <div class="works-title-container">
          <h1 class="recent-works-title">${project.name}</h1>
          <div class="recent-works-line"></div>
        </div>
      </li>
    `;
  }
  if (index === 1) {
    projectList += `
      <li class="multi-post-stories">
        <div class="multi-post-stories-image"></div>
        <div class="multi-post-stories-container">
          <h1 class="multi-post-stories-title">${project.name}</h1>
          <p class="multi-post-stories-content">${project.description}</p>
          <div class="multi-post-stories-languages">
    `;

    projectList += `
      <ul class="languages">
    `;
    project.technologies.forEach((technology) => {
      projectList += `
        <li class="language">${technology}</li>
      `;
    });
    projectList += `
      </ul class="languages">
    `;

    projectList += `
          </div>
          <button class="multi-post-stories-button" onclick="createModal(${index})">
            See Project
          </button>
        </div>
      </li>
    `;
  }

  if (index !== 0 && index !== 1) {
    projectList += `
    <li class="works-project">
      <h1 class="works-project-title">${project.name}</h1>
      <p class="works-project-content">${project.description}</p>
      <div class="works-project-languages">`;

    projectList += `
    <ul>
  `;
    project.technologies.forEach((technology) => {
      projectList += `
        <li>${technology}</li>
      `;
    });
    projectList += `
    </ul>
  `;

    projectList += `
      </div>
      <button class="works-project-button" onclick="createModal(${index})">See Project</button>
    </li>
  `;
  }
});

projectList += '</ul>';

const projectSection = document.querySelector('.works');
projectSection.innerHTML = projectList;

// eslint-disable-next-line no-unused-vars
function createModal(index) {
  const project = projects[index];

  const modalTitle = document.querySelector('.modal-title span');
  modalTitle.innerHTML = project.name;

  const modalList = document.querySelector('.modal-technologies');

  let technologies = `
  `;

  project.technologies.forEach((technology) => {
    technologies += `
      <li class="modal-technology">${technology}</li>
    `;
  });

  modalList.innerHTML = technologies;

  const modalContent = document.querySelector('.modal-content');
  modalContent.innerHTML = project.description;

  const modalBackgroung = document.querySelector('.modal-background');
  modalBackgroung.style.display = 'flex';
}

const closeModal = document.getElementById('closeModal');
closeModal.onclick = () => {
  const modalBackgroung = document.querySelector('.modal-background');
  modalBackgroung.style.display = 'none';
};

const email = document.querySelector('.contact-form-email');
const username = document.querySelector('.contact-form-name');
const usermessage = document.querySelector('.contact-form-message');

let formData = {
  email: '',
  username: '',
  usermessage: '',
};

const errorMessage = document.querySelector('.error-message');
const form = document.querySelector('.my-form');
form.addEventListener('submit', (event) => {
  if (!(email.value === String(email.value).toLocaleLowerCase())) {
    errorMessage.style.display = 'inline';
    event.preventDefault();
  }
});

email.addEventListener('input', () => {
  errorMessage.style.display = 'none';
  formData.email = email.value;
  localStorage.setItem('formData', JSON.stringify(formData));
});

username.addEventListener('input', () => {
  formData.username = username.value;
  localStorage.setItem('formData', JSON.stringify(formData));
});

usermessage.addEventListener('input', () => {
  formData.usermessage = usermessage.value;
  localStorage.setItem('formData', JSON.stringify(formData));
});

window.addEventListener('DOMContentLoaded', () => {
  formData = JSON.parse(localStorage.getItem('formData') || '{}');

  document.querySelector('.contact-form-email').value = formData.email;

  document.querySelector('.contact-form-name').value = formData.username;

  document.querySelector('.contact-form-message').value = formData.usermessage;
});