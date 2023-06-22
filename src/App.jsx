import { Header } from "./components/Header"
import { MainArticle } from "./components/MainArticle"
import { NewContainer } from "./components/NewContainer"
import { ArticlesContainer } from "./components/ArticlesContainer"

export function App() {
  return (
    <main className="px-4 pt-6 pb-3 sm:px-40 sm:pt-20 font-Inter" >
      <Header/>
      <div className="sm:flex sm:gap-8 sm:mb-10">
        <MainArticle />
        <NewContainer />
      </div>
      <ArticlesContainer />
    </main>
  )
}