import { Percent } from 'swirlswap-core-sdk'
import { ALLOWED_PRICE_IMPACT_HIGH, PRICE_IMPACT_WITHOUT_FEE_CONFIRM_MIN } from '../../constants'

/**
 * Given the price impact, get user confirmation.
 *
 * @param priceImpactWithoutFee price impact of the trade without the fee.
 */
export default function confirmPriceImpactWithoutFee(priceImpactWithoutFee: Percent): boolean {
  if (!priceImpactWithoutFee.lessThan(PRICE_IMPACT_WITHOUT_FEE_CONFIRM_MIN)) {
    return (
      window.prompt(
        `本次交易将至少对价格影响超过 ${PRICE_IMPACT_WITHOUT_FEE_CONFIRM_MIN.toFixed(
          0
        )}%. 请输入“确认”以继续进行此交易.`
      ) === 'confirm'
    )
  } else if (!priceImpactWithoutFee.lessThan(ALLOWED_PRICE_IMPACT_HIGH)) {
    return window.confirm(
      `本次交易将至少对价格影响超过  ${ALLOWED_PRICE_IMPACT_HIGH.toFixed(
        0
      )}%. 请确认，如果您想继续进行此交易.`
    )
  }
  return true
}
