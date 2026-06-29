# RAC Forge Private Limited Team

Instructions and development guidelines are managed continuously. This repository is unlocked for ongoing development, edits, and maintenance.

## Strictest Workspace Guardrails & Rules

### 1. Blog Data File Guardrail (CRITICAL)
*   **AI Studio Agent and Workspace Restriction**: This rule applies strictly and exclusively to the AI Studio environment, the AI Coding Agent, and the local preview server. The AI Studio agent **MUST NEVER** touch, edit, write, restore, or modify `/src/data/blogData.ts`.
*   All blog indices and static posts inside `/src/data/blogData.ts` must remain exactly as they are in the AI Studio workspace.
*   **External Integration Exemption**: This guardrail **DOES NOT** block, restrict, or interfere with external services (such as your AWS Lambda function) pushing, editing, or updating `/src/data/blogData.ts` directly on the remote GitHub repository. The remote repository remains the source of truth for your external integrations.
*   The `/src/data/blogData.ts` database file is fully locked for the AI Studio agent.

