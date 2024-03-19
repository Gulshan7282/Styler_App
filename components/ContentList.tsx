import { Image, ScrollView, StyleSheet, Text, View,} from 'react-native'
import React from 'react'

export default function ContentList() {
    const contacts = [ 
        {
            uid: 1,
            name: 'Virat Kholi',
            status: 'Virat Kholi is the G.O.A.T palyer.',
            imageUrl: 'https://img.jagranjosh.com/images/2022/January/1812022/Virat-Kohli-Biography.webp',
          },
          {
            uid: 2,
            name: 'Rhoit Sharma',
            status: 'He is Caption of Indian Cricket Team',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRRkwI8fvvxPtyZuloBgu3Ef4rP3V9OXEgxvxKQg-05A&s',
          },
          {
            uid: 3,
            name: 'M S Dhoni',
            status: 'CSK Caption Cool',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT71J1wcHxpigRXHul9btrLs0Gs29jwNp16fedxG6-2AQ&s',
          },
          {
            uid: 4,
            name: 'Anirudh Jwala',
            status: 'Building secure Digital banks',
            imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
          },  
        ];
  return (
    <View>
      <Text style = {styles.headingText}>Content List</Text>
      <ScrollView 
      style = {styles.Container}
      scrollEnabled = {false}
      >
        {contacts.map(({uid, name, status, imageUrl}) => (
            <View key={uid} style = {styles.userCard}>
                <Image
                    source={ {
                        uri : imageUrl
                    }}
                    style = {styles.userImage}
                />
                <View >
                <Text style = {styles.userName}>{name}</Text>
                <Text style = {styles.userStatus}>{status}</Text>
                </View>
            </View>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText : {
        fontSize : 24,
        fontWeight : 'bold',
        paddingHorizontal : 8,  
    },
    Container : {
        paddingHorizontal : 16,
        marginBottom : 4
    },
    userCard : {
        flex : 1,
        flexDirection : 'row',
        alignItems : 'center',
        marginBottom : 4,
        backgroundColor : '#8D3DAF',
        padding : 4,
        borderRadius : 10
    },
    userImage : {
        height : 60,
        width : 60,
        borderRadius : 60 / 2,
        marginBottom : 8,
        marginRight : 14  ,
        marginTop : 8,
        marginHorizontal : 8
    },
    userName : {
        fontSize : 16,
        fontWeight : '600',
        color : '#fff',
    },
    userStatus : {

    }
})