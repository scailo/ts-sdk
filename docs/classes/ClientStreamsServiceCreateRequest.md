[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ClientStreamsServiceCreateRequest

# Class: ClientStreamsServiceCreateRequest

Describes the parameters necessary to create a record

**`Generated`**

from message Scailo.ClientStreamsServiceCreateRequest

## Hierarchy

- `Message`\<[`ClientStreamsServiceCreateRequest`](ClientStreamsServiceCreateRequest.md)\>

  ↳ **`ClientStreamsServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](ClientStreamsServiceCreateRequest.md#constructor)

### Properties

- [assignSelfAsClientSubscriber](ClientStreamsServiceCreateRequest.md#assignselfasclientsubscriber)
- [assignSelfAsInternalSubscriber](ClientStreamsServiceCreateRequest.md#assignselfasinternalsubscriber)
- [clientId](ClientStreamsServiceCreateRequest.md#clientid)
- [entityUuid](ClientStreamsServiceCreateRequest.md#entityuuid)
- [refFrom](ClientStreamsServiceCreateRequest.md#reffrom)
- [refId](ClientStreamsServiceCreateRequest.md#refid)
- [title](ClientStreamsServiceCreateRequest.md#title)
- [userComment](ClientStreamsServiceCreateRequest.md#usercomment)
- [vaultFolderId](ClientStreamsServiceCreateRequest.md#vaultfolderid)
- [fields](ClientStreamsServiceCreateRequest.md#fields)
- [runtime](ClientStreamsServiceCreateRequest.md#runtime)
- [typeName](ClientStreamsServiceCreateRequest.md#typename)

### Methods

- [clone](ClientStreamsServiceCreateRequest.md#clone)
- [equals](ClientStreamsServiceCreateRequest.md#equals)
- [fromBinary](ClientStreamsServiceCreateRequest.md#frombinary)
- [fromJson](ClientStreamsServiceCreateRequest.md#fromjson)
- [fromJsonString](ClientStreamsServiceCreateRequest.md#fromjsonstring)
- [getType](ClientStreamsServiceCreateRequest.md#gettype)
- [toBinary](ClientStreamsServiceCreateRequest.md#tobinary)
- [toJSON](ClientStreamsServiceCreateRequest.md#tojson)
- [toJson](ClientStreamsServiceCreateRequest.md#tojson-1)
- [toJsonString](ClientStreamsServiceCreateRequest.md#tojsonstring)
- [equals](ClientStreamsServiceCreateRequest.md#equals-1)
- [fromBinary](ClientStreamsServiceCreateRequest.md#frombinary-1)
- [fromJson](ClientStreamsServiceCreateRequest.md#fromjson-1)
- [fromJsonString](ClientStreamsServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new ClientStreamsServiceCreateRequest**(`data?`): [`ClientStreamsServiceCreateRequest`](ClientStreamsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ClientStreamsServiceCreateRequest`](ClientStreamsServiceCreateRequest.md)\> |

#### Returns

[`ClientStreamsServiceCreateRequest`](ClientStreamsServiceCreateRequest.md)

#### Overrides

Message\&lt;ClientStreamsServiceCreateRequest\&gt;.constructor

#### Defined in

src/client_streams.scailo_pb.ts:441

## Properties

### assignSelfAsClientSubscriber

• **assignSelfAsClientSubscriber**: `boolean` = `false`

Assign self (the user creating the stream) as a client subscriber (this would allow client users to also create a stream)

**`Generated`**

from field: bool assign_self_as_client_subscriber = 81;

#### Defined in

src/client_streams.scailo_pb.ts:439

___

### assignSelfAsInternalSubscriber

• **assignSelfAsInternalSubscriber**: `boolean` = `false`

Assign self (the user creating the stream) as an internal subscriber

**`Generated`**

from field: bool assign_self_as_internal_subscriber = 80;

#### Defined in

src/client_streams.scailo_pb.ts:432

___

### clientId

• **clientId**: `bigint` = `protoInt64.zero`

The ID of the client

**`Generated`**

from field: uint64 client_id = 11;

#### Defined in

src/client_streams.scailo_pb.ts:411

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/client_streams.scailo_pb.ts:383

___

### refFrom

• **refFrom**: [`CLIENT_STREAM_REF_FROM`](../enums/CLIENT_STREAM_REF_FROM.md) = `CLIENT_STREAM_REF_FROM.CLIENT_STREAM_REF_FROM_ANY_UNSPECIFIED`

The associated reference

**`Generated`**

from field: Scailo.CLIENT_STREAM_REF_FROM ref_from = 12;

#### Defined in

src/client_streams.scailo_pb.ts:418

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated reference ID

**`Generated`**

from field: uint64 ref_id = 13;

#### Defined in

src/client_streams.scailo_pb.ts:425

___

### title

• **title**: `string` = `""`

The title of the client stream

**`Generated`**

from field: string title = 10;

#### Defined in

src/client_streams.scailo_pb.ts:404

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 2;

#### Defined in

src/client_streams.scailo_pb.ts:390

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 7;

#### Defined in

src/client_streams.scailo_pb.ts:397

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/client_streams.scailo_pb.ts:448

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/client_streams.scailo_pb.ts:446

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ClientStreamsServiceCreateRequest"``

#### Defined in

src/client_streams.scailo_pb.ts:447

## Methods

### clone

▸ **clone**(): [`ClientStreamsServiceCreateRequest`](ClientStreamsServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`ClientStreamsServiceCreateRequest`](ClientStreamsServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`ClientStreamsServiceCreateRequest`](ClientStreamsServiceCreateRequest.md) \| `PlainMessage`\<[`ClientStreamsServiceCreateRequest`](ClientStreamsServiceCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`ClientStreamsServiceCreateRequest`](ClientStreamsServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ClientStreamsServiceCreateRequest`](ClientStreamsServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`ClientStreamsServiceCreateRequest`](ClientStreamsServiceCreateRequest.md) \| `PlainMessage`\<[`ClientStreamsServiceCreateRequest`](ClientStreamsServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`ClientStreamsServiceCreateRequest`](ClientStreamsServiceCreateRequest.md) \| `PlainMessage`\<[`ClientStreamsServiceCreateRequest`](ClientStreamsServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/client_streams.scailo_pb.ts:472

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ClientStreamsServiceCreateRequest`](ClientStreamsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ClientStreamsServiceCreateRequest`](ClientStreamsServiceCreateRequest.md)

#### Defined in

src/client_streams.scailo_pb.ts:460

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ClientStreamsServiceCreateRequest`](ClientStreamsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ClientStreamsServiceCreateRequest`](ClientStreamsServiceCreateRequest.md)

#### Defined in

src/client_streams.scailo_pb.ts:464

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ClientStreamsServiceCreateRequest`](ClientStreamsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ClientStreamsServiceCreateRequest`](ClientStreamsServiceCreateRequest.md)

#### Defined in

src/client_streams.scailo_pb.ts:468
