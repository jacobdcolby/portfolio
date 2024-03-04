// Query labels once and store them in a variable.
var labels = document.querySelectorAll('.label');

window.addEventListener('scroll', function() {
    var scrollHeight = window.scrollY;

    // Calculate the distance from the top of each section to the scroll position.
    var distances = Array.from(labels).map(function(label) {
        var sectionId = label.getAttribute('href').substring(1);
        var section = document.getElementById(sectionId);
        if (!section) return Infinity; // Skip if section not found
        return Math.abs(section.offsetTop - scrollHeight);
    });

    // Find the index of the section with the smallest positive distance
    var minDistanceIndex = distances.indexOf(Math.min(...distances.filter(d => d > 0)));

    // Remove 'active' class from all labels
    labels.forEach(function(label) {
        label.classList.remove('active');
    });

    // Add 'active' class to the label corresponding to the closest section
    if (minDistanceIndex !== -1) {
        labels[minDistanceIndex].classList.add('active');
    }
});