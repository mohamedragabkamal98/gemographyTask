import { StyleSheet } from 'react-native';
import metrics, { calcHeight, calcWidth } from '../../components/metrics';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: "white"
    },

    scrollContainer: {
        // alignItems: "center",
        // flex: 1,
        //marginHorizontal:calcWidth(20),
        paddingBottom: calcHeight(20),
        width: calcWidth(375),
    },
  
});

export default styles;
