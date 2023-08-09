//I Would Highly Recommend You To Customize The Theme According To Your Taste.
export const globalStyles = {
  // "--grad": "linear-gradient(315deg,#48a9fe,#00cdac)", // Use gradients only
  // "--grad": "linear-gradient(315deg, #48a9fe 0%, #734ae8 74%)", // Use gradients only
  "--grad": "linear-gradient(315deg, #06bcfb 0%, #4884ee 74%)",
  "--txtcolor": "#272341",
  "--p_color": "#00cdac",
  "--s_color": "#fff",
};

// Navigation Bar Name
export const navbar_name = "<Manish>";

// Main Page
export const main = {
  name: "Manish Reddy",
  doamin: "A MERN Stack Web Developer",
  resume:
    "https://drive.google.com/drive/folders/1VlF6bTnN1OU_GpLciyo-A8bji5M6mrbV?usp=sharing",
};

// AboutMe
export const aboutme = {
  imgLink:
    "https://avatars.githubusercontent.com/u/89566773?v=4",
  p1: "Hey, My name is Manish Reddy. I have completed my  Graduation  from  Loyola academy degree college, Medchal.",
  p2: " I'm a passionate coder and an enthusiastic Web Developer capable of applying programming skills to solve complex problems. Seeking a challenging role in the field of software development that will offer an opportunity for further development of my abilities, skills and knowledge in an organization.",
  p3: "Apart from coding I also like playing cricket and Travelling.",
};

// Skills
export const whatido = {
  title: "Full Stack Development",

  details: [
    "Building responsive website using HTML,CSS,JS,React",
    "Building Simple RESTful CRUD APIs",
    "Knowledge of MongoDB Database",
    "Knowledge of various UI libraries",
  ],
  logos: [
    {
      name: "HTML5",
      iconifyClassName: "vscode-icons:file-type-html", // PS : Use iconify class name
      id: "1",
    },
    {
      name: "CSS",
      iconifyClassName: "vscode-icons:file-type-css",
      id: "2",
    },
    {
      name: "JavaScript",
      iconifyClassName: "logos:javascript",
      id: "3",
    },
    {
      name: "ReactJS",
      iconifyClassName: "vscode-icons:file-type-reactjs",
      id: "4",
    },
    {
      name: "Redux",
      iconifyClassName: "logos:redux",
      id: "5",
    },
    {
      name: "NodeJS",
      iconifyClassName: "logos:nodejs",
      id: "6",
    },
    {
      name: "ExpressJS",
      iconifyClassName: "logos:express",
      id: "7",
    },
    {
      name: "MongoDB",
      iconifyClassName: "logos:mongodb",
      id: "8",
    },
    // {
    //   name: "Postman",
    //   iconifyClassName: "logos:postman-icon",
    //   id: "9",
    // },
    // {
    //   name: "npm",
    //   iconifyClassName: "logos:npm-icon",
    //   id: "10",
    // },
    // {
    //   name: "GIT",
    //   iconifyClassName: "logos:git",
    //   id: "11",
    // },
    // {
    //   name: "Tailwind",
    //   iconifyClassName: "logos:tailwindcss-icon",
    //   id: "12",
    // },
    // {
    //   name: "Material-UI",
    //   iconifyClassName: "logos:material-ui",
    //   id: "13",
    // },
    // {
    //   name: "Ant Design",
    //   iconifyClassName: "logos:ant-design",
    //   id: "14",
    // },
    // {
    //   name: "Netlify",
    //   iconifyClassName: "vscode-icons:file-type-netlify",
    //   id: "15",
    // },
    // {
    //   name: "Vercel",
    //   iconifyClassName: "logos:vercel-icon",
    //   id: "16",
    // },
  ],
};

