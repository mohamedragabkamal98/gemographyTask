import { StyleSheet } from 'react-native';
import metrics, { calcHeight, calcWidth } from '../metrics';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
        backgroundColor: "white",
        marginHorizontal: calcWidth(8)
    },
    title: {
        fontSize: calcWidth(16),
        fontWeight: "bold",
        marginVertical: calcHeight(3),
    },
    description: {
        fontSize: calcWidth(14),
        width: metrics.screenWidth * 0.8,
        marginVertical: calcHeight(3)
    },
    starsNumber: {
        fontWeight: 'bold',
        paddingTop: calcHeight(3),
        paddingHorizontal: calcWidth(3),
        fontSize:calcWidth(14)
    },
    image: {
        height: 25,
        width: 25,
        // borderRadius: 44 / 2,
    },
    userName:{
        fontWeight: 'bold',
        paddingTop: calcHeight(3),
        paddingHorizontal: calcWidth(6)
    }
});

export default styles;
