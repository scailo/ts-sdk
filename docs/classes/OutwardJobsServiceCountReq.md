[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / OutwardJobsServiceCountReq

# Class: OutwardJobsServiceCountReq

Describes the base request payload of a count search

**`Generated`**

from message Scailo.OutwardJobsServiceCountReq

## Hierarchy

- `Message`\<[`OutwardJobsServiceCountReq`](OutwardJobsServiceCountReq.md)\>

  ↳ **`OutwardJobsServiceCountReq`**

## Table of contents

### Constructors

- [constructor](OutwardJobsServiceCountReq.md#constructor)

### Properties

- [approvedByUserId](OutwardJobsServiceCountReq.md#approvedbyuserid)
- [approvedOnEnd](OutwardJobsServiceCountReq.md#approvedonend)
- [approvedOnStart](OutwardJobsServiceCountReq.md#approvedonstart)
- [approverRoleId](OutwardJobsServiceCountReq.md#approverroleid)
- [completedOnEnd](OutwardJobsServiceCountReq.md#completedonend)
- [completedOnStart](OutwardJobsServiceCountReq.md#completedonstart)
- [consigneeLocationId](OutwardJobsServiceCountReq.md#consigneelocationid)
- [creationTimestampEnd](OutwardJobsServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](OutwardJobsServiceCountReq.md#creationtimestampstart)
- [deliveryDateEnd](OutwardJobsServiceCountReq.md#deliverydateend)
- [deliveryDateExact](OutwardJobsServiceCountReq.md#deliverydateexact)
- [deliveryDateStart](OutwardJobsServiceCountReq.md#deliverydatestart)
- [entityUuid](OutwardJobsServiceCountReq.md#entityuuid)
- [finalRefNumber](OutwardJobsServiceCountReq.md#finalrefnumber)
- [inwardFamilyId](OutwardJobsServiceCountReq.md#inwardfamilyid)
- [isActive](OutwardJobsServiceCountReq.md#isactive)
- [modificationTimestampEnd](OutwardJobsServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](OutwardJobsServiceCountReq.md#modificationtimestampstart)
- [projectId](OutwardJobsServiceCountReq.md#projectid)
- [referenceId](OutwardJobsServiceCountReq.md#referenceid)
- [status](OutwardJobsServiceCountReq.md#status)
- [vendorId](OutwardJobsServiceCountReq.md#vendorid)
- [fields](OutwardJobsServiceCountReq.md#fields)
- [runtime](OutwardJobsServiceCountReq.md#runtime)
- [typeName](OutwardJobsServiceCountReq.md#typename)

### Methods

- [clone](OutwardJobsServiceCountReq.md#clone)
- [equals](OutwardJobsServiceCountReq.md#equals)
- [fromBinary](OutwardJobsServiceCountReq.md#frombinary)
- [fromJson](OutwardJobsServiceCountReq.md#fromjson)
- [fromJsonString](OutwardJobsServiceCountReq.md#fromjsonstring)
- [getType](OutwardJobsServiceCountReq.md#gettype)
- [toBinary](OutwardJobsServiceCountReq.md#tobinary)
- [toJSON](OutwardJobsServiceCountReq.md#tojson)
- [toJson](OutwardJobsServiceCountReq.md#tojson-1)
- [toJsonString](OutwardJobsServiceCountReq.md#tojsonstring)
- [equals](OutwardJobsServiceCountReq.md#equals-1)
- [fromBinary](OutwardJobsServiceCountReq.md#frombinary-1)
- [fromJson](OutwardJobsServiceCountReq.md#fromjson-1)
- [fromJsonString](OutwardJobsServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new OutwardJobsServiceCountReq**(`data?`): [`OutwardJobsServiceCountReq`](OutwardJobsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`OutwardJobsServiceCountReq`](OutwardJobsServiceCountReq.md)\> |

#### Returns

[`OutwardJobsServiceCountReq`](OutwardJobsServiceCountReq.md)

#### Overrides

Message\&lt;OutwardJobsServiceCountReq\&gt;.constructor

#### Defined in

src/outward_jobs.scailo_pb.ts:1867

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 13;

#### Defined in

src/outward_jobs.scailo_pb.ts:1781

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 12;

#### Defined in

src/outward_jobs.scailo_pb.ts:1774

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 11;

#### Defined in

src/outward_jobs.scailo_pb.ts:1767

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 14;

#### Defined in

src/outward_jobs.scailo_pb.ts:1788

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: uint64 completed_on_end = 16;

#### Defined in

src/outward_jobs.scailo_pb.ts:1802

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: uint64 completed_on_start = 15;

#### Defined in

src/outward_jobs.scailo_pb.ts:1795

___

### consigneeLocationId

• **consigneeLocationId**: `bigint` = `protoInt64.zero`

The ID of the location

**`Generated`**

from field: uint64 consignee_location_id = 22;

#### Defined in

src/outward_jobs.scailo_pb.ts:1844

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

src/outward_jobs.scailo_pb.ts:1732

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

src/outward_jobs.scailo_pb.ts:1725

___

### deliveryDateEnd

• **deliveryDateEnd**: `string` = `""`

The end delivery date of any item in the outward job

**`Generated`**

from field: string delivery_date_end = 19;

#### Defined in

src/outward_jobs.scailo_pb.ts:1823

___

### deliveryDateExact

• **deliveryDateExact**: `string` = `""`

The exact delivery date of any item in the outward job

**`Generated`**

from field: string delivery_date_exact = 17;

#### Defined in

src/outward_jobs.scailo_pb.ts:1809

___

### deliveryDateStart

• **deliveryDateStart**: `string` = `""`

The start delivery date of any item in the outward job

**`Generated`**

from field: string delivery_date_start = 18;

#### Defined in

src/outward_jobs.scailo_pb.ts:1816

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

src/outward_jobs.scailo_pb.ts:1753

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 21;

#### Defined in

src/outward_jobs.scailo_pb.ts:1837

___

### inwardFamilyId

• **inwardFamilyId**: `bigint` = `protoInt64.zero`

The ID of the inward family

**`Generated`**

from field: uint64 inward_family_id = 30;

#### Defined in

src/outward_jobs.scailo_pb.ts:1865

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/outward_jobs.scailo_pb.ts:1718

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

src/outward_jobs.scailo_pb.ts:1746

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

src/outward_jobs.scailo_pb.ts:1739

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The optional associated ID of the project

**`Generated`**

from field: uint64 project_id = 26;

#### Defined in

src/outward_jobs.scailo_pb.ts:1858

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the outward job

**`Generated`**

from field: string reference_id = 20;

#### Defined in

src/outward_jobs.scailo_pb.ts:1830

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this outward job

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

src/outward_jobs.scailo_pb.ts:1760

___

### vendorId

• **vendorId**: `bigint` = `protoInt64.zero`

The ID of the vendor

**`Generated`**

from field: uint64 vendor_id = 23;

#### Defined in

src/outward_jobs.scailo_pb.ts:1851

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/outward_jobs.scailo_pb.ts:1874

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/outward_jobs.scailo_pb.ts:1872

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.OutwardJobsServiceCountReq"``

#### Defined in

src/outward_jobs.scailo_pb.ts:1873

## Methods

### clone

▸ **clone**(): [`OutwardJobsServiceCountReq`](OutwardJobsServiceCountReq.md)

Create a deep copy.

#### Returns

[`OutwardJobsServiceCountReq`](OutwardJobsServiceCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`OutwardJobsServiceCountReq`](OutwardJobsServiceCountReq.md) \| `PlainMessage`\<[`OutwardJobsServiceCountReq`](OutwardJobsServiceCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`OutwardJobsServiceCountReq`](OutwardJobsServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`OutwardJobsServiceCountReq`](OutwardJobsServiceCountReq.md)\>

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
| `a` | `undefined` \| [`OutwardJobsServiceCountReq`](OutwardJobsServiceCountReq.md) \| `PlainMessage`\<[`OutwardJobsServiceCountReq`](OutwardJobsServiceCountReq.md)\> |
| `b` | `undefined` \| [`OutwardJobsServiceCountReq`](OutwardJobsServiceCountReq.md) \| `PlainMessage`\<[`OutwardJobsServiceCountReq`](OutwardJobsServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/outward_jobs.scailo_pb.ts:1911

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`OutwardJobsServiceCountReq`](OutwardJobsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`OutwardJobsServiceCountReq`](OutwardJobsServiceCountReq.md)

#### Defined in

src/outward_jobs.scailo_pb.ts:1899

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`OutwardJobsServiceCountReq`](OutwardJobsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobsServiceCountReq`](OutwardJobsServiceCountReq.md)

#### Defined in

src/outward_jobs.scailo_pb.ts:1903

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`OutwardJobsServiceCountReq`](OutwardJobsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobsServiceCountReq`](OutwardJobsServiceCountReq.md)

#### Defined in

src/outward_jobs.scailo_pb.ts:1907
