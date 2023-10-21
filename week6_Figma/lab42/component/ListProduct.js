function ListProduct({ navigation }) {
    return (
        <View style={{
            display: 'flex',
            // flexDirection: 'row',
            // flex: '1',
            // flexWrap: 'wrap',

        }}>
            <FlatList data={DATA}
                numColumns={2}
                renderItem={({ item }) =>
                    <Item title={item.title}
                        image={item.image}
                        price={item.price} />}
                keyExtractor={item => item.id}
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flex: '1',
                    padding: '25'
                }} />
        </View>
    )

}