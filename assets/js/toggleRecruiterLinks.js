document.addEventListener('DOMContentLoaded', function() {
    const recruiterText = document.getElementById('recruiterText');
    const recruiterLinks = document.getElementById('recruiterLinks');

    recruiterText.addEventListener('click', function() {
        recruiterLinks.style.display = recruiterLinks.style.display === 'none' ? 'block' : 'none';
    });
});
