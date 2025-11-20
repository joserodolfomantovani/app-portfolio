import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    paddingTop: 40,
  },

  title: {
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 20,
  },

  profileContainer: {
    width: "80%",
    alignItems: "center",
    padding: 20,
    borderRadius: 20,
  },

  photoCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#FFF",
    borderWidth: 2,
    borderColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },

  photoText: {
    fontSize: 16,
    color: "#333",
    textAlign: "center",
  },

  name: {
    fontSize: 20,
    fontWeight: "500",
    marginBottom: 25,
  },

  button: {
    width: "100%",
    paddingVertical: 14,
    borderRadius: 10,
    marginBottom: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#007AFF",
  },

  buttonText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#FFF",
  },
});