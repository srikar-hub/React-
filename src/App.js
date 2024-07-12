
import { data } from './Props/Comments';
import Comments from './Props/Comments';
function App() {
  return (
    <article>
      {
        data.map((eachobj)=>{
          const {id,name,email} = eachobj; 
          return <Comments key={id} name={name} email={email}/>
        })
      }
    </article>
  );
}
export default App;

