const treatments = [
    {
        category: 'Neurological Conditions',
        description: 'These conditions affect the nervous system',
        treatments: [
            'Spasticity management',
            'Physical therapy',
            'Orthotics and assistive devices',
        ],
    },
    {
        category: 'Orthopedic Conditions',
        description: 'These conditions involve musculoskeletal and joint problems',
        treatments: [
            'Knee Pain',
            'Heel Pain',
            'Back Pain',
            'Muscle and joint pain',
        ],
    },
    {
        category: 'Other Conditions',
        description: 'These conditions may involve pain, paralysis, and sensory issues',
        treatments: [
            'Facial Palsy',
            'Paralysis rehabilitation',
        ],
    },
    {
        category: 'Sports Injuries',
        description: 'Injuries related to sports activities.',
        treatments: [
            'Sports-specific rehabilitation',
        ],
    },
    {
        category: 'Post-Surgery Rehabilitation',
        description: 'Focusing on helping patients recover after surgical procedures',
        treatments: [
            'Physical therapy', 'Pain management', 'Gradual activity progression'
        ]
    }
];


function rotateTreatments() {
    let currentIndex = 0;

    function updateCardContent() {
        const cardContent = document.getElementById('cardContent');
        if (!cardContent) {
            return;
        }
        cardContent.innerHTML = `
            <h2>${treatments[currentIndex].category}</h2>
            <h5>${treatments[currentIndex].description}</h5>
            ${treatments[currentIndex].treatments.slice(0, 3).map((treatment) => `<p>${treatment}</p>`).join('')}
        `;

        currentIndex = (currentIndex + 1) % treatments.length;
    }

    function updateAsideContent() {
        const asideTreatments = [...treatments];
        asideTreatments.splice(currentIndex, 1)
        for (let i = 1; i < 5; i++) {
            const asideContent = document.getElementById(`asideTreatment-${i}`)
            if (!asideContent) {
                return null
            }
            asideContent.innerHTML = `<h4>${asideTreatments[i - 1].category}</h4>
        <p>${asideTreatments[i - 1].description}
        </p>`
        }

    }

    // // Initial content update
    // updateCardContent();
    // updateAsideContent();

    // // Set interval to update content every 15 seconds
    // setInterval(updateCardContent, 10000);
    // setInterval(updateAsideContent, 10000)
}

// Call the function to start rotating treatments
rotateTreatments();
