 import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet.js'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting'
import NameList from './components/NameList'
import Stylesheet from './components/Stylesheet'
import Inline from './components/Inline'
import './appStyles.css'
import styles from './appStyles.modules.css'
import Form from './components/Form'
import LifecycleA from './components/LifecycleA'
import FragmentDemo from './components/FragmentDemo'
import Table from './components/Table';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import User from './components/User';
import CounterTwo from './components/CounterTwo';
import ComponentC from './components/ComponentF';
import { UserProvider } from './components/userContext';

function App() {
  return (
    <div className="App">
      {/* <UserProvider value="Sabita"> */}
        <ComponentC />
      {/* </UserProvider>
       */}

       {/* <CounterTwo>
        {(count,incrementCount)=>(  
         <ClickCounterTwo count={count} incrementCount={incrementCount} />
        )}
        </CounterTwo>

       <CounterTwo>
        {(count,incrementCount)=>(
         <HoverCounterTwo count={count} incrementCount={incrementCount} />
       )}
       </CounterTwo> */}

      {/* <ClickCounterTwo />
      <HoverCounterTwo />
      <User render={(isLoggedIn)=>isLoggedIn?"Sabita":"Guest"}/> */}

      {/* <ClickCounter name="sabita" />
      <HoverCounter /> */}
      {/* <ErrorBoundary>

        <Hero heroName="Batman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Spiderman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Joker" />
      </ErrorBoundary> */}

      {/* <PortalDemo /> */}
      {/* <FRParentInput /> */}
      {/* <FocusInput /> */}
      {/* <RefsDemo /> */}
      {/* <ParentComp /> */}
      {/* <Table /> */}
      {/* <FragmentDemo /> */}
      {/* <LifecycleA /> */}
      {/* <Form /> */}

      {/* <h1 className='error'>Error</h1>
      <h1 className={styles.success}>hi</h1> */}

      {/* <Stylesheet primary={true}/> */}
      {/* <Inline /> */}

      {/* <NameList /> */}
      {/* <UserGreeting /> */}
      {/* <ParentComponent /> */}
      {/* <EventBind /> */}
      {/* <FunctionClick />
      <ClassClick /> */}
      {/* <Counter /> */}
      {/* <Greet name="Binita" heroName="Salman" >
        <p>This is children props</p>
      </Greet>
      <Greet name="Kusum" heroName="Aamir" >
        <button>Action</button>
      </Greet>
      <Greet name="Pema" heroName="Shahrukhan"></Greet>

      <Welcome name="Binita" heroName="Salman"/>
      <Welcome name="Kusum" heroName="Aamir" />
      <Welcome name="Pema" heroName="Shahrukhan" /> */}
      {/* <Hello /> */}

      {/* <Message /> */}


    </div>
  );
}

export default App;
