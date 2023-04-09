/* eslint-disable jsx-a11y/control-has-associated-label */
import Shell from '../Shell/Shell';
import './app.scss';

function App() {
   return (
      <main className="app">
         <div className="app__container">
            <Shell className="app__shell">
               <div>Space</div>
            </Shell>
         </div>
      </main>
   );
}

export default App;
