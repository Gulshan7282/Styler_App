import { StyleSheet, Text, View, Linking, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(websitesLink : string ) {
        Linking.openURL(websitesLink)
    }
  return (
    <View>
      <Text style = {styles.headingText}>ActionCard</Text>
      <View style = {[styles.card, styles.cardElevated]}>
        <View style = {styles.headingContainer}>
            <Text style = {styles.headerText}>
               What's new in JavaScripts 21 - ES12  
            </Text>
        </View>
        <Image 
        source={{
            uri : 'https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?cs=srgb&dl=pexels-pixabay-206359.jpg&fm=jpg',
        }}
        style = {styles.CardImage}
        />
        <View style = {styles.bodyCardContainer}>
            <Text numberOfLines={3} >
            Just like every year, Javascript brings in new features. This year
            javascript is bringing 4 new features, which are almost in
            production rollout. I won't be wasting much more time and directly
            jump to code with easy to understand examples.
            </Text>
        </View>
        <View style = {styles.footerCardContainer}>
            <TouchableOpacity 
            onPress={() => openWebsite('https://blog.learncodeonline.in/whats-new-in-javascript-21-es12')}>
                <Text style = {styles.socialLinks}>Read More </Text>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={() => openWebsite('https://www.linkedin.com/in/gulshankumar7282/')}>
                <Text style = {styles.socialLinks}>Follow in Linked In</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText : {
        fontSize : 24,
        fontWeight : 'bold',
        paddingHorizontal : 8,    
    },
    card : {
        width :400,
        height :360,
        borderRadius : 6,
        marginHorizontal : 12,
        marginVertical : 12,
    },
    cardElevated : {
        backgroundColor : '#E07C24',
        elevation : 3,
        shadowOffset : {
            width : 1,
            height : 1,
        },
        shadowOpacity : 0.4,
        shadowColor : '#333',
        borderRadius : 6 
    },
    headingContainer : {
        height : 40,
        flexDirection : 'row',
        justifyContent : 'center',
        alignItems : 'center'
    },
    headerText : {
        color: '#000000',
        fontSize : 16,
        fontWeight : '600'
    },
    CardImage : {
        height: 190,

    },
    bodyCardContainer : {
        padding: 10,

    },
    footerCardContainer : {
        padding : 8,
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-around'
    },
    socialLinks : {
        fontSize : 16,
        color: '#000000',
        backgroundColor : '#fff',
        paddingHorizontal : 20,
        paddingVertical : 4,
        borderRadius : 6
    },
})