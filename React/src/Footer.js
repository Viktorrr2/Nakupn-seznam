import './App.css';
import Button from 'react-bootstrap/Button';

function Footer() {
  return (
   <center>
    <h1>Přehled</h1>
    <Button variant="primary" onClick={""}>Zobrazit Všechny</Button>
    &nbsp;
    <Button variant="success" onClick={""}>Vytvořit nový Seznam</Button>
   </center>
   
  );
}

export default Footer;