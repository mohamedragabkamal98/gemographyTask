import React from 'react';
import { View, Text, Image} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Entypo';
import { calcHeight } from '../metrics';


export default RepoCards = (props) => {

    //Render
    const { data } = props;
    return (
        <View style={styles.container}>
            <Text style={styles.title} >{data.title}</Text>
            <Text style={styles.description}>{data.description}</Text>
            <View style={{ flexDirection: 'row', justifyContent: "space-between", marginHorizontal: 5,marginVertical:calcHeight(6) }}>
                <View style={{ flexDirection: 'row' }}>
                    <Image style={styles.image} source={{ uri: data.avatar }} />
                    <Text style={styles.userName}>{data.name}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Icon name="star" size={25} color="black" />
                    <Text style={styles.starsNumber}>{data.stars}</Text>
                </View>
            </View>

        </View>
    )

}
