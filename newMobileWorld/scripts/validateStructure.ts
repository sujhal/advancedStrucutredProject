import { existsSync } from 'node:fs';
import { resolve } from 'node:path';

const requiredPaths = [
  'src/app/App.tsx',
  'src/app/splash.tsx',
  'src/store/index.ts',
  'src/features/auth/api.ts',
  'src/services/api/client.ts',
  'eslint.config.ts',
  'jest.config.ts',
];

const root = resolve(process.cwd());

const missing = requiredPaths.filter((p) => !existsSync(resolve(root, p)));

if (missing.length > 0) {
  // eslint-disable-next-line no-console -- CLI script
  console.error('Missing required paths:', missing);
  process.exit(1);
}

// eslint-disable-next-line no-console -- CLI script
console.log('validateStructure: OK');
