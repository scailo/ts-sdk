[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ClientStreamsServiceFilterReq

# Class: ClientStreamsServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Scailo.ClientStreamsServiceFilterReq

## Hierarchy

- `Message`\<[`ClientStreamsServiceFilterReq`](ClientStreamsServiceFilterReq.md)\>

  ↳ **`ClientStreamsServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](ClientStreamsServiceFilterReq.md#constructor)

### Properties

- [clientId](ClientStreamsServiceFilterReq.md#clientid)
- [clientSubscriberUserId](ClientStreamsServiceFilterReq.md#clientsubscriberuserid)
- [completedOnEnd](ClientStreamsServiceFilterReq.md#completedonend)
- [completedOnStart](ClientStreamsServiceFilterReq.md#completedonstart)
- [count](ClientStreamsServiceFilterReq.md#count)
- [creationTimestampEnd](ClientStreamsServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](ClientStreamsServiceFilterReq.md#creationtimestampstart)
- [entityUuid](ClientStreamsServiceFilterReq.md#entityuuid)
- [internalRef](ClientStreamsServiceFilterReq.md#internalref)
- [internalSubscriberUserId](ClientStreamsServiceFilterReq.md#internalsubscriberuserid)
- [isActive](ClientStreamsServiceFilterReq.md#isactive)
- [modificationTimestampEnd](ClientStreamsServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](ClientStreamsServiceFilterReq.md#modificationtimestampstart)
- [offset](ClientStreamsServiceFilterReq.md#offset)
- [refFrom](ClientStreamsServiceFilterReq.md#reffrom)
- [refId](ClientStreamsServiceFilterReq.md#refid)
- [sortKey](ClientStreamsServiceFilterReq.md#sortkey)
- [sortOrder](ClientStreamsServiceFilterReq.md#sortorder)
- [status](ClientStreamsServiceFilterReq.md#status)
- [title](ClientStreamsServiceFilterReq.md#title)
- [fields](ClientStreamsServiceFilterReq.md#fields)
- [runtime](ClientStreamsServiceFilterReq.md#runtime)
- [typeName](ClientStreamsServiceFilterReq.md#typename)

### Methods

- [clone](ClientStreamsServiceFilterReq.md#clone)
- [equals](ClientStreamsServiceFilterReq.md#equals)
- [fromBinary](ClientStreamsServiceFilterReq.md#frombinary)
- [fromJson](ClientStreamsServiceFilterReq.md#fromjson)
- [fromJsonString](ClientStreamsServiceFilterReq.md#fromjsonstring)
- [getType](ClientStreamsServiceFilterReq.md#gettype)
- [toBinary](ClientStreamsServiceFilterReq.md#tobinary)
- [toJSON](ClientStreamsServiceFilterReq.md#tojson)
- [toJson](ClientStreamsServiceFilterReq.md#tojson-1)
- [toJsonString](ClientStreamsServiceFilterReq.md#tojsonstring)
- [equals](ClientStreamsServiceFilterReq.md#equals-1)
- [fromBinary](ClientStreamsServiceFilterReq.md#frombinary-1)
- [fromJson](ClientStreamsServiceFilterReq.md#fromjson-1)
- [fromJsonString](ClientStreamsServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new ClientStreamsServiceFilterReq**(`data?`): [`ClientStreamsServiceFilterReq`](ClientStreamsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ClientStreamsServiceFilterReq`](ClientStreamsServiceFilterReq.md)\> |

#### Returns

[`ClientStreamsServiceFilterReq`](ClientStreamsServiceFilterReq.md)

#### Overrides

Message\&lt;ClientStreamsServiceFilterReq\&gt;.constructor

#### Defined in

src/client_streams.scailo_pb.ts:1061

## Properties

### clientId

• **clientId**: `bigint` = `protoInt64.zero`

------------------------------------------------
Filter by the associated client ID

**`Generated`**

from field: uint64 client_id = 40;

#### Defined in

src/client_streams.scailo_pb.ts:1029

___

### clientSubscriberUserId

• **clientSubscriberUserId**: `bigint` = `protoInt64.zero`

Filter by the associated client subscriber user ID

**`Generated`**

from field: uint64 client_subscriber_user_id = 61;

#### Defined in

src/client_streams.scailo_pb.ts:1059

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: uint64 completed_on_end = 16;

#### Defined in

src/client_streams.scailo_pb.ts:1007

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: uint64 completed_on_start = 15;

#### Defined in

src/client_streams.scailo_pb.ts:1000

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

src/client_streams.scailo_pb.ts:930

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

