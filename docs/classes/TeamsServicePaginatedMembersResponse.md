[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / TeamsServicePaginatedMembersResponse

# Class: TeamsServicePaginatedMembersResponse

Describes the response to a pagination members request

**`Generated`**

from message Scailo.TeamsServicePaginatedMembersResponse

## Hierarchy

- `Message`\<[`TeamsServicePaginatedMembersResponse`](TeamsServicePaginatedMembersResponse.md)\>

  ↳ **`TeamsServicePaginatedMembersResponse`**

## Table of contents

### Constructors

- [constructor](TeamsServicePaginatedMembersResponse.md#constructor)

### Properties

- [count](TeamsServicePaginatedMembersResponse.md#count)
- [offset](TeamsServicePaginatedMembersResponse.md#offset)
- [payload](TeamsServicePaginatedMembersResponse.md#payload)
- [total](TeamsServicePaginatedMembersResponse.md#total)
- [fields](TeamsServicePaginatedMembersResponse.md#fields)
- [runtime](TeamsServicePaginatedMembersResponse.md#runtime)
- [typeName](TeamsServicePaginatedMembersResponse.md#typename)

### Methods

- [clone](TeamsServicePaginatedMembersResponse.md#clone)
- [equals](TeamsServicePaginatedMembersResponse.md#equals)
- [fromBinary](TeamsServicePaginatedMembersResponse.md#frombinary)
- [fromJson](TeamsServicePaginatedMembersResponse.md#fromjson)
- [fromJsonString](TeamsServicePaginatedMembersResponse.md#fromjsonstring)
- [getType](TeamsServicePaginatedMembersResponse.md#gettype)
- [toBinary](TeamsServicePaginatedMembersResponse.md#tobinary)
- [toJSON](TeamsServicePaginatedMembersResponse.md#tojson)
- [toJson](TeamsServicePaginatedMembersResponse.md#tojson-1)
- [toJsonString](TeamsServicePaginatedMembersResponse.md#tojsonstring)
- [equals](TeamsServicePaginatedMembersResponse.md#equals-1)
- [fromBinary](TeamsServicePaginatedMembersResponse.md#frombinary-1)
- [fromJson](TeamsServicePaginatedMembersResponse.md#fromjson-1)
- [fromJsonString](TeamsServicePaginatedMembersResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new TeamsServicePaginatedMembersResponse**(`data?`): [`TeamsServicePaginatedMembersResponse`](TeamsServicePaginatedMembersResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`TeamsServicePaginatedMembersResponse`](TeamsServicePaginatedMembersResponse.md)\> |

#### Returns

[`TeamsServicePaginatedMembersResponse`](TeamsServicePaginatedMembersResponse.md)

#### Overrides

Message\&lt;TeamsServicePaginatedMembersResponse\&gt;.constructor

#### Defined in

[src/teams.scailo_pb.ts:1660](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/teams.scailo_pb.ts#L1660)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records in this payload

**`Generated`**

from field: uint64 count = 1;

#### Defined in

[src/teams.scailo_pb.ts:1637](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/teams.scailo_pb.ts#L1637)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that has been offset before fetching the records. This is the same value that has been sent as part of the pagination request

**`Generated`**

from field: uint64 offset = 2;

#### Defined in

[src/teams.scailo_pb.ts:1644](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/teams.scailo_pb.ts#L1644)

___

### payload

• **payload**: [`TeamMember`](TeamMember.md)[] = `[]`

The list of records

**`Generated`**

from field: repeated Scailo.TeamMember payload = 4;

#### Defined in

[src/teams.scailo_pb.ts:1658](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/teams.scailo_pb.ts#L1658)

___

### total

• **total**: `bigint` = `protoInt64.zero`

The total number of records that are available

**`Generated`**

from field: uint64 total = 3;

#### Defined in

[src/teams.scailo_pb.ts:1651](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/teams.scailo_pb.ts#L1651)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/teams.scailo_pb.ts:1667](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/teams.scailo_pb.ts#L1667)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/teams.scailo_pb.ts:1665](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/teams.scailo_pb.ts#L1665)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.TeamsServicePaginatedMembersResponse"``

#### Defined in

[src/teams.scailo_pb.ts:1666](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/teams.scailo_pb.ts#L1666)

## Methods

### clone

▸ **clone**(): [`TeamsServicePaginatedMembersResponse`](TeamsServicePaginatedMembersResponse.md)

Create a deep copy.

#### Returns

[`TeamsServicePaginatedMembersResponse`](TeamsServicePaginatedMembersResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`TeamsServicePaginatedMembersResponse`](TeamsServicePaginatedMembersResponse.md) \| `PlainMessage`\<[`TeamsServicePaginatedMembersResponse`](TeamsServicePaginatedMembersResponse.md)\> |

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

▸ **getType**(): `MessageType`\<[`TeamsServicePaginatedMembersResponse`](TeamsServicePaginatedMembersResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`TeamsServicePaginatedMembersResponse`](TeamsServicePaginatedMembersResponse.md)\>

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
| `a` | `undefined` \| [`TeamsServicePaginatedMembersResponse`](TeamsServicePaginatedMembersResponse.md) \| `PlainMessage`\<[`TeamsServicePaginatedMembersResponse`](TeamsServicePaginatedMembersResponse.md)\> |
| `b` | `undefined` \| [`TeamsServicePaginatedMembersResponse`](TeamsServicePaginatedMembersResponse.md) \| `PlainMessage`\<[`TeamsServicePaginatedMembersResponse`](TeamsServicePaginatedMembersResponse.md)\> |

#### Returns

`boolean`

#### Defined in

[src/teams.scailo_pb.ts:1686](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/teams.scailo_pb.ts#L1686)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`TeamsServicePaginatedMembersResponse`](TeamsServicePaginatedMembersResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`TeamsServicePaginatedMembersResponse`](TeamsServicePaginatedMembersResponse.md)

#### Defined in

[src/teams.scailo_pb.ts:1674](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/teams.scailo_pb.ts#L1674)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`TeamsServicePaginatedMembersResponse`](TeamsServicePaginatedMembersResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`TeamsServicePaginatedMembersResponse`](TeamsServicePaginatedMembersResponse.md)

#### Defined in

[src/teams.scailo_pb.ts:1678](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/teams.scailo_pb.ts#L1678)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`TeamsServicePaginatedMembersResponse`](TeamsServicePaginatedMembersResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`TeamsServicePaginatedMembersResponse`](TeamsServicePaginatedMembersResponse.md)

#### Defined in

[src/teams.scailo_pb.ts:1682](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/teams.scailo_pb.ts#L1682)
