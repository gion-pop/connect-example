import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createConnectTransport } from "@connectrpc/connect-web";
import { createPromiseClient } from "@connectrpc/connect";
import { GreetService } from './gen/greet/v1/greet_connect';
import {useCallback, useState} from "react";

function App() {
  const transport = createConnectTransport({
    baseUrl: "http://localhost:8080",
  });
  const client = createPromiseClient(GreetService, transport);

  const [name, setName] = useState<string>("World");
  const [result, setResult] = useState<string>("");
  const call = useCallback(async (name: string) => {
    const result = await client.greet({
      name,
    });
    setResult(result.greeting);
  }, [client]);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <input value={name} onChange={event => setName(event.target.value)}/>
        <button onClick={() => call(name)}>Greet</button>
        <p>{result}</p>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
