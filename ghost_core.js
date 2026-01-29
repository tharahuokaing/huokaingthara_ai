let brain = JSON.parse(localStorage.getItem('ghost_brain') || '{}');
let learningMode = null;

// ១. ការបង្កើត Dashboard ដោយប្រើ Loop (HRC Method)
const dashItems = [
    { id: 'mem-count', label: 'MEMORY_UNITS', val: '0' },
    { id: 'strength', label: 'NEURAL_STRENGTH', val: 'BAR' },
    { id: 'threat', label: 'THREAT_LEVEL', val: 'SECURED' }
];

const dashPanel = document.getElementById('dashboard');
dashItems.forEach(item => {
    let html = `
        <div class="stat-box">
            <span class="label">${item.label}</span>
            ${item.val === 'BAR' ? '<div id="strength-bar"><div id="strength-fill"></div></div>' : `<span id="${item.id}">${item.val}</span>`}
        </div>`;
    dashPanel.innerHTML += html;
});

// ២. មុខងារចម្បងៗ
function speak(text) {
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = 'km-KH'; 
    window.speechSynthesis.speak(utter);
}

function updateDashboard() {
    const count = Object.keys(brain).length;
    document.getElementById('mem-count').innerText = count;
    document.getElementById('strength-fill').style.width = Math.min(count * 2, 100) + "%";
}

function process(q) {
    q = q.trim().toLowerCase();
    if(!q) return;
    console.clear();
    logMsg("> " + q, "user");

    if(brain[q]) {
        logMsg("AI: " + brain[q], "ai");
        speak(brain[q]);
    } else {
        let msg = `វិញ្ញាណទូលបង្គំមិនទាន់ស្គាល់ "${q}" ឡើយ។ តើវាជាអ្វីទៅ អង្គម្ចាស់?`;
        logMsg("AI: " + msg, "ai");
        speak(msg);
        learningMode = q;
    }
}

function logMsg(msg, type) {
    const out = document.getElementById('out');
    out.innerHTML += `<div class="${type}">${msg}</div>`;
    out.scrollTop = out.scrollHeight;
}

// ៣. Events & Initialization
document.getElementById('in').onkeypress = (e) => {
    if(e.key === 'Enter') { process(e.target.value); e.target.value = ''; }
};

setTimeout(() => {
    document.getElementById('boot').style.display = 'none';
    updateDashboard();
    speak("ទូលបង្គំត្រៀមខ្លួនជាស្រេច អង្គម្ចាស់");
}, 2000);

