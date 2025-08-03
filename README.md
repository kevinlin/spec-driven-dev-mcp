# Spec-driven Development MCP Server

[![smithery badge](https://smithery.ai/badge/@kevinlin/spec-driven-dev-mcp)](https://smithery.ai/server/@kevinlin/spec-driven-dev-mcp)

An MCP server that brings AI-guided spec-driven development workflow to any AI-powered IDEs beyonnd Kiro. Transform your development process with structured, step-by-step guidance from idea to implementation.

<a href="https://glama.ai/mcp/servers/@kevinlin/spec-driven-dev-mcp">
  <img width="380" height="200" src="https://glama.ai/mcp/servers/@kevinlin/spec-driven-dev-mcp/badge" alt="Spec-driven Development Server MCP server" />
</a>

## What is Spec-driven Development?

Spec-driven development is a methodology that emphasizes creating detailed specifications before writing code. This approach helps ensure clear requirements, better design decisions, and more maintainable code. Our MCP server guides you through this process with AI assistance.

## Features

- **Complete Development Workflow**: From goal collection to task execution
- **AI-Powered Guidance**: Step-by-step instructions for each development phase  
- **Structured Documentation**: Generates organized specs in EARS format
- **Template-Based**: Uses proven templates for requirements, design, and tasks

## Installation

### Installing via Smithery

To install spec-driven-dev-mcp for Claude Desktop automatically via [Smithery](https://smithery.ai/server/@kevinlin/spec-driven-dev-mcp):

```bash
npx -y @smithery/cli install @kevinlin/spec-driven-dev-mcp --client claude
```

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

### With Cursor

Add to your Cursor MCP settings:

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

## Workflow Stages & Example

The spec-driven development process follows five distinct stages. Here's how it works with a real example - building a user authentication feature:

### 1. Goal Collection - Define What You Want to Build

**Purpose**: Establish clear, specific objectives for your feature.

**Example Interaction**:
```
User: I want to build a user authentication feature
Assistant: Let me start the spec-driven development workflow for you.
[calls spec_driven_dev_workflow_start]

Let's define your feature goals:

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

### 2. Requirements Gathering - Create Detailed EARS-format Requirements

**Purpose**: Transform your goals into specific, testable requirements using the EARS (Easy Approach to Requirements Syntax) format.

**Example Interaction**:
```
Assistant: Great! Now let's gather detailed requirements.
[calls spec_driven_dev_requirements_start]

[Assistant generates detailed EARS-format requirements in .docs/specs/user-authentication/requirements.md]
- WHEN a user provides valid email/password THEN the system SHALL authenticate them
- GIVEN a user wants Google OAuth WHEN they click "Sign in with Google" THEN the system SHALL redirect to Google
- WHERE user roles are needed IF user is admin THEN they SHALL access admin features

User: The requirements look comprehensive. Approved!
[calls spec_driven_dev_requirements_confirmed]
```

### 3. Design Documentation - Technical Architecture and Design

**Purpose**: Create detailed technical specifications including architecture, component design, data models, and API specifications.

**Example Interaction**:
```
Assistant: Now let's create the technical design.
[calls spec_driven_dev_design_start]

[Assistant creates detailed design document including:]
- Database schema for users, sessions, oauth_tokens
- Authentication middleware architecture  
- JWT token structure and validation flow
- Google OAuth integration endpoints
- Role-based access control implementation

User: Design looks good, proceed!
[calls spec_driven_dev_design_confirmed]
```

### 4. Task Planning - Break Down into Executable Tasks

**Purpose**: Decompose the feature into specific, prioritized development tasks with clear dependencies.

**Example Interaction**:
```
Assistant: Let's break this down into executable tasks.
[calls spec_driven_dev_tasks_start]

[Assistant creates numbered task list:]
1. Set up database models (User, Session, OAuthToken)
2. Implement JWT token service
3. Create email/password authentication endpoints  
4. Integrate Google OAuth flow
5. Build role-based middleware
6. Add frontend login/register forms
7. Write integration tests

User: Task breakdown is perfect!
[calls spec_driven_dev_tasks_confirmed]
```

### 5. Task Execution - Implement the Code

**Purpose**: Execute the planned tasks systematically, implementing the feature according to specifications.

**Example Interaction**:
```
Assistant: Time to implement! Let's start coding.
[calls spec_driven_dev_execute_start]

[Assistant implements each task step by step:]
- Creates User model with email, password_hash, role fields
- Builds JWT service with sign/verify methods
- Implements /auth/login and /auth/register endpoints
- Integrates Google OAuth with Passport.js
- Creates role-checking middleware
- Builds React login/register components
- Writes comprehensive test suite
```

## Generated Project Structure

Throughout the workflow, the following documentation structure is created:

```
.docs/specs/{feature_name}/
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

## Contributing & License

### Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

### License
MIT

### Attribution
This project was inspired by and builds upon concepts from [vibedevtools](https://github.com/yinwm/vibedevtools) by [@yinwm](https://github.com/yinwm), a collection of development efficiency tools.