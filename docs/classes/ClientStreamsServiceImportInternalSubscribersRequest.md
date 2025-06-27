[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ClientStreamsServiceImportInternalSubscribersRequest

# Class: ClientStreamsServiceImportInternalSubscribersRequest

Describes the data model to handle importing of internal subscribers from the given identifier representing a team or a department

**`Generated`**

from message Scailo.ClientStreamsServiceImportInternalSubscribersRequest

## Hierarchy

- `Message`\<[`ClientStreamsServiceImportInternalSubscribersRequest`](ClientStreamsServiceImportInternalSubscribersRequest.md)\>

  ↳ **`ClientStreamsServiceImportInternalSubscribersRequest`**

## Table of contents

### Constructors

- [constructor](ClientStreamsServiceImportInternalSubscribersRequest.md#constructor)

### Properties

- [clientStreamId](ClientStreamsServiceImportInternalSubscribersRequest.md#clientstreamid)
- [deleteExisting](ClientStreamsServiceImportInternalSubscribersRequest.md#deleteexisting)
- [resourceId](ClientStreamsServiceImportInternalSubscribersRequest.md#resourceid)
- [userComment](ClientStreamsServiceImportInternalSubscribersRequest.md#usercomment)
- [fields](ClientStreamsServiceImportInternalSubscribersRequest.md#fields)
- [runtime](ClientStreamsServiceImportInternalSubscribersRequest.md#runtime)
- [typeName](ClientStreamsServiceImportInternalSubscribersRequest.md#typename)

### Methods

- [clone](ClientStreamsServiceImportInternalSubscribersRequest.md#clone)
- [equals](ClientStreamsServiceImportInternalSubscribersRequest.md#equals)
- [fromBinary](ClientStreamsServiceImportInternalSubscribersRequest.md#frombinary)
- [fromJson](ClientStreamsServiceImportInternalSubscribersRequest.md#fromjson)
- [fromJsonString](ClientStreamsServiceImportInternalSubscribersRequest.md#fromjsonstring)
- [getType](ClientStreamsServiceImportInternalSubscribersRequest.md#gettype)
- [toBinary](ClientStreamsServiceImportInternalSubscribersRequest.md#tobinary)
- [toJSON](ClientStreamsServiceImportInternalSubscribersRequest.md#tojson)
- [toJson](ClientStreamsServiceImportInternalSubscribersRequest.md#tojson-1)
- [toJsonString](ClientStreamsServiceImportInternalSubscribersRequest.md#tojsonstring)
- [equals](ClientStreamsServiceImportInternalSubscribersRequest.md#equals-1)
- [fromBinary](ClientStreamsServiceImportInternalSubscribersRequest.md#frombinary-1)
- [fromJson](ClientStreamsServiceImportInternalSubscribersRequest.md#fromjson-1)
- [fromJsonString](ClientStreamsServiceImportInternalSubscribersRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new ClientStreamsServiceImportInternalSubscribersRequest**(`data?`): [`ClientStreamsServiceImportInternalSubscribersRequest`](ClientStreamsServiceImportInternalSubscribersRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ClientStreamsServiceImportInternalSubscribersRequest`](ClientStreamsServiceImportInternalSubscribersRequest.md)\> |

#### Returns

[`ClientStreamsServiceImportInternalSubscribersRequest`](ClientStreamsServiceImportInternalSubscribersRequest.md)

#### Overrides

Message\&lt;ClientStreamsServiceImportInternalSubscribersRequest\&gt;.constructor

#### Defined in

src/client_streams.scailo_pb.ts:2125

## Properties

### clientStreamId

• **clientStreamId**: `bigint` = `protoInt64.zero`

The ID of the client stream

**`Generated`**

from field: uint64 client_stream_id = 2;

#### Defined in

src/client_streams.scailo_pb.ts:2109

___

### deleteExisting

• **deleteExisting**: `boolean` = `false`

Stores if the existing internal subscribers in the client stream need to be deleted before adding from the source record

**`Generated`**

from field: bool delete_existing = 4;

#### Defined in

src/client_streams.scailo_pb.ts:2123

___

### resourceId

• **resourceId**: `bigint` = `protoInt64.zero`

The ID of the team or the department from which internal subscribers need to be added to the client stream

**`Generated`**

from field: uint64 resource_id = 3;

#### Defined in

src/client_streams.scailo_pb.ts:2116

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/client_streams.scailo_pb.ts:2102

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/client_streams.scailo_pb.ts:2132

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/client_streams.scailo_pb.ts:2130

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ClientStreamsServiceImportInternalSubscribersRequest"``

#### Defined in

src/client_streams.scailo_pb.ts:2131

## Methods

### clone

▸ **clone**(): [`ClientStreamsServiceImportInternalSubscribersRequest`](ClientStreamsServiceImportInternalSubscribersRequest.md)

Create a deep copy.

#### Returns

[`ClientStreamsServiceImportInternalSubscribersRequest`](ClientStreamsServiceImportInternalSubscribersRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`ClientStreamsServiceImportInternalSubscribersRequest`](ClientStreamsServiceImportInternalSubscribersRequest.md) \| `PlainMessage`\<[`ClientStreamsServiceImportInternalSubscribersRequest`](ClientStreamsServiceImportInternalSubscribersRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`ClientStreamsServiceImportInternalSubscribersRequest`](ClientStreamsServiceImportInternalSubscribersRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ClientStreamsServiceImportInternalSubscribersRequest`](ClientStreamsServiceImportInternalSubscribersRequest.md)\>

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
| `a` | `undefined` \| [`ClientStreamsServiceImportInternalSubscribersRequest`](ClientStreamsServiceImportInternalSubscribersRequest.md) \| `PlainMessage`\<[`ClientStreamsServiceImportInternalSubscribersRequest`](ClientStreamsServiceImportInternalSubscribersRequest.md)\> |
| `b` | `undefined` \| [`ClientStreamsServiceImportInternalSubscribersRequest`](ClientStreamsServiceImportInternalSubscribersRequest.md) \| `PlainMessage`\<[`ClientStreamsServiceImportInternalSubscribersRequest`](ClientStreamsServiceImportInternalSubscribersRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/client_streams.scailo_pb.ts:2151

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ClientStreamsServiceImportInternalSubscribersRequest`](ClientStreamsServiceImportInternalSubscribersRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ClientStreamsServiceImportInternalSubscribersRequest`](ClientStreamsServiceImportInternalSubscribersRequest.md)

#### Defined in

src/client_streams.scailo_pb.ts:2139

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ClientStreamsServiceImportInternalSubscribersRequest`](ClientStreamsServiceImportInternalSubscribersRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ClientStreamsServiceImportInternalSubscribersRequest`](ClientStreamsServiceImportInternalSubscribersRequest.md)

#### Defined in

src/client_streams.scailo_pb.ts:2143

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ClientStreamsServiceImportInternalSubscribersRequest`](ClientStreamsServiceImportInternalSubscribersRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ClientStreamsServiceImportInternalSubscribersRequest`](ClientStreamsServiceImportInternalSubscribersRequest.md)

#### Defined in

src/client_streams.scailo_pb.ts:2147
