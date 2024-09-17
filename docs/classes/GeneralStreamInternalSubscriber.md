[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / GeneralStreamInternalSubscriber

# Class: GeneralStreamInternalSubscriber

Describes the parameters that constitute an internal subscriber

**`Generated`**

from message Scailo.GeneralStreamInternalSubscriber

## Hierarchy

- `Message`\<[`GeneralStreamInternalSubscriber`](GeneralStreamInternalSubscriber.md)\>

  ↳ **`GeneralStreamInternalSubscriber`**

## Table of contents

### Constructors

- [constructor](GeneralStreamInternalSubscriber.md#constructor)

### Properties

- [entityUuid](GeneralStreamInternalSubscriber.md#entityuuid)
- [generalStreamId](GeneralStreamInternalSubscriber.md#generalstreamid)
- [metadata](GeneralStreamInternalSubscriber.md#metadata)
- [userComment](GeneralStreamInternalSubscriber.md#usercomment)
- [userId](GeneralStreamInternalSubscriber.md#userid)
- [fields](GeneralStreamInternalSubscriber.md#fields)
- [runtime](GeneralStreamInternalSubscriber.md#runtime)
- [typeName](GeneralStreamInternalSubscriber.md#typename)

### Methods

- [clone](GeneralStreamInternalSubscriber.md#clone)
- [equals](GeneralStreamInternalSubscriber.md#equals)
- [fromBinary](GeneralStreamInternalSubscriber.md#frombinary)
- [fromJson](GeneralStreamInternalSubscriber.md#fromjson)
- [fromJsonString](GeneralStreamInternalSubscriber.md#fromjsonstring)
- [getType](GeneralStreamInternalSubscriber.md#gettype)
- [toBinary](GeneralStreamInternalSubscriber.md#tobinary)
- [toJSON](GeneralStreamInternalSubscriber.md#tojson)
- [toJson](GeneralStreamInternalSubscriber.md#tojson-1)
- [toJsonString](GeneralStreamInternalSubscriber.md#tojsonstring)
- [equals](GeneralStreamInternalSubscriber.md#equals-1)
- [fromBinary](GeneralStreamInternalSubscriber.md#frombinary-1)
- [fromJson](GeneralStreamInternalSubscriber.md#fromjson-1)
- [fromJsonString](GeneralStreamInternalSubscriber.md#fromjsonstring-1)

## Constructors

### constructor

• **new GeneralStreamInternalSubscriber**(`data?`): [`GeneralStreamInternalSubscriber`](GeneralStreamInternalSubscriber.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`GeneralStreamInternalSubscriber`](GeneralStreamInternalSubscriber.md)\> |

#### Returns

[`GeneralStreamInternalSubscriber`](GeneralStreamInternalSubscriber.md)

#### Overrides

Message\&lt;GeneralStreamInternalSubscriber\&gt;.constructor

#### Defined in

src/generalstreams.scailo_pb.ts:1756

## Properties

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/generalstreams.scailo_pb.ts:1726

___

### generalStreamId

• **generalStreamId**: `bigint` = `protoInt64.zero`

Stores the general stream ID

**`Generated`**

from field: uint64 general_stream_id = 10;

#### Defined in

src/generalstreams.scailo_pb.ts:1747

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this general stream internal subscriber

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

src/generalstreams.scailo_pb.ts:1733

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might have added during an operation

**`Generated`**

from field: string user_comment = 5;

#### Defined in

src/generalstreams.scailo_pb.ts:1740

___

### userId

• **userId**: `bigint` = `protoInt64.zero`

Stores the user ID

**`Generated`**

from field: uint64 user_id = 11;

#### Defined in

src/generalstreams.scailo_pb.ts:1754

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/generalstreams.scailo_pb.ts:1763

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/generalstreams.scailo_pb.ts:1761

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.GeneralStreamInternalSubscriber"``

#### Defined in

src/generalstreams.scailo_pb.ts:1762

## Methods

### clone

▸ **clone**(): [`GeneralStreamInternalSubscriber`](GeneralStreamInternalSubscriber.md)

Create a deep copy.

#### Returns

[`GeneralStreamInternalSubscriber`](GeneralStreamInternalSubscriber.md)

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
| `other` | `undefined` \| ``null`` \| [`GeneralStreamInternalSubscriber`](GeneralStreamInternalSubscriber.md) \| `PlainMessage`\<[`GeneralStreamInternalSubscriber`](GeneralStreamInternalSubscriber.md)\> |

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

▸ **getType**(): `MessageType`\<[`GeneralStreamInternalSubscriber`](GeneralStreamInternalSubscriber.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`GeneralStreamInternalSubscriber`](GeneralStreamInternalSubscriber.md)\>

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
| `a` | `undefined` \| [`GeneralStreamInternalSubscriber`](GeneralStreamInternalSubscriber.md) \| `PlainMessage`\<[`GeneralStreamInternalSubscriber`](GeneralStreamInternalSubscriber.md)\> |
| `b` | `undefined` \| [`GeneralStreamInternalSubscriber`](GeneralStreamInternalSubscriber.md) \| `PlainMessage`\<[`GeneralStreamInternalSubscriber`](GeneralStreamInternalSubscriber.md)\> |

#### Returns

`boolean`

#### Defined in

src/generalstreams.scailo_pb.ts:1783

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`GeneralStreamInternalSubscriber`](GeneralStreamInternalSubscriber.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`GeneralStreamInternalSubscriber`](GeneralStreamInternalSubscriber.md)

#### Defined in

src/generalstreams.scailo_pb.ts:1771

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`GeneralStreamInternalSubscriber`](GeneralStreamInternalSubscriber.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GeneralStreamInternalSubscriber`](GeneralStreamInternalSubscriber.md)

#### Defined in

src/generalstreams.scailo_pb.ts:1775

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`GeneralStreamInternalSubscriber`](GeneralStreamInternalSubscriber.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GeneralStreamInternalSubscriber`](GeneralStreamInternalSubscriber.md)

#### Defined in

src/generalstreams.scailo_pb.ts:1779
