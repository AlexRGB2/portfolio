const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://alexrgb2.github.io/portfolio',
  title: 'Portfolio',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Alexis Martínez',
  role: 'Software Development and Management Engineer',
  description:
    'I am a Software Development and Management Engineer with more than two years of professional experience, specialized in Full-Stack web development using frameworks such as Angular 15+, Kotlin Multiplatform, Spring Boot and Node.js (Express). In design, I have knowledge in Bootstrap 5, Tailwind, CSS and SCSS. I am proficient in TypeScript, Java and Kotlin programming languages.',
  resume:
    'https://drive.google.com/file/d/1Opc4QM7FmfjbRfH5hshKfwnSYT2B57Jq/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/alexis-martinez-dwfe/',
    github: 'https://github.com/AlexRGB2',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Aplicativo SPEI',
    description:
      "It is a core banking application designed to integrate financial institutions with Banco de México's real-time payment system (SPEI). Its main function is to send and receive electronic funds transfers in an immediate, secure and traceable manner, complying with the regulatory and operational guidelines established by Banxico.",
    stack: ['JavaSwing', 'PostgreSQL', 'Spring Boot'],
  },
  {
    name: 'RDAM Movil',
    description:
      'It is a digital banking mobile application designed for users to manage their personal finances quickly, securely and without the need to visit a branch. From the app they can check balances, make transfers, pay for services and manage cards.',
    stack: ['Kotlin Multiplatform', 'Spring Boot', 'PostgreSQL'],
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'SCSS',
  'Git',
  'Angular',
  'Kotlin',
  'Java',
  'Spring Boot',
  'Node.js',
  'Express',
  'PostgreSQL',
  'MySQL',
  'MongoDB',
  'Bootstrap',
  'Tailwind CSS',
  'Kotlin Multiplatform',
  'Flutter',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'alexismtz200326@gmail.com',
}

export { header, about, projects, skills, contact }
