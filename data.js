// Comprehensive Data & Knowledge Base for AI in Integrated Bioinformatics & Health Data

const BIO_MODALITIES = [
  {
    id: 'genomics',
    name: 'Genomics',
    tagline: 'DNA sequence, genetic variants & somatic mutations',
    icon: 'dna',
    color: '#38bdf8', // sky-400
    badge: 'Blueprint Layer',
    definition: 'Analyzes the complete DNA blueprint of an organism, identifying single nucleotide polymorphisms (SNPs), copy number variations (CNVs), insertions/deletions, and structural rearrangements.',
    measurementUnits: 'Variant Allele Frequency (VAF), Copy Number Ratio, Phred Quality Score',
    technologies: ['Whole Genome Sequencing (WGS)', 'Whole Exome Sequencing (WES)', 'Targeted Gene Panels', 'Sanger Sequencing'],
    biologicalSignificance: 'Establishes the inherited germline architecture and acquired somatic mutations that predispose individuals to disease or drug toxicities.',
    exampleFeatures: [
      { name: 'TP53 (p.R175H Missense)', val: 'Pathogenic Somatic (VAF 42%)', role: 'Loss of tumor suppression; drug resistance driver' },
      { name: 'BRCA1 (c.68_69delAG Frameshift)', val: 'Germline Pathogenic', role: 'Homologous recombination repair deficiency (PARP inhibitor target)' },
      { name: 'EGFR (Exon 19 Deletion)', val: 'Activating Mutation', role: 'Predicts sensitivity to EGFR tyrosine kinase inhibitors' },
      { name: 'PCSK9 (rs11591147 R46L)', val: 'Loss-of-Function SNP', role: 'Associated with lifelong low LDL cholesterol levels' }
    ],
    whyIncompleteAlone: 'A genetic variant indicates potential, not execution. Many variants are silent or buffered by cellular redundancy. DNA cannot tell you if the gene is actively transcribed, translated into protein, or functionally active in a specific tissue at this moment.'
  },
  {
    id: 'transcriptomics',
    name: 'Transcriptomics',
    tagline: 'RNA abundance & gene-expression profiles',
    icon: 'dna',
    color: '#06b6d4', // cyan-500
    badge: 'Expression Layer',
    definition: 'Quantifies RNA transcripts (mRNA, non-coding RNAs) reflecting the immediate transcriptional state of cells at a given moment or condition.',
    measurementUnits: 'Transcripts Per Million (TPM), FPKM, Raw Read Counts',
    technologies: ['Bulk RNA-Seq (Illumina)', 'Single-cell RNA-Seq (10x Genomics)', 'Spatial Transcriptomics', 'Microarrays'],
    biologicalSignificance: 'Captures dynamic gene activation, alternative splicing, and cellular responses to drug exposure or environmental stressors.',
    exampleFeatures: [
      { name: 'ESR1 (Estrogen Receptor 1)', val: 'High (142.3 TPM)', role: 'Predicts endocrine therapy responsiveness in breast cancer' },
      { name: 'ERBB2 (HER2/neu)', val: 'Overexpressed (210.8 TPM)', role: 'Oncogenic driver indicating Trastuzumab sensitivity' },
      { name: 'MKI67 (Ki-67 marker)', val: 'Elevated (58.4 TPM)', role: 'Cellular proliferation index' },
      { name: 'VEGFA', val: 'Moderate (34.1 TPM)', role: 'Angiogenesis stimulus in hypoxic tumor microenvironments' }
    ],
    whyIncompleteAlone: 'Elevated mRNA does not guarantee high functional protein levels due to post-transcriptional silencing, microRNA regulation, ribosome stalling, and targeted protein degradation (ubiquitination).'
  },
  {
    id: 'proteomics',
    name: 'Proteomics',
    tagline: 'Protein abundance & post-translational modifications',
    icon: 'shield-alert',
    color: '#8b5cf6', // purple-500
    badge: 'Functional Layer',
    definition: 'Measures the abundance, isoforms, and modification states (phosphorylation, acetylation, ubiquitination) of active cellular machinery: proteins.',
    measurementUnits: 'Relative abundance (iTRAQ/TMT), LFQ intensity, copy number/cell',
    technologies: ['LC-MS/MS (Liquid Chromatography-Tandem Mass Spectrometry)', 'Reverse Phase Protein Arrays (RPPA)', 'Olink Proximity Extension Assay', 'SomaScan aptamers'],
    biologicalSignificance: 'Proteins are the primary executors of cellular functions and the direct targets of >90% of FDA-approved pharmaceuticals.',
    exampleFeatures: [
      { name: 'Phospho-AKT (Ser473)', val: 'Elevated (Ratio 2.4)', role: 'Direct indicator of hyperactive PI3K/AKT survival signaling' },
      { name: 'p53 Protein Abundance', val: 'Accumulated / Mutated', role: 'Inability to induce apoptosis despite DNA damage' },
      { name: 'PD-L1 (CD274)', val: 'Positive (Tumor Prop. 65%)', role: 'Immune checkpoint biomarker for anti-PD-1 immunotherapy' },
      { name: 'EGFR (Active Conformation)', val: 'High expression', role: 'Target for Tyrosine Kinase Inhibitors (Osimertinib)' }
    ],
    whyIncompleteAlone: 'Proteomics may show low protein levels without revealing whether the root cause is genetic deletion, promoter hypermethylation, or accelerated turnover, obscuring upstream therapeutic levers.'
  },
  {
    id: 'metabolomics',
    name: 'Metabolomics',
    tagline: 'Small molecules & metabolic pathway fluxes',
    icon: 'activity',
    color: '#10b981', // emerald-500
    badge: 'Phenotypic Downstream Layer',
    definition: 'Profiles low-molecular-weight metabolites (<1500 Da) such as amino acids, lipids, sugars, and organic acids, representing the ultimate functional readout of cellular physiology.',
    measurementUnits: 'Peak area ratio, micromolar concentration (µM), normalized intensity',
    technologies: ['High-Resolution LC-MS', 'Gas Chromatography-MS (GC-MS)', 'Nuclear Magnetic Resonance (NMR) Spectroscopy'],
    biologicalSignificance: 'Captures the real-time interaction between genomic potential and environmental factors (diet, microbiome, drug metabolism, hypoxia).',
    exampleFeatures: [
      { name: 'L-Lactate', val: '4.8 mmol/L (Elevated)', role: 'Hallmark of Warburg effect (aerobic glycolysis) in tumors' },
      { name: '2-Hydroxyglutarate (2-HG)', val: 'Abnormally High (12.4 µM)', role: 'Oncometabolite generated by IDH1/2 somatic mutations' },
      { name: 'Glutamine / Glutamate Ratio', val: '0.42 (Shifted)', role: 'Glutaminolysis addiction in rapidly proliferating cancer cells' },
      { name: 'Phosphatidylcholine (PC 34:1)', val: 'Altered lipidomic profile', role: 'Membrane remodeling in cardiovascular & metabolic syndrome' }
    ],
    whyIncompleteAlone: 'Metabolic shifts can fluctuate rapidly due to recent meals, circadian cycles, or physical exertion, making it hard to disentangle disease etiology without molecular genomic context.'
  },
  {
    id: 'clinical',
    name: 'Clinical Data',
    tagline: 'Laboratory results, diagnoses, treatments & patient outcomes',
    icon: 'clipboard-pulse',
    color: '#f59e0b', // amber-500
    badge: 'Macro-Phenotypic Layer',
    definition: 'Electronic Health Record (EHR) features including demographics, diagnostic ICD/SNOMED codes, clinical vitals, pharmacological regimens, pathology notes, and long-term survival.',
    measurementUnits: 'Clinical laboratory standards (mg/dL, g/L, %, survival months, ECOG performance score)',
    technologies: ['Electronic Health Records (Epic, Cerner)', 'Laboratory Information Systems (LIS)', 'DICOM Imaging', 'Registries'],
    biologicalSignificance: 'Provides the real-world ground truth: how molecular biology manifests as actual patient health, symptom burdens, therapy resistance, and overall survival.',
    exampleFeatures: [
      { name: 'Patient Age & Sex', val: '62 yrs, Female', role: 'Baseline biological aging and hormonal milieu' },
      { name: 'High-Sensitivity CRP (hs-CRP)', val: '8.4 mg/L (Severe)', role: 'Systemic inflammatory burden and vascular risk' },
      { name: 'ECOG Performance Status', val: 'Grade 1 (Ambulatory)', role: 'Patient physiological tolerance for combination chemotherapy' },
      { name: 'Prior Treatment History', val: 'Adjuvant Doxorubicin', role: 'Risk factor for cardiac toxicity and chemoresistance' }
    ],
    whyIncompleteAlone: 'Clinical records show what is happening macroscopically, but lack the microscopic molecular resolution needed for targeted therapies or mechanism-based interventions.'
  }
];

