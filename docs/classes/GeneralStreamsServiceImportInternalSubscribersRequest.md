[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / GeneralStreamsServiceImportInternalSubscribersRequest

# Class: GeneralStreamsServiceImportInternalSubscribersRequest

Describes the data model to handle importing of internal subscribers from the given identifier representing a team or a department

**`Generated`**

from message Scailo.GeneralStreamsServiceImportInternalSubscribersRequest

## Hierarchy

- `Message`\<[`GeneralStreamsServiceImportInternalSubscribersRequest`](GeneralStreamsServiceImportInternalSubscribersRequest.md)\>

  ↳ **`GeneralStreamsServiceImportInternalSubscribersRequest`**

## Table of contents

### Constructors

- [constructor](GeneralStreamsServiceImportInternalSubscribersRequest.md#constructor)

### Properties

- [deleteExisting](GeneralStreamsServiceImportInternalSubscribersRequest.md#deleteexisting)
- [generalStreamId](GeneralStreamsServiceImportInternalSubscribersRequest.md#generalstreamid)
- [resourceId](GeneralStreamsServiceImportInternalSubscribersRequest.md#resourceid)
- [userComment](GeneralStreamsServiceImportInternalSubscribersRequest.md#usercomment)
- [fields](GeneralStreamsServiceImportInternalSubscribersRequest.md#fields)
- [runtime](GeneralStreamsServiceImportInternalSubscribersRequest.md#runtime)
- [typeName](GeneralStreamsServiceImportInternalSubscribersRequest.md#typename)

### Methods

- [clone](GeneralStreamsServiceImportInternalSubscribersRequest.md#clone)
- [equals](GeneralStreamsServiceImportInternalSubscribersRequest.md#equals)
- [fromBinary](GeneralStreamsServiceImportInternalSubscribersRequest.md#frombinary)
- [fromJson](GeneralStreamsServiceImportInternalSubscribersRequest.md#fromjson)
- [fromJsonString](GeneralStreamsServiceImportInternalSubscribersRequest.md#fromjsonstring)
- [getType](GeneralStreamsServiceImportInternalSubscribersRequest.md#gettype)
- [toBinary](GeneralStreamsServiceImportInternalSubscribersRequest.md#tobinary)
- [toJSON](GeneralStreamsServiceImportInternalSubscribersRequest.md#tojson)
- [toJson](GeneralStreamsServiceImportInternalSubscribersRequest.md#tojson-1)
- [toJsonString](GeneralStreamsServiceImportInternalSubscribersRequest.md#tojsonstring)
- [equals](GeneralStreamsServiceImportInternalSubscribersRequest.md#equals-1)
- [fromBinary](GeneralStreamsServiceImportInternalSubscribersRequest.md#frombinary-1)
- [fromJson](GeneralStreamsServiceImportInternalSubscribersRequest.md#fromjson-1)
- [fromJsonString](GeneralStreamsServiceImportInternalSubscribersRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new GeneralStreamsServiceImportInternalSubscribersRequest**(`data?`): [`GeneralStreamsServiceImportInternalSubscribersRequest`](GeneralStreamsServiceImportInternalSubscribersRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`GeneralStreamsServiceImportInternalSubscribersRequest`](GeneralStreamsServiceImportInternalSubscribersRequest.md)\> |

#### Returns

[`GeneralStreamsServiceImportInternalSubscribersRequest`](GeneralStreamsServiceImportInternalSubscribersRequest.md)

#### Overrides

Message\&lt;GeneralStreamsServiceImportInternalSubscribersRequest\&gt;.constructor

#### Defined in

src/generalstreams.scailo_pb.ts:1865

## Properties

### deleteExisting

• **deleteExisting**: `boolean` = `false`

Stores if the existing internal subscribers in the general stream need to be deleted before adding from the source record

**`Generated`**

from field: bool delete_existing = 4;

#### Defined in

src/generalstreams.scailo_pb.ts:1863

___

### generalStreamId

• **generalStreamId**: `bigint` = `protoInt64.zero`

The ID of the general stream

**`Generated`**

from field: uint64 general_stream_id = 2;

#### Defined in

src/generalstreams.scailo_pb.ts:1849

___

### resourceId

• **resourceId**: `bigint` = `protoInt64.zero`

The ID of the team or the department from which internal subscribers need to be added to the general stream

**`Generated`**

from field: uint64 resource_id = 3;

#### Defined in

src/generalstreams.scailo_pb.ts:1856

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/generalstreams.scailo_pb.ts:1842

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/generalstreams.scailo_pb.ts:1872

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/generalstreams.scailo_pb.ts:1870

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.GeneralStreamsServiceImportInternalSubscribersRequest"``

#### Defined in

src/generalstreams.scailo_pb.ts:1871

## Methods

### clone

▸ **clone**(): [`GeneralStreamsServiceImportInternalSubscribersRequest`](GeneralStreamsServiceImportInternalSubscribersRequest.md)

Create a deep copy.

#### Returns

[`GeneralStreamsServiceImportInternalSubscribersRequest`](GeneralStreamsServiceImportInternalSubscribersRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`GeneralStreamsServiceImportInternalSubscribersRequest`](GeneralStreamsServiceImportInternalSubscribersRequest.md) \| `PlainMessage`\<[`GeneralStreamsServiceImportInternalSubscribersRequest`](GeneralStreamsServiceImportInternalSubscribersRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`GeneralStreamsServiceImportInternalSubscribersRequest`](GeneralStreamsServiceImportInternalSubscribersRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`GeneralStreamsServiceImportInternalSubscribersRequest`](GeneralStreamsServiceImportInternalSubscribersRequest.md)\>

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
| `a` | `undefined` \| [`GeneralStreamsServiceImportInternalSubscribersRequest`](GeneralStreamsServiceImportInternalSubscribersRequest.md) \| `PlainMessage`\<[`GeneralStreamsServiceImportInternalSubscribersRequest`](GeneralStreamsServiceImportInternalSubscribersRequest.md)\> |
| `b` | `undefined` \| [`GeneralStreamsServiceImportInternalSubscribersRequest`](GeneralStreamsServiceImportInternalSubscribersRequest.md) \| `PlainMessage`\<[`GeneralStreamsServiceImportInternalSubscribersRequest`](GeneralStreamsServiceImportInternalSubscribersRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/generalstreams.scailo_pb.ts:1891

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`GeneralStreamsServiceImportInternalSubscribersRequest`](GeneralStreamsServiceImportInternalSubscribersRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`GeneralStreamsServiceImportInternalSubscribersRequest`](GeneralStreamsServiceImportInternalSubscribersRequest.md)

#### Defined in

src/generalstreams.scailo_pb.ts:1879

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`GeneralStreamsServiceImportInternalSubscribersRequest`](GeneralStreamsServiceImportInternalSubscribersRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GeneralStreamsServiceImportInternalSubscribersRequest`](GeneralStreamsServiceImportInternalSubscribersRequest.md)

#### Defined in

src/generalstreams.scailo_pb.ts:1883

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`GeneralStreamsServiceImportInternalSubscribersRequest`](GeneralStreamsServiceImportInternalSubscribersRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GeneralStreamsServiceImportInternalSubscribersRequest`](GeneralStreamsServiceImportInternalSubscribersRequest.md)

#### Defined in

src/generalstreams.scailo_pb.ts:1887
