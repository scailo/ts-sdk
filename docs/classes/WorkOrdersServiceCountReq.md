[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / WorkOrdersServiceCountReq

# Class: WorkOrdersServiceCountReq

Describes the base request payload of a count search

**`Generated`**

from message Scailo.WorkOrdersServiceCountReq

## Hierarchy

- `Message`\<[`WorkOrdersServiceCountReq`](WorkOrdersServiceCountReq.md)\>

  ↳ **`WorkOrdersServiceCountReq`**

## Table of contents

### Constructors

- [constructor](WorkOrdersServiceCountReq.md#constructor)

### Properties

- [approvedByUserId](WorkOrdersServiceCountReq.md#approvedbyuserid)
- [approvedOnEnd](WorkOrdersServiceCountReq.md#approvedonend)
- [approvedOnStart](WorkOrdersServiceCountReq.md#approvedonstart)
- [approverRoleId](WorkOrdersServiceCountReq.md#approverroleid)
- [buyerClientId](WorkOrdersServiceCountReq.md#buyerclientid)
- [completedOnEnd](WorkOrdersServiceCountReq.md#completedonend)
- [completedOnStart](WorkOrdersServiceCountReq.md#completedonstart)
- [consigneeClientId](WorkOrdersServiceCountReq.md#consigneeclientid)
- [creationTimestampEnd](WorkOrdersServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](WorkOrdersServiceCountReq.md#creationtimestampstart)
- [deliveryDateEnd](WorkOrdersServiceCountReq.md#deliverydateend)
- [deliveryDateExact](WorkOrdersServiceCountReq.md#deliverydateexact)
- [deliveryDateStart](WorkOrdersServiceCountReq.md#deliverydatestart)
- [entityUuid](WorkOrdersServiceCountReq.md#entityuuid)
- [familyId](WorkOrdersServiceCountReq.md#familyid)
- [finalRefNumber](WorkOrdersServiceCountReq.md#finalrefnumber)
- [isActive](WorkOrdersServiceCountReq.md#isactive)
- [locationId](WorkOrdersServiceCountReq.md#locationid)
- [modificationTimestampEnd](WorkOrdersServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](WorkOrdersServiceCountReq.md#modificationtimestampstart)
- [projectId](WorkOrdersServiceCountReq.md#projectid)
- [refFrom](WorkOrdersServiceCountReq.md#reffrom)
- [refId](WorkOrdersServiceCountReq.md#refid)
- [referenceId](WorkOrdersServiceCountReq.md#referenceid)
- [status](WorkOrdersServiceCountReq.md#status)
- [fields](WorkOrdersServiceCountReq.md#fields)
- [runtime](WorkOrdersServiceCountReq.md#runtime)
- [typeName](WorkOrdersServiceCountReq.md#typename)

### Methods

- [clone](WorkOrdersServiceCountReq.md#clone)
- [equals](WorkOrdersServiceCountReq.md#equals)
- [fromBinary](WorkOrdersServiceCountReq.md#frombinary)
- [fromJson](WorkOrdersServiceCountReq.md#fromjson)
- [fromJsonString](WorkOrdersServiceCountReq.md#fromjsonstring)
- [getType](WorkOrdersServiceCountReq.md#gettype)
- [toBinary](WorkOrdersServiceCountReq.md#tobinary)
- [toJSON](WorkOrdersServiceCountReq.md#tojson)
- [toJson](WorkOrdersServiceCountReq.md#tojson-1)
- [toJsonString](WorkOrdersServiceCountReq.md#tojsonstring)
- [equals](WorkOrdersServiceCountReq.md#equals-1)
- [fromBinary](WorkOrdersServiceCountReq.md#frombinary-1)
- [fromJson](WorkOrdersServiceCountReq.md#fromjson-1)
- [fromJsonString](WorkOrdersServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new WorkOrdersServiceCountReq**(`data?`): [`WorkOrdersServiceCountReq`](WorkOrdersServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`WorkOrdersServiceCountReq`](WorkOrdersServiceCountReq.md)\> |

#### Returns

[`WorkOrdersServiceCountReq`](WorkOrdersServiceCountReq.md)

#### Overrides

Message\&lt;WorkOrdersServiceCountReq\&gt;.constructor

#### Defined in

src/work_orders.scailo_pb.ts:1709

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 13;

#### Defined in

src/work_orders.scailo_pb.ts:1601

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 12;

#### Defined in

src/work_orders.scailo_pb.ts:1594

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 11;

#### Defined in

src/work_orders.scailo_pb.ts:1587

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 14;

#### Defined in

src/work_orders.scailo_pb.ts:1608

___

### buyerClientId

• **buyerClientId**: `bigint` = `protoInt64.zero`

The associated buyer client ID of the linked sales order

**`Generated`**

from field: uint64 buyer_client_id = 51;

#### Defined in

src/work_orders.scailo_pb.ts:1700

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: uint64 completed_on_end = 16;

#### Defined in

src/work_orders.scailo_pb.ts:1622

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: uint64 completed_on_start = 15;

#### Defined in

src/work_orders.scailo_pb.ts:1615

___

### consigneeClientId

• **consigneeClientId**: `bigint` = `protoInt64.zero`

Sales Order related filters
The associated consignee client ID of the linked sales order

**`Generated`**

from field: uint64 consignee_client_id = 50;

#### Defined in

src/work_orders.scailo_pb.ts:1693

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

src/work_orders.scailo_pb.ts:1552

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

src/work_orders.scailo_pb.ts:1545

___

### deliveryDateEnd

• **deliveryDateEnd**: `string` = `""`

The end delivery date of any item in the work order

**`Generated`**

from field: string delivery_date_end = 19;

#### Defined in

src/work_orders.scailo_pb.ts:1643

___

### deliveryDateExact

• **deliveryDateExact**: `string` = `""`

The exact delivery date of any item in the work order

**`Generated`**

from field: string delivery_date_exact = 17;

#### Defined in

src/work_orders.scailo_pb.ts:1629

___

### deliveryDateStart

• **deliveryDateStart**: `string` = `""`

The start delivery date of any item in the work order

**`Generated`**

from field: string delivery_date_start = 18;

#### Defined in

src/work_orders.scailo_pb.ts:1636

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

src/work_orders.scailo_pb.ts:1573

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family

**`Generated`**

from field: uint64 family_id = 40;

#### Defined in

src/work_orders.scailo_pb.ts:1685

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 21;

#### Defined in

src/work_orders.scailo_pb.ts:1657

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/work_orders.scailo_pb.ts:1538

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The ID of the location

**`Generated`**

from field: uint64 location_id = 24;

#### Defined in

src/work_orders.scailo_pb.ts:1678

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

src/work_orders.scailo_pb.ts:1566

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

src/work_orders.scailo_pb.ts:1559

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The ID of the associated project of the linked sales order

**`Generated`**

from field: uint64 project_id = 52;

#### Defined in

src/work_orders.scailo_pb.ts:1707

___

### refFrom

• **refFrom**: [`WORK_ORDER_REF_FROM`](../enums/WORK_ORDER_REF_FROM.md) = `WORK_ORDER_REF_FROM.WORK_ORDER_REF_FROM_ANY_UNSPECIFIED`

The associated reference

**`Generated`**

from field: Scailo.WORK_ORDER_REF_FROM ref_from = 22;

#### Defined in

src/work_orders.scailo_pb.ts:1664

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: uint64 ref_id = 23;

#### Defined in

src/work_orders.scailo_pb.ts:1671

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the work order

**`Generated`**

from field: string reference_id = 20;

#### Defined in

src/work_orders.scailo_pb.ts:1650

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this work order

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

src/work_orders.scailo_pb.ts:1580

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/work_orders.scailo_pb.ts:1716

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/work_orders.scailo_pb.ts:1714

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.WorkOrdersServiceCountReq"``

#### Defined in

src/work_orders.scailo_pb.ts:1715

## Methods

### clone

▸ **clone**(): [`WorkOrdersServiceCountReq`](WorkOrdersServiceCountReq.md)

Create a deep copy.

#### Returns

[`WorkOrdersServiceCountReq`](WorkOrdersServiceCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`WorkOrdersServiceCountReq`](WorkOrdersServiceCountReq.md) \| `PlainMessage`\<[`WorkOrdersServiceCountReq`](WorkOrdersServiceCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`WorkOrdersServiceCountReq`](WorkOrdersServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`WorkOrdersServiceCountReq`](WorkOrdersServiceCountReq.md)\>

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
| `a` | `undefined` \| [`WorkOrdersServiceCountReq`](WorkOrdersServiceCountReq.md) \| `PlainMessage`\<[`WorkOrdersServiceCountReq`](WorkOrdersServiceCountReq.md)\> |
| `b` | `undefined` \| [`WorkOrdersServiceCountReq`](WorkOrdersServiceCountReq.md) \| `PlainMessage`\<[`WorkOrdersServiceCountReq`](WorkOrdersServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/work_orders.scailo_pb.ts:1756

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`WorkOrdersServiceCountReq`](WorkOrdersServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`WorkOrdersServiceCountReq`](WorkOrdersServiceCountReq.md)

#### Defined in

src/work_orders.scailo_pb.ts:1744

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`WorkOrdersServiceCountReq`](WorkOrdersServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`WorkOrdersServiceCountReq`](WorkOrdersServiceCountReq.md)

#### Defined in

src/work_orders.scailo_pb.ts:1748

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`WorkOrdersServiceCountReq`](WorkOrdersServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`WorkOrdersServiceCountReq`](WorkOrdersServiceCountReq.md)

#### Defined in

src/work_orders.scailo_pb.ts:1752
