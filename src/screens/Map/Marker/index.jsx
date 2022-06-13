import { View } from 'react-native';
import { Marker as MarkerContainer, Callout } from 'react-native-maps';
import {categories} from '../../../utils/categories'

import { Pin, PinImage } from './styles';

const Marker = ({ title, category, pinImage, ...props }) => {

	return (
		<MarkerContainer {...props}  >
			<Pin>
				<PinImage source={categories.find(element => element.title === category).image} />
			</Pin>
		</MarkerContainer>
	)
}

export default Marker