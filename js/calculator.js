// Calculator Popup Logic

const solarData = {
    home: {
        // PM Surya Ghar: Central subsidy + State subsidy (for eligible beneficiaries)
        1: { cost: 67000, centralSub: 30000, stateSub: 17000, daily: 5, area: 100, weight: 50 },
        2: { cost: 112000, centralSub: 60000, stateSub: 17000, daily: 10, area: 180, weight: 100 },
        3: { cost: 160000, centralSub: 78000, stateSub: 17000, daily: 15, area: 250, weight: 150 },
        5: { cost: 205000, centralSub: 78000, stateSub: 17000, daily: 25, area: 450, weight: 250 },
        10: { cost: 400000, centralSub: 78000, stateSub: 0, daily: 50, area: 900, weight: 500 }
    },
    shop: {
        // Commercial - NO PM Surya Ghar subsidy (residential only)
        // Benefits: Accelerated depreciation, tax benefits
        1: { cost: 67000, centralSub: 0, stateSub: 0, daily: 5, area: 100, weight: 50 },
        2: { cost: 112000, centralSub: 0, stateSub: 0, daily: 10, area: 180, weight: 100 },
        3: { cost: 160000, centralSub: 0, stateSub: 0, daily: 15, area: 250, weight: 150 },
        5: { cost: 205000, centralSub: 0, stateSub: 0, daily: 25, area: 450, weight: 250 },
        10: { cost: 400000, centralSub: 0, stateSub: 0, daily: 50, area: 900, weight: 500 }
    },
    farm: {
        // PM KUSUM: 30% central + 30% state = 60% subsidy, farmer pays 10%
        1: { cost: 75000, centralSub: 22500, stateSub: 22500, daily: 5, area: 100, weight: 60 },
        2: { cost: 130000, centralSub: 39000, stateSub: 39000, daily: 10, area: 180, weight: 120 },
        3: { cost: 185000, centralSub: 55500, stateSub: 55500, daily: 15, area: 250, weight: 180 },
        5: { cost: 280000, centralSub: 84000, stateSub: 84000, daily: 25, area: 450, weight: 300 },
        10: { cost: 520000, centralSub: 156000, stateSub: 156000, daily: 50, area: 900, weight: 600 }
    }
};

let currentType = 'home';
let currentKw = 3;

export function initCalculator() {
    const modal = document.getElementById('calc-modal');
    const openBtn = document.getElementById('open-calc-popup');
    const closeBtn = document.getElementById('close-calc-modal');
    const proceedBtn = document.getElementById('proceed-quote');

    if (!modal || !openBtn || !closeBtn) return;

    // Open modal
    openBtn.addEventListener('click', () => {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        updateCalculator();
    });

    // Close modal
    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    proceedBtn.addEventListener('click', closeModal);

    // System type tabs
    const systemTabs = document.querySelectorAll('.system-tab');
    systemTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            systemTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            currentType = tab.dataset.type;
            updateCalculator();
        });
    });

    // KW buttons
    const kwBtns = document.querySelectorAll('.kw-btn');
    kwBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            kwBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentKw = parseInt(btn.dataset.kw);
            updateCalculator();
        });
    });

    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    function updateCalculator() {
        const data = solarData[currentType][currentKw];
        if (!data) return;

        const finalCost = data.cost - data.centralSub - data.stateSub;

        // Update result heading
        document.querySelector('.calc-result h3').textContent = `आपके ${currentKw}kW सिस्टम का खर्चा:`;

        // Update cost breakdown
        document.getElementById('total-cost').textContent = `₹${data.cost.toLocaleString('en-IN')}`;
        document.getElementById('central-subsidy').textContent = `-₹${data.centralSub.toLocaleString('en-IN')}`;
        document.getElementById('state-subsidy').textContent = `-₹${data.stateSub.toLocaleString('en-IN')}`;
        document.getElementById('final-cost').textContent = `₹${finalCost.toLocaleString('en-IN')}`;

        // Update system specs
        document.getElementById('daily-units').textContent = data.daily;
        document.getElementById('roof-area').textContent = data.area;
        document.getElementById('system-weight').textContent = data.weight;

        // Reinitialize icons
        if (window.lucide) {
            lucide.createIcons();
        }
    }
}
