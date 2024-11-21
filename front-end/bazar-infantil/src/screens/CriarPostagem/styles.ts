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
});

export default styles;