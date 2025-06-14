import { Transaction } from "models/associations";
import { algolia } from "connections";

export async function getAllTransactions(id: string) {
  const transactions = await Transaction.findAll({
    where: { userId: id, status: "paid" },
  });
  const idProducts = transactions.map((i) => i.get("productId")).flat();
  const productsPaid = await Promise.all(
    idProducts.map((id) =>
      algolia.getObject({ indexName: "products", objectID: id.toString() })
    )
  );
  return productsPaid;
}

export async function createTransaction(
  status: string,
  id: string,
  productId: string[]
) {
  const transaction = await Transaction.create({
    status,
    userId: id,
    productId,
  });
  return transaction;
}

export async function updatePaymentTransaction(id: string) {
  return await Transaction.update({ status: "paid" }, { where: { id } });
}
