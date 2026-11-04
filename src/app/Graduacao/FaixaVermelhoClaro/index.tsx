import { useCallback, useEffect, useState } from "react";
import { FlatList, ScrollView, Text, TouchableOpacity, View } from "react-native";

import { termos } from "../../../data/cub2";
import { quizStyles as styles } from "../../../styles/quizStyles";

function shuffle(array: string[]) {
  return array.sort(() => Math.random() - 0.5);
}

export default function FaixaVermelhoClaro() {
  const [current, setCurrent] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState<any[]>([]);
  const [options, setOptions] = useState<string[]>([]);

  useEffect(() => {
    if (current < termos.length) {
      const termo = termos[current];
      let opts = [termo.traducao];
      while (opts.length < 4) {
        let rand = termos[Math.floor(Math.random() * termos.length)].traducao;
        if (!opts.includes(rand)) opts.push(rand);
      }
      setOptions(shuffle(opts));
    }
  }, [current]);

  const handleAnswer = useCallback((opt: string) => {
    const termo = termos[current];
    if (opt === termo.traducao) {
      setCorrect((prev) => prev + 1);
    } else {
      setWrongAnswers((prev) => [...prev, termo]);
    }
    setCurrent((prev) => prev + 1);
  }, [current, termos]);

  if (current >= termos.length) {
    const percent = ((correct / termos.length) * 100).toFixed(2);
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Fim do jogo!</Text>
        <Text style={styles.result}>Você acertou {percent}%</Text>
        {wrongAnswers.length > 0 && (
          <FlatList
            data={wrongAnswers}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <Text style={styles.wrongItem}>
                {item.nome} → Correto: {item.traducao}
              </Text>
            )}
          />
        )}
      </ScrollView>
    );
  }

  const termo = termos[current];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quiz de Taekwondo</Text>
      <Text style={styles.subtitle}>Faixa Vermelho Claro – 2º Gub</Text>
      <Text style={styles.question}>{termos.indexOf(termo)+1}/{termos.length} -  {termo.nome}</Text>
      <Text style={styles.questionText}>Qual é a tradução correta?</Text>

      <FlatList
        data={options}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.option} onPress={() => handleAnswer(item)}>
            <Text style={styles.optionText}>{item}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
