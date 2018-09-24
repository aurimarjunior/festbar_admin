import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, ListItem, Text, Button, Icon, Left, Body, Right } from 'native-base';

const teste1 = require("../../images/teste1.png");
const teste2 = require("../../images/teste2.png");

class tabIniciadas extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Card>
            <CardItem cardBody>
              <Image source={teste1} style={{ height: 200, width: null, flex: 1 }} />
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                </Button>
                <Body>
                  <Text numberOfLines={1}>Villa Mix</Text>
                  <Text numberOfLines={1} note>Cidade Folia</Text>
                </Body>
                <Right>
                  <Text>30 Jan</Text>
                  <Text>22:00h</Text>
                </Right>
              </Left>
            </CardItem>
          </Card>

          <Card>
            <CardItem cardBody>
              <Image source={teste2} style={{ height: 200, width: null, flex: 1 }} />
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                </Button>
                <Body>
                  <Text numberOfLines={1}>Festa das Patroas</Text>
                  <Text numberOfLines={1} note>Hangar</Text>
                </Body>
                <Right>
                  <Text>02 Fev</Text>
                  <Text>23:00h</Text>
                </Right>
              </Left>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

export default tabIniciadas;