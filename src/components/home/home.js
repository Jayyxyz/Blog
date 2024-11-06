// src/components/home/Home.js

import React from 'react';
import { View, StyleSheet, Text, Image, ImageBackground } from 'react-native';
import { Button } from 'react-native-paper';

export default function Home({ navigation }) {
    return (
        <ImageBackground 
            source={require('../../../assets/Starry-night.jpg')} // Space background image
            style={styles.background}
        >
            <View style={styles.overlay}>

                {/* Icon at the Top */}
                <Image 
                    source={require('../../../assets/favicon.png')} // Space-themed icon
                    style={styles.icon}
                />

                {/* Main Title */}
                <Text style={styles.title}>Your Space-Time Capsule Awaits</Text>

                {/* Description */}
                <Text style={styles.description}>
                    Embark on an interstellar journey through memories. Capture and secure moments from across time and space.
                </Text>

                {/* Action Buttons */}
                <View style={styles.buttonContainer}>
                    <Button 
                        mode="contained" 
                        style={styles.createButton} 
                        labelStyle={styles.buttonText}
                        onPress={() => navigation.navigate('Create Capsule')} // Navigate to capsule creation screen
                    >
                        Create New Capsule
                    </Button>
                    <Button 
                        mode="outlined" 
                        style={styles.logoutButton} 
                        labelStyle={styles.outlineButtonText}
                        onPress={() => navigation.navigate('Login')} // Navigate back to Login
                    >
                        Logout
                    </Button>
                </View>

            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        height: '100%'
    },
    overlay: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(13, 27, 42, 0.85)', // Slightly dark overlay for contrast
        paddingHorizontal: 20,
    },
    icon: {
        width: 120,
        height: 120,
        marginBottom: 30,
        opacity: 0.9,
    },
    title: {
        fontSize: 34,
        color: '#E0E5EC',
        marginBottom: 15,
        textAlign: 'center',
        fontWeight: '700',
        textShadowColor: '#000000',
        textShadowOffset: { width: 1, height: 2 },
        textShadowRadius: 6,
    },
    description: {
        fontSize: 18,
        color: '#AAB0BC',
        marginBottom: 45,
        textAlign: 'center',
        paddingHorizontal: 25,
        lineHeight: 26,
    },
    buttonContainer: {
        width: '80%',
        alignItems: 'center',
    },
    createButton: {
        marginTop: 20,
        width: '100%',
        backgroundColor: '#3A86FF', // Bright space blue
        borderRadius: 30,
        elevation: 6,
        shadowColor: '#000', // Button shadow for dimension
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
    },
    buttonText: {
        color: '#FFFFFF',
        fontWeight: '700',
    },
    logoutButton: {
        marginTop: 15,
        width: '100%',
        borderColor: '#FFCCCB',
        borderWidth: 1.5,
        borderRadius: 30,
        backgroundColor: 'rgba(255, 204, 203, 0.08)', // Slight pink overlay for hover effect
    },
    outlineButtonText: {
        color: '#FFCCCB',
        fontWeight: '700',
    },
});
