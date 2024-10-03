[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ClientStreamMessageReceipt

# Class: ClientStreamMessageReceipt

Describes the parameters that constitute a message receipt

**`Generated`**

from message Scailo.ClientStreamMessageReceipt

## Hierarchy

- `Message`\<[`ClientStreamMessageReceipt`](ClientStreamMessageReceipt.md)\>

  ↳ **`ClientStreamMessageReceipt`**

## Table of contents

### Constructors

- [constructor](ClientStreamMessageReceipt.md#constructor)

### Properties

- [clientStreamMessageUuid](ClientStreamMessageReceipt.md#clientstreammessageuuid)
- [entityUuid](ClientStreamMessageReceipt.md#entityuuid)
- [isRead](ClientStreamMessageReceipt.md#isread)
- [metadata](ClientStreamMessageReceipt.md#metadata)
- [readAt](ClientStreamMessageReceipt.md#readat)
- [userId](ClientStreamMessageReceipt.md#userid)
- [fields](ClientStreamMessageReceipt.md#fields)
- [runtime](ClientStreamMessageReceipt.md#runtime)
- [typeName](ClientStreamMessageReceipt.md#typename)

### Methods

- [clone](ClientStreamMessageReceipt.md#clone)
- [equals](ClientStreamMessageReceipt.md#equals)
- [fromBinary](ClientStreamMessageReceipt.md#frombinary)
- [fromJson](ClientStreamMessageReceipt.md#fromjson)
- [fromJsonString](ClientStreamMessageReceipt.md#fromjsonstring)
- [getType](ClientStreamMessageReceipt.md#gettype)
- [toBinary](ClientStreamMessageReceipt.md#tobinary)
- [toJSON](ClientStreamMessageReceipt.md#tojson)
- [toJson](ClientStreamMessageReceipt.md#tojson-1)
- [toJsonString](ClientStreamMessageReceipt.md#tojsonstring)
- [equals](ClientStreamMessageReceipt.md#equals-1)
- [fromBinary](ClientStreamMessageReceipt.md#frombinary-1)
- [fromJson](ClientStreamMessageReceipt.md#fromjson-1)
- [fromJsonString](ClientStreamMessageReceipt.md#fromjsonstring-1)

## Constructors

### constructor

• **new ClientStreamMessageReceipt**(`data?`): [`ClientStreamMessageReceipt`](ClientStreamMessageReceipt.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ClientStreamMessageReceipt`](ClientStreamMessageReceipt.md)\> |

#### Returns

[`ClientStreamMessageReceipt`](ClientStreamMessageReceipt.md)

#### Overrides

Message\&lt;ClientStreamMessageReceipt\&gt;.constructor

#### Defined in

src/client_streams.scailo_pb.ts:1825

## Properties

### clientStreamMessageUuid

• **clientStreamMessageUuid**: `string` = `""`

Stores the client stream message UUID

**`Generated`**

from field: string client_stream_message_uuid = 10;

#### Defined in

src/client_streams.scailo_pb.ts:1802

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/client_streams.scailo_pb.ts:1788

___

### isRead

• **isRead**: `boolean` = `false`

Stores if the message has been read by the user

**`Generated`**

from field: bool is_read = 12;

#### Defined in

src/client_streams.scailo_pb.ts:1816

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this client stream

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

src/client_streams.scailo_pb.ts:1795

___

### readAt

• **readAt**: `bigint` = `protoInt64.zero`

Stores the timestamp of when the message was read

**`Generated`**

from field: uint64 read_at = 13;

#### Defined in

src/client_streams.scailo_pb.ts:1823

___

### userId

• **userId**: `bigint` = `protoInt64.zero`

The ID of the user who read this

**`Generated`**

from field: uint64 user_id = 11;

#### Defined in

src/client_streams.scailo_pb.ts:1809

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/client_streams.scailo_pb.ts:1832

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/client_streams.scailo_pb.ts:1830

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ClientStreamMessageReceipt"``

#### Defined in

src/client_streams.scailo_pb.ts:1831

## Methods

### clone

▸ **clone**(): [`ClientStreamMessageReceipt`](ClientStreamMessageReceipt.md)

Create a deep copy.

#### Returns

[`ClientStreamMessageReceipt`](ClientStreamMessageReceipt.md)

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
| `other` | `undefined` \| ``null`` \| [`ClientStreamMessageReceipt`](ClientStreamMessageReceipt.md) \| `PlainMessage`\<[`ClientStreamMessageReceipt`](ClientStreamMessageReceipt.md)\> |

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

▸ **getType**(): `MessageType`\<[`ClientStreamMessageReceipt`](ClientStreamMessageReceipt.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ClientStreamMessageReceipt`](ClientStreamMessageReceipt.md)\>

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
| `a` | `undefined` \| [`ClientStreamMessageReceipt`](ClientStreamMessageReceipt.md) \| `PlainMessage`\<[`ClientStreamMessageReceipt`](ClientStreamMessageReceipt.md)\> |
| `b` | `undefined` \| [`ClientStreamMessageReceipt`](ClientStreamMessageReceipt.md) \| `PlainMessage`\<[`ClientStreamMessageReceipt`](ClientStreamMessageReceipt.md)\> |

#### Returns

`boolean`

#### Defined in

src/client_streams.scailo_pb.ts:1853

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ClientStreamMessageReceipt`](ClientStreamMessageReceipt.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ClientStreamMessageReceipt`](ClientStreamMessageReceipt.md)

#### Defined in

src/client_streams.scailo_pb.ts:1841

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ClientStreamMessageReceipt`](ClientStreamMessageReceipt.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ClientStreamMessageReceipt`](ClientStreamMessageReceipt.md)

#### Defined in

src/client_streams.scailo_pb.ts:1845

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ClientStreamMessageReceipt`](ClientStreamMessageReceipt.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ClientStreamMessageReceipt`](ClientStreamMessageReceipt.md)

#### Defined in

src/client_streams.scailo_pb.ts:1849
