[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq

# Class: OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Scailo.OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq

## Hierarchy

- `Message`\<[`OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq`](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md)\>

  ↳ **`OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#approvedonend)
- [approvedOnStart](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#approvedonstart)
- [approverRoleId](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#approverroleid)
- [completedOnEnd](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#completedonend)
- [completedOnStart](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#completedonstart)
- [consigneeLocationId](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#consigneelocationid)
- [count](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#count)
- [creationTimestampEnd](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#creationtimestampstart)
- [entityUuid](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#entityuuid)
- [familyId](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#familyid)
- [finalRefNumber](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#finalrefnumber)
- [formData](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#formdata)
- [isActive](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#isactive)
- [locationId](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#locationid)
- [modificationTimestampEnd](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#modificationtimestampstart)
- [offset](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#offset)
- [projectId](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#projectid)
- [refFrom](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#reffrom)
- [refId](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#refid)
- [referenceId](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#referenceid)
- [sortKey](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#sortkey)
- [sortOrder](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#sortorder)
- [status](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#status)
- [vendorId](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#vendorid)
- [fields](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#fields)
- [runtime](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#runtime)
- [typeName](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#typename)

### Methods

- [clone](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#clone)
- [equals](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#equals)
- [fromBinary](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#frombinary)
- [fromJson](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#fromjson)
- [fromJsonString](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#fromjsonstring)
- [getType](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#gettype)
- [toBinary](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#tobinary)
- [toJSON](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#tojson)
- [toJson](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#tojson-1)
- [toJsonString](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#tojsonstring)
- [equals](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#equals-1)
- [fromBinary](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#frombinary-1)
- [fromJson](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#fromjson-1)
- [fromJsonString](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq**(`data?`): [`OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq`](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq`](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md)\> |

#### Returns

[`OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq`](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md)

#### Overrides

Message\&lt;OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq\&gt;.constructor

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:1732](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L1732)

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 13;

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:1638](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L1638)

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 12;

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:1631](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L1631)

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 11;

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:1624](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L1624)

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 14;

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:1645](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L1645)

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: uint64 completed_on_end = 16;

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:1659](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L1659)

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: uint64 completed_on_start = 15;

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:1652](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L1652)

___

### consigneeLocationId

• **consigneeLocationId**: `bigint` = `protoInt64.zero`

Outward Job related filters
The associated consignee location ID of the linked outward job

**`Generated`**

from field: uint64 consignee_location_id = 50;

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:1709](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L1709)

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:1554](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L1554)

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:1589](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L1589)

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:1582](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L1582)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:1610](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L1610)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family

**`Generated`**

from field: uint64 family_id = 30;

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:1701](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L1701)

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 21;

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:1673](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L1673)

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

The list of form data filters

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:1730](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L1730)

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:1547](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L1547)

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The location ID of where the record is created

**`Generated`**

from field: uint64 location_id = 25;

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:1694](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L1694)

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:1603](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L1603)

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:1596](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L1596)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:1561](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L1561)

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The ID of the associated project of the linked outward job

**`Generated`**

from field: uint64 project_id = 52;

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:1723](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L1723)

___

### refFrom

• **refFrom**: [`OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_REF_FROM`](../enums/OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_REF_FROM.md) = `OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_REF_FROM.OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_REF_FROM_ANY_UNSPECIFIED`

The associated reference

**`Generated`**

from field: Scailo.OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_REF_FROM ref_from = 22;

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:1680](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L1680)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: uint64 ref_id = 23;

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:1687](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L1687)

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the outward job free issue material return

**`Generated`**

from field: string reference_id = 20;

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:1666](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L1666)

___

### sortKey

• **sortKey**: [`OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_SORT_KEY`](../enums/OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_SORT_KEY.md) = `OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_SORT_KEY.OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_SORT_KEY sort_key = 5;

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:1575](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L1575)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:1568](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L1568)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this outward job free issue material return

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:1617](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L1617)

___

### vendorId

• **vendorId**: `bigint` = `protoInt64.zero`

The associated vendor ID of the linked outward job

**`Generated`**

from field: uint64 vendor_id = 51;

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:1716](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L1716)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:1739](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L1739)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:1737](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L1737)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq"``

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:1738](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L1738)

## Methods

### clone

▸ **clone**(): [`OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq`](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md)

Create a deep copy.

#### Returns

[`OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq`](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq`](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md) \| `PlainMessage`\<[`OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq`](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq`](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq`](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq`](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md) \| `PlainMessage`\<[`OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq`](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md)\> |
| `b` | `undefined` \| [`OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq`](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md) \| `PlainMessage`\<[`OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq`](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:1781](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L1781)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq`](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq`](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md)

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:1769](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L1769)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq`](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq`](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md)

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:1773](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L1773)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq`](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq`](OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md)

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:1777](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L1777)
