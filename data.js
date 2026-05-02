/* ════════════════════════════════════════════════════════════════════
   Portfolio data — shared between index.html and admin.html
   Persists in localStorage. Edit via /admin.html.
   ════════════════════════════════════════════════════════════════════ */

window.PORTFOLIO_DEFAULTS = {
  star: {
    id: 'security', name: 'Security',
    subtitle: 'Primary Identity · ML as Lens',
  },
  planets:[
    {
    id: 'decker', name: 'DECKER', year: 2026, venue: 'AsiaCCS 2026', domain: 'Side-Channel',
    tagline: 'Domain-invariant embeddings for cross-keyboard acoustic side-channels.',
    problem: 'Acoustic keystroke attacks degrade catastrophically on unseen keyboard hardware.',
    approach: 'Domain-invariant embedding space via adversarial alignment and contrastive loss.',
    result: 'Robust cross-device transfer without target-domain samples. Accepted AsiaCCS 2026.',
    openQuestion: 'Can zero-shot transfer extend to non-keyboard surfaces — tables, walls, windows?',
    methods: ['representation', 'adversarial'],
    tags: ['audio ML', 'domain shift', 'side-channel', 'contrastive'],
    visual: { base: 0x3d2848, accent: 0xd4a8c0, glow: 0xe6c2d6, pattern: 'wavy', atmosphere: 0.60, rings: false, planetRadius: 0.50, orbitTilt: -0.09 },
  },
  {
    id: 'codec-survival', name: 'EvFlow-CTSSM', year: 2026, venue: 'submitted to Interspeech 2026', domain: 'Acoustic Side-Channel Attacks',
    tagline: 'Continuous sparse transduction for acoustic side-channel attacks over VoIP.',
    problem: 'VoIP codecs and echo cancellation induce non-linear distortion, severely degrading classifiers for sparse micro-acoustic events like keystrokes.',
    approach: 'Latent Rectified Flow (LF-CAN) via optimal transport combined with an Event-Triggered Continuous-Time State Space Model (CT-SSM).',
    result: 'Substantially reduces CER against baselines and preserves 2.67 bits of mutual information per keystroke without relying on language models.',
    openQuestion: 'How can the canonical mapping adapt if proprietary VoIP codecs undergo significant structural changes without collecting new synchronized audio?',
    methods: ['audio', 'representation', 'security'],
    tags: ['Acoustic Side-Channel', 'VoIP', 'Optimal Transport', 'CT-SSM'],
    visual: { base: 0x1f3b4d, accent: 0x4fc3f7, glow: 0x81d4fa, pattern: 'banded', atmosphere: 0.62, rings: false, planetRadius: 0.58, orbitTilt: 0.12 }
  },
  {
    id: 'keyac-kan', name: 'KEYAC & KAN', year: 2026, venue: 'submitted to Interspeech 2026', domain: 'Acoustic Side-Channel Attacks',
    tagline: 'Impact analysis of speech representation learning models and KAN-based fine-tuning for acoustic side-channel attacks.',
    problem: 'Speech representation models struggle to generalize for ASCA under VoIP codec distortions because conventional adaptation layers fail to model complex nonlinear feature interactions.',
    approach: 'Introduces the multi-channel KEYAC dataset to evaluate six speech PTMs and proposes a Kolmogorov-Arnold Network (KAN) downstream adaptation strategy to capture nonlinear interactions.',
    result: 'WavLM provided the most robust representations, and KAN-based fine-tuning consistently outperformed FCN and CNN baselines across all keyboard and codec generalization tasks.',
    openQuestion: 'Can expressive nonlinear adaptation layers like KAN fully bridge the performance gap caused by extreme temporal and spectral distortions in highly compressed, unseen VoIP pipelines?',
    methods: ['audio', 'representation', 'security'],
    tags: ['Acoustic Side-Channel', 'VoIP', 'Pretrained Models', 'KEYAC', 'KAN'],
    visual: { base: 0x2d1b38, accent: 0xba68c8, glow: 0xf3e5f5, pattern: 'wavy', atmosphere: 0.65, rings: false, planetRadius: 0.55, orbitTilt: 0.18 }
  },

  {
    id: 'stoic-firewall', name: 'PsyAgent', year: 2026, venue: 'submitted to ACM CCS', domain: 'LLM Agent Security',
    tagline: 'Evaluating schema-bound defenses against psychology-informed jailbreaks in tool-augmented LLM agents.',
    problem: 'Tool-augmented LLM agents are vulnerable to psychology-informed jailbreaks—like authority or urgency framing—that mimic legitimate enterprise traffic to bypass traditional syntactic filters.',
    approach: 'Evaluated cognitive pressure using PsyAgent-Bench and counterfactual twins, and introduced StoicFirewall, a zero-temperature, schema-bounded JSON extraction defense layer.',
    result: 'Identified a Trust-Decay effect where more auditors increase attack success. StoicFirewall reduced mean attack success but left a 38.4% residual vulnerability to semantic steganography.',
    openQuestion: 'How can grammar-constrained decoding fully mitigate semantic steganography without incurring a structuring tax that worsens safety on certain backbones?',
    methods: ['security', 'nlp'],
    tags: ['LLM Agents', 'Jailbreak', 'Cognitive Security', 'Multi-Agent Systems'],
    visual: { base: 0x4d1f1f, accent: 0xff5252, glow: 0xff8a80, pattern: 'gridded', atmosphere: 0.70, rings: true, planetRadius: 0.60, orbitTilt: 0.25 }
  },
  {
    id: 'foca', name: 'FOCA', year: 2026, venue: 'ICASSP 2026', domain: 'Malware Analysis',
    tagline: 'Hyperbolic cross-attention for multimodal malware classification.',
    problem: 'How to robustly classify malware across heterogeneous execution environments?',
    approach: 'Hyperbolic cross-attention fuses behavioral, static and dynamic traces in curved space.',
    result: 'State-of-the-art on cross-environment benchmarks. Accepted at ICASSP 2026.',
    openQuestion: 'Does hyperbolic curvature need per-domain tuning at inference?',
    methods: ['multimodal', 'hyperbolic'],
    tags: ['multimodal', 'hyperbolic geometry', 'malware', 'cross-attention'],
    visual: { base: 0x1f3a5a, accent: 0x6db5d4, glow: 0x8ed0e8, pattern: 'crystalline', atmosphere: 0.55, rings: true,  planetRadius: 0.62, orbitTilt: 0.06 },
  },
  {
    id: 'gocoma', name: 'GoCoMA', year: 2026, venue: 'ICME 2026', domain: 'Code Attribution',
    tagline: 'Hyperbolic multimodal fusion for LLM code attribution.',
    problem: 'LLM code attribution is confounded by style mixing and adversarial obfuscation.',
    approach: 'Hyperbolic fusion of AST, token sequences and semantic embeddings.',
    result: 'Outperforms flat-space baselines across 12 LLM families. Accepted ICME 2026.',
    openQuestion: 'Does attribution survive adversarial prompt-level obfuscation at inference?',
    methods: ['multimodal', 'llm', 'hyperbolic'],
    tags: ['LLMs', 'code intel', 'attribution', 'hyperbolic'],
    visual: { base: 0x1f3a2a, accent: 0x4ec57c, glow: 0x8eddae, pattern: 'gridded', atmosphere: 0.50, rings: true, planetRadius: 0.70, orbitTilt: 0.13 },
  },
  {
    id: 'coral', name: 'CORAL', year: 2025, venue: 'AACL-IJCNLP 2025', domain: 'Deception Detection',
    tagline: 'Socially-aware deception detection via positive-unlabeled learning.',
    problem: 'Ground-truth deception labels are sparse; most conversational data is unlabeled.',
    approach: 'PU learning over conversational social-graph structure; role dynamics as features.',
    result: 'Significant gains over fully-supervised baselines. Accepted AACL-IJCNLP 2025.',
    openQuestion: 'How does the model behave when social structure is adversarially manipulated?',
    methods: ['representation', 'nlp'],
    tags: ['NLP', 'PU learning', 'social signal', 'deception'],
    visual: { base: 0x4a2618, accent: 0xff8a5b, glow: 0xffb088, pattern: 'banded', atmosphere: 0.58, rings: false, planetRadius: 0.54, orbitTilt: -0.16 },
  },
    {
    id: 'coral', name: 'CORAL', year: 2025, venue: 'AACL-IJCNLP 2025', domain: 'Deception Detection',
    tagline: 'Socially-aware deception detection via positive-unlabeled learning.',
    problem: 'Ground-truth deception labels are sparse; most conversational data is unlabeled.',
    approach: 'PU learning over conversational social-graph structure; role dynamics as features.',
    result: 'Significant gains over fully-supervised baselines. Accepted AACL-IJCNLP 2025.',
    openQuestion: 'How does the model behave when social structure is adversarially manipulated?',
    methods: ['representation', 'nlp'],
    tags: ['NLP', 'PU learning', 'social signal', 'deception'],
    visual: { base: 0x4a2618, accent: 0xff8a5b, glow: 0xffb088, pattern: 'banded', atmosphere: 0.58, rings: false, planetRadius: 0.54, orbitTilt: -0.16 },
  },],
  blog: [
    { date: '2026-04-12', minutes: 6, title: 'Curvature is Not a Trick',
      excerpt: 'Why hyperbolic embeddings keep beating flat-space baselines on hierarchical data — and why I no longer apologize for using them.',
      tags: ['hyperbolic', 'representation'], href: '#' },
    { date: '2026-03-04', minutes: 8, title: 'Acoustic Side-Channels Across Hardware',
      excerpt: 'Field notes on training a model that survives unseen keyboards. Domain shift is a quiet adversary; contrastive losses keep it honest.',
      tags: ['side-channel', 'audio', 'domain-shift'], href: '#' },
    { date: '2026-01-28', minutes: 5, title: 'Code Attribution After Style-Mixing',
      excerpt: 'When LLMs imitate each other, attribution becomes a problem of geometry, not statistics. Some surprisingly stable signals remain.',
      tags: ['LLM', 'attribution', 'security'], href: '#' },
    { date: '2025-11-09', minutes: 7, title: 'PU Learning, Read as a Social Lens',
      excerpt: 'Most ground truth in conversational deception is missing on purpose. PU learning treats absence as data, and the social graph as feature.',
      tags: ['PU', 'NLP', 'deception'], href: '#' },
    { date: '2025-09-22', minutes: 4, title: 'Threat Modeling Before Loss Curves',
      excerpt: 'A short argument for designing the adversary before designing the model. ML-without-threat-model is engineering theatre.',
      tags: ['security', 'methodology'], href: '#' },
    { date: '2025-07-15', minutes: 3, title: 'Why Security as a Lens',
      excerpt: 'Notes on choosing security as the framing identity rather than ML — and how that choice changes which papers feel obligatory.',
      tags: ['career', 'security'], href: '#' },
  ],
  contact: [
    { key: 'email',    val: 'bikrant.acc.edu@icloud.com', href: 'mailto:bikrant.acc.edu@icloud.com' },
    { key: 'linkedin', val: 'vikrant-vikram-a07418185',    href: 'https://linkedin.com/in/vikrant-vikram-a07418185' },
    { key: 'github',   val: 'github/vikrant-vikram',       href: 'https://github.com/vikrant-vikram' },
    { key: 'resume',   val: 'download',                    href: 'resume.pdf', download: true },
    { key: 'signal',   val: 'on request',                  href: null },
  ],
};

