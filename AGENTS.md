# Agent Development Guidelines

## Build & Test Commands
- **Build**: `npm run build` - Compiles TypeScript to dist/
- **Dev**: `npm run dev` - Runs with tsx for development
- **Start**: `npm run start` - Runs compiled version from dist/
- **Test**: `npx vitest` - Runs tests (vitest configured but no test scripts in package.json)

## Code Style & Conventions
- **Language**: TypeScript with ES2022 target, ESNext modules
- **Imports**: Use `.js` extensions for local imports (ES modules)
- **Naming**: camelCase for functions/variables, snake_case for tool names
- **Functions**: Export async functions, use descriptive names
- **Types**: Use strict TypeScript, explicit types in function signatures
- **Error Handling**: Use try/catch with descriptive error messages
- **Logging**: Use `console.error()` with `[MCP]` prefix for debugging
- **File Structure**: src/ for source, tools/ for MCP tools, utils/ for helpers
- **Templates**: Store in templates/ directory, use template variables with `{variable}`
- **Imports Style**: Group external imports first, then local imports with relative paths

## Architecture
- **MCP Server**: Uses @modelcontextprotocol/sdk for tool definitions and handlers
- **Tool Pattern**: Each tool in separate file with async function export
- **Session Management**: Use nanoid for session IDs (12 char alphanumeric)
- **Template System**: Read from templates/ with variable substitution