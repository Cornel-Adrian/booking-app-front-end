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
        <div>
            <Typography variant="h5" sx={{ marginTop: "140px" }} align="center" gutterBottom>
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
                    <Typography
                        key={message.id}
                        variant="body1"
                        align={message.sender == "user" ? "left" : "right"}
                        sx={{
                            marginBottom: "10px",
                        }}
                    >
                        {message.content}
                    </Typography>
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
                    label="Message"
                    variant="outlined"
                    fullWidth
                    disabled={false}
                />
                <Button variant="contained" color="primary" onClick={handleSendMessage}>
                    Send
                </Button>
            </Box>
        </div>
    );
};

export default Chat;
