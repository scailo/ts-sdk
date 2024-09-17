[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / OutwardJobsServiceFilterReq

# Class: OutwardJobsServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Scailo.OutwardJobsServiceFilterReq

## Hierarchy

- `Message`\<[`OutwardJobsServiceFilterReq`](OutwardJobsServiceFilterReq.md)\>

  ↳ **`OutwardJobsServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](OutwardJobsServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](OutwardJobsServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](OutwardJobsServiceFilterReq.md#approvedonend)
- [approvedOnStart](OutwardJobsServiceFilterReq.md#approvedonstart)
- [approverRoleId](OutwardJobsServiceFilterReq.md#approverroleid)
- [completedOnEnd](OutwardJobsServiceFilterReq.md#completedonend)
- [completedOnStart](OutwardJobsServiceFilterReq.md#completedonstart)
- [consigneeLocationId](OutwardJobsServiceFilterReq.md#consigneelocationid)
- [count](OutwardJobsServiceFilterReq.md#count)
- [creationTimestampEnd](OutwardJobsServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](OutwardJobsServiceFilterReq.md#creationtimestampstart)
- [deliveryDateEnd](OutwardJobsServiceFilterReq.md#deliverydateend)
- [deliveryDateExact](OutwardJobsServiceFilterReq.md#deliverydateexact)
- [deliveryDateStart](OutwardJobsServiceFilterReq.md#deliverydatestart)
- [entityUuid](OutwardJobsServiceFilterReq.md#entityuuid)
- [finalRefNumber](OutwardJobsServiceFilterReq.md#finalrefnumber)
- [inwardFamilyId](OutwardJobsServiceFilterReq.md#inwardfamilyid)
- [isActive](OutwardJobsServiceFilterReq.md#isactive)
- [modificationTimestampEnd](OutwardJobsServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](OutwardJobsServiceFilterReq.md#modificationtimestampstart)
- [offset](OutwardJobsServiceFilterReq.md#offset)
- [projectId](OutwardJobsServiceFilterReq.md#projectid)
- [referenceId](OutwardJobsServiceFilterReq.md#referenceid)
- [sortKey](OutwardJobsServiceFilterReq.md#sortkey)
- [sortOrder](OutwardJobsServiceFilterReq.md#sortorder)
- [status](OutwardJobsServiceFilterReq.md#status)
- [vendorId](OutwardJobsServiceFilterReq.md#vendorid)
- [fields](OutwardJobsServiceFilterReq.md#fields)
- [runtime](OutwardJobsServiceFilterReq.md#runtime)
- [typeName](OutwardJobsServiceFilterReq.md#typename)

### Methods

- [clone](OutwardJobsServiceFilterReq.md#clone)
- [equals](OutwardJobsServiceFilterReq.md#equals)
- [fromBinary](OutwardJobsServiceFilterReq.md#frombinary)
- [fromJson](OutwardJobsServiceFilterReq.md#fromjson)
- [fromJsonString](OutwardJobsServiceFilterReq.md#fromjsonstring)
- [getType](OutwardJobsServiceFilterReq.md#gettype)
- [toBinary](OutwardJobsServiceFilterReq.md#tobinary)
- [toJSON](OutwardJobsServiceFilterReq.md#tojson)
- [toJson](OutwardJobsServiceFilterReq.md#tojson-1)
- [toJsonString](OutwardJobsServiceFilterReq.md#tojsonstring)
- [equals](OutwardJobsServiceFilterReq.md#equals-1)
- [fromBinary](OutwardJobsServiceFilterReq.md#frombinary-1)
- [fromJson](OutwardJobsServiceFilterReq.md#fromjson-1)
- [fromJsonString](OutwardJobsServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new OutwardJobsServiceFilterReq**(`data?`): [`OutwardJobsServiceFilterReq`](OutwardJobsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`OutwardJobsServiceFilterReq`](OutwardJobsServiceFilterReq.md)\> |

#### Returns

[`OutwardJobsServiceFilterReq`](OutwardJobsServiceFilterReq.md)

#### Overrides

Message\&lt;OutwardJobsServiceFilterReq\&gt;.constructor

#### Defined in

src/outward_jobs.scailo_pb.ts:1653

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 13;

#### Defined in

src/outward_jobs.scailo_pb.ts:1567

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 12;

#### Defined in

src/outward_jobs.scailo_pb.ts:1560

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 11;

#### Defined in

src/outward_jobs.scailo_pb.ts:1553

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 14;

#### Defined in

src/outward_jobs.scailo_pb.ts:1574

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: uint64 completed_on_end = 16;

#### Defined in

src/outward_jobs.scailo_pb.ts:1588

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: uint64 completed_on_start = 15;

#### Defined in

src/outward_jobs.scailo_pb.ts:1581

___

### consigneeLocationId

• **consigneeLocationId**: `bigint` = `protoInt64.zero`

The ID of the location

**`Generated`**

from field: uint64 consignee_location_id = 22;

#### Defined in

src/outward_jobs.scailo_pb.ts:1630

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

src/outward_jobs.scailo_pb.ts:1483

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

src/outward_jobs.scailo_pb.ts:1518

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

src/outward_jobs.scailo_pb.ts:1511

___

### deliveryDateEnd

• **deliveryDateEnd**: `string` = `""`

The end delivery date of any item in the outward job

**`Generated`**

from field: string delivery_date_end = 19;

#### Defined in

src/outward_jobs.scailo_pb.ts:1609

___

### deliveryDateExact

• **deliveryDateExact**: `string` = `""`

The exact delivery date of any item in the outward job

**`Generated`**

from field: string delivery_date_exact = 17;

#### Defined in

src/outward_jobs.scailo_pb.ts:1595

___

### deliveryDateStart

• **deliveryDateStart**: `string` = `""`

The start delivery date of any item in the outward job

**`Generated`**

from field: string delivery_date_start = 18;

#### Defined in

src/outward_jobs.scailo_pb.ts:1602

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

src/outward_jobs.scailo_pb.ts:1539

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 21;

#### Defined in

src/outward_jobs.scailo_pb.ts:1623

___

### inwardFamilyId

• **inwardFamilyId**: `bigint` = `protoInt64.zero`

The ID of the inward family

**`Generated`**

from field: uint64 inward_family_id = 30;

#### Defined in

src/outward_jobs.scailo_pb.ts:1651

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/outward_jobs.scailo_pb.ts:1476

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

src/outward_jobs.scailo_pb.ts:1532

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

src/outward_jobs.scailo_pb.ts:1525

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

src/outward_jobs.scailo_pb.ts:1490

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The optional associated ID of the project

**`Generated`**

from field: uint64 project_id = 26;

#### Defined in

src/outward_jobs.scailo_pb.ts:1644

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the outward job

**`Generated`**

from field: string reference_id = 20;

#### Defined in

src/outward_jobs.scailo_pb.ts:1616

___

### sortKey

• **sortKey**: [`OUTWARD_JOB_SORT_KEY`](../enums/OUTWARD_JOB_SORT_KEY.md) = `OUTWARD_JOB_SORT_KEY.OUTWARD_JOB_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.OUTWARD_JOB_SORT_KEY sort_key = 5;

#### Defined in

src/outward_jobs.scailo_pb.ts:1504

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

src/outward_jobs.scailo_pb.ts:1497

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this outward job

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

src/outward_jobs.scailo_pb.ts:1546

___

### vendorId

• **vendorId**: `bigint` = `protoInt64.zero`

The ID of the vendor

**`Generated`**

from field: uint64 vendor_id = 23;

#### Defined in

src/outward_jobs.scailo_pb.ts:1637

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/outward_jobs.scailo_pb.ts:1660

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/outward_jobs.scailo_pb.ts:1658

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.OutwardJobsServiceFilterReq"``

#### Defined in

src/outward_jobs.scailo_pb.ts:1659

## Methods

### clone

▸ **clone**(): [`OutwardJobsServiceFilterReq`](OutwardJobsServiceFilterReq.md)

Create a deep copy.

#### Returns

[`OutwardJobsServiceFilterReq`](OutwardJobsServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`OutwardJobsServiceFilterReq`](OutwardJobsServiceFilterReq.md) \| `PlainMessage`\<[`OutwardJobsServiceFilterReq`](OutwardJobsServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`OutwardJobsServiceFilterReq`](OutwardJobsServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`OutwardJobsServiceFilterReq`](OutwardJobsServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`OutwardJobsServiceFilterReq`](OutwardJobsServiceFilterReq.md) \| `PlainMessage`\<[`OutwardJobsServiceFilterReq`](OutwardJobsServiceFilterReq.md)\> |
| `b` | `undefined` \| [`OutwardJobsServiceFilterReq`](OutwardJobsServiceFilterReq.md) \| `PlainMessage`\<[`OutwardJobsServiceFilterReq`](OutwardJobsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/outward_jobs.scailo_pb.ts:1701

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`OutwardJobsServiceFilterReq`](OutwardJobsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`OutwardJobsServiceFilterReq`](OutwardJobsServiceFilterReq.md)

#### Defined in

src/outward_jobs.scailo_pb.ts:1689

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`OutwardJobsServiceFilterReq`](OutwardJobsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobsServiceFilterReq`](OutwardJobsServiceFilterReq.md)

#### Defined in

src/outward_jobs.scailo_pb.ts:1693

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`OutwardJobsServiceFilterReq`](OutwardJobsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobsServiceFilterReq`](OutwardJobsServiceFilterReq.md)

#### Defined in

src/outward_jobs.scailo_pb.ts:1697
