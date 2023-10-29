import React from 'react';
import SearchBar from './componets/searchBar';
import axios from 'axios';
import Spinner from './componets/spinner';
import CardList from './componets/cardList';
import './styles/home-page.css';
import character404 from '../assets/404.png';

export interface IErrorResponse {
  errorStatus: number;
  text: string;
  image: string;
}

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

interface IHomePageProps {}

interface IHomePagerState {
  data: Character[] | IErrorResponse | null;
  loadingStatus: boolean;
}

class HomePage extends React.Component<IHomePageProps, IHomePagerState> {
  constructor(props: IHomePageProps) {
    super(props);
    this.state = {
      data: null,
      loadingStatus: false,
    };
  }

  handleSearch = async (value: string) => {
    this.setState({ loadingStatus: true });

    axios
      .get(`https://rickandmortyapi.com/api/character/?name=${value}`)
      .then((response) => {
        this.setState({ data: response.data.results });
      })
      .catch((error) => {
        if (error.response.status === 404) {
          const responseObject: IErrorResponse = {
            errorStatus: error.response.statu,
            text: 'No such character',
            image: character404,
          };
          this.setState({ data: responseObject });
        }
        console.error('Ошибка:', error);
      })
      .finally(() => {
        this.setState({ loadingStatus: false });
      });
  };

  render() {
    return (
      <>
        <div className="main-container">
          <div className="search-bar__wrapper">
            <SearchBar onSearch={this.handleSearch} />
          </div>
          {this.state.loadingStatus ? (
            <Spinner />
          ) : (
            <CardList characters={this.state.data} />
          )}
        </div>
      </>
    );
  }
}

export default HomePage;
