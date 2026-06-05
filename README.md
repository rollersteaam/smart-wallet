# Smart Wallet

A smart wallet that lets users purchase benefits with their balance.

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Run project

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

3. Google login requires a local development build to work correctly. To run the build for Android:

   a. Download [JDK 17](https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html)

   b. You may need to set JAVA_HOME in your `~/.bashrc` or `~/.zshrc`:

   ```bash
   export JAVA_HOME=$(/usr/libexec/java_home -v17)
   export PATH="$JAVA_HOME/bin:$PATH"
   ```

   c. Download an Android SDK (preferably 36), recommended to do this through Android Studio. Go to Tools > SDK Manager and if you have 36 installed, copy the path listed, then put an ANDROID_HOME in your Terminal's rc file just like above:

   ```bash
   export ANDROID_HOME="/Users/<YOUR USERNAME HERE>/Library/Android/sdk"
   ```

   d. Run `npm run android`

### Other setup steps

- To set up ESLint for linting, run `npx expo lint`, or follow our guide on ["Using ESLint and Prettier"](https://docs.expo.dev/guides/using-eslint/)
- If you'd like to set up unit testing, follow our guide on ["Unit Testing with Jest"](https://docs.expo.dev/develop/unit-testing/)
- Learn more about the TypeScript setup in this template in our guide on ["Using TypeScript"](https://docs.expo.dev/guides/typescript/)

## My technology decisions

1. Google Sign In: [React Native Google Auth](https://github.com/sbaiahmed1/react-native-google-auth) with 152 stars on GitHub. Whilst [React Native Google Sign In](https://react-native-google-signin.github.io/) (3.5k stars on GitHub) is the most widely used and recommended library, its free tier relies on an API that has been deprecated for a while. By using another library inspired by it that is free and implements the same recommended Credentials Manager flow, we can avoid the app being bricked by deprecation. The most ideal solution might be to buy the premium for RNGSI to use the most popular library, but this library certainly does the job well, for both Android and iOS.

2. Auth persistence: MMKV. It's very fast, sets it up for future persistence in the app (such as for offline mode), and easy to setup/use with Firebase auth persistence.

3. UI: I used expo UI's platform-native components for the most part, to preserve the platform feel across the app. I would possibly move over to Tamagui because the UI/UX is really well thought out.

# Missing elements

1. The transaction history list does not display correctly. Tried to use @expo/ui Host and List but it bugs out due to library issues with lists. Need to figure out.

2. No saving pots

3. No voucher shop

4. No loyalty points

5. No testing
