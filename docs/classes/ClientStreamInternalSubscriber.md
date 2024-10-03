[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ClientStreamInternalSubscriber

# Class: ClientStreamInternalSubscriber

Describes the parameters that constitute an internal subscriber

**`Generated`**

from message Scailo.ClientStreamInternalSubscriber

## Hierarchy

- `Message`\<[`ClientStreamInternalSubscriber`](ClientStreamInternalSubscriber.md)\>

  ↳ **`ClientStreamInternalSubscriber`**

## Table of contents

### Constructors

- [constructor](ClientStreamInternalSubscriber.md#constructor)

### Properties

- [clientStreamId](ClientStreamInternalSubscriber.md#clientstreamid)
- [entityUuid](ClientStreamInternalSubscriber.md#entityuuid)
- [metadata](ClientStreamInternalSubscriber.md#metadata)
- [userComment](ClientStreamInternalSubscriber.md#usercomment)
- [userId](ClientStreamInternalSubscriber.md#userid)
- [userUuid](ClientStreamInternalSubscriber.md#useruuid)
- [fields](ClientStreamInternalSubscriber.md#fields)
- [runtime](ClientStreamInternalSubscriber.md#runtime)
- [typeName](ClientStreamInternalSubscriber.md#typename)

### Methods

- [clone](ClientStreamInternalSubscriber.md#clone)
- [equals](ClientStreamInternalSubscriber.md#equals)
- [fromBinary](ClientStreamInternalSubscriber.md#frombinary)
- [fromJson](ClientStreamInternalSubscriber.md#fromjson)
- [fromJsonString](ClientStreamInternalSubscriber.md#fromjsonstring)
- [getType](ClientStreamInternalSubscriber.md#gettype)
- [toBinary](ClientStreamInternalSubscriber.md#tobinary)
- [toJSON](ClientStreamInternalSubscriber.md#tojson)
- [toJson](ClientStreamInternalSubscriber.md#tojson-1)
- [toJsonString](ClientStreamInternalSubscriber.md#tojsonstring)
- [equals](ClientStreamInternalSubscriber.md#equals-1)
- [fromBinary](ClientStreamInternalSubscriber.md#frombinary-1)
- [fromJson](ClientStreamInternalSubscriber.md#fromjson-1)
- [fromJsonString](ClientStreamInternalSubscriber.md#fromjsonstring-1)

## Constructors

### constructor

• **new ClientStreamInternalSubscriber**(`data?`): [`ClientStreamInternalSubscriber`](ClientStreamInternalSubscriber.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ClientStreamInternalSubscriber`](ClientStreamInternalSubscriber.md)\> |

#### Returns

[`ClientStreamInternalSubscriber`](ClientStreamInternalSubscriber.md)

#### Overrides

Message\&lt;ClientStreamInternalSubscriber\&gt;.constructor

#### Defined in

src/client_streams.scailo_pb.ts:2007

## Properties

### clientStreamId

• **clientStreamId**: `bigint` = `protoInt64.zero`

Stores the client stream ID

**`Generated`**

from field: uint64 client_stream_id = 10;

#### Defined in

src/client_streams.scailo_pb.ts:1991

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/client_streams.scailo_pb.ts:1970

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this client stream internal subscriber

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

src/client_streams.scailo_pb.ts:1977

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might have added during an operation

**`Generated`**

from field: string user_comment = 5;

#### Defined in

src/client_streams.scailo_pb.ts:1984

___

### userId

• **userId**: `bigint` = `protoInt64.zero`

Stores the user ID

**`Generated`**

from field: uint64 user_id = 11;

#### Defined in

src/client_streams.scailo_pb.ts:1998

___

### userUuid

• **userUuid**: `string` = `""`

Stores the user UUID (determined by the user_id)

**`Generated`**

from field: string user_uuid = 30;

#### Defined in

src/client_streams.scailo_pb.ts:2005

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/client_streams.scailo_pb.ts:2014

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/client_streams.scailo_pb.ts:2012

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ClientStreamInternalSubscriber"``

#### Defined in

src/client_streams.scailo_pb.ts:2013

## Methods

### clone

▸ **clone**(): [`ClientStreamInternalSubscriber`](ClientStreamInternalSubscriber.md)

Create a deep copy.

#### Returns

[`ClientStreamInternalSubscriber`](ClientStreamInternalSubscriber.md)

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
| `other` | `undefined` \| ``null`` \| [`ClientStreamInternalSubscriber`](ClientStreamInternalSubscriber.md) \| `PlainMessage`\<[`ClientStreamInternalSubscriber`](ClientStreamInternalSubscriber.md)\> |

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

▸ **getType**(): `MessageType`\<[`ClientStreamInternalSubscriber`](ClientStreamInternalSubscriber.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ClientStreamInternalSubscriber`](ClientStreamInternalSubscriber.md)\>

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
| `a` | `undefined` \| [`ClientStreamInternalSubscriber`](ClientStreamInternalSubscriber.md) \| `PlainMessage`\<[`ClientStreamInternalSubscriber`](ClientStreamInternalSubscriber.md)\> |
| `b` | `undefined` \| [`ClientStreamInternalSubscriber`](ClientStreamInternalSubscriber.md) \| `PlainMessage`\<[`ClientStreamInternalSubscriber`](ClientStreamInternalSubscriber.md)\> |

#### Returns

`boolean`

#### Defined in

src/client_streams.scailo_pb.ts:2035

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ClientStreamInternalSubscriber`](ClientStreamInternalSubscriber.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ClientStreamInternalSubscriber`](ClientStreamInternalSubscriber.md)

#### Defined in

src/client_streams.scailo_pb.ts:2023

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ClientStreamInternalSubscriber`](ClientStreamInternalSubscriber.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ClientStreamInternalSubscriber`](ClientStreamInternalSubscriber.md)

#### Defined in

src/client_streams.scailo_pb.ts:2027

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ClientStreamInternalSubscriber`](ClientStreamInternalSubscriber.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ClientStreamInternalSubscriber`](ClientStreamInternalSubscriber.md)

#### Defined in

src/client_streams.scailo_pb.ts:2031
