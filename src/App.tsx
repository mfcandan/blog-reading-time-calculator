import { Flex, Group, Text, Textarea, Title } from "@mantine/core";
import { useEffect, useState } from "react";

function App() {
  const [textInput, setTextInput] = useState<string>("");
  const [wordCount, setWordCount] = useState(0);
  const [readingTime, setReadingTime] = useState(0);

  useEffect(() => {
    textInput.length > 0 && countWords();
  }, [textInput]);

  useEffect(() => {
    calculate();
  }, [wordCount]);

  const handleTextChange = (e: any) => {
    console.log(e);
    setTextInput(e.target.value);
  };

  const countWords = () => {
    const arr = textInput.split(" ");
    setWordCount(arr.filter((word) => word !== "").length);
  };

  const calculate = () => {
    setReadingTime((wordCount / 150) * 60);
  };

  return (
    <Flex direction="column" gap="lg" mt="20vh">
      <Title>Metin Süre Hesaplayıcı</Title>
      <Text>
        Lütfen Metni Giriniz
        <Text size="xs">
          Okuma hızı dakikada 150 kelime olarak belirlenmiştir.
        </Text>
      </Text>

      <Textarea
        placeholder="Lütfen Okuma Süresi Hesaplanacak Metni Giriniz."
        minRows={10}
        label="Metin:"
        radius="md"
        size="md"
        withAsterisk
        value={textInput}
        onChange={handleTextChange}
      />

      {readingTime > 0 && (
        <Group align="center" mt="lg" position="center">
          <Text size={20}>Kelime Sayısı: {wordCount} </Text>
          <Text size={20}>Okuma Süresi: {readingTime}sn </Text>
        </Group>
      )}
    </Flex>
  );
}

export default App;
