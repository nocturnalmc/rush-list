import { useState, useContext } from 'react';
import { VStack, Input, Text } from 'native-base';

import { GlobalAppContext } from '../context/globalAppContext';

export default function Main() {
  const { dummyValue } = useContext(GlobalAppContext);

  const [rushText, setRushText] = useState('mula');

  return (
    <>
      <VStack alignItems='center'>
        <Input
          onChangeText={(text) => setRushText(text)}
          placeholder="Put what you're rushing for"
          w='75%'
          my='3'
        />
        <Text>{rushText}</Text>
        <Text>{dummyValue}</Text>
      </VStack>
    </>
  );
}
