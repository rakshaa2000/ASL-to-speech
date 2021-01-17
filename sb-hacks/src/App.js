import './App.css';
import Camera from './components/Camera'
import TranscribedText from './components/TranscribedText'
import Header from './components/Header'
import About from './components/About'

function App() {
  // This variable can be changed to change the output text.
  var transcription = "Hello World!";
  return (
    <div className="App">
      <Header />
      <hr className="line"/>
      <div className="mainComponents">
        <Camera />
        <TranscribedText outText={transcription}/>
      </div>
      <About />
    </div>
  );
}

export default App;
