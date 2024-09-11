[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / GeneralStreamsServiceFilterReq

# Class: GeneralStreamsServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Scailo.GeneralStreamsServiceFilterReq

## Hierarchy

- `Message`\<[`GeneralStreamsServiceFilterReq`](GeneralStreamsServiceFilterReq.md)\>

  ↳ **`GeneralStreamsServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](GeneralStreamsServiceFilterReq.md#constructor)

### Properties

- [completedOnEnd](GeneralStreamsServiceFilterReq.md#completedonend)
- [completedOnStart](GeneralStreamsServiceFilterReq.md#completedonstart)
- [count](GeneralStreamsServiceFilterReq.md#count)
- [creationTimestampEnd](GeneralStreamsServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](GeneralStreamsServiceFilterReq.md#creationtimestampstart)
- [entityUuid](GeneralStreamsServiceFilterReq.md#entityuuid)
- [internalRef](GeneralStreamsServiceFilterReq.md#internalref)
- [internalSubscriberUserId](GeneralStreamsServiceFilterReq.md#internalsubscriberuserid)
- [isActive](GeneralStreamsServiceFilterReq.md#isactive)
- [modificationTimestampEnd](GeneralStreamsServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](GeneralStreamsServiceFilterReq.md#modificationtimestampstart)
- [offset](GeneralStreamsServiceFilterReq.md#offset)
- [sortKey](GeneralStreamsServiceFilterReq.md#sortkey)
- [sortOrder](GeneralStreamsServiceFilterReq.md#sortorder)
- [status](GeneralStreamsServiceFilterReq.md#status)
- [title](GeneralStreamsServiceFilterReq.md#title)
- [fields](GeneralStreamsServiceFilterReq.md#fields)
- [runtime](GeneralStreamsServiceFilterReq.md#runtime)
- [typeName](GeneralStreamsServiceFilterReq.md#typename)

### Methods

- [clone](GeneralStreamsServiceFilterReq.md#clone)
- [equals](GeneralStreamsServiceFilterReq.md#equals)
- [fromBinary](GeneralStreamsServiceFilterReq.md#frombinary)
- [fromJson](GeneralStreamsServiceFilterReq.md#fromjson)
- [fromJsonString](GeneralStreamsServiceFilterReq.md#fromjsonstring)
- [getType](GeneralStreamsServiceFilterReq.md#gettype)
- [toBinary](GeneralStreamsServiceFilterReq.md#tobinary)
- [toJSON](GeneralStreamsServiceFilterReq.md#tojson)
- [toJson](GeneralStreamsServiceFilterReq.md#tojson-1)
- [toJsonString](GeneralStreamsServiceFilterReq.md#tojsonstring)
- [equals](GeneralStreamsServiceFilterReq.md#equals-1)
- [fromBinary](GeneralStreamsServiceFilterReq.md#frombinary-1)
- [fromJson](GeneralStreamsServiceFilterReq.md#fromjson-1)
- [fromJsonString](GeneralStreamsServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new GeneralStreamsServiceFilterReq**(`data?`): [`GeneralStreamsServiceFilterReq`](GeneralStreamsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`GeneralStreamsServiceFilterReq`](GeneralStreamsServiceFilterReq.md)\> |

#### Returns

[`GeneralStreamsServiceFilterReq`](GeneralStreamsServiceFilterReq.md)

#### Overrides

Message\&lt;GeneralStreamsServiceFilterReq\&gt;.constructor

#### Defined in

src/generalstreams.scailo_pb.ts:851

## Properties

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: uint64 completed_on_end = 16;

#### Defined in

src/generalstreams.scailo_pb.ts:828

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: uint64 completed_on_start = 15;

#### Defined in

src/generalstreams.scailo_pb.ts:821

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

src/generalstreams.scailo_pb.ts:751

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

src/generalstreams.scailo_pb.ts:786

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

src/generalstreams.scailo_pb.ts:779

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

src/generalstreams.scailo_pb.ts:807

___

### internalRef

• **internalRef**: `string` = `""`

Stores the internal reference that is automatically generated

**`Generated`**

from field: string internal_ref = 18;

#### Defined in

src/generalstreams.scailo_pb.ts:835

___

### internalSubscriberUserId

• **internalSubscriberUserId**: `bigint` = `protoInt64.zero`

Filter by the associated internal subscriber user ID

**`Generated`**

from field: uint64 internal_subscriber_user_id = 60;

#### Defined in

src/generalstreams.scailo_pb.ts:849

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/generalstreams.scailo_pb.ts:744

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

src/generalstreams.scailo_pb.ts:800

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

src/generalstreams.scailo_pb.ts:793

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

src/generalstreams.scailo_pb.ts:758

___

### sortKey

• **sortKey**: [`GENERAL_STREAM_SORT_KEY`](../enums/GENERAL_STREAM_SORT_KEY.md) = `GENERAL_STREAM_SORT_KEY.GENERAL_STREAM_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.GENERAL_STREAM_SORT_KEY sort_key = 5;

#### Defined in

src/generalstreams.scailo_pb.ts:772

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

src/generalstreams.scailo_pb.ts:765

___

### status

• **status**: [`GENERAL_STREAM_LIFECYCLE`](../enums/GENERAL_STREAM_LIFECYCLE.md) = `GENERAL_STREAM_LIFECYCLE.GENERAL_STREAM_LIFECYCLE_ANY_UNSPECIFIED`

The status of this general stream

**`Generated`**

from field: Scailo.GENERAL_STREAM_LIFECYCLE status = 10;

#### Defined in

src/generalstreams.scailo_pb.ts:814

___

### title

• **title**: `string` = `""`

The title of the general stream

**`Generated`**

from field: string title = 30;

#### Defined in

src/generalstreams.scailo_pb.ts:842

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/generalstreams.scailo_pb.ts:858

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/generalstreams.scailo_pb.ts:856

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.GeneralStreamsServiceFilterReq"``

#### Defined in

src/generalstreams.scailo_pb.ts:857

## Methods

### clone

▸ **clone**(): [`GeneralStreamsServiceFilterReq`](GeneralStreamsServiceFilterReq.md)

Create a deep copy.

#### Returns

[`GeneralStreamsServiceFilterReq`](GeneralStreamsServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`GeneralStreamsServiceFilterReq`](GeneralStreamsServiceFilterReq.md) \| `PlainMessage`\<[`GeneralStreamsServiceFilterReq`](GeneralStreamsServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`GeneralStreamsServiceFilterReq`](GeneralStreamsServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`GeneralStreamsServiceFilterReq`](GeneralStreamsServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`GeneralStreamsServiceFilterReq`](GeneralStreamsServiceFilterReq.md) \| `PlainMessage`\<[`GeneralStreamsServiceFilterReq`](GeneralStreamsServiceFilterReq.md)\> |
| `b` | `undefined` \| [`GeneralStreamsServiceFilterReq`](GeneralStreamsServiceFilterReq.md) \| `PlainMessage`\<[`GeneralStreamsServiceFilterReq`](GeneralStreamsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/generalstreams.scailo_pb.ts:889

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`GeneralStreamsServiceFilterReq`](GeneralStreamsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`GeneralStreamsServiceFilterReq`](GeneralStreamsServiceFilterReq.md)

#### Defined in

src/generalstreams.scailo_pb.ts:877

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`GeneralStreamsServiceFilterReq`](GeneralStreamsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GeneralStreamsServiceFilterReq`](GeneralStreamsServiceFilterReq.md)

#### Defined in

src/generalstreams.scailo_pb.ts:881

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`GeneralStreamsServiceFilterReq`](GeneralStreamsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GeneralStreamsServiceFilterReq`](GeneralStreamsServiceFilterReq.md)

#### Defined in

src/generalstreams.scailo_pb.ts:885
