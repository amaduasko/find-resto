import React, { useState } from 'react'
import { StyleSheet, TextInput } from 'react-native'
import * as Icon from '@expo/vector-icons'

import Text from './Text'
import Block from './Block'
import Button from './Button'
import { theme } from '../constants'

export default function Input({
    label,
    error,
    secure,
    rightLabel,
    rightStyle,
    onRightPress,
    email,
    phone,
    number,
    style,
    ...props
}) {
    const [toggleSecure, setToggleSecure] = useState(false)

    const RenderLabel = () => {
        return (
            <Block flex={false}>
                {label ? (
                    <Text gray2={!error} accent={error}>
                        {label}
                    </Text>
                ) : null}
            </Block>
        )
    }

    const RenderToggle = () => {
        if (!secure) return null

        return (
            <Button
                style={styles.toggle}
                onPress={() => setToggleSecure(!toggleSecure)}
            >
                {rightLabel ? (
                    rightLabel
                ) : (
                    <Icon.Ionicons
                        color={theme.colors.gray}
                        size={theme.sizes.font * 1.35}
                        name={!toggleSecure ? 'md-eye' : 'md-eye-off'}
                    />
                )}
            </Button>
        )
    }

    const RenderRight = () => {
        if (!rightLabel) return null

        return (
            <Button
                style={[styles.toggle, rightStyle]}
                onPress={() => onRightPress && onRightPress()}
            >
                {rightLabel}
            </Button>
        )
    }

    const isSecure = toggleSecure ? false : secure

    const inputStyles = [
        styles.input,
        error && { borderColor: theme.colors.accent },
        style,
    ]

    const inputType = email
        ? 'email-address'
        : number
        ? 'numeric'
        : phone
        ? 'phone-pad'
        : 'default'

    return (
        <Block flex={false} margin={[theme.sizes.base, 0]}>
            <RenderLabel />
            <TextInput
                style={inputStyles}
                secureTextEntry={isSecure}
                autoComplete='off'
                autoCapitalize='none'
                autoCorrect={false}
                keyboardType={inputType}
                {...props}
            />
            <RenderToggle />
            <RenderRight />
        </Block>
    )
}

const styles = StyleSheet.create({
    input: {
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: theme.colors.black,
        borderRadius: theme.sizes.radius,
        fontSize: theme.sizes.font,
        fontWeight: '500',
        color: theme.colors.black,
        height: theme.sizes.base * 3,
    },
    toggle: {
        position: 'absolute',
        alignItems: 'flex-end',
        width: theme.sizes.base * 2,
        height: theme.sizes.base * 2,
        top: theme.sizes.base,
        right: 0,
    },
})
