import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Evgeny Pletnev | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Evgeny Pletnev',
  subtitle: "I'm the Developer you need.",
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'mypic.jpg',
  paragraphOne:
    'Professional Front End Web Developer with experience building web applications using HTML, CSS, Javascript and creating attractive user interfaces.',
  paragraphTwo:
    'In addition to programming knowledge and skills, developed a vast amount of transferable skills and abilities from years of client support experience in both private and public sectors.',
  paragraphThree:
    'Such examples include team work, communication and collaboration, personal motivation and organisation, problem solving and time management.',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project1.png',
    title: 'SmartBrain',
    info:
      "Smartbrain App allows users to detect faces in pictures using Clarifai's AI API. It has a Register and Sign In system and a basic profile that counts and displays user submissions. For security, passwords are hashed using Bcrypt.",
    info2: '',
    url: 'https://my-smart-face-app.herokuapp.com',
    repo: 'https://github.com/epletnev/face-recognition-brain', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.png',
    title: 'RoboFriends',
    info:
      'The app fetches a list of users from the JSON placeholder API and then populates the page with user cards. For the user cards, the robohash API is used to fetch and display a random robot image for each user. The result can then be searched using the search field, which will match the user input to the user names.',
    info2: '',
    url: 'https://epletnev.github.io/robofriends',
    repo: 'https://github.com/epletnev/robofriends', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'e.a.pletnev@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/epletnev',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/epletnev',
    },
  ],
};
