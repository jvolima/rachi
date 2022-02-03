import { DownloadApp } from "./components/DownloadApp"
import { Header } from "./components/Header"
import { HowWorks } from "./components/HowWorks"
import { Presentation } from "./components/Presentation"
import "./styles/global.scss"

function App() {
  return (
    <>
      <Header />
      <Presentation />
      <HowWorks />
      <DownloadApp />
    </>
  )
}

export default App
