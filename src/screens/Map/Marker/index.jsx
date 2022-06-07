import { View } from 'react-native';
import { Marker as MarkerContainer, Callout } from 'react-native-maps';

import { Pin, PinImage } from './styles';

const Marker = ({ title, category, pinImage, ...props }) => {
	const categorys = [
		{ id: '001', title: 'cinema', image: require('../../../../assets/icons/cinema-icon.png') },
		{ id: '002', title: 'música', image: require('../../../../assets/icons/music-icon.png') },
		{ id: '003', title: 'teatro', image: require('../../../../assets/icons/cinema-icon.png') },
		{ id: '004', title: 'tecnologia', image: require('../../../../assets/icons/cinema-icon.png') },
		{ id: '005', title: 'arte', image: require('../../../../assets/icons/cinema-icon.png') },
	]

	return (
		<MarkerContainer {...props}  >
			<Pin>
				<PinImage source={categorys.find(element => element.title === category).image} />
			</Pin>
		</MarkerContainer>
	)
}

export default Marker