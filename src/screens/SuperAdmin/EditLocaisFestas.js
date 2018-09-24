import React, { Component } from "react";
import { Text, Label, ListItem, Switch, Container, Header, Title, Content, Button, Icon, Body, Left, Right, Item, Input, Form, StyleProvider } from "native-base";

import styles from "./styles";

import getTheme from "../../theme/components";
import platform from "../../theme/variables/platform";

import { Actions } from 'react-native-router-flux';

class EditLocaisFestas extends Component {
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
              <Title>Editar Local</Title>
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
              <ListItem icon style={{ marginTop: 15 }} noBorder>
                <Left>
                  <Button style={{ backgroundColor: "#8F8E93" }}>
                    <Icon active name="eye" />
                  </Button>
                </Left>
                <Body>
                  <Text>Status</Text>
                </Body>
                <Right>
                  <Switch value={true} onTintColor="#8C0052" />
                </Right>
              </ListItem>
            </Form>
            <Button style={styles.botao} block>
              <Text>EDITAR</Text>
            </Button>
          </Content>
        </Container>
      </StyleProvider>
    );
  }
}

export default EditLocaisFestas;