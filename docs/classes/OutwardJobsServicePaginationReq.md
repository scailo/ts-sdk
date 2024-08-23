[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / OutwardJobsServicePaginationReq

# Class: OutwardJobsServicePaginationReq

Describes a pagination request to retrieve records

**`Generated`**

from message Scailo.OutwardJobsServicePaginationReq

## Hierarchy

- `Message`\<[`OutwardJobsServicePaginationReq`](OutwardJobsServicePaginationReq.md)\>

  ↳ **`OutwardJobsServicePaginationReq`**

## Table of contents

### Constructors

- [constructor](OutwardJobsServicePaginationReq.md#constructor)

### Properties

- [count](OutwardJobsServicePaginationReq.md#count)
- [isActive](OutwardJobsServicePaginationReq.md#isactive)
- [offset](OutwardJobsServicePaginationReq.md#offset)
- [sortKey](OutwardJobsServicePaginationReq.md#sortkey)
- [sortOrder](OutwardJobsServicePaginationReq.md#sortorder)
- [status](OutwardJobsServicePaginationReq.md#status)
- [fields](OutwardJobsServicePaginationReq.md#fields)
- [runtime](OutwardJobsServicePaginationReq.md#runtime)
- [typeName](OutwardJobsServicePaginationReq.md#typename)

### Methods

- [clone](OutwardJobsServicePaginationReq.md#clone)
- [equals](OutwardJobsServicePaginationReq.md#equals)
- [fromBinary](OutwardJobsServicePaginationReq.md#frombinary)
- [fromJson](OutwardJobsServicePaginationReq.md#fromjson)
- [fromJsonString](OutwardJobsServicePaginationReq.md#fromjsonstring)
- [getType](OutwardJobsServicePaginationReq.md#gettype)
- [toBinary](OutwardJobsServicePaginationReq.md#tobinary)
- [toJSON](OutwardJobsServicePaginationReq.md#tojson)
- [toJson](OutwardJobsServicePaginationReq.md#tojson-1)
- [toJsonString](OutwardJobsServicePaginationReq.md#tojsonstring)
- [equals](OutwardJobsServicePaginationReq.md#equals-1)
- [fromBinary](OutwardJobsServicePaginationReq.md#frombinary-1)
- [fromJson](OutwardJobsServicePaginationReq.md#fromjson-1)
- [fromJsonString](OutwardJobsServicePaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new OutwardJobsServicePaginationReq**(`data?`): [`OutwardJobsServicePaginationReq`](OutwardJobsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`OutwardJobsServicePaginationReq`](OutwardJobsServicePaginationReq.md)\> |

#### Returns

[`OutwardJobsServicePaginationReq`](OutwardJobsServicePaginationReq.md)

#### Overrides

Message\&lt;OutwardJobsServicePaginationReq\&gt;.constructor

#### Defined in

src/outward_jobs.scailo_pb.ts:1365

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response

**`Generated`**

from field: int64 count = 2;

#### Defined in

src/outward_jobs.scailo_pb.ts:1335

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/outward_jobs.scailo_pb.ts:1328

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

src/outward_jobs.scailo_pb.ts:1342

___

### sortKey

• **sortKey**: [`OUTWARD_JOB_SORT_KEY`](../enums/OUTWARD_JOB_SORT_KEY.md) = `OUTWARD_JOB_SORT_KEY.OUTWARD_JOB_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.OUTWARD_JOB_SORT_KEY sort_key = 5;

#### Defined in

src/outward_jobs.scailo_pb.ts:1356

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

src/outward_jobs.scailo_pb.ts:1349

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this outward job

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 6;

#### Defined in

src/outward_jobs.scailo_pb.ts:1363

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/outward_jobs.scailo_pb.ts:1372

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/outward_jobs.scailo_pb.ts:1370

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.OutwardJobsServicePaginationReq"``

#### Defined in

src/outward_jobs.scailo_pb.ts:1371

## Methods

### clone

▸ **clone**(): [`OutwardJobsServicePaginationReq`](OutwardJobsServicePaginationReq.md)

Create a deep copy.

#### Returns

[`OutwardJobsServicePaginationReq`](OutwardJobsServicePaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`OutwardJobsServicePaginationReq`](OutwardJobsServicePaginationReq.md) \| `PlainMessage`\<[`OutwardJobsServicePaginationReq`](OutwardJobsServicePaginationReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`OutwardJobsServicePaginationReq`](OutwardJobsServicePaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`OutwardJobsServicePaginationReq`](OutwardJobsServicePaginationReq.md)\>

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
| `a` | `undefined` \| [`OutwardJobsServicePaginationReq`](OutwardJobsServicePaginationReq.md) \| `PlainMessage`\<[`OutwardJobsServicePaginationReq`](OutwardJobsServicePaginationReq.md)\> |
| `b` | `undefined` \| [`OutwardJobsServicePaginationReq`](OutwardJobsServicePaginationReq.md) \| `PlainMessage`\<[`OutwardJobsServicePaginationReq`](OutwardJobsServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/outward_jobs.scailo_pb.ts:1393

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`OutwardJobsServicePaginationReq`](OutwardJobsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`OutwardJobsServicePaginationReq`](OutwardJobsServicePaginationReq.md)

#### Defined in

src/outward_jobs.scailo_pb.ts:1381

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`OutwardJobsServicePaginationReq`](OutwardJobsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobsServicePaginationReq`](OutwardJobsServicePaginationReq.md)

#### Defined in

src/outward_jobs.scailo_pb.ts:1385

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`OutwardJobsServicePaginationReq`](OutwardJobsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobsServicePaginationReq`](OutwardJobsServicePaginationReq.md)

#### Defined in

src/outward_jobs.scailo_pb.ts:1389
