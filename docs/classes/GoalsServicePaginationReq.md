[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / GoalsServicePaginationReq

# Class: GoalsServicePaginationReq

Describes a pagination request to retrieve records

**`Generated`**

from message Scailo.GoalsServicePaginationReq

## Hierarchy

- `Message`\<[`GoalsServicePaginationReq`](GoalsServicePaginationReq.md)\>

  ↳ **`GoalsServicePaginationReq`**

## Table of contents

### Constructors

- [constructor](GoalsServicePaginationReq.md#constructor)

### Properties

- [count](GoalsServicePaginationReq.md#count)
- [isActive](GoalsServicePaginationReq.md#isactive)
- [offset](GoalsServicePaginationReq.md#offset)
- [sortKey](GoalsServicePaginationReq.md#sortkey)
- [sortOrder](GoalsServicePaginationReq.md#sortorder)
- [status](GoalsServicePaginationReq.md#status)
- [fields](GoalsServicePaginationReq.md#fields)
- [runtime](GoalsServicePaginationReq.md#runtime)
- [typeName](GoalsServicePaginationReq.md#typename)

### Methods

- [clone](GoalsServicePaginationReq.md#clone)
- [equals](GoalsServicePaginationReq.md#equals)
- [fromBinary](GoalsServicePaginationReq.md#frombinary)
- [fromJson](GoalsServicePaginationReq.md#fromjson)
- [fromJsonString](GoalsServicePaginationReq.md#fromjsonstring)
- [getType](GoalsServicePaginationReq.md#gettype)
- [toBinary](GoalsServicePaginationReq.md#tobinary)
- [toJSON](GoalsServicePaginationReq.md#tojson)
- [toJson](GoalsServicePaginationReq.md#tojson-1)
- [toJsonString](GoalsServicePaginationReq.md#tojsonstring)
- [equals](GoalsServicePaginationReq.md#equals-1)
- [fromBinary](GoalsServicePaginationReq.md#frombinary-1)
- [fromJson](GoalsServicePaginationReq.md#fromjson-1)
- [fromJsonString](GoalsServicePaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new GoalsServicePaginationReq**(`data?`): [`GoalsServicePaginationReq`](GoalsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`GoalsServicePaginationReq`](GoalsServicePaginationReq.md)\> |

#### Returns

[`GoalsServicePaginationReq`](GoalsServicePaginationReq.md)

#### Overrides

Message\&lt;GoalsServicePaginationReq\&gt;.constructor

#### Defined in

[src/goals.scailo_pb.ts:1398](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/goals.scailo_pb.ts#L1398)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/goals.scailo_pb.ts:1368](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/goals.scailo_pb.ts#L1368)

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/goals.scailo_pb.ts:1361](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/goals.scailo_pb.ts#L1361)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

[src/goals.scailo_pb.ts:1375](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/goals.scailo_pb.ts#L1375)

___

### sortKey

• **sortKey**: [`GOAL_SORT_KEY`](../enums/GOAL_SORT_KEY.md) = `GOAL_SORT_KEY.GOAL_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.GOAL_SORT_KEY sort_key = 5;

#### Defined in

[src/goals.scailo_pb.ts:1389](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/goals.scailo_pb.ts#L1389)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

[src/goals.scailo_pb.ts:1382](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/goals.scailo_pb.ts#L1382)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this goal

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 6;

#### Defined in

[src/goals.scailo_pb.ts:1396](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/goals.scailo_pb.ts#L1396)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/goals.scailo_pb.ts:1405](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/goals.scailo_pb.ts#L1405)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/goals.scailo_pb.ts:1403](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/goals.scailo_pb.ts#L1403)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.GoalsServicePaginationReq"``

#### Defined in

[src/goals.scailo_pb.ts:1404](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/goals.scailo_pb.ts#L1404)

## Methods

### clone

▸ **clone**(): [`GoalsServicePaginationReq`](GoalsServicePaginationReq.md)

Create a deep copy.

#### Returns

[`GoalsServicePaginationReq`](GoalsServicePaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`GoalsServicePaginationReq`](GoalsServicePaginationReq.md) \| `PlainMessage`\<[`GoalsServicePaginationReq`](GoalsServicePaginationReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`GoalsServicePaginationReq`](GoalsServicePaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`GoalsServicePaginationReq`](GoalsServicePaginationReq.md)\>

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
| `a` | `undefined` \| [`GoalsServicePaginationReq`](GoalsServicePaginationReq.md) \| `PlainMessage`\<[`GoalsServicePaginationReq`](GoalsServicePaginationReq.md)\> |
| `b` | `undefined` \| [`GoalsServicePaginationReq`](GoalsServicePaginationReq.md) \| `PlainMessage`\<[`GoalsServicePaginationReq`](GoalsServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/goals.scailo_pb.ts:1426](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/goals.scailo_pb.ts#L1426)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`GoalsServicePaginationReq`](GoalsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`GoalsServicePaginationReq`](GoalsServicePaginationReq.md)

#### Defined in

[src/goals.scailo_pb.ts:1414](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/goals.scailo_pb.ts#L1414)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`GoalsServicePaginationReq`](GoalsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GoalsServicePaginationReq`](GoalsServicePaginationReq.md)

#### Defined in

[src/goals.scailo_pb.ts:1418](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/goals.scailo_pb.ts#L1418)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`GoalsServicePaginationReq`](GoalsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GoalsServicePaginationReq`](GoalsServicePaginationReq.md)

#### Defined in

[src/goals.scailo_pb.ts:1422](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/goals.scailo_pb.ts#L1422)
