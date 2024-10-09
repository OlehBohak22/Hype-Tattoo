import React, { useState, useEffect } from 'https://cdn.skypack.dev/react';
import { render } from 'https://cdn.skypack.dev/react-dom';

const GLYPHS =
  'ラドクリフマラソンわたしワタシんょンョたばこタバコとうきょうトウキョウ0123456789±!@#$%^&*()_+ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const App = () => {
  const [text, setText] = useState('Join the course');
  const [speed, setSpeed] = useState(0.2);
  const [explode, setExplode] = useState(false);

  useEffect(() => {
    document.body.dataset.explode = explode;
  }, [explode]);

  return (
    <>
      <button className="join-link" style={{ '--speed': speed }}>
        {text.split('').map((char, index) => {
          return (
            <span
              key={index}
              data-char={char}
              style={{
                '--index': index,
                '--char-1': `"${
                  GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
                }"`,
                '--char-2': `"${
                  GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
                }"`,
                '--char-3': `"${
                  GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
                }"`,
              }}
            >
              {char}
            </span>
          );
        })}
        <span className="sr-only">{text}</span>
      </button>
      <button className="dummy">{text}</button>
    </>
  );
};

// Масив ID DOM-вузлів
const rootNodes = [
  'app1',
  'app2',
  'app3',
  'app4',
  'app5',
  'app6',
  'app7',
  'app8',
  'app9',
  'app10',
  'app11',
  'app12',
  'app13',
  'app14',
  'app15',
  'app16',
  'app17',
  'app18',
  'app19',
  'app20',
  'app21',
  'app22',
  'app23',
  'app24',
  'app25',
];

// Цикл для рендерингу компонентів у всі зазначені вузли
rootNodes.forEach(id => {
  const rootNode = document.querySelector(`#${id}`);
  if (rootNode) {
    render(<App />, rootNode);
  }
});
