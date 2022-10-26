import React from "react";
import {
  Center,
  NativeBaseProvider,
  extendTheme,
  Fab,
  Icon,
  Modal,
  FormControl,
  Input,
  Button,
  ZStack,
  Heading,
  StatusBar,
  Flex,
} from "native-base";

import { FlatList } from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { AppBar } from "./components/AppBar";
import { OrderCard } from "./components/OrderCard";

const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

const fonts = {
  200: {
    normal: 'Roboto-Light',
    italic: 'Roboto-LightItalic',
  },
  500: {
    normal: 'Roboto-Medium',
  },
};

export const theme = extendTheme({ config, fonts });

export default function App() {
  const [modalVisible, setModalVisible] = React.useState(false);
  const initialRef = React.useRef(null);

  const OrdersFakeData = [
    {
      id: 1,
      name: "Iphone x",
      description: "Seu item foi enviado para fortaleza",
      lastUpdate: "Ultima atualizacao as 14 de junho",
    },
    {
      id: 2,
      name: "Presente da amiga",
      description: "Seu item chegou em curitiba",
      lastUpdate: "18:00",
    },
    {
      id: 3,
      name: "Carregador do celular",
      description: "Your order is in curitiba",
      lastUpdate: "Ultima atualizacao as 18:00",
    },
  ];

  return (
    <NativeBaseProvider theme={theme}>
      <ZStack>
        <AppBar />
      </ZStack>
      <Flex
        _dark={{ bg: "coolGray.800" }}
        _light={{ bg: "light.200" }}
        flex={1}
        style={{
          width: "100%",
          height: "100%",
        }}
        p={2}
      >
        <FlatList
          showsVerticalScrollIndicator={false}
          data={OrdersFakeData}
          refreshing={false}
          renderItem={({ item }) => (
            <OrderCard
              name={item.name}
              description={item.description}
              lastUpdate={item.lastUpdate}
              onPressDelete={() => {
                console.log("Delete");
              }}
            />
          )}
        />

        <Fab
          renderInPortal={false}
          shadow={2}
          size="lg"
          icon={<Icon color="black" as={AntDesign} name="plus" size="sm" />}
          onPress={() => setModalVisible(true)}
        />
      </Flex>
      <Modal
        isOpen={modalVisible}
        onClose={() => setModalVisible(false)}
        initialFocusRef={initialRef}
      >
        <Modal.Content
          style={{
            width: "100%",
            height: "50%",
          }}
        >
          <Modal.CloseButton />
          <Modal.Header>Adicionar</Modal.Header>
          <Modal.Body>
            <FormControl>
              <FormControl.Label>Nome</FormControl.Label>
              <Input />
            </FormControl>
            <FormControl mt="3">
              <FormControl.Label>Codigo de rastreamento</FormControl.Label>
              <Input />
            </FormControl>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button variant="ghost" colorScheme="blueGray" onPress={() => {
                setModalVisible(false);
              }}>
                Cancel
              </Button>
              <Button onPress={() => {
                setModalVisible(false);
              }}>
                Save
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </NativeBaseProvider >
  );
}
