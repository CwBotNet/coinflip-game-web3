import { sepolia } from "thirdweb/chains";
import { client } from "./client";
import { getContract } from "thirdweb";
import { contractAbi } from "./abi";

// connect to your contract
export const contract = getContract({
  client: client,
  address: "0xacCbb0bAC82Abc0C81238B4B30f0cee6498306Ff",
  chain: sepolia,
  abi: contractAbi,
});
