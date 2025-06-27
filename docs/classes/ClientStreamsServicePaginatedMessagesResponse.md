[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ClientStreamsServicePaginatedMessagesResponse

# Class: ClientStreamsServicePaginatedMessagesResponse

Describes the response to a pagination messages request

**`Generated`**

from message Scailo.ClientStreamsServicePaginatedMessagesResponse

## Hierarchy

- `Message`\<[`ClientStreamsServicePaginatedMessagesResponse`](ClientStreamsServicePaginatedMessagesResponse.md)\>

  ↳ **`ClientStreamsServicePaginatedMessagesResponse`**

## Table of contents

### Constructors

- [constructor](ClientStreamsServicePaginatedMessagesResponse.md#constructor)

### Properties

- [count](ClientStreamsServicePaginatedMessagesResponse.md#count)
- [offset](ClientStreamsServicePaginatedMessagesResponse.md#offset)
- [payload](ClientStreamsServicePaginatedMessagesResponse.md#payload)
- [total](ClientStreamsServicePaginatedMessagesResponse.md#total)
- [fields](ClientStreamsServicePaginatedMessagesResponse.md#fields)
- [runtime](ClientStreamsServicePaginatedMessagesResponse.md#runtime)
- [typeName](ClientStreamsServicePaginatedMessagesResponse.md#typename)

### Methods

- [clone](ClientStreamsServicePaginatedMessagesResponse.md#clone)
- [equals](ClientStreamsServicePaginatedMessagesResponse.md#equals)
- [fromBinary](ClientStreamsServicePaginatedMessagesResponse.md#frombinary)
- [fromJson](ClientStreamsServicePaginatedMessagesResponse.md#fromjson)
- [fromJsonString](ClientStreamsServicePaginatedMessagesResponse.md#fromjsonstring)
- [getType](ClientStreamsServicePaginatedMessagesResponse.md#gettype)
- [toBinary](ClientStreamsServicePaginatedMessagesResponse.md#tobinary)
- [toJSON](ClientStreamsServicePaginatedMessagesResponse.md#tojson)
- [toJson](ClientStreamsServicePaginatedMessagesResponse.md#tojson-1)
- [toJsonString](ClientStreamsServicePaginatedMessagesResponse.md#tojsonstring)
- [equals](ClientStreamsServicePaginatedMessagesResponse.md#equals-1)
- [fromBinary](ClientStreamsServicePaginatedMessagesResponse.md#frombinary-1)
- [fromJson](ClientStreamsServicePaginatedMessagesResponse.md#fromjson-1)
- [fromJsonString](ClientStreamsServicePaginatedMessagesResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new ClientStreamsServicePaginatedMessagesResponse**(`data?`): [`ClientStreamsServicePaginatedMessagesResponse`](ClientStreamsServicePaginatedMessagesResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ClientStreamsServicePaginatedMessagesResponse`](ClientStreamsServicePaginatedMessagesResponse.md)\> |

#### Returns

[`ClientStreamsServicePaginatedMessagesResponse`](ClientStreamsServicePaginatedMessagesResponse.md)

#### Overrides

Message\&lt;ClientStreamsServicePaginatedMessagesResponse\&gt;.constructor

#### Defined in

src/client_streams.scailo_pb.ts:1753

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records in this payload

**`Generated`**

from field: uint64 count = 1;

#### Defined in

src/client_streams.scailo_pb.ts:1730

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that has been offset before fetching the records. This is the same value that has been sent as part of the pagination request

**`Generated`**

from field: uint64 offset = 2;

#### Defined in

src/client_streams.scailo_pb.ts:1737

___

### payload

• **payload**: [`ClientStreamMessage`](ClientStreamMessage.md)[] = `[]`

The list of records

**`Generated`**

from field: repeated Scailo.ClientStreamMessage payload = 4;

#### Defined in

src/client_streams.scailo_pb.ts:1751

___

### total

• **total**: `bigint` = `protoInt64.zero`

The total number of records that are available

**`Generated`**

from field: uint64 total = 3;

#### Defined in

src/client_streams.scailo_pb.ts:1744

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/client_streams.scailo_pb.ts:1760

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/client_streams.scailo_pb.ts:1758

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ClientStreamsServicePaginatedMessagesResponse"``

#### Defined in

src/client_streams.scailo_pb.ts:1759

## Methods

### clone

▸ **clone**(): [`ClientStreamsServicePaginatedMessagesResponse`](ClientStreamsServicePaginatedMessagesResponse.md)

Create a deep copy.

#### Returns

[`ClientStreamsServicePaginatedMessagesResponse`](ClientStreamsServicePaginatedMessagesResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`ClientStreamsServicePaginatedMessagesResponse`](ClientStreamsServicePaginatedMessagesResponse.md) \| `PlainMessage`\<[`ClientStreamsServicePaginatedMessagesResponse`](ClientStreamsServicePaginatedMessagesResponse.md)\> |

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

▸ **getType**(): `MessageType`\<[`ClientStreamsServicePaginatedMessagesResponse`](ClientStreamsServicePaginatedMessagesResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ClientStreamsServicePaginatedMessagesResponse`](ClientStreamsServicePaginatedMessagesResponse.md)\>

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
| `a` | `undefined` \| [`ClientStreamsServicePaginatedMessagesResponse`](ClientStreamsServicePaginatedMessagesResponse.md) \| `PlainMessage`\<[`ClientStreamsServicePaginatedMessagesResponse`](ClientStreamsServicePaginatedMessagesResponse.md)\> |
| `b` | `undefined` \| [`ClientStreamsServicePaginatedMessagesResponse`](ClientStreamsServicePaginatedMessagesResponse.md) \| `PlainMessage`\<[`ClientStreamsServicePaginatedMessagesResponse`](ClientStreamsServicePaginatedMessagesResponse.md)\> |

#### Returns

`boolean`

#### Defined in

src/client_streams.scailo_pb.ts:1779

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ClientStreamsServicePaginatedMessagesResponse`](ClientStreamsServicePaginatedMessagesResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ClientStreamsServicePaginatedMessagesResponse`](ClientStreamsServicePaginatedMessagesResponse.md)

#### Defined in

src/client_streams.scailo_pb.ts:1767

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ClientStreamsServicePaginatedMessagesResponse`](ClientStreamsServicePaginatedMessagesResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ClientStreamsServicePaginatedMessagesResponse`](ClientStreamsServicePaginatedMessagesResponse.md)

#### Defined in

src/client_streams.scailo_pb.ts:1771

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ClientStreamsServicePaginatedMessagesResponse`](ClientStreamsServicePaginatedMessagesResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ClientStreamsServicePaginatedMessagesResponse`](ClientStreamsServicePaginatedMessagesResponse.md)

#### Defined in

src/client_streams.scailo_pb.ts:1775
