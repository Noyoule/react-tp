import { UserComponent } from "./components/userComponent"

function App() {
  return <>
  <div className="p-6">
    <UserComponent key={1}>
    </UserComponent>
    <UserComponent key={2}>
    </UserComponent>
  </div>
  </>
}

export default App
