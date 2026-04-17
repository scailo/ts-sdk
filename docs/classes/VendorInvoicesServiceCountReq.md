[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / VendorInvoicesServiceCountReq

# Class: VendorInvoicesServiceCountReq

Describes the base request payload of a count search

**`Generated`**

from message Scailo.VendorInvoicesServiceCountReq

## Hierarchy

- `Message`\<[`VendorInvoicesServiceCountReq`](VendorInvoicesServiceCountReq.md)\>

  ↳ **`VendorInvoicesServiceCountReq`**

## Table of contents

### Constructors

- [constructor](VendorInvoicesServiceCountReq.md#constructor)

### Properties

- [approvedByUserId](VendorInvoicesServiceCountReq.md#approvedbyuserid)
- [approvedOnEnd](VendorInvoicesServiceCountReq.md#approvedonend)
- [approvedOnStart](VendorInvoicesServiceCountReq.md#approvedonstart)
- [approverRoleId](VendorInvoicesServiceCountReq.md#approverroleid)
- [completedOnEnd](VendorInvoicesServiceCountReq.md#completedonend)
- [completedOnStart](VendorInvoicesServiceCountReq.md#completedonstart)
- [creationTimestampEnd](VendorInvoicesServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](VendorInvoicesServiceCountReq.md#creationtimestampstart)
- [currencyId](VendorInvoicesServiceCountReq.md#currencyid)
- [entityUuid](VendorInvoicesServiceCountReq.md#entityuuid)
- [familyId](VendorInvoicesServiceCountReq.md#familyid)
- [finalRefNumber](VendorInvoicesServiceCountReq.md#finalrefnumber)
- [formData](VendorInvoicesServiceCountReq.md#formdata)
- [isActive](VendorInvoicesServiceCountReq.md#isactive)
- [modificationTimestampEnd](VendorInvoicesServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](VendorInvoicesServiceCountReq.md#modificationtimestampstart)
- [projectId](VendorInvoicesServiceCountReq.md#projectid)
- [refFrom](VendorInvoicesServiceCountReq.md#reffrom)
- [refId](VendorInvoicesServiceCountReq.md#refid)
- [referenceId](VendorInvoicesServiceCountReq.md#referenceid)
- [status](VendorInvoicesServiceCountReq.md#status)
- [totalValueMax](VendorInvoicesServiceCountReq.md#totalvaluemax)
- [totalValueMin](VendorInvoicesServiceCountReq.md#totalvaluemin)
- [vendorBillDateEnd](VendorInvoicesServiceCountReq.md#vendorbilldateend)
- [vendorBillDateExact](VendorInvoicesServiceCountReq.md#vendorbilldateexact)
- [vendorBillDateStart](VendorInvoicesServiceCountReq.md#vendorbilldatestart)
- [vendorBillNo](VendorInvoicesServiceCountReq.md#vendorbillno)
- [vendorId](VendorInvoicesServiceCountReq.md#vendorid)
- [fields](VendorInvoicesServiceCountReq.md#fields)
- [runtime](VendorInvoicesServiceCountReq.md#runtime)
- [typeName](VendorInvoicesServiceCountReq.md#typename)

### Methods

- [clone](VendorInvoicesServiceCountReq.md#clone)
- [equals](VendorInvoicesServiceCountReq.md#equals)
- [fromBinary](VendorInvoicesServiceCountReq.md#frombinary)
- [fromJson](VendorInvoicesServiceCountReq.md#fromjson)
- [fromJsonString](VendorInvoicesServiceCountReq.md#fromjsonstring)
- [getType](VendorInvoicesServiceCountReq.md#gettype)
- [toBinary](VendorInvoicesServiceCountReq.md#tobinary)
- [toJSON](VendorInvoicesServiceCountReq.md#tojson)
- [toJson](VendorInvoicesServiceCountReq.md#tojson-1)
- [toJsonString](VendorInvoicesServiceCountReq.md#tojsonstring)
- [equals](VendorInvoicesServiceCountReq.md#equals-1)
- [fromBinary](VendorInvoicesServiceCountReq.md#frombinary-1)
- [fromJson](VendorInvoicesServiceCountReq.md#fromjson-1)
- [fromJsonString](VendorInvoicesServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new VendorInvoicesServiceCountReq**(`data?`): [`VendorInvoicesServiceCountReq`](VendorInvoicesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`VendorInvoicesServiceCountReq`](VendorInvoicesServiceCountReq.md)\> |

#### Returns

[`VendorInvoicesServiceCountReq`](VendorInvoicesServiceCountReq.md)

#### Overrides

Message\&lt;VendorInvoicesServiceCountReq\&gt;.constructor

#### Defined in

[src/vendor_invoices.scailo_pb.ts:2767](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/vendor_invoices.scailo_pb.ts#L2767)

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

[src/vendor_invoices.scailo_pb.ts:2594](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/vendor_invoices.scailo_pb.ts#L2594)

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

[src/vendor_invoices.scailo_pb.ts:2578](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/vendor_invoices.scailo_pb.ts#L2578)

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

[src/vendor_invoices.scailo_pb.ts:2562](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/vendor_invoices.scailo_pb.ts#L2562)

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

[src/vendor_invoices.scailo_pb.ts:2610](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/vendor_invoices.scailo_pb.ts#L2610)

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

[src/vendor_invoices.scailo_pb.ts:2642](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/vendor_invoices.scailo_pb.ts#L2642)

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

[src/vendor_invoices.scailo_pb.ts:2626](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/vendor_invoices.scailo_pb.ts#L2626)

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

[src/vendor_invoices.scailo_pb.ts:2486](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/vendor_invoices.scailo_pb.ts#L2486)

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

[src/vendor_invoices.scailo_pb.ts:2470](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/vendor_invoices.scailo_pb.ts#L2470)

___

### currencyId

• **currencyId**: `bigint` = `protoInt64.zero`

The ID of the associated currency

**`Generated`**

from field: uint64 currency_id = 30;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:2723](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/vendor_invoices.scailo_pb.ts#L2723)

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

[src/vendor_invoices.scailo_pb.ts:2534](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/vendor_invoices.scailo_pb.ts#L2534)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family

**`Generated`**

from field: uint64 family_id = 40;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:2744](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/vendor_invoices.scailo_pb.ts#L2744)

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

[src/vendor_invoices.scailo_pb.ts:2674](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/vendor_invoices.scailo_pb.ts#L2674)

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

The list of form data filters

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:2765](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/vendor_invoices.scailo_pb.ts#L2765)

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

[src/vendor_invoices.scailo_pb.ts:2454](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/vendor_invoices.scailo_pb.ts#L2454)

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

[src/vendor_invoices.scailo_pb.ts:2518](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/vendor_invoices.scailo_pb.ts#L2518)

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

[src/vendor_invoices.scailo_pb.ts:2502](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/vendor_invoices.scailo_pb.ts#L2502)

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The ID of the associated project

**`Generated`**

from field: uint64 project_id = 32;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:2737](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/vendor_invoices.scailo_pb.ts#L2737)

___

### refFrom

• **refFrom**: [`VENDOR_INVOICE_REF_FROM`](../enums/VENDOR_INVOICE_REF_FROM.md) = `VENDOR_INVOICE_REF_FROM.VENDOR_INVOICE_REF_FROM_ANY_UNSPECIFIED`

The associated reference

**`Generated`**

from field: Scailo.VENDOR_INVOICE_REF_FROM ref_from = 22;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:2681](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/vendor_invoices.scailo_pb.ts#L2681)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: uint64 ref_id = 23;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:2688](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/vendor_invoices.scailo_pb.ts#L2688)

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

[src/vendor_invoices.scailo_pb.ts:2658](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/vendor_invoices.scailo_pb.ts#L2658)

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

[src/vendor_invoices.scailo_pb.ts:2546](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/vendor_invoices.scailo_pb.ts#L2546)

___

### totalValueMax

• **totalValueMax**: `bigint` = `protoInt64.zero`

Stores the maximum value of the vendor invoice (ignored if 0)

**`Generated`**

from field: uint64 total_value_max = 51;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:2758](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/vendor_invoices.scailo_pb.ts#L2758)

___

### totalValueMin

• **totalValueMin**: `bigint` = `protoInt64.zero`

Stores the minimum value of the vendor invoice (ignored if 0)

**`Generated`**

from field: uint64 total_value_min = 50;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:2751](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/vendor_invoices.scailo_pb.ts#L2751)

___

### vendorBillDateEnd

• **vendorBillDateEnd**: `string` = `""`

The maximum vendor bill date which should be considered

**`Generated`**

from field: string vendor_bill_date_end = 26;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:2709](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/vendor_invoices.scailo_pb.ts#L2709)

___

### vendorBillDateExact

• **vendorBillDateExact**: `string` = `""`

The exact vendor bill date which should be considered

**`Generated`**

from field: string vendor_bill_date_exact = 27;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:2716](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/vendor_invoices.scailo_pb.ts#L2716)

___

### vendorBillDateStart

• **vendorBillDateStart**: `string` = `""`

The minimum vendor bill date which should be considered

**`Generated`**

from field: string vendor_bill_date_start = 25;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:2702](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/vendor_invoices.scailo_pb.ts#L2702)

___

### vendorBillNo

• **vendorBillNo**: `string` = `""`

The vendor's bill number

**`Generated`**

from field: string vendor_bill_no = 24;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:2695](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/vendor_invoices.scailo_pb.ts#L2695)

___

### vendorId

• **vendorId**: `bigint` = `protoInt64.zero`

The ID of the associated vendor

**`Generated`**

from field: uint64 vendor_id = 31;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:2730](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/vendor_invoices.scailo_pb.ts#L2730)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/vendor_invoices.scailo_pb.ts:2774](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/vendor_invoices.scailo_pb.ts#L2774)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/vendor_invoices.scailo_pb.ts:2772](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/vendor_invoices.scailo_pb.ts#L2772)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.VendorInvoicesServiceCountReq"``

#### Defined in

[src/vendor_invoices.scailo_pb.ts:2773](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/vendor_invoices.scailo_pb.ts#L2773)

## Methods

### clone

▸ **clone**(): [`VendorInvoicesServiceCountReq`](VendorInvoicesServiceCountReq.md)

Create a deep copy.

#### Returns

[`VendorInvoicesServiceCountReq`](VendorInvoicesServiceCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`VendorInvoicesServiceCountReq`](VendorInvoicesServiceCountReq.md) \| `PlainMessage`\<[`VendorInvoicesServiceCountReq`](VendorInvoicesServiceCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`VendorInvoicesServiceCountReq`](VendorInvoicesServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`VendorInvoicesServiceCountReq`](VendorInvoicesServiceCountReq.md)\>

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
| `a` | `undefined` \| [`VendorInvoicesServiceCountReq`](VendorInvoicesServiceCountReq.md) \| `PlainMessage`\<[`VendorInvoicesServiceCountReq`](VendorInvoicesServiceCountReq.md)\> |
| `b` | `undefined` \| [`VendorInvoicesServiceCountReq`](VendorInvoicesServiceCountReq.md) \| `PlainMessage`\<[`VendorInvoicesServiceCountReq`](VendorInvoicesServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/vendor_invoices.scailo_pb.ts:2817](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/vendor_invoices.scailo_pb.ts#L2817)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`VendorInvoicesServiceCountReq`](VendorInvoicesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`VendorInvoicesServiceCountReq`](VendorInvoicesServiceCountReq.md)

#### Defined in

[src/vendor_invoices.scailo_pb.ts:2805](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/vendor_invoices.scailo_pb.ts#L2805)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`VendorInvoicesServiceCountReq`](VendorInvoicesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorInvoicesServiceCountReq`](VendorInvoicesServiceCountReq.md)

#### Defined in

[src/vendor_invoices.scailo_pb.ts:2809](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/vendor_invoices.scailo_pb.ts#L2809)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`VendorInvoicesServiceCountReq`](VendorInvoicesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorInvoicesServiceCountReq`](VendorInvoicesServiceCountReq.md)

#### Defined in

[src/vendor_invoices.scailo_pb.ts:2813](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/vendor_invoices.scailo_pb.ts#L2813)
