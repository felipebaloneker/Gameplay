import React, { useState } from 'react';
import { Button, View , Text} from 'react-native'
import { styles } from './styles'

import {Fontisto} from '@expo/vector-icons';

import { Background } from '../../components/Background';
import { Header } from '../../components/Header';
import { BorderlessButton } from 'react-native-gesture-handler';
import { theme } from '../../global/styles/theme';

export function AppointmentDetails(){
	return(
		<Background>
		<Header
			title="Detalhes"
			action={
				<BorderlessButton>
					<Fontisto
					name='share'
					size={24}
					color={theme.colors.primary}
					/>
				</BorderlessButton>
			}
		/>
		</Background>
	)
}