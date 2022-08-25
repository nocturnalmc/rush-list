import { useState, useContext } from 'react';
import {
  VStack,
  FormControl,
  Input,
  Button,
  FlatList,
  HStack,
  Text,
  IconButton,
  Icon,
} from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Ionicons from '@expo/vector-icons/Ionicons';

import { GlobalAppContext } from '../context/globalAppContext';

export default function Main() {
  const { dummyValue } = useContext(GlobalAppContext);

  const [rushList, setRushList] = useState(['ikan', 'masin']);
  const [rushText, setRushText] = useState('mula');

  const handleAdd = async () => {
    // do something...
  };

  return (
    <>
      <VStack alignItems='center' mt='5'>
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
          renderItem={(singleRush) => (
            <HStack
              space='3'
              m='1'
              borderWidth='3'
              borderColor='red'
              borderRadius='lg'
            >
              <Text fontSize='lg'>{singleRush.index + 1}</Text>
              <Text>{singleRush.item}</Text>
              <IconButton
                size='md'
                icon={<Icon as={Ionicons} name='trash-sharp' />}
              />
            </HStack>
          )}
        />
      </VStack>
    </>
  );
}
