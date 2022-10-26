import {
    HStack,
    useColorMode,
    IconButton,
    Icon,
} from "native-base";
import { MaterialIcons } from '@expo/vector-icons';

export function SwitchTheme() {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <HStack space={2} alignItems="center">
            {colorMode === "light" ? (
                <IconButton
                    icon={
                        <Icon
                            as={MaterialIcons}
                            name="nightlight-round"
                            size="lg"
                            _dark={{ color: "blueGray.50" }}
                            _light={{ color: "coolGray.800" }}
                        />}
                    onPress={toggleColorMode}
                />
            ) : (
                <IconButton
                    icon={
                        <Icon
                            as={MaterialIcons}
                            name="wb-sunny"
                            size="lg"
                            _dark={{ color: "blueGray.50" }}
                            _light={{ color: "coolGray.800" }}
                        />}
                    onPress={toggleColorMode}
                />
            )}
        </HStack>
    );
}
