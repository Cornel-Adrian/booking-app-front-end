import { io } from 'socket.io-client';

export const CreateSocket = (orderId: string) => {
    return io('http://localhost:3000', {
        extraHeaders: {
            "orderId": orderId
        }
    })
};