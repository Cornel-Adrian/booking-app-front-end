import { Box, Card } from "@mui/material";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { useState } from "react";

export default function Profile() {

    const [user, setUser] = useState();



    return (<div>
        <Card sx={{ display: 'flex', justifyContent: 'space-around' }}>
            <Box sx={{ p: 5 }}>
                <PersonOutlineIcon sx={{}} />
            </Box>
            <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', mx: 'auto', mt: 5, justifyContent: 'center' }}>
                <div>Nume</div>
                <div>Email</div>
                <div>De cand esti pe site</div>
                <div>review-uri lasate</div>
            </Box>
        </Card>

    </div>)
}