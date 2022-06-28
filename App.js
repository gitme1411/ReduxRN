import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import store from './redux/Store';
import CouterView from './CouterView';

export default function App() {
  return (
    <Provider store={store}>
      <CouterView></CouterView>
    </Provider>
  );
}

const styles = StyleSheet.create({});
