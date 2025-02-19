// src/screens/PWAScreen.tsx
import React from 'react';
import { WebView } from 'react-native-webview';
import { SafeAreaView } from 'react-native';
import { config } from '../config';

export default function PWAScreen() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <WebView
                source={{ uri: config.pwaUrl }}
                style={{ flex: 1 }}
            />
        </SafeAreaView>
    );
}
