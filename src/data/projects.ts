import type { Project } from '../types';

export const PROJECTS: Project[] = [
  { 
    id: 1, 
    title: "Youtube", 
    subtitle: "Effects & Capabilities", 
    description: "Description for project 1",
    year: "2024 - current",
    type: "Web Development",
    image: "https://picsum.photos/400/600?random=1",
    bannerImage: "https://picsum.photos/1200/400?random=1banner",
    tools: ["React", "Three.js", "Tailwind CSS"],
    processes: ["Design", "Development", "Deployment"]
  },
  { 
    id: 2, 
    title: "Miu Miu",
    subtitle: "Fall/Winter 2024",
    description: "Description for project 2",
    year: "2022",
    type: "UI/UX Design",
    image: "/miumiu/social_1.gif",
    bannerImage: "/miumiu/banner.jpg",
    videoUrl: "https://www.youtube.com/embed/V8d6T4rRZ1U?si=PY8txMoiJr3X0xFk&controls=0&loop=1&playlist=V8d6T4rRZ1U&autoplay=1&mute=1",
    additionalVideos: [
      "/miumiu/social_1.mp4",
      "/miumiu/social_2.mp4"
    ],
    projectImages: [
      "/miumiu/miumiu-set-1.avif",
      "/miumiu/miumiu-set-2.avif",
      "/miumiu/miumiu-set-3.avif",
      "/miumiu/miumiu-set-4.avif"
    ],
    standaloneImage: "/miumiu/miumiu_set-5.jpeg"
  },
  { 
    id: 3, 
    title: "Moncler X Salehe Bembury", 
    subtitle: "UI/UX REDESIGN",
    description: "Description for project 3",
    year: "2023",
    type: "UI/UX Design",
    image: "/salahe/1.jpg",
    bannerImage: "/salahe/banner2.avif",
    videoUrl: "https://www.youtube.com/embed/HgMMMktXVLw?si=6p4yWV8-FMk_QPeZ&controls=0&loop=1&playlist=HgMMMktXVLw&autoplay=1&mute=1",
    projectImages: [
      "/salahe/5.jpg",
      "/salahe/2.jpg",
      "/salahe/3.jpg",
      "/salahe/6.jpg",
      "/salahe/1.jpg",
      "/salahe/4.jpg"
    ]
  },
  { 
    id: 4, 
    title: "ELENA VELEZ", 
    subtitle: "YR003 - How's MY DRIVING?", 
    description: "Description for project 4",
    year: "2023",
    type: "Mobile App",
    image: "/elena_velez/2.gif",
    bannerImage: "/elena_velez/banner.jpg",
    projectImages: [
      "/elena_velez/1.gif",
      "/elena_velez/2.gif",
      "/elena_velez/grid1.jpg",
      "/elena_velez/grid2.jpg", 
      "/elena_velez/grid3.jpg",
      "/elena_velez/grid5.jpg"
    ],
    videoUrl: "https://www.youtube.com/embed/U36lCOp2XPQ?si=Hj6nnR2Nl3SAcCg6&controls=0&loop=1&playlist=U36lCOp2XPQ&autoplay=1&mute=1"
  },
  { 
    id: 5, 
    title: "Megan Thee Stallion", 
    description: "Music video for Cobra",
    year: "2023",
    type: "3D/VFX",
    image: "/megan/3f8a0195a529b143e9337ff5be40ee6871-megancobra.2x.rsocial.w600.webp",
    bannerImage: "/megan/megan-banner.jpeg",
    videoUrl: "https://www.youtube.com/embed/DOZNRoL0310?si=CW1i1qtX7nGc_PpE&loop=1&playlist=DOZNRoL0310&autoplay=1&mute=1"
  },
  { 
    id: 7, 
    title: "Cecile B. Evans", 
    description: "3D animation and VFX for Reality or Not",
    year: "2023",
    type: "3D/VFX",
    image: "https://picsum.photos/600/300?random=7"
  },
  { 
    id: 8, 
    title: "Project 8", 
    description: "Description for project 8",
    year: "2022",
    type: "Mobile App",
    image: "https://picsum.photos/450/450?random=8"
  },
  { 
    id: 9, 
    title: "Project 9", 
    description: "Description for project 9",
    year: "2021",
    type: "UI/UX Design",
    image: "https://picsum.photos/400/700?random=9"
  },
  { 
    id: 10, 
    title: "Project 10", 
    description: "Description for project 10",
    year: "2021",
    type: "Web Development",
    image: "https://picsum.photos/800/400?random=10"
  },
  { 
    id: 11, 
    title: "Project 11", 
    description: "Description for project 11",
    year: "2021",
    type: "Mobile App",
    image: "https://picsum.photos/350/500?random=11"
  },
  { 
    id: 12, 
    title: "Project 12", 
    description: "Description for project 12",
    year: "2020",
    type: "UI/UX Design",
    image: "https://picsum.photos/500/350?random=12"
  },
  { 
    id: 13, 
    title: "Project 13", 
    description: "Description for project 13",
    year: "2020",
    type: "Web Development",
    image: "https://picsum.photos/400/800?random=13"
  },
  { 
    id: 14, 
    title: "Project 14", 
    description: "Description for project 14",
    year: "2020",
    type: "Mobile App",
    image: "https://picsum.photos/600/600?random=14"
  },
  { 
    id: 15, 
    title: "Project 15", 
    description: "Description for project 15",
    year: "2019",
    type: "UI/UX Design",
    image: "https://picsum.photos/300/400?random=15"
  },
  { 
    id: 16, 
    title: "Project 16", 
    description: "Description for project 16",
    year: "2019",
    type: "Web Development",
    image: "https://picsum.photos/700/300?random=16"
  },
  { 
    id: 17, 
    title: "Project 17", 
    description: "Description for project 17",
    year: "2019",
    type: "Mobile App",
    image: "https://picsum.photos/450/600?random=17"
  },
  { 
    id: 18, 
    title: "Project 18", 
    description: "Description for project 18",
    year: "2018",
    type: "UI/UX Design",
    image: "https://picsum.photos/500/800?random=18"
  },
  { 
    id: 19, 
    title: "Project 19", 
    description: "Description for project 19",
    year: "2018",
    type: "Web Development",
    image: "https://picsum.photos/400/500?random=19"
  },
  { 
    id: 20, 
    title: "Project 20", 
    description: "Description for project 20",
    year: "2018",
    type: "Web Development",
    image: "https://picsum.photos/600/450?random=20"
  },
]; 