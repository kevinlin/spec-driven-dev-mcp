#!/usr/bin/env node
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { createServer } from './server.js';

// Smithery-compatible export
export default function({ sessionId, config }: { sessionId?: string; config?: any }) {
  console.error('[MCP] Starting spec-driven-dev-mcp server with sessionId:', sessionId);
  return createServer();
}

async function main() {
  console.error('[MCP] Starting spec-driven-dev-mcp server...');
  
  const server = createServer();
  const transport = new StdioServerTransport();
  
  await server.connect(transport);
  console.error('[MCP] spec-driven-dev-mcp server started successfully');
}

// Only run main() when not being imported by Smithery
// Check if this module is the main module being executed
// if (process.argv[1] && process.argv[1].endsWith('index.js')) {
if (typeof require !== 'undefined' && require.main === module) {
  main().catch((error) => {
    console.error('[MCP] Fatal error:', error);
    process.exit(1);
  });
}