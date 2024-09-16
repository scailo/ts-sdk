[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / ClientStreamClientSubscriber

# Class: ClientStreamClientSubscriber

Describes the parameters that constitute a client stream client subscriber

**`Generated`**

from message Scailo.ClientStreamClientSubscriber

## Hierarchy

- `Message`\<[`ClientStreamClientSubscriber`](ClientStreamClientSubscriber.md)\>

  ↳ **`ClientStreamClientSubscriber`**

## Table of contents

### Constructors

- [constructor](ClientStreamClientSubscriber.md#constructor)

### Properties

- [clientStreamId](ClientStreamClientSubscriber.md#clientstreamid)
- [entityUuid](ClientStreamClientSubscriber.md#entityuuid)
- [metadata](ClientStreamClientSubscriber.md#metadata)
- [userComment](ClientStreamClientSubscriber.md#usercomment)
- [userId](ClientStreamClientSubscriber.md#userid)
- [userUuid](ClientStreamClientSubscriber.md#useruuid)
- [fields](ClientStreamClientSubscriber.md#fields)
- [runtime](ClientStreamClientSubscriber.md#runtime)
- [typeName](ClientStreamClientSubscriber.md#typename)

### Methods

- [clone](ClientStreamClientSubscriber.md#clone)
- [equals](ClientStreamClientSubscriber.md#equals)
- [fromBinary](ClientStreamClientSubscriber.md#frombinary)
- [fromJson](ClientStreamClientSubscriber.md#fromjson)
- [fromJsonString](ClientStreamClientSubscriber.md#fromjsonstring)
- [getType](ClientStreamClientSubscriber.md#gettype)
- [toBinary](ClientStreamClientSubscriber.md#tobinary)
- [toJSON](ClientStreamClientSubscriber.md#tojson)
- [toJson](ClientStreamClientSubscriber.md#tojson-1)
- [toJsonString](ClientStreamClientSubscriber.md#tojsonstring)
- [equals](ClientStreamClientSubscriber.md#equals-1)
- [fromBinary](ClientStreamClientSubscriber.md#frombinary-1)
- [fromJson](ClientStreamClientSubscriber.md#fromjson-1)
- [fromJsonString](ClientStreamClientSubscriber.md#fromjsonstring-1)

## Constructors

### constructor

• **new ClientStreamClientSubscriber**(`data?`): [`ClientStreamClientSubscriber`](ClientStreamClientSubscriber.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ClientStreamClientSubscriber`](ClientStreamClientSubscriber.md)\> |

#### Returns

[`ClientStreamClientSubscriber`](ClientStreamClientSubscriber.md)

#### Overrides

Message\&lt;ClientStreamClientSubscriber\&gt;.constructor

#### Defined in

src/clientstreams.scailo_pb.ts:2255

## Properties

### clientStreamId

• **clientStreamId**: `bigint` = `protoInt64.zero`

Stores the client stream ID

**`Generated`**

from field: uint64 client_stream_id = 10;

#### Defined in

src/clientstreams.scailo_pb.ts:2239

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/clientstreams.scailo_pb.ts:2218

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this client stream client subscriber

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

src/clientstreams.scailo_pb.ts:2225

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might have added during an operation

**`Generated`**

from field: string user_comment = 5;

#### Defined in

src/clientstreams.scailo_pb.ts:2232

___

### userId

• **userId**: `bigint` = `protoInt64.zero`

Stores the user ID

**`Generated`**

from field: uint64 user_id = 11;

#### Defined in

src/clientstreams.scailo_pb.ts:2246

___

### userUuid

• **userUuid**: `string` = `""`

Stores the user UUID (determined by the user_id)

**`Generated`**

from field: string user_uuid = 30;

#### Defined in

src/clientstreams.scailo_pb.ts:2253

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/clientstreams.scailo_pb.ts:2262

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/clientstreams.scailo_pb.ts:2260

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ClientStreamClientSubscriber"``

#### Defined in

src/clientstreams.scailo_pb.ts:2261

## Methods

### clone

▸ **clone**(): [`ClientStreamClientSubscriber`](ClientStreamClientSubscriber.md)

Create a deep copy.

#### Returns

[`ClientStreamClientSubscriber`](ClientStreamClientSubscriber.md)

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
| `other` | `undefined` \| ``null`` \| [`ClientStreamClientSubscriber`](ClientStreamClientSubscriber.md) \| `PlainMessage`\<[`ClientStreamClientSubscriber`](ClientStreamClientSubscriber.md)\> |

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

▸ **getType**(): `MessageType`\<[`ClientStreamClientSubscriber`](ClientStreamClientSubscriber.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ClientStreamClientSubscriber`](ClientStreamClientSubscriber.md)\>

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
| `a` | `undefined` \| [`ClientStreamClientSubscriber`](ClientStreamClientSubscriber.md) \| `PlainMessage`\<[`ClientStreamClientSubscriber`](ClientStreamClientSubscriber.md)\> |
| `b` | `undefined` \| [`ClientStreamClientSubscriber`](ClientStreamClientSubscriber.md) \| `PlainMessage`\<[`ClientStreamClientSubscriber`](ClientStreamClientSubscriber.md)\> |

#### Returns

`boolean`

#### Defined in

src/clientstreams.scailo_pb.ts:2283

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ClientStreamClientSubscriber`](ClientStreamClientSubscriber.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ClientStreamClientSubscriber`](ClientStreamClientSubscriber.md)

#### Defined in

src/clientstreams.scailo_pb.ts:2271

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ClientStreamClientSubscriber`](ClientStreamClientSubscriber.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ClientStreamClientSubscriber`](ClientStreamClientSubscriber.md)

#### Defined in

src/clientstreams.scailo_pb.ts:2275

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ClientStreamClientSubscriber`](ClientStreamClientSubscriber.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ClientStreamClientSubscriber`](ClientStreamClientSubscriber.md)

#### Defined in

src/clientstreams.scailo_pb.ts:2279
