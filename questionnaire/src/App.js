import './App.css';
import Header from './Header/Header';
import rowData from './Data/rowData';
import QuestionLine from './QuestionLine/QuestionLine';
import InfoSending from './InfoSending/InfoSending';

function App() {
  return (
    <div className="App">
      <Header />
      {rowData.map((it, index) => (
        <QuestionLine it={it} key={index} />
      ))}
      <InfoSending />
    </div>
  );
}

export default App;
