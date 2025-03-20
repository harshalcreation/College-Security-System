// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
	'use strict'
  
	// Fetch all the forms we want to apply custom Bootstrap validation styles to
	const forms = document.querySelectorAll('.needs-validation')
  
	// Loop over them and prevent submission
	Array.from(forms).forEach(form => {
	  form.addEventListener('submit', event => {
		if (!form.checkValidity()) {
		  event.preventDefault()
		  event.stopPropagation()
		}
  
		form.classList.add('was-validated')
	  }, false)
	})
  })();


  // event to  hide the reviews-header(h4 tag) until 1st review card dint exists
  document.addEventListener("DOMContentLoaded", function() {
    const reviewsContainer = document.querySelector('.reviews-container');
    const reviewsHeader = document.getElementById('reviews-header');
	const reviewHr = document.getElementById('review-hr')
    // Check if there are any review cards
    if (reviewsContainer &&reviewsContainer.querySelector('.review-card')) {
        reviewsHeader.style.display = 'block';
		reviewHr.style.display = 'block';
    } else if(reviewsHeader){
        reviewsHeader.style.display = 'none';
		reviewHr.style.display = 'none';
    } else {
		console.error('reviewsHeader not found');
	}
});

function updateProgressBar(progress) {
	
	const progressBar = document.querySelector('.progress-bar');

	const progressLabel = document.getElementById('progress-label');
  
	if (progress === 'Registered') {
	  progressBar.value = 0;  // 0% progress for Registered
	  progressLabel.textContent = 'Registered';
	} else if (progress === 'Finding') {
	  progressBar.value = 50;  // 50% progress for Finding
	  progressLabel.textContent = 'Finding';
	} else if (progress === 'Found') {
	  progressBar.value = 100;  // 100% progress for Found
	  progressLabel.textContent = 'Found';
	}
  }
 
  
  
  // Example: Updating progress to "Finding"
 
  const isAuthenticated = sessionStorage.getItem('authenticated') === 'true';

    // Get the progress slider, progress bar, and progress label elements
   
    // Set the initial progress based on the user's progress (this can be dynamic)
    
    if (isAuthenticated) {
		authenticatedControls.classList.remove('hidden');
	  }
  
	  // Update progress bar value and label based on slider input
	 

		const loginBtn = document.getElementById('login-btn');
		const usernameField = document.getElementById('username');
		const passwordField = document.getElementById('password');
		const progressContainer = document.getElementById('progress-container');
		const progressSlider = document.getElementById('progress-slider');
		const progressBar = document.getElementById('progress-bar');
		const progressLabel = document.getElementById('progress-label');
		const sliderValueText = document.getElementById('slider-value-text');
		const updateProgressBtn = document.getElementById('update-progress-btn');
		const authenticatedControls = document.getElementById('authenticated-controls');
		const loginForm = document.getElementById('login-form');

		let currentProgress = 0;
		let progressText = 'Registered';
		
		
function toggleDetails(id) {
    const details = document.getElementById(`details-${id}`);
    const header = details.previousElementSibling;
  
    if (details.style.display === "block") {
      details.style.display = "none";
      header.classList.remove("open");
    } else {
      details.style.display = "block";
      header.classList.add("open");
    }
  }
  // Simulate Loading
document.addEventListener("DOMContentLoaded", () => {
	setTimeout(() => {
	  // Hide Loader
	  document.getElementById("loader").style.display = "none";
	  
	  // Show Main Content
	  document.getElementById("content").style.display = "block";
	}, 3000); // Simulate a 3-second loading time
  });
  
  onclick="gtag('event', 'download', { 'event_category': 'Button', 'event_label': 'EXE File Download' })"
