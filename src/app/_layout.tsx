import { DarkTheme, DefaultTheme, Slot, ThemeProvider, useRouter } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, useColorScheme, View } from "react-native";

SplashScreen.preventAutoHideAsync();

const links = [
  { title: "Ataque e Defesa - Bal", route: "/AtaqueEDefesa/Bal", bcg:"brown", cor:"white"},
  { title: "Ataque e Defesa - Jumok", route: "/AtaqueEDefesa/Jumok", bcg:"brown",cor:"white" },
  { title: "Ataque e Defesa - Pal", route: "/AtaqueEDefesa/Pal", bcg:"brown", cor:"white" },
  { title: "Ataque e Defesa - Son", route: "/AtaqueEDefesa/Son", bcg:"brown", cor:"white" },
  { title: "Comandos Técnicos Gerais", route: "/ComandosTecGeral", bcg:"brown", cor:"white" },
  { title: "Posições - Moa Sogui", route: "/PosicoeBasicasFundamentais/MoaSogui", bcg:"brown", cor:"white" },
  { title: "Posições - Nolpio Sogui", route: "/PosicoeBasicasFundamentais/NolpioSogui", bcg:"brown", cor:"white" },
  { title: "Posições - Tuk Pum Sogui", route: "/PosicoeBasicasFundamentais/TukPumSogui", bcg:"brown", cor:"white" },
  { title: "10º Gub - Faixa Branca", route: "Graduacao/FaixaBranca", bcg:"white", cor:"black" },
  { title: "9º Gub - Faixa Cinza", route: "Graduacao/FaixaCinza", bcg:"gray", cor:"yellow" },
  { title: "8º Gub - Faixa Amarela", route: "Graduacao/FaixaAmarela", bcg:"yellow", cor:"black" },
  { title: "7º Gub - Faixa Laranja", route: "Graduacao/FaixaLaranja", bcg:"orange", cor:"black" },
  { title: "6º Gub - Faixa Verde Claro", route: "Graduacao/FaixaVerdeClaro", bcg:"lightgreen", cor:"black" },
  { title: "5º Gub - Faixa Verde Escuro", route: "Graduacao/FaixaVerdeEscuro", bcg:"darkgreen", cor:"yellow" },
  { title: "4º Gub - Faixa Azul Claro", route: "Graduacao/FaixaAzulClaro", bcg:"lightblue", cor:"black" },
  { title: "3º Gub - Faixa Azul Escuro", route: "Graduacao/FaixaAzulEscuro", bcg:"darkblue", cor:"yellow" },
  { title: "2º Gub - Faixa Vermelha Claro", route: "Graduacao/FaixaVermelhoClaro", bcg:"red", cor:"yellow" },
] as const;

export default function Layout() {
  const colorScheme = useColorScheme();
  const router = useRouter();

  // Garante que o splash seja escondido
  useEffect(() => {
    const hide = async () => {
      await SplashScreen.hideAsync();
    };
    hide();
  }, []);

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      {/* Conteúdo das rotas */}
      <View style={{ flex: 1,marginTop:70}}>
        <Slot />
      </View>

      {/* Menu fixo na base */}
      <View style={styles.footer}>
        <FlatList
          data={links}
          keyExtractor={(item) => item.route}
          horizontal={true}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => router.push(item.route)}
                              style={[styles.item, { backgroundColor: item.bcg }]}>
              <Text style={[styles.link,{ color:item.cor}]}>{item.title}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    backgroundColor: "#1c3d5a",
    padding: 10,
    position: "absolute",
    bottom: 0,
    marginBottom:40,
    width: "100%",
  },
  item: {
    justifyContent:'flex-start',
    marginHorizontal: 8,
    borderBottomWidth:3,
    width:100,
  },
  link: {
    fontWeight: "bold",
  },
});
