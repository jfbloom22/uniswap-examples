import { BigNumberish, parseUnits, formatUnits } from 'ethers'

const READABLE_FORM_LEN = 4

export function fromReadableAmount(
  amount: number,
  decimals: number
): BigNumberish {
  return parseUnits(amount.toString(), decimals)
}

export function toReadableAmount(rawAmount: BigNumberish, decimals: number): string {
  return formatUnits(rawAmount, decimals)
    .slice(0, READABLE_FORM_LEN)
}
