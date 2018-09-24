import React, { Component, } from "react";
import { Content, List, ListItem, Text, Left, Right, Body } from "native-base";

import { Actions } from 'react-native-router-flux';

const datas = [
  {
    text: "Link Produtora",
    cidade: "Marituba",
    estado: "PA",
    tipo: "Festa"
  },
  {
    text: "Bis Entretenimento",
    cidade: "Ananindeua",
    estado: "PA",
    tipo: "Festa"
  },
  {
    text: "Dom Spetto",
    cidade: "Belém",
    estado: "PA",
    tipo: "Bar"
  },
  {
    text: "Lui Produções",
    cidade: "Macapá",
    estado: "PA",
    tipo: "Festa"
  },
  {
    text: "Emporium",
    cidade: "Belém",
    estado: "PA",
    tipo: "Bar"
  },
  {
    text: "Krishna",
    cidade: "Belém",
    estado: "PA",
    tipo: "Festa"
  }
];

class tabListSolicitEmp extends Component {
  render() {
    return (
      <Content >
        <List >
          {datas.map((data, i) => (
            <ListItem onPress={() => Actions.visualizarSolicitEmp()}>
              <Body>
                <Text>{data.text}</Text>
                <Text numberOfLines={1} note> {data.cidade} | {data.estado}</Text>
              </Body>
              <Right>
                <Text note>{data.tipo}</Text>
              </Right>
            </ListItem>
          ))}
        </List>
      </Content>

    );
  }
}

export default tabListSolicitEmp;