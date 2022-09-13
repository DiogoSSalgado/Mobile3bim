import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ChatNavigation from "../navigations/chat.navigation"
import { ChatScreen, PerfilScreen,MapScreen, CameraScreen, ArquivoScreen, QrCodeScreen, SairScreen, VideoAudioScreen } from "../screens";
import { Ionicons, MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../styles/colors";
import Sair from "../screens/Sair";
import Chat from "../screens/Chat";

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: { backgroundColor: "#B2DCF2"},
        headerTitleAlign: 'center',
        tabBarActiveBackgroundColor: colors.gray,
        tabBarActiveTintColor: colors.white,
        tabBarInactiveBackgroundColor: colors.black,
        tabBarInactiveTintColor: colors.white,
      }}
    >
{/*       <Tab.Screen
        name="Perfil"
        component={PerfilScreen}
        options={{
          tabBarIcon: () => (
            <Ionicons name="person" size={24} color={colors.white} />
          ),
        }}
      />
      <Tab.Screen
        name="Mensagem"
        component={ChatNavigation}
        options={{
          tabBarIcon: () => (
            <Ionicons name="chatbubbles" size={24} color={colors.white} />
          ),
        }}
      /> */}
      <Tab.Screen
       name="Mapa"
       component={MapScreen}
       options={{
         tabBarIcon: () =>(
          <Ionicons name="map" size={24} color={colors.white} />
         ),
       }}
      />
      <Tab.Screen
       name="Camera"
       component={CameraScreen}
       options={{
         tabBarIcon: () =>(
          <Ionicons name="camera" size={24} color={colors.white} />
         ),
       }}
      />
      <Tab.Screen
       name="Arquivos"
       component={ArquivoScreen}
       options={{
         tabBarIcon: () =>(
          <Ionicons name="file-tray-full-outline" size={24} color={colors.white} />
         ),
       }}
      />
      <Tab.Screen
       name="QrCode"
       component={QrCodeScreen}
       options={{
         tabBarIcon: () =>(
          <Ionicons name="qr-code" size={24} color={colors.white} />
         ),
       }}
      />
      <Tab.Screen
       name="Video/Áudio"
       component={VideoAudioScreen}
       options={{
         tabBarIcon: () =>(
          <MaterialCommunityIcons name="video" size={24} color={colors.white} />
         ),
       }}
      />
      <Tab.Screen
       name="Sair"
       component={SairScreen}
       options={{
         tabBarIcon: () =>(
          <MaterialIcons name="logout" size={24} color={colors.white} />
         ),
       }}
      />
      </Tab.Navigator>
  );
}
