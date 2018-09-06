import React, { Component } from "react";
import { View, Fab, Container, Header, Title, Button, Icon, Tabs, Tab, Right, Left, Body, StyleProvider } from "native-base";
import IconAw from 'react-native-vector-icons/FontAwesome';


import TabOne from "./tabSolicitacoes";
import TabTwo from "./tabCadastradas";

import getTheme from "../../theme/components";
import platform from "../../theme/variables/platform";

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
              <IconAw name="location" />
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

        <Fab
          active={this.state.active}
          direction="up"
          containerStyle={{}}
          style={{ backgroundColor: "#5067FF" }}
          position="bottomRight"
          onPress={() => this.setState({ active: !this.state.active })}
        >
          <Icon name="add" />
        </Fab>
        
      </Container>
      </StyleProvider>
    );
  }
}

export default HomeSuperAdmin;
