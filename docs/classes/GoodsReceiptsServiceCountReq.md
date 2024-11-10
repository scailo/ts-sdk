[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / GoodsReceiptsServiceCountReq

# Class: GoodsReceiptsServiceCountReq

Describes the base request payload of a count search

**`Generated`**

from message Scailo.GoodsReceiptsServiceCountReq

## Hierarchy

- `Message`\<[`GoodsReceiptsServiceCountReq`](GoodsReceiptsServiceCountReq.md)\>

  ↳ **`GoodsReceiptsServiceCountReq`**

## Table of contents

### Constructors

- [constructor](GoodsReceiptsServiceCountReq.md#constructor)

### Properties

- [approvedByUserId](GoodsReceiptsServiceCountReq.md#approvedbyuserid)
- [approvedOnEnd](GoodsReceiptsServiceCountReq.md#approvedonend)
- [approvedOnStart](GoodsReceiptsServiceCountReq.md#approvedonstart)
- [approverRoleId](GoodsReceiptsServiceCountReq.md#approverroleid)
- [billingStatus](GoodsReceiptsServiceCountReq.md#billingstatus)
- [completedOnEnd](GoodsReceiptsServiceCountReq.md#completedonend)
- [completedOnStart](GoodsReceiptsServiceCountReq.md#completedonstart)
- [creationTimestampEnd](GoodsReceiptsServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](GoodsReceiptsServiceCountReq.md#creationtimestampstart)
- [entityUuid](GoodsReceiptsServiceCountReq.md#entityuuid)
- [familyId](GoodsReceiptsServiceCountReq.md#familyid)
- [finalRefNumber](GoodsReceiptsServiceCountReq.md#finalrefnumber)
- [isActive](GoodsReceiptsServiceCountReq.md#isactive)
- [modificationTimestampEnd](GoodsReceiptsServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](GoodsReceiptsServiceCountReq.md#modificationtimestampstart)
- [projectId](GoodsReceiptsServiceCountReq.md#projectid)
- [refFrom](GoodsReceiptsServiceCountReq.md#reffrom)
- [refId](GoodsReceiptsServiceCountReq.md#refid)
- [referenceId](GoodsReceiptsServiceCountReq.md#referenceid)
- [status](GoodsReceiptsServiceCountReq.md#status)
- [vendorBillDateEnd](GoodsReceiptsServiceCountReq.md#vendorbilldateend)
- [vendorBillDateExact](GoodsReceiptsServiceCountReq.md#vendorbilldateexact)
- [vendorBillDateStart](GoodsReceiptsServiceCountReq.md#vendorbilldatestart)
- [vendorBillNo](GoodsReceiptsServiceCountReq.md#vendorbillno)
- [vendorId](GoodsReceiptsServiceCountReq.md#vendorid)
- [fields](GoodsReceiptsServiceCountReq.md#fields)
- [runtime](GoodsReceiptsServiceCountReq.md#runtime)
- [typeName](GoodsReceiptsServiceCountReq.md#typename)

### Methods

- [clone](GoodsReceiptsServiceCountReq.md#clone)
- [equals](GoodsReceiptsServiceCountReq.md#equals)
- [fromBinary](GoodsReceiptsServiceCountReq.md#frombinary)
- [fromJson](GoodsReceiptsServiceCountReq.md#fromjson)
- [fromJsonString](GoodsReceiptsServiceCountReq.md#fromjsonstring)
- [getType](GoodsReceiptsServiceCountReq.md#gettype)
- [toBinary](GoodsReceiptsServiceCountReq.md#tobinary)
- [toJSON](GoodsReceiptsServiceCountReq.md#tojson)
- [toJson](GoodsReceiptsServiceCountReq.md#tojson-1)
- [toJsonString](GoodsReceiptsServiceCountReq.md#tojsonstring)
- [equals](GoodsReceiptsServiceCountReq.md#equals-1)
- [fromBinary](GoodsReceiptsServiceCountReq.md#frombinary-1)
- [fromJson](GoodsReceiptsServiceCountReq.md#fromjson-1)
- [fromJsonString](GoodsReceiptsServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new GoodsReceiptsServiceCountReq**(`data?`): [`GoodsReceiptsServiceCountReq`](GoodsReceiptsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`GoodsReceiptsServiceCountReq`](GoodsReceiptsServiceCountReq.md)\> |

#### Returns

[`GoodsReceiptsServiceCountReq`](GoodsReceiptsServiceCountReq.md)

#### Overrides

Message\&lt;GoodsReceiptsServiceCountReq\&gt;.constructor

#### Defined in

src/goods_receipts.scailo_pb.ts:2080

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 13;

#### Defined in

src/goods_receipts.scailo_pb.ts:1973

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 12;

#### Defined in

src/goods_receipts.scailo_pb.ts:1966

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 11;

#### Defined in

src/goods_receipts.scailo_pb.ts:1959

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 14;

#### Defined in

src/goods_receipts.scailo_pb.ts:1980

___

### billingStatus

• **billingStatus**: [`GOODS_RECEIPT_BILLING_STATUS`](../enums/GOODS_RECEIPT_BILLING_STATUS.md) = `GOODS_RECEIPT_BILLING_STATUS.GOODS_RECEIPT_BILLING_STATUS_ANY_UNSPECIFIED`

The status of the goods receipt bill

**`Generated`**

from field: Scailo.GOODS_RECEIPT_BILLING_STATUS billing_status = 50;

#### Defined in

src/goods_receipts.scailo_pb.ts:2078

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: uint64 completed_on_end = 16;

#### Defined in

src/goods_receipts.scailo_pb.ts:1994

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: uint64 completed_on_start = 15;

#### Defined in

src/goods_receipts.scailo_pb.ts:1987

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

src/goods_receipts.scailo_pb.ts:1924

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

src/goods_receipts.scailo_pb.ts:1917

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

src/goods_receipts.scailo_pb.ts:1945

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family

**`Generated`**

from field: uint64 family_id = 40;

#### Defined in

src/goods_receipts.scailo_pb.ts:2071

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 21;

#### Defined in

src/goods_receipts.scailo_pb.ts:2008

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/goods_receipts.scailo_pb.ts:1910

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

src/goods_receipts.scailo_pb.ts:1938

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

src/goods_receipts.scailo_pb.ts:1931

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The ID of the associated project

**`Generated`**

from field: uint64 project_id = 31;

#### Defined in

src/goods_receipts.scailo_pb.ts:2064

___

### refFrom

• **refFrom**: `string` = `""`

The associated reference

**`Generated`**

from field: string ref_from = 22;

#### Defined in

src/goods_receipts.scailo_pb.ts:2015

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: uint64 ref_id = 23;

#### Defined in

src/goods_receipts.scailo_pb.ts:2022

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the goods receipt

**`Generated`**

from field: string reference_id = 20;

#### Defined in

src/goods_receipts.scailo_pb.ts:2001

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this goods receipt

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

src/goods_receipts.scailo_pb.ts:1952

___

### vendorBillDateEnd

• **vendorBillDateEnd**: `string` = `""`

The end date of vendor bills

**`Generated`**

from field: string vendor_bill_date_end = 26;

#### Defined in

src/goods_receipts.scailo_pb.ts:2043

___

### vendorBillDateExact

• **vendorBillDateExact**: `string` = `""`

The exact vendor bill date which should be considered

**`Generated`**

from field: string vendor_bill_date_exact = 27;

#### Defined in

src/goods_receipts.scailo_pb.ts:2050

___

### vendorBillDateStart

• **vendorBillDateStart**: `string` = `""`

The start date of vendor bills

**`Generated`**

from field: string vendor_bill_date_start = 25;

#### Defined in

src/goods_receipts.scailo_pb.ts:2036

___

### vendorBillNo

• **vendorBillNo**: `string` = `""`

The vendor's bill number

**`Generated`**

from field: string vendor_bill_no = 24;

#### Defined in

src/goods_receipts.scailo_pb.ts:2029

___

### vendorId

• **vendorId**: `bigint` = `protoInt64.zero`

The ID of the associated vendor

**`Generated`**

from field: uint64 vendor_id = 30;

#### Defined in

src/goods_receipts.scailo_pb.ts:2057

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/goods_receipts.scailo_pb.ts:2087

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/goods_receipts.scailo_pb.ts:2085

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.GoodsReceiptsServiceCountReq"``

#### Defined in

src/goods_receipts.scailo_pb.ts:2086

## Methods

### clone

▸ **clone**(): [`GoodsReceiptsServiceCountReq`](GoodsReceiptsServiceCountReq.md)

Create a deep copy.

#### Returns

[`GoodsReceiptsServiceCountReq`](GoodsReceiptsServiceCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`GoodsReceiptsServiceCountReq`](GoodsReceiptsServiceCountReq.md) \| `PlainMessage`\<[`GoodsReceiptsServiceCountReq`](GoodsReceiptsServiceCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`GoodsReceiptsServiceCountReq`](GoodsReceiptsServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`GoodsReceiptsServiceCountReq`](GoodsReceiptsServiceCountReq.md)\>

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
| `a` | `undefined` \| [`GoodsReceiptsServiceCountReq`](GoodsReceiptsServiceCountReq.md) \| `PlainMessage`\<[`GoodsReceiptsServiceCountReq`](GoodsReceiptsServiceCountReq.md)\> |
| `b` | `undefined` \| [`GoodsReceiptsServiceCountReq`](GoodsReceiptsServiceCountReq.md) \| `PlainMessage`\<[`GoodsReceiptsServiceCountReq`](GoodsReceiptsServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/goods_receipts.scailo_pb.ts:2127

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`GoodsReceiptsServiceCountReq`](GoodsReceiptsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`GoodsReceiptsServiceCountReq`](GoodsReceiptsServiceCountReq.md)

#### Defined in

src/goods_receipts.scailo_pb.ts:2115

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`GoodsReceiptsServiceCountReq`](GoodsReceiptsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GoodsReceiptsServiceCountReq`](GoodsReceiptsServiceCountReq.md)

#### Defined in

src/goods_receipts.scailo_pb.ts:2119

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`GoodsReceiptsServiceCountReq`](GoodsReceiptsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GoodsReceiptsServiceCountReq`](GoodsReceiptsServiceCountReq.md)

#### Defined in

src/goods_receipts.scailo_pb.ts:2123
