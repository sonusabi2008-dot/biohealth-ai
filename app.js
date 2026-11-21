// Simplified Interactive Logic for AI Bioinformatics & Health Data Portal

let shapChartInstance = null;
let batchChartInstance = null;

// Palette: Tone 1 (Slate), Tone 2 (Cyan: #06b6d4), Tone 3 (Indigo: #6366f1)
const COLOR_CYAN = '#06b6d4';
const COLOR_INDIGO = '#6366f1';
const COLOR_SLATE = '#94a3b8';

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  loadSimplePreset('pat-1');
  initSimpleBatchChart();
});

// --- 1. THEME SWITCHER ---
function initTheme() {
  const toggleBtn = document.getElementById('theme-toggle-btn');
  const themeLabel = document.getElementById('theme-label');
  const savedTheme = localStorage.getItem('biohealth_simple_theme') || 'dark';
  applyTheme(savedTheme);

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'dark';
      const next = current === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      localStorage.setItem('biohealth_simple_theme', next);
    });
  }
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const themeLabel = document.getElementById('theme-label');
  if (themeLabel) themeLabel.textContent = theme === 'light' ? 'Light' : 'Dark';
  if (shapChartInstance) shapChartInstance.update();
  if (batchChartInstance) batchChartInstance.update();
}

// --- 2. SIMPLE PRESETS ---
function loadSimplePreset(patId) {
  const btn1 = document.getElementById('preset-btn-1');
  const btn2 = document.getElementById('preset-btn-2');
  const btn3 = document.getElementById('preset-btn-3');

  // Reset button highlights
  const activeClass = 'px-2.5 py-1 rounded bg-cyan-600 text-white font-medium text-xs transition-colors';
  const inactiveClass = 'px-2.5 py-1 rounded bg-slate-800 text-slate-300 hover:text-white text-xs border border-slate-700 transition-colors';

  if (btn1) btn1.className = patId === 'pat-1' ? activeClass : inactiveClass;
  if (btn2) btn2.className = patId === 'pat-2' ? activeClass : inactiveClass;
  if (btn3) btn3.className = patId === 'pat-3' ? activeClass : inactiveClass;

  const inputAge = document.getElementById('input-age');
  const inputCrp = document.getElementById('input-crp');
  const inputVariant = document.getElementById('input-variant');
  const inputRna = document.getElementById('input-rna');
  const inputProtein = document.getElementById('input-protein');
  const inputMetabolite = document.getElementById('input-metabolite');

  if (patId === 'pat-1') {
    // Patient A: Cancer (High RNA + High Protein)
    if (inputAge) inputAge.value = 64;
    if (inputCrp) inputCrp.value = 6.2;
    if (inputVariant) inputVariant.value = 'erbb2_amp';
    if (inputRna) inputRna.value = 185;
    if (inputProtein) inputProtein.value = 3.8;
    if (inputMetabolite) inputMetabolite.value = 5.2;
  } else if (patId === 'pat-2') {
    // Patient B: Severe Infection / ICU
    if (inputAge) inputAge.value = 58;
    if (inputCrp) inputCrp.value = 28.5;
    if (inputVariant) inputVariant.value = 'tp53_mut';
    if (inputRna) inputRna.value = 45;
    if (inputProtein) inputProtein.value = 0.4;
    if (inputMetabolite) inputMetabolite.value = 8.4;
  } else {
    // Patient C: Heart Risk
    if (inputAge) inputAge.value = 52;
    if (inputCrp) inputCrp.value = 4.8;
    if (inputVariant) inputVariant.value = 'pcsk9_gof';
    if (inputRna) inputRna.value = 85;
    if (inputProtein) inputProtein.value = 1.2;
    if (inputMetabolite) inputMetabolite.value = 2.4;
  }

  updateSimpleSimulation();
}

