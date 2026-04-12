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
- [formData](GoodsReceiptsServiceCountReq.md#formdata)
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

[src/goods_receipts.scailo_pb.ts:2724](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/goods_receipts.scailo_pb.ts#L2724)

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter by the specific user ID who approved the records.

**`Example`**

```ts
501
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 approved_by_user_id = 13;

#### Defined in

[src/goods_receipts.scailo_pb.ts:2565](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/goods_receipts.scailo_pb.ts#L2565)

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter records approved ON or BEFORE this UNIX timestamp.

**`Example`**

```ts
1704067199
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 approved_on_end = 12;

#### Defined in

[src/goods_receipts.scailo_pb.ts:2549](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/goods_receipts.scailo_pb.ts#L2549)

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter records approved ON or AFTER this UNIX timestamp.

**`Example`**

```ts
1672531200
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 approved_on_start = 11;

#### Defined in

[src/goods_receipts.scailo_pb.ts:2533](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/goods_receipts.scailo_pb.ts#L2533)

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter by the role ID of the approver.

**`Example`**

```ts
5
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 approver_role_id = 14;

#### Defined in

[src/goods_receipts.scailo_pb.ts:2581](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/goods_receipts.scailo_pb.ts#L2581)

___

### billingStatus

• **billingStatus**: [`GOODS_RECEIPT_BILLING_STATUS`](../enums/GOODS_RECEIPT_BILLING_STATUS.md) = `GOODS_RECEIPT_BILLING_STATUS.GOODS_RECEIPT_BILLING_STATUS_ANY_UNSPECIFIED`

The status of the goods receipt bill

**`Generated`**

from field: Scailo.GOODS_RECEIPT_BILLING_STATUS billing_status = 50;

#### Defined in

[src/goods_receipts.scailo_pb.ts:2715](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/goods_receipts.scailo_pb.ts#L2715)

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter records completed ON or BEFORE this UNIX timestamp.

**`Example`**

```ts
1704067199
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 completed_on_end = 16;

#### Defined in

[src/goods_receipts.scailo_pb.ts:2613](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/goods_receipts.scailo_pb.ts#L2613)

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter records completed ON or AFTER this UNIX timestamp.

**`Example`**

```ts
1672531200
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 completed_on_start = 15;

#### Defined in

[src/goods_receipts.scailo_pb.ts:2597](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/goods_receipts.scailo_pb.ts#L2597)

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter records created ON or BEFORE this UNIX timestamp.

**`Example`**

```ts
1704067199
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

[src/goods_receipts.scailo_pb.ts:2457](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/goods_receipts.scailo_pb.ts#L2457)

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter records created ON or AFTER this UNIX timestamp.

**`Example`**

```ts
1672531200
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

[src/goods_receipts.scailo_pb.ts:2441](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/goods_receipts.scailo_pb.ts#L2441)

___

### entityUuid

• **entityUuid**: `string` = `""`

**`Optional`**

**`Description`**

Filter by the organization UUID.

**`Example`**

```ts
"550e8400-e29b-41d4-a716-446655440000"
```

**`Regex`**

^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$

**`Format`**

If provided, must be a valid v4 UUID in canonical hyphenated form.

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

[src/goods_receipts.scailo_pb.ts:2505](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/goods_receipts.scailo_pb.ts#L2505)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family

**`Generated`**

from field: uint64 family_id = 40;

#### Defined in

[src/goods_receipts.scailo_pb.ts:2708](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/goods_receipts.scailo_pb.ts#L2708)

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

**`Optional`**

**`Description`**

Fuzzy match for the system-generated ref number.

**`Example`**

```ts
"ABS-2023-X9Z2"
```

**`Regex`**

[0-9A-Za-z ]*$

@format: Alphanumeric characters and spaces only. Can be left empty.

**`Generated`**

from field: string final_ref_number = 21;

#### Defined in

[src/goods_receipts.scailo_pb.ts:2645](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/goods_receipts.scailo_pb.ts#L2645)

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

The list of form data filters

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

[src/goods_receipts.scailo_pb.ts:2722](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/goods_receipts.scailo_pb.ts#L2722)

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

**`Optional`**

**`Description`**

Filter by active status. If `true`, then returns only active records. If `false`, then returns only inactive records.

**`Example`**

```ts
ANY
```

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/goods_receipts.scailo_pb.ts:2425](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/goods_receipts.scailo_pb.ts#L2425)

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter records modified ON or BEFORE this UNIX timestamp.

**`Example`**

```ts
1704067199
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

[src/goods_receipts.scailo_pb.ts:2489](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/goods_receipts.scailo_pb.ts#L2489)

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter records modified ON or AFTER this UNIX timestamp.

**`Example`**

```ts
1672531200
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

[src/goods_receipts.scailo_pb.ts:2473](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/goods_receipts.scailo_pb.ts#L2473)

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The ID of the associated project

**`Generated`**

from field: uint64 project_id = 31;

#### Defined in

[src/goods_receipts.scailo_pb.ts:2701](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/goods_receipts.scailo_pb.ts#L2701)

___

### refFrom

• **refFrom**: [`GOODS_RECEIPT_REF_FROM`](../enums/GOODS_RECEIPT_REF_FROM.md) = `GOODS_RECEIPT_REF_FROM.GOODS_RECEIPT_REF_FROM_ANY_UNSPECIFIED`

The associated reference

**`Generated`**

from field: Scailo.GOODS_RECEIPT_REF_FROM ref_from = 22;

#### Defined in

[src/goods_receipts.scailo_pb.ts:2652](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/goods_receipts.scailo_pb.ts#L2652)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: uint64 ref_id = 23;

#### Defined in

[src/goods_receipts.scailo_pb.ts:2659](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/goods_receipts.scailo_pb.ts#L2659)

___

### referenceId

• **referenceId**: `string` = `""`

**`Optional`**

**`Description`**

Fuzzy match for the user-defined reference ID.

**`Example`**

```ts
"ABS-2023-001"
```

**`Regex`**

[0-9A-Za-z ]*$

@format: Alphanumeric characters and spaces only. Can be left empty.

**`Generated`**

from field: string reference_id = 20;

#### Defined in

[src/goods_receipts.scailo_pb.ts:2629](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/goods_receipts.scailo_pb.ts#L2629)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

**`Optional`**

**`Description`**

Filter by lifecycle status (e.g., DRAFT, STANDING).

**`Example`**

```ts
STANDING
```

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/goods_receipts.scailo_pb.ts:2517](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/goods_receipts.scailo_pb.ts#L2517)

___

### vendorBillDateEnd

• **vendorBillDateEnd**: `string` = `""`

The end date of vendor bills

**`Generated`**

from field: string vendor_bill_date_end = 26;

#### Defined in

[src/goods_receipts.scailo_pb.ts:2680](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/goods_receipts.scailo_pb.ts#L2680)

___

### vendorBillDateExact

• **vendorBillDateExact**: `string` = `""`

The exact vendor bill date which should be considered

**`Generated`**

from field: string vendor_bill_date_exact = 27;

#### Defined in

[src/goods_receipts.scailo_pb.ts:2687](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/goods_receipts.scailo_pb.ts#L2687)

___

### vendorBillDateStart

• **vendorBillDateStart**: `string` = `""`

The start date of vendor bills

**`Generated`**

from field: string vendor_bill_date_start = 25;

#### Defined in

[src/goods_receipts.scailo_pb.ts:2673](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/goods_receipts.scailo_pb.ts#L2673)

___

### vendorBillNo

• **vendorBillNo**: `string` = `""`

The vendor's bill number

**`Generated`**

from field: string vendor_bill_no = 24;

#### Defined in

[src/goods_receipts.scailo_pb.ts:2666](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/goods_receipts.scailo_pb.ts#L2666)

___

### vendorId

• **vendorId**: `bigint` = `protoInt64.zero`

The ID of the associated vendor

**`Generated`**

from field: uint64 vendor_id = 30;

#### Defined in

[src/goods_receipts.scailo_pb.ts:2694](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/goods_receipts.scailo_pb.ts#L2694)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/goods_receipts.scailo_pb.ts:2731](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/goods_receipts.scailo_pb.ts#L2731)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/goods_receipts.scailo_pb.ts:2729](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/goods_receipts.scailo_pb.ts#L2729)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.GoodsReceiptsServiceCountReq"``

#### Defined in

[src/goods_receipts.scailo_pb.ts:2730](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/goods_receipts.scailo_pb.ts#L2730)

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

[src/goods_receipts.scailo_pb.ts:2772](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/goods_receipts.scailo_pb.ts#L2772)

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

[src/goods_receipts.scailo_pb.ts:2760](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/goods_receipts.scailo_pb.ts#L2760)

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

[src/goods_receipts.scailo_pb.ts:2764](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/goods_receipts.scailo_pb.ts#L2764)

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

[src/goods_receipts.scailo_pb.ts:2768](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/goods_receipts.scailo_pb.ts#L2768)