const INTEGRATION_CASE_STUDIES = [
  {
    title: 'The "Silent Mutation" Dilemma (Genomics vs Proteomics)',
    gene: 'TP53 (Tumor Suppressor)',
    genomicFinding: 'A missense mutation (p.R175H) is identified in patient genomic sequencing.',
    isolatedViewConclusion: 'Genomics alone assumes TP53 is functionally disrupted, recommending standard non-targeted cytotoxic chemotherapy.',
    integratedViewFinding: 'Transcriptomics reveals high mRNA expression, but Proteomics shows ubiquitin ligase MDM2 hyper-amplification causing total p53 degradation. Metabolomics confirms high 2-HG oncometabolite signaling.',
    integratedResolution: 'Targeted combination therapy using MDM2 antagonist + metabolic checkpoint inhibitor, turning a chemo-resistant case into a sustained partial remission.',
    advantage: 'Prevents ineffective toxic chemotherapy by probing the entire molecular cascade.'
  },
  {
    title: 'Discordant mRNA vs Protein in Immuno-Oncology',
    gene: 'CD274 (PD-L1)',
    genomicFinding: 'No copy number amplification detected in whole exome sequencing.',
    isolatedViewConclusion: 'Transcriptomics shows moderate PD-L1 mRNA; patient deemed borderline / ineligible for expensive anti-PD-1 checkpoint immunotherapy.',
    integratedViewFinding: 'Proteomics discovers heavy post-translational N-glycosylation stabilizing the PD-L1 protein at cell membrane (very high surface protein). Clinical labs show elevated IFN-gamma and neutrophil-lymphocyte ratio.',
    integratedResolution: 'Patient receives Pembrolizumab and achieves complete pathological response. Without proteomics & clinical integration, this life-saving therapy would have been denied.',
    advantage: 'Bridges the gap between mRNA transcription and actual functional surface protein receptor abundance.'
  }
];