// --- 3. DYNAMIC SIMULATION CALCULATION (EASY TO UNDERSTAND) ---
function updateSimpleSimulation() {
  const age = parseInt(document.getElementById('input-age')?.value || 64);
  const crp = parseFloat(document.getElementById('input-crp')?.value || 6.2);
  const variant = document.getElementById('input-variant')?.value || 'erbb2_amp';
  const rna = parseInt(document.getElementById('input-rna')?.value || 185);
  const protein = parseFloat(document.getElementById('input-protein')?.value || 3.8);
  const metabolite = parseFloat(document.getElementById('input-metabolite')?.value || 5.2);

  // Update readable text labels
  const displayAge = document.getElementById('display-age');
  const valAge = document.getElementById('slider-val-age');
  const labelCrp = document.getElementById('label-crp');
  const labelRna = document.getElementById('label-rna');
  const labelProtein = document.getElementById('label-protein');
  const labelMetabolite = document.getElementById('label-metabolite');

  if (displayAge) displayAge.textContent = `${age} yrs old`;
  if (valAge) valAge.textContent = age;

  if (labelCrp) {
    if (crp < 3) labelCrp.textContent = `Normal (${crp} mg/L)`;
    else if (crp < 10) labelCrp.textContent = `Mild (${crp} mg/L)`;
    else labelCrp.textContent = `Severe Surge (${crp} mg/L)`;
  }

  if (labelRna) {
    if (rna < 60) labelRna.textContent = 'Low Activity';
    else if (rna < 140) labelRna.textContent = 'Moderate Activity';
    else labelRna.textContent = 'Very High Activity';
  }

  if (labelProtein) {
    if (protein < 0.5) labelProtein.textContent = 'Low / Suppressed';
    else if (protein < 2.0) labelProtein.textContent = 'Moderate';
    else labelProtein.textContent = 'Extremely High Level';
  }

  if (labelMetabolite) {
    if (metabolite < 2.5) labelMetabolite.textContent = 'Normal';
    else if (metabolite < 6.0) labelMetabolite.textContent = 'Elevated (Burning Fast)';
    else labelMetabolite.textContent = 'Critical (Severe Acidosis)';
  }

  // AI Decision Logic
  let verdict = 'Healthy / Low-Risk Profile';
  let confidence = '88%';
  let risk = 'Low Risk';
  let survival = '92% 3-Year Stability';
  let plan = 'Regular annual checkups and healthy diet.';
  let shapWeights = [];

  // Decision 1: Aggressive HER2 Cancer
  if (variant === 'erbb2_amp' || (rna > 120 && protein > 2.0)) {
    verdict = 'HER2-Positive Tumor Subtype';
    confidence = '95%';
    risk = protein > 3.0 ? 'High Risk of Aggressive Spread' : 'Moderate Cancer Risk';
    survival = protein > 3.0 ? '64% 3-Year Stability' : '78% 3-Year Stability';
    plan = 'Prescribe targeted HER2 receptor blockers (Trastuzumab). Because both the RNA instructions and the actual working proteins are elevated, the targeted drug will work effectively.';
    shapWeights = [
      { name: 'Active HER2 Protein', impact: 42, color: COLOR_INDIGO },
      { name: 'RNA Copy Count', impact: 35, color: COLOR_CYAN },
      { name: 'Tumor Fuel (Lactate)', impact: 15, color: COLOR_CYAN },
      { name: 'Blood Inflammation', impact: 8, color: COLOR_SLATE }
    ];
  } 
  // Decision 2: Severe Infection / ICU
  else if (variant === 'tp53_mut' || crp > 18.0 || metabolite > 6.5) {
    verdict = 'Severe Sepsis / Immune Exhaustion';
    confidence = '92%';
    risk = 'Critical ICU Risk';
    survival = '44% Immediate 28-Day Survival';
    plan = 'Administer immediate ICU organ support and targeted immune-restoration therapy. Do not suppress the immune system further.';
    shapWeights = [
      { name: 'Critical L-Lactate Exhaust', impact: 45, color: COLOR_CYAN },
      { name: 'Severe Blood CRP Surge', impact: 32, color: COLOR_INDIGO },
      { name: 'Patient Age Factor', impact: 14, color: COLOR_SLATE },
      { name: 'DNA Mutation Status', impact: 9, color: COLOR_CYAN }
    ];
  } 
  // Decision 3: Heart / Plaque Risk
  else if (variant === 'pcsk9_gof' || crp > 4.0) {
    verdict = 'Artery Plaque Risk (Cardiovascular)';
    confidence = '89%';
    risk = 'Elevated 3-Year Heart Attack Risk';
    survival = '32% Event Probability';
    plan = 'Start PCSK9 inhibitor cholesterol antibody shots combined with anti-inflammatory medication to prevent plaque buildup in blood vessels.';
    shapWeights = [
      { name: 'PCSK9 Genetic Variant', impact: 40, color: COLOR_CYAN },
      { name: 'Blood Vessel Inflammation', impact: 28, color: COLOR_INDIGO },
      { name: 'Metabolic Fat Byproducts', impact: 20, color: COLOR_CYAN },
      { name: 'Age Risk Factor', impact: 12, color: COLOR_SLATE }
    ];
  } else {
    shapWeights = [
      { name: 'Normal Genetics', impact: 35, color: COLOR_CYAN },
      { name: 'Normal Protein Levels', impact: 30, color: COLOR_INDIGO },
      { name: 'Low Inflammation Lab', impact: 25, color: COLOR_SLATE },
      { name: 'Balanced Metabolism', impact: 10, color: COLOR_CYAN }
    ];
  }

  // Update UI Elements
  const titleEl = document.getElementById('predicted-subtype-title');
  const confEl = document.getElementById('predicted-confidence');
  const riskEl = document.getElementById('predicted-risk');
  const survEl = document.getElementById('predicted-survival');
  const recEl = document.getElementById('predicted-recommendation');

  if (titleEl) titleEl.textContent = verdict;
  if (confEl) confEl.textContent = confidence;
  if (riskEl) riskEl.textContent = risk;
  if (survEl) survEl.textContent = survival;
  if (recEl) recEl.textContent = plan;

  renderSimpleShapChart(shapWeights);
}

