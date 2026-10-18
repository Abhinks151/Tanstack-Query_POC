import React, { useState } from "react";
import { createUsers, getUsers } from "./hooks/userUsers";

const App: React.FC = () => {
  const [name, setName] = useState<string>("");

  const {
    data: userData,
    isLoading: isUserdataLoading,
    isError: isUserDataError,
  } = getUsers();

  const { mutate: createuser, isPending: isCreating } = createUsers();


  function handleSubmit(name:string){
    if(!name || name.length === 0) return;
    createuser(name)
  }

  if (isUserdataLoading) {
    return (
      <>
        <h1>Loading...</h1>
      </>
    );
  }

  if (isUserDataError) {
    return (
      <>
        <h1>Something went wrong...</h1>
      </>
    );
  }

  return (
    <>
      <div>
        <h1>Tanstack query POC</h1>
      </div>
      <div>
        <input onChange={(e) => setName(e.target.value)} type="text" />
        <button disabled={isCreating} onClick={() => handleSubmit(name)}>
          {!isCreating ? "Create new user" : "creating...."}
        </button>
      </div>
      {userData && (
        <ul>
          {userData.data.map((item: { id: number; name: string }) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
    </>
  );
};

//   // const { mutateFn: createProduct, isPending: isCreating } =

//   if (isError) {
//     return (
//       <>
//         <div>Something went wrong</div>
//       </>
//     );
//   }
// };

// if (isLoading) {
//   return (
//     <>
//       <div>Loading...</div>
//     </>
//   );
// }

// return (
//   <div>
//     <h1>tanstack-query</h1>
//     <ul>
//       {!isProductLoading &&
//         productData.products.map((item: { id: number; title: string }) => (
//           <li key={item.id}>{item.title}</li>
//         ))}
//     </ul>
//     <ul></ul>
//   </div>
// );

export default App;
