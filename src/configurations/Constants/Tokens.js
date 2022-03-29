import { CHAIN_ID } from "."

const { BSC_MAINNET, BSC_TESTNET } = CHAIN_ID

export const bscTokens = {
  XRXS: {
    [BSC_MAINNET]: {
      name: "XRXS",
      symbol: "XRXS",
      decimal: 18,
      address: "0x039fd083ed7ec9e7a63c18084352690d7c68682c",
      projectUrl: "https://xrxstoken.com/",
    },
  },
}
