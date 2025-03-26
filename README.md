# PhotoGallery App

A simple image gallery app built with React Native, using the Unsplash API to fetch and display photos. It supports search functionality, image caching, and a clean UI that works on both iOS and Android.

**NOTE:-** Due to compatibility issues with macOS Monterey, Xcode 14.2, an older version of Ruby, and the need to test the task implementation on both iOS and Android, I am using a lower version of React Native and React. As a result, I am unable to proceed with implementing the navigation feature to display the image and its metadata on the next screen.

## Features
- **Fetch Public Feed** - Displays trending images from Unsplash
- **Search Photos** - Find images by keyword
- **Auto-Revert to Public Feed** - Clears search results when the search bar is empty
- **Image caching** - Uses `react-native-fast-image` for smoother image loading

## Installation
- **Step 1**: Set up an Unsplash API key(its already included in the `unsplash.js` file)
- **Step 2**: Clone the project from the Git repository
- **Step 3**: Go to the project folder and install the dependencies: `npm install --legacy-peer-deps`
- **Step 4**: Go to the iOS folder and proceed with `pod install`
- **Step 5**: Go back to the project folder and run the app:
    -   iOS: `npm run ios`
    -   Android: `npm run android`

