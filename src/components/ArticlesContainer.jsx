import { useEffect, useState } from "react"

import { Article } from "./Article"

import img1 from '../assets/images/image-retro-pcs.jpg'
import img2 from '../assets/images/image-top-laptops.jpg'
import img3 from '../assets/images/image-gaming-growth.jpg'


//
const apiKey = 'a72213c8e55c47188ee952f90113dd8b'
//   

export const ArticlesContainer = () => {

  const [articles, setArticles] = useState([])

  useEffect(()=>{
    fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`)
    .then(res => res.json())
    .then(data => setArticles(data.articles))
  }, [])
  return (
    <section className="md:flex md:flex-wrap md:place-content-between md:gap-10 md:justify-center"> 

    {
      // articles.map(article => 
      //   <Article 
      //     key={article.publishedAt}
      //     img={article.urlToImage}
      //     number='01'
      //     title={article.title}
      //     text={article.description}
      //   />)
    }

      <Article
        img={img1}
        number='01'
        title='Reviving Retro PCs'
        text='What happens when old PCs are given modern upgrades?'
      />
      <Article
        img={img2}
        number='02'
        title='Top 10 Laptops of 2022'
        text='Our best picks for various needs and budgets.'
      />
      <Article
        img={img3}
        number='03'
        title='The Growth of Gaming'
        text='How the pandemic has sparked fresh opportunities.'
      />

    </section>
  )
}