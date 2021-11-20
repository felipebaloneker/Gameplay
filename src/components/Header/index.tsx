import React, { ReactNode, useState } from 'react';
import { Button, View , Text} from 'react-native'
 import { styles } from './styles'

import { Background } from '../../components/Background';
import { LinearGradient } from 'expo-linear-gradient';
import { theme } from '../../global/styles/theme';
import { BorderlessButton } from 'react-native-gesture-handler';
import Feather from '@expo/vector-icons/build/Feather';
import { useNavigation } from '@react-navigation/native';
type Props = { 
    title: string;
    action?: ReactNode;
}
export function Header({ title, action}: Props){
    const { secondary100, secondary40, heading } = theme.colors;
    const navigation = useNavigation()

    function handleGoBack(){
        navigation.goBack();
    }

	return(
		<LinearGradient
        style={styles.container}
            colors={[ secondary100, secondary40]}
        >
            <BorderlessButton onPress={handleGoBack}>
                <Feather
                name="arrow-left"
                size={24}
                color={heading}
                >

                </Feather>
            </BorderlessButton>
            <Text style={styles.title}>
                {title}
            </Text>
            {
                action && 
                <View>
                    { action }
                </View>
            }
		</LinearGradient>
	)
}