document.addEventListener('DOMContentLoaded', () => {
    // Get all filter buttons
    const filterBtns = document.querySelectorAll('.filter-btn');
  
    // Get all projects
    const projects = document.querySelectorAll('.project');
  
    // Add click event listener to each filter button
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const filter = btn.dataset.filter;
        // Loop through all filter buttons and remove the "active" class
        filterBtns.forEach(btn => {
          btn.classList.remove('active');
        });
        // Add the "active" class to the clicked filter button
        btn.classList.add('active');
        // Loop through all projects and hide/show based on the filter
        projects.forEach(project => {
          const tags = project.dataset.tag.split(' ');
          if (filter === 'all' || tags.includes(filter)) {
            project.style.display = 'block';
          } else {
            project.style.display = 'none';
          }
        });
      });
    });
  });
  