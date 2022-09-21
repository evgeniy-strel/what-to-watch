import Main from "../../pages/Main";

const filmsList = [
  {
    id: 0,
    imgUrl: "img/fantastic-beasts-the-crimes-of-grindelwald.jpg",
    title: "Fantastic Beasts: The Crimes of Grindelwald",
  },
  {
    id: 1,
    imgUrl: "img/bohemian-rhapsody.jpg",
    title: "Bohemian Rhapsody",
  },
  {
    id: 2,
    imgUrl: "img/macbeth.jpg",
    title: "Macbeth",
  },
  {
    id: 3,
    imgUrl: "img/aviator.jpg",
    title: "Aviator",
  },
];

function App(): JSX.Element {
  return <Main filmsList={filmsList} />;
}

export default App;
