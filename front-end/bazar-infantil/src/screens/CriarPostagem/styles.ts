import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#b4dfff',
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
    overflow: 'hidden',
  },
  uploadText: {
    fontSize: 16,
    color: '#7BAEDC',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
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
    justifyContent: 'center',
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
    backgroundColor: '#ffa3bf',
  },
  postButton: {
    backgroundColor: '#B3E5C1',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4A4A4A',
  },

  pickerContainer: {
    width: '100%',
    marginBottom: 15,
    zIndex: 10, 
    backgroundColor: '#F7F7F7', 
    borderRadius: 10,
  },

  picker: {
    width: '100%',
    height: 50,
    backgroundColor: '#F7F7F7',
    borderRadius: 10,
    fontSize: 16,
    color: '#4A4A4A', 
  },

  removeImageButton: {
    marginTop: 10,
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
  },
  removeImageText: {
    color: 'white',
    textAlign: 'center',
  },

  
  dropdownButtonStyle: {
    width: '100%',
    height: 50,
    backgroundColor: '#F7F7F7',
    borderRadius: 10, 
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15, 
    marginBottom: 15, 
  },

  dropdownButtonTxtStyle: {
    fontSize: 16, 
    fontWeight: '500',
    color: '#4A4A4A', 
  },

  dropdownButtonArrowStyle: {
    fontSize: 28,
  },

  dropdownButtonIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },

  dropdownMenuStyle: {
    backgroundColor: '#F7F7F7',
    borderRadius: 10, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },

  dropdownItemStyle: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
  },

  dropdownItemTxtStyle: {
    fontSize: 16, 
    fontWeight: '500',
    color: '#4A4A4A',
  },

  dropdownItemIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
});

export default styles;
