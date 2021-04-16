import React from 'react'
import { View } from 'react-native'
import LottieView from 'lottie-react-native';
import { calcHeight } from '../metrics';


export default NoData = (props) => {
		return (
		<View
			style={{
				width: '100%',
				height: calcHeight(400),
				backgroundColor: 'transparent',
				position: 'absolute',
				zIndex: 10000,
				// justifyContent: 'center',
				alignItems: 'center',
				alignSelf: 'center'

			}}
		>
			<LottieView source={require('../Animation/NoData.json')} autoPlay loop />
		</View>
	)
}
