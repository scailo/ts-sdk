[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / InwardJobsFreeIssueMaterialsReturnsServiceCountReq

# Class: InwardJobsFreeIssueMaterialsReturnsServiceCountReq

Describes the base request payload of a count search

**`Generated`**

from message Scailo.InwardJobsFreeIssueMaterialsReturnsServiceCountReq

## Hierarchy

- `Message`\<[`InwardJobsFreeIssueMaterialsReturnsServiceCountReq`](InwardJobsFreeIssueMaterialsReturnsServiceCountReq.md)\>

  ↳ **`InwardJobsFreeIssueMaterialsReturnsServiceCountReq`**

## Table of contents

### Constructors

- [constructor](InwardJobsFreeIssueMaterialsReturnsServiceCountReq.md#constructor)

### Properties

- [approvedByUserId](InwardJobsFreeIssueMaterialsReturnsServiceCountReq.md#approvedbyuserid)
- [approvedOnEnd](InwardJobsFreeIssueMaterialsReturnsServiceCountReq.md#approvedonend)
- [approvedOnStart](InwardJobsFreeIssueMaterialsReturnsServiceCountReq.md#approvedonstart)
- [approverRoleId](InwardJobsFreeIssueMaterialsReturnsServiceCountReq.md#approverroleid)
- [buyerClientId](InwardJobsFreeIssueMaterialsReturnsServiceCountReq.md#buyerclientid)
- [completedOnEnd](InwardJobsFreeIssueMaterialsReturnsServiceCountReq.md#completedonend)
- [completedOnStart](InwardJobsFreeIssueMaterialsReturnsServiceCountReq.md#completedonstart)
- [consigneeClientId](InwardJobsFreeIssueMaterialsReturnsServiceCountReq.md#consigneeclientid)
- [creationTimestampEnd](InwardJobsFreeIssueMaterialsReturnsServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](InwardJobsFreeIssueMaterialsReturnsServiceCountReq.md#creationtimestampstart)
- [entityUuid](InwardJobsFreeIssueMaterialsReturnsServiceCountReq.md#entityuuid)
- [familyId](InwardJobsFreeIssueMaterialsReturnsServiceCountReq.md#familyid)
- [finalRefNumber](InwardJobsFreeIssueMaterialsReturnsServiceCountReq.md#finalrefnumber)
- [isActive](InwardJobsFreeIssueMaterialsReturnsServiceCountReq.md#isactive)
- [locationId](InwardJobsFreeIssueMaterialsReturnsServiceCountReq.md#locationid)
- [modificationTimestampEnd](InwardJobsFreeIssueMaterialsReturnsServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](InwardJobsFreeIssueMaterialsReturnsServiceCountReq.md#modificationtimestampstart)
- [projectId](InwardJobsFreeIssueMaterialsReturnsServiceCountReq.md#projectid)
- [refFrom](InwardJobsFreeIssueMaterialsReturnsServiceCountReq.md#reffrom)
- [refId](InwardJobsFreeIssueMaterialsReturnsServiceCountReq.md#refid)
- [referenceId](InwardJobsFreeIssueMaterialsReturnsServiceCountReq.md#referenceid)
- [status](InwardJobsFreeIssueMaterialsReturnsServiceCountReq.md#status)
- [fields](InwardJobsFreeIssueMaterialsReturnsServiceCountReq.md#fields)
- [runtime](InwardJobsFreeIssueMaterialsReturnsServiceCountReq.md#runtime)
- [typeName](InwardJobsFreeIssueMaterialsReturnsServiceCountReq.md#typename)

### Methods

- [clone](InwardJobsFreeIssueMaterialsReturnsServiceCountReq.md#clone)
- [equals](InwardJobsFreeIssueMaterialsReturnsServiceCountReq.md#equals)
- [fromBinary](InwardJobsFreeIssueMaterialsReturnsServiceCountReq.md#frombinary)
- [fromJson](InwardJobsFreeIssueMaterialsReturnsServiceCountReq.md#fromjson)
- [fromJsonString](InwardJobsFreeIssueMaterialsReturnsServiceCountReq.md#fromjsonstring)
- [getType](InwardJobsFreeIssueMaterialsReturnsServiceCountReq.md#gettype)
- [toBinary](InwardJobsFreeIssueMaterialsReturnsServiceCountReq.md#tobinary)
- [toJSON](InwardJobsFreeIssueMaterialsReturnsServiceCountReq.md#tojson)
- [toJson](InwardJobsFreeIssueMaterialsReturnsServiceCountReq.md#tojson-1)
- [toJsonString](InwardJobsFreeIssueMaterialsReturnsServiceCountReq.md#tojsonstring)
- [equals](InwardJobsFreeIssueMaterialsReturnsServiceCountReq.md#equals-1)
- [fromBinary](InwardJobsFreeIssueMaterialsReturnsServiceCountReq.md#frombinary-1)
- [fromJson](InwardJobsFreeIssueMaterialsReturnsServiceCountReq.md#fromjson-1)
- [fromJsonString](InwardJobsFreeIssueMaterialsReturnsServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new InwardJobsFreeIssueMaterialsReturnsServiceCountReq**(`data?`): [`InwardJobsFreeIssueMaterialsReturnsServiceCountReq`](InwardJobsFreeIssueMaterialsReturnsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`InwardJobsFreeIssueMaterialsReturnsServiceCountReq`](InwardJobsFreeIssueMaterialsReturnsServiceCountReq.md)\> |

#### Returns

[`InwardJobsFreeIssueMaterialsReturnsServiceCountReq`](InwardJobsFreeIssueMaterialsReturnsServiceCountReq.md)

#### Overrides

Message\&lt;InwardJobsFreeIssueMaterialsReturnsServiceCountReq\&gt;.constructor

#### Defined in

src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1980

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 13;

#### Defined in

src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1893

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 12;

#### Defined in

src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1886

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 11;

#### Defined in

src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1879

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 14;

#### Defined in

src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1900

___

### buyerClientId

• **buyerClientId**: `bigint` = `protoInt64.zero`

The associated buyer client ID of the linked inward job

**`Generated`**

from field: uint64 buyer_client_id = 51;

#### Defined in

src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1971

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: uint64 completed_on_end = 16;

#### Defined in

src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1914

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: uint64 completed_on_start = 15;

#### Defined in

src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1907

___

### consigneeClientId

• **consigneeClientId**: `bigint` = `protoInt64.zero`

Inward Job related filters
The associated consignee client ID of the linked inward job

**`Generated`**

from field: uint64 consignee_client_id = 50;

#### Defined in

src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1964

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1844

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1837

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1865

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family

**`Generated`**

from field: uint64 family_id = 30;

#### Defined in

src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1956

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 21;

#### Defined in

src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1928

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1830

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The location ID of where the record is created

**`Generated`**

from field: uint64 location_id = 25;

#### Defined in

src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1949

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1858

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1851

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The ID of the associated project of the linked inward job

**`Generated`**

from field: uint64 project_id = 52;

#### Defined in

src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1978

___

### refFrom

• **refFrom**: [`INWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_REF_FROM`](../enums/INWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_REF_FROM.md) = `INWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_REF_FROM.INWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_REF_FROM_ANY_UNSPECIFIED`

The associated reference

**`Generated`**

from field: Scailo.INWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_REF_FROM ref_from = 22;

#### Defined in

src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1935

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: uint64 ref_id = 23;

#### Defined in

src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1942

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the inward job free issue material return

**`Generated`**

from field: string reference_id = 20;

#### Defined in

src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1921

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this inward job free issue material return

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1872

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1987

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1985

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.InwardJobsFreeIssueMaterialsReturnsServiceCountReq"``

#### Defined in

src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1986

## Methods

### clone

▸ **clone**(): [`InwardJobsFreeIssueMaterialsReturnsServiceCountReq`](InwardJobsFreeIssueMaterialsReturnsServiceCountReq.md)

Create a deep copy.

#### Returns

[`InwardJobsFreeIssueMaterialsReturnsServiceCountReq`](InwardJobsFreeIssueMaterialsReturnsServiceCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`InwardJobsFreeIssueMaterialsReturnsServiceCountReq`](InwardJobsFreeIssueMaterialsReturnsServiceCountReq.md) \| `PlainMessage`\<[`InwardJobsFreeIssueMaterialsReturnsServiceCountReq`](InwardJobsFreeIssueMaterialsReturnsServiceCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`InwardJobsFreeIssueMaterialsReturnsServiceCountReq`](InwardJobsFreeIssueMaterialsReturnsServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`InwardJobsFreeIssueMaterialsReturnsServiceCountReq`](InwardJobsFreeIssueMaterialsReturnsServiceCountReq.md)\>

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
| `a` | `undefined` \| [`InwardJobsFreeIssueMaterialsReturnsServiceCountReq`](InwardJobsFreeIssueMaterialsReturnsServiceCountReq.md) \| `PlainMessage`\<[`InwardJobsFreeIssueMaterialsReturnsServiceCountReq`](InwardJobsFreeIssueMaterialsReturnsServiceCountReq.md)\> |
| `b` | `undefined` \| [`InwardJobsFreeIssueMaterialsReturnsServiceCountReq`](InwardJobsFreeIssueMaterialsReturnsServiceCountReq.md) \| `PlainMessage`\<[`InwardJobsFreeIssueMaterialsReturnsServiceCountReq`](InwardJobsFreeIssueMaterialsReturnsServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:2024

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`InwardJobsFreeIssueMaterialsReturnsServiceCountReq`](InwardJobsFreeIssueMaterialsReturnsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`InwardJobsFreeIssueMaterialsReturnsServiceCountReq`](InwardJobsFreeIssueMaterialsReturnsServiceCountReq.md)

#### Defined in

src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:2012

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`InwardJobsFreeIssueMaterialsReturnsServiceCountReq`](InwardJobsFreeIssueMaterialsReturnsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InwardJobsFreeIssueMaterialsReturnsServiceCountReq`](InwardJobsFreeIssueMaterialsReturnsServiceCountReq.md)

#### Defined in

src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:2016

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`InwardJobsFreeIssueMaterialsReturnsServiceCountReq`](InwardJobsFreeIssueMaterialsReturnsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InwardJobsFreeIssueMaterialsReturnsServiceCountReq`](InwardJobsFreeIssueMaterialsReturnsServiceCountReq.md)

#### Defined in

src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:2020
