import { useEffect } from 'react'
import { usePriceEthBusd } from 'state/hooks'

const useGetDocumentTitlePrice = () => {
  const cakePriceUsd = usePriceEthBusd()
  useEffect(() => {
    document.title = `DLF SWAP - $${Number(cakePriceUsd).toLocaleString(undefined, {
      minimumFractionDigits: 3,
      maximumFractionDigits: 3,
    })}`
  })
}
export default useGetDocumentTitlePrice
