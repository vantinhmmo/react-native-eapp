import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../../hooks';


const styles = (Colors: any) => StyleSheet.create({
    mainContainer: {
        paddingHorizontal: 20,
        paddingVertical: 30,
    },
    listTileContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 30
    },
    item: {
        width: 180,
        height: 320,
        marginRight: 15,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: Colors.white,
        overflow: 'hidden'
    },
    shadowProp: {
        shadowColor: "#ddd",
        shadowOffset: {
            width: 3,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    title: {
        paddingHorizontal: 15,
        paddingVertical: 5,
        fontSize: 18,
        color: '#6b6b6b'
    },
    itemDesc: {
        paddingVertical: 5,
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        backgroundColor: '#eee',
        alignItems: 'center'
    }
});


type ItemProps = { title: string, image?: string, id?: string };

const ComicsList = ({ navigation, data, heading }: any) => {

    const { Layout, Images, Colors, Gutters } = useTheme();

    const onPressItem = (item: any) => {
        navigation.navigate('Comic', { item })
    }

    const Item = (item: ItemProps) => (
        <TouchableOpacity
            style={[styles(Colors).item, styles(Colors).shadowProp]}
            onPress={() => onPressItem(item)}
        >
            <View style={{ flexGrow: 1 }}>
                <Image source={Images.tom_dark} style={{ flex: 1, width: null, height: null }} />
            </View>
            <Text style={[styles(Colors).title]}>{item.title}</Text>
            <View style={[Layout.row, styles(Colors).itemDesc]}>
                <Text style={{ fontSize: 16 }}>1982</Text>
                <View style={[Layout.row]}>
                    <Image source={Images.gemIcon} style={[Gutters.tinyRMargin, { width: 20, height: 20 }]} />
                    <Text style={{ fontSize: 16 }}>6.99</Text>
                </View>
            </View>
        </TouchableOpacity >
    );

    return (
        <View style={styles(Colors).mainContainer}>
            <View style={[Layout.fullWidth, styles(Colors).listTileContainer]}>
                <Text style={{ color: Colors.white, fontSize: 20, width: 80 }}>{heading}</Text>
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

export default ComicsList;
