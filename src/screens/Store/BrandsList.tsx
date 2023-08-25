import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { useTheme } from '../../hooks';


const styles = (Colors: any) => StyleSheet.create({
    mainContainer: {
        paddingHorizontal: 30,
        paddingVertical: 40,
    },
    listTileContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 30
    },
    item: {
        width: 300,
        height: 400,
        marginRight: 30,
        borderWidth: 1,
        borderRadius: 20,
        backgroundColor: Colors.white,
        overflow: 'hidden'
    },
    shadowProp: {
        shadowColor: Colors.primary,
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
});


type ItemProps = { title: string, image?: string, id?: string };

const BrandsList = ({ data, heading }: any) => {
    const { Layout, Images, Colors } = useTheme();
    
    const Item = ({ title }: ItemProps) => (
        <View style={[styles(Colors).item, styles(Colors).shadowProp]}>
            <View style={{ flexGrow: 1 }}>
                <Image source={Images.tom_dark} style={{ flex: 1, width: null, height: null }} />
            </View>
        </View>
    );

    return (
        <View style={styles(Colors).mainContainer}>
            <View style={[Layout.fullWidth, styles(Colors).listTileContainer]}>
                <Text style={{ color: Colors.white, fontSize: 30, width: 120 }}>{heading}</Text>
                <View style={{ height: 2, flexGrow: 1, flex: 1, backgroundColor: Colors.white, alignSelf: 'flex-end' }}></View>
            </View>
            <FlatList
                horizontal
                contentContainerStyle={[Layout.row]}
                data={data}
                renderItem={({ item }) => <Item title={item.title} />}
                keyExtractor={item => item.id}
            />
        </View>
    );
};

export default BrandsList;
