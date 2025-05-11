// Smooth scroll for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Get the target section's ID
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        // Scroll to the target section
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Expand/Collapse article sections
const articleSections = document.querySelectorAll('#full-article p');
articleSections.forEach(section => {
    section.addEventListener('click', () => {
        section.classList.toggle('expanded');
        if (section.classList.contains('expanded')) {
            section.style.maxHeight = 'none';  // Allow text to expand
        } else {
            section.style.maxHeight = '100px';  // Limit text height
        }
    });
});
