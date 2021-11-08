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

  export const to_hex = (code: any) => {
    const decode = ethers.utils.hexValue(code);
  return decode;
  }