// Render plain English feature impact chart
function renderSimpleShapChart(shapWeights) {
  const ctx = document.getElementById('shap-chart');
  if (!ctx) return;

  const labels = shapWeights.map(s => s.name);
  const data = shapWeights.map(s => s.impact);
  const colors = shapWeights.map(s => s.color);

  if (shapChartInstance) {
    shapChartInstance.destroy();
  }

  shapChartInstance = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        data: data,
        backgroundColor: colors,
        borderRadius: 3
      }]
    },
    options: {
      indexAxis: 'y',
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: (c) => ` Impact on AI verdict: +${c.parsed.x}%`
          }
        }
      },
      scales: {
        x: {
          title: { display: true, text: 'Importance Weight (%)', color: '#64748b', font: { size: 9 } },
          grid: { color: 'rgba(255, 255, 255, 0.04)' },
          ticks: { color: '#64748b', font: { size: 9 } }
        },
        y: {
          grid: { display: false },
          ticks: { color: '#94a3b8', font: { size: 10 } }
        }
      }
    }
  });
}

// --- 4. SIMPLE BATCH EFFECT PCA LAB ---
function setSimpleBatchState(state) {
  const rawBtn = document.getElementById('batch-raw-btn');
  const corrBtn = document.getElementById('batch-corrected-btn');
  const title = document.getElementById('batch-explanation-title');
  const text = document.getElementById('batch-explanation-text');

  if (state === 'raw') {
    if (rawBtn) rawBtn.className = 'px-2 py-0.5 rounded bg-cyan-600 text-white text-[11px] font-medium';
    if (corrBtn) corrBtn.className = 'px-2 py-0.5 rounded bg-slate-800 text-slate-300 hover:text-white text-[11px] border border-slate-700';
    if (title) title.textContent = 'Noisy Machine Data Active:';
    if (text) text.textContent = 'The dots separate purely because Lab 1 tested some patients and Lab 2 tested others! An AI trained on this would mistakenly predict which lab tested the patient, not the illness.';
    updateBatchDots(false);
  } else {
    if (corrBtn) corrBtn.className = 'px-2 py-0.5 rounded bg-indigo-600 text-white text-[11px] font-medium';
    if (rawBtn) rawBtn.className = 'px-2 py-0.5 rounded bg-slate-800 text-slate-300 hover:text-white text-[11px] border border-slate-700';
    if (title) title.textContent = 'Cleaned with ComBat:';
    if (text) text.textContent = 'Machine noise is removed! The dots now cleanly align by who is sick vs who is healthy, allowing AI to learn the real biology.';
    updateBatchDots(true);
  }
}

