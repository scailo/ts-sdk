[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ClientsServicePaginatedUsersResponse

# Class: ClientsServicePaginatedUsersResponse

Describes the response to a pagination items request

**`Generated`**

from message Scailo.ClientsServicePaginatedUsersResponse

## Hierarchy

- `Message`\<[`ClientsServicePaginatedUsersResponse`](ClientsServicePaginatedUsersResponse.md)\>

  ↳ **`ClientsServicePaginatedUsersResponse`**

## Table of contents

### Constructors

- [constructor](ClientsServicePaginatedUsersResponse.md#constructor)

### Properties

- [count](ClientsServicePaginatedUsersResponse.md#count)
- [offset](ClientsServicePaginatedUsersResponse.md#offset)
- [payload](ClientsServicePaginatedUsersResponse.md#payload)
- [total](ClientsServicePaginatedUsersResponse.md#total)
- [fields](ClientsServicePaginatedUsersResponse.md#fields)
- [runtime](ClientsServicePaginatedUsersResponse.md#runtime)
- [typeName](ClientsServicePaginatedUsersResponse.md#typename)

### Methods

- [clone](ClientsServicePaginatedUsersResponse.md#clone)
- [equals](ClientsServicePaginatedUsersResponse.md#equals)
- [fromBinary](ClientsServicePaginatedUsersResponse.md#frombinary)
- [fromJson](ClientsServicePaginatedUsersResponse.md#fromjson)
- [fromJsonString](ClientsServicePaginatedUsersResponse.md#fromjsonstring)
- [getType](ClientsServicePaginatedUsersResponse.md#gettype)
- [toBinary](ClientsServicePaginatedUsersResponse.md#tobinary)
- [toJSON](ClientsServicePaginatedUsersResponse.md#tojson)
- [toJson](ClientsServicePaginatedUsersResponse.md#tojson-1)
- [toJsonString](ClientsServicePaginatedUsersResponse.md#tojsonstring)
- [equals](ClientsServicePaginatedUsersResponse.md#equals-1)
- [fromBinary](ClientsServicePaginatedUsersResponse.md#frombinary-1)
- [fromJson](ClientsServicePaginatedUsersResponse.md#fromjson-1)
- [fromJsonString](ClientsServicePaginatedUsersResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new ClientsServicePaginatedUsersResponse**(`data?`): [`ClientsServicePaginatedUsersResponse`](ClientsServicePaginatedUsersResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ClientsServicePaginatedUsersResponse`](ClientsServicePaginatedUsersResponse.md)\> |

#### Returns

[`ClientsServicePaginatedUsersResponse`](ClientsServicePaginatedUsersResponse.md)

#### Overrides

Message\&lt;ClientsServicePaginatedUsersResponse\&gt;.constructor

#### Defined in

[src/clients.scailo_pb.ts:1454](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/clients.scailo_pb.ts#L1454)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records in this payload

**`Generated`**

from field: uint64 count = 1;

#### Defined in

[src/clients.scailo_pb.ts:1431](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/clients.scailo_pb.ts#L1431)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that has been offset before fetching the records. This is the same value that has been sent as part of the pagination request

**`Generated`**

from field: uint64 offset = 2;

#### Defined in

[src/clients.scailo_pb.ts:1438](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/clients.scailo_pb.ts#L1438)

___

### payload

• **payload**: [`ClientUser`](ClientUser.md)[] = `[]`

The list of records

**`Generated`**

from field: repeated Scailo.ClientUser payload = 4;

#### Defined in

[src/clients.scailo_pb.ts:1452](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/clients.scailo_pb.ts#L1452)

___

### total

• **total**: `bigint` = `protoInt64.zero`

The total number of records that are available

**`Generated`**

from field: uint64 total = 3;

#### Defined in

[src/clients.scailo_pb.ts:1445](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/clients.scailo_pb.ts#L1445)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/clients.scailo_pb.ts:1461](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/clients.scailo_pb.ts#L1461)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/clients.scailo_pb.ts:1459](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/clients.scailo_pb.ts#L1459)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ClientsServicePaginatedUsersResponse"``

#### Defined in

[src/clients.scailo_pb.ts:1460](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/clients.scailo_pb.ts#L1460)

## Methods

### clone

▸ **clone**(): [`ClientsServicePaginatedUsersResponse`](ClientsServicePaginatedUsersResponse.md)

Create a deep copy.

#### Returns

[`ClientsServicePaginatedUsersResponse`](ClientsServicePaginatedUsersResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`ClientsServicePaginatedUsersResponse`](ClientsServicePaginatedUsersResponse.md) \| `PlainMessage`\<[`ClientsServicePaginatedUsersResponse`](ClientsServicePaginatedUsersResponse.md)\> |

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

▸ **getType**(): `MessageType`\<[`ClientsServicePaginatedUsersResponse`](ClientsServicePaginatedUsersResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ClientsServicePaginatedUsersResponse`](ClientsServicePaginatedUsersResponse.md)\>

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
| `a` | `undefined` \| [`ClientsServicePaginatedUsersResponse`](ClientsServicePaginatedUsersResponse.md) \| `PlainMessage`\<[`ClientsServicePaginatedUsersResponse`](ClientsServicePaginatedUsersResponse.md)\> |
| `b` | `undefined` \| [`ClientsServicePaginatedUsersResponse`](ClientsServicePaginatedUsersResponse.md) \| `PlainMessage`\<[`ClientsServicePaginatedUsersResponse`](ClientsServicePaginatedUsersResponse.md)\> |

#### Returns

`boolean`

#### Defined in

[src/clients.scailo_pb.ts:1480](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/clients.scailo_pb.ts#L1480)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ClientsServicePaginatedUsersResponse`](ClientsServicePaginatedUsersResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ClientsServicePaginatedUsersResponse`](ClientsServicePaginatedUsersResponse.md)

#### Defined in

[src/clients.scailo_pb.ts:1468](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/clients.scailo_pb.ts#L1468)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ClientsServicePaginatedUsersResponse`](ClientsServicePaginatedUsersResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ClientsServicePaginatedUsersResponse`](ClientsServicePaginatedUsersResponse.md)

#### Defined in

[src/clients.scailo_pb.ts:1472](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/clients.scailo_pb.ts#L1472)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ClientsServicePaginatedUsersResponse`](ClientsServicePaginatedUsersResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ClientsServicePaginatedUsersResponse`](ClientsServicePaginatedUsersResponse.md)

#### Defined in

[src/clients.scailo_pb.ts:1476](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/clients.scailo_pb.ts#L1476)