const PRESET_PATIENTS = [
  {
    id: 'pat-1',
    name: 'Patient Case A: Oncology (Breast Carcinoma Subtyping)',
    description: '64 y/o female with invasive ductal carcinoma. Discrepancy between genomic variant and protein abundance.',
    clinical: {
      age: 64,
      crp: 6.2,
      hbA1c: 5.7,
      stage: 'Stage IIB (T2N1M0)',
      priorTherapy: 'None (Treatment naive)'
    },
    genomics: {
      variant: 'ERBB2 Amplification + TP53 wildtype',
      pathway: 'RTK/MAPK & PI3K Signaling'
    },
    transcriptomics: {
      ERBB2: 185.4, // TPM
      ESR1: 18.2,
      MKI67: 74.0,
      VEGFA: 45.1,
      TP53: 52.0
    },
    proteomics: {
      HER2: 3.8, // Log2 FC relative to normal
      ER: 0.2,
      Ki67: 2.9,
      PDL1: 1.4
    },
    metabolomics: {
      lactate: 5.2, // mmol/L
      glutamine: 0.38,
      choline: 2.8
    },
    expectedOutcome: {
      subtype: 'HER2-Enriched (Molecular Luminal-B Borderline)',
      confidence: 94.2,
      riskLevel: 'High Risk of Early Relapse',
      progressionFree3Yr: '68%',
      primaryDriver: 'Cross-modal concordance: ERBB2 RNA + HER2 Protein phosphorylation with elevated Ki-67 & glycolytic flux',
      recommendedAction: 'Trastuzumab + Pertuzumab + Docetaxel followed by maintenance dual HER2 blockade.'
    }
  },
  {
    id: 'pat-2',
    name: 'Patient Case B: Sepsis & Systemic Inflammatory Endotype',
    description: '58 y/o male in ICU with acute respiratory distress, suspected bacterial sepsis.',
    clinical: {
      age: 58,
      crp: 28.4,
      hbA1c: 6.8,
      stage: 'SOFA Score 8 (Septic Shock)',
      priorTherapy: 'Broad-spectrum empiric antibiotics'
    },
    genomics: {
      variant: 'TLR4 / NF-κB regulatory variant rs4986790',
      pathway: 'Innate Immune Activation'
    },
    transcriptomics: {
      ERBB2: 12.0,
      ESR1: 8.5,
      MKI67: 22.1,
      VEGFA: 89.4,
      TP53: 31.0
    },
    proteomics: {
      HER2: 0.1,
      ER: 0.1,
      Ki67: 0.8,
      PDL1: 3.2
    },
    metabolomics: {
      lactate: 7.9,
      glutamine: 0.18,
      choline: 1.4
    },
    expectedOutcome: {
      subtype: 'Immunoparalysis / Late-Phase Exhaustion Endotype',
      confidence: 91.8,
      riskLevel: 'Critical (High 28-day ICU Mortality)',
      progressionFree3Yr: 'N/A (ICU Acute)',
      primaryDriver: 'Extreme Lactate elevation coupled with high PD-L1 protein exhaustion despite high VEGFA endothelial leakiness',
      recommendedAction: 'Immune checkpoint restoration trial or IL-7 adjuvant immunotherapy rather than further immunosuppression.'
    }
  },
  {
    id: 'pat-3',
    name: 'Patient Case C: Cardiometabolic Atherosclerotic Risk',
    description: '51 y/o male with familial hypercholesterolemia presentation and indeterminate coronary calcium score.',
    clinical: {
      age: 51,
      crp: 4.8,
      hbA1c: 6.2,
      stage: 'Framingham Moderate (12% 10-yr risk)',
      priorTherapy: 'Atorvastatin 20mg daily'
    },
    genomics: {
      variant: 'PCSK9 Gain-of-Function SNP',
      pathway: 'Lipid Transport & Atherogenesis'
    },
    transcriptomics: {
      ERBB2: 14.2,
      ESR1: 22.1,
      MKI67: 15.3,
      VEGFA: 28.7,
      TP53: 45.2
    },
    proteomics: {
      HER2: 0.2,
      ER: 0.3,
      Ki67: 0.4,
      PDL1: 0.5
    },
    metabolomics: {
      lactate: 2.1,
      glutamine: 0.65,
      choline: 4.6
    },
    expectedOutcome: {
      subtype: 'High Plaque Vulnerability Phenotype',
      confidence: 88.5,
      riskLevel: 'Re-stratified from Moderate to Very High',
      progressionFree3Yr: 'Major Adverse Cardiac Event (MACE) risk 34% at 3 yrs',
      primaryDriver: 'PCSK9 variant combined with abnormal lipidomic metabolite signature and chronic low-grade vascular inflammation',
      recommendedAction: 'Escalate to PCSK9 monoclonal antibody (Evolocumab) + Ezetimibe add-on therapy.'
    }
  }
];

