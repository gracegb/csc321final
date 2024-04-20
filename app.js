// scripts.js
document.addEventListener('DOMContentLoaded', function () {
    loadTimeline();
    loadInfographics();
});

function loadTimeline() {
    const timelineData = {
        title: { text: "History of the Internet" },
        events: [
            { year: 1991, title: "WWW Launch", description: "The World Wide Web goes live to the world.", category: "Milestone" },
            { year: 2004, title: "Facebook Launch", description: "Facebook goes live, opening up new social networking prospects.", category: "Social Media" },
        ]
    };

    // Initialize and configure TimelineJS
    const options = {
        scale_factor: 1,
        timeline: timelineData
    };
    window.timeline = new TL.Timeline('timeline-container', options);
}

function loadInfographics() {
    // Example: Chart.js for a simple bar chart infographic
    const ctx = document.getElementById('infographics-container').getContext('2d');
    const userGrowthChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['2004', '2005', '2010', '2015', '2020'],
            datasets: [{
                label: 'Facebook Users',
                data: [1, 6, 100, 500, 2500],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
