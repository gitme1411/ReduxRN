import {StyleSheet, Text, View, SafeAreaView, Button} from 'react-native';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  counter,
  increment,
  decrement,
  conuterSlice,
} from './redux/ConuterSlice';

export default function CouterView() {
  const counterState = useSelector(counter);
  const dispatch = useDispatch();
  const onPressIncrement = () => {
    dispatch(increment());
  };
  const onPresDecrement = () => {
    dispatch(decrement());
  };
  return (
    <View
      style={{flex: 1, backgroundColor: '#ffffff', justifyContent: 'center'}}>
      <SafeAreaView>
        <View style={{alignItems: 'center'}}>
          <Text>{counterState.counter}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            margin: 5,
          }}>
          <Button title="Increment" onPress={onPressIncrement}></Button>
          <Button title="Decrement" onPress={onPresDecrement}></Button>
        </View>
        <View></View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({});
