/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet} from 'react-native';
import {Header} from 'components';
import AppRoutes from 'routes';
import {Provider} from 'react-redux';
import store from 'reduxApp';

const App = () => {
  return (
    <Provider store={store}>
      <Header label="Anya" />
      <AppRoutes />
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
