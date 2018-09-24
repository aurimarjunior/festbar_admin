import React, { Component } from "react";
import { Text, Radio, Container, Header, Label, Title, ListItem, Content, Button, Icon, Body, Left, Right, Item, Input, Form, StyleProvider } from "native-base";

import styles from "./styles";

import getTheme from "../../theme/components";
import platform from "../../theme/variables/platform";

import { Actions } from 'react-native-router-flux';

class AddEvent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            radio1: true,
            radio2: false
        };
    }
    radio1Festa() {
        this.setState({
            radio1: true,
            radio2: false
        });
    }
    radio2Bar() {
        this.setState({
            radio1: false,
            radio2: true
        });
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
                            <Title>Cadastrar</Title>
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
                                <Text>Selecione a categoria:</Text>
                            </ListItem>

                            <ListItem noBorder style={{ marginBottom: -15 }}
                                selected={this.state.radio1}
                                onPress={() => this.radio1Festa()}>
                                <Left>
                                    <Text>Festa</Text>
                                </Left>
                                <Right>
                                    <Radio style={styles.botaoRadio}
                                        selected={this.state.radio1}
                                        onPress={() => this.radio1Festa()} />
                                </Right>
                            </ListItem>
                            <ListItem noBorder
                                selected={this.state.radio2}
                                onPress={() => this.radio2Bar()}
                            >
                                <Left>
                                    <Text>Bar</Text>
                                </Left>
                                <Right>
                                    <Radio style={styles.botaoRadio}
                                        selected={this.state.radio2}
                                        onPress={() => this.radio2Bar()}
                                    />
                                </Right>
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

export default AddEvent;