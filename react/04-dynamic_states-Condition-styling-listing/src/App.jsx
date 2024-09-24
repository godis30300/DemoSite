import { useState } from 'react';
import { CORE_CONCEPTS } from './data';
import Header from './components/Header/Header.jsx';
import CoreConcepts from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';
import { EXAMPLES } from './data';

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  let tabContent =  (<p>Please select a topic.</p>);

  if (selectedTopic) {
    tabContent = (<div id="tab-content">
    <h3>{EXAMPLES[selectedTopic].title}</h3>
    <p>{EXAMPLES[selectedTopic].description}</p>
    <pre>
      <code>
        {EXAMPLES[selectedTopic].code}
      </code>
    </pre>
  </div>);
  }

  function handleTabSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    // console.log(selectedTopic);
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
        <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem)=>(<CoreConcepts key={conceptItem.title} {...conceptItem}/>))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic === 'components'} onSelect={ () => handleTabSelect('components') }>Components</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onSelect={ () => handleTabSelect('jsx') }>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onSelect={ () => handleTabSelect('props') }>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onSelect={ () => handleTabSelect('state') }>State</TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;