import { Box, Flex, Text, Heading, Image, IconButton, Icon } from "native-base";
import { MaterialIcons } from '@expo/vector-icons';

export function OrderCard(
    {
        name,
        description,
        lastUpdate,
        onPressDelete,
    }
) {
    return (
        <Flex
            rounded="lg"
            borderColor="coolGray.200"
            borderWidth="1"
            _dark={{
                borderColor: "coolGray.600",
                backgroundColor: "gray.700",
            }} _web={{
                shadow: 2,
                borderWidth: 0
            }} _light={{
                backgroundColor: "gray.50"
            }}
            p={2}
            mb={3}
            flexDirection="row"
            justifyContent={'space-between'}
        >
            <Flex>
                <Heading
                    mb={1}
                >{name}</Heading>
                <Text
                    mb={1}
                >{description}</Text>
                <Text>{lastUpdate}</Text>
            </Flex>
            <IconButton
                ml={3}
                icon={
                    <Icon
                        as={MaterialIcons}
                        name="delete"
                        size="lg"
                        _dark={{ color: "blueGray.50" }}
                        _light={{ color: "coolGray.800" }}
                    />}
                onPress={onPressDelete}
            />
        </Flex>
    );
}