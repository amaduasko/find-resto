import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { AppLoading, Asset } from 'expo'

import Navigation from './navigation'
import { Block } from './components'

//import images
const images = [
    require('./assets/icons/back.png'),
    require('./assets/icons/plants.png'),
    require('./assets/icons/seeds.png'),
    require('./assets/icons/flowers.png'),
    require('./assets/icons/sprayers.png'),
    require('./assets/icons/pots.png'),
    require('./assets/icons/fertilizers.png'),
    require('./assets/images/plants_1.png'),
    require('./assets/images/plants_2.png'),
    require('./assets/images/plants_3.png'),
    require('./assets/images/explore_1.png'),
    require('./assets/images/explore_2.png'),
    require('./assets/images/explore_3.png'),
    require('./assets/images/explore_4.png'),
    require('./assets/images/explore_5.png'),
    require('./assets/images/explore_6.png'),
    require('./assets/images/avatar.png'),
]

export default function App() {
    const [isLoadingComplete, setisLoadingComplete] = useState(false)
    const handleResourcesAsync = async () => {
        //caching images for performance
        const cacheImages = images.map((img) =>
            Asset.fromModule(img).downloadAsync()
        )

        return Promise.all(cacheImages)
    }

    if (!isLoadingComplete && !props.skipLoadingScreen)
        return (
            <AppLoading
                startAsync={handleResourcesAsync}
                onError={(error) => console.warn(error)}
                onFinish={() => setisLoadingComplete(true)}
            />
        )
    return (
        <Block white>
            <Navigation />
        </Block>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
