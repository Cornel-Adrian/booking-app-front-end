import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

interface Order {
  id: number;
  customer: string;
  price: number;
  status: string;
}

interface OrdersStatisticsProps {
  orders: Order[];
}

const Statistics: React.FC<OrdersStatisticsProps> = ({ orders }) => {
  const totalOrders = orders.length;
  const totalRevenue = orders.reduce((acc, order) => acc + order.price, 0);
  const completedOrders = orders.filter(order => order.status === 'done').length;

  return (
      <Card>
        <CardContent style={{}}>
          <Typography variant="h5" component="h2">
            Statistici livrari
          </Typography>
          <Typography color="textSecondary" gutterBottom>
            Total Livrari: {totalOrders}
          </Typography>
          <Typography color="textSecondary" gutterBottom>
            Total Venituri: {totalRevenue} lei
          </Typography>
          <Typography color="textSecondary" gutterBottom>
            Livrari facute: {completedOrders}
          </Typography>
        </CardContent>
      </Card>
  );
};

export default Statistics;
