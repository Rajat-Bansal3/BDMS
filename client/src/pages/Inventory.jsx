import React from 'react'
import InventoryComponent from './_components/InventoryComponents/InventoryComponent'
import TalkWithDonor from './_components/InventoryComponents/TalkWithDonor'

const Inventory = () => {
  return (
    <div>
        <TalkWithDonor/>
        <InventoryComponent />
    </div>
  )
}

export default Inventory