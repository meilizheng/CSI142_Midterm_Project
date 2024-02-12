document.addEventListener('DOMContentLoaded', function () {
    // Function to populate job listings
    function populateJobListings() {
        // job data
        let jobListings = [
            {
                Title: "Software Engineer",
                Location: "New York, NY",
                EmployeeType: "Full-Time",
                PostDate: "Jan 20, 2024"
            },
            {
                Title: "Data Analyst",
                Location: "San Francisco, CA",
                EmployeeType: "Contract",
                PostDate: "Feb 1, 2024"
            },
            {
                Title: "Web Developer",
                Location: "Chicago, IL",
                EmployeeType: "Part-Time",
                PostDate: "Dec 5, 2023"
            },
            {
                Title: "Network Administrator",
                Location: "Los Angeles, CA",
                EmployeeType: "Full-Time",
                PostDate: "Feb 5, 2024"
            },
            {
                Title: "Data Scientist",
                Location: "Seattle, WA",
                EmployeeType: "Contract",
                PostDate: "Nov 10, 2023"
            },
            {
                Title: "UX Designer",
                Location: "Boston, MA",
                EmployeeType: "Full-Time",
                PostDate: "Jan 1, 2024"
            },
            {
                Title: "Product Manager",
                Location: "Austin, TX",
                EmployeeType: "Full-Time",
                PostDate: "Feb 3, 2024"
            },
            {
                Title: "Cybersecurity Analyst",
                Location: "Washington, D.C.",
                EmployeeType: "Contract",
                PostDate: "Jan 28, 2024"
            },
            {
                Title: "Database Administrator",
                Location: "Denver, CO",
                EmployeeType: "Full-Time",
                PostDate: "Feb 2, 2024"
            },
            {
                Title: "Frontend Developer",
                Location: "Portland, OR",
                EmployeeType: "Contract",
                PostDate: "Feb 1, 2024"
            }
        ];

        // Get the container element
        let container = document.getElementById('job-listings');

        // Loop through job listings and create HTML elements for each job
        jobListings.forEach(jobData => {
            // Create a new job listing element
            let jobListing = document.createElement('div');
            jobListing.classList.add('job-listing');

            // Populate job listing content
            jobListing.innerHTML = `
                <h2>${jobData.Title}</h2>
                <p><strong>Location:</strong> ${jobData.Location}</p>
                <p><strong>Employee Type:</strong> ${jobData.EmployeeType}</p>
                <p><strong>Post Date:</strong> ${jobData.PostDate}</p>
            `;

            // Append the job listing to the container
            container.appendChild(jobListing);
        });
    }

    // Call the function to populate job listings
    populateJobListings();
});

function clearForm() {
    // Get form elements
    let nameInput = document.getElementById('name');
    let emailInput = document.getElementById('email');
    let locationInput = document.getElementById('location');
    let termsCheckbox = document.getElementById('terms');

    // Clear input values
    nameInput.value = '';
    emailInput.value = '';
    locationInput.value = '';
    termsCheckbox.checked = false;
}

function handleSubscription() {
    // Get form elements
    let nameInput = document.getElementById('name').value;
    let emailInput = document.getElementById('email').value;
    let locationInput = document.getElementById('location').value;
    let termsCheckbox = document.getElementById('terms').checked;

    // Check if all fields are filled and the checkbox is checked
    if (nameInput && emailInput && locationInput && termsCheckbox) {
        // Create a message with subscription details
        let message = `
            Thank you for subscribing!
            Name: ${nameInput}
            Email: ${emailInput}
            Location: ${locationInput}
        `;
        // Display the message in an alert
        alert(message);

        // Clear the form fields after successful submission
        clearForm();
    } else {
        // If any field is missing or the checkbox is not checked, display an error message
        alert('Please fill in all fields and agree to the terms to subscribe.');
    }
}

function subscribe() {
    // Get form elements
    let nameInput = document.getElementById('name').value;
    let emailInput = document.getElementById('email').value;
    let locationInput = document.getElementById('location').value;
    let termsCheckbox = document.getElementById('terms').checked;

    // Check if all fields are filled and the checkbox is checked
    if(nameInput === ''){
        // If any field is missing or the checkbox is not checked, display an error message
        alert('Please fill in your name.');
        return false;
    }

    if(emailInput === ''){
        alert('Please fill in your email address.')
        return false;
    }

    if(locationInput===''){
        alert('Please fill in your location information.')
        return false;
    }

    if(!termsCheckbox){
        alert('Please check the box.')
        return;
    }

    alert("Congratulations! You have successfully signed up!");
    
    // Clear the form fields after successful submission
    clearForm();
    return true;
}

document.addEventListener('DOMContentLoaded', function () {
    // Function to filter job listings based on search input
    function filterJobs() {
        // Get the search input value
        let searchText = document.getElementById('search-input').value.toLowerCase();
        
        // Get all job listing elements
        let jobListings = document.querySelectorAll('.job-listing');
        
        // Loop through each job listing element
        jobListings.forEach(jobListing => {
            // Get the job title from the job listing
            let title = jobListing.querySelector('h2').textContent.toLowerCase();
            
            // Show or hide the job listing based on search input match
            if (title.includes(searchText)) {
                jobListing.style.display = 'block'; // Show the job listing
            } else {
                jobListing.style.display = 'none'; // Hide the job listing
            }
        });
    }

    // Add event listener to the search input field
    document.getElementById('search-input').addEventListener('input', filterJobs);
});





