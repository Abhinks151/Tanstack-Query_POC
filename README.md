# TanStack Query Learning Project

A simple React project to learn TanStack Query, covering data fetching, caching, mutations, loading states, and query invalidation.

## Tech Stack

- React
- TanStack Query
- TypeScript
- Node.js

## Getting Started

### Prerequisites

- Node.js
- pnpm or npm

### 1. Clone the Repository

```bash
git clone <repository-url>
cd <repository-folder>
```

### 2. Install Frontend Dependencies

From the project root:

```bash
pnpm install
# or
npm install
```

### 3. Start the Frontend

From the project root:

```bash
pnpm dev
# or
npm run dev
```

### 4. Install Backend Dependencies

Open a new terminal and navigate to the server directory:

```bash
cd ./server
pnpm install
# or
npm install
```

### 5. Start the Backend

From the `server` directory:

```bash
node server.js
```

## Learning Goals

- Fetching data with `useQuery`
- Creating data with `useMutation`
- Managing loading and error states
- Understanding `staleTime` and `gcTime`
- Invalidating queries after successful mutations
- Working with cached server state

## License

This project is intended for learning and experimentation.
