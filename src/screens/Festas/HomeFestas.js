import React, { Component } from "react";
import { Fab, Container, Header, Title, Button, Icon, Tabs, Tab, Right, Body, StyleProvider } from "native-base";

import TabOne from "./tabIniciados";
import TabTwo from "./tabEncerrados";

import getTheme from "./../../theme/components";
import platform from "./../../theme/variables/platform";

import styles from "./styles";

import { Actions } from 'react-native-router-flux';

class HomeFestas extends Component {
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
          <Tab heading="INICIADOS">
            <TabOne />
          </Tab>
          <Tab heading="ENCERRADOS">
            <TabTwo />
          </Tab>
        </Tabs>

        <Fab style={styles.botaoFab}
          active={this.state.active}
          direction="up"
          containerStyle={{}}
          position="bottomRight"
          onPress={() => Actions.addEvent()}>
          <Icon name="add" />
        </Fab>
        
      </Container>
      </StyleProvider>
    );
  }
}

export default HomeFestas;
