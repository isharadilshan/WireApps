# Wire Apps

This project based on a technical Assesment.

## Prerequisites

- [Node.js > 18](https://nodejs.org) and npm (Recommended: Use [nvm](https://github.com/nvm-sh/nvm))
- [Watchman](https://facebook.github.io/watchman)
- [Xcode 15](https://developer.apple.com/xcode)
- [Cocoapods 1.15.0](https://cocoapods.org)
- [JDK > 11](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)
- [Android Studio and Android SDK](https://developer.android.com/studio)

## Base dependencies

- [react-navigation](https://reactnavigation.org/) navigation library.
- [@reduxjs/toolkit](https://redux-toolkit.js.org/) for state management.
- [react-redux](https://react-redux.js.org/) react binding library for redux.
- [redux-logger](https://www.npmjs.com/package/redux-logger) as redux logger.
- [react-native-paper](https://reactnativepaper.com/) component library.
- [twrnc](https://www.npmjs.com/package/twrnc) tailwindcss styling library.

## Folder structure

- `src`: This folder is the main container of all the code inside your application.
  - `app`: This folder contains entry file and configurations.
  - `assets`: Asset folder to store all images, icons, etc.
  - `components`: Folder to store any common component through app follows ATOMIC design pattern.
    - `atoms`
    - `molecules`
    - `organisms`
  - `models`: Folder to store any kind of constant that you have.
  - `navigation`: Folder to store the navigators.
  - `redux`: This folder should have all your reducers, and expose the combined result using its `index.js`
  - `screens`: Folder that contains all your application screens/features.
    - `Screen`: Each screen should be stored inside its folder.
  - `selectors`: Folder to store your selectors for each reducer.
  - `storage`: Folder that contains the application storage logic.
  - `store`: Folder to put all redux middlewares and the store.
  - `index.js`: Entry point of your application as per React-Native standards.

## Screens

#### Home screen

#### Product Detail screen

#### Cart List screen

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.
