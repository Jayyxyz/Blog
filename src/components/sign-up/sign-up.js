import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

export default function SignUp({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign Up</Text>

            <Text style={styles.inputLabel}>Name</Text>
            <TextInput
                mode="outlined"
                style={styles.input}
                theme={{
                    colors: {
                        primary: '#FF5733', // Light border color
                        placeholder: '#B0B0B0', // Lighter placeholder color
                        text: '#FF5733', // Red text color
                    },
                }}
            />

            <Text style={styles.inputLabel}>Email</Text>
            <TextInput
                mode="outlined"
                style={styles.input}
                theme={{
                    colors: {
                        primary: '#FF5733',
                        placeholder: '#B0B0B0',
                        text: '#FF5733', // Red text color
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
                        primary: '#FF5733',
                        placeholder: '#B0B0B0',
                        text: '#FF5733', // Red text color
                    },
                }}
            />

            <Text style={styles.inputLabel}>Confirm Password</Text>
            <TextInput
                secureTextEntry
                mode="outlined"
                style={styles.input}
                theme={{
                    colors: {
                        primary: '#FF5733',
                        placeholder: '#B0B0B0',
                        text: '#FF5733', // Red text color
                    },
                }}
            />

            <View style={styles.buttonContainer}>
                <Button mode="contained" style={styles.button} onPress={() => {/* Add sign-up logic here */}}>
                    Sign Up
                </Button>
            </View>

            <View style={styles.loginContainer}>
                <Text style={styles.loginText}>Already have an account? </Text>
                <Button onPress={() => navigation.navigate('Login')} color="#FFFFFF">Login</Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        padding: 16,
        backgroundColor: '#000033', // Dark blue background for a space vibe
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'red', // White color for the title
        marginBottom: 20,
    },
    inputLabel: {
        color: '#FFFFFF', // White color for the labels
        alignSelf: 'flex-start',
        marginBottom: 5, // Space between label and input
        fontSize: 16, // Size of the label font
    },
    input: {
        width: '100%',
        marginBottom: 15,
        backgroundColor: 'rgba(255, 255, 255, 0.2)', // Lighter transparent background for input
        borderRadius: 10, // Rounded edges for input fields
    },
    button: {
        marginTop: 15,
        width: 200,
        backgroundColor: 'red', // Bright color for the button
    },
    buttonContainer: {
        marginTop: 30,
    },
    loginContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
    },
    loginText: {
        color: '#FFFFFF', // White text color for prompt
    },
});
