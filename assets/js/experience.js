AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "e-Yantra Summer Intern",
    cardImage: "assets/images/experience-page/eyrc2.png",
    place: "e-Yantr IIT Bombay",
    time: "(May, 2020 - present)",
    desp: "<li>Worked on development of a Mobile Robot.</li> <li>Worked on hardware and software integration of the robot.</li> <li>Worked on PCB designing, Embedded Development, ROS.</li><li>Worked on Autonomous Navigation and Mapping of the robot.</li>",
  },
  {
    title: "Embedded Developer Intern",
    cardImage: "assets/images/experience-page/AltorLogo.jpg",
    place: "Altor Smart Helmet",
    time: "(Nov 2020 - Jan 2022)",
    desp: "<li>Worked on different microcontroller coding</li><li>Worked on sensor integration and testing</li><li>Worked on debugging and testing of the whole system</li>",
  },
  {
    title: "Junior Researcher",
    cardImage: "assets/images/experience-page/iedc.png",
    place: "Innovation and Entrepreneurship Development Cell",
    time: "(March, 21 - Jan, 22)",
    desp: "<li>Worked on different Robotics and Embedded System Projects</li><li>Worked on Robot Operating System</li><li>Worked on Depth Cameras and LIDAR</li><li>Worked on various microcontroller, microprocessor based projects</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Hacktoberfest 2020",
    cardImage: "assets/images/experience-page/hb.png",
    description:
      "Worked on few open source projects as a part of Hacktoberfest 2020",
  },
  {
    title: "30 days of Google Cloud 2020",
    cardImage: "assets/images/experience-page/gc1.png",
    description:
      "Worked on some cloud features during the period of 30 days",
  },
  {
    title: "IEEE Xplore Challenge",
    cardImage: "assets/images/experience-page/ieee.png",
    description:
      "Worked on research paper from IEEE Xplore",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "Smart India Hackathon",
    subtitle: "Participant",
    image: "assets/images/experience-page/sih.jpeg",
    desp: "Participated in finding a solution to wireless microcontroller programming",
  },
  {
    title: "R.A.C.E Hackathon",
    subtitle: "Participant",
    image: "assets/images/experience-page/race.jpg",
    desp: "It was a Robotics Hackathon organised by IEEE NIT Durgapur.",
  },
  {
    title: "EDGE Arduino Coding Hackathon",
    subtitle: "Participant",
    image: "assets/images/experience-page/edge.png",
    desp: "Participated in a 3 hours Arduino Coding Hackathon organised by Techno India Group.",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="#" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
