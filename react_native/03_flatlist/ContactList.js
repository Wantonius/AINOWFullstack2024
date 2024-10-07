import {useState} from 'react';
import {View,Text,StyleSheet,FlatList,Pressable} from 'react-native';


const ContactList = () => {
	
	const [state,setState] = useState({
		list:[
	{
		"firstname": "Chester",
		"lastname": "Woods",
		"id": 1
	},
	{
		"firstname": "Oprah",
		"lastname": "Becker",
		"id": 2
	},
	{
		"firstname": "Wayne",
		"lastname": "Peterson",
		"id": 3
	},
	{
		"firstname": "Kiara",
		"lastname": "Crawford",
		"id": 4
	},
	{
		"firstname": "Martha",
		"lastname": "Young",
		"id": 5
	},
	{
		"firstname": "Nina",
		"lastname": "Cooke",
		"id": 6
	},
	{
		"firstname": "Mia",
		"lastname": "Mcmillan",
		"id": 7
	},
	{
		"firstname": "Zeph",
		"lastname": "Kidd",
		"id": 8
	},
	{
		"firstname": "Victoria",
		"lastname": "Wheeler",
		"id": 9
	},
	{
		"firstname": "Howard",
		"lastname": "Hendrix",
		"id": 10
	},
	{
		"firstname": "Ifeoma",
		"lastname": "Wade",
		"id": 11
	},
	{
		"firstname": "Jaime",
		"lastname": "Dunn",
		"id": 12
	},
	{
		"firstname": "Garrett",
		"lastname": "Blake",
		"id": 13
	},
	{
		"firstname": "Megan",
		"lastname": "Sanchez",
		"id": 14
	},
	{
		"firstname": "Amir",
		"lastname": "Clarke",
		"id": 15
	},
	{
		"firstname": "Cassidy",
		"lastname": "Gordon",
		"id": 16
	},
	{
		"firstname": "Sydnee",
		"lastname": "Lang",
		"id": 17
	},
	{
		"firstname": "Leslie",
		"lastname": "Casey",
		"id": 18
	},
	{
		"firstname": "Xandra",
		"lastname": "Ayala",
		"id": 19
	},
	{
		"firstname": "Yuli",
		"lastname": "Howell",
		"id": 20
	},
	{
		"firstname": "Gloria",
		"lastname": "Hall",
		"id": 21
	},
	{
		"firstname": "Rhonda",
		"lastname": "Keith",
		"id": 22
	},
	{
		"firstname": "Lucian",
		"lastname": "Mendez",
		"id": 23
	},
	{
		"firstname": "Wylie",
		"lastname": "Mccall",
		"id": 24
	},
	{
		"firstname": "Kevyn",
		"lastname": "Levy",
		"id": 25
	},
	{
		"firstname": "Ezekiel",
		"lastname": "William",
		"id": 26
	},
	{
		"firstname": "Amaya",
		"lastname": "Roberson",
		"id": 27
	},
	{
		"firstname": "Fiona",
		"lastname": "Miller",
		"id": 28
	},
	{
		"firstname": "Selma",
		"lastname": "Silva",
		"id": 29
	},
	{
		"firstname": "Wylie",
		"lastname": "Phelps",
		"id": 30
	},
	{
		"firstname": "Gage",
		"lastname": "Allison",
		"id": 31
	},
	{
		"firstname": "Francesca",
		"lastname": "Rasmussen",
		"id": 32
	},
	{
		"firstname": "Melinda",
		"lastname": "Bass",
		"id": 33
	},
	{
		"firstname": "Dane",
		"lastname": "Pitts",
		"id": 34
	},
	{
		"firstname": "Vance",
		"lastname": "Mckay",
		"id": 35
	},
	{
		"firstname": "Ivory",
		"lastname": "Mcdowell",
		"id": 36
	},
	{
		"firstname": "Dillon",
		"lastname": "Garcia",
		"id": 37
	},
	{
		"firstname": "Judah",
		"lastname": "Keith",
		"id": 38
	},
	{
		"firstname": "Xavier",
		"lastname": "Head",
		"id": 39
	},
	{
		"firstname": "Donovan",
		"lastname": "Rowe",
		"id": 40
	},
	{
		"firstname": "Sheila",
		"lastname": "Hodge",
		"id": 41
	},
	{
		"firstname": "Avye",
		"lastname": "Montoya",
		"id": 42
	},
	{
		"firstname": "Amos",
		"lastname": "Noble",
		"id": 43
	},
	{
		"firstname": "Aquila",
		"lastname": "Cohen",
		"id": 44
	},
	{
		"firstname": "Chastity",
		"lastname": "Garcia",
		"id": 45
	},
	{
		"firstname": "Perry",
		"lastname": "Sykes",
		"id": 46
	},
	{
		"firstname": "Tana",
		"lastname": "Payne",
		"id": 47
	},
	{
		"firstname": "Raven",
		"lastname": "Lang",
		"id": 48
	},
	{
		"firstname": "Slade",
		"lastname": "Weeks",
		"id": 49
	},
	{
		"firstname": "Stuart",
		"lastname": "Joyce",
		"id": 50
	},
	{
		"firstname": "Hayden",
		"lastname": "Mayer",
		"id": 51
	},
	{
		"firstname": "Catherine",
		"lastname": "Foley",
		"id": 52
	},
	{
		"firstname": "Winifred",
		"lastname": "Morrison",
		"id": 53
	},
	{
		"firstname": "Isaac",
		"lastname": "Perkins",
		"id": 54
	},
	{
		"firstname": "Kato",
		"lastname": "Gonzalez",
		"id": 55
	},
	{
		"firstname": "Velma",
		"lastname": "Sellers",
		"id": 56
	},
	{
		"firstname": "Brynne",
		"lastname": "Floyd",
		"id": 57
	},
	{
		"firstname": "Sylvia",
		"lastname": "Moran",
		"id": 58
	},
	{
		"firstname": "Cadman",
		"lastname": "Kane",
		"id": 59
	},
	{
		"firstname": "Prescott",
		"lastname": "Walton",
		"id": 60
	},
	{
		"firstname": "Lane",
		"lastname": "Shannon",
		"id": 61
	},
	{
		"firstname": "Gillian",
		"lastname": "Chaney",
		"id": 62
	},
	{
		"firstname": "Constance",
		"lastname": "Richard",
		"id": 63
	},
	{
		"firstname": "Cade",
		"lastname": "Brooks",
		"id": 64
	},
	{
		"firstname": "Uta",
		"lastname": "Stafford",
		"id": 65
	},
	{
		"firstname": "Reece",
		"lastname": "Holden",
		"id": 66
	},
	{
		"firstname": "Hadassah",
		"lastname": "Atkinson",
		"id": 67
	},
	{
		"firstname": "Devin",
		"lastname": "Marks",
		"id": 68
	},
	{
		"firstname": "Chase",
		"lastname": "Rush",
		"id": 69
	},
	{
		"firstname": "Kibo",
		"lastname": "Blanchard",
		"id": 70
	},
	{
		"firstname": "Roanna",
		"lastname": "Ballard",
		"id": 71
	},
	{
		"firstname": "Camden",
		"lastname": "Cruz",
		"id": 72
	},
	{
		"firstname": "Cruz",
		"lastname": "Craft",
		"id": 73
	},
	{
		"firstname": "Harriet",
		"lastname": "Mooney",
		"id": 74
	},
	{
		"firstname": "Quin",
		"lastname": "Terrell",
		"id": 75
	},
	{
		"firstname": "Jayme",
		"lastname": "Hayes",
		"id": 76
	},
	{
		"firstname": "Carol",
		"lastname": "Mccray",
		"id": 77
	},
	{
		"firstname": "Scott",
		"lastname": "Snyder",
		"id": 78
	},
	{
		"firstname": "Orson",
		"lastname": "Peck",
		"id": 79
	},
	{
		"firstname": "Mohammad",
		"lastname": "Burnett",
		"id": 80
	},
	{
		"firstname": "Griffith",
		"lastname": "Roach",
		"id": 81
	},
	{
		"firstname": "Justina",
		"lastname": "May",
		"id": 82
	},
	{
		"firstname": "Lamar",
		"lastname": "Simpson",
		"id": 83
	},
	{
		"firstname": "Carter",
		"lastname": "Schultz",
		"id": 84
	},
	{
		"firstname": "Isabelle",
		"lastname": "Griffith",
		"id": 85
	},
	{
		"firstname": "Jason",
		"lastname": "Parker",
		"id": 86
	},
	{
		"firstname": "Ava",
		"lastname": "Hendrix",
		"id": 87
	},
	{
		"firstname": "Alden",
		"lastname": "Dodson",
		"id": 88
	},
	{
		"firstname": "Kitra",
		"lastname": "Hardy",
		"id": 89
	},
	{
		"firstname": "Zeus",
		"lastname": "Kane",
		"id": 90
	},
	{
		"firstname": "Upton",
		"lastname": "Flowers",
		"id": 91
	},
	{
		"firstname": "Leah",
		"lastname": "Mcdonald",
		"id": 92
	},
	{
		"firstname": "Quentin",
		"lastname": "Johns",
		"id": 93
	},
	{
		"firstname": "Logan",
		"lastname": "Walsh",
		"id": 94
	},
	{
		"firstname": "Hayley",
		"lastname": "Petty",
		"id": 95
	},
	{
		"firstname": "Shoshana",
		"lastname": "Carpenter",
		"id": 96
	},
	{
		"firstname": "Jada",
		"lastname": "Carr",
		"id": 97
	},
	{
		"firstname": "Quinn",
		"lastname": "Wise",
		"id": 98
	},
	{
		"firstname": "Laurel",
		"lastname": "Poole",
		"id": 99
	},
	{
		"firstname": "Maggy",
		"lastname": "Garner",
		"id": 100
	}
	]
	})
	
	const removeContact = (id) => {
		setState((state) => {
			let tempList = state.list.filter(contact => contact.id !== id);
			return {
				list:tempList
			}
		})
	}
	
	return(
		<View>
			<FlatList data={state.list}
						renderItem={({item}) => {
							return(
								<View style={styles.rowStyle}>
									<Text style={styles.textStyle}>
										{item.firstname} {item.lastname}
									</Text>
									<Pressable style={styles.buttonStyle}
										onPress={() => removeContact(item.id)}>
										<Text>Remove</Text>
									</Pressable>
								</View>
							)
						}}/>
		</View>
	)
}

const styles = StyleSheet.create({
	rowStyle:{
		flexDirection:"row",
		height:80,
		alignItems:"center",
		justifyContent:"space-between"
	},
	textStyle:{
		fontFamily:"sans-serif",
		fontSize:18,
		fontWeight:"bold"
	},
	buttonStyle:{
		width:80,
		height:50,
		borderRadius:5,
		backgroundColor:"red",
		alignItems:"center",
		justifyContent:"center"
	}
})

export default ContactList;