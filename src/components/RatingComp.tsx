import Rating from '@mui/material/Rating';
import { useState, useEffect } from 'react';
import axiosClient from '../api/axiosInstance';

type RatingCompProps = { companyId: string | undefined }


function RatingComp({ companyId }: RatingCompProps) {

  const [value, setValue] = useState<number | null>(2);

  useEffect(() => {

    try {
      axiosClient.get('reviews/average/' + companyId).then((res) => {
        if (res.data === "") setValue(0);
        else setValue(res.data);
      })
    } catch (err) {

    }

    return
  }, [companyId])



  return (
    <div>
      <Rating sx={{ m: 2 }} name="read-only" value={value} readOnly />
    </div>
  )
}

export default RatingComp