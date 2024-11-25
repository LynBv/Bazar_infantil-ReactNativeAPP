import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  Alert,
} from "react-native";
import styles from "./styles";
import * as ImagePicker from "expo-image-picker";
import SelectDropdown from "react-native-select-dropdown";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FotoInserir } from "../../@types/apiTypes";
import axios, { AxiosError } from "axios";

const CreatePostScreen = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [gender, setGender] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState<FotoInserir>({
    dados: "",
    nome: "",
    tipo: "",
  });
  const [imagem, setImagem] = useState<{
    uri: string;
    name: string;
    type: string;
  }>();

  const genderOptions = [
    { title: "MASCULINO" },
    { title: "FEMININO" },
    { title: "UNISSEX" },
  ];

  const ageOptions = [
    { title: "MESES0A3" },
    { title: "MESES3A6" },
    { title: "MESES6A9" },
    { title: "MESES9A12" },
    { title: "MESES12A18" },
    { title: "ANO1" },
    { title: "ANOS2" },
    { title: "ANOS4" },
    { title: "ANOS6" },
    { title: "ANOS8" },
    { title: "ANOS10" },
    { title: "ANOS12" },
    { title: "ANOS14" },
  ];


  const pickImage = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      Alert.alert(
        "Permissão necessária",
        "Precisamos de acesso à galeria para carregar a imagem."
      );
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
      base64: true,
    });

    if (!result.canceled) {
      const base64 = result.assets[0].base64;
      const nome = result.assets[0].fileName;
      const fileUri = result.assets[0].uri;
      const fileExtension = fileUri.split(".").pop();
      const fileType = `image/${fileExtension}`;

      setImage({ dados: base64!, nome: nome!, tipo: fileType });

      setImagem({
        uri: fileUri,
        name: `image.${fileExtension}`,
        type: fileType,
      });
    }
  };

  const handlePost = async () => {
    if (!title || !description || !gender || !age || !price || !image) {
      Alert.alert("Erro", "Por favor, preencha todos os campos!");
      return;
    }

    const token = await AsyncStorage.getItem("@userToken");

    const data = {
      titulo: title,
      descricao: description,
      categoriasGenero: gender,
      categoriaIdade: age,
      preco: price,
      foto: image,
    };

    try {
      const response = await axios.post(
        /* 'http://192.168.0.12:8080/postagem', */
        "http://192.168.0.195:8080/postagem",
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 201) {
        Alert.alert("Sucesso", "Postagem criada com sucesso!");
      } else {
        Alert.alert("Erro", "Falha ao criar a postagem.");
      }
    } catch (error) {
      /* const axiosError = error as AxiosError;
      console.error(axiosError.message + " <-------------llERROKSV");
      console.error(axiosError.stack + " "); */
      Alert.alert("Erro", "Erro ao enviar a postagem");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Criar Postagem</Text>

      <TouchableOpacity style={styles.uploadArea} onPress={pickImage}>
        {imagem ? (
          <Image source={{ uri: imagem.uri }} style={styles.image} />
        ) : (
          <Text style={styles.uploadText}>Carregar Imagem</Text>
        )}
      </TouchableOpacity>

      <TextInput
        style={styles.input}
        placeholder="Título"
        placeholderTextColor="#A8A8A8"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Descrição"
        placeholderTextColor="#A8A8A8"
        value={description}
        onChangeText={setDescription}
        multiline
      />

      <SelectDropdown
        data={genderOptions}
        onSelect={(selectedItem, index) => {
          //console.log(selectedItem, index);
          setGender(selectedItem.title);
        }}
        renderButton={(selectedItem, isOpened) => {
          return (
            <View style={styles.dropdownButtonStyle}>
              <Text style={styles.dropdownButtonTxtStyle}>
                {(selectedItem && selectedItem.title) || "Selecione o Gênero"}
              </Text>
            </View>
          );
        }}
        renderItem={(item, index, isSelected) => {
          return (
            <View
              style={{
                ...styles.dropdownItemStyle,
                ...(isSelected && { backgroundColor: "#D2D9DF" }),
              }}
            >
              <Text style={styles.dropdownItemTxtStyle}>{item.title}</Text>
            </View>
          );
        }}
        showsVerticalScrollIndicator={false}
        dropdownStyle={styles.dropdownMenuStyle}
      />

      <SelectDropdown
        data={ageOptions}
        onSelect={(selectedItem, index) => {
          //console.log(selectedItem, index);
          setAge(selectedItem.title);
        }}
        renderButton={(selectedItem, isOpened) => {
          return (
            <View style={styles.dropdownButtonStyle}>
              <Text style={styles.dropdownButtonTxtStyle}>
                {(selectedItem && selectedItem.title) ||
                  "Selecione a Faixa Etária"}
              </Text>
            </View>
          );
        }}
        renderItem={(item, index, isSelected) => {
          return (
            <View
              style={{
                ...styles.dropdownItemStyle,
                ...(isSelected && { backgroundColor: "#D2D9DF" }),
              }}
            >
              <Text style={styles.dropdownItemTxtStyle}>{item.title}</Text>
            </View>
          );
        }}
        showsVerticalScrollIndicator={false}
        dropdownStyle={styles.dropdownMenuStyle}
      />

      <TextInput
        style={styles.input}
        placeholder="Preço (R$)"
        placeholderTextColor="#A8A8A8"
        keyboardType="numeric"
        value={price}
        onChangeText={setPrice}
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.previewButton]}
          onPress={handlePost}
        >
          <Text style={styles.buttonText}>Postar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default CreatePostScreen;
