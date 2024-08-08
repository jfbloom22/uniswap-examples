// This file stores web3 related constants such as addresses, token definitions, ETH currency references and ABI's

import { Token } from '@uniswap/sdk-core'

// Addresses

export const V3_SWAP_ROUTER_ADDRESS =
  '0x2626664c2603336E57B271c5C0b26F421741e481'
export const WETH_CONTRACT_ADDRESS =
  '0x4200000000000000000000000000000000000006'

// Currencies and Tokens

export const USDC_TOKEN = new Token(
  8453,
  '0x833589fcd6edb6e08f4c7c32d4f71b54bda02913',
  6,
  'USDC',
  'USD//C'
)

export const DAI_TOKEN = new Token(
  8453,
  '0x6B175474E89094C44Da98b954EedeAC495271d0F',
  18,
  'DAI',
  'Dai Stablecoin'
)

export const WETH_TOKEN = new Token(
  8453,
  WETH_CONTRACT_ADDRESS,
  18,
  'WETH',
  'Wrapped Ether'
)

// ABI's

export const ERC20_ABI = [
  // Read-Only Functions
  'function balanceOf(address owner) view returns (uint256)',
  'function decimals() view returns (uint8)',
  'function symbol() view returns (string)',

  // Authenticated Functions
  'function transfer(address to, uint amount) returns (bool)',
  'function approve(address _spender, uint256 _value) returns (bool)',

  // Events
  'event Transfer(address indexed from, address indexed to, uint amount)',
]

export const WETH_ABI = [
  // Wrap ETH
  'function deposit() payable',

  // Unwrap ETH
  'function withdraw(uint wad) public',
]

// Transactions

export const MAX_FEE_PER_GAS = 100000000000
export const MAX_PRIORITY_FEE_PER_GAS = 100000000000
export const TOKEN_AMOUNT_TO_APPROVE_FOR_TRANSFER = 10000
