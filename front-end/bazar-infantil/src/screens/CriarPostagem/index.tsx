import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';

const CreatePostScreen = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [size, setSize] = useState('');
  const [price, setPrice] = useState('');

  const handlePost = () => {
    
    alert('Postagem criada com sucesso!');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Criar Postagem</Text>

     
      <TouchableOpacity style={styles.uploadArea}>
        <Text style={styles.uploadText}>Carregar Imagem</Text>
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

   
      <TextInput
        style={styles.input}
        placeholder="Categoria"
        placeholderTextColor="#A8A8A8"
        value={size}
        onChangeText={setSize}
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
        <TouchableOpacity style={[styles.button, styles.previewButton]}>
          <Text style={styles.buttonText}>Pré-visualizar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.postButton]} onPress={handlePost}>
          <Text style={styles.buttonText}>Postar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '	#b4dfff',
    padding: 20,
    alignItems: 'center',
  },
  header: {
    marginTop: 28,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4A4A4A',
    marginBottom: 20,
  },
  uploadArea: {
    width: '100%',
    height: 150,
    backgroundColor: '#E5F0F8',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  uploadText: {
    fontSize: 16,
    color: '#7BAEDC',
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#F7F7F7',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 15,
    color: '#4A4A4A',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },
  button: {
    flex: 1,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  previewButton: {
    backgroundColor: "#ffa3bf",
  },
  postButton: {
    backgroundColor: '#B3E5C1',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4A4A4A',
  },
});

export default CreatePostScreen;
