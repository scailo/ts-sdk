[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / InwardJobsFreeIssueMaterialsServiceCountReq

# Class: InwardJobsFreeIssueMaterialsServiceCountReq

Describes the base request payload of a count search

**`Generated`**

from message Scailo.InwardJobsFreeIssueMaterialsServiceCountReq

## Hierarchy

- `Message`\<[`InwardJobsFreeIssueMaterialsServiceCountReq`](InwardJobsFreeIssueMaterialsServiceCountReq.md)\>

  ↳ **`InwardJobsFreeIssueMaterialsServiceCountReq`**

## Table of contents

### Constructors

- [constructor](InwardJobsFreeIssueMaterialsServiceCountReq.md#constructor)

### Properties

- [approvedByUserId](InwardJobsFreeIssueMaterialsServiceCountReq.md#approvedbyuserid)
- [approvedOnEnd](InwardJobsFreeIssueMaterialsServiceCountReq.md#approvedonend)
- [approvedOnStart](InwardJobsFreeIssueMaterialsServiceCountReq.md#approvedonstart)
- [approverRoleId](InwardJobsFreeIssueMaterialsServiceCountReq.md#approverroleid)
- [buyerClientId](InwardJobsFreeIssueMaterialsServiceCountReq.md#buyerclientid)
- [completedOnEnd](InwardJobsFreeIssueMaterialsServiceCountReq.md#completedonend)
- [completedOnStart](InwardJobsFreeIssueMaterialsServiceCountReq.md#completedonstart)
- [consigneeClientId](InwardJobsFreeIssueMaterialsServiceCountReq.md#consigneeclientid)
- [creationTimestampEnd](InwardJobsFreeIssueMaterialsServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](InwardJobsFreeIssueMaterialsServiceCountReq.md#creationtimestampstart)
- [entityUuid](InwardJobsFreeIssueMaterialsServiceCountReq.md#entityuuid)
- [familyId](InwardJobsFreeIssueMaterialsServiceCountReq.md#familyid)
- [finalRefNumber](InwardJobsFreeIssueMaterialsServiceCountReq.md#finalrefnumber)
- [isActive](InwardJobsFreeIssueMaterialsServiceCountReq.md#isactive)
- [modificationTimestampEnd](InwardJobsFreeIssueMaterialsServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](InwardJobsFreeIssueMaterialsServiceCountReq.md#modificationtimestampstart)
- [projectId](InwardJobsFreeIssueMaterialsServiceCountReq.md#projectid)
- [refFrom](InwardJobsFreeIssueMaterialsServiceCountReq.md#reffrom)
- [refId](InwardJobsFreeIssueMaterialsServiceCountReq.md#refid)
- [referenceId](InwardJobsFreeIssueMaterialsServiceCountReq.md#referenceid)
- [status](InwardJobsFreeIssueMaterialsServiceCountReq.md#status)
- [fields](InwardJobsFreeIssueMaterialsServiceCountReq.md#fields)
- [runtime](InwardJobsFreeIssueMaterialsServiceCountReq.md#runtime)
- [typeName](InwardJobsFreeIssueMaterialsServiceCountReq.md#typename)

### Methods

- [clone](InwardJobsFreeIssueMaterialsServiceCountReq.md#clone)
- [equals](InwardJobsFreeIssueMaterialsServiceCountReq.md#equals)
- [fromBinary](InwardJobsFreeIssueMaterialsServiceCountReq.md#frombinary)
- [fromJson](InwardJobsFreeIssueMaterialsServiceCountReq.md#fromjson)
- [fromJsonString](InwardJobsFreeIssueMaterialsServiceCountReq.md#fromjsonstring)
- [getType](InwardJobsFreeIssueMaterialsServiceCountReq.md#gettype)
- [toBinary](InwardJobsFreeIssueMaterialsServiceCountReq.md#tobinary)
- [toJSON](InwardJobsFreeIssueMaterialsServiceCountReq.md#tojson)
- [toJson](InwardJobsFreeIssueMaterialsServiceCountReq.md#tojson-1)
- [toJsonString](InwardJobsFreeIssueMaterialsServiceCountReq.md#tojsonstring)
- [equals](InwardJobsFreeIssueMaterialsServiceCountReq.md#equals-1)
- [fromBinary](InwardJobsFreeIssueMaterialsServiceCountReq.md#frombinary-1)
- [fromJson](InwardJobsFreeIssueMaterialsServiceCountReq.md#fromjson-1)
- [fromJsonString](InwardJobsFreeIssueMaterialsServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new InwardJobsFreeIssueMaterialsServiceCountReq**(`data?`): [`InwardJobsFreeIssueMaterialsServiceCountReq`](InwardJobsFreeIssueMaterialsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`InwardJobsFreeIssueMaterialsServiceCountReq`](InwardJobsFreeIssueMaterialsServiceCountReq.md)\> |

#### Returns

[`InwardJobsFreeIssueMaterialsServiceCountReq`](InwardJobsFreeIssueMaterialsServiceCountReq.md)

#### Overrides

Message\&lt;InwardJobsFreeIssueMaterialsServiceCountReq\&gt;.constructor

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:1959

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 13;

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:1879

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 12;

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:1872

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 11;

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:1865

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 14;

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:1886

___

### buyerClientId

• **buyerClientId**: `bigint` = `protoInt64.zero`

The associated buyer client ID of the linked inward job

**`Generated`**

from field: uint64 buyer_client_id = 51;

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:1950

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: uint64 completed_on_end = 16;

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:1900

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: uint64 completed_on_start = 15;

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:1893

___

### consigneeClientId

• **consigneeClientId**: `bigint` = `protoInt64.zero`

Inward Job related filters
The associated consignee client ID of the linked inward job

**`Generated`**

from field: uint64 consignee_client_id = 50;

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:1943

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:1830

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:1823

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:1851

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family

**`Generated`**

from field: uint64 family_id = 30;

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:1935

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 21;

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:1914

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:1816

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:1844

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:1837

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The ID of the associated project of the linked inward job

**`Generated`**

from field: uint64 project_id = 52;

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:1957

___

### refFrom

• **refFrom**: [`INWARD_JOB_FREE_ISSUE_MATERIAL_REF_FROM`](../enums/INWARD_JOB_FREE_ISSUE_MATERIAL_REF_FROM.md) = `INWARD_JOB_FREE_ISSUE_MATERIAL_REF_FROM.INWARD_JOB_FREE_ISSUE_MATERIAL_REF_FROM_ANY_UNSPECIFIED`

The associated reference

**`Generated`**

from field: Scailo.INWARD_JOB_FREE_ISSUE_MATERIAL_REF_FROM ref_from = 22;

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:1921

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: uint64 ref_id = 23;

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:1928

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the inward job free issue material

**`Generated`**

from field: string reference_id = 20;

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:1907

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this inward job free issue material

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:1858

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:1966

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:1964

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.InwardJobsFreeIssueMaterialsServiceCountReq"``

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:1965

## Methods

### clone

▸ **clone**(): [`InwardJobsFreeIssueMaterialsServiceCountReq`](InwardJobsFreeIssueMaterialsServiceCountReq.md)

Create a deep copy.

#### Returns

[`InwardJobsFreeIssueMaterialsServiceCountReq`](InwardJobsFreeIssueMaterialsServiceCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`InwardJobsFreeIssueMaterialsServiceCountReq`](InwardJobsFreeIssueMaterialsServiceCountReq.md) \| `PlainMessage`\<[`InwardJobsFreeIssueMaterialsServiceCountReq`](InwardJobsFreeIssueMaterialsServiceCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`InwardJobsFreeIssueMaterialsServiceCountReq`](InwardJobsFreeIssueMaterialsServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`InwardJobsFreeIssueMaterialsServiceCountReq`](InwardJobsFreeIssueMaterialsServiceCountReq.md)\>

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
| `a` | `undefined` \| [`InwardJobsFreeIssueMaterialsServiceCountReq`](InwardJobsFreeIssueMaterialsServiceCountReq.md) \| `PlainMessage`\<[`InwardJobsFreeIssueMaterialsServiceCountReq`](InwardJobsFreeIssueMaterialsServiceCountReq.md)\> |
| `b` | `undefined` \| [`InwardJobsFreeIssueMaterialsServiceCountReq`](InwardJobsFreeIssueMaterialsServiceCountReq.md) \| `PlainMessage`\<[`InwardJobsFreeIssueMaterialsServiceCountReq`](InwardJobsFreeIssueMaterialsServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:2002

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`InwardJobsFreeIssueMaterialsServiceCountReq`](InwardJobsFreeIssueMaterialsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`InwardJobsFreeIssueMaterialsServiceCountReq`](InwardJobsFreeIssueMaterialsServiceCountReq.md)

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:1990

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`InwardJobsFreeIssueMaterialsServiceCountReq`](InwardJobsFreeIssueMaterialsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InwardJobsFreeIssueMaterialsServiceCountReq`](InwardJobsFreeIssueMaterialsServiceCountReq.md)

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:1994

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`InwardJobsFreeIssueMaterialsServiceCountReq`](InwardJobsFreeIssueMaterialsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InwardJobsFreeIssueMaterialsServiceCountReq`](InwardJobsFreeIssueMaterialsServiceCountReq.md)

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:1998