function initSimpleBatchChart() {
  const ctx = document.getElementById('batch-chart');
  if (!ctx) return;

  const rawBatch1 = [
    { x: -5.0, y: 3.0 }, { x: -4.5, y: 2.8 }, { x: -5.2, y: 3.5 }, { x: -4.0, y: 3.2 }, { x: -4.8, y: 3.8 }
  ];
  const rawBatch2 = [
    { x: 5.0, y: -2.5 }, { x: 4.5, y: -3.0 }, { x: 5.5, y: -2.0 }, { x: 4.8, y: -2.2 }, { x: 5.2, y: -1.8 }
  ];

  batchChartInstance = new Chart(ctx, {
    type: 'scatter',
    data: {
      datasets: [
        { label: 'Lab Machine A', data: rawBatch1, backgroundColor: COLOR_CYAN, pointRadius: 4 },
        { label: 'Lab Machine B', data: rawBatch2, backgroundColor: COLOR_INDIGO, pointRadius: 4 }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { labels: { color: '#94a3b8', font: { size: 10 } } }
      },
      scales: {
        x: { grid: { color: 'rgba(255, 255, 255, 0.04)' }, ticks: { color: '#64748b' } },
        y: { grid: { color: 'rgba(255, 255, 255, 0.04)' }, ticks: { color: '#64748b' } }
      }
    }
  });
}

function updateBatchDots(isCleaned) {
  if (!batchChartInstance) return;

  if (isCleaned) {
    batchChartInstance.data.datasets[0].label = 'Sick Patients (Both Labs)';
    batchChartInstance.data.datasets[0].data = [
      { x: -3.0, y: 1.0 }, { x: -2.7, y: 0.8 }, { x: -3.2, y: 1.5 }, { x: -2.9, y: 1.2 }, { x: -2.8, y: 1.4 }
    ];
    batchChartInstance.data.datasets[0].backgroundColor = COLOR_CYAN;

    batchChartInstance.data.datasets[1].label = 'Healthy Patients (Both Labs)';
    batchChartInstance.data.datasets[1].data = [
      { x: 2.5, y: -1.2 }, { x: 2.8, y: -0.9 }, { x: 3.0, y: -1.4 }, { x: 2.6, y: -1.3 }, { x: 2.4, y: -0.8 }
    ];
    batchChartInstance.data.datasets[1].backgroundColor = COLOR_INDIGO;
  } else {
    batchChartInstance.data.datasets[0].label = 'Lab Machine A';
    batchChartInstance.data.datasets[0].data = [
      { x: -5.0, y: 3.0 }, { x: -4.5, y: 2.8 }, { x: -5.2, y: 3.5 }, { x: -4.0, y: 3.2 }, { x: -4.8, y: 3.8 }
    ];
    batchChartInstance.data.datasets[0].backgroundColor = COLOR_CYAN;

    batchChartInstance.data.datasets[1].label = 'Lab Machine B';
    batchChartInstance.data.datasets[1].data = [
      { x: 5.0, y: -2.5 }, { x: 4.5, y: -3.0 }, { x: 5.5, y: -2.0 }, { x: 4.8, y: -2.2 }, { x: 5.2, y: -1.8 }
    ];
    batchChartInstance.data.datasets[1].backgroundColor = COLOR_INDIGO;
  }

  batchChartInstance.update();
}
