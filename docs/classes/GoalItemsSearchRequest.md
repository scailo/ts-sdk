[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / GoalItemsSearchRequest

# Class: GoalItemsSearchRequest

Describes the request payload to retrieve approved or unapproved items.

**`Generated`**

from message Scailo.GoalItemsSearchRequest

## Hierarchy

- `Message`\<[`GoalItemsSearchRequest`](GoalItemsSearchRequest.md)\>

  ↳ **`GoalItemsSearchRequest`**

## Table of contents

### Constructors

- [constructor](GoalItemsSearchRequest.md#constructor)

### Properties

- [approvedByUserId](GoalItemsSearchRequest.md#approvedbyuserid)
- [approvedOnEnd](GoalItemsSearchRequest.md#approvedonend)
- [approvedOnStart](GoalItemsSearchRequest.md#approvedonstart)
- [approverRoleId](GoalItemsSearchRequest.md#approverroleid)
- [count](GoalItemsSearchRequest.md#count)
- [entityUuid](GoalItemsSearchRequest.md#entityuuid)
- [goalId](GoalItemsSearchRequest.md#goalid)
- [isActive](GoalItemsSearchRequest.md#isactive)
- [labelId](GoalItemsSearchRequest.md#labelid)
- [offset](GoalItemsSearchRequest.md#offset)
- [searchKey](GoalItemsSearchRequest.md#searchkey)
- [sortKey](GoalItemsSearchRequest.md#sortkey)
- [sortOrder](GoalItemsSearchRequest.md#sortorder)
- [status](GoalItemsSearchRequest.md#status)
- [fields](GoalItemsSearchRequest.md#fields)
- [runtime](GoalItemsSearchRequest.md#runtime)
- [typeName](GoalItemsSearchRequest.md#typename)

### Methods

- [clone](GoalItemsSearchRequest.md#clone)
- [equals](GoalItemsSearchRequest.md#equals)
- [fromBinary](GoalItemsSearchRequest.md#frombinary)
- [fromJson](GoalItemsSearchRequest.md#fromjson)
- [fromJsonString](GoalItemsSearchRequest.md#fromjsonstring)
- [getType](GoalItemsSearchRequest.md#gettype)
- [toBinary](GoalItemsSearchRequest.md#tobinary)
- [toJSON](GoalItemsSearchRequest.md#tojson)
- [toJson](GoalItemsSearchRequest.md#tojson-1)
- [toJsonString](GoalItemsSearchRequest.md#tojsonstring)
- [equals](GoalItemsSearchRequest.md#equals-1)
- [fromBinary](GoalItemsSearchRequest.md#frombinary-1)
- [fromJson](GoalItemsSearchRequest.md#fromjson-1)
- [fromJsonString](GoalItemsSearchRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new GoalItemsSearchRequest**(`data?`): [`GoalItemsSearchRequest`](GoalItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`GoalItemsSearchRequest`](GoalItemsSearchRequest.md)\> |

#### Returns

[`GoalItemsSearchRequest`](GoalItemsSearchRequest.md)

#### Overrides

Message\&lt;GoalItemsSearchRequest\&gt;.constructor

#### Defined in

[src/goals.scailo_pb.ts:1357](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/goals.scailo_pb.ts#L1357)

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 12;

#### Defined in

[src/goals.scailo_pb.ts:1327](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/goals.scailo_pb.ts#L1327)

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 11;

#### Defined in

[src/goals.scailo_pb.ts:1320](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/goals.scailo_pb.ts#L1320)

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 10;

#### Defined in

[src/goals.scailo_pb.ts:1313](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/goals.scailo_pb.ts#L1313)

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 13;

#### Defined in

[src/goals.scailo_pb.ts:1334](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/goals.scailo_pb.ts#L1334)

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

[src/goals.scailo_pb.ts:1245](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/goals.scailo_pb.ts#L1245)

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

[src/goals.scailo_pb.ts:1299](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/goals.scailo_pb.ts#L1299)

___

### goalId

• **goalId**: `bigint` = `protoInt64.zero`

Stores the goal ID

**`Generated`**

from field: uint64 goal_id = 20;

#### Defined in

[src/goals.scailo_pb.ts:1341](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/goals.scailo_pb.ts#L1341)

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

[src/goals.scailo_pb.ts:1229](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/goals.scailo_pb.ts#L1229)

___

### labelId

• **labelId**: `bigint` = `protoInt64.zero`

Stores an optional label

**`Generated`**

from field: uint64 label_id = 21;

#### Defined in

[src/goals.scailo_pb.ts:1348](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/goals.scailo_pb.ts#L1348)

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

[src/goals.scailo_pb.ts:1261](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/goals.scailo_pb.ts#L1261)

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 40;

#### Defined in

[src/goals.scailo_pb.ts:1355](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/goals.scailo_pb.ts#L1355)

___

### sortKey

• **sortKey**: [`GOAL_ITEM_SORT_KEY`](../enums/GOAL_ITEM_SORT_KEY.md) = `GOAL_ITEM_SORT_KEY.GOAL_ITEM_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: Scailo.GOAL_ITEM_SORT_KEY sort_key = 5;

#### Defined in

[src/goals.scailo_pb.ts:1283](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/goals.scailo_pb.ts#L1283)

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

[src/goals.scailo_pb.ts:1273](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/goals.scailo_pb.ts#L1273)

___

### status

• **status**: [`GOAL_ITEM_STATUS`](../enums/GOAL_ITEM_STATUS.md) = `GOAL_ITEM_STATUS.GOAL_ITEM_STATUS_ANY_UNSPECIFIED`

The status of the items

**`Generated`**

from field: Scailo.GOAL_ITEM_STATUS status = 7;

#### Defined in

[src/goals.scailo_pb.ts:1306](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/goals.scailo_pb.ts#L1306)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/goals.scailo_pb.ts:1364](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/goals.scailo_pb.ts#L1364)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/goals.scailo_pb.ts:1362](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/goals.scailo_pb.ts#L1362)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.GoalItemsSearchRequest"``

#### Defined in

[src/goals.scailo_pb.ts:1363](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/goals.scailo_pb.ts#L1363)

## Methods

### clone

▸ **clone**(): [`GoalItemsSearchRequest`](GoalItemsSearchRequest.md)

Create a deep copy.

#### Returns

[`GoalItemsSearchRequest`](GoalItemsSearchRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`GoalItemsSearchRequest`](GoalItemsSearchRequest.md) \| `PlainMessage`\<[`GoalItemsSearchRequest`](GoalItemsSearchRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`GoalItemsSearchRequest`](GoalItemsSearchRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`GoalItemsSearchRequest`](GoalItemsSearchRequest.md)\>

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
| `a` | `undefined` \| [`GoalItemsSearchRequest`](GoalItemsSearchRequest.md) \| `PlainMessage`\<[`GoalItemsSearchRequest`](GoalItemsSearchRequest.md)\> |
| `b` | `undefined` \| [`GoalItemsSearchRequest`](GoalItemsSearchRequest.md) \| `PlainMessage`\<[`GoalItemsSearchRequest`](GoalItemsSearchRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/goals.scailo_pb.ts:1393](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/goals.scailo_pb.ts#L1393)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`GoalItemsSearchRequest`](GoalItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`GoalItemsSearchRequest`](GoalItemsSearchRequest.md)

#### Defined in

[src/goals.scailo_pb.ts:1381](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/goals.scailo_pb.ts#L1381)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`GoalItemsSearchRequest`](GoalItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GoalItemsSearchRequest`](GoalItemsSearchRequest.md)

#### Defined in

[src/goals.scailo_pb.ts:1385](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/goals.scailo_pb.ts#L1385)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`GoalItemsSearchRequest`](GoalItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GoalItemsSearchRequest`](GoalItemsSearchRequest.md)

#### Defined in

[src/goals.scailo_pb.ts:1389](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/goals.scailo_pb.ts#L1389)
