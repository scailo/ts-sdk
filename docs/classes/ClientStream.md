[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / ClientStream

# Class: ClientStream

Describes the parameters that are part of a standard response

**`Generated`**

from message Scailo.ClientStream

## Hierarchy

- `Message`\<[`ClientStream`](ClientStream.md)\>

  ↳ **`ClientStream`**

## Table of contents

### Constructors

- [constructor](ClientStream.md#constructor)

### Properties

- [clientId](ClientStream.md#clientid)
- [completedOn](ClientStream.md#completedon)
- [entityUuid](ClientStream.md#entityuuid)
- [internalRef](ClientStream.md#internalref)
- [logs](ClientStream.md#logs)
- [metadata](ClientStream.md#metadata)
- [refFrom](ClientStream.md#reffrom)
- [refId](ClientStream.md#refid)
- [refUuid](ClientStream.md#refuuid)
- [status](ClientStream.md#status)
- [title](ClientStream.md#title)
- [unreadCount](ClientStream.md#unreadcount)
- [vaultFolderId](ClientStream.md#vaultfolderid)
- [fields](ClientStream.md#fields)
- [runtime](ClientStream.md#runtime)
- [typeName](ClientStream.md#typename)

### Methods

- [clone](ClientStream.md#clone)
- [equals](ClientStream.md#equals)
- [fromBinary](ClientStream.md#frombinary)
- [fromJson](ClientStream.md#fromjson)
- [fromJsonString](ClientStream.md#fromjsonstring)
- [getType](ClientStream.md#gettype)
- [toBinary](ClientStream.md#tobinary)
- [toJSON](ClientStream.md#tojson)
- [toJson](ClientStream.md#tojson-1)
- [toJsonString](ClientStream.md#tojsonstring)
- [equals](ClientStream.md#equals-1)
- [fromBinary](ClientStream.md#frombinary-1)
- [fromJson](ClientStream.md#fromjson-1)
- [fromJsonString](ClientStream.md#fromjsonstring-1)

## Constructors

### constructor

• **new ClientStream**(`data?`): [`ClientStream`](ClientStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ClientStream`](ClientStream.md)\> |

#### Returns

[`ClientStream`](ClientStream.md)

#### Overrides

Message\&lt;ClientStream\&gt;.constructor

#### Defined in

src/clientstreams.scailo_pb.ts:649

## Properties

### clientId

• **clientId**: `bigint` = `protoInt64.zero`

The ID of the client

**`Generated`**

from field: uint64 client_id = 11;

#### Defined in

src/clientstreams.scailo_pb.ts:612

___

### completedOn

• **completedOn**: `bigint` = `protoInt64.zero`

The timestamp of when this client stream was marked as completed

**`Generated`**

from field: uint64 completed_on = 6;

#### Defined in

src/clientstreams.scailo_pb.ts:591

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/clientstreams.scailo_pb.ts:563

___

### internalRef

• **internalRef**: `string` = `""`

Stores the internal reference that is automatically generated

**`Generated`**

from field: string internal_ref = 50;

#### Defined in

src/clientstreams.scailo_pb.ts:640

___

### logs

• **logs**: [`LogbookLogClientStreamLC`](LogbookLogClientStreamLC.md)[] = `[]`

Stores the logs of every operation performed on this client stream

**`Generated`**

from field: repeated Scailo.LogbookLogClientStreamLC logs = 5;

#### Defined in

src/clientstreams.scailo_pb.ts:584

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this client stream

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

src/clientstreams.scailo_pb.ts:570

___

### refFrom

• **refFrom**: [`CLIENT_STREAM_REF_FROM`](../enums/CLIENT_STREAM_REF_FROM.md) = `CLIENT_STREAM_REF_FROM.CLIENT_STREAM_REF_FROM_ANY_UNSPECIFIED`

The associated reference

**`Generated`**

from field: Scailo.CLIENT_STREAM_REF_FROM ref_from = 12;

#### Defined in

src/clientstreams.scailo_pb.ts:619

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated reference ID

**`Generated`**

from field: uint64 ref_id = 13;

#### Defined in

src/clientstreams.scailo_pb.ts:626

___

### refUuid

• **refUuid**: `string` = `""`

The associated reference UUID

**`Generated`**

from field: string ref_uuid = 14;

#### Defined in

src/clientstreams.scailo_pb.ts:633

___

### status

• **status**: [`CLIENT_STREAM_LIFECYCLE`](../enums/CLIENT_STREAM_LIFECYCLE.md) = `CLIENT_STREAM_LIFECYCLE.CLIENT_STREAM_LIFECYCLE_ANY_UNSPECIFIED`

The status of this client stream

**`Generated`**

from field: Scailo.CLIENT_STREAM_LIFECYCLE status = 4;

#### Defined in

src/clientstreams.scailo_pb.ts:577

___

### title

• **title**: `string` = `""`

The title of the client stream

**`Generated`**

from field: string title = 10;

#### Defined in

src/clientstreams.scailo_pb.ts:605

___

### unreadCount

• **unreadCount**: `bigint` = `protoInt64.zero`

Stores the number of unread messages in this stream for the specific user (on the basis of the auth token)

**`Generated`**

from field: uint64 unread_count = 60;

#### Defined in

src/clientstreams.scailo_pb.ts:647

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 7;

#### Defined in

src/clientstreams.scailo_pb.ts:598

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/clientstreams.scailo_pb.ts:656

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/clientstreams.scailo_pb.ts:654

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ClientStream"``

#### Defined in

src/clientstreams.scailo_pb.ts:655

## Methods

### clone

▸ **clone**(): [`ClientStream`](ClientStream.md)

Create a deep copy.

#### Returns

[`ClientStream`](ClientStream.md)

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
| `other` | `undefined` \| ``null`` \| [`ClientStream`](ClientStream.md) \| `PlainMessage`\<[`ClientStream`](ClientStream.md)\> |

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

▸ **getType**(): `MessageType`\<[`ClientStream`](ClientStream.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ClientStream`](ClientStream.md)\>

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
| `a` | `undefined` \| [`ClientStream`](ClientStream.md) \| `PlainMessage`\<[`ClientStream`](ClientStream.md)\> |
| `b` | `undefined` \| [`ClientStream`](ClientStream.md) \| `PlainMessage`\<[`ClientStream`](ClientStream.md)\> |

#### Returns

`boolean`

#### Defined in

src/clientstreams.scailo_pb.ts:684

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ClientStream`](ClientStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ClientStream`](ClientStream.md)

#### Defined in

src/clientstreams.scailo_pb.ts:672

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ClientStream`](ClientStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ClientStream`](ClientStream.md)

#### Defined in

src/clientstreams.scailo_pb.ts:676

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ClientStream`](ClientStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ClientStream`](ClientStream.md)

#### Defined in

src/clientstreams.scailo_pb.ts:680
