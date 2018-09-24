import React, { Component } from "react";
import { Text, Radio, Container, Header, Label, Title, ListItem, Content, Button, Icon, Body, Left, Right, Item, Input, Form, StyleProvider } from "native-base";

import styles from "./styles";

import getTheme from "../../theme/components";
import platform from "../../theme/variables/platform";

import { Actions } from 'react-native-router-flux';

//preenchimento de CEP
//<script src="https://cdn.jsdelivr.net/npm/cep-promise/dist/cep-promise.min.js"></script>

class AddEmpresas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            radio1: true,
            radio2: false,
            radio3: true,
            radio4: false,
            radio5: false
        };
    }
    radio1PFisica() {
        this.setState({
            radio1: true,
            radio2: false
        });
    }
    radio2PJuridica() {
        this.setState({
            radio1: false,
            radio2: true
        });
    }
    radio3Festa() {
        this.setState({
            radio3: true,
            radio4: false,
            radio5: false
        });
    }
    radio4Bar() {
        this.setState({
            radio3: false,
            radio4: true,
            radio5: false
        });
    }
    radio5Ambos() {
        this.setState({
            radio3: false,
            radio4: false,
            radio5: true
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
                            <Title>Cadastrar Empresa</Title>
                        </Body>
                        <Left />
                    </Header>

                    <Content>
                        <Form>
                            <ListItem noBorder
                                selected={this.state.radio1}
                                onPress={() => this.radio1PFisica()}>
                                <Left>
                                    <Text>Pessoa Física</Text>
                                </Left>
                                <Right>
                                    <Radio
                                        selected={this.state.radio1}
                                        onPress={() => this.radio1PFisica()} />
                                </Right>
                            </ListItem>
                            <ListItem
                                selected={this.state.radio2}
                                onPress={() => this.radio2PJuridica()}>
                                <Left>
                                    <Text>Pessoa Jurídica</Text>
                                </Left>
                                <Right>
                                    <Radio
                                        selected={this.state.radio2}
                                        onPress={() => this.radio2PJuridica()} />
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
                            
                            <ListItem noBorder style={{ marginBottom: -15, marginTop: 10}}>
                                <Text>Categoria:</Text>
                            </ListItem>
                            
                            <ListItem noBorder
                                selected={this.state.radio3}
                                onPress={() => this.radio3Festa()}>
                                <Left>
                                    <Text>Festa</Text>
                                </Left>
                                <Right>
                                    <Radio
                                        selected={this.state.radio3}
                                        onPress={() => this.radio3Festa()} />
                                </Right>
                            </ListItem>
                            <ListItem noBorder
                                selected={this.state.radio4}
                                onPress={() => this.radio4Bar()}
                            >
                                <Left>
                                    <Text>Bar</Text>
                                </Left>
                                <Right>
                                    <Radio
                                        selected={this.state.radio4}
                                        onPress={() => this.radio4Bar()}
                                    />
                                </Right>
                            </ListItem>
                            <ListItem 
                                noBorder
                                selected={this.state.radio5}
                                onPress={() => this.radio5Ambos()}
                            >
                                <Left>
                                    <Text>Ambos</Text>
                                </Left>
                                <Right>
                                    <Radio
                                        selected={this.state.radio5}
                                        onPress={() => this.radio5Ambos()}
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

export default AddEmpresas;