var assignmentsArray = [

  {
    title: "Weather App",
    code: "https://github.com/issabaloach/Prodigy_WD_1",
    link: "https://issabaloach.github.io/Prodigy_WD_1/",
    date: "19-june-2024",
    description: "This weather app fetch the weather API from openweather and this changes background image on every discription change ",
  },
  {
    title: "E-Commerce Website using Filter",
    code: "https://github.com/issabaloach/JavaScript-/tree/main/E-commerce-Filter",
    link: "https://issabaloach.github.io/JavaScript-/E-commerce-Filter/index.html",
    date: "15-june-2024",
    description: "e commerce website where user can see as a category to select product, add new product and add to cart for buying",
  },
  {
    title: "Notes - LocalStorage",
    code: "https://github.com/issabaloach/JavaScript-/tree/main/LocalStorage-Notes",
    link: " https://issabaloach.github.io/JavaScript-/LocalStorage-Notes/index.html",
    date: "05-june-2024",
    description: "This is the notes app, that have log in form and with great UI, and here the data being saved in Local Storage of Website ",
  },
    {
        title: "Cards ForEach",
        code: "https://issabaloach.github.io/JavaScript-/ForEach%20Method/index.html",
        link: "https://issabaloach.github.io/JavaScript-/ForEach%20Method/index.html",
        date: "29-May-2024",
        description: "Cards in forEach method which is used for Array and we make a gallery like cards where edit and delete button appears and it's all about Array ForEach",
      },
    {
      title: "Attendance Portal",
      code: "https://issabaloach.github.io/JavaScript-/AttendancePortal/index.html",
      link: "https://issabaloach.github.io/JavaScript-/AttendancePortal/index.html",
      date: "24-May-2024",
      description: "Attendance portals streamline the process of recording and managing attendance data, saving time and improving accuracy.",
    },
    {
      title: "Text Editor",
      code: "https://issabaloach.github.io/JavaScript-/textEditor/index.html",
      link: "https://issabaloach.github.io/JavaScript-/textEditor/index.html",
      date: "18-May-2024",
      description:
        "Learned making text bold , italice , changing font family using JS Dome",
    },
    {
      title: "Finance Tracking Application",
      code: "https://issabaloach.github.io/Finance-App/",
      link: "https://issabaloach.github.io/Finance-App/",
      date: "24-May-2024",
      description: "Manage Income , Expense and see history using our app.",
    },
    {
      title: "Todo List",
      description: "Made Add, update , delete todo using JS Dom",
      code: "https://issabaloach.github.io/JavaScript-/to%20do%20list/index.html",
      link: "https://issabaloach.github.io/JavaScript-/to%20do%20list/index.html",
      date: "20-May-2024",
    },
   
    {
        title: "Light Bulb",
        description: "Switch Light bulb ON & OFF using Eventlistener in JS",
        code: " https://issabaloach.github.io/JavaScript-/EventListener/index.html",
        link: " https://issabaloach.github.io/JavaScript-/EventListener/index.html",
        date: "14-May-2024",
      },
    {
        title: "Counter App",
        description: "Counter Application for Even & Odd Number",
        code: "https://issabaloach.github.io/JavaScript-/Counter%20App/index.html",
        link: "https://issabaloach.github.io/JavaScript-/Counter%20App/index.html",
        date: "14-May-2024",
      },
    {
        title: "Calculator",
        description: "Simple Calculator for simple life",
        code: "https://issabaloach.github.io/Calculator/",
        link: "https://issabaloach.github.io/Calculator/",
        date: "10-May-2024",
      },
    {
        title: "Quick Stop Game",
        description: "Stop the number by entering the number which you choose ",
        code: "https://issabaloach.github.io/JavaScript-/Quick%20Number%20Game/index.html",
        link: "https://issabaloach.github.io/JavaScript-/Quick%20Number%20Game/index.html",
        date: "05-May-2024",
      },
    {
        title: "StopWatch",
        description: "StopWatch using JavaScript",
        code: "https://issabaloach.github.io/Stopwatch-JS/",
        link: "https://issabaloach.github.io/Stopwatch-JS/",
        date: "25-Feb-2024",
      },
    {
        title: "Clock",
        description: "Digital Clock using JavaScript",
        code: "https://issabaloach.github.io/Digital-Clock/",
        link: "https://issabaloach.github.io/Digital-Clock/",
        date: "25-Feb-2024",
      },
    {
        title: "Guess The Number Game ",
        description: "Guess Number in JavaScript",
        code: " https://issabaloach.github.io/Guess-Game-JS/",
        link: "https://issabaloach.github.io/Guess-Game-JS/",
        date: "25-Feb-2024",
      },
    {
        title: "Loop Exercises ",
        description: "For Loop in JavaSript",
        code: " https://issabaloach.github.io/JavaScript-/Loop/index.html",
        link: "https://issabaloach.github.io/JavaScript-/Chap%202/index.html",
        date: "25-Feb-2024",
      },
    {
        title: "Alerts & Variables",
        description: "Alerts AND Variables in Javascript",
        code: "https://m-mahad-siddiqui.github.io/Javascript-JS/TO-DO-APP/index.html",
        link: "https://issabaloach.github.io/JavaScript-/Chap%202/index.html",
        date: "25-Feb-2024",
      },
     
  ];



  // border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden
 
  
  var assignmentsList = document.getElementById("JS-all-assignments");
  
  for (var i = 0; i < assignmentsArray.length; i++) {
    var div =
     ` <div class=" p-4 md:w-1/3 ">
    <div
      class="h-full  ml-8 mt-5 bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-purple-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse "
    >
      <div class="bg-[#581c87] p-6 ">
        <h1 class="title-font text-lg font-medium text-white mb-3">
         ${assignmentsArray[i].title} 
        </h1>
        <p class="text-[#5eead4] leading-relaxed mb-3">${assignmentsArray[i].description}</p>
        <div class="flex items-center flex-wrap">
          <a
            href="${assignmentsArray[i].link}"
            class="text-[#fecdd3] inline-flex items-center md:mb-2 lg:mb-0"
            >See Preview
            <svg
              class="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
          <span
            class="text-white mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200"
          >
            <a
              href="${assignmentsArray[i].code}"
            >
              <svg
                class="w-4 h-4 mr-1"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                viewBox="0 0 24 24"
              >
                <path
                  d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                ></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </div>
  </div>`;
  
  var contact = ''
    assignmentsList.innerHTML += div;
  }


  