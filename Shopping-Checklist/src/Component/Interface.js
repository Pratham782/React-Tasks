import { React, PureComponent } from "react";
import { ref, set, push, onValue } from "firebase/database";
import { db } from "../Component/Config";
import Header from "./Header";
import FormFields from "./FormFields";
import Listitems from "./Listitems";

export default class Interface extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      setText: {},
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    let postRef = ref(db, "users");
    onValue(postRef, (snapshot) => {
      if (snapshot.val() !== null) {
        this.setState({ setText: snapshot.val() });
      } else {
        this.setState({ setText: {} });
      }
    });
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleClick() {
    if (!this.state.text == "") {
      let postRef = ref(db, "users");
      let newRef = push(postRef);
      set(newRef, { username: this.state.text });
    }
    this.setState({ text: "" });
  }

  render() {
    return (
      <>
        <Header />
        <FormFields text={this.state.text} change={this.handleChange} click={this.handleClick} />
        <Listitems delete={this.handleDeleteAll} setText={this.state.setText} checkValues={this.state.checkValues} />
      </>
    );
  }
}
