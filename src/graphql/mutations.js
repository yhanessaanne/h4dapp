/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTrainingCompletionStatus = /* GraphQL */ `
  mutation CreateTrainingCompletionStatus(
    $input: CreateTrainingCompletionStatusInput!
    $condition: ModelTrainingCompletionStatusConditionInput
  ) {
    createTrainingCompletionStatus(input: $input, condition: $condition) {
      id
      DateCompleted
      DateDue
      Status
      Ancillary {
        id
        AncillaryTrainingName
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      Serviceman {
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      trainingCompletionStatusAncillaryId
      trainingCompletionStatusServicemanId
    }
  }
`;
export const updateTrainingCompletionStatus = /* GraphQL */ `
  mutation UpdateTrainingCompletionStatus(
    $input: UpdateTrainingCompletionStatusInput!
    $condition: ModelTrainingCompletionStatusConditionInput
  ) {
    updateTrainingCompletionStatus(input: $input, condition: $condition) {
      id
      DateCompleted
      DateDue
      Status
      Ancillary {
        id
        AncillaryTrainingName
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      Serviceman {
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      trainingCompletionStatusAncillaryId
      trainingCompletionStatusServicemanId
    }
  }
`;
export const deleteTrainingCompletionStatus = /* GraphQL */ `
  mutation DeleteTrainingCompletionStatus(
    $input: DeleteTrainingCompletionStatusInput!
    $condition: ModelTrainingCompletionStatusConditionInput
  ) {
    deleteTrainingCompletionStatus(input: $input, condition: $condition) {
      id
      DateCompleted
      DateDue
      Status
      Ancillary {
        id
        AncillaryTrainingName
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      Serviceman {
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      trainingCompletionStatusAncillaryId
      trainingCompletionStatusServicemanId
    }
  }
`;
export const createAncillary = /* GraphQL */ `
  mutation CreateAncillary(
    $input: CreateAncillaryInput!
    $condition: ModelAncillaryConditionInput
  ) {
    createAncillary(input: $input, condition: $condition) {
      id
      AncillaryTrainingName
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateAncillary = /* GraphQL */ `
  mutation UpdateAncillary(
    $input: UpdateAncillaryInput!
    $condition: ModelAncillaryConditionInput
  ) {
    updateAncillary(input: $input, condition: $condition) {
      id
      AncillaryTrainingName
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteAncillary = /* GraphQL */ `
  mutation DeleteAncillary(
    $input: DeleteAncillaryInput!
    $condition: ModelAncillaryConditionInput
  ) {
    deleteAncillary(input: $input, condition: $condition) {
      id
      AncillaryTrainingName
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
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
