import { TouchableOpacity } from "react-native";
import { Image, View, Text } from "react-native";

const Home = ({ navigation }) => {
    return (
        <View style={{ flex: 100 }}>
            <View style={{ flex: 20, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ textAlign: 'center', fontSize: 26, fontWeight: '600' }}>
                    Welcome to Cafe world
                </Text>
            </View>
            <View style={{ flex: 80, alignItems: 'center' }}>
                <TouchableOpacity style={{ width: 200, height: 70, backgroundColor: '#CDF5FD', marginTop: 50, borderRadius: 10 }} onPress={() => navigation.navigate('drink')}>
                    <Image
                        style={{ width: 200, height: 70, backgroundColor: '#CDF5FD', borderRadius: 10 }}
                        source={require('../assets/jewel.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={{ width: 200, height: 70, backgroundColor: '#CDF5FD', marginTop: 50, borderRadius: 10 }} onPress={() => navigation.navigate('drink')}>
                    <Image
                        style={{ width: 200, height: 70, backgroundColor: '#CDF5FD', borderRadius: 10 }}
                        source={require('../assets/javasi.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={{ width: 200, height: 70, backgroundColor: '#CDF5FD', marginTop: 50, borderRadius: 10 }} onPress={() => navigation.navigate('drink')}>
                    <Image
                        style={{ width: 200, height: 70, backgroundColor: '#CDF5FD', borderRadius: 10 }}
                        source={require('../assets/trungnguyen.png')} />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('shop')}
                    style={{
                        marginTop: 50,
                        backgroundColor: '#89CFF3',
                        width: 300,
                        height: 50,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 10
                    }}>
                    <Text style={{ textTransform: "uppercase", fontSize: 18, fontWeight: '600' }}
                    >GET STARTED
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default Home;