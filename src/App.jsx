/* importar los componentes */

import { Header } from "./components/Header";
import { MainArticle } from "./components/MainArticle";
import { Article } from "./components/Article";
import { Footer } from "./components/Footer";

import ArticleImage from "./assets/images/illustration-grow-together.svg";
import ArticleImageTwo from "./assets/images/illustration-flowing-conversation.svg"
import ArticleImageThree from "./assets/images/illustration-your-users.svg"

function App() {
  return (
    <>
    <section className="p-4 font-Default bg-Very-Pale-Cyan">
      <Header />
      <MainArticle />

      
      <Article 
      img={ArticleImage}
      title="Grow Together"
      text="Generate meaningful discussions with your  audience and build a strong, loyal community. 
      Think of the insightful conversations you miss out on with a feedback form. "
      />

      <Article 
      img={ArticleImageTwo}
      title="Flowing Conversations"
      text="You wouldn't paginate a conversation in real life, so why do it online? Our threads 
      have just-in-time loading for a more natural flow."
      />

      <Article 
      img={ArticleImageThree}
      title="Your Users"
      text="It takes no time at all to integrate Huddle with your app's authentication solution. 
      This means, once signed in to your app, your users can start chatting immediately."
      />


      

    </section>
    <Footer />

    </>
  )
}

export default App
