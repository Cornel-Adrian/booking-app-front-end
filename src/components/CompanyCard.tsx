import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';


export interface CompanyProps {

  companyName: string,
  companyDescription: string,
  id: number,
}


export default function CompanyCard(basicCompany: CompanyProps) {

  const navigate = useNavigate();

  const toCompanyComponent = () => {
    navigate('/company/'+ basicCompany.id, {
      state: basicCompany
    })
  }


  return (
    // <Card key={basicCompany.id} onClick={() => { navigate('/company/' + basicCompany.id) }} sx={{ margin: '8rem', minWidth: 275, }}>
    <Card key={basicCompany.id}
      onClick={() => { toCompanyComponent() }}
      sx={{ margin: '8rem', minWidth: 275, }}>
      <CardActionArea>
        <CardContent >
          <Typography gutterBottom variant="caption" component="div">
            {basicCompany.companyName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {basicCompany.companyDescription}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}