import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom'


export interface CompanyProps {

  companyName: string,
  companyDescription: string,
  companyId: string,
}


export default function CompanyCard({ companyId, companyName, companyDescription }: CompanyProps) {

  const navigate = useNavigate();


  return (
    <Card onClick={() => { navigate('/company/' + companyId) }} sx={{ margin: '8rem', minWidth: 275, }}>
      <CardActionArea>
        <CardContent >
          <Typography gutterBottom variant="caption" component="div">
            {companyName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {companyDescription}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}