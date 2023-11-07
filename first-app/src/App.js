import logo from "./logo.svg";
import "./App.css";

// const Header = () => {
//   return <h2>Hello world!</h2>;
// };
// const Field = () => {
//   const holder = 'Enter here'
//   const styleField = {
//     width:'500px',
//   }
//   return <input placeholder={holder} type="text" style={styleField}></input>;
// };

// function Btn() {
//   const text = "Log in";
//   const logged = true;

//   return <button>{logged ? 'Enter': text}</button>;
// }
// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <Field />
//       <Btn />
//     </div>
//   );
// }

function WhoAmI({ name, surname, link }) {
  return (
    <div>
      <h1>
        {/* {" "}
        My name is {name.firstName}, surname - {surname} */}
        My name is {name()}, surname - {surname}
      </h1>
      <a href={link}>My profile</a>
    </div>
  );
}

//Компонент ни в коме случае не должен изменять пропсы - 1 раз создали и его изменить нельзя
//что мы можем предавать вместо пропса ?
//функцию, объекты, переменные!
function App() {
  return (
    <div className="App">
      {/* так тоже работает */}
      {/* <WhoAmI
        name={{ firstName: "beach" }}
        surname="Smith"
        link="facebook.com"
  />*/}
     {/* <WhoAmI name="Alex" surname="Smooth" link="inst.com" /> */}
      <WhoAmI
        name={() => {
          return "Jameson";
        }}
        surname="Smooth"
        link="inst.com"
      />
    </div>
  );
}

export default App;
