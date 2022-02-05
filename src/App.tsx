import { Contact } from "./components/Contact"
import { DownloadApp } from "./components/DownloadApp"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { HowWorks } from "./components/HowWorks"
import { Plans } from "./components/Plans"
import { Presentation } from "./components/Presentation"
import "./styles/global.scss"

function App() {
  return (
    <>
      <Header />
      <Presentation />
      <HowWorks />
      <DownloadApp />
      <Plans />
      <Contact />
      <Footer />
    </>
  )
}

export default App
