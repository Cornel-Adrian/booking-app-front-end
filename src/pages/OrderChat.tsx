import Chat from "../components/Chat"

interface OrderChatProps {

    sender: string | undefined,
    orderId: string | undefined,


}

function OrderChat({ sender, orderId }: OrderChatProps) {
    return (
        <div>
            <br />
            <Chat orderId={sender} sender={orderId}></Chat>
        </div>
    )
}

export default OrderChat