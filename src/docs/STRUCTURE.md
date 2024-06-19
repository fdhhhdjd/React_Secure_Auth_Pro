# ⚛️ Folder Structures in React Projects

This document outlines the consistent meanings behind the folder names used in this project. The purpose is to maintain a clear and organized codebase, making it easier for developers to navigate and understand the project's structure.

## UI Components

- **components/**: React components - the main UI building blocks.
- **design-system/**: Fundamental UI elements and patterns based on the design system.
- **icons/**: SVG icons that are meant to be used inline.

## React Specific

- **hooks/**: Custom React hooks for shared logic.
- **hocs/**: React Higher-order Components.
- **contexts/providers/**: Contains React Contexts and Providers.

## Utilities & External Integrations

- **utils/**: Utilities for universal logic that is not related to business logic or any technologies, e.g., string manipulations, mathematic calculations, etc.
- **lib/**: Utilities that are related to certain technologies, e.g., DOM manipulations, HTML-related logic, localStorage, IndexedDB, etc.
- **plugins/**: Third-party plugins (e.g., i18n, Sentry, etc.)

## Business Logic

- **services/**: Encapsulates main business & application logic.
- **helpers/**: Provides business-specific utilities.

## Styles

- **styles/**: Contains (global) CSS or CSS-in-JS styles.

## TypeScript and Configurations

- **types/**: For general TypeScript types, enums, and interfaces.
- **configs/**: Configs for the application (e.g., environment variables)
- **constants/**: Constant, unchanged values (e.g., `export const MINUTES_PER_HOUR = 60`).

## Server Communication

- **api/**: For logic that communicates with the server(s).
- **graphql/**: GraphQL-specific code.

## State Management

- **states/store/**: Global state management logic (Zustand, Valtio, Jotai, etc.)
- **reducers, store, actions, selectors/**: Redux-specific logic

## Routing

- **routes/router/**: Defining routes (if you're using React Router or the like).
- **pages/**: Defining entry-point components for pages.

## Testing

- **tests/**: Unit tests and other kinds of tests for your code.