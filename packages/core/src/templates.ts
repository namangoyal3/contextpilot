import type { ContextTemplate } from './types.js';

// ─── Built-in Templates ──────────────────────────────────────────────────────

const BUILTIN_TEMPLATES: ContextTemplate[] = [
  {
    id: 'react-spa',
    name: 'React SPA',
    description: 'Single-page React application with TypeScript',
    targets: ['React', 'Vite', 'TypeScript'],
    content: `# {{projectName}}

> {{projectDescription}}

## Tech Stack
- **React {{reactVersion}}** — UI library
- **TypeScript {{tsVersion}}** — Type safety
- **{{buildTool}}** — Build tooling
- **{{testFramework}}** — Testing

## Commands
- \`npm run dev\` — Start development server
- \`npm run build\` — Build for production
- \`npm test\` — Run tests
- \`npm run lint\` — Lint code
- \`npm run typecheck\` — TypeScript check

## Architecture
- \`src/components/\` — Reusable UI components
- \`src/hooks/\` — Custom React hooks
- \`src/utils/\` — Utility functions
- \`src/types/\` — TypeScript type definitions
- \`src/pages/\` — Page components
- \`src/styles/\` — Global styles

## Conventions
- Functional components with hooks (no classes)
- Named exports only (no default exports)
- Props typed with \`interface\`, not \`type\`
- Co-locate tests with components: \`Component.test.tsx\`
- Use absolute imports with \`@/\` prefix

## Guardrails
- No \`any\` type without explanatory comment
- No new dependencies without approval
- No inline styles — use CSS modules or Tailwind
- No console.log in production code
`,
    requiredVariables: ['projectName', 'projectDescription'],
    optionalVariables: {
      reactVersion: '19',
      tsVersion: '5.5',
      buildTool: 'Vite',
      testFramework: 'Vitest',
    },
    priority: 90,
  },
  {
    id: 'nextjs-app',
    name: 'Next.js App Router',
    description: 'Full-stack Next.js application with App Router',
    targets: ['Next.js', 'React', 'TypeScript'],
    content: `# {{projectName}}

> {{projectDescription}}

## Tech Stack
- **Next.js {{nextVersion}}** — React framework with App Router
- **TypeScript {{tsVersion}}** — Type safety
- **{{styling}}** — Styling solution
- **{{database}}** — Database/ORM

## Commands
- \`npm run dev\` — Start development server
- \`npm run build\` — Build for production
- \`npm start\` — Start production server
- \`npm test\` — Run tests
- \`npm run lint\` — Lint code

## Architecture
- \`app/\` — App Router pages and layouts
- \`app/api/\` — API routes
- \`components/\` — Shared UI components
- \`lib/\` — Utility functions and configurations
- \`public/\` — Static assets
- \`styles/\` — Global styles

## Data Flow
- Server Components by default — client components only when needed
- Data fetching in Server Components, mutations via Server Actions
- Route handlers for external API consumption

## Conventions
- Use App Router (not Pages Router)
- Server Components as default, add 'use client' only when needed
- Co-locate data fetching with the component using it
- Use Next.js image optimization for all images

## Guardrails
- No client-side data fetching if server-side is possible
- Do not bypass Next.js built-in optimizations
- No \`useEffect\` for data fetching — use Server Components or React Query
`,
    requiredVariables: ['projectName', 'projectDescription'],
    optionalVariables: {
      nextVersion: '15',
      tsVersion: '5.5',
      styling: 'Tailwind CSS',
      database: 'PostgreSQL + Prisma',
    },
    priority: 85,
  },
  {
    id: 'node-api',
    name: 'Node.js API Server',
    description: 'REST API backend with Express/Fastify and TypeScript',
    targets: ['Express', 'Fastify', 'NestJS', 'TypeScript', 'Node.js'],
    content: `# {{projectName}}

> {{projectDescription}}

## Tech Stack
- **Node.js {{nodeVersion}}** — Runtime
- **{{framework}}** — HTTP framework
- **TypeScript {{tsVersion}}** — Type safety
- **{{database}}** — Database

## Commands
- \`npm run dev\` — Start dev server with hot reload
- \`npm run build\` — Compile TypeScript
- \`npm start\` — Start production server
- \`npm test\` — Run tests
- \`npm run lint\` — Lint code

## Architecture
- \`src/routes/\` — API route definitions
- \`src/controllers/\` — Request handlers
- \`src/services/\` — Business logic
- \`src/models/\` — Data models and schemas
- \`src/middleware/\` — Express/Fastify middleware
- \`src/validators/\` — Input validation (Zod/Joi)
- \`src/utils/\` — Utility functions

## API Design
- RESTful endpoints with versioning: \`/api/v1/\`
- All inputs validated with Zod schemas
- Standard error response format
- Pagination: \`?page=1&limit=20\`
- Authentication via JWT in Authorization header

## Conventions
- Controllers handle request/response, services handle business logic
- Use Zod for runtime type validation
- Structured logging with pino/winston
- Environment variables via dotenv
- Dependency injection where applicable

## Guardrails
- No sensitive data in responses
- Do not disable input validation
- Rate limiting on all public endpoints
- SQL injection protection on all queries
`,
    requiredVariables: ['projectName', 'projectDescription'],
    optionalVariables: {
      nodeVersion: '22',
      framework: 'Express',
      tsVersion: '5.5',
      database: 'PostgreSQL',
    },
    priority: 80,
  },
  {
    id: 'python-api',
    name: 'Python API Server',
    description: 'Python backend with FastAPI/Flask',
    targets: ['Python', 'FastAPI', 'Flask', 'Django'],
    content: `# {{projectName}}

> {{projectDescription}}

## Tech Stack
- **Python {{pythonVersion}}** — Runtime
- **{{framework}}** — Web framework
- **{{database}}** — Database
- **{{orm}}** — ORM/ODM

## Commands
- \`uvicorn main:app --reload\` — Start dev server (FastAPI)
- \`flask run\` — Start dev server (Flask)
- \`pytest\` — Run tests
- \`ruff check .\` — Lint code

## Architecture
- \`app/\` — Application code
- \`app/api/\` — API endpoints
- \`app/models/\` — SQLAlchemy/Pydantic models
- \`app/services/\` — Business logic
- \`app/schemas/\` — Pydantic schemas
- \`tests/\` — Test files

## Conventions
- Type hints everywhere (Python 3.12+)
- Pydantic models for request/response validation
- Async endpoints for I/O operations
- Alembic for database migrations

## Guardrails
- No SQL injection (use ORM exclusively)
- Validate all inputs with Pydantic
- No hardcoded credentials — use environment variables
`,
    requiredVariables: ['projectName', 'projectDescription'],
    optionalVariables: {
      pythonVersion: '3.12',
      framework: 'FastAPI',
      database: 'PostgreSQL',
      orm: 'SQLAlchemy',
    },
    priority: 75,
  },
  {
    id: 'typescript-lib',
    name: 'TypeScript Library',
    description: 'TypeScript library/package with modern tooling',
    targets: ['TypeScript'],
    content: `# {{projectName}}

> {{projectDescription}}

## Tech Stack
- **TypeScript {{tsVersion}}** — Language
- **{{bundler}}** — Build tool
- **{{testFramework}}** — Testing

## Commands
- \`npm run build\` — Build the library
- \`npm test\` — Run tests
- \`npm run lint\` — Lint code
- \`npm run typecheck\` — TypeScript check

## Architecture
- \`src/\` — Source code
- \`src/index.ts\` — Public API entry point
- \`tests/\` — Test files

## Conventions
- Named exports for public API
- JSDoc comments for all public functions
- 100% test coverage for public API
- Semantic versioning (semver)

## Guardrails
- Maintain backward compatibility
- Do not export internal utilities
- No side effects in module initialization
`,
    requiredVariables: ['projectName', 'projectDescription'],
    optionalVariables: {
      tsVersion: '5.5',
      bundler: 'tsup',
      testFramework: 'Vitest',
    },
    priority: 70,
  },
];

