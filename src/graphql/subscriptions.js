/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTrainingCompletionStatus = /* GraphQL */ `
  subscription OnCreateTrainingCompletionStatus(
    $filter: ModelSubscriptionTrainingCompletionStatusFilterInput
  ) {
    onCreateTrainingCompletionStatus(filter: $filter) {
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
export const onUpdateTrainingCompletionStatus = /* GraphQL */ `
  subscription OnUpdateTrainingCompletionStatus(
    $filter: ModelSubscriptionTrainingCompletionStatusFilterInput
  ) {
    onUpdateTrainingCompletionStatus(filter: $filter) {
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
export const onDeleteTrainingCompletionStatus = /* GraphQL */ `
  subscription OnDeleteTrainingCompletionStatus(
    $filter: ModelSubscriptionTrainingCompletionStatusFilterInput
  ) {
    onDeleteTrainingCompletionStatus(filter: $filter) {
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
export const onCreateAncillary = /* GraphQL */ `
  subscription OnCreateAncillary(
    $filter: ModelSubscriptionAncillaryFilterInput
  ) {
    onCreateAncillary(filter: $filter) {
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
export const onUpdateAncillary = /* GraphQL */ `
  subscription OnUpdateAncillary(
    $filter: ModelSubscriptionAncillaryFilterInput
  ) {
    onUpdateAncillary(filter: $filter) {
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
export const onDeleteAncillary = /* GraphQL */ `
  subscription OnDeleteAncillary(
    $filter: ModelSubscriptionAncillaryFilterInput
  ) {
    onDeleteAncillary(filter: $filter) {
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
export const onCreateServiceman = /* GraphQL */ `
  subscription OnCreateServiceman(
    $filter: ModelSubscriptionServicemanFilterInput
  ) {
    onCreateServiceman(filter: $filter) {
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
export const onUpdateServiceman = /* GraphQL */ `
  subscription OnUpdateServiceman(
    $filter: ModelSubscriptionServicemanFilterInput
  ) {
    onUpdateServiceman(filter: $filter) {
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
export const onDeleteServiceman = /* GraphQL */ `
  subscription OnDeleteServiceman(
    $filter: ModelSubscriptionServicemanFilterInput
  ) {
    onDeleteServiceman(filter: $filter) {
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
