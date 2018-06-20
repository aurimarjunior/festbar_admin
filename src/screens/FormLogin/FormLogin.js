import React, { Component } from "react";
import { Container, Content, Button, Item, Label, Input, Form, Text, StyleProvider } from "native-base";
import styles from "./styles";
import getTheme from "./../../theme/components";
import platform from "./../../theme/variables/platform";

class FormLogin extends Component {
  render() {
    return (
      <StyleProvider style={getTheme(platform)}>
      <Container>
        <Content style={styles.container}>
          <Form>
            <Item floatingLabel>
              <Label>E-mail</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Senha</Label>
              <Input secureTextEntry />
            </Item>
          </Form>
          <Button block style={{ margin: 15, marginTop: 50 }}>
            <Text>ENTRAR</Text>
          </Button>
        </Content>
      </Container>
      </StyleProvider>
    );
  }
}

export default FormLogin;
