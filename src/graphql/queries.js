/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
