[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / OutwardJobOutwardItemsSearchRequest

# Class: OutwardJobOutwardItemsSearchRequest

Describes the request payload to retrieve approved or unapproved items.

**`Generated`**

from message Scailo.OutwardJobOutwardItemsSearchRequest

## Hierarchy

- `Message`\<[`OutwardJobOutwardItemsSearchRequest`](OutwardJobOutwardItemsSearchRequest.md)\>

  ↳ **`OutwardJobOutwardItemsSearchRequest`**

## Table of contents

### Constructors

- [constructor](OutwardJobOutwardItemsSearchRequest.md#constructor)

### Properties

- [approvedByUserId](OutwardJobOutwardItemsSearchRequest.md#approvedbyuserid)
- [approvedOnEnd](OutwardJobOutwardItemsSearchRequest.md#approvedonend)
- [approvedOnStart](OutwardJobOutwardItemsSearchRequest.md#approvedonstart)
- [approverRoleId](OutwardJobOutwardItemsSearchRequest.md#approverroleid)
- [count](OutwardJobOutwardItemsSearchRequest.md#count)
- [entityUuid](OutwardJobOutwardItemsSearchRequest.md#entityuuid)
- [familyId](OutwardJobOutwardItemsSearchRequest.md#familyid)
- [isActive](OutwardJobOutwardItemsSearchRequest.md#isactive)
- [itemHash](OutwardJobOutwardItemsSearchRequest.md#itemhash)
- [offset](OutwardJobOutwardItemsSearchRequest.md#offset)
- [outwardJobId](OutwardJobOutwardItemsSearchRequest.md#outwardjobid)
- [searchKey](OutwardJobOutwardItemsSearchRequest.md#searchkey)
- [sortKey](OutwardJobOutwardItemsSearchRequest.md#sortkey)
- [sortOrder](OutwardJobOutwardItemsSearchRequest.md#sortorder)
- [status](OutwardJobOutwardItemsSearchRequest.md#status)
- [vendorId](OutwardJobOutwardItemsSearchRequest.md#vendorid)
- [fields](OutwardJobOutwardItemsSearchRequest.md#fields)
- [runtime](OutwardJobOutwardItemsSearchRequest.md#runtime)
- [typeName](OutwardJobOutwardItemsSearchRequest.md#typename)

### Methods

- [clone](OutwardJobOutwardItemsSearchRequest.md#clone)
- [equals](OutwardJobOutwardItemsSearchRequest.md#equals)
- [fromBinary](OutwardJobOutwardItemsSearchRequest.md#frombinary)
- [fromJson](OutwardJobOutwardItemsSearchRequest.md#fromjson)
- [fromJsonString](OutwardJobOutwardItemsSearchRequest.md#fromjsonstring)
- [getType](OutwardJobOutwardItemsSearchRequest.md#gettype)
- [toBinary](OutwardJobOutwardItemsSearchRequest.md#tobinary)
- [toJSON](OutwardJobOutwardItemsSearchRequest.md#tojson)
- [toJson](OutwardJobOutwardItemsSearchRequest.md#tojson-1)
- [toJsonString](OutwardJobOutwardItemsSearchRequest.md#tojsonstring)
- [equals](OutwardJobOutwardItemsSearchRequest.md#equals-1)
- [fromBinary](OutwardJobOutwardItemsSearchRequest.md#frombinary-1)
- [fromJson](OutwardJobOutwardItemsSearchRequest.md#fromjson-1)
- [fromJsonString](OutwardJobOutwardItemsSearchRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new OutwardJobOutwardItemsSearchRequest**(`data?`): [`OutwardJobOutwardItemsSearchRequest`](OutwardJobOutwardItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`OutwardJobOutwardItemsSearchRequest`](OutwardJobOutwardItemsSearchRequest.md)\> |

#### Returns

[`OutwardJobOutwardItemsSearchRequest`](OutwardJobOutwardItemsSearchRequest.md)

#### Overrides

Message\&lt;OutwardJobOutwardItemsSearchRequest\&gt;.constructor

#### Defined in

src/outward_jobs.scailo_pb.ts:3049

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 12;

#### Defined in

src/outward_jobs.scailo_pb.ts:3001

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 11;

#### Defined in

src/outward_jobs.scailo_pb.ts:2994

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 10;

#### Defined in

src/outward_jobs.scailo_pb.ts:2987

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 13;

#### Defined in

src/outward_jobs.scailo_pb.ts:3008

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

src/outward_jobs.scailo_pb.ts:2945

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

src/outward_jobs.scailo_pb.ts:2973

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family

**`Generated`**

from field: uint64 family_id = 21;

#### Defined in

src/outward_jobs.scailo_pb.ts:3022

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/outward_jobs.scailo_pb.ts:2938

___

### itemHash

• **itemHash**: `string` = `""`

The item hash of the family

**`Generated`**

from field: string item_hash = 22;

#### Defined in

src/outward_jobs.scailo_pb.ts:3029

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

src/outward_jobs.scailo_pb.ts:2952

___

### outwardJobId

• **outwardJobId**: `bigint` = `protoInt64.zero`

The ID of the outward job

**`Generated`**

from field: uint64 outward_job_id = 20;

#### Defined in

src/outward_jobs.scailo_pb.ts:3015

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 40;

#### Defined in

src/outward_jobs.scailo_pb.ts:3036

___

### sortKey

• **sortKey**: [`OUTWARD_JOB_OUTWARD_ITEM_SORT_KEY`](../enums/OUTWARD_JOB_OUTWARD_ITEM_SORT_KEY.md) = `OUTWARD_JOB_OUTWARD_ITEM_SORT_KEY.OUTWARD_JOB_OUTWARD_ITEM_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.OUTWARD_JOB_OUTWARD_ITEM_SORT_KEY sort_key = 5;

#### Defined in

src/outward_jobs.scailo_pb.ts:2966

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

src/outward_jobs.scailo_pb.ts:2959

___

### status

• **status**: [`OUTWARD_JOB_OUTWARD_ITEM_STATUS`](../enums/OUTWARD_JOB_OUTWARD_ITEM_STATUS.md) = `OUTWARD_JOB_OUTWARD_ITEM_STATUS.OUTWARD_JOB_OUTWARD_ITEM_STATUS_ANY_UNSPECIFIED`

The status of the items

**`Generated`**

from field: Scailo.OUTWARD_JOB_OUTWARD_ITEM_STATUS status = 7;

#### Defined in

src/outward_jobs.scailo_pb.ts:2980

___

### vendorId

• **vendorId**: `bigint` = `protoInt64.zero`

------------------------------------------
Extra filters
The ID of the associated vendor

------------------------------------------

**`Generated`**

from field: uint64 vendor_id = 200;

#### Defined in

src/outward_jobs.scailo_pb.ts:3047

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/outward_jobs.scailo_pb.ts:3056

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/outward_jobs.scailo_pb.ts:3054

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.OutwardJobOutwardItemsSearchRequest"``

#### Defined in

src/outward_jobs.scailo_pb.ts:3055

## Methods

### clone

▸ **clone**(): [`OutwardJobOutwardItemsSearchRequest`](OutwardJobOutwardItemsSearchRequest.md)

Create a deep copy.

#### Returns

[`OutwardJobOutwardItemsSearchRequest`](OutwardJobOutwardItemsSearchRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`OutwardJobOutwardItemsSearchRequest`](OutwardJobOutwardItemsSearchRequest.md) \| `PlainMessage`\<[`OutwardJobOutwardItemsSearchRequest`](OutwardJobOutwardItemsSearchRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`OutwardJobOutwardItemsSearchRequest`](OutwardJobOutwardItemsSearchRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`OutwardJobOutwardItemsSearchRequest`](OutwardJobOutwardItemsSearchRequest.md)\>

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
| `a` | `undefined` \| [`OutwardJobOutwardItemsSearchRequest`](OutwardJobOutwardItemsSearchRequest.md) \| `PlainMessage`\<[`OutwardJobOutwardItemsSearchRequest`](OutwardJobOutwardItemsSearchRequest.md)\> |
| `b` | `undefined` \| [`OutwardJobOutwardItemsSearchRequest`](OutwardJobOutwardItemsSearchRequest.md) \| `PlainMessage`\<[`OutwardJobOutwardItemsSearchRequest`](OutwardJobOutwardItemsSearchRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/outward_jobs.scailo_pb.ts:3087

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`OutwardJobOutwardItemsSearchRequest`](OutwardJobOutwardItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`OutwardJobOutwardItemsSearchRequest`](OutwardJobOutwardItemsSearchRequest.md)

#### Defined in

src/outward_jobs.scailo_pb.ts:3075

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`OutwardJobOutwardItemsSearchRequest`](OutwardJobOutwardItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobOutwardItemsSearchRequest`](OutwardJobOutwardItemsSearchRequest.md)

#### Defined in

src/outward_jobs.scailo_pb.ts:3079

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`OutwardJobOutwardItemsSearchRequest`](OutwardJobOutwardItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobOutwardItemsSearchRequest`](OutwardJobOutwardItemsSearchRequest.md)

#### Defined in

src/outward_jobs.scailo_pb.ts:3083
