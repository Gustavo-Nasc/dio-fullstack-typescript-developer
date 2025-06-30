import { Card } from './components/Card'
import { Layout } from './Layout'

function App() {

  return (
    <>
      <Layout>
          <Card title="First Card" text="This is the first card" details="Here are the details for the first card" />
          <Card title="Second Card" text="I'm the second card" details="There are some details from the second card" />
      </Layout>
    </>
  )
}

export default App
