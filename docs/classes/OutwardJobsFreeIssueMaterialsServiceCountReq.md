[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / OutwardJobsFreeIssueMaterialsServiceCountReq

# Class: OutwardJobsFreeIssueMaterialsServiceCountReq

Describes the base request payload of a count search

**`Generated`**

from message Scailo.OutwardJobsFreeIssueMaterialsServiceCountReq

## Hierarchy

- `Message`\<[`OutwardJobsFreeIssueMaterialsServiceCountReq`](OutwardJobsFreeIssueMaterialsServiceCountReq.md)\>

  ↳ **`OutwardJobsFreeIssueMaterialsServiceCountReq`**

## Table of contents

### Constructors

- [constructor](OutwardJobsFreeIssueMaterialsServiceCountReq.md#constructor)

### Properties

- [approvedByUserId](OutwardJobsFreeIssueMaterialsServiceCountReq.md#approvedbyuserid)
- [approvedOnEnd](OutwardJobsFreeIssueMaterialsServiceCountReq.md#approvedonend)
- [approvedOnStart](OutwardJobsFreeIssueMaterialsServiceCountReq.md#approvedonstart)
- [approverRoleId](OutwardJobsFreeIssueMaterialsServiceCountReq.md#approverroleid)
- [completedOnEnd](OutwardJobsFreeIssueMaterialsServiceCountReq.md#completedonend)
- [completedOnStart](OutwardJobsFreeIssueMaterialsServiceCountReq.md#completedonstart)
- [creationTimestampEnd](OutwardJobsFreeIssueMaterialsServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](OutwardJobsFreeIssueMaterialsServiceCountReq.md#creationtimestampstart)
- [entityUuid](OutwardJobsFreeIssueMaterialsServiceCountReq.md#entityuuid)
- [familyId](OutwardJobsFreeIssueMaterialsServiceCountReq.md#familyid)
- [finalRefNumber](OutwardJobsFreeIssueMaterialsServiceCountReq.md#finalrefnumber)
- [formData](OutwardJobsFreeIssueMaterialsServiceCountReq.md#formdata)
- [isActive](OutwardJobsFreeIssueMaterialsServiceCountReq.md#isactive)
- [locationId](OutwardJobsFreeIssueMaterialsServiceCountReq.md#locationid)
- [modificationTimestampEnd](OutwardJobsFreeIssueMaterialsServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](OutwardJobsFreeIssueMaterialsServiceCountReq.md#modificationtimestampstart)
- [projectId](OutwardJobsFreeIssueMaterialsServiceCountReq.md#projectid)
- [refFrom](OutwardJobsFreeIssueMaterialsServiceCountReq.md#reffrom)
- [refId](OutwardJobsFreeIssueMaterialsServiceCountReq.md#refid)
- [referenceId](OutwardJobsFreeIssueMaterialsServiceCountReq.md#referenceid)
- [status](OutwardJobsFreeIssueMaterialsServiceCountReq.md#status)
- [vendorId](OutwardJobsFreeIssueMaterialsServiceCountReq.md#vendorid)
- [fields](OutwardJobsFreeIssueMaterialsServiceCountReq.md#fields)
- [runtime](OutwardJobsFreeIssueMaterialsServiceCountReq.md#runtime)
- [typeName](OutwardJobsFreeIssueMaterialsServiceCountReq.md#typename)

### Methods

- [clone](OutwardJobsFreeIssueMaterialsServiceCountReq.md#clone)
- [equals](OutwardJobsFreeIssueMaterialsServiceCountReq.md#equals)
- [fromBinary](OutwardJobsFreeIssueMaterialsServiceCountReq.md#frombinary)
- [fromJson](OutwardJobsFreeIssueMaterialsServiceCountReq.md#fromjson)
- [fromJsonString](OutwardJobsFreeIssueMaterialsServiceCountReq.md#fromjsonstring)
- [getType](OutwardJobsFreeIssueMaterialsServiceCountReq.md#gettype)
- [toBinary](OutwardJobsFreeIssueMaterialsServiceCountReq.md#tobinary)
- [toJSON](OutwardJobsFreeIssueMaterialsServiceCountReq.md#tojson)
- [toJson](OutwardJobsFreeIssueMaterialsServiceCountReq.md#tojson-1)
- [toJsonString](OutwardJobsFreeIssueMaterialsServiceCountReq.md#tojsonstring)
- [equals](OutwardJobsFreeIssueMaterialsServiceCountReq.md#equals-1)
- [fromBinary](OutwardJobsFreeIssueMaterialsServiceCountReq.md#frombinary-1)
- [fromJson](OutwardJobsFreeIssueMaterialsServiceCountReq.md#fromjson-1)
- [fromJsonString](OutwardJobsFreeIssueMaterialsServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new OutwardJobsFreeIssueMaterialsServiceCountReq**(`data?`): [`OutwardJobsFreeIssueMaterialsServiceCountReq`](OutwardJobsFreeIssueMaterialsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`OutwardJobsFreeIssueMaterialsServiceCountReq`](OutwardJobsFreeIssueMaterialsServiceCountReq.md)\> |

#### Returns

[`OutwardJobsFreeIssueMaterialsServiceCountReq`](OutwardJobsFreeIssueMaterialsServiceCountReq.md)

#### Overrides

Message\&lt;OutwardJobsFreeIssueMaterialsServiceCountReq\&gt;.constructor

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:2038

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 13;

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:1951

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 12;

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:1944

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 11;

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:1937

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 14;

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:1958

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: uint64 completed_on_end = 16;

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:1972

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: uint64 completed_on_start = 15;

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:1965

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:1902

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:1895

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:1923

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family

**`Generated`**

from field: uint64 family_id = 30;

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:2014

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 21;

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:1986

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

The list of form data filters

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:2036

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:1888

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The location ID of where the record is created

**`Generated`**

from field: uint64 location_id = 25;

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:2007

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:1916

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:1909

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The ID of the associated project of the linked outward job

**`Generated`**

from field: uint64 project_id = 52;

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:2029

___

### refFrom

• **refFrom**: [`OUTWARD_JOB_FREE_ISSUE_MATERIAL_REF_FROM`](../enums/OUTWARD_JOB_FREE_ISSUE_MATERIAL_REF_FROM.md) = `OUTWARD_JOB_FREE_ISSUE_MATERIAL_REF_FROM.OUTWARD_JOB_FREE_ISSUE_MATERIAL_REF_FROM_ANY_UNSPECIFIED`

The associated reference

**`Generated`**

from field: Scailo.OUTWARD_JOB_FREE_ISSUE_MATERIAL_REF_FROM ref_from = 22;

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:1993

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: uint64 ref_id = 23;

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:2000

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the outward job free issue material

**`Generated`**

from field: string reference_id = 20;

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:1979

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this outward job free issue material

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:1930

___

### vendorId

• **vendorId**: `bigint` = `protoInt64.zero`

Outward Job related filters
The associated vendor ID of the linked outward job

**`Generated`**

from field: uint64 vendor_id = 51;

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:2022

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:2045

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:2043

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.OutwardJobsFreeIssueMaterialsServiceCountReq"``

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:2044

## Methods

### clone

▸ **clone**(): [`OutwardJobsFreeIssueMaterialsServiceCountReq`](OutwardJobsFreeIssueMaterialsServiceCountReq.md)

Create a deep copy.

#### Returns

[`OutwardJobsFreeIssueMaterialsServiceCountReq`](OutwardJobsFreeIssueMaterialsServiceCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`OutwardJobsFreeIssueMaterialsServiceCountReq`](OutwardJobsFreeIssueMaterialsServiceCountReq.md) \| `PlainMessage`\<[`OutwardJobsFreeIssueMaterialsServiceCountReq`](OutwardJobsFreeIssueMaterialsServiceCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`OutwardJobsFreeIssueMaterialsServiceCountReq`](OutwardJobsFreeIssueMaterialsServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`OutwardJobsFreeIssueMaterialsServiceCountReq`](OutwardJobsFreeIssueMaterialsServiceCountReq.md)\>

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
| `a` | `undefined` \| [`OutwardJobsFreeIssueMaterialsServiceCountReq`](OutwardJobsFreeIssueMaterialsServiceCountReq.md) \| `PlainMessage`\<[`OutwardJobsFreeIssueMaterialsServiceCountReq`](OutwardJobsFreeIssueMaterialsServiceCountReq.md)\> |
| `b` | `undefined` \| [`OutwardJobsFreeIssueMaterialsServiceCountReq`](OutwardJobsFreeIssueMaterialsServiceCountReq.md) \| `PlainMessage`\<[`OutwardJobsFreeIssueMaterialsServiceCountReq`](OutwardJobsFreeIssueMaterialsServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:2082

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`OutwardJobsFreeIssueMaterialsServiceCountReq`](OutwardJobsFreeIssueMaterialsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`OutwardJobsFreeIssueMaterialsServiceCountReq`](OutwardJobsFreeIssueMaterialsServiceCountReq.md)

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:2070

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`OutwardJobsFreeIssueMaterialsServiceCountReq`](OutwardJobsFreeIssueMaterialsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobsFreeIssueMaterialsServiceCountReq`](OutwardJobsFreeIssueMaterialsServiceCountReq.md)

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:2074

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`OutwardJobsFreeIssueMaterialsServiceCountReq`](OutwardJobsFreeIssueMaterialsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobsFreeIssueMaterialsServiceCountReq`](OutwardJobsFreeIssueMaterialsServiceCountReq.md)

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:2078
