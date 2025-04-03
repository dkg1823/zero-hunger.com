document.addEventListener('DOMContentLoaded', () => {
    const stateFilter = document.getElementById('state-filter');
    const schemeList = document.getElementById('scheme-list');

    const schemes = {
        central: [
            { name: 'National Food Security Act (NFSA)', details: 'Helpline Number: 1967 or 1800-180-2087 (toll-free)\n    |    Website: nfsa.gov.in' },
            { name: 'Mid-Day Meal Scheme', details: 'The Ministry of Education,\nThe Department of School Education & Literacy,\nShastri Bhawan,\nNew Delhi-110001,\n011-23384253.\n    |    Website: mdm.nic.in' },
            { name: 'Ministry of Women & Child Development', details: 'email id: min-wcd@gov.in.\n     |    Website: icds-wcd.nic.in' },
            { name: 'Pradhan Mantri Garib Kalyan Anna Yojana (PMGKAY)', details: 'Contact: indiaportal@gov.in.\n    |    Website: dfpd.gov.in' },
        ],
        'madhya-pradesh': [
            { name: 'Deendayal Rasoi Yojana', details: 'Helpline Number: Karod,Bhopal: 9589151360.\n    |    Website: rasoi.mp.gov.in' },
            { name: 'CM Annapurna Yojna', details: 'Contact: 1967 \n    |    Website: food.mp.gov.in'}
        ],
        'ngo': [
            { name: 'EK ASHA, JAN RASOI(Gautam Gambhir Foundation)', details: 'Contact: info@gautamgambhirfoundation.org \n     |    Website: www.gautamgambhirfoundation.in' },
            { name: 'Mission Anna Seva(Reliance Foundation)', details: 'contact: contactus@reliancefoundation.org \n     |     Website: www.reliancefoundation.org' }
        ], 
        'social-welfare': [
            { name: 'Shri Mata Vaishno Devi Shrine Board', details: 'Helpline Number: 18001807212 (toll-free)\n     |     Website: www.maavaishnodevi.org' },
            { name: 'Golden Templr Amritsar', details: 'contact: info@sgpc.net.\n    |     Website: sgpc.net' },
            { name: 'ISKCON', details: 'contact:contact@iskcondelhi.com \n    |    Website: iskcon.org'}
        ]
    };

    stateFilter.addEventListener('change', () => {
        displaySchemes(stateFilter.value);
    });

    function displaySchemes(state) {
        schemeList.innerHTML = '';
        const selectedSchemes = state === 'all'
            ? Object.values(schemes).flat()
            : schemes[state];

        selectedSchemes.forEach(createSchemeCard);
    }

    function createSchemeCard(scheme) {
        const schemeCard = document.createElement('div');
        schemeCard.classList.add('scheme-card');
        schemeCard.innerHTML = `<h3>${scheme.name}</h3><p class="scheme-details" style="display:none;">${scheme.details}</p>`;
        schemeCard.addEventListener('click', () => {
            const details = schemeCard.querySelector('.scheme-details');
            details.style.display = details.style.display === 'none' ? 'block' : 'none';
        });
        schemeList.appendChild(schemeCard);
    }

   
   
})