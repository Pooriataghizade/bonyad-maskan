/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",

  ],
  
  theme: {
    colors:{
      "blueMain" : "#164B88",
      "white" : "#fff",
      "greenLight" : "#49c264" ,
      "black" : "#000",
      "disableBlue" : "#AAB7C6",
      "gray" : "#E7E7EE",
      "sucess" : "rgba(13, 146, 20, 1)",
      "weak" : "rgba(208, 29, 19, 1)",
      "fail" : "rgba(240, 220, 0, 1)",
      "notBat" : "rgba(165, 174, 0, 1)",
      "GreenBOXbILL" : "#D4FFDE",
      "GreenTXTbiLL" : "#49C264",
      "graytxt" : "#B5B5B5",
      "blueDashboard":"#1C4B82",
      "graDshbrd" : "#F5F6FA ",
      "infoBgAlert" : "#FFF1E1",
      "successBgAlert" :"#E9FFEE",
      "errorBgAlert" : "#FFE6E6",
      "infoTxtAlert": "#FF8A00",
      "successTxtAlert": "#49C264",
      "errorTxtAlert": " #E91919",
    },
    extend: {},
  },
  daisyui :{
    themes : false ,
  },
  plugins: [
     require("daisyui"),
     require('flowbite/plugin'),
  ],
  
}