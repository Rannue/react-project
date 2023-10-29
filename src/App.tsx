import { Component } from 'react';
import './App.css';
import HomePage from './pages/home-page';

interface IAppProps {}

interface IAppState {
  errorStatus: boolean;
}

class App extends Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
    this.state = {
      errorStatus: false,
    };
  }
  throwError = () => {
    this.setState({ errorStatus: true });
  };

  render() {
    if (this.state.errorStatus) {
      throw new Error('Это ошибка, вызванная кнопкой');
    }
    return (
      <>
        <button onClick={this.throwError}>Вызвать ошибку</button>
        <HomePage />
      </>
    );
  }
}

export default App;
