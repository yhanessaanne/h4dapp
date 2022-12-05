/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTrainingCompletionStatus = /* GraphQL */ `
  query GetTrainingCompletionStatus($id: ID!) {
    getTrainingCompletionStatus(id: $id) {
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
export const listTrainingCompletionStatuses = /* GraphQL */ `
  query ListTrainingCompletionStatuses(
    $filter: ModelTrainingCompletionStatusFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTrainingCompletionStatuses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        DateCompleted
        DateDue
        Status
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        trainingCompletionStatusAncillaryId
        trainingCompletionStatusServicemanId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncTrainingCompletionStatuses = /* GraphQL */ `
  query SyncTrainingCompletionStatuses(
    $filter: ModelTrainingCompletionStatusFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTrainingCompletionStatuses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        DateCompleted
        DateDue
        Status
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        trainingCompletionStatusAncillaryId
        trainingCompletionStatusServicemanId
      }
      nextToken
      startedAt
    }
  }
`;
export const getAncillary = /* GraphQL */ `
  query GetAncillary($id: ID!) {
    getAncillary(id: $id) {
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
export const listAncillaries = /* GraphQL */ `
  query ListAncillaries(
    $filter: ModelAncillaryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAncillaries(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        AncillaryTrainingName
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncAncillaries = /* GraphQL */ `
  query SyncAncillaries(
    $filter: ModelAncillaryFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAncillaries(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        AncillaryTrainingName
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getServiceman = /* GraphQL */ `
  query GetServiceman($id: ID!) {
    getServiceman(id: $id) {
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
export const listServicemen = /* GraphQL */ `
  query ListServicemen(
    $filter: ModelServicemanFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listServicemen(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncServicemen = /* GraphQL */ `
  query SyncServicemen(
    $filter: ModelServicemanFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncServicemen(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
