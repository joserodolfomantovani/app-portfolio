import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    paddingTop: 40,
  },

  photoCircle: {
    width: 130,
    height: 130,
    borderRadius: 65,
    borderWidth: 2,
    borderColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
    marginBottom: 20,
  },

  photoText: {
    color: "#333",
    fontSize: 16,
    textAlign: "center",
  },

  title: {
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 25,
  },

  skillsBox: {
    width: "80%",
    marginBottom: 40,
  },

  skillRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },

  skillName: {
    fontSize: 20,
    fontWeight: "500",
  },

  stars: {
    fontSize: 22,
    color: "#F1C40F", 
  },


});