[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ProductionPlansServiceFilterReq

# Class: ProductionPlansServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Scailo.ProductionPlansServiceFilterReq

## Hierarchy

- `Message`\<[`ProductionPlansServiceFilterReq`](ProductionPlansServiceFilterReq.md)\>

  ↳ **`ProductionPlansServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](ProductionPlansServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](ProductionPlansServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](ProductionPlansServiceFilterReq.md#approvedonend)
- [approvedOnStart](ProductionPlansServiceFilterReq.md#approvedonstart)
- [approverRoleId](ProductionPlansServiceFilterReq.md#approverroleid)
- [buyerClientId](ProductionPlansServiceFilterReq.md#buyerclientid)
- [completedOnEnd](ProductionPlansServiceFilterReq.md#completedonend)
- [completedOnStart](ProductionPlansServiceFilterReq.md#completedonstart)
- [count](ProductionPlansServiceFilterReq.md#count)
- [creationTimestampEnd](ProductionPlansServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](ProductionPlansServiceFilterReq.md#creationtimestampstart)
- [endsAtEnd](ProductionPlansServiceFilterReq.md#endsatend)
- [endsAtStart](ProductionPlansServiceFilterReq.md#endsatstart)
- [entityUuid](ProductionPlansServiceFilterReq.md#entityuuid)
- [familyId](ProductionPlansServiceFilterReq.md#familyid)
- [finalRefNumber](ProductionPlansServiceFilterReq.md#finalrefnumber)
- [isActive](ProductionPlansServiceFilterReq.md#isactive)
- [locationId](ProductionPlansServiceFilterReq.md#locationid)
- [modificationTimestampEnd](ProductionPlansServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](ProductionPlansServiceFilterReq.md#modificationtimestampstart)
- [offset](ProductionPlansServiceFilterReq.md#offset)
- [projectId](ProductionPlansServiceFilterReq.md#projectid)
- [refFrom](ProductionPlansServiceFilterReq.md#reffrom)
- [refId](ProductionPlansServiceFilterReq.md#refid)
- [referenceId](ProductionPlansServiceFilterReq.md#referenceid)
- [sortKey](ProductionPlansServiceFilterReq.md#sortkey)
- [sortOrder](ProductionPlansServiceFilterReq.md#sortorder)
- [startsAtEnd](ProductionPlansServiceFilterReq.md#startsatend)
- [startsAtStart](ProductionPlansServiceFilterReq.md#startsatstart)
- [status](ProductionPlansServiceFilterReq.md#status)
- [supervisor](ProductionPlansServiceFilterReq.md#supervisor)
- [fields](ProductionPlansServiceFilterReq.md#fields)
- [runtime](ProductionPlansServiceFilterReq.md#runtime)
- [typeName](ProductionPlansServiceFilterReq.md#typename)

### Methods

- [clone](ProductionPlansServiceFilterReq.md#clone)
- [equals](ProductionPlansServiceFilterReq.md#equals)
- [fromBinary](ProductionPlansServiceFilterReq.md#frombinary)
- [fromJson](ProductionPlansServiceFilterReq.md#fromjson)
- [fromJsonString](ProductionPlansServiceFilterReq.md#fromjsonstring)
- [getType](ProductionPlansServiceFilterReq.md#gettype)
- [toBinary](ProductionPlansServiceFilterReq.md#tobinary)
- [toJSON](ProductionPlansServiceFilterReq.md#tojson)
- [toJson](ProductionPlansServiceFilterReq.md#tojson-1)
- [toJsonString](ProductionPlansServiceFilterReq.md#tojsonstring)
- [equals](ProductionPlansServiceFilterReq.md#equals-1)
- [fromBinary](ProductionPlansServiceFilterReq.md#frombinary-1)
- [fromJson](ProductionPlansServiceFilterReq.md#fromjson-1)
- [fromJsonString](ProductionPlansServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new ProductionPlansServiceFilterReq**(`data?`): [`ProductionPlansServiceFilterReq`](ProductionPlansServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ProductionPlansServiceFilterReq`](ProductionPlansServiceFilterReq.md)\> |

#### Returns

[`ProductionPlansServiceFilterReq`](ProductionPlansServiceFilterReq.md)

#### Overrides

Message\&lt;ProductionPlansServiceFilterReq\&gt;.constructor

#### Defined in

src/production_plans.scailo_pb.ts:1589

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 13;

#### Defined in

src/production_plans.scailo_pb.ts:1474

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 12;

#### Defined in

src/production_plans.scailo_pb.ts:1467

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 11;

#### Defined in

src/production_plans.scailo_pb.ts:1460

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 14;

#### Defined in

src/production_plans.scailo_pb.ts:1481

___

### buyerClientId

• **buyerClientId**: `bigint` = `protoInt64.zero`

Sales Order related filters
The associated buyer client ID of the linked sales order

**`Generated`**

from field: uint64 buyer_client_id = 80;

#### Defined in

src/production_plans.scailo_pb.ts:1587

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: uint64 completed_on_end = 16;

#### Defined in

src/production_plans.scailo_pb.ts:1495

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: uint64 completed_on_start = 15;

#### Defined in

