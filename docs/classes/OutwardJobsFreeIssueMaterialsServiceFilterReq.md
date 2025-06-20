[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / OutwardJobsFreeIssueMaterialsServiceFilterReq

# Class: OutwardJobsFreeIssueMaterialsServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Scailo.OutwardJobsFreeIssueMaterialsServiceFilterReq

## Hierarchy

- `Message`\<[`OutwardJobsFreeIssueMaterialsServiceFilterReq`](OutwardJobsFreeIssueMaterialsServiceFilterReq.md)\>

  ↳ **`OutwardJobsFreeIssueMaterialsServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](OutwardJobsFreeIssueMaterialsServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](OutwardJobsFreeIssueMaterialsServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](OutwardJobsFreeIssueMaterialsServiceFilterReq.md#approvedonend)
- [approvedOnStart](OutwardJobsFreeIssueMaterialsServiceFilterReq.md#approvedonstart)
- [approverRoleId](OutwardJobsFreeIssueMaterialsServiceFilterReq.md#approverroleid)
- [completedOnEnd](OutwardJobsFreeIssueMaterialsServiceFilterReq.md#completedonend)
- [completedOnStart](OutwardJobsFreeIssueMaterialsServiceFilterReq.md#completedonstart)
- [count](OutwardJobsFreeIssueMaterialsServiceFilterReq.md#count)
- [creationTimestampEnd](OutwardJobsFreeIssueMaterialsServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](OutwardJobsFreeIssueMaterialsServiceFilterReq.md#creationtimestampstart)
- [entityUuid](OutwardJobsFreeIssueMaterialsServiceFilterReq.md#entityuuid)
- [familyId](OutwardJobsFreeIssueMaterialsServiceFilterReq.md#familyid)
- [finalRefNumber](OutwardJobsFreeIssueMaterialsServiceFilterReq.md#finalrefnumber)
- [formData](OutwardJobsFreeIssueMaterialsServiceFilterReq.md#formdata)
- [isActive](OutwardJobsFreeIssueMaterialsServiceFilterReq.md#isactive)
- [locationId](OutwardJobsFreeIssueMaterialsServiceFilterReq.md#locationid)
- [modificationTimestampEnd](OutwardJobsFreeIssueMaterialsServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](OutwardJobsFreeIssueMaterialsServiceFilterReq.md#modificationtimestampstart)
- [offset](OutwardJobsFreeIssueMaterialsServiceFilterReq.md#offset)
- [projectId](OutwardJobsFreeIssueMaterialsServiceFilterReq.md#projectid)
- [refFrom](OutwardJobsFreeIssueMaterialsServiceFilterReq.md#reffrom)
- [refId](OutwardJobsFreeIssueMaterialsServiceFilterReq.md#refid)
- [referenceId](OutwardJobsFreeIssueMaterialsServiceFilterReq.md#referenceid)
- [sortKey](OutwardJobsFreeIssueMaterialsServiceFilterReq.md#sortkey)
- [sortOrder](OutwardJobsFreeIssueMaterialsServiceFilterReq.md#sortorder)
- [status](OutwardJobsFreeIssueMaterialsServiceFilterReq.md#status)
- [vendorId](OutwardJobsFreeIssueMaterialsServiceFilterReq.md#vendorid)
- [fields](OutwardJobsFreeIssueMaterialsServiceFilterReq.md#fields)
- [runtime](OutwardJobsFreeIssueMaterialsServiceFilterReq.md#runtime)
- [typeName](OutwardJobsFreeIssueMaterialsServiceFilterReq.md#typename)

### Methods

- [clone](OutwardJobsFreeIssueMaterialsServiceFilterReq.md#clone)
- [equals](OutwardJobsFreeIssueMaterialsServiceFilterReq.md#equals)
- [fromBinary](OutwardJobsFreeIssueMaterialsServiceFilterReq.md#frombinary)
- [fromJson](OutwardJobsFreeIssueMaterialsServiceFilterReq.md#fromjson)
- [fromJsonString](OutwardJobsFreeIssueMaterialsServiceFilterReq.md#fromjsonstring)
- [getType](OutwardJobsFreeIssueMaterialsServiceFilterReq.md#gettype)
- [toBinary](OutwardJobsFreeIssueMaterialsServiceFilterReq.md#tobinary)
- [toJSON](OutwardJobsFreeIssueMaterialsServiceFilterReq.md#tojson)
- [toJson](OutwardJobsFreeIssueMaterialsServiceFilterReq.md#tojson-1)
- [toJsonString](OutwardJobsFreeIssueMaterialsServiceFilterReq.md#tojsonstring)
- [equals](OutwardJobsFreeIssueMaterialsServiceFilterReq.md#equals-1)
- [fromBinary](OutwardJobsFreeIssueMaterialsServiceFilterReq.md#frombinary-1)
- [fromJson](OutwardJobsFreeIssueMaterialsServiceFilterReq.md#fromjson-1)
- [fromJsonString](OutwardJobsFreeIssueMaterialsServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new OutwardJobsFreeIssueMaterialsServiceFilterReq**(`data?`): [`OutwardJobsFreeIssueMaterialsServiceFilterReq`](OutwardJobsFreeIssueMaterialsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`OutwardJobsFreeIssueMaterialsServiceFilterReq`](OutwardJobsFreeIssueMaterialsServiceFilterReq.md)\> |

#### Returns

[`OutwardJobsFreeIssueMaterialsServiceFilterReq`](OutwardJobsFreeIssueMaterialsServiceFilterReq.md)

#### Overrides

Message\&lt;OutwardJobsFreeIssueMaterialsServiceFilterReq\&gt;.constructor

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:1823

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 13;

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:1736

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 12;

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:1729

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 11;

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:1722

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 14;

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:1743

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: uint64 completed_on_end = 16;

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:1757

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: uint64 completed_on_start = 15;

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:1750

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:1652

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:1687

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:1680

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:1708

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family

**`Generated`**

from field: uint64 family_id = 30;

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:1799

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 21;

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:1771

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

The list of form data filters

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:1821

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:1645

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The location ID of where the record is created

**`Generated`**

from field: uint64 location_id = 25;

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:1792

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:1701

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:1694

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:1659

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The ID of the associated project of the linked outward job

**`Generated`**

from field: uint64 project_id = 52;

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:1814

___

### refFrom

• **refFrom**: [`OUTWARD_JOB_FREE_ISSUE_MATERIAL_REF_FROM`](../enums/OUTWARD_JOB_FREE_ISSUE_MATERIAL_REF_FROM.md) = `OUTWARD_JOB_FREE_ISSUE_MATERIAL_REF_FROM.OUTWARD_JOB_FREE_ISSUE_MATERIAL_REF_FROM_ANY_UNSPECIFIED`

The associated reference

**`Generated`**

from field: Scailo.OUTWARD_JOB_FREE_ISSUE_MATERIAL_REF_FROM ref_from = 22;

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:1778

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: uint64 ref_id = 23;

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:1785

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the outward job free issue material

**`Generated`**

from field: string reference_id = 20;

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:1764

___

### sortKey

• **sortKey**: [`OUTWARD_JOB_FREE_ISSUE_MATERIAL_SORT_KEY`](../enums/OUTWARD_JOB_FREE_ISSUE_MATERIAL_SORT_KEY.md) = `OUTWARD_JOB_FREE_ISSUE_MATERIAL_SORT_KEY.OUTWARD_JOB_FREE_ISSUE_MATERIAL_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.OUTWARD_JOB_FREE_ISSUE_MATERIAL_SORT_KEY sort_key = 5;

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:1673

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:1666

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this outward job free issue material

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:1715

___

### vendorId

• **vendorId**: `bigint` = `protoInt64.zero`

Outward Job related filters
The associated vendor ID of the linked outward job

**`Generated`**

from field: uint64 vendor_id = 51;

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:1807

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:1830

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:1828

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.OutwardJobsFreeIssueMaterialsServiceFilterReq"``

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:1829

## Methods

### clone

▸ **clone**(): [`OutwardJobsFreeIssueMaterialsServiceFilterReq`](OutwardJobsFreeIssueMaterialsServiceFilterReq.md)

Create a deep copy.

#### Returns

[`OutwardJobsFreeIssueMaterialsServiceFilterReq`](OutwardJobsFreeIssueMaterialsServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`OutwardJobsFreeIssueMaterialsServiceFilterReq`](OutwardJobsFreeIssueMaterialsServiceFilterReq.md) \| `PlainMessage`\<[`OutwardJobsFreeIssueMaterialsServiceFilterReq`](OutwardJobsFreeIssueMaterialsServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`OutwardJobsFreeIssueMaterialsServiceFilterReq`](OutwardJobsFreeIssueMaterialsServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`OutwardJobsFreeIssueMaterialsServiceFilterReq`](OutwardJobsFreeIssueMaterialsServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`OutwardJobsFreeIssueMaterialsServiceFilterReq`](OutwardJobsFreeIssueMaterialsServiceFilterReq.md) \| `PlainMessage`\<[`OutwardJobsFreeIssueMaterialsServiceFilterReq`](OutwardJobsFreeIssueMaterialsServiceFilterReq.md)\> |
| `b` | `undefined` \| [`OutwardJobsFreeIssueMaterialsServiceFilterReq`](OutwardJobsFreeIssueMaterialsServiceFilterReq.md) \| `PlainMessage`\<[`OutwardJobsFreeIssueMaterialsServiceFilterReq`](OutwardJobsFreeIssueMaterialsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:1871

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`OutwardJobsFreeIssueMaterialsServiceFilterReq`](OutwardJobsFreeIssueMaterialsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`OutwardJobsFreeIssueMaterialsServiceFilterReq`](OutwardJobsFreeIssueMaterialsServiceFilterReq.md)

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:1859

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`OutwardJobsFreeIssueMaterialsServiceFilterReq`](OutwardJobsFreeIssueMaterialsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobsFreeIssueMaterialsServiceFilterReq`](OutwardJobsFreeIssueMaterialsServiceFilterReq.md)

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:1863

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`OutwardJobsFreeIssueMaterialsServiceFilterReq`](OutwardJobsFreeIssueMaterialsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobsFreeIssueMaterialsServiceFilterReq`](OutwardJobsFreeIssueMaterialsServiceFilterReq.md)

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:1867
