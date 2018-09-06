import React, { Component } from "react";
import { Container, Content, Button, Item, Label, Right, Input, Form, Text, StyleProvider, Header, Left, Icon, Body, Title } from "native-base";
import styles from "./styles";
import getTheme from "./../../theme/components";
import platform from "./../../theme/variables/platform";

class FormLogin extends Component {
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
          <Left/>
        </Header>

        <Content padder style={styles.formulario}>
          <Form>
            <Label style={{ marginLeft: 10, marginRight: 10, marginTop: 10, marginBottom:10}}>
              Insira o e-mail vinculado à sua conta para receber as instruções de recuperação de senha. 
            </Label>
            <Item>
              <Icon active name="person"/>
              <Input placeholder="E-mail"/>
            </Item>
          </Form>
          <Button style={styles.botao} block>
            <Text>RECUPERAR</Text>
          </Button>
        </Content>
      </Container>
      </StyleProvider>
    );
  }
}

export default FormLogin;
