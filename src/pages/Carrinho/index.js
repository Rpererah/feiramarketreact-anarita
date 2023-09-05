import { Button, Snackbar, InputLabel } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { useState } from 'react';
import { Container, Voltar, TotalContainer, PagamentoContainer} from './styles';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import { useCarrinhoContext } from 'common/contexts/Carrinho';
import Produto from 'components/Produto';

function Carrinho() {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const history=useHistory();
  const {carrinho,setCarrinho}=useCarrinhoContext();
  console.log('esse eh o carrinho')
  console.log(carrinho);
  return (
    <Container>
      <Voltar onClick={()=>history.goBack()} />
      <h2>
        Carrinho
      </h2>
      {carrinho.map(produto => (
          <Produto
            {...produto}
            key={produto.id}
          />
        ))}
      <PagamentoContainer>
        <InputLabel> Forma de Pagamento </InputLabel>
      </PagamentoContainer>
      <TotalContainer>
          <div>
            <h2>Total no Carrinho: </h2>
            <span>R$ </span>
          </div>
          <div>
            <h2> Saldo: </h2>
            <span> R$ </span>
          </div>
          <div>
            <h2> Saldo Total: </h2>
            <span> R$ </span>
          </div>
        </TotalContainer>
      <Button
        onClick={() => {
          setOpenSnackbar(true);
        }}
        color="primary"
        variant="contained"
      >
         Comprar
       </Button>
        <Snackbar
          anchorOrigin={
            { 
              vertical: 'top',
              horizontal: 'right'
            }
          }
          open={openSnackbar}
          onClose={() => setOpenSnackbar(false)}
        >
           <MuiAlert
            onClose={() => setOpenSnackbar(false)}
            severity="success"
          >
            Compra feita com sucesso!
          </MuiAlert>
        </Snackbar>
    </Container>
  )
}

export default Carrinho;