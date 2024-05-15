import { ethers } from 'ethers'
import { CurrentConfig } from '../config'
import { ChainId } from '@uniswap/sdk-core'

// Provider Functions

export function getProvider(): ethers.Provider {
  return new ethers.JsonRpcProvider(CurrentConfig.rpc.mainnet, ChainId.BASE, {staticNetwork: true})
}
