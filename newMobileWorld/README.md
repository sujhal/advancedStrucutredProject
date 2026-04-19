# newMobileWorld

React Native CLI application scaffolded with a feature-first architecture (TypeScript strict), React Navigation v7, Redux Toolkit + RTK Query, Apollo Client, and integrated analytics/crash reporting hooks.

## Commands

- `npm start` — start Metro
- `npm run ios` / `npm run android` — run on a simulator/device
- `npm test` — Jest
- `npm run lint` — ESLint (flat config, `eslint.config.ts`)
- `npm run typecheck` — TypeScript `--noEmit`

## Native setup

After installing JavaScript dependencies, install iOS pods and configure native modules (Firebase, Sentry, Notifee, MMKV, Keychain, etc.) using the official installation guides for each package.

## Environment

Copy `.env` values for local development. `react-native-config` supplies variables to the app; ensure Xcode/Android build settings include the generated config as required by that library.
