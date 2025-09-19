[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / TeamsServicePaginationReq

# Class: TeamsServicePaginationReq

Describes a pagination request to retrieve records

**`Generated`**

from message Scailo.TeamsServicePaginationReq

## Hierarchy

- `Message`\<[`TeamsServicePaginationReq`](TeamsServicePaginationReq.md)\>

  ↳ **`TeamsServicePaginationReq`**

## Table of contents

### Constructors

- [constructor](TeamsServicePaginationReq.md#constructor)

### Properties

- [count](TeamsServicePaginationReq.md#count)
- [isActive](TeamsServicePaginationReq.md#isactive)
- [offset](TeamsServicePaginationReq.md#offset)
- [sortKey](TeamsServicePaginationReq.md#sortkey)
- [sortOrder](TeamsServicePaginationReq.md#sortorder)
- [status](TeamsServicePaginationReq.md#status)
- [fields](TeamsServicePaginationReq.md#fields)
- [runtime](TeamsServicePaginationReq.md#runtime)
- [typeName](TeamsServicePaginationReq.md#typename)

### Methods

- [clone](TeamsServicePaginationReq.md#clone)
- [equals](TeamsServicePaginationReq.md#equals)
- [fromBinary](TeamsServicePaginationReq.md#frombinary)
- [fromJson](TeamsServicePaginationReq.md#fromjson)
- [fromJsonString](TeamsServicePaginationReq.md#fromjsonstring)
- [getType](TeamsServicePaginationReq.md#gettype)
- [toBinary](TeamsServicePaginationReq.md#tobinary)
- [toJSON](TeamsServicePaginationReq.md#tojson)
- [toJson](TeamsServicePaginationReq.md#tojson-1)
- [toJsonString](TeamsServicePaginationReq.md#tojsonstring)
- [equals](TeamsServicePaginationReq.md#equals-1)
- [fromBinary](TeamsServicePaginationReq.md#frombinary-1)
- [fromJson](TeamsServicePaginationReq.md#fromjson-1)
- [fromJsonString](TeamsServicePaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new TeamsServicePaginationReq**(`data?`): [`TeamsServicePaginationReq`](TeamsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`TeamsServicePaginationReq`](TeamsServicePaginationReq.md)\> |

#### Returns

[`TeamsServicePaginationReq`](TeamsServicePaginationReq.md)

#### Overrides

Message\&lt;TeamsServicePaginationReq\&gt;.constructor

#### Defined in

[src/teams.scailo_pb.ts:910](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/teams.scailo_pb.ts#L910)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/teams.scailo_pb.ts:880](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/teams.scailo_pb.ts#L880)

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/teams.scailo_pb.ts:873](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/teams.scailo_pb.ts#L873)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

[src/teams.scailo_pb.ts:887](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/teams.scailo_pb.ts#L887)

___

### sortKey

• **sortKey**: [`TEAM_SORT_KEY`](../enums/TEAM_SORT_KEY.md) = `TEAM_SORT_KEY.TEAM_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.TEAM_SORT_KEY sort_key = 5;

#### Defined in

[src/teams.scailo_pb.ts:901](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/teams.scailo_pb.ts#L901)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

[src/teams.scailo_pb.ts:894](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/teams.scailo_pb.ts#L894)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this team

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 6;

#### Defined in

[src/teams.scailo_pb.ts:908](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/teams.scailo_pb.ts#L908)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/teams.scailo_pb.ts:917](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/teams.scailo_pb.ts#L917)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/teams.scailo_pb.ts:915](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/teams.scailo_pb.ts#L915)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.TeamsServicePaginationReq"``

#### Defined in

[src/teams.scailo_pb.ts:916](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/teams.scailo_pb.ts#L916)

## Methods

### clone

▸ **clone**(): [`TeamsServicePaginationReq`](TeamsServicePaginationReq.md)

Create a deep copy.

#### Returns

[`TeamsServicePaginationReq`](TeamsServicePaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`TeamsServicePaginationReq`](TeamsServicePaginationReq.md) \| `PlainMessage`\<[`TeamsServicePaginationReq`](TeamsServicePaginationReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`TeamsServicePaginationReq`](TeamsServicePaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`TeamsServicePaginationReq`](TeamsServicePaginationReq.md)\>

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
| `a` | `undefined` \| [`TeamsServicePaginationReq`](TeamsServicePaginationReq.md) \| `PlainMessage`\<[`TeamsServicePaginationReq`](TeamsServicePaginationReq.md)\> |
| `b` | `undefined` \| [`TeamsServicePaginationReq`](TeamsServicePaginationReq.md) \| `PlainMessage`\<[`TeamsServicePaginationReq`](TeamsServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/teams.scailo_pb.ts:938](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/teams.scailo_pb.ts#L938)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`TeamsServicePaginationReq`](TeamsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`TeamsServicePaginationReq`](TeamsServicePaginationReq.md)

#### Defined in

[src/teams.scailo_pb.ts:926](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/teams.scailo_pb.ts#L926)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`TeamsServicePaginationReq`](TeamsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`TeamsServicePaginationReq`](TeamsServicePaginationReq.md)

#### Defined in

[src/teams.scailo_pb.ts:930](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/teams.scailo_pb.ts#L930)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`TeamsServicePaginationReq`](TeamsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`TeamsServicePaginationReq`](TeamsServicePaginationReq.md)

#### Defined in

[src/teams.scailo_pb.ts:934](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/teams.scailo_pb.ts#L934)
