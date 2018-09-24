import React, { Component } from "react";
import { StyleSheet } from 'react-native'
import { Fab, Container, Header, Title, Content, Button, Icon, List, ListItem, Text, Left, Right, Body, StyleProvider } from "native-base";

import getTheme from "../../theme/components";
import platform from "../../theme/variables/platform";

import { Actions } from 'react-native-router-flux';

import styles from "./styles";

const datas = [
  "Açaí  Biruta",
  "Botequim",
  "Coliseu Pub",
  "Complexo Marina Bay",
  "Curral do Parque",
  "Dom Spetto",
  "Espaço Náutico Marine Club",
  "Lamusique",
  "Sunset Gold Mar",
  "Maui Sunset Club",
  "Mormaço Bar & Arte",
  "The Wall"  
];

class ListLocaisFestas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }

  render() {
    return (
      <StyleProvider style={getTheme(platform)}>
        <Container style={styles.container}>
          <Header>
            <Left>
              <Button transparent onPress={() => this.props.navigation.goBack()}>
                <Icon name="arrow-back" />
              </Button>
            </Left>
            <Body>
              <Title>Locais de Festas</Title>
            </Body>
            <Left />
          </Header>

          <Content>
            <List>
              {datas.map((data, i) => (
                <ListItem onPress={() => Actions.editarLocaisFestas()}>
                  <Left>
                    <Text numberOfLines={1}>{data}</Text>
                  </Left>
                  <Right>
                    <Icon name="arrow-forward" />
                  </Right>
                </ListItem>
              ))}
            </List>
          </Content>

          <Fab style={styles.botaoFab}
            active={this.state.active}
            direction="up"
            containerStyle={{}}
            position="bottomRight"
            onPress={() => Actions.addLocaisFestas()}>
            <Icon name="add" />
          </Fab>

        </Container>
      </StyleProvider>
    );
  }
}

export default ListLocaisFestas;