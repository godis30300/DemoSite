import { CORE_CONCEPTS } from './data';
import Header from './components/Header/Header.jsx';
import CoreConcepts from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';

function App() {
  function handleTabSelect(selectedButton) {
    console.log(selectedButton);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
        <h2>Core Concepts</h2>
          <ul>
            <CoreConcepts title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description} image={CORE_CONCEPTS[0].image}/>
            <CoreConcepts {...CORE_CONCEPTS[1]}/>
            <CoreConcepts {...CORE_CONCEPTS[2]}/>
            <CoreConcepts {...CORE_CONCEPTS[3]}/>
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={ () => handleTabSelect('components') }>Components</TabButton>
            <TabButton onSelect={ () => handleTabSelect('jsx') }>JSX</TabButton>
            <TabButton onSelect={ () => handleTabSelect('props') }>Props</TabButton>
            <TabButton onSelect={ () => handleTabSelect('state') }>State</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