// Project Details
export const details = [
  {
    id: 1,
    title: "App-Tronix-Store",
    desc: `APPTRONIX-STORE . Basically this is an ecommerce website where user can buy only Apple products like , "MOBILE" , "LAPTOP" , "IPAD" .`,
    feature: `Sign-in/Sign-up,
Explore multiple Products,
Dynamic progress monitor page,
Sorting, filtering.`,
    tech: `Tech Stack: html5 | CSS3 | JavaScript | React.js | Redux | Mongodb | nodejs | express.`,
    img: "https://cdn-images-1.medium.com/max/1000/1*VhlaOeu7jp8kfa4THTe4fA.png",
    github: "https://github.com/Manish001234/App-Tronix-Fullstack",
    link: "https://app-tronix-fullstack7-b77p98rpx-manishreddy.vercel.app/"
  },
//   {
//     id: 2,
//     title: "MyFitnessPal Clone",
//     desc: `MyFitnessPal is a smartphone app and website that tracks users diet and exercise. Here users can explore various food items and their respective nutrition contents , exercise, and various fitness tracking apps.`,
//     feature: `Sign-in/Sign-up,
// search bar for food items to see their nutrition contents, explore various fitness tracking apps,
// Subscription page.`,
//     tech: `Tech Stack: React | CSS | JavaScript | nodeJS | express | MongoDB`,
//     img: "https://i.ibb.co/c1THySK/hero-image.jpg",
//     link: "https://github.com/AbhijitAher/MyFitnessPal_U5",
//     github: "https://github.com/AbhijitAher/MyFitnessPal_U5",
//   },
  
//   {
//     id: 3,
//     title: "Reliance Retail Clone",
//     desc: `Reliance Retail is an informative website where users can get information about various brands of Reliance Industries.`,
//     feature: `Features:
// Sign-in/Sign-up, User Authentication,
// Integreted Hamleys shopping page,
// Sorting, filtering and debouncing based search bar,
// Carousel and slideshows,
// Add to cart & Check out.`,
//     tech: `Tech Stack: HTML | CSS | JavaScript `,
//     img: "https://github.com/Shivam2101s/images/blob/main/reliance(1)%20-%20Copy.jpg?raw=true",
//     github: "https://github.com/Shivam2101s/Reliance-retails",
//     link: "https://relianceretailclone.netlify.app/",
//   },
  {
    id: 4,
    title: "Nordstorm Clone",
    desc: `A leading fashion retailer offering clothing, shoes, and
    accessories for men, women and kids.The right outfit lets you nail your tree pose without being distracted by constricting clothes.`,
    feature: `Product Page,
    Sorting,
    filtering.`,
    tech: `Tech Stack: HTML5 | CSS3 | JavaScript.`,
    img: "https://raw.githubusercontent.com/vibrantachintya/nordstrom/main/images/nordstrom_screenshot_1.png",
    github: "https://github.com/vibrantachintya/nordstrom",
    link:"https://vibrantachintya.github.io/nordstrom/"
  },
  {
    id: 5,
    title: "FlatHeads Clone",
    desc: `A web application to buy footwear.
    Choosing the right footwear is important. Here’s how you do it!Selecting the right footwear involves a lot more than just finding the right shoe size for you. In fact, there’s a whole world of decisions to factor in when doing so. Choosing the right footwear is way more important than you think. `,
    feature: `Trending Footwear page, Sign-in/Sign-up User Authentication using Masai API
    `,
    tech: `Tech Stack: HTML5 | CSS3 | JavaScript .`,
    img: "https://cdn-images-1.medium.com/max/1000/1*IcbIczQPJjdfQ8xCUc7ZlQ.png",
    link: "https://flatheads-clone-cwyyrnt4r-duwesh.vercel.app//",
    github: "https://github.com/Duwesh/Flatheads-Clone",
  },
//   {
//     id: 6,
//     title: "My Recipe App",
//     desc: `It's a food recipe app, users can search recipes of various dishes and also see the latest recipes as well as the recipe of the day.`,
//     feature: `Search recipe,
// Recipe of the day.`,
//     tech: `Tech Stack: HTML | CSS | JavaScript`,
//     img: "https://github.com/Shivam2101s/images/blob/main/food%20app.jpg?raw=true",
//     link: "https://condescending-pare-f88022.netlify.app/",
//     github: "https://github.com/avinashkumarkml/Food-app-main",
//   },
];

// Social Media Links
export const links = [
  "https://www.linkedin.com/in/manish-reddy-76063a222/",
  "https://api.whatsapp.com/send/?phone=919642698321&text&app_absent=0",
  "mailto:reddymanish809@gmail.com",
  "https://medium.com/@reddymanish809",
  "https://github.com/Manish001234",
];
