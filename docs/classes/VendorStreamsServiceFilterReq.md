[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / VendorStreamsServiceFilterReq

# Class: VendorStreamsServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Scailo.VendorStreamsServiceFilterReq

## Hierarchy

- `Message`\<[`VendorStreamsServiceFilterReq`](VendorStreamsServiceFilterReq.md)\>

  ↳ **`VendorStreamsServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](VendorStreamsServiceFilterReq.md#constructor)

### Properties

- [completedOnEnd](VendorStreamsServiceFilterReq.md#completedonend)
- [completedOnStart](VendorStreamsServiceFilterReq.md#completedonstart)
- [count](VendorStreamsServiceFilterReq.md#count)
- [creationTimestampEnd](VendorStreamsServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](VendorStreamsServiceFilterReq.md#creationtimestampstart)
- [entityUuid](VendorStreamsServiceFilterReq.md#entityuuid)
- [internalRef](VendorStreamsServiceFilterReq.md#internalref)
- [internalSubscriberUserId](VendorStreamsServiceFilterReq.md#internalsubscriberuserid)
- [isActive](VendorStreamsServiceFilterReq.md#isactive)
- [modificationTimestampEnd](VendorStreamsServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](VendorStreamsServiceFilterReq.md#modificationtimestampstart)
- [offset](VendorStreamsServiceFilterReq.md#offset)
- [refFrom](VendorStreamsServiceFilterReq.md#reffrom)
- [refId](VendorStreamsServiceFilterReq.md#refid)
- [sortKey](VendorStreamsServiceFilterReq.md#sortkey)
- [sortOrder](VendorStreamsServiceFilterReq.md#sortorder)
- [status](VendorStreamsServiceFilterReq.md#status)
- [title](VendorStreamsServiceFilterReq.md#title)
- [vendorId](VendorStreamsServiceFilterReq.md#vendorid)
- [vendorSubscriberUserId](VendorStreamsServiceFilterReq.md#vendorsubscriberuserid)
- [fields](VendorStreamsServiceFilterReq.md#fields)
- [runtime](VendorStreamsServiceFilterReq.md#runtime)
- [typeName](VendorStreamsServiceFilterReq.md#typename)

### Methods

- [clone](VendorStreamsServiceFilterReq.md#clone)
- [equals](VendorStreamsServiceFilterReq.md#equals)
- [fromBinary](VendorStreamsServiceFilterReq.md#frombinary)
- [fromJson](VendorStreamsServiceFilterReq.md#fromjson)
- [fromJsonString](VendorStreamsServiceFilterReq.md#fromjsonstring)
- [getType](VendorStreamsServiceFilterReq.md#gettype)
- [toBinary](VendorStreamsServiceFilterReq.md#tobinary)
- [toJSON](VendorStreamsServiceFilterReq.md#tojson)
- [toJson](VendorStreamsServiceFilterReq.md#tojson-1)
- [toJsonString](VendorStreamsServiceFilterReq.md#tojsonstring)
- [equals](VendorStreamsServiceFilterReq.md#equals-1)
- [fromBinary](VendorStreamsServiceFilterReq.md#frombinary-1)
- [fromJson](VendorStreamsServiceFilterReq.md#fromjson-1)
- [fromJsonString](VendorStreamsServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new VendorStreamsServiceFilterReq**(`data?`): [`VendorStreamsServiceFilterReq`](VendorStreamsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`VendorStreamsServiceFilterReq`](VendorStreamsServiceFilterReq.md)\> |

#### Returns

[`VendorStreamsServiceFilterReq`](VendorStreamsServiceFilterReq.md)

#### Overrides

Message\&lt;VendorStreamsServiceFilterReq\&gt;.constructor

#### Defined in

src/vendorstreams.scailo_pb.ts:1013

## Properties

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: uint64 completed_on_end = 16;

#### Defined in

src/vendorstreams.scailo_pb.ts:959

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: uint64 completed_on_start = 15;

#### Defined in

src/vendorstreams.scailo_pb.ts:952

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

src/vendorstreams.scailo_pb.ts:882

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

src/vendorstreams.scailo_pb.ts:917

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

src/vendorstreams.scailo_pb.ts:910

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

src/vendorstreams.scailo_pb.ts:938

___

### internalRef

• **internalRef**: `string` = `""`

Stores the internal reference that is automatically generated

**`Generated`**

from field: string internal_ref = 18;

#### Defined in

src/vendorstreams.scailo_pb.ts:966

___

### internalSubscriberUserId

• **internalSubscriberUserId**: `bigint` = `protoInt64.zero`

Filter by the associated internal subscriber user ID

**`Generated`**

from field: uint64 internal_subscriber_user_id = 60;

#### Defined in

src/vendorstreams.scailo_pb.ts:1004

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/vendorstreams.scailo_pb.ts:875

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

src/vendorstreams.scailo_pb.ts:931

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

src/vendorstreams.scailo_pb.ts:924

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

src/vendorstreams.scailo_pb.ts:889

___

### refFrom

• **refFrom**: [`VENDOR_STREAM_REF_FROM`](../enums/VENDOR_STREAM_REF_FROM.md) = `VENDOR_STREAM_REF_FROM.VENDOR_STREAM_REF_FROM_ANY_UNSPECIFIED`

Filter by the associated reference

**`Generated`**

from field: Scailo.VENDOR_STREAM_REF_FROM ref_from = 41;

#### Defined in

src/vendorstreams.scailo_pb.ts:988

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

Filter by the associated reference ID

------------------------------------------------

**`Generated`**

from field: uint64 ref_id = 42;

#### Defined in

src/vendorstreams.scailo_pb.ts:997

___

### sortKey

• **sortKey**: [`VENDOR_STREAM_SORT_KEY`](../enums/VENDOR_STREAM_SORT_KEY.md) = `VENDOR_STREAM_SORT_KEY.VENDOR_STREAM_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.VENDOR_STREAM_SORT_KEY sort_key = 5;

#### Defined in

src/vendorstreams.scailo_pb.ts:903

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

src/vendorstreams.scailo_pb.ts:896

___

### status

• **status**: [`VENDOR_STREAM_LIFECYCLE`](../enums/VENDOR_STREAM_LIFECYCLE.md) = `VENDOR_STREAM_LIFECYCLE.VENDOR_STREAM_LIFECYCLE_ANY_UNSPECIFIED`

The status of this vendor stream

**`Generated`**

from field: Scailo.VENDOR_STREAM_LIFECYCLE status = 10;

#### Defined in

src/vendorstreams.scailo_pb.ts:945

___

### title

• **title**: `string` = `""`

The title of the vendor stream

**`Generated`**

from field: string title = 30;

#### Defined in

src/vendorstreams.scailo_pb.ts:973

___

### vendorId

• **vendorId**: `bigint` = `protoInt64.zero`

------------------------------------------------
Filter by the associated vendor ID

**`Generated`**

from field: uint64 vendor_id = 40;

#### Defined in

src/vendorstreams.scailo_pb.ts:981

___

### vendorSubscriberUserId

• **vendorSubscriberUserId**: `bigint` = `protoInt64.zero`

Filter by the associated vendor subscriber user ID

**`Generated`**

from field: uint64 vendor_subscriber_user_id = 61;

#### Defined in

src/vendorstreams.scailo_pb.ts:1011

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/vendorstreams.scailo_pb.ts:1020

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/vendorstreams.scailo_pb.ts:1018

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.VendorStreamsServiceFilterReq"``

#### Defined in

src/vendorstreams.scailo_pb.ts:1019

## Methods

### clone

▸ **clone**(): [`VendorStreamsServiceFilterReq`](VendorStreamsServiceFilterReq.md)

Create a deep copy.

#### Returns

[`VendorStreamsServiceFilterReq`](VendorStreamsServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`VendorStreamsServiceFilterReq`](VendorStreamsServiceFilterReq.md) \| `PlainMessage`\<[`VendorStreamsServiceFilterReq`](VendorStreamsServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`VendorStreamsServiceFilterReq`](VendorStreamsServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`VendorStreamsServiceFilterReq`](VendorStreamsServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`VendorStreamsServiceFilterReq`](VendorStreamsServiceFilterReq.md) \| `PlainMessage`\<[`VendorStreamsServiceFilterReq`](VendorStreamsServiceFilterReq.md)\> |
| `b` | `undefined` \| [`VendorStreamsServiceFilterReq`](VendorStreamsServiceFilterReq.md) \| `PlainMessage`\<[`VendorStreamsServiceFilterReq`](VendorStreamsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/vendorstreams.scailo_pb.ts:1055

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`VendorStreamsServiceFilterReq`](VendorStreamsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`VendorStreamsServiceFilterReq`](VendorStreamsServiceFilterReq.md)

#### Defined in

src/vendorstreams.scailo_pb.ts:1043

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`VendorStreamsServiceFilterReq`](VendorStreamsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorStreamsServiceFilterReq`](VendorStreamsServiceFilterReq.md)

#### Defined in

src/vendorstreams.scailo_pb.ts:1047

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`VendorStreamsServiceFilterReq`](VendorStreamsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorStreamsServiceFilterReq`](VendorStreamsServiceFilterReq.md)

#### Defined in

src/vendorstreams.scailo_pb.ts:1051
