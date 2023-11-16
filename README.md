# Todo API

This is a simple CRUD API for a Todo application using NestJS and Firebase Realtime Database.

## Project Structure

- `src/main.ts`: Entry point of the application.
- `src/app.module.ts`: Root module of the application.
- `src/app.controller.ts`: Root controller of the application.
- `src/app.service.ts`: Root service of the application.
- `src/todo/todo.module.ts`: Module for the todo feature.
- `src/todo/todo.controller.ts`: Controller for the todo feature.
- `src/todo/todo.service.ts`: Service for the todo feature.
- `src/firebase/firebase.service.ts`: Service for interacting with Firebase.
- `test/app.e2e-spec.ts`: End-to-end tests for the application.
- `test/jest.config.js`: Configuration file for Jest.
- `package.json`: Configuration file for npm.
- `tsconfig.json`: Configuration file for TypeScript.
- `nest-cli.json`: Configuration file for the NestJS CLI.

## Installation

1. Clone the repository.
2. Run `npm install` to install the dependencies.
3. Set up your Firebase Realtime Database:
   - Go to the [Firebase Console](https://console.firebase.google.com/).
   - Create a new project or select an existing one.
   - Click on "Realtime Database" in the left sidebar.
   - Click on "Create Database" and choose "Start in test mode" if prompted.
   - Click on the gear icon in the top left corner and select "Project settings".
   - Scroll down to the "Firebase SDK snippet" section and select "Config".
   - Copy the configuration object.
4. Follow the firebase_service_account copy.json.sample file
5. Add your Firebase configuration to `src/firebase/firebase.service.ts`:
   ```typescript
   import * as admin from 'firebase-admin';

   const serviceAccount = require('../../firebase_service_account.json');

   admin.initializeApp({
     credential: admin.credential.cert(serviceAccount),
     databaseURL: 'https://<your-project-id>.firebaseio.com',
   });
   ```
6. Run `npm run start` to start the application.

## Usage

- `GET /todos`: Get all todos.
- `POST /todos`: Create a new todo.
- `GET /todos/:id`: Get a specific todo.
- `PUT /todos/:id`: Update a specific todo.
- `DELETE /todos/:id`: Delete a specific todo.

## Testing

Run `npm run test` to run the tests.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)