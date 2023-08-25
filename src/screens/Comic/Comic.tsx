import { Image, StyleSheet, Text, View } from 'react-native';
import { useTheme } from '../../hooks';


const styles = (Colors: any) => StyleSheet.create({
    shadowProp: {
        shadowColor: Colors.textGray,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 5,
    },
});


type ItemProps = { title: string, image?: string, id?: string };

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
                    height: 100,
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    backgroundColor: '#fff',
                    borderWidth: 1,
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20,
                    paddingHorizontal: 30,
                }]}>
                    <Text style={[Fonts.textLarge, { color: Colors.textGray }]}>Main kol</Text>
                    <View style={[
                        {

                            width: 60,
                            height: 50,
                            backgroundColor: '#dddddd',
                            borderRadius: 5
                        }
                    ]}>
                        <Text style={[Fonts.textRegular, { textAlign: 'center', paddingTop: 10 }]}>14+</Text>
                    </View>
                </View>
                <View style={[
                    Layout.row, Layout.justifyContentBetween, Layout.alignItemsCenter, {
                        height: 100,
                        paddingHorizontal: 30
                    }
                ]}>
                    <View style={[Layout.row, { flex: 1 }]}>
                        <Image source={Images.heartIcon} style={[Gutters.tinyRMargin, { width: 50, height: 50 }]} />
                        <Text style={{ fontSize: 20, marginTop: 10, marginRight: 10 }}>254</Text>
                        <Image source={Images.commentIcon} style={[Gutters.tinyRMargin, { width: 50, height: 50 }]} />
                        <Text style={{ fontSize: 20, marginTop: 10 }}>124</Text>
                    </View>
                    <View style={[Layout.row, { flex: 1, justifyContent: 'flex-end' }]}>
                        <Image source={Images.shareIcon} style={[Gutters.tinyRMargin, { width: 50, height: 50 }]} />
                        <Image source={Images.saveIcon} style={[Gutters.tinyRMargin, { width: 50, height: 50 }]} />
                    </View>
                </View>
            </View>
            <View style={{
                backgroundColor: '#383838',
                paddingHorizontal: 30,
                paddingTop: 50,
            }}>
                <Text style={{ color: '#b8b8b8', fontSize: 30 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores natus magni debitis,
                    esse at earum pariatur repellendus quis velit sint, 
                </Text>
                <View style={[Layout.row, {
                    height: 100,
                    marginBottom: 10,
                    marginTop: 40,
                }]}>
                    <View style={[Layout.row, Layout.justifyContentBetween, Layout.alignItemsCenter, styles(Colors).shadowProp, {
                        backgroundColor: '#2c2c2c',
                        paddingHorizontal: 20,
                        width: '100%',
                        borderRadius: 20
                    }]}>
                        <Image source={Images.gemIcon} style={[Gutters.tinyRMargin, { width: 30, height: 30 }]} />
                        <View style={{ flexGrow: 1 }}>
                            <Text style={[Fonts.textLight, { fontSize: 30, width: 120 }]}>6.99</Text>
                        </View>
                        <View style={{ width: 1, height: '100%', backgroundColor: '#fff', marginHorizontal: 30, }}></View>
                        <Image source={Images.gemIcon} style={[Gutters.tinyRMargin, { width: 30, height: 30 }]} />
                        <Text style={[Fonts.textLight, { fontSize: 30, width: 150 }]}>BUY NOW</Text>
                    </View>
                </View>
            </View>

        </View>
    );
};

export default Comic;
