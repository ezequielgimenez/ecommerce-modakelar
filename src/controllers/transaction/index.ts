import { createTransaction } from "services/transation.services";
import { findOneUserByEmail } from "services/user.services";
import { createSinglePreference } from "lib/mercadopago";
import { getProductByIds } from "services/product.services";

import { myObjectData } from "lib/mercadopago";

export async function createTransactionController(
  productIds: string[],
  email: string
) {
  let productsArray;
  const user = await findOneUserByEmail(email);
  if (user) {
    const status = "pending";
    const userId = user.get("id").toString();
    const transaction = await createTransaction(status, userId, productIds);
    const productById = await getProductByIds(productIds);
    const product = JSON.parse(JSON.stringify(productById));

    if (Array.isArray(product)) {
      productsArray = product;
    } else if (product) {
      productsArray = [product];
    }

    const data: myObjectData = {
      user: user.toJSON(),
      product: productsArray,
      transaction: transaction.toJSON(),
    };
    const prefence = await createSinglePreference(data);
    return {
      success: true,
      message: "Transaccion creada",
      data: prefence.init_point,
    };
  } else {
    return { success: false, message: "Email de usuario no encontrado" };
  }
}
