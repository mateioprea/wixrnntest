import React from 'react';
import {Dimensions, TouchableOpacity, View} from 'react-native';

function Header() {
  return (
    <TouchableOpacity onPress={() => console.log('ON TOUCH START')}>
      <View
        style={{
          position: 'absolute',
          top: 0,
          backgroundColor: '#FCD',
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height,
        }}
      />
    </TouchableOpacity>
  );
}

export default Header;
