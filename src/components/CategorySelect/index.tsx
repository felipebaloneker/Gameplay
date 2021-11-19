import React from 'react';
import { RectButton, RectButtonProps, ScrollView } from 'react-native-gesture-handler';
import { styles } from './styles';
import { MaterialCommunityIcons} from '@expo/vector-icons'
import { theme } from '../../global/styles/theme';
import { View } from 'react-native';

export function CategorySelect() {
	return(
        <ScrollView
        horizontal
        style={styles.container}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingRight:40 }}
        >
            {
                
            }
        </ScrollView>
	)
}