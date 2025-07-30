# VibeSpecs MCP Server

An AI-powered development workflow MCP server that guides you from requirements to code implementation.

## Features

- **Complete Development Workflow**: From goal collection to task execution
- **AI-Powered Guidance**: Step-by-step instructions for each development phase
- **Template-Based**: Uses proven templates for requirements, design, and tasks
- **Claude Integration**: Seamlessly integrates with Claude Code

## Installation

### Using npx (Recommended)

```bash
# Always get the latest version
npx spec-driven-dev-mcp@latest

# Or simply (will also get latest)
npx spec-driven-dev-mcp
```

### Using npm

```bash
npm install -g spec-driven-dev-mcp
spec-driven-dev-mcp
```

## Usage

### With Claude Code

Add to your Claude Code MCP settings:

```json
{
  "mcpServers": {
    "spec-driven-dev-mcp": {
      "command": "npx",
      "args": ["spec-driven-dev-mcp@latest"],
      "env": {},
      "disabled": false
    }
  }
}
```

### Available Tools

1. **spec_driven_dev_workflow_start** - Start the development workflow
2. **spec_driven_dev_goal_confirmed** - Confirm feature goals
3. **spec_driven_dev_requirements_start** - Begin requirements gathering
4. **spec_driven_dev_requirements_confirmed** - Confirm requirements completion
5. **spec_driven_dev_design_start** - Start design documentation
6. **spec_driven_dev_design_confirmed** - Confirm design completion
7. **spec_driven_dev_tasks_start** - Begin task planning
8. **spec_driven_dev_tasks_confirmed** - Confirm task planning completion
9. **spec_driven_dev_execute_start** - Start task execution

## Workflow Stages

1. **Goal Collection** - Define what you want to build
2. **Requirements Gathering** - Create detailed EARS-format requirements
3. **Design Documentation** - Technical architecture and design
4. **Task Planning** - Break down into executable tasks
5. **Task Execution** - Implement the code

## Project Structure

Generated projects follow this structure:

```
.docs/specs/{feature_name}/
├── requirements.md
├── design.md
└── tasks.md
```

## Example Usage

Here's a complete example of using the VibeSpecs workflow:

### 1. Start the Workflow
```
User: I want to build a user authentication feature
Assistant: Let me start the VibeSpecs workflow for you.
[calls spec_driven_dev_workflow_start]
```

### 2. Goal Collection
```
Assistant: Welcome to VibeSpecs! Let's define your feature goals:

1. What specific authentication methods do you want to support?
2. Do you need social login (Google, GitHub, etc.)?
3. What user roles and permissions are required?

User: I need email/password login with JWT tokens, plus Google OAuth, and basic user/admin roles.

Assistant: Perfect! Let me confirm:
- Feature: User authentication system
- Methods: Email/password + Google OAuth
- Tokens: JWT-based
- Roles: User and Admin
- Feature name: "user-authentication"

Is this correct?
User: Yes, that's exactly what I need.

[calls spec_driven_dev_goal_confirmed with feature_name="user-authentication"]
```

### 3. Requirements Gathering
```
Assistant: Great! Now let's gather detailed requirements.
[calls spec_driven_dev_requirements_start]

[Assistant generates detailed EARS-format requirements in .docs/specs/user-authentication/requirements.md]

User: The requirements look comprehensive. Approved!

[calls spec_driven_dev_requirements_confirmed]
```

### 4. Design Documentation
```
Assistant: Now let's create the technical design.
[calls spec_driven_dev_design_start]

[Assistant creates detailed design document with architecture, components, data models, etc.]

User: Design looks good, proceed!

[calls spec_driven_dev_design_confirmed]
```

### 5. Task Planning
```
Assistant: Let's break this down into executable tasks.
[calls spec_driven_dev_tasks_start]

[Assistant creates numbered task list with priorities and dependencies]

User: Task breakdown is perfect!

[calls spec_driven_dev_tasks_confirmed]
```

### 6. Task Execution
```
Assistant: Time to implement! Let's start coding.
[calls spec_driven_dev_execute_start]

[Assistant begins implementing tasks one by one, following the plan]
```

### Generated Project Structure
```
.docs/specs/user-authentication/
├── requirements.md    # EARS-format requirements
├── design.md         # Technical architecture
└── tasks.md          # Implementation checklist
```

## Development

### Prerequisites

Make sure you have Node.js 18+ installed.

### Setup

```bash
# Install dependencies with pnpm (recommended)
pnpm install

# Or with npm
npm install
```

### Running the Project

```bash
# Development mode with pnpm
pnpm dev

# Or with npm
npm run dev

# Build with pnpm
pnpm build

# Or with npm
npm run build

# Start built version with pnpm
pnpm start

# Or with npm
npm start

# Test with pnpm (when available)
pnpm test

# Or with npm
npm test
```

## License

MIT

## Attribution

This project was inspired by and builds upon concepts from [vibedevtools](https://github.com/yinwm/vibedevtools) by [@yinwm](https://github.com/yinwm), a collection of development efficiency tools.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.