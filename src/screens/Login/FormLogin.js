import React, { Component } from "react";
import { Image, View, Icon, Container, Content, Button, Item, Label, Input, Form, Text, StyleProvider } from "native-base";

import styles from "./styles";
import teacher1 from "../../images/pp.jpg";

import getTheme from "./../../theme/components";
import platform from "./../../theme/variables/platform";

import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

const FormLogin = props => {
    return (
      <StyleProvider style={getTheme(platform)}>
        <Container style={styles.container}>
          <Content>
          </Content>
          <Content padder style={styles.formulario}>     
            <Form>             
              <Item>
                <Icon active name="person"/>
                <Input placeholder="E-mail"/>
              </Item>
              <Item>
                <Icon active name="unlock"/>
                <Input placeholder="Senha" secureTextEntry/>
              </Item>
            </Form> 
          
              <Button style={styles.botao} block 
                onPress={() => Actions.homeSuperAdmin()}>
                <Text>ENTRAR</Text>
              </Button>
              <Label style={{textAlign: 'center', marginTop:-8}} 
                onPress={() => Actions.formRecupSenha()}> 
                Esqueceu sua senha?
              </Label>
          </Content>
        </Container>
      </StyleProvider>
    );
  }

const mapStateToProps = state => (
  {
    email: state.AutenticacaoReducer.email,
    senha: state.AutenticacaoReducer.senha
  }
)

export default connect(mapStateToProps, null)(FormLogin);
