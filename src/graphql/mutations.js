/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createServiceman = /* GraphQL */ `
  mutation CreateServiceman(
    $input: CreateServicemanInput!
    $condition: ModelServicemanConditionInput
  ) {
    createServiceman(input: $input, condition: $condition) {
      id
      rank
      last
      first
      position
      afsc
      status
      email
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateServiceman = /* GraphQL */ `
  mutation UpdateServiceman(
    $input: UpdateServicemanInput!
    $condition: ModelServicemanConditionInput
  ) {
    updateServiceman(input: $input, condition: $condition) {
      id
      rank
      last
      first
      position
      afsc
      status
      email
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteServiceman = /* GraphQL */ `
  mutation DeleteServiceman(
    $input: DeleteServicemanInput!
    $condition: ModelServicemanConditionInput
  ) {
    deleteServiceman(input: $input, condition: $condition) {
      id
      rank
      last
      first
      position
      afsc
      status
      email
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
