[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ClientStreamsServiceCountReq

# Class: ClientStreamsServiceCountReq

Describes the base request payload of a count search

**`Generated`**

from message Scailo.ClientStreamsServiceCountReq

## Hierarchy

- `Message`\<[`ClientStreamsServiceCountReq`](ClientStreamsServiceCountReq.md)\>

  ↳ **`ClientStreamsServiceCountReq`**

## Table of contents

### Constructors

- [constructor](ClientStreamsServiceCountReq.md#constructor)

### Properties

- [clientId](ClientStreamsServiceCountReq.md#clientid)
- [clientSubscriberUserId](ClientStreamsServiceCountReq.md#clientsubscriberuserid)
- [completedOnEnd](ClientStreamsServiceCountReq.md#completedonend)
- [completedOnStart](ClientStreamsServiceCountReq.md#completedonstart)
- [creationTimestampEnd](ClientStreamsServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](ClientStreamsServiceCountReq.md#creationtimestampstart)
- [entityUuid](ClientStreamsServiceCountReq.md#entityuuid)
- [internalRef](ClientStreamsServiceCountReq.md#internalref)
- [internalSubscriberUserId](ClientStreamsServiceCountReq.md#internalsubscriberuserid)
- [isActive](ClientStreamsServiceCountReq.md#isactive)
- [modificationTimestampEnd](ClientStreamsServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](ClientStreamsServiceCountReq.md#modificationtimestampstart)
- [refFrom](ClientStreamsServiceCountReq.md#reffrom)
- [refId](ClientStreamsServiceCountReq.md#refid)
- [status](ClientStreamsServiceCountReq.md#status)
- [title](ClientStreamsServiceCountReq.md#title)
- [fields](ClientStreamsServiceCountReq.md#fields)
- [runtime](ClientStreamsServiceCountReq.md#runtime)
- [typeName](ClientStreamsServiceCountReq.md#typename)

### Methods

- [clone](ClientStreamsServiceCountReq.md#clone)
- [equals](ClientStreamsServiceCountReq.md#equals)
- [fromBinary](ClientStreamsServiceCountReq.md#frombinary)
- [fromJson](ClientStreamsServiceCountReq.md#fromjson)
- [fromJsonString](ClientStreamsServiceCountReq.md#fromjsonstring)
- [getType](ClientStreamsServiceCountReq.md#gettype)
- [toBinary](ClientStreamsServiceCountReq.md#tobinary)
- [toJSON](ClientStreamsServiceCountReq.md#tojson)
- [toJson](ClientStreamsServiceCountReq.md#tojson-1)
- [toJsonString](ClientStreamsServiceCountReq.md#tojsonstring)
- [equals](ClientStreamsServiceCountReq.md#equals-1)
- [fromBinary](ClientStreamsServiceCountReq.md#frombinary-1)
- [fromJson](ClientStreamsServiceCountReq.md#fromjson-1)
- [fromJsonString](ClientStreamsServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new ClientStreamsServiceCountReq**(`data?`): [`ClientStreamsServiceCountReq`](ClientStreamsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ClientStreamsServiceCountReq`](ClientStreamsServiceCountReq.md)\> |

#### Returns

[`ClientStreamsServiceCountReq`](ClientStreamsServiceCountReq.md)

#### Overrides

Message\&lt;ClientStreamsServiceCountReq\&gt;.constructor

#### Defined in

src/clientstreams.scailo_pb.ts:1222

## Properties

### clientId

• **clientId**: `bigint` = `protoInt64.zero`

------------------------------------------------
Filter by the associated client ID

**`Generated`**

from field: uint64 client_id = 40;

#### Defined in

src/clientstreams.scailo_pb.ts:1190

___

### clientSubscriberUserId

• **clientSubscriberUserId**: `bigint` = `protoInt64.zero`

Filter by the associated client subscriber user ID

**`Generated`**

from field: uint64 client_subscriber_user_id = 61;

#### Defined in

src/clientstreams.scailo_pb.ts:1220

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: uint64 completed_on_end = 16;

#### Defined in

src/clientstreams.scailo_pb.ts:1168

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: uint64 completed_on_start = 15;

#### Defined in

src/clientstreams.scailo_pb.ts:1161

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

src/clientstreams.scailo_pb.ts:1126

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

src/clientstreams.scailo_pb.ts:1119

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

src/clientstreams.scailo_pb.ts:1147

___

### internalRef

• **internalRef**: `string` = `""`

Stores the internal reference that is automatically generated

**`Generated`**

from field: string internal_ref = 18;

#### Defined in

src/clientstreams.scailo_pb.ts:1175

___

### internalSubscriberUserId

• **internalSubscriberUserId**: `bigint` = `protoInt64.zero`

Filter by the associated internal subscriber user ID

**`Generated`**

from field: uint64 internal_subscriber_user_id = 60;

#### Defined in

src/clientstreams.scailo_pb.ts:1213

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/clientstreams.scailo_pb.ts:1112

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

src/clientstreams.scailo_pb.ts:1140

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

src/clientstreams.scailo_pb.ts:1133

___

### refFrom

• **refFrom**: [`CLIENT_STREAM_REF_FROM`](../enums/CLIENT_STREAM_REF_FROM.md) = `CLIENT_STREAM_REF_FROM.CLIENT_STREAM_REF_FROM_ANY_UNSPECIFIED`

Filter by the associated reference

**`Generated`**

from field: Scailo.CLIENT_STREAM_REF_FROM ref_from = 41;

#### Defined in

src/clientstreams.scailo_pb.ts:1197

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

Filter by the associated reference ID

------------------------------------------------

**`Generated`**

from field: uint64 ref_id = 42;

#### Defined in

src/clientstreams.scailo_pb.ts:1206

___

### status

• **status**: [`CLIENT_STREAM_LIFECYCLE`](../enums/CLIENT_STREAM_LIFECYCLE.md) = `CLIENT_STREAM_LIFECYCLE.CLIENT_STREAM_LIFECYCLE_ANY_UNSPECIFIED`

The status of this client stream

**`Generated`**

from field: Scailo.CLIENT_STREAM_LIFECYCLE status = 10;

#### Defined in

src/clientstreams.scailo_pb.ts:1154

___

### title

• **title**: `string` = `""`

The title of the client stream

**`Generated`**

from field: string title = 30;

#### Defined in

src/clientstreams.scailo_pb.ts:1182

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/clientstreams.scailo_pb.ts:1229

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/clientstreams.scailo_pb.ts:1227

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ClientStreamsServiceCountReq"``

#### Defined in

src/clientstreams.scailo_pb.ts:1228

## Methods

### clone

▸ **clone**(): [`ClientStreamsServiceCountReq`](ClientStreamsServiceCountReq.md)

Create a deep copy.

#### Returns

[`ClientStreamsServiceCountReq`](ClientStreamsServiceCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`ClientStreamsServiceCountReq`](ClientStreamsServiceCountReq.md) \| `PlainMessage`\<[`ClientStreamsServiceCountReq`](ClientStreamsServiceCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`ClientStreamsServiceCountReq`](ClientStreamsServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ClientStreamsServiceCountReq`](ClientStreamsServiceCountReq.md)\>

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
| `a` | `undefined` \| [`ClientStreamsServiceCountReq`](ClientStreamsServiceCountReq.md) \| `PlainMessage`\<[`ClientStreamsServiceCountReq`](ClientStreamsServiceCountReq.md)\> |
| `b` | `undefined` \| [`ClientStreamsServiceCountReq`](ClientStreamsServiceCountReq.md) \| `PlainMessage`\<[`ClientStreamsServiceCountReq`](ClientStreamsServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/clientstreams.scailo_pb.ts:1260

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ClientStreamsServiceCountReq`](ClientStreamsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ClientStreamsServiceCountReq`](ClientStreamsServiceCountReq.md)

#### Defined in

src/clientstreams.scailo_pb.ts:1248

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ClientStreamsServiceCountReq`](ClientStreamsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ClientStreamsServiceCountReq`](ClientStreamsServiceCountReq.md)

#### Defined in

src/clientstreams.scailo_pb.ts:1252

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ClientStreamsServiceCountReq`](ClientStreamsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ClientStreamsServiceCountReq`](ClientStreamsServiceCountReq.md)

#### Defined in

src/clientstreams.scailo_pb.ts:1256
