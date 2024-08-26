import { createThirdwebClient } from "thirdweb";

export const client = createThirdwebClient({
  clientId: `${process.env.NEXT_PUBLIC_TEMPLETE_CLIENT_ID}`,
});
