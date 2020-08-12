const expoPreset = require('jest-expo/jest-preset')

module.exports = Object.assign(expoPreset, {
  setupFiles: [...expoPreset.setupFiles],
  preset: 'jest-expo/universal',
  projects: [{ preset: 'jest-expo/android' }],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  testEnvironment: 'jsdom',
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|expo-firebase-recaptcha|expo-blur)',
  ],
})
