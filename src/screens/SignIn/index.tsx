import React, { useState } from  'react'
import {View, Text, TextInput, Image} from 'react-native'

import IllustrationImg from "../../assets/illustration.png"
import {styles} from './styles';

export function SignIn(){
    const [text, setText] = useState('');
    return(
        <View style ={styles.container}>
            <Image source={IllustrationImg}
            style={styles.image}
            />
        <View style={styles.content}>
            <Text style = { styles.tittle}>
             Organize{'\n'}
             suas jogatinas {'\n'}
             facilmente
            </Text>
             <Text style = { styles.subtitle}>
                Crei grupos para jogar seus games {'\n'}
                favoritos com seus amigos 
            </Text>

        </View>
        </View>
    )
}