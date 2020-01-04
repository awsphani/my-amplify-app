/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCoin = `mutation CreateCoin(
  $input: CreateCoinInput!
  $condition: ModelCoinConditionInput
) {
  createCoin(input: $input, condition: $condition) {
    id
    clientId
    name
    symbol
    price
  }
}
`;
export const updateCoin = `mutation UpdateCoin(
  $input: UpdateCoinInput!
  $condition: ModelCoinConditionInput
) {
  updateCoin(input: $input, condition: $condition) {
    id
    clientId
    name
    symbol
    price
  }
}
`;
export const deleteCoin = `mutation DeleteCoin(
  $input: DeleteCoinInput!
  $condition: ModelCoinConditionInput
) {
  deleteCoin(input: $input, condition: $condition) {
    id
    clientId
    name
    symbol
    price
  }
}
`;
