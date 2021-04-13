 import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'DLF',
    lpAddresses: {
      97: '0x9C21123D94b93361a29B2C2EFB3d5CD8B17e0A9e',
      56: '0x942Ed7dfA2a564984747420D47C4f49c2b3140F9',
    },
    tokenSymbol: 'SYRUP',
    tokenAddresses: {
      97: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
      56: '0x3a9fea5f4f5a27cf54bc380a5929db6da98cc03c',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 1,
    lpSymbol: 'DLF-BNB LP',
    lpAddresses: {
      97: '0x3123111edf985abe2f9c711cdc9cbfd4d3868c53',
      56: '0x6e36efd7f1b50197d4f0b509394f047ef4a29a78',
    },
    tokenSymbol: 'DLF',
    tokenAddresses: {
      97: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
      56: '0x942ed7dfa2a564984747420d47c4f49c2b3140f9',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  }
]

export default farms
