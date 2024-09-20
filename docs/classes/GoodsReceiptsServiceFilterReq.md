[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / GoodsReceiptsServiceFilterReq

# Class: GoodsReceiptsServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Scailo.GoodsReceiptsServiceFilterReq

## Hierarchy

- `Message`\<[`GoodsReceiptsServiceFilterReq`](GoodsReceiptsServiceFilterReq.md)\>

  ↳ **`GoodsReceiptsServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](GoodsReceiptsServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](GoodsReceiptsServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](GoodsReceiptsServiceFilterReq.md#approvedonend)
- [approvedOnStart](GoodsReceiptsServiceFilterReq.md#approvedonstart)
- [approverRoleId](GoodsReceiptsServiceFilterReq.md#approverroleid)
- [billingStatus](GoodsReceiptsServiceFilterReq.md#billingstatus)
- [completedOnEnd](GoodsReceiptsServiceFilterReq.md#completedonend)
- [completedOnStart](GoodsReceiptsServiceFilterReq.md#completedonstart)
- [count](GoodsReceiptsServiceFilterReq.md#count)
- [creationTimestampEnd](GoodsReceiptsServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](GoodsReceiptsServiceFilterReq.md#creationtimestampstart)
- [entityUuid](GoodsReceiptsServiceFilterReq.md#entityuuid)
- [familyId](GoodsReceiptsServiceFilterReq.md#familyid)
- [finalRefNumber](GoodsReceiptsServiceFilterReq.md#finalrefnumber)
- [isActive](GoodsReceiptsServiceFilterReq.md#isactive)
- [modificationTimestampEnd](GoodsReceiptsServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](GoodsReceiptsServiceFilterReq.md#modificationtimestampstart)
- [offset](GoodsReceiptsServiceFilterReq.md#offset)
- [projectId](GoodsReceiptsServiceFilterReq.md#projectid)
- [refFrom](GoodsReceiptsServiceFilterReq.md#reffrom)
- [refId](GoodsReceiptsServiceFilterReq.md#refid)
- [referenceId](GoodsReceiptsServiceFilterReq.md#referenceid)
- [sortKey](GoodsReceiptsServiceFilterReq.md#sortkey)
- [sortOrder](GoodsReceiptsServiceFilterReq.md#sortorder)
- [status](GoodsReceiptsServiceFilterReq.md#status)
- [vendorBillDateEnd](GoodsReceiptsServiceFilterReq.md#vendorbilldateend)
- [vendorBillDateExact](GoodsReceiptsServiceFilterReq.md#vendorbilldateexact)
- [vendorBillDateStart](GoodsReceiptsServiceFilterReq.md#vendorbilldatestart)
- [vendorBillNo](GoodsReceiptsServiceFilterReq.md#vendorbillno)
- [vendorId](GoodsReceiptsServiceFilterReq.md#vendorid)
- [fields](GoodsReceiptsServiceFilterReq.md#fields)
- [runtime](GoodsReceiptsServiceFilterReq.md#runtime)
- [typeName](GoodsReceiptsServiceFilterReq.md#typename)

### Methods

- [clone](GoodsReceiptsServiceFilterReq.md#clone)
- [equals](GoodsReceiptsServiceFilterReq.md#equals)
- [fromBinary](GoodsReceiptsServiceFilterReq.md#frombinary)
- [fromJson](GoodsReceiptsServiceFilterReq.md#fromjson)
- [fromJsonString](GoodsReceiptsServiceFilterReq.md#fromjsonstring)
- [getType](GoodsReceiptsServiceFilterReq.md#gettype)
- [toBinary](GoodsReceiptsServiceFilterReq.md#tobinary)
- [toJSON](GoodsReceiptsServiceFilterReq.md#tojson)
- [toJson](GoodsReceiptsServiceFilterReq.md#tojson-1)
- [toJsonString](GoodsReceiptsServiceFilterReq.md#tojsonstring)
- [equals](GoodsReceiptsServiceFilterReq.md#equals-1)
- [fromBinary](GoodsReceiptsServiceFilterReq.md#frombinary-1)
- [fromJson](GoodsReceiptsServiceFilterReq.md#fromjson-1)
- [fromJsonString](GoodsReceiptsServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new GoodsReceiptsServiceFilterReq**(`data?`): [`GoodsReceiptsServiceFilterReq`](GoodsReceiptsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`GoodsReceiptsServiceFilterReq`](GoodsReceiptsServiceFilterReq.md)\> |

#### Returns

[`GoodsReceiptsServiceFilterReq`](GoodsReceiptsServiceFilterReq.md)

#### Overrides

Message\&lt;GoodsReceiptsServiceFilterReq\&gt;.constructor

#### Defined in

src/goods_receipts.scailo_pb.ts:1811

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 13;

#### Defined in

src/goods_receipts.scailo_pb.ts:1704

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 12;

#### Defined in

src/goods_receipts.scailo_pb.ts:1697

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 11;

#### Defined in

src/goods_receipts.scailo_pb.ts:1690

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 14;

#### Defined in

src/goods_receipts.scailo_pb.ts:1711

___

### billingStatus

• **billingStatus**: [`GOODS_RECEIPT_BILLING_STATUS`](../enums/GOODS_RECEIPT_BILLING_STATUS.md) = `GOODS_RECEIPT_BILLING_STATUS.GOODS_RECEIPT_BILLING_STATUS_ANY_UNSPECIFIED`

The status of the goods receipt bill

**`Generated`**

from field: Scailo.GOODS_RECEIPT_BILLING_STATUS billing_status = 50;

#### Defined in

src/goods_receipts.scailo_pb.ts:1809

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: uint64 completed_on_end = 16;

#### Defined in

src/goods_receipts.scailo_pb.ts:1725

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: uint64 completed_on_start = 15;

#### Defined in

src/goods_receipts.scailo_pb.ts:1718

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

src/goods_receipts.scailo_pb.ts:1620

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

src/goods_receipts.scailo_pb.ts:1655

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

src/goods_receipts.scailo_pb.ts:1648

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

src/goods_receipts.scailo_pb.ts:1676

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family

**`Generated`**

from field: uint64 family_id = 40;

#### Defined in

src/goods_receipts.scailo_pb.ts:1802

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 21;

#### Defined in

src/goods_receipts.scailo_pb.ts:1739

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/goods_receipts.scailo_pb.ts:1613

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

src/goods_receipts.scailo_pb.ts:1669

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

src/goods_receipts.scailo_pb.ts:1662

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

src/goods_receipts.scailo_pb.ts:1627

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The ID of the associated project

**`Generated`**

from field: uint64 project_id = 31;

#### Defined in

src/goods_receipts.scailo_pb.ts:1795

___

### refFrom

• **refFrom**: `string` = `""`

The associated reference

**`Generated`**

from field: string ref_from = 22;

#### Defined in

src/goods_receipts.scailo_pb.ts:1746

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: uint64 ref_id = 23;

#### Defined in

src/goods_receipts.scailo_pb.ts:1753

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the goods receipt

**`Generated`**

from field: string reference_id = 20;

#### Defined in

src/goods_receipts.scailo_pb.ts:1732

___

### sortKey

• **sortKey**: [`GOODS_RECEIPT_SORT_KEY`](../enums/GOODS_RECEIPT_SORT_KEY.md) = `GOODS_RECEIPT_SORT_KEY.GOODS_RECEIPT_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.GOODS_RECEIPT_SORT_KEY sort_key = 5;

#### Defined in

src/goods_receipts.scailo_pb.ts:1641

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

src/goods_receipts.scailo_pb.ts:1634

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this goods receipt

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

src/goods_receipts.scailo_pb.ts:1683

___

### vendorBillDateEnd

• **vendorBillDateEnd**: `string` = `""`

The end date of vendor bills

**`Generated`**

from field: string vendor_bill_date_end = 26;

#### Defined in

src/goods_receipts.scailo_pb.ts:1774

___

### vendorBillDateExact

• **vendorBillDateExact**: `string` = `""`

The exact vendor bill date which should be considered

**`Generated`**

from field: string vendor_bill_date_exact = 27;

#### Defined in

src/goods_receipts.scailo_pb.ts:1781

___

### vendorBillDateStart

• **vendorBillDateStart**: `string` = `""`

The start date of vendor bills

**`Generated`**

from field: string vendor_bill_date_start = 25;

#### Defined in

src/goods_receipts.scailo_pb.ts:1767

___

### vendorBillNo

• **vendorBillNo**: `string` = `""`

The vendor's bill number

**`Generated`**

from field: string vendor_bill_no = 24;

#### Defined in

src/goods_receipts.scailo_pb.ts:1760

___

### vendorId

• **vendorId**: `bigint` = `protoInt64.zero`

The ID of the associated vendor

**`Generated`**

from field: uint64 vendor_id = 30;

#### Defined in

src/goods_receipts.scailo_pb.ts:1788

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/goods_receipts.scailo_pb.ts:1818

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/goods_receipts.scailo_pb.ts:1816

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.GoodsReceiptsServiceFilterReq"``

#### Defined in

src/goods_receipts.scailo_pb.ts:1817

## Methods

### clone

▸ **clone**(): [`GoodsReceiptsServiceFilterReq`](GoodsReceiptsServiceFilterReq.md)

Create a deep copy.

#### Returns

[`GoodsReceiptsServiceFilterReq`](GoodsReceiptsServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`GoodsReceiptsServiceFilterReq`](GoodsReceiptsServiceFilterReq.md) \| `PlainMessage`\<[`GoodsReceiptsServiceFilterReq`](GoodsReceiptsServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`GoodsReceiptsServiceFilterReq`](GoodsReceiptsServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`GoodsReceiptsServiceFilterReq`](GoodsReceiptsServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`GoodsReceiptsServiceFilterReq`](GoodsReceiptsServiceFilterReq.md) \| `PlainMessage`\<[`GoodsReceiptsServiceFilterReq`](GoodsReceiptsServiceFilterReq.md)\> |
| `b` | `undefined` \| [`GoodsReceiptsServiceFilterReq`](GoodsReceiptsServiceFilterReq.md) \| `PlainMessage`\<[`GoodsReceiptsServiceFilterReq`](GoodsReceiptsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/goods_receipts.scailo_pb.ts:1862

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`GoodsReceiptsServiceFilterReq`](GoodsReceiptsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`GoodsReceiptsServiceFilterReq`](GoodsReceiptsServiceFilterReq.md)

#### Defined in

src/goods_receipts.scailo_pb.ts:1850

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`GoodsReceiptsServiceFilterReq`](GoodsReceiptsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GoodsReceiptsServiceFilterReq`](GoodsReceiptsServiceFilterReq.md)

#### Defined in

src/goods_receipts.scailo_pb.ts:1854

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`GoodsReceiptsServiceFilterReq`](GoodsReceiptsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GoodsReceiptsServiceFilterReq`](GoodsReceiptsServiceFilterReq.md)

#### Defined in

src/goods_receipts.scailo_pb.ts:1858
