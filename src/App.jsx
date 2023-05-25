import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import { Post } from "./components/Post"

import styles from "./App.module.css"

import "../src/global.css"

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Renato Napoli"
            content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio facilis reiciendis itaque ipsum delectus iste, qui aliquam, minus eligendi vitae repudiandae, atque error expedita molestiae quia quam facere eaque recusandae."
          />
          <Post author="Grabriel Buzzi" content="Novo post muito legal" />
        </main>
      </div>
    </div>
  )
}
