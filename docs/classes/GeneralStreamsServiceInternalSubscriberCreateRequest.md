[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / GeneralStreamsServiceInternalSubscriberCreateRequest

# Class: GeneralStreamsServiceInternalSubscriberCreateRequest

Describes the parameters necessary to create an internal subscriber

**`Generated`**

from message Scailo.GeneralStreamsServiceInternalSubscriberCreateRequest

## Hierarchy

- `Message`\<[`GeneralStreamsServiceInternalSubscriberCreateRequest`](GeneralStreamsServiceInternalSubscriberCreateRequest.md)\>

  ↳ **`GeneralStreamsServiceInternalSubscriberCreateRequest`**

## Table of contents

### Constructors

- [constructor](GeneralStreamsServiceInternalSubscriberCreateRequest.md#constructor)

### Properties

- [generalStreamId](GeneralStreamsServiceInternalSubscriberCreateRequest.md#generalstreamid)
- [userComment](GeneralStreamsServiceInternalSubscriberCreateRequest.md#usercomment)
- [userId](GeneralStreamsServiceInternalSubscriberCreateRequest.md#userid)
- [fields](GeneralStreamsServiceInternalSubscriberCreateRequest.md#fields)
- [runtime](GeneralStreamsServiceInternalSubscriberCreateRequest.md#runtime)
- [typeName](GeneralStreamsServiceInternalSubscriberCreateRequest.md#typename)

### Methods

- [clone](GeneralStreamsServiceInternalSubscriberCreateRequest.md#clone)
- [equals](GeneralStreamsServiceInternalSubscriberCreateRequest.md#equals)
- [fromBinary](GeneralStreamsServiceInternalSubscriberCreateRequest.md#frombinary)
- [fromJson](GeneralStreamsServiceInternalSubscriberCreateRequest.md#fromjson)
- [fromJsonString](GeneralStreamsServiceInternalSubscriberCreateRequest.md#fromjsonstring)
- [getType](GeneralStreamsServiceInternalSubscriberCreateRequest.md#gettype)
- [toBinary](GeneralStreamsServiceInternalSubscriberCreateRequest.md#tobinary)
- [toJSON](GeneralStreamsServiceInternalSubscriberCreateRequest.md#tojson)
- [toJson](GeneralStreamsServiceInternalSubscriberCreateRequest.md#tojson-1)
- [toJsonString](GeneralStreamsServiceInternalSubscriberCreateRequest.md#tojsonstring)
- [equals](GeneralStreamsServiceInternalSubscriberCreateRequest.md#equals-1)
- [fromBinary](GeneralStreamsServiceInternalSubscriberCreateRequest.md#frombinary-1)
- [fromJson](GeneralStreamsServiceInternalSubscriberCreateRequest.md#fromjson-1)
- [fromJsonString](GeneralStreamsServiceInternalSubscriberCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new GeneralStreamsServiceInternalSubscriberCreateRequest**(`data?`): [`GeneralStreamsServiceInternalSubscriberCreateRequest`](GeneralStreamsServiceInternalSubscriberCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`GeneralStreamsServiceInternalSubscriberCreateRequest`](GeneralStreamsServiceInternalSubscriberCreateRequest.md)\> |

#### Returns

[`GeneralStreamsServiceInternalSubscriberCreateRequest`](GeneralStreamsServiceInternalSubscriberCreateRequest.md)

#### Overrides

Message\&lt;GeneralStreamsServiceInternalSubscriberCreateRequest\&gt;.constructor

#### Defined in

src/generalstreams.scailo_pb.ts:1684

## Properties

### generalStreamId

• **generalStreamId**: `bigint` = `protoInt64.zero`

Stores the general stream ID

**`Generated`**

from field: uint64 general_stream_id = 10;

#### Defined in

src/generalstreams.scailo_pb.ts:1675

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/generalstreams.scailo_pb.ts:1668

___

### userId

• **userId**: `bigint` = `protoInt64.zero`

Stores the user ID

**`Generated`**

from field: uint64 user_id = 11;

#### Defined in

src/generalstreams.scailo_pb.ts:1682

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/generalstreams.scailo_pb.ts:1691

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/generalstreams.scailo_pb.ts:1689

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.GeneralStreamsServiceInternalSubscriberCreateRequest"``

#### Defined in

src/generalstreams.scailo_pb.ts:1690

## Methods

### clone

▸ **clone**(): [`GeneralStreamsServiceInternalSubscriberCreateRequest`](GeneralStreamsServiceInternalSubscriberCreateRequest.md)

Create a deep copy.

#### Returns

[`GeneralStreamsServiceInternalSubscriberCreateRequest`](GeneralStreamsServiceInternalSubscriberCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`GeneralStreamsServiceInternalSubscriberCreateRequest`](GeneralStreamsServiceInternalSubscriberCreateRequest.md) \| `PlainMessage`\<[`GeneralStreamsServiceInternalSubscriberCreateRequest`](GeneralStreamsServiceInternalSubscriberCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`GeneralStreamsServiceInternalSubscriberCreateRequest`](GeneralStreamsServiceInternalSubscriberCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`GeneralStreamsServiceInternalSubscriberCreateRequest`](GeneralStreamsServiceInternalSubscriberCreateRequest.md)\>

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
| `a` | `undefined` \| [`GeneralStreamsServiceInternalSubscriberCreateRequest`](GeneralStreamsServiceInternalSubscriberCreateRequest.md) \| `PlainMessage`\<[`GeneralStreamsServiceInternalSubscriberCreateRequest`](GeneralStreamsServiceInternalSubscriberCreateRequest.md)\> |
| `b` | `undefined` \| [`GeneralStreamsServiceInternalSubscriberCreateRequest`](GeneralStreamsServiceInternalSubscriberCreateRequest.md) \| `PlainMessage`\<[`GeneralStreamsServiceInternalSubscriberCreateRequest`](GeneralStreamsServiceInternalSubscriberCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/generalstreams.scailo_pb.ts:1709

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`GeneralStreamsServiceInternalSubscriberCreateRequest`](GeneralStreamsServiceInternalSubscriberCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`GeneralStreamsServiceInternalSubscriberCreateRequest`](GeneralStreamsServiceInternalSubscriberCreateRequest.md)

#### Defined in

src/generalstreams.scailo_pb.ts:1697

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`GeneralStreamsServiceInternalSubscriberCreateRequest`](GeneralStreamsServiceInternalSubscriberCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GeneralStreamsServiceInternalSubscriberCreateRequest`](GeneralStreamsServiceInternalSubscriberCreateRequest.md)

#### Defined in

src/generalstreams.scailo_pb.ts:1701

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`GeneralStreamsServiceInternalSubscriberCreateRequest`](GeneralStreamsServiceInternalSubscriberCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GeneralStreamsServiceInternalSubscriberCreateRequest`](GeneralStreamsServiceInternalSubscriberCreateRequest.md)

#### Defined in

src/generalstreams.scailo_pb.ts:1705
