/* eslint-disable prettier/prettier */
import {
    TouchableOpacity,
    Image,
    StyleSheet,
    Text,
    View,
    Linking,
} from 'react-native';
import React from 'react';

const ActionCard = () => {
    function openWebsite(websiteLink: string) {
        Linking.openURL(websiteLink);
    }
    return (
        <View>
            <Text style={styles.headingText}>Gaming Phones</Text>
            <View style={[styles.card, styles.elevatedCard]}>
                <View style={styles.headingContainer}>
                    <Text style={styles.headerText}>What is new in your area</Text>
                </View>
                <Image
                    source={{
                        uri: 'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/2/2/u/-original-imagsywfwmfphgyp.jpeg?q=75',
                    }}
                    style={styles.cardImage}
                />
                <View style={styles.bodyContainer}>
                    <Text numberOfLines={2}>
                        The term gamer originally meant gambler, and has been in use since
                        at least 1422, when the town laws of Walsall, England, referred to
                        "any dice-player, carder, tennis player, or other unlawful gamer
                    </Text>
                </View>
                <View style={styles.footerContainer}>
                    <TouchableOpacity
                        onPress={() =>
                            openWebsite(
                                'https://qph.cf2.quoracdn.net/main-qimg-8593a5bbc838fbc56f3b569ee903e790-lq',
                            )
                        }>
                        <Text style={styles.socialLinks}>More Info</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default ActionCard;

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
    },

    card: {
        width: 350,
        height: 340,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16,
    },
    elevatedCard: {
        backgroundColor: '#476694',
        elevatiion: 5,

    },
    headingContainer: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {},
    cardImage: {
        height: 200,

    },
    bodyContainer: {
        padding:10,
    },
    footerContainer: {
        padding: 8,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly',
    },
    socialLinks: {
        fontSize:16,
        backgroundColor:'black',
        color:'white',
        paddingHorizontal:18,
        paddingVertical:8,
        borderRadius:8,
    },
});
