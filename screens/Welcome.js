import React from 'react'
import { StyleSheet } from 'react-native'

import { Button, Block, Text } from '../components'

export default function Welcome() {
    const navigationOptions = {
        header: null,
    }
    return (
        <Block center middle>
            <Block center middle flex={0.3}>
                <Text h1 center bold>
                    Your Home.
                </Text>
                <Text h1 primary>
                    Greener.
                </Text>
            </Block>
            <Text>Welcome</Text>
        </Block>
    )
}

const styles = StyleSheet.create({})
