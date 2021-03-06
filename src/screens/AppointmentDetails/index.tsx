import React  from 'react';
import { View , Text, ImageBackground} from 'react-native'
import { styles } from './styles'

import {Fontisto} from '@expo/vector-icons';
import BannerImg from '../../assets/banner.png'

import { Background } from '../../components/Background';
import { ListHeader } from '../../components/ListHeader';
import { Header } from '../../components/Header';
import { BorderlessButton, FlatList } from 'react-native-gesture-handler';
import { theme } from '../../global/styles/theme';
import { Member } from '../../components/Member';
import { ListDivider } from '../../components/ListDivider';
import { ButtonIcon } from '../../components/ButtonIcon';

export function AppointmentDetails(){
	const members =[
		{
			id:'1',
			username: 'Felipe',
			avatar_url:'https://github.com/felipebaloneker.png',
			status:'online',
		}
	]
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

		<ImageBackground
			source={BannerImg}
			style={styles.banner}
		>
			<View style={styles.bannerContent}>
				<Text style={styles.title}>
					Lendários
				</Text>
				<Text style={styles.subtitle}>
					É hoje que vamos chegar ao challeger sem perder uma partida da md10
				</Text>
			</View>
		</ImageBackground>
		<ListHeader
			title="Jogadores"
			subtitle='Total 3'
		/>
		<FlatList
		data={members}
		keyExtractor={item => item.id}
		renderItem = {({item})=>(
			<Member data={item} />
		)}
		ItemSeparatorComponent={() => <ListDivider/>}
		style={styles.members}
		/>

		<View style={styles.footer}>
			<ButtonIcon title='Entrar na partida'/>
		</View>
		</Background>
	)
}