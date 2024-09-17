[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / InwardJobsServiceFilterReq

# Class: InwardJobsServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Scailo.InwardJobsServiceFilterReq

## Hierarchy

- `Message`\<[`InwardJobsServiceFilterReq`](InwardJobsServiceFilterReq.md)\>

  ↳ **`InwardJobsServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](InwardJobsServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](InwardJobsServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](InwardJobsServiceFilterReq.md#approvedonend)
- [approvedOnStart](InwardJobsServiceFilterReq.md#approvedonstart)
- [approverRoleId](InwardJobsServiceFilterReq.md#approverroleid)
- [buyerClientId](InwardJobsServiceFilterReq.md#buyerclientid)
- [completedOnEnd](InwardJobsServiceFilterReq.md#completedonend)
- [completedOnStart](InwardJobsServiceFilterReq.md#completedonstart)
- [consigneeClientId](InwardJobsServiceFilterReq.md#consigneeclientid)
- [count](InwardJobsServiceFilterReq.md#count)
- [creationTimestampEnd](InwardJobsServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](InwardJobsServiceFilterReq.md#creationtimestampstart)
- [deliveryDateEnd](InwardJobsServiceFilterReq.md#deliverydateend)
- [deliveryDateExact](InwardJobsServiceFilterReq.md#deliverydateexact)
- [deliveryDateStart](InwardJobsServiceFilterReq.md#deliverydatestart)
- [entityUuid](InwardJobsServiceFilterReq.md#entityuuid)
- [finalRefNumber](InwardJobsServiceFilterReq.md#finalrefnumber)
- [isActive](InwardJobsServiceFilterReq.md#isactive)
- [locationId](InwardJobsServiceFilterReq.md#locationid)
- [modificationTimestampEnd](InwardJobsServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](InwardJobsServiceFilterReq.md#modificationtimestampstart)
- [offset](InwardJobsServiceFilterReq.md#offset)
- [outwardFamilyId](InwardJobsServiceFilterReq.md#outwardfamilyid)
- [projectId](InwardJobsServiceFilterReq.md#projectid)
- [referenceId](InwardJobsServiceFilterReq.md#referenceid)
- [sortKey](InwardJobsServiceFilterReq.md#sortkey)
- [sortOrder](InwardJobsServiceFilterReq.md#sortorder)
- [status](InwardJobsServiceFilterReq.md#status)
- [fields](InwardJobsServiceFilterReq.md#fields)
- [runtime](InwardJobsServiceFilterReq.md#runtime)
- [typeName](InwardJobsServiceFilterReq.md#typename)

### Methods

- [clone](InwardJobsServiceFilterReq.md#clone)
- [equals](InwardJobsServiceFilterReq.md#equals)
- [fromBinary](InwardJobsServiceFilterReq.md#frombinary)
- [fromJson](InwardJobsServiceFilterReq.md#fromjson)
- [fromJsonString](InwardJobsServiceFilterReq.md#fromjsonstring)
- [getType](InwardJobsServiceFilterReq.md#gettype)
- [toBinary](InwardJobsServiceFilterReq.md#tobinary)
- [toJSON](InwardJobsServiceFilterReq.md#tojson)
- [toJson](InwardJobsServiceFilterReq.md#tojson-1)
- [toJsonString](InwardJobsServiceFilterReq.md#tojsonstring)
- [equals](InwardJobsServiceFilterReq.md#equals-1)
- [fromBinary](InwardJobsServiceFilterReq.md#frombinary-1)
- [fromJson](InwardJobsServiceFilterReq.md#fromjson-1)
- [fromJsonString](InwardJobsServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new InwardJobsServiceFilterReq**(`data?`): [`InwardJobsServiceFilterReq`](InwardJobsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`InwardJobsServiceFilterReq`](InwardJobsServiceFilterReq.md)\> |

#### Returns

[`InwardJobsServiceFilterReq`](InwardJobsServiceFilterReq.md)

#### Overrides

Message\&lt;InwardJobsServiceFilterReq\&gt;.constructor

#### Defined in

src/inward_jobs.scailo_pb.ts:1812

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 13;

#### Defined in

src/inward_jobs.scailo_pb.ts:1719

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 12;

#### Defined in

src/inward_jobs.scailo_pb.ts:1712

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 11;

#### Defined in

src/inward_jobs.scailo_pb.ts:1705

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 14;

#### Defined in

src/inward_jobs.scailo_pb.ts:1726

___

### buyerClientId

• **buyerClientId**: `bigint` = `protoInt64.zero`

The associated buyer client ID

**`Generated`**

from field: uint64 buyer_client_id = 23;

#### Defined in

src/inward_jobs.scailo_pb.ts:1789

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: uint64 completed_on_end = 16;

#### Defined in

src/inward_jobs.scailo_pb.ts:1740

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: uint64 completed_on_start = 15;

#### Defined in

src/inward_jobs.scailo_pb.ts:1733

___

### consigneeClientId

• **consigneeClientId**: `bigint` = `protoInt64.zero`

The associated consignee client ID

**`Generated`**

from field: uint64 consignee_client_id = 22;

#### Defined in

src/inward_jobs.scailo_pb.ts:1782

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

src/inward_jobs.scailo_pb.ts:1635

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

src/inward_jobs.scailo_pb.ts:1670

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

src/inward_jobs.scailo_pb.ts:1663

___

### deliveryDateEnd

• **deliveryDateEnd**: `string` = `""`

The end delivery date of any item in the inward job (on the basis of the delivery dates of the outward items)

**`Generated`**

from field: string delivery_date_end = 19;

#### Defined in

src/inward_jobs.scailo_pb.ts:1761

___

### deliveryDateExact

• **deliveryDateExact**: `string` = `""`

The exact delivery date of any item in the inward job (on the basis of the delivery dates of the outward items)

**`Generated`**

from field: string delivery_date_exact = 17;

#### Defined in

src/inward_jobs.scailo_pb.ts:1747

___

### deliveryDateStart

• **deliveryDateStart**: `string` = `""`

The start delivery date of any item in the inward job (on the basis of the delivery dates of the outward items)

**`Generated`**

from field: string delivery_date_start = 18;

#### Defined in

src/inward_jobs.scailo_pb.ts:1754

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

src/inward_jobs.scailo_pb.ts:1691

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 21;

#### Defined in

src/inward_jobs.scailo_pb.ts:1775

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/inward_jobs.scailo_pb.ts:1628

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The ID of the associated location

**`Generated`**

from field: uint64 location_id = 24;

#### Defined in

src/inward_jobs.scailo_pb.ts:1796

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

src/inward_jobs.scailo_pb.ts:1684

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

src/inward_jobs.scailo_pb.ts:1677

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

src/inward_jobs.scailo_pb.ts:1642

___

### outwardFamilyId

• **outwardFamilyId**: `bigint` = `protoInt64.zero`

The ID of the outward family

**`Generated`**

from field: uint64 outward_family_id = 30;

#### Defined in

src/inward_jobs.scailo_pb.ts:1810

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The ID of the associated project

**`Generated`**

from field: uint64 project_id = 25;

#### Defined in

src/inward_jobs.scailo_pb.ts:1803

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the inward job

**`Generated`**

from field: string reference_id = 20;

#### Defined in

src/inward_jobs.scailo_pb.ts:1768

___

### sortKey

• **sortKey**: [`INWARD_JOB_SORT_KEY`](../enums/INWARD_JOB_SORT_KEY.md) = `INWARD_JOB_SORT_KEY.INWARD_JOB_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.INWARD_JOB_SORT_KEY sort_key = 5;

#### Defined in

src/inward_jobs.scailo_pb.ts:1656

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

src/inward_jobs.scailo_pb.ts:1649

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this inward job

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

src/inward_jobs.scailo_pb.ts:1698

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/inward_jobs.scailo_pb.ts:1819

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/inward_jobs.scailo_pb.ts:1817

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.InwardJobsServiceFilterReq"``

#### Defined in

src/inward_jobs.scailo_pb.ts:1818

## Methods

### clone

▸ **clone**(): [`InwardJobsServiceFilterReq`](InwardJobsServiceFilterReq.md)

Create a deep copy.

#### Returns

[`InwardJobsServiceFilterReq`](InwardJobsServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`InwardJobsServiceFilterReq`](InwardJobsServiceFilterReq.md) \| `PlainMessage`\<[`InwardJobsServiceFilterReq`](InwardJobsServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`InwardJobsServiceFilterReq`](InwardJobsServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`InwardJobsServiceFilterReq`](InwardJobsServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`InwardJobsServiceFilterReq`](InwardJobsServiceFilterReq.md) \| `PlainMessage`\<[`InwardJobsServiceFilterReq`](InwardJobsServiceFilterReq.md)\> |
| `b` | `undefined` \| [`InwardJobsServiceFilterReq`](InwardJobsServiceFilterReq.md) \| `PlainMessage`\<[`InwardJobsServiceFilterReq`](InwardJobsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/inward_jobs.scailo_pb.ts:1861

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`InwardJobsServiceFilterReq`](InwardJobsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`InwardJobsServiceFilterReq`](InwardJobsServiceFilterReq.md)

#### Defined in

src/inward_jobs.scailo_pb.ts:1849

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`InwardJobsServiceFilterReq`](InwardJobsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InwardJobsServiceFilterReq`](InwardJobsServiceFilterReq.md)

#### Defined in

src/inward_jobs.scailo_pb.ts:1853

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`InwardJobsServiceFilterReq`](InwardJobsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InwardJobsServiceFilterReq`](InwardJobsServiceFilterReq.md)

#### Defined in

src/inward_jobs.scailo_pb.ts:1857
