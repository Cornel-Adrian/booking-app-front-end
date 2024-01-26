import { Box, Button, CardContent, Modal, TextField, Typography } from "@mui/material";
import { useState } from "react";
import axiosClient from "../api/axiosInstance";


export default function ServiceAdd() {

    const [numeServiciu, setNumeServiciu] = useState('');
    const [descriere, setDescriere] = useState('');
    const [pret, setPret] = useState<number>();
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const handleSubmit = async () => {

        try {
            await axiosClient.post('services', { name: numeServiciu, description: descriere, price: pret, companyId: 1 })
                .then(() => {
                    handleOpen();
                })
        } catch (err: any) {
            console.log("Error: ", err);
        }

    };
    return (<>
        <Box>
            <CardContent sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <TextField
                    required
                    id="outlined-required"
                    label="Nume Serviciu"
                    onChange={(e) => setNumeServiciu(e.target.value)}
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Descriere"
                    onChange={(e) => setDescriere(e.target.value)}
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Pret"
                    type="number"
                    onChange={(e) => setPret(parseInt(e.target.value))}
                />
                <Button sx={{ mx: '2', background: '#2c5d4f' }} onClick={handleSubmit} variant="contained" size="medium">Adauga Serviciu</Button>
            </CardContent>
            <Modal open={open}
                onClose={handleClose}>
                <Box sx={style}><Typography id="modal-modal-title" variant="h6" component="h2">Serviciu Adaugat cu success</Typography></Box>

            </Modal>
        </Box>

    </>);
}