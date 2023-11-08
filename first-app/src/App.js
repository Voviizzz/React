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
import { Component } from "react";
class WhoAmI extends Component {
  constructor(props) {
    super(props);
    //внутренне состояние пропса-------
    this.state = {
      years: 27,
      text: "+++",
      position: "",
    };
    //---------------------------
    this.nextYear = this.nextYear.bind(this)
  }

  nextYear = () => {
    //изминения состояния setState - для отрисовки
    this.setState((state) => ({
      years: state.years + 1,
    }));
  };

  commitInputChanges = (e, color) => {
    console.log(color);
    this.setState({
      position: e.target.value,
    });
  };

  render() {
    const { name, surname, link } = this.props;
    const { position, years } = this.state;
    return (
      <div>
        <button onClick={this.nextYear}>{this.state.text}</button>
        <h1>
          My name is {name}, surname - {surname}, age - {years},
          position - {position}
        </h1>
        <a href={link}>My profile</a>
        <form>
          <span>Ведите должность</span>
          <input type="text" onChange={(e) => this.commitInputChanges(e, 'some color')}></input>
        </form>
      </div>
    );
  }
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
      <WhoAmI name="Jhon" surname="Smith" link="facebook.com" />
      <WhoAmI name="Alex" surname="Smith" link="facebook.com" />
    </div>
  );
}

export default App;
