import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, Image, Alert } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Button as PaperButton } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';

export default function CreateCapsule({ navigation }) {
    const [memoryText, setMemoryText] = useState('');
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [photo, setPhoto] = useState(null);

    const handlePhotoUpload = async () => {
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (permissionResult.granted === false) {
            Alert.alert("Permission to access camera roll is required!");
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setPhoto(result.assets[0].uri);
        }
    };

    const handleSubmit = () => {
        if (!memoryText || !selectedDate) {
            Alert.alert("Please fill in all fields");
            return;
        }

        Alert.alert("Memory saved!", `Memory will be unlocked on ${selectedDate.toLocaleString()}`);
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Create a New Memory Capsule</Text>
            <TextInput
                style={styles.input}
                placeholder="Write your memory here..."
                placeholderTextColor="#AAB0BC"
                multiline
                value={memoryText}
                onChangeText={setMemoryText}
            />
            <View style={styles.photoContainer}>
                {photo && <Image source={{ uri: photo }} style={styles.photo} />}
                <PaperButton mode="contained" onPress={handlePhotoUpload} style={styles.uploadButton}>
                    Upload Photo
                </PaperButton>
            </View>
            <PaperButton mode="outlined" onPress={() => setDatePickerVisibility(true)} style={styles.dateButton}>
                Select Unlock Date
            </PaperButton>

            {isDatePickerVisible && (
                <DateTimePicker
                    value={selectedDate}
                    mode="date"
                    display="default"
                    onChange={(event, date) => {
                        setDatePickerVisibility(false);
                        if (date) {
                            setSelectedDate(date);
                        }
                    }}
                />
            )}

            <View style={styles.buttonContainer}>
                <PaperButton mode="contained" onPress={handleSubmit} style={styles.saveButton}>
                    Save Memory
                </PaperButton>
                <PaperButton mode="text" onPress={() => navigation.goBack()} color="red">
                    Cancel
                </PaperButton>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#0D1B2A',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        textAlign: 'center',
        color: '#E0E5EC',
    },
    input: {
        height: 100,
        width: '100%',
        borderColor: '#AAB0BC',
        borderWidth: 1,
        marginBottom: 20,
        padding: 10,
        borderRadius: 5,
        color: '#E0E5EC',
    },
    photoContainer: {
        marginBottom: 20,
        alignItems: 'center',
    },
    photo: {
        width: 100,
        height: 100,
        marginBottom: 10,
        borderRadius: 5,
    },
    uploadButton: {
        backgroundColor: '#3A86FF',
    },
    dateButton: {
        marginTop: 10,
        width: '100%',
        backgroundColor: '#3A86FF',
    },
    saveButton: {
        marginTop: 20,
        width: '48%',
        backgroundColor: '#3A86FF',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
});