const CORE_APPLICATIONS = [
  {
    id: 'subtyping',
    title: 'Disease Subtype Identification',
    tagline: 'Deconvoluting biological heterogeneity within identical clinical diagnoses',
    icon: 'layers',
    summary: 'Traditional clinical diagnostics lump patients into broad disease categories. AI clusters multi-omics latent spaces to identify distinct molecular subtypes (endotypes) with unique natural histories and drug sensitivities.',
    aiMethod: 'Deep Variational Autoencoders (VAEs), Consensus Clustering, Similarity Network Fusion (SNF)',
    example: 'In Diffuse Large B-cell Lymphoma (DLBCL) or Glioblastoma, AI integration of RNA-seq + Phosphoproteomics revealed 4 distinct subtypes where single-omics only found 2, explaining why 30% of patients failed standard chemotherapy.',
    impactMetric: '35% improvement in prognostic stratification accuracy over clinical staging alone.'
  },
  {
    id: 'biomarkers',
    title: 'Biomarker Discovery',
    tagline: 'Isolating robust multi-analyte signatures that transcend single-assay noise',
    icon: 'search',
    summary: 'Single-analyte biomarkers (e.g. PSA in prostate cancer or CA-125 in ovarian cancer) suffer from false positives. AI discovers multi-modal combinatorial biomarker panels (e.g., 3 genes + 2 phosphorylated proteins + 1 serum metabolite).',
    aiMethod: 'ElasticNet Regularization, Sparse Multi-Block PLS-DA, Random Forest feature importance, SHAP cross-modal attribution',
    example: 'A 5-marker panel combining liquid biopsy cfDNA mutation rate, 2 microRNAs, and serum lysophosphatidylcholine detects early stage pancreatic cancer with 92% sensitivity vs 54% for CA19-9 alone.',
    impactMetric: 'Reduction in false-positive biopsy referrals by 42%.'
  },
  {
    id: 'pathways',
    title: 'Understanding Molecular Pathways',
    tagline: 'Mapping how genomic mutations cascade through regulatory and metabolic circuits',
    icon: 'git-merge',
    summary: 'Biological pathways are intricate networks with feedback loops. AI models integrate multi-omics to trace how a genetic defect cascades through transcription factors, protein kinases, and metabolic fluxes to drive disease.',
    aiMethod: 'Graph Neural Networks (GNNs), Pathway-informed Neural Networks (PathDNN), Causal Bayesian Networks',
    example: 'Uncovering bypass signaling in KRAS-mutant lung adenocarcinoma: AI showed that when MEK is inhibited, cancer cells survive by rerouting metabolic flux through serine-glycine synthesis pathways.',
    impactMetric: 'Identification of 18 novel synthetic lethality drug combinations.'
  },
  {
    id: 'outcomes',
    title: 'Predicting Biological Outcomes',
    tagline: 'Forecasting therapy response, drug resistance, and patient survival trajectories',
    icon: 'trending-up',
    summary: 'Combines baseline molecular state with longitudinal clinical records to predict which patients will respond to immunotherapy, develop toxic adverse events, or suffer early relapse.',
    aiMethod: 'Multi-Modal Transformers, DeepSurv (Deep Cox Proportional Hazards), Multi-task Survival Analysis',
    example: 'Predicting immune-related adverse events (irAEs) in melanoma patients before nivolumab dosing, allowing prophylactic corticosteroid planning without dampening anti-tumor efficacy.',
    impactMetric: 'C-index improvement from 0.62 (clinical only) to 0.81 (integrated multi-omics + clinical).'
  },
  {
    id: 'gene_protein',
    title: 'Studying Gene-Protein Relationships',
    tagline: 'Resolving post-transcriptional buffering and translation efficiency bottlenecks',
    icon: 'shuffle',
    summary: 'The correlation between mRNA abundance and protein abundance in human tissues is notoriously low (often Pearson r ~ 0.40). AI integrates sequence features, ribosome profiling, and degradation rates to model this discrepancy.',
    aiMethod: 'Sequence-to-expression Deep Learning, Cross-Modal Contrastive Learning (CLIP-style Omics), Attentive Bi-linear Pooling',
    example: 'Detecting gene dosage buffering in aneuploid tumors where chromosome duplication triples mRNA levels but protein quality control machinery selectively degrades excess subunits to maintain stoichiometry.',
    impactMetric: 'Reveals true therapeutic druggability that mRNA expression maps fail to capture.'
  }
];

