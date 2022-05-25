import React from 'react';
import { FlatList } from 'react-native'
import Option from '../Option';
import { Container } from './styles';

const data = [
  {id: '001', text: 'cinema', source: '../../../../assets/icons/cinema-icon.png'},
  {id: '002', text: 'música', source: '../../../../assets/icons/cinema-icon.png'},
  {id: '003', text: 'teatro', source: '../../../../assets/icons/cinema-icon.png'},
  {id: '004', text: 'tecnologia', source: '../../../../assets/icons/cinema-icon.png'},
  {id: '005', text: 'arte', source: '../../../../assets/icons/cinema-icon.png'},
]


const OptionsBar = () => {
  return (
    <Container>
      <FlatList
        data={data}
        renderItem={({item}) => <Option text={item.text} source={item.source} />}
        keyExtractor={data.id}
        horizontal
      />
    </Container>
  )
}
export default OptionsBar