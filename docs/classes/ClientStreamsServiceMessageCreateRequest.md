[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / ClientStreamsServiceMessageCreateRequest

# Class: ClientStreamsServiceMessageCreateRequest

Describes the parameters required to add a message to an client stream

**`Generated`**

from message Scailo.ClientStreamsServiceMessageCreateRequest

## Hierarchy

- `Message`\<[`ClientStreamsServiceMessageCreateRequest`](ClientStreamsServiceMessageCreateRequest.md)\>

  ↳ **`ClientStreamsServiceMessageCreateRequest`**

## Table of contents

### Constructors

- [constructor](ClientStreamsServiceMessageCreateRequest.md#constructor)

### Properties

- [clientStreamUuid](ClientStreamsServiceMessageCreateRequest.md#clientstreamuuid)
- [content](ClientStreamsServiceMessageCreateRequest.md#content)
- [messageType](ClientStreamsServiceMessageCreateRequest.md#messagetype)
- [responseToMessageUuid](ClientStreamsServiceMessageCreateRequest.md#responsetomessageuuid)
- [fields](ClientStreamsServiceMessageCreateRequest.md#fields)
- [runtime](ClientStreamsServiceMessageCreateRequest.md#runtime)
- [typeName](ClientStreamsServiceMessageCreateRequest.md#typename)

### Methods

- [clone](ClientStreamsServiceMessageCreateRequest.md#clone)
- [equals](ClientStreamsServiceMessageCreateRequest.md#equals)
- [fromBinary](ClientStreamsServiceMessageCreateRequest.md#frombinary)
- [fromJson](ClientStreamsServiceMessageCreateRequest.md#fromjson)
- [fromJsonString](ClientStreamsServiceMessageCreateRequest.md#fromjsonstring)
- [getType](ClientStreamsServiceMessageCreateRequest.md#gettype)
- [toBinary](ClientStreamsServiceMessageCreateRequest.md#tobinary)
- [toJSON](ClientStreamsServiceMessageCreateRequest.md#tojson)
- [toJson](ClientStreamsServiceMessageCreateRequest.md#tojson-1)
- [toJsonString](ClientStreamsServiceMessageCreateRequest.md#tojsonstring)
- [equals](ClientStreamsServiceMessageCreateRequest.md#equals-1)
- [fromBinary](ClientStreamsServiceMessageCreateRequest.md#frombinary-1)
- [fromJson](ClientStreamsServiceMessageCreateRequest.md#fromjson-1)
- [fromJsonString](ClientStreamsServiceMessageCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new ClientStreamsServiceMessageCreateRequest**(`data?`): [`ClientStreamsServiceMessageCreateRequest`](ClientStreamsServiceMessageCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ClientStreamsServiceMessageCreateRequest`](ClientStreamsServiceMessageCreateRequest.md)\> |

#### Returns

[`ClientStreamsServiceMessageCreateRequest`](ClientStreamsServiceMessageCreateRequest.md)

#### Overrides

Message\&lt;ClientStreamsServiceMessageCreateRequest\&gt;.constructor

#### Defined in

src/clientstreams.scailo_pb.ts:1401

## Properties

### clientStreamUuid

• **clientStreamUuid**: `string` = `""`

Stores the client stream UUID

**`Generated`**

from field: string client_stream_uuid = 10;

#### Defined in

src/clientstreams.scailo_pb.ts:1385

___

### content

• **content**: `string` = `""`

The content of the message

**`Generated`**

from field: string content = 20;

#### Defined in

src/clientstreams.scailo_pb.ts:1399

___

### messageType

• **messageType**: [`CLIENT_STREAM_MESSAGE_TYPE`](../enums/CLIENT_STREAM_MESSAGE_TYPE.md) = `CLIENT_STREAM_MESSAGE_TYPE.CLIENT_STREAM_MESSAGE_TYPE_ANY_UNSPECIFIED`

The type of the message

**`Generated`**

from field: Scailo.CLIENT_STREAM_MESSAGE_TYPE message_type = 8;

#### Defined in

src/clientstreams.scailo_pb.ts:1378

___

### responseToMessageUuid

• **responseToMessageUuid**: `string` = `""`

Stores the optional UUID of the message that this message is a response to

**`Generated`**

from field: string response_to_message_uuid = 11;

#### Defined in

src/clientstreams.scailo_pb.ts:1392

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/clientstreams.scailo_pb.ts:1408

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/clientstreams.scailo_pb.ts:1406

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ClientStreamsServiceMessageCreateRequest"``

#### Defined in

src/clientstreams.scailo_pb.ts:1407

## Methods

### clone

▸ **clone**(): [`ClientStreamsServiceMessageCreateRequest`](ClientStreamsServiceMessageCreateRequest.md)

Create a deep copy.

#### Returns

[`ClientStreamsServiceMessageCreateRequest`](ClientStreamsServiceMessageCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`ClientStreamsServiceMessageCreateRequest`](ClientStreamsServiceMessageCreateRequest.md) \| `PlainMessage`\<[`ClientStreamsServiceMessageCreateRequest`](ClientStreamsServiceMessageCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`ClientStreamsServiceMessageCreateRequest`](ClientStreamsServiceMessageCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ClientStreamsServiceMessageCreateRequest`](ClientStreamsServiceMessageCreateRequest.md)\>

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
| `a` | `undefined` \| [`ClientStreamsServiceMessageCreateRequest`](ClientStreamsServiceMessageCreateRequest.md) \| `PlainMessage`\<[`ClientStreamsServiceMessageCreateRequest`](ClientStreamsServiceMessageCreateRequest.md)\> |
| `b` | `undefined` \| [`ClientStreamsServiceMessageCreateRequest`](ClientStreamsServiceMessageCreateRequest.md) \| `PlainMessage`\<[`ClientStreamsServiceMessageCreateRequest`](ClientStreamsServiceMessageCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/clientstreams.scailo_pb.ts:1427

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ClientStreamsServiceMessageCreateRequest`](ClientStreamsServiceMessageCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ClientStreamsServiceMessageCreateRequest`](ClientStreamsServiceMessageCreateRequest.md)

#### Defined in

src/clientstreams.scailo_pb.ts:1415

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ClientStreamsServiceMessageCreateRequest`](ClientStreamsServiceMessageCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ClientStreamsServiceMessageCreateRequest`](ClientStreamsServiceMessageCreateRequest.md)

#### Defined in

src/clientstreams.scailo_pb.ts:1419

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ClientStreamsServiceMessageCreateRequest`](ClientStreamsServiceMessageCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ClientStreamsServiceMessageCreateRequest`](ClientStreamsServiceMessageCreateRequest.md)

#### Defined in

src/clientstreams.scailo_pb.ts:1423
