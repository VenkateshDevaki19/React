import React, { createContext, useContext, useState } from "react";
import "./App.css";

const CurrentUserContext = createContext(null);

const App2 = () => {
  const [currentUser, setCurrentUser] = useState(null);
  return (
    <div>
      <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
        <Form />
      </CurrentUserContext.Provider>
    </div>
  );
};

function Form({ children }) {
  return (
    <Panel title="Welcome">
      <LoginButton />
    </Panel>
  );
}

function LoginButton() {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

  if (currentUser !== null) {
    return <p>you logged in as {currentUser.name}.</p>;
  }

  return (
    <Button
      onClick={() => {
        setCurrentUser({ name: "Venky" });
      }}
    >
      Log in as Venkatesh
    </Button>
  );
}

function Panel({ title, children }) {
  return (
    <section className="panel">
      <h1>{title}</h1>
      {children}
    </section>
  );
}

function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}
export default App2;
