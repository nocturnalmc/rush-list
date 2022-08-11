import { useState, useContext } from 'react';
import {
  VStack,
  FormControl,
  Input,
  Button,
  FlatList,
  Text,
} from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { GlobalAppContext } from '../context/globalAppContext';

export default function Main() {
  const { dummyValue } = useContext(GlobalAppContext);

  const [rushList, setRushList] = useState(['ikan', 'masin']);
  const [rushText, setRushText] = useState('mula');

  return (
    <>
      <VStack alignItems='center'>
        <FormControl isRequired isInvalid={false} alignItems='center'>
          <Input
            onChangeText={(text) => setRushText(text)}
            placeholder="Put what you're rushing for"
            p='2'
            my='3'
            w='75%'
          />
          <FormControl.ErrorMessage mb='3'>
            What are you rushing for?
          </FormControl.ErrorMessage>
        </FormControl>
        <Button
          onPress={() => {
            alert('hello');
          }}
          colorScheme='primary'
        >
          Add
        </Button>
        <FlatList
          data={rushList}
          renderItem={(singleRush) => <Text>{singleRush.item}</Text>}
        />
      </VStack>
    </>
  );
}
