import { Post } from "./post"

export function App() {
  return (
    <div>
      <Post
        author="Renato Napoli"
        content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio facilis reiciendis itaque ipsum delectus iste, qui aliquam, minus eligendi vitae repudiandae, atque error expedita molestiae quia quam facere eaque recusandae."
      />
      <Post author="Grabriel Buzzi" content="Novo post muito legal" />
    </div>
  )
}
