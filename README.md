# Neurodog

Treehacks 2024 Hackathon Submission

## Prequisites
Install the following tools to get started.

### Installing Runtimes

- [mise-en-place](https://github.com/jdx/mise): CLI tool that can manage multiple runtime versions on a per-project basis.

```bash
mise install
```

### Installing Dependencies

- [bun](https://bun.sh/): A modern package manager.

```bash
bun install
```

## Environment Variables

Create a `.env` file in the root of each app and add the following environment variables (copied from `.env.example`).

```bash
# When using the PlanetScale driver with Drizzle, your connection string must end with ?ssl={"rejectUnauthorized":true} instead of ?sslaccept=strict.
DATABASE_URL=
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=
OPENAI_API_KEY=
NEXT_PUBLIC_POSTHOG_KEY=phc_Wtvh51O7cSudfjCDoxnGhmF2OPoSs44rKeoiOBBTcH9
NEXT_PUBLIC_POSTHOG_HOST=https://app.posthog.com
```

## Tech Stack

### Hardware
- Boston Dynamics Spot
- Petoi Bittle
- Neurosity Crown EEG
- Docker
- Python

### Frontend
- NextJS
- TailwindCSS
- Turbo
- Posthog
- Bun
- Typescript
- React

### npm Tooling
- Kirimase
- @tanstack/react-query
- shadcn/ui
- radix-ui
- zod
- zustand

### Backend
- PlanetScale
- Drizzle
- Github OAuth

### APIs
- OpenAI
- Elevenlabs

### Hosting
- Vercel
- Merklebot
