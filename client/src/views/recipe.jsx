import React, { useState, useEffect } from "react";
import NavigationArrow from "./../components/NavigationArrow";
import "./../styles/ingredients.css";
import APIHandler from "../api/handler";

function Recipe(props) {
  const [recipe, setRecipe] = useState([]);
  console.log(props);
  // Similar a componentDidMount y componentDidUpdate:
  useEffect(() => {
    APIHandler.get("/all-recipes/" + props.match.params.id)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  });

  return (
  <div>
  p
  </div>
  )
  
}

export default Recipe;

// export default class Recipe extends Component {

//   render() {

//     console.log("this is api", APIHandler)
//     console.log("this is the console", this.props)
//     return (
//       <>
//         <div className="shadow-drop-2-center wrapper">
//           <div>
//             <img src="./../../téléchargement.jpeg" alt="" />
//             <h1>title</h1>
//             <p>⭐️⭐️⭐️⭐️⭐️</p>
//           </div>
//           <div className="difficulties">
//             <h2>Easy</h2>
//           </div>
//           <div>
//             <div className="wrapp-ingredients shadow-drop-2-center ">
//               <img
//                 className="ingredients"
//                 src="./../../potato_PNG98094.png"
//                 alt="lol"
//               />
//               <h3>Name</h3>
//               <p>Quantities</p>
//             </div>
//           </div>
//           <div>
//             <p>
//               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam
//               dignissimos, ad cum quae tenetur dolorum rem? Velit quod atque
//               doloremque itaque sunt placeat enim sapiente iste, dolores omnis
//               dolore vitae. Lorem ipsum dolor sit amet consectetur adipisicing
//               elit. Nostrum, nobis! Impedit atque perferendis itaque nihil
//               corrupti porro totam praesentium dolorem fugiat optio, velit
//               cupiditate adipisci eligendi quidem aliquid veniam! Optio? Odit
//               animi officia sequi repudiandae blanditiis at molestiae
//               consequuntur praesentium, qui ipsa laboriosam voluptas! Asperiores
//               delectus at quam temporibus nam cumque tempore praesentium
//               officiis, dolore omnis molestias architecto, voluptas deleniti.
//             </p>
//           </div>
//           <div>
//             <h2>Comments</h2>
//           </div>
//         </div>
//       </>
//     );
//   }
// }
