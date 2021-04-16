import { StyleSheet } from 'react-native';
import metrics, { calcHeight, calcWidth } from '../metrics';


const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        backgroundColor: "white",
        marginBottom: calcHeight(5),
        backgroundColor:"#F4F4F5",
    },
    title: {
        fontSize: calcWidth(16),
        fontWeight: "bold",
        marginVertical: calcHeight(3),
        alignSelf:'center',
        paddingVertical:calcHeight(20)
    },
});

export default styles;