const CHALLENGES_AND_SAFEGUARDS = [
  {
    id: 'heterogeneity',
    name: 'Data Heterogeneity',
    tagline: 'Different formats, measurement scales & scientific platforms',
    problem: 'RNA-seq outputs discrete read counts (Poisson/negative binomial); mass spectrometry outputs continuous intensities (log-normal); EHR data contains categorical codes (ICD-10) and irregular continuous vitals.',
    consequence: 'Models can be dominated by high-magnitude continuous signals while ignoring critical binary mutations or categorical clinical history.',
    solution: 'Multi-modal embedding architectures (e.g. projecting each modality into a shared latent space via modality-specific encoders), variance-stabilizing transformations (DESeq2 VST), and unified biomedical ontologies (SNOMED-CT, Gene Ontology).'
  },
  {
    id: 'missing_data',
    name: 'Missing Data',
    tagline: 'Samples lacking particular omics assays or clinical panels',
    problem: 'Full multi-omics sequencing is expensive. Many clinical cohorts have RNA-seq for 100% of patients, but Mass-Spec proteomics for only 35% and targeted metabolomics for 20%.',
    consequence: 'Dropping incomplete records (complete-case analysis) slashes sample sizes by >70% and introduces severe selection bias.',
    solution: 'Multi-task masked autoencoders (e.g. Masked Omics Autoencoders), Cross-modal Generative Adversarial Imputation (GAI), and Graph convolutional completion that leverage co-expression networks.'
  },
  {
    id: 'batch_effects',
    name: 'Batch Effects',
    tagline: 'Technical variation obscuring true biological signal',
    problem: 'Samples processed on different days, by different lab technicians, using different reagent lots or sequencer flowcells develop systematic non-biological shifts in measurements.',
    consequence: 'AI algorithms learn to classify the hospital or sequencing run date rather than the disease biology, yielding completely unreplicable "breakthroughs".',
    solution: 'Rigorous experimental randomized block design, ComBat / ComBat-seq parametric empirical Bayes harmonization, adversarial domain adaptation to strip batch-identifying embeddings.'
  },
  {
    id: 'dimensionality',
    name: 'High Dimensionality (p >> n)',
    tagline: 'Tens of thousands of features with relatively few patient samples',
    problem: 'Whole transcriptomics has ~20,000 genes; epigenomics has ~850,000 CpG sites; yet a rare disease study may only have n = 80 patient samples.',
    consequence: 'The "Curse of Dimensionality" leads to catastrophic overfitting. A standard neural network can memorize random noise and achieve 100% training accuracy with 0% validation generalizability.',
    solution: 'Pathway-guided biological dimensionality reduction, sparse penalization (Lasso, ElasticNet), unsupervised pre-training on large public atlases (TCGA, GTEx, UK Biobank), and strict regularized latent projections.'
  },
  {
    id: 'data_leakage',
    name: 'Data Leakage',
    tagline: 'Information from test/evaluation sets inadvertently corrupting training',
    problem: 'Performing feature selection, normalization (e.g. computing mean and variance), or imputation on the entire dataset *before* splitting into train/validation/test folds.',
    consequence: 'Artificially inflated performance metrics (AUC 0.98 in paper, but complete failure when deployed in a clinical prospective trial).',
    solution: 'Strict nested cross-validation protocols, pipeline encapsulation where all scalers and feature selectors fit ONLY on training splits, patient-level stratification (ensuring multiple samples from one patient never split across train and test).'
  },
  {
    id: 'ethics_privacy',
    name: 'Privacy, Ethics & Governance',
    tagline: 'Safeguarding sensitive patient health information under legal frameworks',
    problem: 'Genomic sequences and high-dimensional clinical records are inherently identifying. Even "de-identified" omics data can be cross-referenced with public genealogy databases to identify individuals.',
    consequence: 'Violations of patient consent, breach of HIPAA/GDPR regulations, genetic discrimination in insurance/employment, and loss of public trust in scientific research.',
    solution: 'Federated learning (training models across hospitals without transmitting raw patient data), differential privacy guarantees, homomorphic encryption, and robust IRB/Data Access Committee oversight.'
  }
];

