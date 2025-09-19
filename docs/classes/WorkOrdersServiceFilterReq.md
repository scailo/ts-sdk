[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / WorkOrdersServiceFilterReq

# Class: WorkOrdersServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Scailo.WorkOrdersServiceFilterReq

## Hierarchy

- `Message`\<[`WorkOrdersServiceFilterReq`](WorkOrdersServiceFilterReq.md)\>

  ↳ **`WorkOrdersServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](WorkOrdersServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](WorkOrdersServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](WorkOrdersServiceFilterReq.md#approvedonend)
- [approvedOnStart](WorkOrdersServiceFilterReq.md#approvedonstart)
- [approverRoleId](WorkOrdersServiceFilterReq.md#approverroleid)
- [buyerClientId](WorkOrdersServiceFilterReq.md#buyerclientid)
- [completedOnEnd](WorkOrdersServiceFilterReq.md#completedonend)
- [completedOnStart](WorkOrdersServiceFilterReq.md#completedonstart)
- [consigneeClientId](WorkOrdersServiceFilterReq.md#consigneeclientid)
- [count](WorkOrdersServiceFilterReq.md#count)
- [creationTimestampEnd](WorkOrdersServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](WorkOrdersServiceFilterReq.md#creationtimestampstart)
- [deliveryDateEnd](WorkOrdersServiceFilterReq.md#deliverydateend)
- [deliveryDateExact](WorkOrdersServiceFilterReq.md#deliverydateexact)
- [deliveryDateStart](WorkOrdersServiceFilterReq.md#deliverydatestart)
- [entityUuid](WorkOrdersServiceFilterReq.md#entityuuid)
- [familyId](WorkOrdersServiceFilterReq.md#familyid)
- [finalRefNumber](WorkOrdersServiceFilterReq.md#finalrefnumber)
- [formData](WorkOrdersServiceFilterReq.md#formdata)
- [isActive](WorkOrdersServiceFilterReq.md#isactive)
- [locationId](WorkOrdersServiceFilterReq.md#locationid)
- [modificationTimestampEnd](WorkOrdersServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](WorkOrdersServiceFilterReq.md#modificationtimestampstart)
- [offset](WorkOrdersServiceFilterReq.md#offset)
- [projectId](WorkOrdersServiceFilterReq.md#projectid)
- [refFrom](WorkOrdersServiceFilterReq.md#reffrom)
- [refId](WorkOrdersServiceFilterReq.md#refid)
- [referenceId](WorkOrdersServiceFilterReq.md#referenceid)
- [sortKey](WorkOrdersServiceFilterReq.md#sortkey)
- [sortOrder](WorkOrdersServiceFilterReq.md#sortorder)
- [status](WorkOrdersServiceFilterReq.md#status)
- [fields](WorkOrdersServiceFilterReq.md#fields)
- [runtime](WorkOrdersServiceFilterReq.md#runtime)
- [typeName](WorkOrdersServiceFilterReq.md#typename)

### Methods

- [clone](WorkOrdersServiceFilterReq.md#clone)
- [equals](WorkOrdersServiceFilterReq.md#equals)
- [fromBinary](WorkOrdersServiceFilterReq.md#frombinary)
- [fromJson](WorkOrdersServiceFilterReq.md#fromjson)
- [fromJsonString](WorkOrdersServiceFilterReq.md#fromjsonstring)
- [getType](WorkOrdersServiceFilterReq.md#gettype)
- [toBinary](WorkOrdersServiceFilterReq.md#tobinary)
- [toJSON](WorkOrdersServiceFilterReq.md#tojson)
- [toJson](WorkOrdersServiceFilterReq.md#tojson-1)
- [toJsonString](WorkOrdersServiceFilterReq.md#tojsonstring)
- [equals](WorkOrdersServiceFilterReq.md#equals-1)
- [fromBinary](WorkOrdersServiceFilterReq.md#frombinary-1)
- [fromJson](WorkOrdersServiceFilterReq.md#fromjson-1)
- [fromJsonString](WorkOrdersServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new WorkOrdersServiceFilterReq**(`data?`): [`WorkOrdersServiceFilterReq`](WorkOrdersServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`WorkOrdersServiceFilterReq`](WorkOrdersServiceFilterReq.md)\> |

#### Returns

[`WorkOrdersServiceFilterReq`](WorkOrdersServiceFilterReq.md)

#### Overrides

Message\&lt;WorkOrdersServiceFilterReq\&gt;.constructor

#### Defined in

[src/work_orders.scailo_pb.ts:1493](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/work_orders.scailo_pb.ts#L1493)

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 13;

#### Defined in

[src/work_orders.scailo_pb.ts:1378](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/work_orders.scailo_pb.ts#L1378)

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 12;

#### Defined in

[src/work_orders.scailo_pb.ts:1371](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/work_orders.scailo_pb.ts#L1371)

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 11;

#### Defined in

[src/work_orders.scailo_pb.ts:1364](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/work_orders.scailo_pb.ts#L1364)

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 14;

#### Defined in

[src/work_orders.scailo_pb.ts:1385](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/work_orders.scailo_pb.ts#L1385)

___

### buyerClientId

• **buyerClientId**: `bigint` = `protoInt64.zero`

The associated buyer client ID of the linked sales order

**`Generated`**

from field: uint64 buyer_client_id = 51;

#### Defined in

[src/work_orders.scailo_pb.ts:1477](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/work_orders.scailo_pb.ts#L1477)

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: uint64 completed_on_end = 16;

#### Defined in

[src/work_orders.scailo_pb.ts:1399](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/work_orders.scailo_pb.ts#L1399)

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: uint64 completed_on_start = 15;

#### Defined in

[src/work_orders.scailo_pb.ts:1392](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/work_orders.scailo_pb.ts#L1392)

___

### consigneeClientId

• **consigneeClientId**: `bigint` = `protoInt64.zero`

Sales Order related filters
The associated consignee client ID of the linked sales order

**`Generated`**

from field: uint64 consignee_client_id = 50;

#### Defined in

[src/work_orders.scailo_pb.ts:1470](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/work_orders.scailo_pb.ts#L1470)

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/work_orders.scailo_pb.ts:1294](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/work_orders.scailo_pb.ts#L1294)

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

[src/work_orders.scailo_pb.ts:1329](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/work_orders.scailo_pb.ts#L1329)

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

[src/work_orders.scailo_pb.ts:1322](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/work_orders.scailo_pb.ts#L1322)

___

### deliveryDateEnd

• **deliveryDateEnd**: `string` = `""`

The end delivery date of any item in the work order

**`Generated`**

from field: string delivery_date_end = 19;

#### Defined in

[src/work_orders.scailo_pb.ts:1420](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/work_orders.scailo_pb.ts#L1420)

___

### deliveryDateExact

• **deliveryDateExact**: `string` = `""`

The exact delivery date of any item in the work order

**`Generated`**

from field: string delivery_date_exact = 17;

#### Defined in

[src/work_orders.scailo_pb.ts:1406](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/work_orders.scailo_pb.ts#L1406)

___

### deliveryDateStart

• **deliveryDateStart**: `string` = `""`

The start delivery date of any item in the work order

**`Generated`**

from field: string delivery_date_start = 18;

#### Defined in

[src/work_orders.scailo_pb.ts:1413](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/work_orders.scailo_pb.ts#L1413)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

[src/work_orders.scailo_pb.ts:1350](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/work_orders.scailo_pb.ts#L1350)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family

**`Generated`**

from field: uint64 family_id = 40;

#### Defined in

[src/work_orders.scailo_pb.ts:1462](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/work_orders.scailo_pb.ts#L1462)

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 21;

#### Defined in

[src/work_orders.scailo_pb.ts:1434](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/work_orders.scailo_pb.ts#L1434)

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

The list of form data filters

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

[src/work_orders.scailo_pb.ts:1491](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/work_orders.scailo_pb.ts#L1491)

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/work_orders.scailo_pb.ts:1287](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/work_orders.scailo_pb.ts#L1287)

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The ID of the location

**`Generated`**

from field: uint64 location_id = 24;

#### Defined in

[src/work_orders.scailo_pb.ts:1455](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/work_orders.scailo_pb.ts#L1455)

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

[src/work_orders.scailo_pb.ts:1343](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/work_orders.scailo_pb.ts#L1343)

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

[src/work_orders.scailo_pb.ts:1336](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/work_orders.scailo_pb.ts#L1336)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

[src/work_orders.scailo_pb.ts:1301](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/work_orders.scailo_pb.ts#L1301)

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The ID of the associated project of the linked sales order

**`Generated`**

from field: uint64 project_id = 52;

#### Defined in

[src/work_orders.scailo_pb.ts:1484](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/work_orders.scailo_pb.ts#L1484)

___

### refFrom

• **refFrom**: [`WORK_ORDER_REF_FROM`](../enums/WORK_ORDER_REF_FROM.md) = `WORK_ORDER_REF_FROM.WORK_ORDER_REF_FROM_ANY_UNSPECIFIED`

The associated reference

**`Generated`**

from field: Scailo.WORK_ORDER_REF_FROM ref_from = 22;

#### Defined in

[src/work_orders.scailo_pb.ts:1441](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/work_orders.scailo_pb.ts#L1441)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: uint64 ref_id = 23;

#### Defined in

[src/work_orders.scailo_pb.ts:1448](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/work_orders.scailo_pb.ts#L1448)

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the work order

**`Generated`**

from field: string reference_id = 20;

#### Defined in

[src/work_orders.scailo_pb.ts:1427](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/work_orders.scailo_pb.ts#L1427)

___

### sortKey

• **sortKey**: [`WORK_ORDER_SORT_KEY`](../enums/WORK_ORDER_SORT_KEY.md) = `WORK_ORDER_SORT_KEY.WORK_ORDER_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.WORK_ORDER_SORT_KEY sort_key = 5;

#### Defined in

[src/work_orders.scailo_pb.ts:1315](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/work_orders.scailo_pb.ts#L1315)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

[src/work_orders.scailo_pb.ts:1308](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/work_orders.scailo_pb.ts#L1308)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this work order

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/work_orders.scailo_pb.ts:1357](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/work_orders.scailo_pb.ts#L1357)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/work_orders.scailo_pb.ts:1500](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/work_orders.scailo_pb.ts#L1500)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/work_orders.scailo_pb.ts:1498](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/work_orders.scailo_pb.ts#L1498)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.WorkOrdersServiceFilterReq"``

#### Defined in

[src/work_orders.scailo_pb.ts:1499](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/work_orders.scailo_pb.ts#L1499)

## Methods

### clone

▸ **clone**(): [`WorkOrdersServiceFilterReq`](WorkOrdersServiceFilterReq.md)

Create a deep copy.

#### Returns

[`WorkOrdersServiceFilterReq`](WorkOrdersServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`WorkOrdersServiceFilterReq`](WorkOrdersServiceFilterReq.md) \| `PlainMessage`\<[`WorkOrdersServiceFilterReq`](WorkOrdersServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`WorkOrdersServiceFilterReq`](WorkOrdersServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`WorkOrdersServiceFilterReq`](WorkOrdersServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`WorkOrdersServiceFilterReq`](WorkOrdersServiceFilterReq.md) \| `PlainMessage`\<[`WorkOrdersServiceFilterReq`](WorkOrdersServiceFilterReq.md)\> |
| `b` | `undefined` \| [`WorkOrdersServiceFilterReq`](WorkOrdersServiceFilterReq.md) \| `PlainMessage`\<[`WorkOrdersServiceFilterReq`](WorkOrdersServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/work_orders.scailo_pb.ts:1545](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/work_orders.scailo_pb.ts#L1545)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`WorkOrdersServiceFilterReq`](WorkOrdersServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`WorkOrdersServiceFilterReq`](WorkOrdersServiceFilterReq.md)

#### Defined in

[src/work_orders.scailo_pb.ts:1533](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/work_orders.scailo_pb.ts#L1533)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`WorkOrdersServiceFilterReq`](WorkOrdersServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`WorkOrdersServiceFilterReq`](WorkOrdersServiceFilterReq.md)

#### Defined in

[src/work_orders.scailo_pb.ts:1537](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/work_orders.scailo_pb.ts#L1537)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`WorkOrdersServiceFilterReq`](WorkOrdersServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`WorkOrdersServiceFilterReq`](WorkOrdersServiceFilterReq.md)

#### Defined in

[src/work_orders.scailo_pb.ts:1541](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/work_orders.scailo_pb.ts#L1541)
