document.addEventListener('DOMContentLoaded', function() {
    const projectTiles = document.querySelectorAll('.project-tile');

    projectTiles.forEach(tile => {
        tile.addEventListener('mouseover', () => {
            projectTiles.forEach(otherTile => {
                if (otherTile !== tile) {
                    otherTile.classList.add('dimmed');
                }
            });
        });

        tile.addEventListener('mouseout', () => {
            projectTiles.forEach(otherTile => {
                if (otherTile !== tile) {
                    otherTile.classList.remove('dimmed');
                }
            });
        });
    });
});