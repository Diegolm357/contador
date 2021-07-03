
import {  Card} from 'react-bootstrap';
import botella from '../../src/botella.jpg';
import ItemCount from './ItemCount';


function ItemDetail(props) {
  function onAdd() {
    var a = 'Su compra es Exitosa';
    return (a);
  }
 
      return (
        <>
                <Card border="secondary">
                <Card.Img variant="top" style={{ width: '150px' }} src={botella} />
     <Card.Body>
        <Card.Title> El tinto

              </Card.Title>
              
       <Card.Text>

         Some quick example text to build on the card title and make up the bulk of
         the card's content.
        </Card.Text>
<br/>
        <ItemCount stock={10} onAdd={onAdd}/>
                                
           <br/>                         
           <Card.Text>  
       </Card.Text>
       </Card.Body>
       </Card>
 
                   </>
    );

}  export default ItemDetail; 