const STORAGE_KEY = 'portfolio-galaxy-v1';

window.PORTFOLIO_LOAD = function() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const saved = JSON.parse(raw);
      if (saved && Array.isArray(saved.planets) && Array.isArray(saved.blog)) return saved;
    }
  } catch (e) { console.warn('Failed to load saved data:', e); }
  return JSON.parse(JSON.stringify(window.PORTFOLIO_DEFAULTS));
};

window.PORTFOLIO_SAVE = function(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

window.PORTFOLIO_RESET = function() {
  localStorage.removeItem(STORAGE_KEY);
};

window.PORTFOLIO_THEME_GET = function() {
  return localStorage.getItem('portfolio-theme') || 'auto';
};
window.PORTFOLIO_THEME_SET = function(name) {
  if (!['auto', 'day', 'night'].includes(name)) name = 'auto';
  localStorage.setItem('portfolio-theme', name);
};

/* color helpers — admin uses '#hex' strings; renderer uses 0xHEX numbers */
window.PORTFOLIO_HEX_TO_NUM = function(c) {
  if (typeof c === 'number') return c;
  if (typeof c === 'string') {
    const s = c.startsWith('#') ? c.slice(1) : c;
    return parseInt(s, 16) || 0x808080;
  }
  return 0x808080;
};
window.PORTFOLIO_NUM_TO_HEX = function(n) {
  if (typeof n === 'string') return n;
  return '#' + n.toString(16).padStart(6, '0');
};
