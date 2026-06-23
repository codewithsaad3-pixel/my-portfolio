/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Saad",
  title: "Hi all, I'm Saad",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / Flutter.Dart and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/codewithsaad3-pixel",
  linkedin: "https://www.linkedin.com/in/saad-sajid-comsats/",
  gmail:  "muhammadsaadsaeed6@gmail.com",
  gitlab: "https://github.com/codewithsaad3-pixel",
  facebook: "https://www.facebook.com/saad.sajid.921677",
  
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Supabase"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Flutter",
      fontAwesomeClassname: "fas fa-mobile-alt"
    },
    {
      skillName: "Supabase",
      fontAwesomeClassname: "fas fa-bolt"
    }
    ,
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "COMSATS University Islamabad, Wah Cantt Campus",
      logo: require("./assets/images/CUILogo.png"),
      subHeader: "BS Computer Science",
      duration: "2022 — 2026",
      desc: "Expected Graduation: September 2026",
      descBullets: [
        "Focused on Software Engineering, Mobile App Architecture, and Full Stack Stacks."
      ]
    },
    {
      schoolName: "Edify Science Model College, Tandlianwala",
      logo: require("./assets/images/EdifyLogo.png"),
      subHeader: "Intermediate in Computer Science",
      duration: "2020 — 2022",
      desc: "Percentage: 81%",
      descBullets: []
    },
    {
      schoolName: "Edify Science Model School, Tandlianwala",
      logo: require("./assets/images/EdifyLogo.png"),
      subHeader: "Science",
      duration: "2018 — 2020",
      desc: "Percentage: 73%",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Mobile App Development (Flutter/Dart)", //Insert stack or technology you have experience in
      progressPercentage: "85%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Web Development (HTML/CSS/JS/React/Laravel)",
      progressPercentage: "70%"
    },
    {
      Stack: "Databases (Supabase/Firebase/SQL)",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "ACADEMIC AND FINAL YEAR PROJECTS",
  projects: [
    {
      image: require("./assets/images/Pmnh.png"),
      projectName: "PMNH-BIOCONNECT Mobile Application",
      projectDesc: "Final Year Project: Developed mobile applications using Flutter and Dart with responsive UI design and Supabase integration.",
      footerLink: [
        {
          name: "Tech Stack: Flutter, Dart, Supabase",
          url: "#"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/SchoolLogo.webp"),
      projectName: "School Management Desktop Application",
      projectDesc: "Developed a desktop application for managing student records, attendance, and fee management using C#, .NET Framework, and SQL.",
      footerLink: [
        {
          name: "Tech Stack: C#, .NET, SQL",
          url: "#"
        }
      ]
    },
    {
      image: require("./assets/images/Logo - PAK.jpg"),
      projectName: "E-Commerce Website",
      projectDesc: "Developed a responsive E-Commerce website featuring complete frontend and backend functionality.",
      footerLink: [
        {
          name: "Tech Stack: HTML, CSS, JS, Laravel PHP",
          url: "#"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
const achievementSection = {
  title: emoji("Achievements & Certifications 🏆"),
  subtitle: "Certifications and Cool Stuff",
  achievementsCards: [],
  display: false // Set true once you add certifications
};

// Blogs Section
const blogSection = {
  display: false
};

// Talks Sections
const talkSection = {
  display: false
};

// Podcast Section
const podcastSection = {
  display: false
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true
};

// Contact Details
const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-3317580779",
  email_address: "muhammadsaadsaeed6@gmail.com"
};

// Twitter Section
const twitterDetails = {
  userName: "twitter",
  display: false
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};