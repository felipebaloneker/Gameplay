import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button, View , Text} from 'react-native'
import { styles } from './styles'

import { Profile } from '../../components/Profile'
import { ListDivider } from '../../components/ListDivider'
import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelect } from '../../components/CategorySelect';
import { ListHeader } from '../../components/ListHeader';
import { FlatList } from 'react-native-gesture-handler';
import { Appointment } from '../../components/Appointment';
import { Background } from '../../components/Background';

export function Home(){
	const [category, setCategory] = useState('');
	const navigation = useNavigation();

	const appointments = [
		{
			id:'1',
			guild:{
				id:'1',
				name:'Lendários',
				icon: null,
				owner:true
			},
			category:'1',
			date:'22/06 ás 20:40h',
			description: 'É hoje que vamos chegar ao challenger sem perder uma partida d md10'
		},
		{
			id:'2',
			guild:{
				id:'1',
				name:'Lendários',
				icon: null,
				owner:true
			},
			category:'1',
			date:'22/06 ás 20:40h',
			description: 'É hoje que vamos chegar ao challenger sem perder uma partida d md10'
		}
	]

	function handleCategorySelect(categoryId: string){
		categoryId === category ? setCategory('') : setCategory(categoryId);
	}

	function handleAppointmentDetails(){
		navigation.navigate('AppointmentDetails')
	}
	function handleAppointmentCreate(){
		navigation.navigate('AppointmentCreate')
	}

	return(
		<Background>
		<View>
			<View style={styles.header}>
				<Profile/>
				<ButtonAdd onPress={handleAppointmentCreate}/>
			</View>

			<CategorySelect
			categorySelected={category}
			setCategory={handleCategorySelect}
			/>

			<View style={styles.content}>
				<ListHeader
				title='Partidads agendadas'
				subtitle='Total 6'
				/>
				<FlatList 
				data={appointments} 
				keyExtractor={item => item.id}
				renderItem={({ item }) => (
					<Appointment 
					data={item}
					onPress={handleAppointmentDetails}
					/>
				)}
				style={styles.matches}
				showsVerticalScrollIndicator={false}
				ItemSeparatorComponent={() => <ListDivider /> }
				/>
			</View>
		</View>
		</Background>
	)
}