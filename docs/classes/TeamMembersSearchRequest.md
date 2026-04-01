[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / TeamMembersSearchRequest

# Class: TeamMembersSearchRequest

Describes the request payload to retrieve approved or unapproved members.

**`Generated`**

from message Scailo.TeamMembersSearchRequest

## Hierarchy

- `Message`\<[`TeamMembersSearchRequest`](TeamMembersSearchRequest.md)\>

  ↳ **`TeamMembersSearchRequest`**

## Table of contents

### Constructors

- [constructor](TeamMembersSearchRequest.md#constructor)

### Properties

- [approvedByUserId](TeamMembersSearchRequest.md#approvedbyuserid)
- [approvedOnEnd](TeamMembersSearchRequest.md#approvedonend)
- [approvedOnStart](TeamMembersSearchRequest.md#approvedonstart)
- [approverRoleId](TeamMembersSearchRequest.md#approverroleid)
- [count](TeamMembersSearchRequest.md#count)
- [entityUuid](TeamMembersSearchRequest.md#entityuuid)
- [isActive](TeamMembersSearchRequest.md#isactive)
- [offset](TeamMembersSearchRequest.md#offset)
- [searchKey](TeamMembersSearchRequest.md#searchkey)
- [sortKey](TeamMembersSearchRequest.md#sortkey)
- [sortOrder](TeamMembersSearchRequest.md#sortorder)
- [status](TeamMembersSearchRequest.md#status)
- [teamId](TeamMembersSearchRequest.md#teamid)
- [userId](TeamMembersSearchRequest.md#userid)
- [fields](TeamMembersSearchRequest.md#fields)
- [runtime](TeamMembersSearchRequest.md#runtime)
- [typeName](TeamMembersSearchRequest.md#typename)

### Methods

- [clone](TeamMembersSearchRequest.md#clone)
- [equals](TeamMembersSearchRequest.md#equals)
- [fromBinary](TeamMembersSearchRequest.md#frombinary)
- [fromJson](TeamMembersSearchRequest.md#fromjson)
- [fromJsonString](TeamMembersSearchRequest.md#fromjsonstring)
- [getType](TeamMembersSearchRequest.md#gettype)
- [toBinary](TeamMembersSearchRequest.md#tobinary)
- [toJSON](TeamMembersSearchRequest.md#tojson)
- [toJson](TeamMembersSearchRequest.md#tojson-1)
- [toJsonString](TeamMembersSearchRequest.md#tojsonstring)
- [equals](TeamMembersSearchRequest.md#equals-1)
- [fromBinary](TeamMembersSearchRequest.md#frombinary-1)
- [fromJson](TeamMembersSearchRequest.md#fromjson-1)
- [fromJsonString](TeamMembersSearchRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new TeamMembersSearchRequest**(`data?`): [`TeamMembersSearchRequest`](TeamMembersSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`TeamMembersSearchRequest`](TeamMembersSearchRequest.md)\> |

#### Returns

[`TeamMembersSearchRequest`](TeamMembersSearchRequest.md)

#### Overrides

Message\&lt;TeamMembersSearchRequest\&gt;.constructor

#### Defined in

[src/teams.scailo_pb.ts:2014](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/teams.scailo_pb.ts#L2014)

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 12;

#### Defined in

[src/teams.scailo_pb.ts:1984](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/teams.scailo_pb.ts#L1984)

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 11;

#### Defined in

[src/teams.scailo_pb.ts:1977](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/teams.scailo_pb.ts#L1977)

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 10;

#### Defined in

[src/teams.scailo_pb.ts:1970](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/teams.scailo_pb.ts#L1970)

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 13;

#### Defined in

[src/teams.scailo_pb.ts:1991](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/teams.scailo_pb.ts#L1991)

___

### count

• **count**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

Number of records to fetch. **Critical:** Use `-1` to retrieve all records. A value of `0` will return no results. Default is `0`.

**`Example`**

```ts
100
```

**`Regex`**

^(?:-1|0|[1-9][0-9]*)$

**`Format`**

Must be -1 or any non-negative integer (>= -1).

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/teams.scailo_pb.ts:1902](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/teams.scailo_pb.ts#L1902)

___

### entityUuid

• **entityUuid**: `string` = `""`

**`Optional`**

**`Description`**

Filter by the organization UUID.

**`Example`**

```ts
"550e8400-e29b-41d4-a716-446655440000"
```

**`Regex`**

^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$

**`Format`**

If provided, must be a valid v4 UUID in canonical hyphenated form.

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

[src/teams.scailo_pb.ts:1956](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/teams.scailo_pb.ts#L1956)

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

**`Optional`**

**`Description`**

Filter by active status. If `true`, then returns only active records. If `false`, then returns only inactive records.

**`Example`**

```ts
ANY
```

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/teams.scailo_pb.ts:1886](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/teams.scailo_pb.ts#L1886)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Number of records to skip (offset) for pagination.

**`Example`**

```ts
0
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

[src/teams.scailo_pb.ts:1918](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/teams.scailo_pb.ts#L1918)

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 40;

#### Defined in

[src/teams.scailo_pb.ts:2012](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/teams.scailo_pb.ts#L2012)

___

### sortKey

• **sortKey**: [`TEAM_MEMBER_SORT_KEY`](../enums/TEAM_MEMBER_SORT_KEY.md) = `TEAM_MEMBER_SORT_KEY.TEAM_MEMBER_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: Scailo.TEAM_MEMBER_SORT_KEY sort_key = 5;

#### Defined in

[src/teams.scailo_pb.ts:1940](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/teams.scailo_pb.ts#L1940)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

**`Optional`**

**`Description`**

Sort direction.

**`Example`**

```ts
DESCENDING
```

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

[src/teams.scailo_pb.ts:1930](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/teams.scailo_pb.ts#L1930)

___

### status

• **status**: [`TEAM_MEMBER_STATUS`](../enums/TEAM_MEMBER_STATUS.md) = `TEAM_MEMBER_STATUS.TEAM_MEMBER_STATUS_ANY_UNSPECIFIED`

The status of the members

**`Generated`**

from field: Scailo.TEAM_MEMBER_STATUS status = 7;

#### Defined in

[src/teams.scailo_pb.ts:1963](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/teams.scailo_pb.ts#L1963)

___

### teamId

• **teamId**: `bigint` = `protoInt64.zero`

The ID of the team

**`Generated`**

from field: uint64 team_id = 20;

#### Defined in

[src/teams.scailo_pb.ts:1998](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/teams.scailo_pb.ts#L1998)

___

### userId

• **userId**: `bigint` = `protoInt64.zero`

The ID of the member

**`Generated`**

from field: uint64 user_id = 21;

#### Defined in

[src/teams.scailo_pb.ts:2005](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/teams.scailo_pb.ts#L2005)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/teams.scailo_pb.ts:2021](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/teams.scailo_pb.ts#L2021)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/teams.scailo_pb.ts:2019](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/teams.scailo_pb.ts#L2019)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.TeamMembersSearchRequest"``

#### Defined in

[src/teams.scailo_pb.ts:2020](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/teams.scailo_pb.ts#L2020)

## Methods

### clone

▸ **clone**(): [`TeamMembersSearchRequest`](TeamMembersSearchRequest.md)

Create a deep copy.

#### Returns

[`TeamMembersSearchRequest`](TeamMembersSearchRequest.md)

#### Inherited from

Message.clone

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:28

___

### equals

▸ **equals**(`other`): `boolean`

Compare with a message of the same type.
Note that this function disregards extensions and unknown fields.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `undefined` \| ``null`` \| [`TeamMembersSearchRequest`](TeamMembersSearchRequest.md) \| `PlainMessage`\<[`TeamMembersSearchRequest`](TeamMembersSearchRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:24

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): `this`

Parse from binary data, merging fields.

Repeated fields are appended. Map entries are added, overwriting
existing keys.

If a message field is already present, it will be merged with the
new data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`this`

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:38

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): `this`

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`this`

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:42

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): `this`

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`this`

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:46

___

### getType

▸ **getType**(): `MessageType`\<[`TeamMembersSearchRequest`](TeamMembersSearchRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`TeamMembersSearchRequest`](TeamMembersSearchRequest.md)\>

#### Inherited from

Message.getType

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:81

___

### toBinary

▸ **toBinary**(`options?`): `Uint8Array`

Serialize the message to binary data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<`BinaryWriteOptions`\> |

#### Returns

`Uint8Array`

#### Inherited from

Message.toBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:50

___

### toJSON

▸ **toJSON**(): `JsonValue`

Override for serialization behavior. This will be invoked when calling
JSON.stringify on this message (i.e. JSON.stringify(msg)).

Note that this will not serialize google.protobuf.Any with a packed
message because the protobuf JSON format specifies that it needs to be
unpacked, and this is only possible with a type registry to look up the
message type.  As a result, attempting to serialize a message with this
type will throw an Error.

This method is protected because you should not need to invoke it
directly -- instead use JSON.stringify or toJsonString for
stringified JSON.  Alternatively, if actual JSON is desired, you should
use toJson.

#### Returns

`JsonValue`

#### Inherited from

Message.toJSON

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:75

___

### toJson

▸ **toJson**(`options?`): `JsonValue`

Serialize the message to a JSON value, a JavaScript value that can be
passed to JSON.stringify().

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<`JsonWriteOptions`\> |

#### Returns

`JsonValue`

#### Inherited from

Message.toJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:55

___

### toJsonString

▸ **toJsonString**(`options?`): `string`

Serialize the message to a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<`JsonWriteStringOptions`\> |

#### Returns

`string`

#### Inherited from

Message.toJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:59

___

### equals

▸ **equals**(`a`, `b`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `undefined` \| [`TeamMembersSearchRequest`](TeamMembersSearchRequest.md) \| `PlainMessage`\<[`TeamMembersSearchRequest`](TeamMembersSearchRequest.md)\> |
| `b` | `undefined` \| [`TeamMembersSearchRequest`](TeamMembersSearchRequest.md) \| `PlainMessage`\<[`TeamMembersSearchRequest`](TeamMembersSearchRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/teams.scailo_pb.ts:2050](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/teams.scailo_pb.ts#L2050)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`TeamMembersSearchRequest`](TeamMembersSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`TeamMembersSearchRequest`](TeamMembersSearchRequest.md)

#### Defined in

[src/teams.scailo_pb.ts:2038](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/teams.scailo_pb.ts#L2038)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`TeamMembersSearchRequest`](TeamMembersSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`TeamMembersSearchRequest`](TeamMembersSearchRequest.md)

#### Defined in

[src/teams.scailo_pb.ts:2042](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/teams.scailo_pb.ts#L2042)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`TeamMembersSearchRequest`](TeamMembersSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`TeamMembersSearchRequest`](TeamMembersSearchRequest.md)

#### Defined in

[src/teams.scailo_pb.ts:2046](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/teams.scailo_pb.ts#L2046)
