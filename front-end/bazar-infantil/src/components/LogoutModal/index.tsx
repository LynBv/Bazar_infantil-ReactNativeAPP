import { View, Text, Image, TouchableOpacity, Modal } from "react-native";
import React from "react";
import { styles } from "./style";
import { PropsModal } from "./type";

const LogoutModal = ({ openModal, handleLogout, handleModal }: PropsModal) => {

  
  return (
    <Modal visible={openModal} animationType="slide">
      <View style={styles.card}>
        <Text> Deseja fazer Logout?</Text>
        <View style={styles.options}>
          <TouchableOpacity onPress={handleLogout}>
            <Text>SIM</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleModal}>
            <Text>NÃO</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default LogoutModal;
