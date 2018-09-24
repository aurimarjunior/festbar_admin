import React, { Component } from "react";
import { View, Image } from 'react-native';
import { Container, Button, Item, Label, Input, Form, Text, StyleProvider } from "native-base";

import styles from "./styles";

import getTheme from "./../../theme/components";
import platform from "./../../theme/variables/platform";

import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

const logo = require("../../images/logo.jpg");

class FormLogin extends Component {
  render() {
    return (
      <StyleProvider style={getTheme(platform)}>
        <Container style={styles.container}>
          <View style={styles.logo}>
            <Image source={logo} />
          </View>

          <Form style={styles.formulario}>
            <Item floatingLabel>
              <Label>E-mail</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Senha</Label>
              <Input secureTextEntry />
            </Item>

            <Button style={styles.botao} block
              onPress={() => Actions.homeSuperAdmin()}>
              <Text>ENTRAR</Text>
            </Button>

            <Label style={{ textAlign: 'center', marginTop: 1 }}
              onPress={() => Actions.formRecupSenha()}>
              Esqueceu sua senha?
          </Label>
          </Form>
        </Container>
      </StyleProvider>
    );
  }
}

const mapStateToProps = state => (
  {
    email: state.AutenticacaoReducer.email,
    senha: state.AutenticacaoReducer.senha
  }
)

export default connect(mapStateToProps, null)(FormLogin);
