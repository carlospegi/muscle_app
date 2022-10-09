import React from 'react'
import { Stack, Button, Typography } from '@mui/material'
import BodyPartImage from '../assets/icons/body-part.png'
import TargetIkage from '../assets/icons/target.png'
import EquipmentImage from '../assets/icons/equipment.png'

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, name, equipment, target, gifUrl } = exerciseDetail

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart
    },
    {
      icon: TargetIkage,
      name: target
    },
    {
      icon: EquipmentImage,
      name: equipment
    }
  ]

  return (
    <Stack
      gap="60px"
      sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}
    >
      <img src={gifUrl} alt={name} loading="lazy" className='detail-image' />
      <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
        <Typography sx={{ fontSize: { lg: '64px', xs: '30px' } }} fontWeight={700} textTransform="capitalize">
          {name}
        </Typography>
        <Typography sx={{ fontSize: { lg: '24px', xs: '18px' } }} color="#4F4C4C">
          Exercises keep you strong.{' '}
          <span style={{ textTransform: 'capitalize' }}>{name}</span> bup is one
          of the best <br /> exercises to target your {target}. It will help you improve your{' '}
          <br /> mood and gain energy.
        </Typography>
        {
          extraDetail.map((item, index) => (
            <Stack key={index} direction="row" gap="24px" alignItems="center" >
              <Button sx={{ background: "#FFF2db", borderRadius: "50%", width: "100px", height: "100px" }} >
                <img src={item.icon} alt={bodyPart} style={{ width: "50px", height: "50px" }} />
              </Button>
              <Typography textTransform="capitalize" variant="h6" >{item.name}</Typography>
            </Stack>
          ))
        }
      </Stack>
    </Stack>
  )
}

export default Detail
