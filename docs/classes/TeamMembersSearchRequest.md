[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / TeamMembersSearchRequest

# Class: TeamMembersSearchRequest

Request payload structure used to search and filter Team Member records.
Supports pagination controls, tenancy isolation, status grouping, and text-based matching.

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

[src/teams.scailo_pb.ts:2382](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/teams.scailo_pb.ts#L2382)

## Properties

### approvedByUserId

• `Optional` **approvedByUserId**: `bigint`

**`Optional`**

**`Description`**

Filter by the specific user ID who approved the records.

**`Example`**

```ts
501
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 approved_by_user_id = 12;

#### Defined in

[src/teams.scailo_pb.ts:2316](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/teams.scailo_pb.ts#L2316)

___

### approvedOnEnd

• `Optional` **approvedOnEnd**: `bigint`

**`Optional`**

**`Description`**

Filter records approved ON or BEFORE this UNIX timestamp.

**`Example`**

```ts
1704067199
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 approved_on_end = 11;

#### Defined in

[src/teams.scailo_pb.ts:2300](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/teams.scailo_pb.ts#L2300)

___

### approvedOnStart

• `Optional` **approvedOnStart**: `bigint`

**`Optional`**

**`Description`**

Filter records approved ON or AFTER this UNIX timestamp.

**`Example`**

```ts
1672531200
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 approved_on_start = 10;

#### Defined in

[src/teams.scailo_pb.ts:2284](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/teams.scailo_pb.ts#L2284)

___

### approverRoleId

• `Optional` **approverRoleId**: `bigint`

**`Optional`**

**`Description`**

Filter by the role ID of the approver.

**`Example`**

```ts
5
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 approver_role_id = 13;

#### Defined in

[src/teams.scailo_pb.ts:2332](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/teams.scailo_pb.ts#L2332)

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

[src/teams.scailo_pb.ts:2202](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/teams.scailo_pb.ts#L2202)

___

### entityUuid

• `Optional` **entityUuid**: `string`

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

from field: optional string entity_uuid = 6;

#### Defined in

[src/teams.scailo_pb.ts:2256](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/teams.scailo_pb.ts#L2256)

___

### isActive

• `Optional` **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md)

**`Optional`**

**`Description`**

Filter by active status. If `true`, then returns only active records. If `false`, then returns only inactive records.

**`Example`**

```ts
ANY
```

**`Generated`**

from field: optional Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/teams.scailo_pb.ts:2186](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/teams.scailo_pb.ts#L2186)

___

### offset

• `Optional` **offset**: `bigint`

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

from field: optional uint64 offset = 3;

#### Defined in

[src/teams.scailo_pb.ts:2218](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/teams.scailo_pb.ts#L2218)

___

### searchKey

• `Optional` **searchKey**: `string`

**`Optional`**

**`Description`**

The search string to match against reference IDs.

**`Example`**

```ts
"Medical 2023"
```

**`Regex`**

.*

@format: May contain any UTF-8 characters.

**`Generated`**

from field: optional string search_key = 40;

#### Defined in

[src/teams.scailo_pb.ts:2380](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/teams.scailo_pb.ts#L2380)

___

### sortKey

• `Optional` **sortKey**: [`TEAM_MEMBER_SORT_KEY`](../enums/TEAM_MEMBER_SORT_KEY.md)

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: optional Scailo.TEAM_MEMBER_SORT_KEY sort_key = 5;

#### Defined in

[src/teams.scailo_pb.ts:2240](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/teams.scailo_pb.ts#L2240)

___

### sortOrder

• `Optional` **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md)

**`Optional`**

**`Description`**

Sort direction.

**`Example`**

```ts
DESCENDING
```

**`Generated`**

from field: optional Scailo.SORT_ORDER sort_order = 4;

#### Defined in

[src/teams.scailo_pb.ts:2230](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/teams.scailo_pb.ts#L2230)

___

### status

• `Optional` **status**: [`TEAM_MEMBER_STATUS`](../enums/TEAM_MEMBER_STATUS.md)

**`Optional`**

**`Description`**

Filter records by their verification lifecycle state (e.g., Approved, Unapproved). Defaults to unspecified/any.

**`Example`**

```ts
TEAM_MEMBER_STATUS_APPROVED
```

**`Generated`**

from field: optional Scailo.TEAM_MEMBER_STATUS status = 7;

#### Defined in

[src/teams.scailo_pb.ts:2268](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/teams.scailo_pb.ts#L2268)

___

### teamId

• `Optional` **teamId**: `bigint`

**`Optional`**

**`Description`**

The unique internal identifier of the target team to which the user will be added.

**`Example`**

```ts
105
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Unsigned 64-bit integer greater than 0.

**`Generated`**

from field: optional uint64 team_id = 20;

#### Defined in

[src/teams.scailo_pb.ts:2348](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/teams.scailo_pb.ts#L2348)

___

### userId

• `Optional` **userId**: `bigint`

**`Optional`**

**`Description`**

The unique internal identifier of the user being mapped to the team.

**`Example`**

```ts
420
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Unsigned 64-bit integer greater than 0.

**`Generated`**

from field: optional uint64 user_id = 21;

#### Defined in

[src/teams.scailo_pb.ts:2364](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/teams.scailo_pb.ts#L2364)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/teams.scailo_pb.ts:2389](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/teams.scailo_pb.ts#L2389)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/teams.scailo_pb.ts:2387](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/teams.scailo_pb.ts#L2387)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.TeamMembersSearchRequest"``

#### Defined in

[src/teams.scailo_pb.ts:2388](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/teams.scailo_pb.ts#L2388)

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

[src/teams.scailo_pb.ts:2418](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/teams.scailo_pb.ts#L2418)

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

[src/teams.scailo_pb.ts:2406](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/teams.scailo_pb.ts#L2406)

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

[src/teams.scailo_pb.ts:2410](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/teams.scailo_pb.ts#L2410)

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

[src/teams.scailo_pb.ts:2414](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/teams.scailo_pb.ts#L2414)
