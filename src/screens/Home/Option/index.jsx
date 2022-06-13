import { Image } from "react-native"
import { Container, Dot, DotImage, Title } from "./styles"

const Option = ({ title, image, ...props }) => {
	return (
		<Container {...props}>
			<Dot>
				<DotImage source={image} />
			</Dot>
			<Title>{title}</Title>
		</Container>
	)
}

export default Option