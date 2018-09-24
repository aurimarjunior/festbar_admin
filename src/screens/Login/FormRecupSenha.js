import React, { Component } from "react";
import { Container, Content, Button, Item, Label, Input, Form, Text, StyleProvider, Header, Left, Body, Title, Icon } from "native-base";

import styles from "./styles";

import getTheme from "./../../theme/components";
import platform from "./../../theme/variables/platform";

class FormRecupSenha extends Component {
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
              <Title>Recuperar senha</Title>
            </Body>
            <Left />
          </Header>

          <Form style={styles.formulario}>
            <Label style={{ marginLeft: 10, marginRight: 10, marginTop: 3, marginBottom: 5 }}>
              Informe seu e-mail para receber as instruções de recuperação de senha.
            </Label>
            <Item floatingLabel>
              <Label>E-mail</Label>
              <Input />
            </Item>
            <Button style={styles.botao} block>
              <Text>RECUPERAR</Text>
            </Button>
          </Form>
        </Container>
      </StyleProvider>
    );
  }
}

export default FormRecupSenha;
