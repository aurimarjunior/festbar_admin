import React, { Component } from "react";
import { IconNB, View, Container, Header, Title, Button, Icon, Tabs, Tab, Right, Left, Body, StyleProvider } from "native-base";

import TabOne from "./tabPerfil";
import TabTwo from "./tabCardapio";
import TabThree from "./tabFotos";

import getTheme from "./../../theme/components";
import platform from "./../../theme/variables/platform";

import { Actions } from 'react-native-router-flux';

class HomeBares extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }

  render() {
    return (
      <StyleProvider style={getTheme(platform)}>
       <Container>
        <Header noLeft hasTabs >
          <Body>
            <Title>Festbar Admin</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="more" />
            </Button>
          </Right>
        </Header>
        

        <Tabs>
          <Tab heading="PERFIL">
            <TabOne />
          </Tab>
          <Tab heading="CARDÁPIO">
            <TabTwo />
          </Tab>
          <Tab heading="FOTOS">
            <TabThree />
          </Tab>
        </Tabs>

      </Container>
      </StyleProvider>
    );
  }
}

export default HomeBares;