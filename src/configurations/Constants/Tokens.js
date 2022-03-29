import { CHAIN_ID } from "."

const { BSC_MAINNET, BSC_TESTNET } = CHAIN_ID

export const bscTokens = {
  XRXS: {
    [BSC_MAINNET]: {
      name: "XRXS",
      symbol: "XRXS",
      decimal: 18,
      address: "0x4B3370B44A9E6A4EC28BfDb7C2C400758b59975d",
      projectUrl: "https://xrxstoken.com/",
    },
  },
}
