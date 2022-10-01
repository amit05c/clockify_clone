import { Box } from '@chakra-ui/react'
import React from 'react'
import BarChart from '../../Components/dashboard/BarChart'
import { PiChart } from '../../Components/dashboard/PieChart'

const Dashboard = () => {
  return (
    <Box w="82vw" bg="#e4eaee" pt="2rem">
      <h1>Dashboard</h1>
      <BarChart/>
      <PiChart/>
      </Box>
  )
}

export default Dashboard