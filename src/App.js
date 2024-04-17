import Header from './Header';
import Main from './Main';
import Loader from './Loader';
import Error from './Error';
import StartScreen from './StartScreen';
import Question from './Question';
import FinishScreen from './FinishScreen';
import Timer from './Timer';
import Footer from './Footer';
import { useContext } from 'react';
import { QuizContext } from './context/QuizContext';

export default function App() {
  const { status } = useContext(QuizContext);

  return (
    <div className="app">
      <Header />
      <Main>
        {status === 'loading' && <Loader />}
        {status === 'ready' && <StartScreen />}
        {status === 'active' && (
          <>
            <Question />
            <Footer>
              <Timer />
            </Footer>
          </>
        )}
        {status === 'finished' && <FinishScreen />}
        {status === 'error' && <Error />}
      </Main>
    </div>
  );
}