// ─── Template Engine ─────────────────────────────────────────────────────────

export class TemplateEngine {
  private templates: Map<string, ContextTemplate> = new Map();

  constructor() {
    for (const tpl of BUILTIN_TEMPLATES) {
      this.templates.set(tpl.id, tpl);
    }
  }

  /**
   * Get a template by ID
   */
  get(id: string): ContextTemplate | undefined {
    return this.templates.get(id);
  }

  /**
   * Get all available templates
   */
  getAll(): ContextTemplate[] {
    return Array.from(this.templates.values());
  }

  /**
   * Find templates that match the given frameworks (sorted by priority)
   */
  findMatching(frameworks: string[]): ContextTemplate[] {
    const results: ContextTemplate[] = [];
    for (const tpl of this.templates.values()) {
      if (tpl.targets.some(t => frameworks.some(f => f.includes(t) || t.includes(f)))) {
        results.push(tpl);
      }
    }
    return results.sort((a, b) => b.priority - a.priority);
  }

  /**
   * Find the best matching template for the given frameworks
   */
  findBestMatch(frameworks: string[]): ContextTemplate | undefined {
    return this.findMatching(frameworks)[0];
  }

  /**
   * Apply variables to a template
   */
  applyTemplate(template: ContextTemplate, variables: Record<string, string>): string {
    let content = template.content;
    for (const [key, value] of Object.entries(variables)) {
      content = content.replace(new RegExp(`\\{\\{${key}\\}\\}`, 'g'), value);
    }
    // Fill in template defaults for any remaining template variables
    const allVars = { ...template.optionalVariables, ...variables };
    for (const [key, value] of Object.entries(allVars)) {
      content = content.replace(new RegExp(`\\{\\{${key}\\}\\}`, 'g'), value);
    }
    return content;
  }

  /**
   * Register a custom template
   */
  register(template: ContextTemplate): void {
    this.templates.set(template.id, template);
  }
}
