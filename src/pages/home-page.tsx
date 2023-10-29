import React from 'react';
import SearchBar from './componets/searchBar';
import axios from 'axios';
import Spinner from './componets/spinner';
import CardList from './componets/cardList';

export interface IErrors {
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
  data: Character[] | null;
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
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Ошибка:', error);
      })
      .finally(() => {
        this.setState({ loadingStatus: false });
      });
  };

  render() {
    return (
      <>
        <div className="search-bar__wrapper">
          <h2 data-testid="main-page">Main page</h2>
          <SearchBar onSearch={this.handleSearch} />
        </div>
        {this.state.loadingStatus ? (
          <Spinner />
        ) : (
          <CardList characters={this.state.data} />
        )}
      </>
    );
  }
}

export default HomePage;

// const HomePage = () => {
//   const [results, setResults] = useState<Character[] | IErrors | null>(null);
//   const [loading, setLoading] = useState(false);
//   const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
//   const [selectedCard, setSelectedCard] = useState<Character | null>(null);

//   const handleSearch = async (value: string) => {
//     setLoading(true);
//     try {
//       const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${value}`);
//       if (!response.ok) {
//         if (response.status === 404) {
//           throw new Error('No such character!');
//         }
//         if (response.status === 500) {
//           throw new Error('Server error. Please try again later.');
//         }
//         throw new Error('Unknown error.');
//       }
//       const data = await response.json();
//       console.log(data);
//       setResults(data.results);
//     } catch (error) {
//       if (error instanceof TypeError) {
//         const obj: IErrors = {
//           errorStatus: 0,
//           text: 'Сheck internet connection',
//           image: noInternet,
//         };
//         setResults(obj);
//       } else {
//         console.log(error);
//         const obj: IErrors = {
//           errorStatus: 0,
//           text: 'No such character!',
//           image: responseStatus404,
//         };
//         setResults(obj);
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleModalClose = (): void => {
//     setIsModalOpen(false);
//   };

//   const handleCardClick = (card: Character): void => {
//     setSelectedCard(card);
//     setIsModalOpen(true);
//   };

//   return (
//     <>
//       <div className="search-bar__wrapper">
//         <h2 data-testid="main-page">Main page</h2>
//         <SearchBar onSearch={handleSearch} />
//       </div>
//       {loading ? <Spinner /> : <Cards characters={results} onCardClick={handleCardClick} />}
//       {isModalOpen && <Overlay onClick={handleModalClose} />}
//       {isModalOpen && selectedCard && <Modal character={selectedCard} />}
//     </>
//   );
// };

// export { HomePage };
