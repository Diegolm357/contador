
import {useState} from 'react';
import { Button, ButtonGroup, Card } from 'react-bootstrap';



function ItemCount({stock, onAdd}) {
  const [contador, setcontador] = useState(1);
  const [testo , setTesto] = useState('');
  const valor= stock;
  var texto = '';
  
  
  function puestaCero(){
      setcontador(0)
  }
   contador>=valor?(texto='No hay mas Stock'):(texto='Stock disponible');
 
  return (
    <>
      <Button onClick={() => { setTesto(onAdd()); }} variant="warning">COMPRAR</Button>
      
     <ButtonGroup className="mr-2" aria-label="First group">
     
        
        <Card.Text/>
   <br/>
        <Button onClick={() => {
         

        setcontador(contador - 1);
  if(contador <= 0 ) (puestaCero());
}

   }>-</Button>

    <h1>  &nbsp; { contador} &nbsp;  </h1>
        <Button onClick={() => {
          setcontador(contador + 1);
        
     if(contador >= 10) (puestaCero());
    
    }}>+</Button>
    </ButtonGroup>
      <h2>{texto}</h2>
      <h2>{testo}</h2>
    </>
  );
}

export default ItemCount;
