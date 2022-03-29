import { CHAIN_ID } from "."

const { BSC_MAINNET, BSC_TESTNET } = CHAIN_ID

export const bscContracts = {
  PRESALE: {
    [BSC_MAINNET]: {
      address: "0x3d85F68845768F25AAbbD78B22A403a6d6e2c038",
      explorerUrl:
        "https://bscscan.com/address/0x3d85F68845768F25AAbbD78B22A403a6d6e2c038",
    },
  },
  XRXS: {
    [BSC_MAINNET]: {
      address: "0x4B3370B44A9E6A4EC28BfDb7C2C400758b59975d",
      explorerUrl:
        "https://bscscan.com/token/0x1cd316d3882e8dd36c7b096ee362f018d6b9795d",
    },
  },
}
