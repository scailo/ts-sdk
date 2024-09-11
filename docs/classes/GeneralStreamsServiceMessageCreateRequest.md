[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / GeneralStreamsServiceMessageCreateRequest

# Class: GeneralStreamsServiceMessageCreateRequest

Describes the parameters required to add a message to an general stream

**`Generated`**

from message Scailo.GeneralStreamsServiceMessageCreateRequest

## Hierarchy

- `Message`\<[`GeneralStreamsServiceMessageCreateRequest`](GeneralStreamsServiceMessageCreateRequest.md)\>

  ↳ **`GeneralStreamsServiceMessageCreateRequest`**

## Table of contents

### Constructors

- [constructor](GeneralStreamsServiceMessageCreateRequest.md#constructor)

### Properties

- [content](GeneralStreamsServiceMessageCreateRequest.md#content)
- [generalStreamUuid](GeneralStreamsServiceMessageCreateRequest.md#generalstreamuuid)
- [messageType](GeneralStreamsServiceMessageCreateRequest.md#messagetype)
- [responseToMessageUuid](GeneralStreamsServiceMessageCreateRequest.md#responsetomessageuuid)
- [fields](GeneralStreamsServiceMessageCreateRequest.md#fields)
- [runtime](GeneralStreamsServiceMessageCreateRequest.md#runtime)
- [typeName](GeneralStreamsServiceMessageCreateRequest.md#typename)

### Methods

- [clone](GeneralStreamsServiceMessageCreateRequest.md#clone)
- [equals](GeneralStreamsServiceMessageCreateRequest.md#equals)
- [fromBinary](GeneralStreamsServiceMessageCreateRequest.md#frombinary)
- [fromJson](GeneralStreamsServiceMessageCreateRequest.md#fromjson)
- [fromJsonString](GeneralStreamsServiceMessageCreateRequest.md#fromjsonstring)
- [getType](GeneralStreamsServiceMessageCreateRequest.md#gettype)
- [toBinary](GeneralStreamsServiceMessageCreateRequest.md#tobinary)
- [toJSON](GeneralStreamsServiceMessageCreateRequest.md#tojson)
- [toJson](GeneralStreamsServiceMessageCreateRequest.md#tojson-1)
- [toJsonString](GeneralStreamsServiceMessageCreateRequest.md#tojsonstring)
- [equals](GeneralStreamsServiceMessageCreateRequest.md#equals-1)
- [fromBinary](GeneralStreamsServiceMessageCreateRequest.md#frombinary-1)
- [fromJson](GeneralStreamsServiceMessageCreateRequest.md#fromjson-1)
- [fromJsonString](GeneralStreamsServiceMessageCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new GeneralStreamsServiceMessageCreateRequest**(`data?`): [`GeneralStreamsServiceMessageCreateRequest`](GeneralStreamsServiceMessageCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`GeneralStreamsServiceMessageCreateRequest`](GeneralStreamsServiceMessageCreateRequest.md)\> |

#### Returns

[`GeneralStreamsServiceMessageCreateRequest`](GeneralStreamsServiceMessageCreateRequest.md)

#### Overrides

Message\&lt;GeneralStreamsServiceMessageCreateRequest\&gt;.constructor

#### Defined in

src/generalstreams.scailo_pb.ts:1165

## Properties

### content

• **content**: `string` = `""`

The content of the message

**`Generated`**

from field: string content = 20;

#### Defined in

src/generalstreams.scailo_pb.ts:1163

___

### generalStreamUuid

• **generalStreamUuid**: `string` = `""`

Stores the general stream UUID

**`Generated`**

from field: string general_stream_uuid = 10;

#### Defined in

src/generalstreams.scailo_pb.ts:1149

___

### messageType

• **messageType**: [`GENERAL_STREAM_MESSAGE_TYPE`](../enums/GENERAL_STREAM_MESSAGE_TYPE.md) = `GENERAL_STREAM_MESSAGE_TYPE.GENERAL_STREAM_MESSAGE_TYPE_ANY_UNSPECIFIED`

The type of the message

**`Generated`**

from field: Scailo.GENERAL_STREAM_MESSAGE_TYPE message_type = 8;

#### Defined in

src/generalstreams.scailo_pb.ts:1142

___

### responseToMessageUuid

• **responseToMessageUuid**: `string` = `""`

Stores the optional UUID of the message that this message is a response to

**`Generated`**

from field: string response_to_message_uuid = 11;

#### Defined in

src/generalstreams.scailo_pb.ts:1156

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/generalstreams.scailo_pb.ts:1172

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/generalstreams.scailo_pb.ts:1170

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.GeneralStreamsServiceMessageCreateRequest"``

#### Defined in

src/generalstreams.scailo_pb.ts:1171

## Methods

### clone

▸ **clone**(): [`GeneralStreamsServiceMessageCreateRequest`](GeneralStreamsServiceMessageCreateRequest.md)

Create a deep copy.

#### Returns

[`GeneralStreamsServiceMessageCreateRequest`](GeneralStreamsServiceMessageCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`GeneralStreamsServiceMessageCreateRequest`](GeneralStreamsServiceMessageCreateRequest.md) \| `PlainMessage`\<[`GeneralStreamsServiceMessageCreateRequest`](GeneralStreamsServiceMessageCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`GeneralStreamsServiceMessageCreateRequest`](GeneralStreamsServiceMessageCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`GeneralStreamsServiceMessageCreateRequest`](GeneralStreamsServiceMessageCreateRequest.md)\>

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
| `a` | `undefined` \| [`GeneralStreamsServiceMessageCreateRequest`](GeneralStreamsServiceMessageCreateRequest.md) \| `PlainMessage`\<[`GeneralStreamsServiceMessageCreateRequest`](GeneralStreamsServiceMessageCreateRequest.md)\> |
| `b` | `undefined` \| [`GeneralStreamsServiceMessageCreateRequest`](GeneralStreamsServiceMessageCreateRequest.md) \| `PlainMessage`\<[`GeneralStreamsServiceMessageCreateRequest`](GeneralStreamsServiceMessageCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/generalstreams.scailo_pb.ts:1191

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`GeneralStreamsServiceMessageCreateRequest`](GeneralStreamsServiceMessageCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`GeneralStreamsServiceMessageCreateRequest`](GeneralStreamsServiceMessageCreateRequest.md)

#### Defined in

src/generalstreams.scailo_pb.ts:1179

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`GeneralStreamsServiceMessageCreateRequest`](GeneralStreamsServiceMessageCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GeneralStreamsServiceMessageCreateRequest`](GeneralStreamsServiceMessageCreateRequest.md)

#### Defined in

src/generalstreams.scailo_pb.ts:1183

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`GeneralStreamsServiceMessageCreateRequest`](GeneralStreamsServiceMessageCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GeneralStreamsServiceMessageCreateRequest`](GeneralStreamsServiceMessageCreateRequest.md)

#### Defined in

src/generalstreams.scailo_pb.ts:1187
