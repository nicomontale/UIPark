import React from 'react'
import { View, SafeAreaView, StatusBar } from 'react-native'
import styled from 'styled-components';
import Icon2 from 'react-native-vector-icons/AntDesign'
function App() {

  const details= [
    {
     name: "Lorem Ipsum è un testo ",
     info:"Lorem Ipsum è un testo ",
     image: require('./img/rail.jpg')

    },
    {
      name: "Lorem Ipsum è un testo ",
     info:"Lorem Ipsum è un testo ",
     image: require('./img/scale.jpeg')


    },
    {
      name: "Lorem Ipsum è un testo ",
     info:"Lorem Ipsum è un testo",
     image: require('./img/mennea2.jpg')
    }
  ]
  return (
    <Container>
    <StatusBar barStyle="light-content"/>
    <DetailBackground source={require("./img/mennea2.jpg")}>
    <SafeAreaView>
    <MenuBar>
    <Back>
    <Icon2 name="arrowleft" size={24} color="#fff"/>
    <Text bold style={{marginLeft: 10, color: "white", fontSize: 20}}>Mennea</Text>
    </Back>
    <Icon2 name="heart" size={24} color="#fff"/>
    </MenuBar>
    <SkateDet>
    <Text title heavy>Skate Park</Text>
    <Divider/>
    <Text bold>Rail</Text>
    <Text bold >Box</Text>
    <Text bold >Ramp</Text>
    </SkateDet>
    <Button>
    <Text bold small>Learn More</Text>
    </Button>
    </SafeAreaView>
    
    </DetailBackground>
    <SkateContainer>
    <Text dark heavy large>
    Details
    
    
    </Text>
    <Text dark small >
  123445 details
    
    </Text>
    <Detail>{details.map((detail, index) =>{
      return (
        <Sk key={index}>
        <SkImage source={detail.image}/>
        <SkInfo>
        <Text dark bold>{detail.name}</Text>
        <Text dark  bold>{detail.info}</Text>
        </SkInfo>
        <Icon2 name="heart" size={24} color="#fff"/>
        </Sk>
       
      )
    
      })}

    </Detail>
    
    </SkateContainer>
      
    </Container>
  )
}

export default App


const Container = styled.View`
flex: 1;
background: rgb(33, 41, 46);

`

const DetailBackground = styled.ImageBackground`
width: 100%;

`
const Text = styled.Text`
color: ${(props)=> (props.dark ? "#fff": "#000")};
font-family:"AvenirNext-Regular;
${({title, large, small})=> {
  switch(true) {
    case title:
    return `font-size: 32px`;
    case large:
    return `font-size: 20px`;
    case small:
    return `font-size: 13px`;

  }

  
}}

${({bold, heavy})=> {
  switch(true) {
  case bold:
    return 'font-weight: 600';
    case heavy:
    return 'font-weight: 700';
  }
}}
`

const MenuBar = styled.View`
flex-direction: row;
justify-content: space-between
`
const Back = styled.View`
flex-direction: row;
align-items: center;
`

const SkateDet= styled.View`
padding: 0 32px;
margin: 200px 0 15px 0px;

`
const Divider = styled.View`
border-bottom-color: #000;
border-bottom-width: 2px;
width: 150px;
margin: 8px 0px;

`
const Button = styled.TouchableOpacity`
margin: 0 0 30px 32px;
background-color: rgba(255, 255, 255, 0.3);
align-self: flex-start;
padding: 5px 18px;
border-radius: 100px;
`

const SkateContainer = styled.View`
margin-top: -18px;
padding: 50px;
background-color: rgb(33, 41, 46);
border-top-left-radius: 24px;
border-top-right-radius: 24px;
`

const Detail = styled.View`
margin-top: 25px;
`

const Sk = styled.View`
flex-direction: row;
align-items:center;
margin-bottom: 25px;
`

const SkImage= styled.Image`
width: 60px;
height: 60px;
border-radius: 8px;

`

const SkInfo = styled.View`
flex: 1;
margin-left: 12px;

`