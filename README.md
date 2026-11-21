# AI for Integrated Bioinformatics and Health Data

An interactive, research-grade web portal demonstrating the principles, machine learning architectures, and translational clinical workflows of multi-omics and health data integration.

---

## 🌟 Quick Start

Simply open `index.html` in any modern web browser (Google Chrome, Microsoft Edge, Mozilla Firefox, Safari):

```bash
# Path to open:
C:\Users\sonus\.gemini\antigravity\scratch\ai-bioinformatics-health-portal\index.html
```

You can double-click `index.html` in your file explorer, or right-click and choose **Open with > Chrome / Edge**.

---

## 🔬 Core Concepts & Features Covered

This website directly implements and expands upon all foundational concepts:

### 1. Multi-Modal Health & Omics Continuum
* **Genomics**: Genetic variation, SNPs, somatic mutations, and copy number alterations.
* **Transcriptomics**: RNA abundance and dynamic gene-expression profiles (bulk RNA-seq, scRNA-seq).
* **Proteomics**: Protein abundance, phosphorylation, and post-translational modifications.
* **Metabolomics**: Small molecules, metabolic pathway fluxes, and cellular bioenergetics.
* **Clinical Health Data**: Electronic Health Records (EHR), laboratory biomarkers (hs-CRP, HbA1c), patient history, and survival outcomes.
* **The Multi-Omics Rationale**: Why analysing only one data type fails to explain biological systems.

### 2. Beyond Single-Omic Silos & Biological Discrepancies
* **The Genomic Variant vs Protein Function Dilemma**: Interactive side-by-side comparison showing how a pathogenic genetic variant (e.g. TP53) or normal gene can have completely unexpected protein levels due to ubiquitination or glycosylation.
* **The 5 Interconnected Biological Pillars**:
  1. Genetic variation
  2. Gene expression
  3. Protein abundance
  4. Biological pathways
  5. Disease characteristics
* **Association vs. Causation**: Comprehensive scientific alert illustrating why integration identifies statistical associations, and how **Mendelian Randomization** and **Causal Bayesian DAGs** are required to establish true causal disease drivers.

### 3. AI Architectures & Integration Paradigms
* **Early Integration (Concatenation)**: Autoencoders & multi-modal feature stacking.
* **Intermediate Integration (Joint Latent Space)**: Deep Multi-Modal Autoencoders, Cross-Attention Transformers, and Graph Neural Networks (GNNs) with biological protein-protein interaction (PPI) priors.
* **Late Integration (Decision Ensembles)**: Stacking and voting across modality-specific classifiers.

### 4. Interactive Patient-Level AI Simulation Workbench
* **Live Feature Integration Simulator**:
  * Clinical: Patient Age, hs-CRP inflammatory marker.
  * Genomics: Driver variant status (ERBB2 amp, TP53 mut, PCSK9 GOF, Wildtype).
  * Transcriptomics: ERBB2 RNA abundance slider (TPM).
  * Proteomics: HER2 active protein ratio slider (Log2 FC).
  * Metabolomics: Serum L-Lactate slider (mmol/L).
* **Preprocessing & Harmonization Controls**:
  * Empirical Bayes batch correction (ComBat).
  * Missing data imputation (KNN).
  * Variance-stabilizing transformation (VST).
* **Real-time AI Model Inferences**:
  * Multi-task Subtype Prediction & Confidence Score.
  * Estimated Disease Risk & 3-Year Progression-Free Survival (PFS).
  * Explainable AI (XAI): Dynamic **SHAP (SHapley Additive exPlanations)** cross-modal attribution chart showing exact feature weights.
  * Actionable Clinical Recommendation and therapy rationale.
* **Privacy, Ethics & Legal Governance**:
  * Dedicated callouts regarding HIPAA, GDPR, patient consent, de-identification, and secure federated learning.

### 5. Five Transformative AI Applications
1. **Disease Subtype Identification**: Deconvoluting cancer and sepsis heterogeneity using latent clustering.
2. **Biomarker Discovery**: Multi-analyte combinatorial panels beating single-marker false positives.
3. **Understanding Molecular Pathways**: Mapping mutational cascades through signaling and metabolic circuits.
4. **Predicting Biological Outcomes**: Therapy response forecasting, adverse event prediction, and survival estimation.
5. **Studying Gene-Protein Relationships**: Resolving post-transcriptional buffering and translation efficiency bottlenecks.

### 6. Methodological Challenges & Safeguards Laboratory
* **Data Heterogeneity**: Multi-modal embeddings & standard ontologies (SNOMED, GO).
* **Missing Data**: Multi-task masked autoencoders & graph completion.
* **Batch Effects**: Technical variation vs true biology, accompanied by **Interactive Lab 1: PCA Batch Harmonization Simulator** (raw sequencer batches vs ComBat-corrected clusters).
* **High Dimensionality ($p \gg n$)**: Pathway regularizers, ElasticNet, and latent bottlenecking.
* **Data Leakage**: Strict nested cross-validation, accompanied by **Interactive Lab 2: Spot the Data Leakage Pipeline Auditor**.

---

## 💻 Tech Stack
- **Modern HTML5 & Semantic Web Design**
- **Tailwind CSS v3** (Utility-first styling with custom glassmorphism)
- **Chart.js** (Interactive Bar & Scatter PCA charts)
- **Vanilla JavaScript (ES6+)** (Zero build-step dependency; runs offline in any browser)
- **Google Fonts** (*Outfit*, *Inter*, *Fira Code*) & **FontAwesome 6** Icons
- **Dark / Light Theme Toggle** with persistent state in `localStorage`

---

## 📁 File Structure
```
ai-bioinformatics-health-portal/
├── index.html        # Main application structure and user interface
├── styles.css        # Custom styles, animations, and glassmorphism effects
├── data.js           # Biological datasets, patient presets, and glossary data
├── app.js            # Interactive logic, chart renderers, and simulation math
└── README.md         # Documentation and project overview
```
