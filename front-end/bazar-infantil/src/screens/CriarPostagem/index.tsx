import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image, Alert } from 'react-native';
import axios, { AxiosError } from 'axios'; 
import styles from './styles';
import * as ImagePicker from 'expo-image-picker';
import SelectDropdown from 'react-native-select-dropdown';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CreatePostScreen = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [gender, setGender] = useState<string>('');  
  const [age, setAge] = useState<string>('');  
  const [price, setPrice] = useState('');
  const [imagem, setImagem] = useState<{ uri: string, name: string, type: string }>();
  const [imagens, setImagens] = useState<File[]>([]);
 
  const genderOptions = [
    { title: 'MASCULINO' },
    { title: 'FEMININO' },
    { title: 'UNISSEX' }
  ];

  const ageOptions = [
    { title: 'MESES0A3' },
    { title: 'MESES3A6' },
    { title: 'MESES6A9' },
    { title: 'MESES9A12' },
    { title: 'MESES12A18' },
    { title: 'ANO1' },
    { title: 'ANOS2' },
    { title: 'ANOS4' },
    { title: 'ANOS6' },
    { title: 'ANOS8' },
    { title: 'ANOS10' },
    { title: 'ANOS12' },
    { title: 'ANOS14' }
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
      const fileUri = result.assets[0].uri;
      
      // Converte o URI da imagem para um objeto File
      const response = await fetch(fileUri);
      const blob = await response.blob();
      
      // Obtém a extensão do arquivo
      const fileExtension = fileUri.split('.').pop();
      const fileType = `image/${fileExtension}`;
  
      // Criação do objeto File
      const imageFile = new File([blob], `image.${fileExtension}`, {
        type: fileType,
      });
      setImagens( prev => [...prev, imageFile]);
      setImagem({
        uri: fileUri,
        name: `image.${fileExtension}`,
        type: fileType,
      }) // Salva o arquivo de imagem no estado
    }
  };

  
  const handlePost = async () => {
    if (!title || !description || !gender || !age || !price || !imagens) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos!');
      return;
    }
    
    const token = await AsyncStorage.getItem("@userToken")

    const formData = new FormData();
    formData.append('titulo', title);
    formData.append('descricao', description);
    formData.append('categoriasGenero', gender);
    formData.append('categoriaIdade', age);
    formData.append('preco', price);
    imagens.forEach(img => {
      formData.append('fotos', img);
    });
   
    // const data = {
    //   titulo: title,
    //   descricao: description,
    //   categoriasGenero: gender,
    //   categoriaIdade: age,
    //   preco: price,
    //   fotos: imagens, 
    // };

    try {
<<<<<<< HEAD
      // const response = await axios.post('http://192.168.0.12:8080/postagem', data, {
        const response = await axios.post('https://apirn-production.up.railway.app/postagem', data, {
=======
      const response = await axios.post('http://apirn-production.up.railway.app/postagem', formData, {
>>>>>>> 8895074db2153a9550ea161c5cdb751e9754c23e
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 201) {
        Alert.alert('Sucesso', 'Postagem criada com sucesso!');
      } else {
        Alert.alert('Erro', 'Falha ao criar a postagem.');
      }
    } catch (error) {
      const axiosError = error as AxiosError
      console.error(axiosError.stack + " ");
      Alert.alert('Erro', 'Erro ao enviar a postagem');
    }
  };


  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Criar Postagem</Text>

      <TouchableOpacity style={styles.uploadArea} onPress={pickImage}>
        {imagem ? (
          <Image source={{ uri: imagem.uri}} style={styles.image} />
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
          console.log(selectedItem, index);
          setGender(selectedItem.title);  
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

      
      <SelectDropdown
        data={ageOptions}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index);
          setAge(selectedItem.title);  
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