src/production_plans.scailo_pb.ts:1488

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

src/production_plans.scailo_pb.ts:1390

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

src/production_plans.scailo_pb.ts:1425

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

src/production_plans.scailo_pb.ts:1418

___

### endsAtEnd

• **endsAtEnd**: `bigint` = `protoInt64.zero`

The end range of "ends at"

**`Generated`**

from field: uint64 ends_at_end = 33;

#### Defined in

src/production_plans.scailo_pb.ts:1565

___

### endsAtStart

• **endsAtStart**: `bigint` = `protoInt64.zero`

The start range of "ends at"

**`Generated`**

from field: uint64 ends_at_start = 32;

#### Defined in

src/production_plans.scailo_pb.ts:1558

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

src/production_plans.scailo_pb.ts:1446

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family

**`Generated`**

from field: uint64 family_id = 50;

#### Defined in

src/production_plans.scailo_pb.ts:1572

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 21;

#### Defined in

src/production_plans.scailo_pb.ts:1509

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/production_plans.scailo_pb.ts:1383

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The ID of the location

**`Generated`**

from field: uint64 location_id = 24;

#### Defined in

src/production_plans.scailo_pb.ts:1530

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

src/production_plans.scailo_pb.ts:1439

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

src/production_plans.scailo_pb.ts:1432

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

src/production_plans.scailo_pb.ts:1397

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The associated project ID

**`Generated`**

from field: uint64 project_id = 60;

#### Defined in

src/production_plans.scailo_pb.ts:1579

___

### refFrom

• **refFrom**: `string` = `""`

The associated reference

**`Generated`**

from field: string ref_from = 22;

#### Defined in

src/production_plans.scailo_pb.ts:1516

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: uint64 ref_id = 23;

#### Defined in

src/production_plans.scailo_pb.ts:1523

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the production plan

**`Generated`**

from field: string reference_id = 20;

#### Defined in

src/production_plans.scailo_pb.ts:1502

___

### sortKey

• **sortKey**: [`PRODUCTION_PLAN_SORT_KEY`](../enums/PRODUCTION_PLAN_SORT_KEY.md) = `PRODUCTION_PLAN_SORT_KEY.PRODUCTION_PLAN_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.PRODUCTION_PLAN_SORT_KEY sort_key = 5;

#### Defined in

src/production_plans.scailo_pb.ts:1411

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

src/production_plans.scailo_pb.ts:1404

___

### startsAtEnd

• **startsAtEnd**: `bigint` = `protoInt64.zero`

The end range of "starts at"

**`Generated`**

from field: uint64 starts_at_end = 31;

#### Defined in

src/production_plans.scailo_pb.ts:1551

___

### startsAtStart

• **startsAtStart**: `bigint` = `protoInt64.zero`

The start range of "starts at"

**`Generated`**

from field: uint64 starts_at_start = 30;

#### Defined in

src/production_plans.scailo_pb.ts:1544

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this production plan

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

src/production_plans.scailo_pb.ts:1453

___

### supervisor

• **supervisor**: `string` = `""`

The username of the supervisor

**`Generated`**

from field: string supervisor = 25;

#### Defined in

src/production_plans.scailo_pb.ts:1537

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/production_plans.scailo_pb.ts:1596

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/production_plans.scailo_pb.ts:1594

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ProductionPlansServiceFilterReq"``

#### Defined in

src/production_plans.scailo_pb.ts:1595

## Methods

### clone

▸ **clone**(): [`ProductionPlansServiceFilterReq`](ProductionPlansServiceFilterReq.md)

Create a deep copy.

#### Returns

[`ProductionPlansServiceFilterReq`](ProductionPlansServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`ProductionPlansServiceFilterReq`](ProductionPlansServiceFilterReq.md) \| `PlainMessage`\<[`ProductionPlansServiceFilterReq`](ProductionPlansServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`ProductionPlansServiceFilterReq`](ProductionPlansServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ProductionPlansServiceFilterReq`](ProductionPlansServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`ProductionPlansServiceFilterReq`](ProductionPlansServiceFilterReq.md) \| `PlainMessage`\<[`ProductionPlansServiceFilterReq`](ProductionPlansServiceFilterReq.md)\> |
| `b` | `undefined` \| [`ProductionPlansServiceFilterReq`](ProductionPlansServiceFilterReq.md) \| `PlainMessage`\<[`ProductionPlansServiceFilterReq`](ProductionPlansServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/production_plans.scailo_pb.ts:1641

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ProductionPlansServiceFilterReq`](ProductionPlansServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ProductionPlansServiceFilterReq`](ProductionPlansServiceFilterReq.md)

#### Defined in

src/production_plans.scailo_pb.ts:1629

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ProductionPlansServiceFilterReq`](ProductionPlansServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProductionPlansServiceFilterReq`](ProductionPlansServiceFilterReq.md)

#### Defined in

src/production_plans.scailo_pb.ts:1633

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ProductionPlansServiceFilterReq`](ProductionPlansServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProductionPlansServiceFilterReq`](ProductionPlansServiceFilterReq.md)

#### Defined in

src/production_plans.scailo_pb.ts:1637
