export const projects = [
  {
    id: 1,
    slug: "amino-acid-explorer",
    title: "Amino-Acid Sequence Explorer",
    description:
      "Enter an amino-acid sequence and explore its composition, length, and basic biochemical features.",
    longDescription:
      "This project will provide a simple interface for entering an amino-acid sequence and calculating useful sequence properties.",
    icon: "Dna",
    status: "Planned",
    technologies: ["React", "JavaScript", "Bioinformatics"],
    features: [
      "Sequence validation",
      "Amino-acid composition",
      "Sequence length",
      "Estimated molecular properties",
    ],
    githubUrl: "",
    demoUrl: "",
  },
  {
    id: 2,
    slug: "reverse-complement",
    title: "DNA Reverse Complement",
    description:
      "Validate a DNA sequence and calculate its complement and reverse complement.",
    longDescription:
      "A small browser-based utility for transforming DNA sequences without sending the sequence to an external server.",
    icon: "Repeat2",
    status: "Planned",
    technologies: ["React", "JavaScript"],
    features: [
      "DNA sequence validation",
      "Complement calculation",
      "Reverse-complement calculation",
      "Copy result to clipboard",
    ],
    githubUrl: "",
    demoUrl: "",
  },
  {
    id: 3,
    slug: "rna-editing-context",
    title: "RNA-Editing Context Explorer",
    description:
      "Explore the sequence context surrounding candidate A-to-I RNA-editing sites.",
    longDescription:
      "This project will visualize local nucleotide contexts and sequence motifs around RNA-editing positions.",
    icon: "Microscope",
    status: "In progress",
    technologies: ["React", "Python", "RNA analysis"],
    features: [
      "Centered sequence windows",
      "Nucleotide-context summaries",
      "Motif visualization",
      "Edited-site comparison",
    ],
    githubUrl: "",
    demoUrl: "",
  },
  {
    id: 4,
    slug: "fasta-statistics",
    title: "FASTA Statistics",
    description:
      "Upload or paste FASTA data and calculate basic sequence statistics.",
    longDescription:
      "A small utility for inspecting nucleotide or protein FASTA records directly in the browser.",
    icon: "ChartNoAxesColumn",
    status: "Idea",
    technologies: ["React", "JavaScript", "FASTA"],
    features: [
      "FASTA parsing",
      "Record counting",
      "Length statistics",
      "GC-content calculation",
    ],
    githubUrl: "",
    demoUrl: "",
  },
];