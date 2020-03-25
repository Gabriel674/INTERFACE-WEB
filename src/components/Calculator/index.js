import React, { useState } from "react";
import { Container, KeyBoard, Keys, Screen, Valor } from "./styles";

export default function Calculator() {
  const [valor, setValor] = useState("");

  function clear() {
    setValor("");
  }
  function back() {
    let exp = valor;
    setValor(exp.substring(0, exp.length - 1));
  }
  function equals() {
    if (valor) {
      let exp = eval(valor);
      setValor(exp.toString());
    }
  }
  function add(item) {
    setValor("" + valor + item);
  }

  const keys = [
    { value: 1, insert: () => add("1") },
    { value: 2, insert: () => add(2) },
    { value: 3, insert: () => add(3) },
    { value: 4, insert: () => add(4) },
    { value: 5, insert: () => add(5) },
    { value: 6, insert: () => add(6) },
    { value: 7, insert: () => add(7) },
    { value: 8, insert: () => add(8) },
    { value: 9, insert: () => add(9) },
    { value: <i class="fab fa-cuttlefish"></i>, insert: clear },
    { value: <i class="fas fa-backspace"></i>, insert: back },
    { value: <i class="fas fa-divide"></i>, insert: () => add("/") },
    { value: <i class="fas fa-times"></i>, insert: () => add("*") },
    { value: 0, insert: () => add(0) },
    { value: <i class="fas fa-minus"></i>, insert: () => add("-") },
    { value: <i class="fas fa-plus"></i>, insert: () => add("+") },
    { value: ".", insert: () => add(".") },
    { value: <i class="fas fa-equals"></i>, insert: equals }
  ];

  function handleKey(event) {
    setValor(event.target.value);
  }
  function handleKeyPress(event) {
    if (event.key === "Enter") {
      equals();
    }
  }

  return (
    <Container>
      <KeyBoard>
        {keys.map(key => (
          <Keys onClick={key.insert}>{key.value}</Keys>
        ))}
      </KeyBoard>
      <Screen>
        <Valor value={valor} onChange={handleKey} onKeyPress={handleKeyPress} />
      </Screen>
    </Container>
  );
}
