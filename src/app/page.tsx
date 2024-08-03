import { Header } from "./components/Header";
import { Main } from "./components/Main";

export default function Home() {
  return <>
    <div className="header-section">
        <Header />
    </div>
    <div className="site-section">
        <Main />
    </div>
  </>
}
