import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './CompanyCard.css';


export interface CompanyProps {

  companyName: string,
  companyDescription: string,
  id: string,
}


export default function CompanyCard({ companyName, companyDescription }: CompanyProps) {
  return (
    <Card className='card' sx={{ maxWidth: 300 , minWidth: 250}}>
      <CardActionArea>
        <CardContent>
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