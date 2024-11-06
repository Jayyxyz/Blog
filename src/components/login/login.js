import React from 'react';
import { View, StyleSheet, Image, Text, ImageBackground } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

export default function Login({ navigation }) {
    return (
        <ImageBackground 
            source={require('../../../assets/Starry-night.jpg')} // Your space-themed background image
            style={styles.backgroundLogo}
            resizeMode="cover" // Ensure the background covers the entire area
        >
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image 
                        source={require('../../../assets/Title.png')} 
                        style={styles.logo} 
                        resizeMode="contain" // Maintain aspect ratio for the title image
                    />
                </View>

                <Text style={styles.inputLabel}>Email</Text>
                <TextInput
                    mode="outlined"
                    style={styles.input}
                    activeUnderlineColor='red'
                    theme={{
                        colors: {
                            primary: 'red',   // Light border color
                            text: '#FF5733', // Red text color
                            placeholder: '#FFCCCB', // Lighter placeholder color
                        },
                    }}
                />

                <Text style={styles.inputLabel}>Password</Text>
                <TextInput
                    secureTextEntry
                    mode="outlined"
                    style={styles.input}
                    theme={{
                        colors: {
                            primary: 'red',   // Light border color
                            text: '#FF5733', // Red text color
                            placeholder: '#FFCCCB', // Lighter placeholder color
                        },
                    }}
                />

                <View style={styles.buttonContainer}>
                    <Button mode="contained" style={styles.button} onPress={() => navigation.navigate('Home')}>
                        Login
                    </Button>
                </View>

                <View style={styles.forgotPasswordContainer}>
                    <Button onPress={() => navigation.navigate('Forgot Password')} color="#FFCCCB">
                        Forgot Password?
                    </Button>
                </View>

                <View style={styles.signUpContainer}>
                    <Text style={styles.signUpText}>Don't have an account? </Text>
                    <Button onPress={() => navigation.navigate('Sign Up')} color="#FFCCCB">Sign Up</Button>
                </View>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        padding: 16,
        backgroundColor: 'rgba(0, 0, 0, 0.7)', // Dark background with some transparency
    },
    backgroundLogo: {
        width: '100%',
        height: '100%'
    },
    logo: {
        marginBottom: 16,
        width: 150, // Set width as a percentage of the container for responsiveness
        height: 150, // Let the height be adjusted according to the width
        aspectRatio: 2, // Maintain a specific aspect ratio (width: height)
    },
    logoContainer: {
        padding: 50,
        alignItems: 'center',
    },
    inputLabel: {
        color: '#FFCCCB', // Color for the labels
        alignSelf: 'flex-start',
        marginBottom: 5, // Space between label and input
        fontSize: 16, // Size of the label font
    },
    input: {
        width: '100%',
        marginBottom: 15,
        backgroundColor: 'rgba(255, 255, 255, 0.1)', // Slightly transparent background for input
        borderRadius: 10, // Rounded edges for input fields
        color: 'red'
    },
    button: {
        marginTop: 15,
        width: 200,
        backgroundColor: 'red',
        borderRadius: 10, // Rounded edges for button
    },
    buttonContainer: {
        marginTop: 30,
    },
    signUpContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
    },
    signUpText: {
        color: '#FFCCCB',
    },
    forgotPasswordContainer: {
        marginTop: 15,
    },
});
