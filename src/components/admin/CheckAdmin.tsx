import React from 'react'

interface CheckAdminProps {
  connected_account: string
  page: any
}

export const CheckAdmin: React.FC<CheckAdminProps> = ({connected_account, page}) => {
  //const checker = null;
  return (connected_account === '0x701123a676E9A765191276C1587c01b009646EF6' ? (
    page
  ) : null)
}
