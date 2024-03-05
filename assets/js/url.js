// Get the project name from the URL
const projectName = window.location.pathname.split('/').pop().split('.')[0];

// Fetch the project data
fetch('../../../projects.json')
    .then(response => response.json())
    .then(data => {
        const project = data.find(item => item.file === projectName); // Find the project data based on the project name
        if (project) {
            // Update the content of your project page here
        } else {
            console.error('Project not found:', projectName);
        }
    })
    .catch(error => console.error('Error fetching data:', error));