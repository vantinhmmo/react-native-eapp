import { Image, StyleSheet, Text, View } from 'react-native';
import { useTheme } from '../../hooks';


const styles = (Colors: any) => StyleSheet.create({
    shadowProp: {
        shadowColor: '#cbcbcb',
        shadowOffset: {
            width: 5,
            height: 10,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 5,
    },
});


const Comic = ({ route }: any) => {
    const { Layout, Images, Fonts, Gutters, Colors } = useTheme();
    const item = route.params

    return (
        <View style={[Layout.fullSize]}>
            <View style={{ flexGrow: 1 }}>
                <Image source={Images.tom_dark} style={{ flex: 1, width: null, height: null }} />
            </View>
            <View style={[{ backgroundColor: Colors.textGray200, }]}>
                <View style={[Layout.row, styles(Colors).shadowProp, {
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    backgroundColor: '#fff',
                    borderWidth: 1,
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    paddingHorizontal: 18,
                    paddingVertical: 20
                }]}>
                    <Text style={[Fonts.textRegular, { color: Colors.textGray }]}>Main kol</Text>
                    <View style={[
                        {

                            backgroundColor: '#dddddd',
                            borderRadius: 5,
                            paddingHorizontal: 10,
                            paddingVertical: 10
                        }
                    ]}>
                        <Text style={[Fonts.textRegular, { textAlign: 'center'}]}>14+</Text>
                    </View>
                </View>
                <View style={[
                    Layout.row, Layout.justifyContentBetween, Layout.alignItemsCenter, {
                        height: 80,
                        paddingHorizontal: 18
                    }
                ]}>
                    <View style={[Layout.row, { flex: 1 }]}>
                        <Image source={Images.heartIcon} style={[Gutters.tinyRMargin, { width: 25, height: 25 }]} />
                        <Text style={{ fontSize: 10, marginTop: 10, marginRight: 10 }}>254</Text>
                        <Image source={Images.commentIcon} style={[Gutters.tinyRMargin, { width: 25, height: 25 }]} />
                        <Text style={{ fontSize: 10, marginTop: 10 }}>124</Text>
                    </View>
                    <View style={[Layout.row, { flex: 1, justifyContent: 'flex-end' }]}>
                        <Image source={Images.shareIcon} style={[Gutters.tinyRMargin, { width: 25, height: 25 }]} />
                        <Image source={Images.saveIcon} style={[Gutters.tinyRMargin, { width: 25, height: 25 }]} />
                    </View>
                </View>
            </View>
            <View style={{
                backgroundColor: '#383838',
                paddingHorizontal: 18,
                paddingTop: 20,
            }}>
                <Text style={{ color: '#b8b8b8', fontSize: 18 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores natus magni debitis,
                    esse at earum pariatur 
                </Text>
                <View style={[Layout.row, {
                    height: 50,
                    marginTop: 20,
                    marginBottom: 10
                }]}>
                    <View style={[Layout.row, Layout.justifyContentBetween, Layout.alignItemsCenter, styles(Colors).shadowProp, {
                        backgroundColor: '#2c2c2c',
                        paddingHorizontal: 10,
                        width: '100%',
                        borderRadius: 10
                    }]}>
                        <Image source={Images.gemIcon} style={[Gutters.tinyRMargin, { width: 18, height: 18 }]} />
                        <View style={{ flexGrow: 1 }}>
                            <Text style={[Fonts.textLight, { fontSize: 18, width: 120 }]}>6.99</Text>
                        </View>
                        <View style={{ width: 1, height: '100%', backgroundColor: '#fff', marginHorizontal: 18, }}></View>
                        <Image source={Images.gemIcon} style={[Gutters.tinyRMargin, { width: 18, height: 18 }]} />
                        <Text style={[Fonts.textLight, { fontSize: 18  }]}>BUY NOW</Text>
                    </View>
                </View>
            </View>

        </View>
    );
};

export default Comic;
