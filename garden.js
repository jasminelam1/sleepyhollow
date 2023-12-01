// let flower1 =
//   "https://cdn.glitch.com/98411aa1-fb18-437a-a7a9-53e38169b84c%2FPaper.hackathon_2020_.2_5-removebg-preview%20(1).png?v=1598138516074";
// let flower2 =
//   "https://cdn.glitch.com/98411aa1-fb18-437a-a7a9-53e38169b84c%2FPaper.hackathon_2020_.2_9__1_-removebg-preview.png?v=1598138461154";
// let flower3 =
//   "https://cdn.glitch.com/98411aa1-fb18-437a-a7a9-53e38169b84c%2FPaper.hackathon_2020_.2_13__1_-removebg-preview.png?v=1598138364955";

// let plantInventory = ["flower", "flower1", "flower2"];

// function addPlantToGarden() {
//   let output = document.querySelectorAll(".plants");

//   console.log("this function has ran");
//   //   checking to see if function has been run

//   console.log(plantInventory[1]);
//   let full = true;
//   let i = 0;

//   while (full == true) {
//     if (plantInventory[i] != undefined) {
//       output.innerHTML += `
//       <div class="flowers"> 
//       <p>This works</p>
//       < img  src= "${plantInventory[i]}" width="100px" height="auto">
//       </div>
// `;
//       plantInventory.splice(i, 1);
//       console.log("Insided while function");
//       console.log(i);
//     } else {
//       full = false;
//       console.log(i);
//     }
//   }
// }

function appendImage(){
   document.querySelector(".plants").innerHTML += '<img class="plantImg" src="https://cdn.glitch.com/98411aa1-fb18-437a-a7a9-53e38169b84c%2FPaper.hackathon_2020_.2_5-removebg-preview%20(1).png?v=1598138516074">'//This will append image
}

function appendImage2(){
   document.querySelector(".plants2").innerHTML += '<img class="plantImg" src="https://cdn.glitch.com/98411aa1-fb18-437a-a7a9-53e38169b84c%2FPaper.hackathon_2020_.2_9__1_-removebg-preview.png?v=1598138461154">'//This will append image
}

function appendImage3(){
   document.querySelector(".plants3").innerHTML += '<img class="plantImg" src="https://cdn.glitch.com/98411aa1-fb18-437a-a7a9-53e38169b84c%2FPaper.hackathon_2020_.2_13__1_-removebg-preview.png?v=1598138364955">'//This will append image
}