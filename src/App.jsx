import NavBar from './components/NavBar/NavBar'
// import Button from './components/Button/Button'
import ItemCount from './components/ItemCount/ItemCount'

function App() {
  return (
    <>
      <NavBar />
      <ItemCount title={'Manzanas'} initialValue={10}/>
      <ItemCount title={'Bananas'} initialValue={20}/>
      <ItemCount title={'Peras'} initialValue={30}/>
    </>
  )
}

export default App