const GLOSSARY_TERMS = [
  { term: 'Transcriptomics', category: 'Modality', desc: 'Study of the complete set of RNA transcripts produced by the genome, reflecting active gene expression.' },
  { term: 'Proteomics', category: 'Modality', desc: 'Large-scale study of proteins, their structures, and physiological functions directly carrying out cellular tasks.' },
  { term: 'Metabolomics', category: 'Modality', desc: 'Comprehensive analysis of small molecules (metabolites) representing the functional end-state of cellular processes.' },
  { term: 'Clinical Informatics', category: 'Modality', desc: 'Application of data science to Electronic Health Records (EHRs), patient demographics, vitals, and diagnostic histories.' },
  { term: 'Batch Effect', category: 'Challenge', desc: 'Systematic technical variance introduced by sample collection timing, lab batches, or sequencing platforms unrelated to biological factors.' },
  { term: 'Curse of Dimensionality (p >> n)', category: 'Challenge', desc: 'When the number of measurable features (p, e.g. 20,000 genes) vastly exceeds sample size (n, e.g. 100 patients), creating high risk of overfitting.' },
  { term: 'Data Leakage', category: 'Challenge', desc: 'Spillover of information from outside the training dataset into model development, producing misleadingly optimistic validation scores.' },
  { term: 'Early Integration', category: 'AI Architecture', desc: 'Concatenating raw or preprocessed multi-omics features into one wide table before model training.' },
  { term: 'Intermediate Integration', category: 'AI Architecture', desc: 'Learning separate latent representations for each modality and fusing them in a joint hidden layer (e.g. Cross-Attention, Multi-modal VAE).' },
  { term: 'Late Integration', category: 'AI Architecture', desc: 'Training separate models on each omics modality and ensembling their final predictions via voting or meta-learning.' },
  { term: 'Mendelian Randomization', category: 'Causal Inference', desc: 'Using genetic variants as instrumental variables to test whether an observed association between a molecular biomarker and disease outcome is truly causal.' },
  { term: 'ComBat / ComBat-seq', category: 'Preprocessing', desc: 'Empirical Bayes frameworks used to adjust for known technical batch effects in microarray and RNA-seq counts.' },
  { term: 'SHAP (SHapley Additive exPlanations)', category: 'Explainable AI', desc: 'Game-theoretic approach to explain model predictions by calculating the exact marginal contribution of each omics and clinical feature.' },
  { term: 'Federated Learning', category: 'Privacy', desc: 'Decentralized machine learning technique enabling institutions to collaboratively train models without centralizing patient-identifiable raw data.' }
];
