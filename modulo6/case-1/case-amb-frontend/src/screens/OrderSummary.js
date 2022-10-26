import { OrderItemCard } from "../components/OrderItemCard"
import styled from "styled-components"

export const ContainerSection = styled.section`
    width: 15em;
    border: solid black 1px;

    h1{
        font-size: 1em;
        text-align: center;
    }
`

export const OrderSummary = (props) => {
    const { cart, removeFromCart, total, confirmOrder } = props

    return (
        <ContainerSection>
            <h1>Resumo do pedido</h1>

            {cart.map((pizza) => {
                return (
                    <OrderItemCard key={pizza.name} pizza={pizza} removeFromCart={removeFromCart} />
                )
            })}

            <h2>Total: {total.toLocaleString(
                'pt-br',
                { style: 'currency', currency: 'BRL' }
            )}</h2>
            <button onClick={confirmOrder}>Confirmar pedido</button>
        </ContainerSection>
    )
}