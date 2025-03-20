// // script.js

// let currentStage = 1;

// function showNextStage() {
//   const stages = document.querySelectorAll('.stage');
//   if (currentStage < stages.length) {
//     // Mark current stage as completed
//     stages[currentStage - 1].classList.remove('in-progress');
//     stages[currentStage - 1].classList.add('completed');

//     // Mark next stage as in-progress
//     stages[currentStage].classList.remove('pending');
//     stages[currentStage].classList.add('in-progress');

//     // Update stage details
//     // const stageDetails = document.getElementById('stage-details');
//     // const stageNames = [
//     //   "Case Initiation",
//     //   "Data Consolidation",
//     //   "Search & Investigation",
//     //   "Recovery & Rescue",
//     //   "Case Closure",
//     // ];

//     currentStage++;
//     if (currentStage <= stageNames.length) {
//       stageDetails.querySelector('h2').innerText = `Stage: ${stageNames[currentStage - 1]}`;
//       stageDetails.querySelector('p').innerText = "Status: In Progress";
//     }
//   } else {
//     alert("All stages completed!");
//   }
// }
// // script.js

// function toggleDetails(id) {
//     const details = document.getElementById(`details-${id}`);
//     const header = details.previousElementSibling;
  
//     if (details.style.display === "block") {
//       details.style.display = "none";
//       header.classList.remove("open");
//     } else {
//       details.style.display = "block";
//       header.classList.add("open");
//     }
//   }
  