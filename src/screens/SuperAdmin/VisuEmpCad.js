import React, { Component } from "react";
import { Text, Radio, Container, Switch, Header, Label, Title, ListItem, Content, Button, Icon, Body, Left, Right, Item, Input, Form, StyleProvider } from "native-base";

import styles from "./styles";

import getTheme from "../../theme/components";
import platform from "../../theme/variables/platform";

import { Actions } from 'react-native-router-flux';


class VisuEmpCad extends Component {
    constructor(props) {
        super(props);
        this.state = {
            radioCategoria: true
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
                            <Title>Cadastro</Title>
                        </Body>
                        <Left />
                    </Header>

                    <Content>
                    <Form>
                            <ListItem noBorder style={{ marginBottom: -15, marginTop: 10 }}>
                                <Text>Dados Pessoais:</Text>
                            </ListItem>
                            <ListItem noBorder>
                                <Item floatingLabel>
                                    <Label>Nome completo</Label>
                                    <Input />
                                </Item>
                            </ListItem>
                            <ListItem noBorder>
                                <Left>
                                    <Item floatingLabel>
                                        <Label>CPF</Label>
                                        <Input />
                                    </Item>
                                </Left>
                                <Body>
                                    <Item floatingLabel>
                                        <Label>Contato</Label>
                                        <Input />
                                    </Item>
                                </Body>
                            </ListItem>
                            <ListItem noBorder>
                                <Item floatingLabel>
                                    <Label>E-mail</Label>
                                    <Input />
                                </Item>
                            </ListItem>

                            <ListItem noBorder style={{ marginBottom: -15, marginTop: 10 }}>
                                <Text>Sobre o estabelecimento:</Text>
                            </ListItem>

                            <ListItem noBorder>
                                <Left>
                                    <Item floatingLabel>
                                        <Label>Nome Fantasia</Label>
                                        <Input />
                                    </Item>
                                </Left>
                                <Body>
                                    <Item floatingLabel>
                                        <Label>CNPJ</Label>
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
                                        <Label>Estado</Label>
                                        <Input />
                                    </Item>
                                </Body>
                            </ListItem>

                            <ListItem noBorder style={{ marginBottom: -10, marginTop: 15 }}>
                                <Text>Categoria:</Text>
                            </ListItem>

                            <ListItem noBorder style={{ marginBottom: -15 }}
                                selected={this.state.radioCategoria}>
                                <Left>
                                    <Text>Festa/Bar</Text>
                                </Left>
                                <Right>
                                    <Radio style={styles.botaoRadio}
                                        selected={this.state.radioCategoria} />
                                </Right>
                            </ListItem>
                            

                            <ListItem icon style={{ marginBottom: 30, marginTop: 30 }} noBorder>
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
                    </Content>
                </Container>
            </StyleProvider>
        );
    }
}

export default VisuEmpCad;