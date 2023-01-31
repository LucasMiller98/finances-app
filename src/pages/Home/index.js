import { Text, View, FlatList } from 'react-native';
import { styles } from './styles/styles.js'
import { Header } from '../../components/Header'
import { Balance } from '../../components/Balance'
import { Moviments } from '../../components/Moviments'
import { Actions } from '../../components/Actions/index.js';

export function Home() {

  const list = [
    {
      id: 1,
      label: 'Boleto conta de luz ',
      value: '300, 90',
      date: '01/01/2023',
      type: 0
    },

    {
      id: 2,
      label: 'Pix ',
      value: '2.500, 00',
      date: '16/01/2023',
      type: 1
    },

    {
      id: 3,
      label: 'Salário ',
      value: '7.200, 00',
      date: '31/01/2023',
      type: 1
    }
  ]
  
  return (
    <View style={styles.container}>
      <Header name='Lucas Miller' />

      <Balance balance='9.250, 90' expenses='-527, 00' />

      <Actions />

      <Text style={styles.title}>
        Últimas movimentações
      </Text>

      <FlatList 
        style={styles.list}
        data={list}
        keyExtractor={item => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Moviments data={item} />}
      />
    </View>
  );
}