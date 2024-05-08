// This file stores web3 related constants such as addresses, token definitions, ETH currency references and ABI's

import { Token } from '@uniswap/sdk-core'

// Addresses

export const POOL_FACTORY_CONTRACT_ADDRESS =
  '0x33128a8fC17869897dcE68Ed026d694621f6FDfD'
export const QUOTER_CONTRACT_ADDRESS =
  '0x3d4e44Eb1374240CE5F1B871ab261CD16335B76a'

// Currencies and Tokens

export const WETH_TOKEN = new Token(
  8453,
  '0x4200000000000000000000000000000000000006',
  18,
  'WETH',
  'Wrapped Ether'
)

export const USDC_TOKEN = new Token(
  8453,
  '0x833589fcd6edb6e08f4c7c32d4f71b54bda02913',
  6,
  'USDC',
  'USD//C'
)
