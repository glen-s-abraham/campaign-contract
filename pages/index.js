import React, { useEffect, useState } from 'react'
import factory from '../ethereum/factory'

export default function show() {

  const [campaigns,setCampaigns] = useState([])

  useEffect(async ()=> { 
    deployedCampaigns = await factory.methods.getDeployedCampaigns().call()
    setCampaigns(deployedCampaigns);
  },[])

  return (
    <div>{campaigns?campaigns:''}</div>
  )
}
