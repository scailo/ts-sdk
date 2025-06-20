[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / InwardJobsFreeIssueMaterialsServiceFilterReq

# Class: InwardJobsFreeIssueMaterialsServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Scailo.InwardJobsFreeIssueMaterialsServiceFilterReq

## Hierarchy

- `Message`\<[`InwardJobsFreeIssueMaterialsServiceFilterReq`](InwardJobsFreeIssueMaterialsServiceFilterReq.md)\>

  ↳ **`InwardJobsFreeIssueMaterialsServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](InwardJobsFreeIssueMaterialsServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](InwardJobsFreeIssueMaterialsServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](InwardJobsFreeIssueMaterialsServiceFilterReq.md#approvedonend)
- [approvedOnStart](InwardJobsFreeIssueMaterialsServiceFilterReq.md#approvedonstart)
- [approverRoleId](InwardJobsFreeIssueMaterialsServiceFilterReq.md#approverroleid)
- [buyerClientId](InwardJobsFreeIssueMaterialsServiceFilterReq.md#buyerclientid)
- [completedOnEnd](InwardJobsFreeIssueMaterialsServiceFilterReq.md#completedonend)
- [completedOnStart](InwardJobsFreeIssueMaterialsServiceFilterReq.md#completedonstart)
- [consigneeClientId](InwardJobsFreeIssueMaterialsServiceFilterReq.md#consigneeclientid)
- [count](InwardJobsFreeIssueMaterialsServiceFilterReq.md#count)
- [creationTimestampEnd](InwardJobsFreeIssueMaterialsServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](InwardJobsFreeIssueMaterialsServiceFilterReq.md#creationtimestampstart)
- [entityUuid](InwardJobsFreeIssueMaterialsServiceFilterReq.md#entityuuid)
- [familyId](InwardJobsFreeIssueMaterialsServiceFilterReq.md#familyid)
- [finalRefNumber](InwardJobsFreeIssueMaterialsServiceFilterReq.md#finalrefnumber)
- [formData](InwardJobsFreeIssueMaterialsServiceFilterReq.md#formdata)
- [isActive](InwardJobsFreeIssueMaterialsServiceFilterReq.md#isactive)
- [modificationTimestampEnd](InwardJobsFreeIssueMaterialsServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](InwardJobsFreeIssueMaterialsServiceFilterReq.md#modificationtimestampstart)
- [offset](InwardJobsFreeIssueMaterialsServiceFilterReq.md#offset)
- [projectId](InwardJobsFreeIssueMaterialsServiceFilterReq.md#projectid)
- [refFrom](InwardJobsFreeIssueMaterialsServiceFilterReq.md#reffrom)
- [refId](InwardJobsFreeIssueMaterialsServiceFilterReq.md#refid)
- [referenceId](InwardJobsFreeIssueMaterialsServiceFilterReq.md#referenceid)
- [sortKey](InwardJobsFreeIssueMaterialsServiceFilterReq.md#sortkey)
- [sortOrder](InwardJobsFreeIssueMaterialsServiceFilterReq.md#sortorder)
- [status](InwardJobsFreeIssueMaterialsServiceFilterReq.md#status)
- [fields](InwardJobsFreeIssueMaterialsServiceFilterReq.md#fields)
- [runtime](InwardJobsFreeIssueMaterialsServiceFilterReq.md#runtime)
- [typeName](InwardJobsFreeIssueMaterialsServiceFilterReq.md#typename)

### Methods

- [clone](InwardJobsFreeIssueMaterialsServiceFilterReq.md#clone)
- [equals](InwardJobsFreeIssueMaterialsServiceFilterReq.md#equals)
- [fromBinary](InwardJobsFreeIssueMaterialsServiceFilterReq.md#frombinary)
- [fromJson](InwardJobsFreeIssueMaterialsServiceFilterReq.md#fromjson)
- [fromJsonString](InwardJobsFreeIssueMaterialsServiceFilterReq.md#fromjsonstring)
- [getType](InwardJobsFreeIssueMaterialsServiceFilterReq.md#gettype)
- [toBinary](InwardJobsFreeIssueMaterialsServiceFilterReq.md#tobinary)
- [toJSON](InwardJobsFreeIssueMaterialsServiceFilterReq.md#tojson)
- [toJson](InwardJobsFreeIssueMaterialsServiceFilterReq.md#tojson-1)
- [toJsonString](InwardJobsFreeIssueMaterialsServiceFilterReq.md#tojsonstring)
- [equals](InwardJobsFreeIssueMaterialsServiceFilterReq.md#equals-1)
- [fromBinary](InwardJobsFreeIssueMaterialsServiceFilterReq.md#frombinary-1)
- [fromJson](InwardJobsFreeIssueMaterialsServiceFilterReq.md#fromjson-1)
- [fromJsonString](InwardJobsFreeIssueMaterialsServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new InwardJobsFreeIssueMaterialsServiceFilterReq**(`data?`): [`InwardJobsFreeIssueMaterialsServiceFilterReq`](InwardJobsFreeIssueMaterialsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`InwardJobsFreeIssueMaterialsServiceFilterReq`](InwardJobsFreeIssueMaterialsServiceFilterReq.md)\> |

#### Returns

[`InwardJobsFreeIssueMaterialsServiceFilterReq`](InwardJobsFreeIssueMaterialsServiceFilterReq.md)

#### Overrides

Message\&lt;InwardJobsFreeIssueMaterialsServiceFilterReq\&gt;.constructor

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:1759

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 13;

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:1672

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 12;

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:1665

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 11;

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:1658

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 14;

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:1679

___

### buyerClientId

• **buyerClientId**: `bigint` = `protoInt64.zero`

The associated buyer client ID of the linked inward job

**`Generated`**

from field: uint64 buyer_client_id = 51;

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:1743

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: uint64 completed_on_end = 16;

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:1693

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: uint64 completed_on_start = 15;

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:1686

___

### consigneeClientId

• **consigneeClientId**: `bigint` = `protoInt64.zero`

Inward Job related filters
The associated consignee client ID of the linked inward job

**`Generated`**

from field: uint64 consignee_client_id = 50;

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:1736

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:1588

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:1623

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:1616

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:1644

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family

**`Generated`**

from field: uint64 family_id = 30;

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:1728

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 21;

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:1707

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

The list of form data filters

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:1757

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:1581

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:1637

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:1630

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:1595

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The ID of the associated project of the linked inward job

**`Generated`**

from field: uint64 project_id = 52;

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:1750

___

### refFrom

• **refFrom**: [`INWARD_JOB_FREE_ISSUE_MATERIAL_REF_FROM`](../enums/INWARD_JOB_FREE_ISSUE_MATERIAL_REF_FROM.md) = `INWARD_JOB_FREE_ISSUE_MATERIAL_REF_FROM.INWARD_JOB_FREE_ISSUE_MATERIAL_REF_FROM_ANY_UNSPECIFIED`

The associated reference

**`Generated`**

from field: Scailo.INWARD_JOB_FREE_ISSUE_MATERIAL_REF_FROM ref_from = 22;

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:1714

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: uint64 ref_id = 23;

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:1721

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the inward job free issue material

**`Generated`**

from field: string reference_id = 20;

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:1700

___

### sortKey

• **sortKey**: [`INWARD_JOB_FREE_ISSUE_MATERIAL_SORT_KEY`](../enums/INWARD_JOB_FREE_ISSUE_MATERIAL_SORT_KEY.md) = `INWARD_JOB_FREE_ISSUE_MATERIAL_SORT_KEY.INWARD_JOB_FREE_ISSUE_MATERIAL_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.INWARD_JOB_FREE_ISSUE_MATERIAL_SORT_KEY sort_key = 5;

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:1609

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:1602

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this inward job free issue material

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:1651

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:1766

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:1764

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.InwardJobsFreeIssueMaterialsServiceFilterReq"``

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:1765

## Methods

### clone

▸ **clone**(): [`InwardJobsFreeIssueMaterialsServiceFilterReq`](InwardJobsFreeIssueMaterialsServiceFilterReq.md)

Create a deep copy.

#### Returns

[`InwardJobsFreeIssueMaterialsServiceFilterReq`](InwardJobsFreeIssueMaterialsServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`InwardJobsFreeIssueMaterialsServiceFilterReq`](InwardJobsFreeIssueMaterialsServiceFilterReq.md) \| `PlainMessage`\<[`InwardJobsFreeIssueMaterialsServiceFilterReq`](InwardJobsFreeIssueMaterialsServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`InwardJobsFreeIssueMaterialsServiceFilterReq`](InwardJobsFreeIssueMaterialsServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`InwardJobsFreeIssueMaterialsServiceFilterReq`](InwardJobsFreeIssueMaterialsServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`InwardJobsFreeIssueMaterialsServiceFilterReq`](InwardJobsFreeIssueMaterialsServiceFilterReq.md) \| `PlainMessage`\<[`InwardJobsFreeIssueMaterialsServiceFilterReq`](InwardJobsFreeIssueMaterialsServiceFilterReq.md)\> |
| `b` | `undefined` \| [`InwardJobsFreeIssueMaterialsServiceFilterReq`](InwardJobsFreeIssueMaterialsServiceFilterReq.md) \| `PlainMessage`\<[`InwardJobsFreeIssueMaterialsServiceFilterReq`](InwardJobsFreeIssueMaterialsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:1807

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`InwardJobsFreeIssueMaterialsServiceFilterReq`](InwardJobsFreeIssueMaterialsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`InwardJobsFreeIssueMaterialsServiceFilterReq`](InwardJobsFreeIssueMaterialsServiceFilterReq.md)

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:1795

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`InwardJobsFreeIssueMaterialsServiceFilterReq`](InwardJobsFreeIssueMaterialsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InwardJobsFreeIssueMaterialsServiceFilterReq`](InwardJobsFreeIssueMaterialsServiceFilterReq.md)

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:1799

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`InwardJobsFreeIssueMaterialsServiceFilterReq`](InwardJobsFreeIssueMaterialsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InwardJobsFreeIssueMaterialsServiceFilterReq`](InwardJobsFreeIssueMaterialsServiceFilterReq.md)

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:1803
