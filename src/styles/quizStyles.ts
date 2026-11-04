import { StyleSheet } from "react-native";

export const quizStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#9696f0",
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#1c3d5a",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#2a4d69",
    marginBottom: 15,
    textAlign: "center",
  },
  question: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "center",
  },
  questionText: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
  },
  option: {
    backgroundColor: "#2a4d69",
    padding: 12,
    borderRadius: 8,
    marginVertical: 6,
  },
  optionText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  result: {
    fontSize: 18,
    marginVertical: 10,
    textAlign: "center",
    color: "#333",
  },
  wrongList: {
    marginTop: 20,
  },
  wrongItem: {
    fontSize: 14,
    marginVertical: 4,
    color: "#b22222",
  },
});
