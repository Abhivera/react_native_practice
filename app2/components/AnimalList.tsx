/* eslint-disable prettier/prettier */
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const AnimalList = () => {
    const contacts = [
        { name: 'lion1', id: 3, imgURL: 'https://images.pexels.com/photos/247502/pexels-photo-247502.jpeg?auto=compress&cs=tinysrgb&w=300' },
        { name: 'lion2', id: 2, imgURL: 'https://images.pexels.com/photos/67216/lions-animal-male-female-lions-67216.jpeg?auto=compress&cs=tinysrgb&w=300' },
        { name: 'lion3', id: 1, imgURL: 'https://images.pexels.com/photos/730539/pexels-photo-730539.jpeg?auto=compress&cs=tinysrgb&w=300' },
    ];
    return (
        <View>
            <Text style={styles.headingText}>Animal List</Text>
            <ScrollView style={styles.container}>

                {contacts.map((item, index) => <View key={index}>

                    <Image source={{ uri: item.imgURL }} style={styles.userImage} />
                </View>)}

            </ScrollView>
        </View>
    );
};

export default AnimalList;

const styles = StyleSheet.create({
    headingText: {},
    container: {},
    userImage: {
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
    },


});
