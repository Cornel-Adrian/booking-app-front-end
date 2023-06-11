import { useEffect, useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import { useLocation } from 'react-router-dom'
import axiosClient from "../api/axiosInstance";
import { CreateSocket } from '../context/WebsocketContext';



interface Message {
    orderId: string | undefined;
    content: string;
    sender: string | undefined;
}

interface ChatProps {
    orderId: string | undefined,
    sender: string | undefined,
}

export default function Chat({ orderId, sender }: ChatProps) {

    const [messages, setMessages] = useState<Message[]>([]);
    const [inputValue, setInputValue] = useState("");
    const location = useLocation();

    if (orderId === undefined || sender === undefined) {
        orderId = location.state['orderId'];
        sender = location.state['sender'];
    }
    const socket = CreateSocket(orderId ? orderId : "");

    useEffect(() => {
        socket.on('connect', () => {
            console.log('Connected!');
        });
        socket.emit("join", orderId);
        socket.on('messages', (newMessage: Message) => {
            setMessages((prev) => [...prev, newMessage]);
        });

        try {
            axiosClient.get("chats/getChat/" + orderId).then((res) => {
                console.log(res.data);
                setMessages(res.data);
            })
        } catch (err) {

        }

        return () => {
            console.log('Unregistering Events...');
            socket.off('connect');
            socket.off('onMessage');
        };
    }, []);

    const handleSendMessage = () => {
        if (inputValue.trim() === "") return;


        console.log("orderId");
        console.log(orderId);

        const newMessage: Message = {
            orderId: orderId,
            content: inputValue,
            sender: sender,
        };

        console.log(newMessage);

        setMessages([...messages, newMessage]);



        socket.emit('newMessage', newMessage);
        setInputValue("");
    };

    return (
        <Box sx={{ marginTop: "140px" }}>
            <Typography variant="h5" align="center" gutterBottom>
                Chat
            </Typography>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                height: "400px",
                width: "600px",
                overflow: 'scroll',
                mx: "auto"
            }}>
                {messages.map((message) => (
                    <Box sx={{
                        minWidth: '20px',
                        display: 'flex',
                        justifyContent: message.sender === "user" ? "flex-start" : "flex-end"
                    }}>
                        <Box sx={{
                            borderRadius: '10px',
                            border: '2px solid #e3e2e2',
                            background: '#cdcdcd'
                        }}>
                            <Typography
                                key={message.orderId}
                                variant="body1"

                                sx={{
                                    marginBottom: "10px",
                                }}
                            >
                                {message.content}
                            </Typography>
                        </Box>
                    </Box>
                ))}
            </Box>
            <Box sx={{
                display: "flex",
                gap: "10px",
                marginTop: "10px",
                justifyContent: "center"
            }}>
                <TextField
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    label="Text"
                    variant="outlined"
                    disabled={false}
                />
                <Button variant="contained" color="primary" onClick={handleSendMessage}>
                    Trimite
                </Button>
            </Box>
        </Box>
    );
};