src/client_streams.scailo_pb.ts:965

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

src/client_streams.scailo_pb.ts:958

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

src/client_streams.scailo_pb.ts:986

___

### internalRef

• **internalRef**: `string` = `""`

Stores the internal reference that is automatically generated

**`Generated`**

from field: string internal_ref = 18;

#### Defined in

src/client_streams.scailo_pb.ts:1014

___

### internalSubscriberUserId

• **internalSubscriberUserId**: `bigint` = `protoInt64.zero`

Filter by the associated internal subscriber user ID

**`Generated`**

from field: uint64 internal_subscriber_user_id = 60;

#### Defined in

src/client_streams.scailo_pb.ts:1052

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/client_streams.scailo_pb.ts:923

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

src/client_streams.scailo_pb.ts:979

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

src/client_streams.scailo_pb.ts:972

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

src/client_streams.scailo_pb.ts:937

___

### refFrom

• **refFrom**: [`CLIENT_STREAM_REF_FROM`](../enums/CLIENT_STREAM_REF_FROM.md) = `CLIENT_STREAM_REF_FROM.CLIENT_STREAM_REF_FROM_ANY_UNSPECIFIED`

Filter by the associated reference

**`Generated`**

from field: Scailo.CLIENT_STREAM_REF_FROM ref_from = 41;

#### Defined in

src/client_streams.scailo_pb.ts:1036

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

Filter by the associated reference ID

------------------------------------------------

**`Generated`**

from field: uint64 ref_id = 42;

#### Defined in

src/client_streams.scailo_pb.ts:1045

___

### sortKey

• **sortKey**: [`CLIENT_STREAM_SORT_KEY`](../enums/CLIENT_STREAM_SORT_KEY.md) = `CLIENT_STREAM_SORT_KEY.CLIENT_STREAM_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.CLIENT_STREAM_SORT_KEY sort_key = 5;

#### Defined in

src/client_streams.scailo_pb.ts:951

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

src/client_streams.scailo_pb.ts:944

___

### status

• **status**: [`CLIENT_STREAM_LIFECYCLE`](../enums/CLIENT_STREAM_LIFECYCLE.md) = `CLIENT_STREAM_LIFECYCLE.CLIENT_STREAM_LIFECYCLE_ANY_UNSPECIFIED`

The status of this client stream

**`Generated`**

from field: Scailo.CLIENT_STREAM_LIFECYCLE status = 10;

#### Defined in

src/client_streams.scailo_pb.ts:993

___

### title

• **title**: `string` = `""`

The title of the client stream

**`Generated`**

from field: string title = 30;

#### Defined in

src/client_streams.scailo_pb.ts:1021

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/client_streams.scailo_pb.ts:1068

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/client_streams.scailo_pb.ts:1066

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ClientStreamsServiceFilterReq"``

#### Defined in

src/client_streams.scailo_pb.ts:1067

## Methods

### clone

▸ **clone**(): [`ClientStreamsServiceFilterReq`](ClientStreamsServiceFilterReq.md)

Create a deep copy.

#### Returns

[`ClientStreamsServiceFilterReq`](ClientStreamsServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`ClientStreamsServiceFilterReq`](ClientStreamsServiceFilterReq.md) \| `PlainMessage`\<[`ClientStreamsServiceFilterReq`](ClientStreamsServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`ClientStreamsServiceFilterReq`](ClientStreamsServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ClientStreamsServiceFilterReq`](ClientStreamsServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`ClientStreamsServiceFilterReq`](ClientStreamsServiceFilterReq.md) \| `PlainMessage`\<[`ClientStreamsServiceFilterReq`](ClientStreamsServiceFilterReq.md)\> |
| `b` | `undefined` \| [`ClientStreamsServiceFilterReq`](ClientStreamsServiceFilterReq.md) \| `PlainMessage`\<[`ClientStreamsServiceFilterReq`](ClientStreamsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/client_streams.scailo_pb.ts:1103

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ClientStreamsServiceFilterReq`](ClientStreamsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ClientStreamsServiceFilterReq`](ClientStreamsServiceFilterReq.md)

#### Defined in

src/client_streams.scailo_pb.ts:1091

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ClientStreamsServiceFilterReq`](ClientStreamsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ClientStreamsServiceFilterReq`](ClientStreamsServiceFilterReq.md)

#### Defined in

src/client_streams.scailo_pb.ts:1095

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ClientStreamsServiceFilterReq`](ClientStreamsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ClientStreamsServiceFilterReq`](ClientStreamsServiceFilterReq.md)

#### Defined in

src/client_streams.scailo_pb.ts:1099
