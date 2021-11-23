//Functions Lib for decoding datas
//
import {ethers} from 'ethers';

  export const to_string = (code: any) => {
    const decode = ethers.utils.formatUnits(code.toString());
  return decode;
  }

  export const from_string_to_int = (code: string): number => {
    const decode = parseInt(code);
  return decode;
  }

  export const from_hex_to_arr = (code) => {
    let abi = [
      "event Deposited(uint256 vault, address from, uint256 amount)"
    ];

    let iface = new ethers.utils.Interface(abi)

    const decode = iface.parseLog(code);
  return decode;
  }

  export const to_hex = (code: any) => {
    const decode = ethers.utils.hexValue(code);
  return decode;
  }
