import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";



interface Message {
    id: number;
    content: string;
    sender: string;
}

const Chat: React.FC = () => {

    const [messages, setMessages] = useState<Message[]>([]);
    const [inputValue, setInputValue] = useState("");

    const handleSendMessage = () => {
        if (inputValue.trim() === "") return;

        const newMessage: Message = {
            id: messages.length + 1,
            content: inputValue,
            sender: 'user',
        };

        setMessages([...messages, newMessage]);
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
                overflow: 'scroll'
            }}>
                {messages.map((message) => (
                    <Box sx={{
                        minWidth: '20px',
                        display: 'flex',
                    }}>
                        <Box sx={{
                            borderRadius: '10px',
                            border: '2px solid #e3e2e2',
                            background:'#cdcdcd'
                        }}>
                            <Typography
                                key={message.id}
                                variant="body1"
                                align={message.sender === "user" ? "left" : "right"}
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
            }}>
                <TextField
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    label="Text"
                    variant="outlined"
                    fullWidth
                    disabled={false}
                />
                <Button variant="contained" color="primary" onClick={handleSendMessage}>
                    Trimite
                </Button>
            </Box>
        </Box>
    );
};

export default Chat;
