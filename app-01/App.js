import { Text, View, Image, ScrollView } from 'react-native';


export default function App() {
  return (
    <ScrollView>
      <Text style={{marginTop: 100, marginLeft: 150}}>App Meu Perfil</Text>

      <Image source={{uri: "https://media.licdn.com/dms/image/C4D03AQHU-SfxbeegBA/profile-displayphoto-shrink_800_800/0/1580387265695?e=2147483647&v=beta&t=UPTMplHX2u3fihlp_Oru01ivBf8u6GTfWF-Bsa9Yq3E"}} style={{ marginTop: 30, marginLeft: 100, width: 200, height: 200}} />

      <View style={{marginTop: 30, marginLeft: 30}}>
        <Text>Dados Pessoais:</Text>
        <View style={{marginLeft: 20}}>
          <Text>Nome: Murillo Nonato Silva</Text>
          <Text>Idade: 21</Text>
          <Text>CPF: 504.xxx.xxx-xx</Text>
        </View>
      </View>

      <View style={{marginTop: 30, marginLeft: 30}}>
        <Text>Formação:</Text>
        <View style={{marginLeft: 20}}>
          <Text>Técnico em Informática para Internet</Text>
          <Text>Início e Término: 2018 - 2019</Text>
          <Text>ETEC de Praia Grande</Text>
        </View>

        <View style={{marginLeft: 20, marginTop: 15}}>
          <Text>Análise e Desenvolvimento de Sistemas</Text>
          <Text>Início e Término: 2021 - 2023</Text>
          <Text>FATEC de Praia Grande</Text>
        </View>
      </View>

      <View style={{marginTop: 30, marginLeft: 30}}>
        <Text>Experiência:</Text>
        <View style={{marginLeft: 20}}>
          <Text>Estagiário em Desenvolvimento de Software</Text>
          <Text>06/2022 - Atualmente</Text>
          <Text>Santos Port Authority</Text>
        </View>
      </View>

      <View style={{marginTop: 30, marginLeft: 30}}>
        <Text>Projetos:</Text>
        <View style={{marginLeft: 20, marginBottom: 30}}>
          <Text>Aplicativo para os funcionários da Santos Port Authority visualizarem a situação dos navios, criado com React Native onde consumia um API já criada pelo time senior. Permitiram colocar esse projeto em nosso portfólio</Text>
          <Text style={{marginTop: 10}}>Link: https://github.com/MurilloNS/spa-apk</Text>
          <Text>Santos Port Authority</Text>
        </View>
      </View>
    </ScrollView>
  );
}
