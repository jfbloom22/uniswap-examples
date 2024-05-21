import { InterfaceAbi, ethers } from 'ethers'
import { CurrentConfig } from '../config'
import { computePoolAddress } from '@uniswap/v3-sdk'
import quoterAbi from './../quoter-abi.json'
// import Quoter from '@uniswap/v3-periphery/artifacts/contracts/lens/Quoter.sol/Quoter.json'
import IUniswapV3PoolABI from '@uniswap/v3-core/artifacts/contracts/interfaces/IUniswapV3Pool.sol/IUniswapV3Pool.json'
import {
  POOL_FACTORY_CONTRACT_ADDRESS,
  QUOTER_CONTRACT_ADDRESS,
} from '../libs/constants'
import { getProvider } from '../libs/providers'
import { toReadableAmount, fromReadableAmount } from '../libs/conversion'

export async function quote(): Promise<string> {
  console.log('about to prep quote')
  const quoterContract = new ethers.Contract(
    QUOTER_CONTRACT_ADDRESS,
    quoterAbi as unknown as InterfaceAbi,
    getProvider()
  )
  const poolConstants = await getPoolConstants()

  console.log('about to quote')
  const params = {
    tokenIn: CurrentConfig.tokens.in.address,
    tokenOut: CurrentConfig.tokens.out.address,
    amountIn: fromReadableAmount(
      CurrentConfig.tokens.amountIn,
      CurrentConfig.tokens.in.decimals
    ).toString(),
    // amountIn: fromReadableAmount(
    //   CurrentConfig.tokens.amountIn,
    //   CurrentConfig.tokens.in.decimals
    // ).toString(),
    fee: poolConstants.fee,
    sqrtPriceLimitX96: 0,
  }
  const quotedAmountOut = await quoterContract.quoteExactInputSingle.staticCall(
    params
  )
  console.log('quoted', quotedAmountOut[0])
  return toReadableAmount(quotedAmountOut[0], CurrentConfig.tokens.out.decimals)
}

async function getPoolConstants(): Promise<{
  token0: string
  token1: string
  fee: number
}> {
  const currentPoolAddress = computePoolAddress({
    factoryAddress: POOL_FACTORY_CONTRACT_ADDRESS,
    tokenA: CurrentConfig.tokens.in,
    tokenB: CurrentConfig.tokens.out,
    fee: CurrentConfig.tokens.poolFee,
  })

  const poolContract = new ethers.Contract(
    currentPoolAddress,
    IUniswapV3PoolABI.abi,
    getProvider()
  )
  const [token0, token1, fee] = await Promise.all([
    poolContract.token0(),
    poolContract.token1(),
    poolContract.fee(),
  ])

  return {
    token0,
    token1,
    fee,
  }
}
