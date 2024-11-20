import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 30,
    paddingBottom: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  itemText: {
    fontSize: 18,
    color: '#333',
    flex: 1,
    textAlign: 'left',
  },
  itemPrice: {
    fontSize: 18,
    textAlign: 'right',
    width: 100,
  },
  removeButton: {
    backgroundColor: "#ff6f69",
    padding: 8,
    borderRadius: 5,
    marginLeft: 50,
  },
  removeButtonText: {
    fontSize: 14,
    fontWeight: 600,
    color: "#ffffff"
  },
  clearButton: {
    backgroundColor: '#ffdca7',
    padding: 15,
    borderRadius: 1000,
    marginTop: 20,
    marginHorizontal: 20,
  },
  clearButtonText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 600,
  },
});

export default styles;
