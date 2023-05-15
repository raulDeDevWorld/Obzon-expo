import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';
import { SafeAreaProvider } from 'react-native-safe-area-context';


export default function App() {

  return (
    <SafeAreaProvider>

        <WebView
          source={{ uri: 'https://collage-two.vercel.app/' }}
        />

    </SafeAreaProvider>
  );
}