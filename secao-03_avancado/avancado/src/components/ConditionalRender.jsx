import { useState } from "react"

const ConditionalRender = () => {
  const [x] = useState(true);
  const [name, setName] = useState("João");
  return (
    <div>
      <h1>Isso será exibido?</h1>
      {x && <p> Se x for true, sim</p>}
      {!x && <p>Agora x é false</p>}
      {name === "João" ? ( 
        <div>
          <p>O nome é João</p>
        </div>
      ) : (
        <div>
          <p>Nome não encontrado</p>
        </div>
      )}
      <button onClick={() => setName("Carlos")}>Clique para mudar o nome</button>
    </div>
  );
};

export default ConditionalRender;