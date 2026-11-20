// config.js (Students edit only this file)
window.SITE_CONFIG = {
  pageTitle: "Academic Digital Twin Case Study | Student Showcase",
  homeUrl: "https://roadwayvr.com",

  hero: {
    profileImage: "assets/img/image1.jpg",

    // NEW: course code tag shown above the course project pill
    courseTag: "SMRTTECH 4SC3",

    // updated tagline text (big pill)
    tagline: "Course Project: Smart Cities and Communities",

    studentName: "Khadija Adnan",
    program: "Bachelor of Technology / Engineering",
    university: "McMaster University, Canada",
    email: "adnank@mcmaster.ca"
  },

  disclaimer: {
    short:
      "Academic project for a university course. Educational purposes only. Not an official city analysis, consultation, or endorsement.",
    long:
      "This website presents a student academic project created for coursework. Any analyses, results, and potential improvements are simulation-based and provided for educational purposes only. They do not represent official work, endorsement, or consultation for any city or agency.",
    videoOverlaySuggestion:
      "Academic Project · Educational Use Only · Not Official City Work"
  },

  theme: {
	  heroBg: "#142D4E",
	  heroText: "#ffffff",
	  pageBg: "#F0F6FF",
	  accent: "#3B82F6"
  },

  dividers: {
	   dividerBg: "#DBEAFE",
	   dividerText: "#1E3A5F"
  },

  footer: {
		footerBg: "#142D4E",
		  footerText: "#ffffff",
		  footerBorder: "#29486B",
		
		  homeLinkText: "RoadwayVR",
		
		  templateCredit:
		    "This academic showcase template was developed by RoadwayVR.",
		
		  templateCreditLinkText:
		    "Learn more at RoadwayVR.com",
		
		  templateCreditUrl:
		    "https://roadwayvr.com"
  },

  intro: {
    projectTitleLabel: "Mini Project A",
    projectTitle: "Traffic Simulation and Performance Analysis of Human-Driven and Automated Vehicles Using SUMO",
    heroVideo: "assets/video/video.mp4",
    heroVideoPoster: "",
    heroVideoAlt: "Autoplay preview video (academic project)",
    videoCaption:
      "SUMO traffic simulation comparing the base scenario (100% HDVs) with Scenario 1 (100% AVs/CAVs) at the selected intersection."
  },

  caseStudy: {
    title: "Introduction",

    backgroundTitle: "Background",
    backgroundBullets: [
			"Traffic congestion affects road efficiency and travel times.",
			"Human-driven vehicles can contribute to traffic delays and congestion.",
			"Automated vehicles have the potential to improve traffic flow.",
			"SUMO enables the simulation and comparison of different traffic scenarios."
    ],

    problemTitle: "Problem Statement",
    problemBullets: [
			"Traffic congestion reduces transportation efficiency.",
			"Human driving behaviour can contribute to unstable traffic flow.",
			"The impact of automated vehicles on traffic performance requires evaluation.",
			"Simulation helps compare traffic conditions under different vehicle scenarios."
    ],

    objectivesTitle: "Project Objectives",
    objectivesBullets: [
			"Select a road intersection as the study area.",
		    "Develop a baseline SUMO simulation with 100% human-driven vehicles.",
		    "Create a second scenario with 100% automated vehicles.",
		    "Compare traffic performance using speed-density relationships."
    ]
  },

  overview: {
    title: "Methodology",
    steps: [
      {
        title: "Step 1: Study Area Selection",
				text: "Select a road intersection and examine its traffic layout and road network.",
        image: "assets/img/image2.jpg"
      },
      {
				title: "Step 2: Baseline Traffic Simulation (SUMO)",
				text: "Develop a SUMO simulation representing 100% human-driven vehicles.",
        image: "assets/img/image3.jpg"
      },
      {
				title: "Step 3: Automated Vehicle Scenario",
				text: "Configure a second SUMO scenario using 100% automated vehicles.",
        image: "assets/img/image4.jpg"
      },
      {
				title: "Step 4: Results and Comparison",
				text: "Compare traffic performance using speed-density graphs for both scenarios.",
        image: "assets/img/image5.jpg"
      }
    ]
  },

  implementation: {
    title: "Methodology Steps (Demo Modules)",
    modules: [
      {
        title: "Module 1: Study Area Selection",
        bullets: [
				  {text: "Select a road intersection for traffic analysis."},
				  {text: "Examine the road layout, lanes, and intersection geometry."},
				  {text: "Prepare the selected road network for SUMO simulation."}
        ],
        image: "assets/img/image2.jpg"
      },
      {
        title: "Module 2: Baseline Traffic Simulation (100% HDV)",
        bullets: [
         {text: "Develop the baseline traffic simulation using SUMO."},
 		 {text: "Configure traffic demand with 100% human-driven vehicles."},
  		 {text: "Run the simulation and collect traffic performance data."}
        ],
        image: "assets/img/image3.jpg"
      },
      {
        title: "Module 3: Automated Vehicle Simulation (100% AV/CAV)",
        bullets: [
			  {text: "Create a second traffic scenario using 100% automated vehicles."},
			  {text: "Configure automated vehicle behaviour in SUMO."},
			  {text: "Run the simulation and collect traffic performance data."}
        ],
        image: "assets/img/image4.jpg"
      },
      {
        title: "Module 4: Results and Traffic Performance Analysis",
        bullets: [
		 {text: "Generate speed-density graphs for the two traffic scenarios."},
		{text: "Compare free-flow speed, jam density, and traffic behaviour."},
		{text: "Evaluate the differences between human-driven and automated vehicles."}
        ],
        image: "assets/img/image5.jpg"
      }
    ]
  },

	results: {
			title: "Results & Potential Improvements",
			subtitle:
				"Speed-density relationships are analyzed for the baseline (100% HDV) and automated vehicle (100% AV/CAV) scenarios at Edge E16.",

			charts: {
				left: {
					title: "Base Scenario — 100% Human-Driven Vehicles (HDV)",
					src: "assets/img/image6.jpg",
					alt: "Speed-density relationship for the baseline scenario with 100% human-driven vehicles at Edge E16"
				},
				right: {
					title: "Scenario 1 — 100% Automated Vehicles (AV/CAV)",
					src: "assets/img/image7.jpg",
					alt: "Speed-density relationship for Scenario 1 with 100% automated vehicles at Edge E16"
				}
			},

			discussionTitle: "Discussion",
			discussionBullets: [
				"Both scenarios show decreasing vehicle speeds as traffic density increases.",
				"The baseline scenario has an estimated free-flow speed of 4.39 m/s and jam density of 185 veh/km.",
				"The automated vehicle scenario has an estimated free-flow speed of 4.46 m/s and jam density of 181 veh/km.",
				"Automated vehicles show a slightly higher estimated free-flow speed than human-driven vehicles.",
				"The results demonstrate how vehicle automation can influence traffic flow characteristics."
			]
		},

  team: {
    title: "Team & Acknowledgments",
    subtitle:
      "This section clarifies academic context, roles, tools, and sources. Clear attribution improves credibility and shows ethical data handling.",

    members: [
      { name: "Khadija Adnan", role: "SUMO Traffic Simulation, Scenario Development, Traffic Performance Analysis, and Results Communication" }
    ],

    acknowledgments: [
		"Course: SMRTTECH 4SC3 - Smart Cities and Communities",
		  "Institution: McMaster University",
		  "Lab Instructor: Dr. Ahmad Mohammadi",
		  "Tools: SUMO, Python, Traffic Simulation and Data Analysis"
    ],

    repoLabel: "Project Repository",
    repoUrl: "https://khadijaadnan04.github.io/smartcity-projectaa.github.io/"
  }
};
