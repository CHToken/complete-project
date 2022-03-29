import { CHAIN_ID } from "."

const { BSC_MAINNET, BSC_TESTNET } = CHAIN_ID

export const bscContracts = {
  PRESALE: {
    [BSC_MAINNET]: {
      address: "0xA04e14819Dc75Ae2e54D0D7d462b79aa6cEb5428",
      explorerUrl:
        "https://bscscan.com/address/0xA04e14819Dc75Ae2e54D0D7d462b79aa6cEb5428",
    },
  },
  XRXS: {
    [BSC_MAINNET]: {
      address: "0x039fd083ed7ec9e7a63c18084352690d7c68682c",
      explorerUrl:
        "https://bscscan.com/token/0x039fd083ed7ec9e7a63c18084352690d7c68682c",
    },
  },
}
