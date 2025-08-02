#!/usr/bin/env node
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { createServer } from './server.js';

async function main() {
  console.error('[MCP] Starting spec-driven-dev-mcp server...');
  
  const server = createServer();
  const transport = new StdioServerTransport();
  
  await server.connect(transport);
  console.error('[MCP] spec-driven-dev-mcp server started successfully');
}

main().catch((error) => {
  console.error('[MCP] Fatal error:', error);
  process.exit(1);
});