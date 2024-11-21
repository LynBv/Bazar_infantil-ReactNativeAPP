import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import styles from './styles'

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

export default CreatePostScreen;
