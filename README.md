# Graphyt

A comic e-book platform featuring voice-enhanced storytelling and narration.

## 🚧 Development Status

This project is currently in active development and not yet ready for production.

## Prerequisites

-  Node.js (v16 or higher)
-  npm or yarn
-  Expo CLI
-  iOS Simulator or Android Emulator

## Getting Started

1. Clone the repository:

```bash
git clone [repository-url]
cd graphyt
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Start the development server:

```bash
npx expo start
```

4. Run on your preferred platform:

-  Press `i` for iOS
-  Press `a` for Android
-  Scan QR code with Expo Go app on your device

## Project Structure

```
app/
├── (auth)/
│   ├── sign-in.tsx
│   └── sign-up.tsx
├── (onboarding)/
│   ├── _layout.tsx
│   ├── index.tsx
│   └── genre.tsx
└── components/
    ├── ui/
    │   ├── Button.tsx
    │   └── Input.tsx
    └── genre-card.tsx
```

## Tech Stack

-  React Native
-  Expo Router
-  Moti (Animations)
-  NativeWind (Styling)
-  Expo Vector Icons

## Features in Development

-  [x] User Authentication
-  [x] Onboarding Flow
-  [x] Genre Selection
-  [ ] Voice Narration
-  [ ] Comic Reader
-  [ ] Library Management
-  [ ] User Profiles

## Development Guidelines

-  Use TypeScript for all new files
-  Follow the existing component structure
-  Maintain consistent styling using NativeWind
-  Test on both iOS and Android platforms

## Known Issues

-  Layout issues on some Android devices
-  Button delay in onboarding screens
-  Navigation stack needs optimization

## Contributing

As this project is in development, please coordinate with the team before making significant changes.

## Environment Setup

Create a `.env` file in the root directory:

```env
# Add your environment variables here
API_URL=your_api_url
```

## Contact

For questions or access to the development environment, contact [Project Lead Name].
