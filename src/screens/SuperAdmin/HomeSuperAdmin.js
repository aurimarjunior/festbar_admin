import React, { Component } from "react";
import { Icon, Fab, Container, Header, Title, Button, Tabs, Tab, Right, Body, StyleProvider } from "native-base";

import TabOne from "./tabListSolicitEmp";
import TabTwo from "./tabListEmpCad";

import getTheme from "../../theme/components";
import platform from "../../theme/variables/platform";

import styles from "./styles";

import { Actions } from 'react-native-router-flux';

class HomeSuperAdmin extends Component {
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
                <Icon name="search" />
              </Button>
              <Button transparent
                onPress={() => Actions.listarLocaisFestas()}>
                <Icon name="map" />
              </Button>
            </Right>
          </Header>


          <Tabs>
            <Tab heading="SOLICITAÇÕES">
              <TabOne />
            </Tab>
            <Tab heading="CADASTRADAS">
              <TabTwo />
            </Tab>
          </Tabs>

          <Fab style={styles.botaoFab}
            active={this.state.active}
            direction="up"
            containerStyle={{}}
            position="bottomRight"
            onPress={() => Actions.addEmpresas()}>
            <Icon name="add" />
          </Fab>

        </Container>
      </StyleProvider>
    );
  }
}

export default HomeSuperAdmin;
