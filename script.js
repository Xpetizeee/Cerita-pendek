// script.js
document.getElementById('addStoryBtn').addEventListener('click', function() {
    // Code to add a new story dynamically
});
// script.js
document.addEventListener('DOMContentLoaded', function() {
    const storyImgs = document.querySelectorAll('.story-img');

    storyImgs.forEach(img => {
        img.addEventListener('click', () => {
            img.classList.toggle('expanded');
        });
    });
});
