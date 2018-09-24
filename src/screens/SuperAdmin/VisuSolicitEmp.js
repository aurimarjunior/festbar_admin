import React, { Component } from "react";
import { Text, Radio, Container, Header, Label, Title, ListItem, Content, Button, Icon, Body, Left, Right, Item, Input, Form, StyleProvider } from "native-base";

import styles from "./styles";

import getTheme from "../../theme/components";
import platform from "../../theme/variables/platform";

import { Actions } from 'react-native-router-flux';


class VisuSolicitEmp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            radio: true
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
                            <Title>Solicitação</Title>
                        </Body>
                        <Left />
                    </Header>

                    <Content>
                        <Form>
                            <ListItem style={{ marginBottom: -10 }} noBorder>
                                <Left>
                                    <Text>Pessoa Física/Jurídica</Text>
                                </Left>
                                <Right>
                                    <Radio selected={this.state.radio} />
                                </Right>
                            </ListItem>

                            <ListItem noBorder>
                                <Item floatingLabel>
                                    <Label>Nome</Label>
                                    <Input />
                                </Item>
                            </ListItem>
                            <ListItem noBorder>
                                <Left>
                                    <Item floatingLabel>
                                        <Label>CPF/CNPJ</Label>
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

                            <ListItem noBorder style={{ marginBottom: -15 }}>
                                <Text>Categoria:</Text>
                            </ListItem>

                            <ListItem noBorder>
                                <Left>
                                    <Text>Festa/Bar/Ambos</Text>
                                </Left>
                                <Right>
                                    <Radio selected={this.state.radio} />
                                </Right>
                            </ListItem>

                            <ListItem noBorder>
                                <Body>
                                    <Button success block style={styles.botao}
                                    /* onPress={() => Actions.()} */>
                                        <Text>APROVAR</Text>
                                    </Button>
                                </Body>
                                <Body>
                                    <Button danger block style={styles.botao}
                                    /* onPress={() => Actions.()} */>
                                        <Text>RECUSAR</Text>
                                    </Button>
                                </Body>
                            </ListItem>
                        </Form>
                    </Content>
                </Container>
            </StyleProvider>
        );
    }
}

export default VisuSolicitEmp;