import { Image, TouchableOpacity } from "react-native"
import { Dot, Title } from "./styles"

const Option = ({ title, image, ...props }) => {
	return (
		<TouchableOpacity {...props}>
			<Dot>
				<Image source={image} />
			</Dot>
			<Title>{title}</Title>
		</TouchableOpacity>
	)
}

export default Option