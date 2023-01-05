import "./App.css";
import Hero from "./component/Hero";
import Button from "./component/Button";
import MainText from "./component/MainText";
import Cards from "./component/Cards";

// App.js yra pagrindinis komponentas
// Vienas failas = vienas komponentas
// Komponentai rasomi didziaja raide
// Komponentai buna 2 tipu, funkciniai ir klasiniai
// Funkciniai atrodo kaip funkcijos, tik is didziosios raides. Regular arba Arrow functions
// class => className
// return dalyje rasomas JSX = js + html

function App() {
  return (
    <div className="App">
      <Hero title="Title" txt1="Some about text" txt2="in two lines">
        <Button color="teal">Button</Button>
      </Hero>
      <MainText
        mainTitle="Portfolio"
        txt="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic"
      />
      <Cards
        img="https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1nfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
        text="First text"
        img2="http://www.webnode.com/blog/wp-content/uploads/2018/09/6.png"
        text2="Second text"
      />
    </div>
  );
}

export default App;
