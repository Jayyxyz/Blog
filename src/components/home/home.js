import React, { useState, useRef } from 'react';
import { View, StyleSheet, Text, ImageBackground, TouchableOpacity, Animated, Dimensions } from 'react-native';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import { Button } from 'react-native-paper';

export default function Home({ navigation }) {
    const [menuVisible, setMenuVisible] = useState(false); // State to control menu visibility
    const slideAnim = useRef(new Animated.Value(-Dimensions.get('window').width)).current; // Animation value for sliding

    const toggleMenu = () => {
        if (menuVisible) {
            // Slide out
            Animated.timing(slideAnim, {
                toValue: -Dimensions.get('window').width,
                duration: 300,
                useNativeDriver: false,
            }).start(() => setMenuVisible(false));
        } else {
            setMenuVisible(true);
            // Slide in
            Animated.timing(slideAnim, {
                toValue: 0,
                duration: 300,
                useNativeDriver: false,
            }).start();
        }
    };

    return (
        <ImageBackground 
            source={require('../../../assets/Starry-night.jpg')} // Space background image
            style={styles.background}
        >
            <View style={styles.overlay}>

                {/* Hamburger Icon */}
                <TouchableOpacity
                    style={styles.hamburgerContainer}
                    onPress={toggleMenu}
                >
                    <Text style={styles.hamburgerIcon}>☰</Text>
                </TouchableOpacity>

                {/* Sliding Menu */}
                {menuVisible && (
                    <Animated.View style={[styles.fullMenu, { left: slideAnim }]}>

                        {/* Close Button */}
                        <TouchableOpacity
                            style={styles.closeButton}
                            onPress={toggleMenu}
                        >
                            <Text style={styles.closeText}>✕</Text>
                        </TouchableOpacity>

                        {/* Menu Content */}
                        <Text style={styles.menuHeader}>Navigation</Text>

                        <View style={styles.menuItems}>
                            <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Profile')}>
                                <Feather name="user" size={20} color="#FFFFFF" />
                                <Text style={styles.menuText}>Profile</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Settings')}>
                                <Feather name="settings" size={20} color="#FFFFFF" />
                                <Text style={styles.menuText}>Settings</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Help')}>
                                <Feather name="help-circle" size={20} color="#FFFFFF" />
                                <Text style={styles.menuText}>Help</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Logout')}>
                                <MaterialIcons name="logout" size={20} color="#FFFFFF" />
                                <Text style={styles.menuText}>Logout</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.menuFooter}>
                            <Text style={styles.footerText}>Made with ❤️ by YourApp</Text>
                        </View>
                    </Animated.View>
                )}

                {/* Main Content */}
                <Text style={styles.title}>Your Space-Time Capsule Awaits</Text>
                <Text style={styles.description}>
                    Embark on an interstellar journey through memories. Capture and secure moments from across time and space.
                </Text>
                <View style={styles.buttonContainer}>
                    <Button 
                        mode="contained" 
                        style={styles.createButton} 
                        labelStyle={styles.buttonText}
                        onPress={() => navigation.navigate('Create Capsule')}
                    >
                        Create New Capsule
                    </Button>
                    <Button 
                        mode="outlined" 
                        style={styles.logoutButton} 
                        labelStyle={styles.outlineButtonText}
                        onPress={() => navigation.navigate('Login')}
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
        backgroundColor: 'rgba(13, 27, 42, 0.85)',
        paddingHorizontal: 20,
    },
    hamburgerContainer: {
        position: 'absolute',
        top: 30,
        left: 20,
    },
    hamburgerIcon: {
        fontSize: 30,
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
    fullMenu: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        width: Dimensions.get('window').width * 0.8,
        backgroundColor: '#1A1A2E',
        paddingHorizontal: 20,
        paddingVertical: 40,
        zIndex: 100,
        justifyContent: 'space-between',
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        elevation: 5,
    },
    closeButton: {
        position: 'absolute',
        top: 20,
        right: 20,
    },
    closeText: {
        fontSize: 30,
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
    menuHeader: {
        fontSize: 22,
        color: '#FFFFFF',
        fontWeight: 'bold',
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#2E2E4E',
        paddingBottom: 10,
    },
    menuItems: {
        flex: 1,
        justifyContent: 'flex-start',
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#2E2E4E',
    },
    menuText: {
        fontSize: 18,
        color: '#FFFFFF',
        marginLeft: 15,
    },
    menuFooter: {
        alignItems: 'center',
        paddingVertical: 10,
        borderTopWidth: 1,
        borderTopColor: '#2E2E4E',
    },
    footerText: {
        fontSize: 14,
        color: '#B0B0B0',
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
        backgroundColor: '#3A86FF',
        borderRadius: 30,
        elevation: 6,
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
    },
    outlineButtonText: {
        color: '#FFCCCB',
        fontWeight: '700',
    },
});
