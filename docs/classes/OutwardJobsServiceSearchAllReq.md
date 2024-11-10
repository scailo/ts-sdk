[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / OutwardJobsServiceSearchAllReq

# Class: OutwardJobsServiceSearchAllReq

Describes the request payload for performing a generic search operation on records

**`Generated`**

from message Scailo.OutwardJobsServiceSearchAllReq

## Hierarchy

- `Message`\<[`OutwardJobsServiceSearchAllReq`](OutwardJobsServiceSearchAllReq.md)\>

  ↳ **`OutwardJobsServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](OutwardJobsServiceSearchAllReq.md#constructor)

### Properties

- [consigneeLocationId](OutwardJobsServiceSearchAllReq.md#consigneelocationid)
- [count](OutwardJobsServiceSearchAllReq.md#count)
- [entityUuid](OutwardJobsServiceSearchAllReq.md#entityuuid)
- [isActive](OutwardJobsServiceSearchAllReq.md#isactive)
- [offset](OutwardJobsServiceSearchAllReq.md#offset)
- [projectId](OutwardJobsServiceSearchAllReq.md#projectid)
- [searchKey](OutwardJobsServiceSearchAllReq.md#searchkey)
- [sortKey](OutwardJobsServiceSearchAllReq.md#sortkey)
- [sortOrder](OutwardJobsServiceSearchAllReq.md#sortorder)
- [status](OutwardJobsServiceSearchAllReq.md#status)
- [vendorId](OutwardJobsServiceSearchAllReq.md#vendorid)
- [fields](OutwardJobsServiceSearchAllReq.md#fields)
- [runtime](OutwardJobsServiceSearchAllReq.md#runtime)
- [typeName](OutwardJobsServiceSearchAllReq.md#typename)

### Methods

- [clone](OutwardJobsServiceSearchAllReq.md#clone)
- [equals](OutwardJobsServiceSearchAllReq.md#equals)
- [fromBinary](OutwardJobsServiceSearchAllReq.md#frombinary)
- [fromJson](OutwardJobsServiceSearchAllReq.md#fromjson)
- [fromJsonString](OutwardJobsServiceSearchAllReq.md#fromjsonstring)
- [getType](OutwardJobsServiceSearchAllReq.md#gettype)
- [toBinary](OutwardJobsServiceSearchAllReq.md#tobinary)
- [toJSON](OutwardJobsServiceSearchAllReq.md#tojson)
- [toJson](OutwardJobsServiceSearchAllReq.md#tojson-1)
- [toJsonString](OutwardJobsServiceSearchAllReq.md#tojsonstring)
- [equals](OutwardJobsServiceSearchAllReq.md#equals-1)
- [fromBinary](OutwardJobsServiceSearchAllReq.md#frombinary-1)
- [fromJson](OutwardJobsServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](OutwardJobsServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new OutwardJobsServiceSearchAllReq**(`data?`): [`OutwardJobsServiceSearchAllReq`](OutwardJobsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`OutwardJobsServiceSearchAllReq`](OutwardJobsServiceSearchAllReq.md)\> |

#### Returns

[`OutwardJobsServiceSearchAllReq`](OutwardJobsServiceSearchAllReq.md)

#### Overrides

Message\&lt;OutwardJobsServiceSearchAllReq\&gt;.constructor

#### Defined in

src/outward_jobs.scailo_pb.ts:2069

## Properties

### consigneeLocationId

• **consigneeLocationId**: `bigint` = `protoInt64.zero`

The ID of the location

**`Generated`**

from field: uint64 consignee_location_id = 20;

#### Defined in

src/outward_jobs.scailo_pb.ts:2053

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

src/outward_jobs.scailo_pb.ts:2004

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

src/outward_jobs.scailo_pb.ts:2032

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/outward_jobs.scailo_pb.ts:1997

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

src/outward_jobs.scailo_pb.ts:2011

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The optional associated ID of the project

**`Generated`**

from field: uint64 project_id = 26;

#### Defined in

src/outward_jobs.scailo_pb.ts:2067

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 11;

#### Defined in

src/outward_jobs.scailo_pb.ts:2046

___

### sortKey

• **sortKey**: [`OUTWARD_JOB_SORT_KEY`](../enums/OUTWARD_JOB_SORT_KEY.md) = `OUTWARD_JOB_SORT_KEY.OUTWARD_JOB_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.OUTWARD_JOB_SORT_KEY sort_key = 5;

#### Defined in

src/outward_jobs.scailo_pb.ts:2025

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

src/outward_jobs.scailo_pb.ts:2018

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

Limit the search space to the given status

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

src/outward_jobs.scailo_pb.ts:2039

___

### vendorId

• **vendorId**: `bigint` = `protoInt64.zero`

The ID of the vendor

**`Generated`**

from field: uint64 vendor_id = 21;

#### Defined in

src/outward_jobs.scailo_pb.ts:2060

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/outward_jobs.scailo_pb.ts:2076

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/outward_jobs.scailo_pb.ts:2074

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.OutwardJobsServiceSearchAllReq"``

#### Defined in

src/outward_jobs.scailo_pb.ts:2075

## Methods

### clone

▸ **clone**(): [`OutwardJobsServiceSearchAllReq`](OutwardJobsServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`OutwardJobsServiceSearchAllReq`](OutwardJobsServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`OutwardJobsServiceSearchAllReq`](OutwardJobsServiceSearchAllReq.md) \| `PlainMessage`\<[`OutwardJobsServiceSearchAllReq`](OutwardJobsServiceSearchAllReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`OutwardJobsServiceSearchAllReq`](OutwardJobsServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`OutwardJobsServiceSearchAllReq`](OutwardJobsServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`OutwardJobsServiceSearchAllReq`](OutwardJobsServiceSearchAllReq.md) \| `PlainMessage`\<[`OutwardJobsServiceSearchAllReq`](OutwardJobsServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`OutwardJobsServiceSearchAllReq`](OutwardJobsServiceSearchAllReq.md) \| `PlainMessage`\<[`OutwardJobsServiceSearchAllReq`](OutwardJobsServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/outward_jobs.scailo_pb.ts:2102

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`OutwardJobsServiceSearchAllReq`](OutwardJobsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`OutwardJobsServiceSearchAllReq`](OutwardJobsServiceSearchAllReq.md)

#### Defined in

src/outward_jobs.scailo_pb.ts:2090

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`OutwardJobsServiceSearchAllReq`](OutwardJobsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobsServiceSearchAllReq`](OutwardJobsServiceSearchAllReq.md)

#### Defined in

src/outward_jobs.scailo_pb.ts:2094

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`OutwardJobsServiceSearchAllReq`](OutwardJobsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobsServiceSearchAllReq`](OutwardJobsServiceSearchAllReq.md)

#### Defined in

src/outward_jobs.scailo_pb.ts:2098
