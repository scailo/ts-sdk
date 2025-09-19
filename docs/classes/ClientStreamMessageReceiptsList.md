[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ClientStreamMessageReceiptsList

# Class: ClientStreamMessageReceiptsList

Describes the message consisting of the list of client stream message receipts

**`Generated`**

from message Scailo.ClientStreamMessageReceiptsList

## Hierarchy

- `Message`\<[`ClientStreamMessageReceiptsList`](ClientStreamMessageReceiptsList.md)\>

  ↳ **`ClientStreamMessageReceiptsList`**

## Table of contents

### Constructors

- [constructor](ClientStreamMessageReceiptsList.md#constructor)

### Properties

- [list](ClientStreamMessageReceiptsList.md#list)
- [fields](ClientStreamMessageReceiptsList.md#fields)
- [runtime](ClientStreamMessageReceiptsList.md#runtime)
- [typeName](ClientStreamMessageReceiptsList.md#typename)

### Methods

- [clone](ClientStreamMessageReceiptsList.md#clone)
- [equals](ClientStreamMessageReceiptsList.md#equals)
- [fromBinary](ClientStreamMessageReceiptsList.md#frombinary)
- [fromJson](ClientStreamMessageReceiptsList.md#fromjson)
- [fromJsonString](ClientStreamMessageReceiptsList.md#fromjsonstring)
- [getType](ClientStreamMessageReceiptsList.md#gettype)
- [toBinary](ClientStreamMessageReceiptsList.md#tobinary)
- [toJSON](ClientStreamMessageReceiptsList.md#tojson)
- [toJson](ClientStreamMessageReceiptsList.md#tojson-1)
- [toJsonString](ClientStreamMessageReceiptsList.md#tojsonstring)
- [equals](ClientStreamMessageReceiptsList.md#equals-1)
- [fromBinary](ClientStreamMessageReceiptsList.md#frombinary-1)
- [fromJson](ClientStreamMessageReceiptsList.md#fromjson-1)
- [fromJsonString](ClientStreamMessageReceiptsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new ClientStreamMessageReceiptsList**(`data?`): [`ClientStreamMessageReceiptsList`](ClientStreamMessageReceiptsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ClientStreamMessageReceiptsList`](ClientStreamMessageReceiptsList.md)\> |

#### Returns

[`ClientStreamMessageReceiptsList`](ClientStreamMessageReceiptsList.md)

#### Overrides

Message\&lt;ClientStreamMessageReceiptsList\&gt;.constructor

#### Defined in

[src/client_streams.scailo_pb.ts:1880](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/client_streams.scailo_pb.ts#L1880)

## Properties

### list

• **list**: [`ClientStreamMessageReceipt`](ClientStreamMessageReceipt.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.ClientStreamMessageReceipt list = 1;

#### Defined in

[src/client_streams.scailo_pb.ts:1878](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/client_streams.scailo_pb.ts#L1878)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/client_streams.scailo_pb.ts:1887](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/client_streams.scailo_pb.ts#L1887)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/client_streams.scailo_pb.ts:1885](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/client_streams.scailo_pb.ts#L1885)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ClientStreamMessageReceiptsList"``

#### Defined in

[src/client_streams.scailo_pb.ts:1886](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/client_streams.scailo_pb.ts#L1886)

## Methods

### clone

▸ **clone**(): [`ClientStreamMessageReceiptsList`](ClientStreamMessageReceiptsList.md)

Create a deep copy.

#### Returns

[`ClientStreamMessageReceiptsList`](ClientStreamMessageReceiptsList.md)

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
| `other` | `undefined` \| ``null`` \| [`ClientStreamMessageReceiptsList`](ClientStreamMessageReceiptsList.md) \| `PlainMessage`\<[`ClientStreamMessageReceiptsList`](ClientStreamMessageReceiptsList.md)\> |

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

▸ **getType**(): `MessageType`\<[`ClientStreamMessageReceiptsList`](ClientStreamMessageReceiptsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ClientStreamMessageReceiptsList`](ClientStreamMessageReceiptsList.md)\>

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
| `a` | `undefined` \| [`ClientStreamMessageReceiptsList`](ClientStreamMessageReceiptsList.md) \| `PlainMessage`\<[`ClientStreamMessageReceiptsList`](ClientStreamMessageReceiptsList.md)\> |
| `b` | `undefined` \| [`ClientStreamMessageReceiptsList`](ClientStreamMessageReceiptsList.md) \| `PlainMessage`\<[`ClientStreamMessageReceiptsList`](ClientStreamMessageReceiptsList.md)\> |

#### Returns

`boolean`

#### Defined in

[src/client_streams.scailo_pb.ts:1903](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/client_streams.scailo_pb.ts#L1903)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ClientStreamMessageReceiptsList`](ClientStreamMessageReceiptsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ClientStreamMessageReceiptsList`](ClientStreamMessageReceiptsList.md)

#### Defined in

[src/client_streams.scailo_pb.ts:1891](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/client_streams.scailo_pb.ts#L1891)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ClientStreamMessageReceiptsList`](ClientStreamMessageReceiptsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ClientStreamMessageReceiptsList`](ClientStreamMessageReceiptsList.md)

#### Defined in

[src/client_streams.scailo_pb.ts:1895](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/client_streams.scailo_pb.ts#L1895)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ClientStreamMessageReceiptsList`](ClientStreamMessageReceiptsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ClientStreamMessageReceiptsList`](ClientStreamMessageReceiptsList.md)

#### Defined in

[src/client_streams.scailo_pb.ts:1899](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/client_streams.scailo_pb.ts#L1899)
