import { createContext, useContext, useState } from "react";

export const PagamentoContext=createContext();
PagamentoContext.displayName="Pagamento";

export function PagamentoProvider({children}){
    const tiposPagamentos=[{
        nome:"boleto",
        juros:"1",
        id:1
    },{
        nome:"cartao de credito",
        juros:3,
        id:2
    },
    {
        nome:"pix",
        juros:1,
        id:3
    },
    {
        nome:"crediario",
        juros:1.5,
        id:4
    }
]

const [formaDepagamento,setFormaDePagamento]=useState(tiposPagamentos[0]);
return(
    <PagamentoContext.Provider value={{tiposPagamentos,formaDepagamento,setFormaDePagamento}}>
        {children}
    </PagamentoContext.Provider>
)
}


export const usePagamentoContext=()=>{
    const {tiposPagamentos,formaDepagamento,setFormaDePagamento} = useContext(PagamentoContext)

    function mudarFormaDePagamento(id){
        const pagamentoAtual=tiposPagamentos.find(pagamento=>pagamento.id===id);
        setFormaDePagamento(pagamentoAtual);
    }


    return{
        tiposPagamentos,
        formaDepagamento,
        mudarFormaDePagamento
    }
}
