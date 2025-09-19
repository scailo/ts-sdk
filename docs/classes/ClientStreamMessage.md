[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ClientStreamMessage

# Class: ClientStreamMessage

Describes the parameters that constitute a message associated to an client stream

**`Generated`**

from message Scailo.ClientStreamMessage

## Hierarchy

- `Message`\<[`ClientStreamMessage`](ClientStreamMessage.md)\>

  ↳ **`ClientStreamMessage`**

## Table of contents

### Constructors

- [constructor](ClientStreamMessage.md#constructor)

### Properties

- [clientStreamId](ClientStreamMessage.md#clientstreamid)
- [content](ClientStreamMessage.md#content)
- [entityUuid](ClientStreamMessage.md#entityuuid)
- [internalRef](ClientStreamMessage.md#internalref)
- [isRead](ClientStreamMessage.md#isread)
- [messageType](ClientStreamMessage.md#messagetype)
- [metadata](ClientStreamMessage.md#metadata)
- [responseToMessageUuid](ClientStreamMessage.md#responsetomessageuuid)
- [fields](ClientStreamMessage.md#fields)
- [runtime](ClientStreamMessage.md#runtime)
- [typeName](ClientStreamMessage.md#typename)

### Methods

- [clone](ClientStreamMessage.md#clone)
- [equals](ClientStreamMessage.md#equals)
- [fromBinary](ClientStreamMessage.md#frombinary)
- [fromJson](ClientStreamMessage.md#fromjson)
- [fromJsonString](ClientStreamMessage.md#fromjsonstring)
- [getType](ClientStreamMessage.md#gettype)
- [toBinary](ClientStreamMessage.md#tobinary)
- [toJSON](ClientStreamMessage.md#tojson)
- [toJson](ClientStreamMessage.md#tojson-1)
- [toJsonString](ClientStreamMessage.md#tojsonstring)
- [equals](ClientStreamMessage.md#equals-1)
- [fromBinary](ClientStreamMessage.md#frombinary-1)
- [fromJson](ClientStreamMessage.md#fromjson-1)
- [fromJsonString](ClientStreamMessage.md#fromjsonstring-1)

## Constructors

### constructor

• **new ClientStreamMessage**(`data?`): [`ClientStreamMessage`](ClientStreamMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ClientStreamMessage`](ClientStreamMessage.md)\> |

#### Returns

[`ClientStreamMessage`](ClientStreamMessage.md)

#### Overrides

Message\&lt;ClientStreamMessage\&gt;.constructor

#### Defined in

[src/client_streams.scailo_pb.ts:1527](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/client_streams.scailo_pb.ts#L1527)

## Properties

### clientStreamId

• **clientStreamId**: `bigint` = `protoInt64.zero`

Stores the client stream ID

**`Generated`**

from field: uint64 client_stream_id = 10;

#### Defined in

[src/client_streams.scailo_pb.ts:1497](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/client_streams.scailo_pb.ts#L1497)

___

### content

• **content**: `string` = `""`

The content of the message

**`Generated`**

from field: string content = 20;

#### Defined in

[src/client_streams.scailo_pb.ts:1511](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/client_streams.scailo_pb.ts#L1511)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/client_streams.scailo_pb.ts:1476](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/client_streams.scailo_pb.ts#L1476)

___

### internalRef

• **internalRef**: `string` = `""`

Stores the internal reference that is automatically generated

**`Generated`**

from field: string internal_ref = 50;

#### Defined in

[src/client_streams.scailo_pb.ts:1518](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/client_streams.scailo_pb.ts#L1518)

___

### isRead

• **isRead**: `boolean` = `false`

Stores if the message has been read by the user

**`Generated`**

from field: bool is_read = 60;

#### Defined in

[src/client_streams.scailo_pb.ts:1525](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/client_streams.scailo_pb.ts#L1525)

___

### messageType

• **messageType**: [`CLIENT_STREAM_MESSAGE_TYPE`](../enums/CLIENT_STREAM_MESSAGE_TYPE.md) = `CLIENT_STREAM_MESSAGE_TYPE.CLIENT_STREAM_MESSAGE_TYPE_ANY_UNSPECIFIED`

The type of the message

**`Generated`**

from field: Scailo.CLIENT_STREAM_MESSAGE_TYPE message_type = 8;

#### Defined in

[src/client_streams.scailo_pb.ts:1490](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/client_streams.scailo_pb.ts#L1490)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this client stream

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/client_streams.scailo_pb.ts:1483](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/client_streams.scailo_pb.ts#L1483)

___

### responseToMessageUuid

• **responseToMessageUuid**: `string` = `""`

Stores the optional UUID of the message that this message is a response to

**`Generated`**

from field: string response_to_message_uuid = 11;

#### Defined in

[src/client_streams.scailo_pb.ts:1504](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/client_streams.scailo_pb.ts#L1504)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/client_streams.scailo_pb.ts:1534](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/client_streams.scailo_pb.ts#L1534)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/client_streams.scailo_pb.ts:1532](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/client_streams.scailo_pb.ts#L1532)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ClientStreamMessage"``

#### Defined in

[src/client_streams.scailo_pb.ts:1533](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/client_streams.scailo_pb.ts#L1533)

## Methods

### clone

▸ **clone**(): [`ClientStreamMessage`](ClientStreamMessage.md)

Create a deep copy.

#### Returns

[`ClientStreamMessage`](ClientStreamMessage.md)

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
| `other` | `undefined` \| ``null`` \| [`ClientStreamMessage`](ClientStreamMessage.md) \| `PlainMessage`\<[`ClientStreamMessage`](ClientStreamMessage.md)\> |

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

▸ **getType**(): `MessageType`\<[`ClientStreamMessage`](ClientStreamMessage.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ClientStreamMessage`](ClientStreamMessage.md)\>

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
| `a` | `undefined` \| [`ClientStreamMessage`](ClientStreamMessage.md) \| `PlainMessage`\<[`ClientStreamMessage`](ClientStreamMessage.md)\> |
| `b` | `undefined` \| [`ClientStreamMessage`](ClientStreamMessage.md) \| `PlainMessage`\<[`ClientStreamMessage`](ClientStreamMessage.md)\> |

#### Returns

`boolean`

#### Defined in

[src/client_streams.scailo_pb.ts:1557](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/client_streams.scailo_pb.ts#L1557)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ClientStreamMessage`](ClientStreamMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ClientStreamMessage`](ClientStreamMessage.md)

#### Defined in

[src/client_streams.scailo_pb.ts:1545](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/client_streams.scailo_pb.ts#L1545)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ClientStreamMessage`](ClientStreamMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ClientStreamMessage`](ClientStreamMessage.md)

#### Defined in

[src/client_streams.scailo_pb.ts:1549](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/client_streams.scailo_pb.ts#L1549)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ClientStreamMessage`](ClientStreamMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ClientStreamMessage`](ClientStreamMessage.md)

#### Defined in

[src/client_streams.scailo_pb.ts:1553](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/client_streams.scailo_pb.ts#L1553)
