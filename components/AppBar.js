import React from 'react';
import { VStack, HStack, Button, IconButton, Icon, Text, NativeBaseProvider, Center, Box, StatusBar } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { SwitchTheme } from '../components/SwitchTheme';

export function AppBar() {
    return <>
        <StatusBar
            barStyle="light-content"
            _dark={{ bg: "coolGray.800" }}
            _light={{ bg: "light.200" }}
        />
        <Box
            safeAreaTop
            _dark={{ bg: "coolGray.800" }}
            _light={{ bg: "light.200" }}
        />
        <HStack
            _dark={{ bg: "coolGray.800" }}
            _light={{ bg: "light.200" }}
            px="1"
            py="3"
            justifyContent="space-between"
            alignItems="center"
        >
            <SwitchTheme />
            <HStack alignItems="center">
                <Text
                    _dark={{ color: "blueGray.50" }}
                    _light={{ color: "coolGray.800" }}
                    fontSize="20"
                    fontWeight="bold">
                    Meus rastreamentos
                </Text>
            </HStack>
            <IconButton
                icon={<Icon as={MaterialIcons}
                    name="help-outline"
                    size="lg"
                    _dark={{ color: "blueGray.50" }}
                    _light={{ color: "coolGray.800" }}
                />}
            />
        </HStack>
    </>;
}
