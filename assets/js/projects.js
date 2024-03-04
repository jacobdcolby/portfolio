document.addEventListener("DOMContentLoaded", function() {
    fetch("../../projects.json")
        .then(response => response.json())
        .then(data => {
            const projectsSection = document.getElementById("projects");

            data.projects.forEach(project => {
                const projectTile = document.createElement("div");
                projectTile.classList.add("project-tile");

                const projectPreview = document.createElement("div");
                projectPreview.classList.add("project-preview");
                const previewImage = document.createElement("img");
                previewImage.src = `assets/projects/${project.title.replace(/\s+/g, '-').toLowerCase()}/1.png`;
                projectPreview.appendChild(previewImage);
                projectTile.appendChild(projectPreview);

                const projectDetails = document.createElement("div");
                projectDetails.classList.add("project-details");

                const projectTitle = document.createElement("h3");
                projectTitle.innerText = `${project.title} 🡥`;
                projectDetails.appendChild(projectTitle);

                const shortDesc = document.createElement("p");
                shortDesc.innerText = project["short-desc"];
                projectDetails.appendChild(shortDesc);

                const softwareUsed = document.createElement("div");
                softwareUsed.classList.add("software-used");
                project["software"].forEach(software => {
                    const bubble = document.createElement("span");
                    bubble.classList.add("bubble");
                    bubble.innerText = software;
                    softwareUsed.appendChild(bubble);
                });
                projectDetails.appendChild(softwareUsed);

                projectTile.appendChild(projectDetails);
                projectsSection.insertBefore(projectTile, projectsSection.lastElementChild);
            });
        })
        .catch(error => console.error("Error fetching projects:", error));
});