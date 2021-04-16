import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Entypo';
import { calcHeight } from '../metrics';


export default RepoCards = (props) => {
    const roundNumber = (number, decimal) => {
        let numLenght,power=0
        numLenght = ('' + number).length;
        power = Math.pow;
        decimal = power(10, decimal)
        numLenght -= numLenght % 3
        return Math.round(number * decimal / power(10, numLenght)) / decimal + " kMGTPE"[numLenght / 3]
    }
    //Render
    const { data } = props;
    return (
        <View style={styles.container}>
            <Text style={styles.title} >{data.full_name}</Text>
            <Text style={styles.description}>{data.description}</Text>
            <View style={{ flexDirection: 'row', justifyContent: "space-between", marginHorizontal: 5, marginVertical: calcHeight(6) }}>
                <View style={{ flexDirection: 'row' }}>
                    <Image style={styles.image} source={{ uri: data.owner.avatar_url }} />
                    <Text style={styles.userName}>{data.name}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Icon name="star" size={25} color="black" />
                    <Text style={styles.starsNumber}>{roundNumber(data.stargazers_count,1)}</Text>
                </View>
            </View>

        </View>
    )

}
