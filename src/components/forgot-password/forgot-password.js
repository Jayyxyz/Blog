import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

export default function ForgotPassword({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Password Reset</Text>
            <Text style={styles.inputLabel}>Enter your email address</Text>
            <TextInput
                mode="outlined"
                style={styles.input}
                theme={{
                    colors: {
                        primary: '#FF6F91', // Light purple-pink for space effect
                        text: '#FFFFFF', 
                        placeholder: '#FF6F91', 
                    },
                }}
                placeholder="example@example.com"
            />
            <View style={styles.buttonContainer}>
                <Button 
                    mode="contained" 
                    style={styles.button} 
                    onPress={() => {/* Handle password reset logic here */}}
                    labelStyle={styles.buttonText}
                >
                    Send Reset Link
                </Button>
            </View>
            <View style={styles.backContainer}>
                <Button onPress={() => navigation.goBack()} color="#FF6F91">
                    Back to Login
                </Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#0B0F1A', // Dark background for space theme
    },
    title: {
        fontSize: 34,
        color: '#FFFFFF',
        marginBottom: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        textShadowColor: 'red',
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 10, // Glow effect for title
    },
    inputLabel: {
        color: 'red',
        alignSelf: 'flex-start',
        marginBottom: 10,
        fontSize: 16,
    },
    input: {
        width: '100%',
        marginBottom: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: 10,
        height: 50,
    },
    buttonContainer: {
        width: '100%',
        marginTop: 30,
    },
    button: {
        paddingVertical: 12,
        backgroundColor: 'red', // Brighter pinkish-purple for button
        borderRadius: 10,
        shadowColor: '#FF6F91',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.6,
        shadowRadius: 10, // Glow effect for button
    },
    buttonText: {
        color: '#FFFFFF', // White text for contrast
        fontWeight: 'bold',
    },
    backContainer: {
        marginTop: 20,
    },
});
