import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image, Alert } from 'react-native';
import axios from 'axios'; 
import styles from './styles';
import * as ImagePicker from 'expo-image-picker';
import SelectDropdown from 'react-native-select-dropdown';

const CreatePostScreen = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [gender, setGender] = useState<string>('');  
  const [age, setAge] = useState<string>('');  
  const [price, setPrice] = useState('');
  const [image, setImage] = useState<string | null>(null);
  
  // Opções para o SelectDropdown de Gênero
  const genderOptions = [
    { title: 'Masculino' },
    { title: 'Feminino' },
    { title: 'Unissex' }
  ];

  // Substituição das opções de idade com os intervalos de meses e anos
  const ageOptions = [
    { title: '0 a 3 meses' },
    { title: '3 a 6 meses' },
    { title: '6 a 9 meses' },
    { title: '9 a 12 meses' },
    { title: '12 a 18 meses' },
    { title: '1 ano' },
    { title: '2 anos' },
    { title: '4 anos' },
    { title: '6 anos' },
    { title: '8 anos' },
    { title: '10 anos' },
    { title: '12 anos' },
    { title: '14 anos' }
  ];

  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      Alert.alert('Permissão necessária', 'Precisamos de acesso à galeria para carregar a imagem.');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handlePost = async () => {
    if (!title || !description || !gender || !age || !price || !image) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos!');
      return;
    }

    const data = {
      title: title,
      description: description,
      gender: gender,
      age: age,
      price: price,
      image: image, 
    };

    try {
      const response = await axios.post('https://localhost:8080/postagem', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 200) {
        Alert.alert('Sucesso', 'Postagem criada com sucesso!');
      } else {
        Alert.alert('Erro', 'Falha ao criar a postagem.');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Erro ao enviar a postagem');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Criar Postagem</Text>

      <TouchableOpacity style={styles.uploadArea} onPress={pickImage}>
        {image ? (
          <Image source={{ uri: image }} style={styles.image} />
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

      {/* Dropdown de Gênero com as opções Masculino, Feminino e Unissex */}
      <SelectDropdown
        data={genderOptions}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index);
          setGender(selectedItem.title);  // Atualiza o estado do gênero
        }}
        renderButton={(selectedItem, isOpened) => {
          return (
            <View style={styles.dropdownButtonStyle}>
              <Text style={styles.dropdownButtonTxtStyle}>
                {(selectedItem && selectedItem.title) || 'Selecione o Gênero'}
              </Text>
            </View>
          );
        }}
        renderItem={(item, index, isSelected) => {
          return (
            <View style={{...styles.dropdownItemStyle, ...(isSelected && {backgroundColor: '#D2D9DF'})}}>
              <Text style={styles.dropdownItemTxtStyle}>{item.title}</Text>
            </View>
          );
        }}
        showsVerticalScrollIndicator={false}
        dropdownStyle={styles.dropdownMenuStyle}
      />

      {/* Dropdown de Faixa Etária com as novas opções de idade */}
      <SelectDropdown
        data={ageOptions}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index);
          setAge(selectedItem.title);  // Atualiza o estado da faixa etária
        }}
        renderButton={(selectedItem, isOpened) => {
          return (
            <View style={styles.dropdownButtonStyle}>
              <Text style={styles.dropdownButtonTxtStyle}>
                {(selectedItem && selectedItem.title) || 'Selecione a Faixa Etária'}
              </Text>
            </View>
          );
        }}
        renderItem={(item, index, isSelected) => {
          return (
            <View style={{...styles.dropdownItemStyle, ...(isSelected && {backgroundColor: '#D2D9DF'})}}>
              <Text style={styles.dropdownItemTxtStyle}>{item.title}</Text>
            </View>
          );
        }}
        showsVerticalScrollIndicator={false}
        dropdownStyle={styles.dropdownMenuStyle}
      />

      {/* Outros campos de input, botões, etc. */}


      <TextInput
        style={styles.input}
        placeholder="Preço (R$)"
        placeholderTextColor="#A8A8A8"
        keyboardType="numeric"
        value={price}
        onChangeText={setPrice}
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.previewButton]} onPress={handlePost}>
          <Text style={styles.buttonText}>Postar</Text>
        </TouchableOpacity>
      </View>



    </ScrollView>
  );
};

export default CreatePostScreen;
