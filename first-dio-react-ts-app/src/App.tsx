import { Card } from './components/Card'
import { Footer } from './components/Footer'
import { Header } from './components/Header'

function App() {

  return (
    <>
      <Header />
      <Card title="First Card" text="This is the first card" details="Here are the details for the first card" />
      <Card title="Second Card" text="I'm the second card" details="There are some details from the second card" />
      <Footer />
    </>
  )
}

export default App
