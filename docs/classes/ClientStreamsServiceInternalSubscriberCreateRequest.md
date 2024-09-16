[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / ClientStreamsServiceInternalSubscriberCreateRequest

# Class: ClientStreamsServiceInternalSubscriberCreateRequest

Describes the parameters necessary to create an internal subscriber

**`Generated`**

from message Scailo.ClientStreamsServiceInternalSubscriberCreateRequest

## Hierarchy

- `Message`\<[`ClientStreamsServiceInternalSubscriberCreateRequest`](ClientStreamsServiceInternalSubscriberCreateRequest.md)\>

  ↳ **`ClientStreamsServiceInternalSubscriberCreateRequest`**

## Table of contents

### Constructors

- [constructor](ClientStreamsServiceInternalSubscriberCreateRequest.md#constructor)

### Properties

- [clientStreamId](ClientStreamsServiceInternalSubscriberCreateRequest.md#clientstreamid)
- [userComment](ClientStreamsServiceInternalSubscriberCreateRequest.md#usercomment)
- [userId](ClientStreamsServiceInternalSubscriberCreateRequest.md#userid)
- [fields](ClientStreamsServiceInternalSubscriberCreateRequest.md#fields)
- [runtime](ClientStreamsServiceInternalSubscriberCreateRequest.md#runtime)
- [typeName](ClientStreamsServiceInternalSubscriberCreateRequest.md#typename)

### Methods

- [clone](ClientStreamsServiceInternalSubscriberCreateRequest.md#clone)
- [equals](ClientStreamsServiceInternalSubscriberCreateRequest.md#equals)
- [fromBinary](ClientStreamsServiceInternalSubscriberCreateRequest.md#frombinary)
- [fromJson](ClientStreamsServiceInternalSubscriberCreateRequest.md#fromjson)
- [fromJsonString](ClientStreamsServiceInternalSubscriberCreateRequest.md#fromjsonstring)
- [getType](ClientStreamsServiceInternalSubscriberCreateRequest.md#gettype)
- [toBinary](ClientStreamsServiceInternalSubscriberCreateRequest.md#tobinary)
- [toJSON](ClientStreamsServiceInternalSubscriberCreateRequest.md#tojson)
- [toJson](ClientStreamsServiceInternalSubscriberCreateRequest.md#tojson-1)
- [toJsonString](ClientStreamsServiceInternalSubscriberCreateRequest.md#tojsonstring)
- [equals](ClientStreamsServiceInternalSubscriberCreateRequest.md#equals-1)
- [fromBinary](ClientStreamsServiceInternalSubscriberCreateRequest.md#frombinary-1)
- [fromJson](ClientStreamsServiceInternalSubscriberCreateRequest.md#fromjson-1)
- [fromJsonString](ClientStreamsServiceInternalSubscriberCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new ClientStreamsServiceInternalSubscriberCreateRequest**(`data?`): [`ClientStreamsServiceInternalSubscriberCreateRequest`](ClientStreamsServiceInternalSubscriberCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ClientStreamsServiceInternalSubscriberCreateRequest`](ClientStreamsServiceInternalSubscriberCreateRequest.md)\> |

#### Returns

[`ClientStreamsServiceInternalSubscriberCreateRequest`](ClientStreamsServiceInternalSubscriberCreateRequest.md)

#### Overrides

Message\&lt;ClientStreamsServiceInternalSubscriberCreateRequest\&gt;.constructor

#### Defined in

src/clientstreams.scailo_pb.ts:1928

## Properties

### clientStreamId

• **clientStreamId**: `bigint` = `protoInt64.zero`

Stores the client stream ID

**`Generated`**

from field: uint64 client_stream_id = 10;

#### Defined in

src/clientstreams.scailo_pb.ts:1919

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/clientstreams.scailo_pb.ts:1912

___

### userId

• **userId**: `bigint` = `protoInt64.zero`

Stores the user ID

**`Generated`**

from field: uint64 user_id = 11;

#### Defined in

src/clientstreams.scailo_pb.ts:1926

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/clientstreams.scailo_pb.ts:1935

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/clientstreams.scailo_pb.ts:1933

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ClientStreamsServiceInternalSubscriberCreateRequest"``

#### Defined in

src/clientstreams.scailo_pb.ts:1934

## Methods

### clone

▸ **clone**(): [`ClientStreamsServiceInternalSubscriberCreateRequest`](ClientStreamsServiceInternalSubscriberCreateRequest.md)

Create a deep copy.

#### Returns

[`ClientStreamsServiceInternalSubscriberCreateRequest`](ClientStreamsServiceInternalSubscriberCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`ClientStreamsServiceInternalSubscriberCreateRequest`](ClientStreamsServiceInternalSubscriberCreateRequest.md) \| `PlainMessage`\<[`ClientStreamsServiceInternalSubscriberCreateRequest`](ClientStreamsServiceInternalSubscriberCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`ClientStreamsServiceInternalSubscriberCreateRequest`](ClientStreamsServiceInternalSubscriberCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ClientStreamsServiceInternalSubscriberCreateRequest`](ClientStreamsServiceInternalSubscriberCreateRequest.md)\>

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
| `a` | `undefined` \| [`ClientStreamsServiceInternalSubscriberCreateRequest`](ClientStreamsServiceInternalSubscriberCreateRequest.md) \| `PlainMessage`\<[`ClientStreamsServiceInternalSubscriberCreateRequest`](ClientStreamsServiceInternalSubscriberCreateRequest.md)\> |
| `b` | `undefined` \| [`ClientStreamsServiceInternalSubscriberCreateRequest`](ClientStreamsServiceInternalSubscriberCreateRequest.md) \| `PlainMessage`\<[`ClientStreamsServiceInternalSubscriberCreateRequest`](ClientStreamsServiceInternalSubscriberCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/clientstreams.scailo_pb.ts:1953

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ClientStreamsServiceInternalSubscriberCreateRequest`](ClientStreamsServiceInternalSubscriberCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ClientStreamsServiceInternalSubscriberCreateRequest`](ClientStreamsServiceInternalSubscriberCreateRequest.md)

#### Defined in

src/clientstreams.scailo_pb.ts:1941

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ClientStreamsServiceInternalSubscriberCreateRequest`](ClientStreamsServiceInternalSubscriberCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ClientStreamsServiceInternalSubscriberCreateRequest`](ClientStreamsServiceInternalSubscriberCreateRequest.md)

#### Defined in

src/clientstreams.scailo_pb.ts:1945

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ClientStreamsServiceInternalSubscriberCreateRequest`](ClientStreamsServiceInternalSubscriberCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ClientStreamsServiceInternalSubscriberCreateRequest`](ClientStreamsServiceInternalSubscriberCreateRequest.md)

#### Defined in

src/clientstreams.scailo_pb.ts:1949
