// ─── Project Detection Types ─────────────────────────────────────────────────

export interface DetectedProject {
  /** Project root directory */
  rootDir: string;
  /** Project name from manifest */
  name: string;
  /** Detected languages */
  languages: Language[];
  /** Detected frameworks */
  frameworks: Framework[];
  /** Package manager */
  packageManager?: 'npm' | 'pnpm' | 'yarn' | 'bun';
  /** Build tool */
  buildTool?: string;
  /** Test framework */
  testFramework?: string;
  /** Linter */
  linter?: string;
  /** Formatter */
  formatter?: string;
  /** Directory structure summary */
  structure: ProjectStructure;
  /** Key dependencies grouped by purpose */
  dependencies: {
    production: string[];
    development: string[];
  };
}

export interface Language {
  name: string;
  version?: string;
  files: string[];
  confidence: number; // 0-1
}

export interface Framework {
  name: string;
  type: 'frontend' | 'backend' | 'fullstack' | 'library' | 'cli' | 'mobile' | 'other';
  version?: string;
  confidence: number;
}

export interface ProjectStructure {
  hasSrcDir: boolean;
  hasTestsDir: boolean;
  hasDocsDir: boolean;
  hasCiConfig: boolean;
  hasDockerConfig: boolean;
  topLevelDirs: string[];
  sourceDirs: string[];
}

// ─── Context Generation Types ─────────────────────────────────────────────────

export interface ContextSection {
  id: string;
  title: string;
  content: string;
  priority: number; // 1-10, higher = more important
}

export interface GeneratedContext {
  project: DetectedProject;
  sections: ContextSection[];
  /** Full CLAUDE.md content */
  claudeMd: string;
  /** Full .cursorrules content */
  cursorRules: string;
  /** Score 0-100 indicating how well the context covers the project */
  coverageScore: number;
  /** Suggestions for improving context coverage */
  suggestions: ContextSuggestion[];
  /** When this context was generated */
  generatedAt: string;
  /** Context file format version */
  version: string;
}

export interface ContextSuggestion {
  severity: 'high' | 'medium' | 'low';
  category: 'missing' | 'incomplete' | 'optimize';
  message: string;
  details?: string;
}

// ─── Template Types ──────────────────────────────────────────────────────────

export interface ContextTemplate {
  /** Template identifier */
  id: string;
  /** Display name */
  name: string;
  /** Short description */
  description: string;
  /** Which frameworks this template targets */
  targets: string[];
  /** Template content with {{variables}} */
  content: string;
  /** Required variables that must be filled */
  requiredVariables: string[];
  /** Optional variables with defaults */
  optionalVariables: Record<string, string>;
  /** Priority score for auto-matching */
  priority: number;
}

// ─── Analysis Types ──────────────────────────────────────────────────────────

export interface ContextAnalysis {
  /** Path to the context file */
  filePath: string;
  /** Which tool this file is for */
  toolType: 'claude-code' | 'cursor' | 'cline' | 'aider' | 'custom';
  /** File size in bytes */
  fileSize: number;
  /** Line count */
  lineCount: number;
  /** Completeness score 0-100 */
  completenessScore: number;
  /** Coverage areas detected */
  coverage: {
    projectDescription: boolean;
    techStack: boolean;
    commands: boolean;
    architecture: boolean;
    conventions: boolean;
    guardrails: boolean;
    references: boolean;
  };
  /** Missing important sections */
  missingSections: string[];
  /** Readability score */
  readabilityScore: number;
  /** Improvement suggestions */
  suggestions: ContextSuggestion[];
}

export type OutputFormat = 'claude-md' | 'cursor-rules' | 'cursor-mdc' | 'aider' | 'custom';

export interface OutputOptions {
  format: OutputFormat;
  outputPath?: string;
  includeScores?: boolean;
  minify?: boolean;
}
