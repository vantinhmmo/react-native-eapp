import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
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
        height: 600,
        marginRight: 30,
        borderWidth: 1,
        borderRadius: 20,
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
        height: 50,
        marginTop: 20,
        paddingHorizontal: 20,
        fontSize: 30,
        color: '#6b6b6b'
    },
    itemDesc: {
        width: '100%',
        height: 60,
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
                <Text style={{ fontSize: 20 }}>1982</Text>
                <View style={[Layout.row]}>
                    <Image source={Images.gemIcon} style={[Gutters.tinyRMargin, { width: 30, height: 30 }]} />
                    <Text style={{ fontSize: 24 }}>6.99</Text>
                </View>
            </View>
        </TouchableOpacity >
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

export default ComicsList;
