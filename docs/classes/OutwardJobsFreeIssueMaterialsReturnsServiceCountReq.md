[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / OutwardJobsFreeIssueMaterialsReturnsServiceCountReq

# Class: OutwardJobsFreeIssueMaterialsReturnsServiceCountReq

Describes the base request payload of a count search

**`Generated`**

from message Scailo.OutwardJobsFreeIssueMaterialsReturnsServiceCountReq

## Hierarchy

- `Message`\<[`OutwardJobsFreeIssueMaterialsReturnsServiceCountReq`](OutwardJobsFreeIssueMaterialsReturnsServiceCountReq.md)\>

  ↳ **`OutwardJobsFreeIssueMaterialsReturnsServiceCountReq`**

## Table of contents

### Constructors

- [constructor](OutwardJobsFreeIssueMaterialsReturnsServiceCountReq.md#constructor)

### Properties

- [approvedByUserId](OutwardJobsFreeIssueMaterialsReturnsServiceCountReq.md#approvedbyuserid)
- [approvedOnEnd](OutwardJobsFreeIssueMaterialsReturnsServiceCountReq.md#approvedonend)
- [approvedOnStart](OutwardJobsFreeIssueMaterialsReturnsServiceCountReq.md#approvedonstart)
- [approverRoleId](OutwardJobsFreeIssueMaterialsReturnsServiceCountReq.md#approverroleid)
- [completedOnEnd](OutwardJobsFreeIssueMaterialsReturnsServiceCountReq.md#completedonend)
- [completedOnStart](OutwardJobsFreeIssueMaterialsReturnsServiceCountReq.md#completedonstart)
- [consigneeLocationId](OutwardJobsFreeIssueMaterialsReturnsServiceCountReq.md#consigneelocationid)
- [creationTimestampEnd](OutwardJobsFreeIssueMaterialsReturnsServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](OutwardJobsFreeIssueMaterialsReturnsServiceCountReq.md#creationtimestampstart)
- [entityUuid](OutwardJobsFreeIssueMaterialsReturnsServiceCountReq.md#entityuuid)
- [familyId](OutwardJobsFreeIssueMaterialsReturnsServiceCountReq.md#familyid)
- [finalRefNumber](OutwardJobsFreeIssueMaterialsReturnsServiceCountReq.md#finalrefnumber)
- [formData](OutwardJobsFreeIssueMaterialsReturnsServiceCountReq.md#formdata)
- [isActive](OutwardJobsFreeIssueMaterialsReturnsServiceCountReq.md#isactive)
- [locationId](OutwardJobsFreeIssueMaterialsReturnsServiceCountReq.md#locationid)
- [modificationTimestampEnd](OutwardJobsFreeIssueMaterialsReturnsServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](OutwardJobsFreeIssueMaterialsReturnsServiceCountReq.md#modificationtimestampstart)
- [projectId](OutwardJobsFreeIssueMaterialsReturnsServiceCountReq.md#projectid)
- [refFrom](OutwardJobsFreeIssueMaterialsReturnsServiceCountReq.md#reffrom)
- [refId](OutwardJobsFreeIssueMaterialsReturnsServiceCountReq.md#refid)
- [referenceId](OutwardJobsFreeIssueMaterialsReturnsServiceCountReq.md#referenceid)
- [status](OutwardJobsFreeIssueMaterialsReturnsServiceCountReq.md#status)
- [vendorId](OutwardJobsFreeIssueMaterialsReturnsServiceCountReq.md#vendorid)
- [fields](OutwardJobsFreeIssueMaterialsReturnsServiceCountReq.md#fields)
- [runtime](OutwardJobsFreeIssueMaterialsReturnsServiceCountReq.md#runtime)
- [typeName](OutwardJobsFreeIssueMaterialsReturnsServiceCountReq.md#typename)

### Methods

- [clone](OutwardJobsFreeIssueMaterialsReturnsServiceCountReq.md#clone)
- [equals](OutwardJobsFreeIssueMaterialsReturnsServiceCountReq.md#equals)
- [fromBinary](OutwardJobsFreeIssueMaterialsReturnsServiceCountReq.md#frombinary)
- [fromJson](OutwardJobsFreeIssueMaterialsReturnsServiceCountReq.md#fromjson)
- [fromJsonString](OutwardJobsFreeIssueMaterialsReturnsServiceCountReq.md#fromjsonstring)
- [getType](OutwardJobsFreeIssueMaterialsReturnsServiceCountReq.md#gettype)
- [toBinary](OutwardJobsFreeIssueMaterialsReturnsServiceCountReq.md#tobinary)
- [toJSON](OutwardJobsFreeIssueMaterialsReturnsServiceCountReq.md#tojson)
- [toJson](OutwardJobsFreeIssueMaterialsReturnsServiceCountReq.md#tojson-1)
- [toJsonString](OutwardJobsFreeIssueMaterialsReturnsServiceCountReq.md#tojsonstring)
- [equals](OutwardJobsFreeIssueMaterialsReturnsServiceCountReq.md#equals-1)
- [fromBinary](OutwardJobsFreeIssueMaterialsReturnsServiceCountReq.md#frombinary-1)
- [fromJson](OutwardJobsFreeIssueMaterialsReturnsServiceCountReq.md#fromjson-1)
- [fromJsonString](OutwardJobsFreeIssueMaterialsReturnsServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new OutwardJobsFreeIssueMaterialsReturnsServiceCountReq**(`data?`): [`OutwardJobsFreeIssueMaterialsReturnsServiceCountReq`](OutwardJobsFreeIssueMaterialsReturnsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`OutwardJobsFreeIssueMaterialsReturnsServiceCountReq`](OutwardJobsFreeIssueMaterialsReturnsServiceCountReq.md)\> |

#### Returns

[`OutwardJobsFreeIssueMaterialsReturnsServiceCountReq`](OutwardJobsFreeIssueMaterialsReturnsServiceCountReq.md)

#### Overrides

Message\&lt;OutwardJobsFreeIssueMaterialsReturnsServiceCountReq\&gt;.constructor

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:2401](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L2401)

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter by the specific user ID who approved the records.

**`Example`**

```ts
501
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 approved_by_user_id = 13;

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:2262](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L2262)

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter records approved ON or BEFORE this UNIX timestamp.

**`Example`**

```ts
1704067199
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 approved_on_end = 12;

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:2246](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L2246)

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter records approved ON or AFTER this UNIX timestamp.

**`Example`**

```ts
1672531200
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 approved_on_start = 11;

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:2230](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L2230)

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter by the role ID of the approver.

**`Example`**

```ts
5
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 approver_role_id = 14;

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:2278](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L2278)

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter records completed ON or BEFORE this UNIX timestamp.

**`Example`**

```ts
1704067199
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 completed_on_end = 16;

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:2310](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L2310)

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter records completed ON or AFTER this UNIX timestamp.

**`Example`**

```ts
1672531200
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 completed_on_start = 15;

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:2294](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L2294)

___

### consigneeLocationId

• **consigneeLocationId**: `bigint` = `protoInt64.zero`

Outward Job related filters
The associated consignee location ID of the linked outward job

**`Generated`**

from field: uint64 consignee_location_id = 50;

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:2378](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L2378)

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter records created ON or BEFORE this UNIX timestamp.

**`Example`**

```ts
1704067199
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:2154](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L2154)

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter records created ON or AFTER this UNIX timestamp.

**`Example`**

```ts
1672531200
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:2138](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L2138)

___

### entityUuid

• **entityUuid**: `string` = `""`

**`Optional`**

**`Description`**

Filter by the organization UUID.

**`Example`**

```ts
"550e8400-e29b-41d4-a716-446655440000"
```

**`Regex`**

^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$

**`Format`**

If provided, must be a valid v4 UUID in canonical hyphenated form.

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:2202](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L2202)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family

**`Generated`**

from field: uint64 family_id = 30;

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:2370](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L2370)

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

**`Optional`**

**`Description`**

Fuzzy match for the system-generated ref number.

**`Example`**

```ts
"ABS-2023-X9Z2"
```

**`Regex`**

[0-9A-Za-z ]*$

@format: Alphanumeric characters and spaces only. Can be left empty.

**`Generated`**

from field: string final_ref_number = 21;

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:2342](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L2342)

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

The list of form data filters

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:2399](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L2399)

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

**`Optional`**

**`Description`**

Filter by active status. If `true`, then returns only active records. If `false`, then returns only inactive records.

**`Example`**

```ts
ANY
```

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:2122](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L2122)

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The location ID of where the record is created

**`Generated`**

from field: uint64 location_id = 25;

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:2363](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L2363)

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter records modified ON or BEFORE this UNIX timestamp.

**`Example`**

```ts
1704067199
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:2186](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L2186)

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter records modified ON or AFTER this UNIX timestamp.

**`Example`**

```ts
1672531200
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:2170](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L2170)

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The ID of the associated project of the linked outward job

**`Generated`**

from field: uint64 project_id = 52;

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:2392](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L2392)

___

### refFrom

• **refFrom**: [`OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_REF_FROM`](../enums/OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_REF_FROM.md) = `OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_REF_FROM.OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_REF_FROM_ANY_UNSPECIFIED`

The associated reference

**`Generated`**

from field: Scailo.OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_REF_FROM ref_from = 22;

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:2349](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L2349)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: uint64 ref_id = 23;

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:2356](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L2356)

___

### referenceId

• **referenceId**: `string` = `""`

**`Optional`**

**`Description`**

Fuzzy match for the user-defined reference ID.

**`Example`**

```ts
"ABS-2023-001"
```

**`Regex`**

[0-9A-Za-z ]*$

@format: Alphanumeric characters and spaces only. Can be left empty.

**`Generated`**

from field: string reference_id = 20;

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:2326](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L2326)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

**`Optional`**

**`Description`**

Filter by lifecycle status (e.g., DRAFT, STANDING).

**`Example`**

```ts
STANDING
```

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:2214](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L2214)

___

### vendorId

• **vendorId**: `bigint` = `protoInt64.zero`

The associated vendor ID of the linked outward job

**`Generated`**

from field: uint64 vendor_id = 51;

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:2385](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L2385)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:2408](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L2408)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:2406](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L2406)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.OutwardJobsFreeIssueMaterialsReturnsServiceCountReq"``

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:2407](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L2407)

## Methods

### clone

▸ **clone**(): [`OutwardJobsFreeIssueMaterialsReturnsServiceCountReq`](OutwardJobsFreeIssueMaterialsReturnsServiceCountReq.md)

Create a deep copy.

#### Returns

[`OutwardJobsFreeIssueMaterialsReturnsServiceCountReq`](OutwardJobsFreeIssueMaterialsReturnsServiceCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`OutwardJobsFreeIssueMaterialsReturnsServiceCountReq`](OutwardJobsFreeIssueMaterialsReturnsServiceCountReq.md) \| `PlainMessage`\<[`OutwardJobsFreeIssueMaterialsReturnsServiceCountReq`](OutwardJobsFreeIssueMaterialsReturnsServiceCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`OutwardJobsFreeIssueMaterialsReturnsServiceCountReq`](OutwardJobsFreeIssueMaterialsReturnsServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`OutwardJobsFreeIssueMaterialsReturnsServiceCountReq`](OutwardJobsFreeIssueMaterialsReturnsServiceCountReq.md)\>

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
| `a` | `undefined` \| [`OutwardJobsFreeIssueMaterialsReturnsServiceCountReq`](OutwardJobsFreeIssueMaterialsReturnsServiceCountReq.md) \| `PlainMessage`\<[`OutwardJobsFreeIssueMaterialsReturnsServiceCountReq`](OutwardJobsFreeIssueMaterialsReturnsServiceCountReq.md)\> |
| `b` | `undefined` \| [`OutwardJobsFreeIssueMaterialsReturnsServiceCountReq`](OutwardJobsFreeIssueMaterialsReturnsServiceCountReq.md) \| `PlainMessage`\<[`OutwardJobsFreeIssueMaterialsReturnsServiceCountReq`](OutwardJobsFreeIssueMaterialsReturnsServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:2446](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L2446)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`OutwardJobsFreeIssueMaterialsReturnsServiceCountReq`](OutwardJobsFreeIssueMaterialsReturnsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`OutwardJobsFreeIssueMaterialsReturnsServiceCountReq`](OutwardJobsFreeIssueMaterialsReturnsServiceCountReq.md)

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:2434](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L2434)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`OutwardJobsFreeIssueMaterialsReturnsServiceCountReq`](OutwardJobsFreeIssueMaterialsReturnsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobsFreeIssueMaterialsReturnsServiceCountReq`](OutwardJobsFreeIssueMaterialsReturnsServiceCountReq.md)

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:2438](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L2438)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`OutwardJobsFreeIssueMaterialsReturnsServiceCountReq`](OutwardJobsFreeIssueMaterialsReturnsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobsFreeIssueMaterialsReturnsServiceCountReq`](OutwardJobsFreeIssueMaterialsReturnsServiceCountReq.md)

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:2442](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L2442)
