[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / InwardJobsFreeIssueMaterialsReturnsServiceFilterReq

# Class: InwardJobsFreeIssueMaterialsReturnsServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Scailo.InwardJobsFreeIssueMaterialsReturnsServiceFilterReq

## Hierarchy

- `Message`\<[`InwardJobsFreeIssueMaterialsReturnsServiceFilterReq`](InwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md)\>

  ↳ **`InwardJobsFreeIssueMaterialsReturnsServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](InwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](InwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](InwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#approvedonend)
- [approvedOnStart](InwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#approvedonstart)
- [approverRoleId](InwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#approverroleid)
- [buyerClientId](InwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#buyerclientid)
- [completedOnEnd](InwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#completedonend)
- [completedOnStart](InwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#completedonstart)
- [consigneeClientId](InwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#consigneeclientid)
- [count](InwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#count)
- [creationTimestampEnd](InwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](InwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#creationtimestampstart)
- [entityUuid](InwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#entityuuid)
- [familyId](InwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#familyid)
- [finalRefNumber](InwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#finalrefnumber)
- [isActive](InwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#isactive)
- [locationId](InwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#locationid)
- [modificationTimestampEnd](InwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](InwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#modificationtimestampstart)
- [offset](InwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#offset)
- [projectId](InwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#projectid)
- [refFrom](InwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#reffrom)
- [refId](InwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#refid)
- [referenceId](InwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#referenceid)
- [sortKey](InwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#sortkey)
- [sortOrder](InwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#sortorder)
- [status](InwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#status)
- [fields](InwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#fields)
- [runtime](InwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#runtime)
- [typeName](InwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#typename)

### Methods

- [clone](InwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#clone)
- [equals](InwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#equals)
- [fromBinary](InwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#frombinary)
- [fromJson](InwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#fromjson)
- [fromJsonString](InwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#fromjsonstring)
- [getType](InwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#gettype)
- [toBinary](InwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#tobinary)
- [toJSON](InwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#tojson)
- [toJson](InwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#tojson-1)
- [toJsonString](InwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#tojsonstring)
- [equals](InwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#equals-1)
- [fromBinary](InwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#frombinary-1)
- [fromJson](InwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#fromjson-1)
- [fromJsonString](InwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new InwardJobsFreeIssueMaterialsReturnsServiceFilterReq**(`data?`): [`InwardJobsFreeIssueMaterialsReturnsServiceFilterReq`](InwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`InwardJobsFreeIssueMaterialsReturnsServiceFilterReq`](InwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md)\> |

#### Returns

[`InwardJobsFreeIssueMaterialsReturnsServiceFilterReq`](InwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md)

#### Overrides

Message\&lt;InwardJobsFreeIssueMaterialsReturnsServiceFilterReq\&gt;.constructor

#### Defined in

src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1688

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 13;

#### Defined in

src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1601

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 12;

#### Defined in

src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1594

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 11;

#### Defined in

src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1587

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 14;

#### Defined in

src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1608

___

### buyerClientId

• **buyerClientId**: `bigint` = `protoInt64.zero`

The associated buyer client ID of the linked inward job

**`Generated`**

from field: uint64 buyer_client_id = 51;

#### Defined in

src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1679

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: uint64 completed_on_end = 16;

#### Defined in

src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1622

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: uint64 completed_on_start = 15;

#### Defined in

src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1615

___

### consigneeClientId

• **consigneeClientId**: `bigint` = `protoInt64.zero`

Inward Job related filters
The associated consignee client ID of the linked inward job

**`Generated`**

from field: uint64 consignee_client_id = 50;

#### Defined in

src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1672

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1517

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1552

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1545

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1573

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family

**`Generated`**

from field: uint64 family_id = 30;

#### Defined in

src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1664

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 21;

#### Defined in

src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1636

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1510

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The location ID of where the record is created

**`Generated`**

from field: uint64 location_id = 25;

#### Defined in

src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1657

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1566

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1559

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1524

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The ID of the associated project of the linked inward job

**`Generated`**

from field: uint64 project_id = 52;

#### Defined in

src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1686

___

### refFrom

• **refFrom**: `string` = `""`

The associated reference

**`Generated`**

from field: string ref_from = 22;

#### Defined in

src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1643

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: uint64 ref_id = 23;

#### Defined in

src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1650

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the inward job free issue material return

**`Generated`**

from field: string reference_id = 20;

#### Defined in

src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1629

___

### sortKey

• **sortKey**: [`INWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_SORT_KEY`](../enums/INWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_SORT_KEY.md) = `INWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_SORT_KEY.INWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.INWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_SORT_KEY sort_key = 5;

#### Defined in

src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1538

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1531

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this inward job free issue material return

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1580

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1695

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1693

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.InwardJobsFreeIssueMaterialsReturnsServiceFilterReq"``

#### Defined in

src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1694

## Methods

### clone

▸ **clone**(): [`InwardJobsFreeIssueMaterialsReturnsServiceFilterReq`](InwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md)

Create a deep copy.

#### Returns

[`InwardJobsFreeIssueMaterialsReturnsServiceFilterReq`](InwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`InwardJobsFreeIssueMaterialsReturnsServiceFilterReq`](InwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md) \| `PlainMessage`\<[`InwardJobsFreeIssueMaterialsReturnsServiceFilterReq`](InwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`InwardJobsFreeIssueMaterialsReturnsServiceFilterReq`](InwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`InwardJobsFreeIssueMaterialsReturnsServiceFilterReq`](InwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`InwardJobsFreeIssueMaterialsReturnsServiceFilterReq`](InwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md) \| `PlainMessage`\<[`InwardJobsFreeIssueMaterialsReturnsServiceFilterReq`](InwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md)\> |
| `b` | `undefined` \| [`InwardJobsFreeIssueMaterialsReturnsServiceFilterReq`](InwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md) \| `PlainMessage`\<[`InwardJobsFreeIssueMaterialsReturnsServiceFilterReq`](InwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1736

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`InwardJobsFreeIssueMaterialsReturnsServiceFilterReq`](InwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`InwardJobsFreeIssueMaterialsReturnsServiceFilterReq`](InwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md)

#### Defined in

src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1724

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`InwardJobsFreeIssueMaterialsReturnsServiceFilterReq`](InwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InwardJobsFreeIssueMaterialsReturnsServiceFilterReq`](InwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md)

#### Defined in

src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1728

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`InwardJobsFreeIssueMaterialsReturnsServiceFilterReq`](InwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InwardJobsFreeIssueMaterialsReturnsServiceFilterReq`](InwardJobsFreeIssueMaterialsReturnsServiceFilterReq.md)

#### Defined in

src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1732
