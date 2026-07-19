# 🚀 Getting Started with ContextPilot

## What is ContextPilot?

**ContextPilot** automatically generates and manages AI context files (`CLAUDE.md`, `.cursorrules`, etc.) for your project. It scans your codebase, detects your tech stack, analyzes your architecture, and produces optimized context that makes your AI tools **significantly more effective**.

### Why Context Matters

AI coding tools like Claude Code, Cursor, and Cline perform **dramatically better** when they have good context. Without it, they:
- Hallucinate wrong APIs and packages
- Use incorrect coding patterns
- Make architectural mistakes
- Miss important project conventions

ContextPilot solves this by generating **comprehensive, project-specific context** automatically.

## Quick Start

### 1. Install

```bash
git clone https://github.com/namangoyal3/contextpilot.git
cd contextpilot
pnpm install && pnpm build
npm link packages/cli
```

### 2. Generate Context

```bash
cd your-project
ctx init
```

This will:
1. Scan your project structure and dependencies
2. Detect your tech stack (languages, frameworks, tools)
3. Generate `CLAUDE.md` and `.cursorrules` files
4. Score the context quality (0-100)

### 3. Analyze Quality

```bash
ctx analyze
```

See your context coverage score and get actionable suggestions for improvement.

### 4. Watch for Changes

```bash
ctx watch
```

Automatically updates your context files whenever your project changes.

## What You Get

After running `ctx init`, you'll have:

### CLAUDE.md (Claude Code)
Optimized context file with:
- Project overview and tech stack
- Development commands
- Architecture documentation
- Coding conventions
- Safety guardrails
- Reference links

### .cursorrules (Cursor)
Same comprehensive context in Cursor's expected format.

## Next Steps

- [Architecture Guide](./architecture.md)
- [CLI Reference](./api-reference.md)
- [Context Templates](../packages/core/src/templates.ts)
