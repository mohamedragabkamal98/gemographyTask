import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';



export default Header = (props) => {

    //Render
    const { title } = props;
    return (
        <View style={styles.container}>
            <Text style={styles.title} >{title}</Text>
        </View>
    )

}
