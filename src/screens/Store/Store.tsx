import React, { useEffect } from 'react';
import { FlatList, Image, StyleSheet, ScrollView, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../../hooks';
import ComicsList from '../Store/ComicsList';
import BrandsList from '../Store/BrandsList';


const styles = (Colors: any) => StyleSheet.create({
  container: {
    backgroundColor: Colors.primary
  },
  headerContainer: {
    backgroundColor: Colors.statusBar,
    paddingHorizontal: 30,
  },
  headerLogo: {
    flexGrow: 1,
  },
});

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    image: ''
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    image: ''
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d712',
    title: 'Third Item',
    image: ''
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e292d72',
    title: 'Third Item',
    image: ''
  }, {
    id: '58694a0f-3da1-471f-bd96-145571e2s9d72',
    title: 'Third Item',
    image: ''
  }, {
    id: '58694a0f-3da1-471f-bd96-145571e29dd72',
    title: 'Third Item',
    image: ''
  },
];


const Store = ({ navigation }: any) => {
  const { Layout, Images, Colors, Common } = useTheme();

  return (
    <ScrollView style={[Layout.fullSize, styles(Colors).container]}>
      {/* header */}
      <View style={[Layout.row, Layout.justifyContentBetween, Layout.alignItemsCenter, styles(Colors).headerContainer]}>
        <View style={[styles(Colors).headerLogo]}>
          <Image source={Images.logo1} style={{ resizeMode: 'center', width: 100 }} />
        </View>
        <View style={[Layout.row, Layout.justifyContentBetween, { width: 50, columnGap: 10} ]}>
          <TouchableOpacity>
            <Image source={Images.bellIcon} style={{ width: 30, height: 30 }} />
          </TouchableOpacity>
          <TouchableOpacity >
            <Image source={Images.searchIcon} style={{ width: 30, height: 30 }} />
          </TouchableOpacity>
        </View>
      </View>
      <ComicsList
        data={DATA}
        heading='Comics'
        navigation={navigation}
      />
      <BrandsList
        data={DATA}
        heading='Brands'
      />
    </ScrollView>
  );
};

export default Store;
