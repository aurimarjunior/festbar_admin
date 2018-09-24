import React, { Component } from "react";
import { Text, Container, Header, Label, Title, ListItem, Content, Button, Icon, Body, Left, Right, Item, Input, Form, StyleProvider } from "native-base";

import styles from "./styles";

import getTheme from "../../theme/components";
import platform from "../../theme/variables/platform";

import { Actions } from 'react-native-router-flux';

//preenchimento de CEP
//<script src="https://cdn.jsdelivr.net/npm/cep-promise/dist/cep-promise.min.js"></script>

class AddLocaisFestas extends Component {
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
              <Title>Cadastrar Local</Title>
            </Body>
            <Left />
          </Header>

          <Content>
            <Form>
              <ListItem noBorder>
                <Item floatingLabel>
                  <Label>Nome</Label>
                  <Input />
                </Item>
              </ListItem>
              <ListItem noBorder>
                <Left>
                  <Item floatingLabel>
                    <Label>CEP</Label>
                    <Input />
                  </Item>
                </Left>
                <Body>
                  <Item floatingLabel>
                    <Label>Estado</Label>
                    <Input />
                  </Item>
                </Body>
              </ListItem>
              <ListItem noBorder>
                <Left>
                  <Item floatingLabel>
                    <Label>Cidade</Label>
                    <Input />
                  </Item>
                </Left>
                <Body>
                  <Item floatingLabel>
                    <Label>Bairro</Label>
                    <Input />
                  </Item>
                </Body>
              </ListItem>
              <ListItem noBorder>
                <Left>
                  <Item floatingLabel>
                    <Label>Rua</Label>
                    <Input />
                  </Item>
                </Left>
                <Right>
                  <Item floatingLabel>
                    <Label>Nº</Label>
                    <Input />
                  </Item>
                </Right>
              </ListItem>
              <ListItem noBorder>
                <Left>
                  <Item floatingLabel>
                    <Label>Latitude</Label>
                    <Input />
                  </Item>
                </Left>
                <Body>
                  <Item floatingLabel>
                    <Label>Longitude</Label>
                    <Input />
                  </Item>
                </Body>
              </ListItem>
            </Form>
            <Button style={styles.botao} block>
              <Text>CADASTRAR</Text>
            </Button>
          </Content>
        </Container>
      </StyleProvider>
    );
  }
}

export default AddLocaisFestas;