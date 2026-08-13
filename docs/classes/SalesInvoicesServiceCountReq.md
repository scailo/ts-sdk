[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesInvoicesServiceCountReq

# Class: SalesInvoicesServiceCountReq

Target filter request for counting sales invoice records matching specific logical criteria.
This message encapsulates lifecycle status filters, timestamp ranges, workflow markers,
and entity references to determine the total size of a targeted dataset.

**Note:** This is the primary message layout used by backend calculation engines, reporting
services, and frontend pagination headers to evaluate total record matches dynamically
before or alongside retrieving paginated results.

**`Generated`**

from message Scailo.SalesInvoicesServiceCountReq

## Hierarchy

- `Message`\<[`SalesInvoicesServiceCountReq`](SalesInvoicesServiceCountReq.md)\>

  ↳ **`SalesInvoicesServiceCountReq`**

## Table of contents

### Constructors

- [constructor](SalesInvoicesServiceCountReq.md#constructor)

### Properties

- [approvedByUserId](SalesInvoicesServiceCountReq.md#approvedbyuserid)
- [approvedOnEnd](SalesInvoicesServiceCountReq.md#approvedonend)
- [approvedOnStart](SalesInvoicesServiceCountReq.md#approvedonstart)
- [approverRoleId](SalesInvoicesServiceCountReq.md#approverroleid)
- [bankAccountId](SalesInvoicesServiceCountReq.md#bankaccountid)
- [buyerClientId](SalesInvoicesServiceCountReq.md#buyerclientid)
- [completedOnEnd](SalesInvoicesServiceCountReq.md#completedonend)
- [completedOnStart](SalesInvoicesServiceCountReq.md#completedonstart)
- [consigneeClientId](SalesInvoicesServiceCountReq.md#consigneeclientid)
- [creationTimestampEnd](SalesInvoicesServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](SalesInvoicesServiceCountReq.md#creationtimestampstart)
- [currencyId](SalesInvoicesServiceCountReq.md#currencyid)
- [entityUuid](SalesInvoicesServiceCountReq.md#entityuuid)
- [familyId](SalesInvoicesServiceCountReq.md#familyid)
- [finalRefNumber](SalesInvoicesServiceCountReq.md#finalrefnumber)
- [formData](SalesInvoicesServiceCountReq.md#formdata)
- [isActive](SalesInvoicesServiceCountReq.md#isactive)
- [modificationTimestampEnd](SalesInvoicesServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](SalesInvoicesServiceCountReq.md#modificationtimestampstart)
- [projectId](SalesInvoicesServiceCountReq.md#projectid)
- [refFrom](SalesInvoicesServiceCountReq.md#reffrom)
- [refId](SalesInvoicesServiceCountReq.md#refid)
- [referenceId](SalesInvoicesServiceCountReq.md#referenceid)
- [status](SalesInvoicesServiceCountReq.md#status)
- [totalValueMax](SalesInvoicesServiceCountReq.md#totalvaluemax)
- [totalValueMin](SalesInvoicesServiceCountReq.md#totalvaluemin)
- [fields](SalesInvoicesServiceCountReq.md#fields)
- [runtime](SalesInvoicesServiceCountReq.md#runtime)
- [typeName](SalesInvoicesServiceCountReq.md#typename)

### Methods

- [clone](SalesInvoicesServiceCountReq.md#clone)
- [equals](SalesInvoicesServiceCountReq.md#equals)
- [fromBinary](SalesInvoicesServiceCountReq.md#frombinary)
- [fromJson](SalesInvoicesServiceCountReq.md#fromjson)
- [fromJsonString](SalesInvoicesServiceCountReq.md#fromjsonstring)
- [getType](SalesInvoicesServiceCountReq.md#gettype)
- [toBinary](SalesInvoicesServiceCountReq.md#tobinary)
- [toJSON](SalesInvoicesServiceCountReq.md#tojson)
- [toJson](SalesInvoicesServiceCountReq.md#tojson-1)
- [toJsonString](SalesInvoicesServiceCountReq.md#tojsonstring)
- [equals](SalesInvoicesServiceCountReq.md#equals-1)
- [fromBinary](SalesInvoicesServiceCountReq.md#frombinary-1)
- [fromJson](SalesInvoicesServiceCountReq.md#fromjson-1)
- [fromJsonString](SalesInvoicesServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesInvoicesServiceCountReq**(`data?`): [`SalesInvoicesServiceCountReq`](SalesInvoicesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesInvoicesServiceCountReq`](SalesInvoicesServiceCountReq.md)\> |

#### Returns

[`SalesInvoicesServiceCountReq`](SalesInvoicesServiceCountReq.md)

#### Overrides

Message\&lt;SalesInvoicesServiceCountReq\&gt;.constructor

#### Defined in

[src/sales_invoices.scailo_pb.ts:3715](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L3715)

## Properties

### approvedByUserId

• `Optional` **approvedByUserId**: `bigint`

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

from field: optional uint64 approved_by_user_id = 13;

#### Defined in

[src/sales_invoices.scailo_pb.ts:3463](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L3463)

___

### approvedOnEnd

• `Optional` **approvedOnEnd**: `bigint`

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

from field: optional uint64 approved_on_end = 12;

#### Defined in

[src/sales_invoices.scailo_pb.ts:3447](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L3447)

___

### approvedOnStart

• `Optional` **approvedOnStart**: `bigint`

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

from field: optional uint64 approved_on_start = 11;

#### Defined in

[src/sales_invoices.scailo_pb.ts:3431](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L3431)

___

### approverRoleId

• `Optional` **approverRoleId**: `bigint`

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

from field: optional uint64 approver_role_id = 14;

#### Defined in

[src/sales_invoices.scailo_pb.ts:3479](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L3479)

___

### bankAccountId

• `Optional` **bankAccountId**: `bigint`

**`Optional`**

**`Description`**

The unique internal identifier of the organization's bank account designated to receive the payment for this invoice.

**`Example`**

```ts
15
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Unsigned 64-bit integer greater than 0.

**`Generated`**

from field: optional uint64 bank_account_id = 25;

#### Defined in

[src/sales_invoices.scailo_pb.ts:3607](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L3607)

___

### buyerClientId

• `Optional` **buyerClientId**: `bigint`

**`Optional`**

**`Description`**

Filter sales invoices by the unique internal identifier of the buyer client (the entity financially responsible) associated with the linked source document (e.g., Sales Order).

**`Example`**

```ts
1051
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 buyer_client_id = 51;

#### Defined in

[src/sales_invoices.scailo_pb.ts:3655](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L3655)

___

### completedOnEnd

• `Optional` **completedOnEnd**: `bigint`

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

from field: optional uint64 completed_on_end = 16;

#### Defined in

[src/sales_invoices.scailo_pb.ts:3511](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L3511)

___

### completedOnStart

• `Optional` **completedOnStart**: `bigint`

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

from field: optional uint64 completed_on_start = 15;

#### Defined in

[src/sales_invoices.scailo_pb.ts:3495](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L3495)

___

### consigneeClientId

• `Optional` **consigneeClientId**: `bigint`

**`Optional`**

**`Description`**

Filter sales invoices by the unique internal identifier of the consignee client associated with the linked source document (e.g., Sales Order).

**`Example`**

```ts
1050
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 consignee_client_id = 50;

#### Defined in

[src/sales_invoices.scailo_pb.ts:3639](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L3639)

___

### creationTimestampEnd

• `Optional` **creationTimestampEnd**: `bigint`

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

from field: optional uint64 creation_timestamp_end = 102;

#### Defined in

[src/sales_invoices.scailo_pb.ts:3355](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L3355)

___

### creationTimestampStart

• `Optional` **creationTimestampStart**: `bigint`

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

from field: optional uint64 creation_timestamp_start = 101;

#### Defined in

[src/sales_invoices.scailo_pb.ts:3339](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L3339)

___

### currencyId

• `Optional` **currencyId**: `bigint`

**`Optional`**

**`Description`**

The unique internal identifier of the currency used for all financial calculations and billing within this invoice.

**`Example`**

```ts
3
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Unsigned 64-bit integer greater than 0.

**`Generated`**

from field: optional uint64 currency_id = 24;

#### Defined in

[src/sales_invoices.scailo_pb.ts:3591](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L3591)

___

### entityUuid

• `Optional` **entityUuid**: `string`

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

from field: optional string entity_uuid = 8;

#### Defined in

[src/sales_invoices.scailo_pb.ts:3403](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L3403)

___

### familyId

• `Optional` **familyId**: `bigint`

**`Optional`**

**`Description`**

Filter sales invoices that contain at least one line item belonging to this specific family ID.

**`Example`**

```ts
505
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 family_id = 40;

#### Defined in

[src/sales_invoices.scailo_pb.ts:3623](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L3623)

___

### finalRefNumber

• `Optional` **finalRefNumber**: `string`

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

from field: optional string final_ref_number = 21;

#### Defined in

[src/sales_invoices.scailo_pb.ts:3543](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L3543)

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

**`Optional`**

**`Description`**

Count based on dynamic form field values.

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

[src/sales_invoices.scailo_pb.ts:3713](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L3713)

___

### isActive

• `Optional` **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md)

**`Optional`**

**`Description`**

Filter by active status. If `true`, then returns only active records. If `false`, then returns only inactive records.

**`Example`**

```ts
ANY
```

**`Generated`**

from field: optional Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/sales_invoices.scailo_pb.ts:3323](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L3323)

___

### modificationTimestampEnd

• `Optional` **modificationTimestampEnd**: `bigint`

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

from field: optional uint64 modification_timestamp_end = 104;

#### Defined in

[src/sales_invoices.scailo_pb.ts:3387](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L3387)

___

### modificationTimestampStart

• `Optional` **modificationTimestampStart**: `bigint`

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

from field: optional uint64 modification_timestamp_start = 103;

#### Defined in

[src/sales_invoices.scailo_pb.ts:3371](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L3371)

___

### projectId

• `Optional` **projectId**: `bigint`

**`Optional`**

**`Description`**

Filter sales invoices by the unique internal identifier of the project associated with the linked source document (e.g., Sales Order).

**`Example`**

```ts
88
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 project_id = 52;

#### Defined in

[src/sales_invoices.scailo_pb.ts:3671](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L3671)

___

### refFrom

• `Optional` **refFrom**: [`SALES_INVOICE_REF_FROM`](../enums/SALES_INVOICE_REF_FROM.md)

**`Optional`**

**`Description`**

The specific module or record type from which this invoice originates (e.g., Sales Order).

**`Example`**

```ts
"SALES_INVOICE_REF_FROM_SALES_ORDER"
```

**`Regex`**

^[A-Z_]+$

**`Format`**

Valid SALES_INVOICE_REF_FROM enum value. Cannot be unspecified (0).

**`Generated`**

from field: optional Scailo.SALES_INVOICE_REF_FROM ref_from = 22;

#### Defined in

[src/sales_invoices.scailo_pb.ts:3559](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L3559)

___

### refId

• `Optional` **refId**: `bigint`

**`Optional`**

**`Description`**

The unique internal identifier of the specific referenced source document (e.g., the ID of the actual Sales Order being billed).

**`Example`**

```ts
1024
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Unsigned 64-bit integer greater than 0.

**`Generated`**

from field: optional uint64 ref_id = 23;

#### Defined in

[src/sales_invoices.scailo_pb.ts:3575](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L3575)

___

### referenceId

• `Optional` **referenceId**: `string`

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

from field: optional string reference_id = 20;

#### Defined in

[src/sales_invoices.scailo_pb.ts:3527](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L3527)

___

### status

• `Optional` **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md)

**`Optional`**

**`Description`**

Filter by lifecycle status (e.g., DRAFT, STANDING).

**`Example`**

```ts
STANDING
```

**`Generated`**

from field: optional Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/sales_invoices.scailo_pb.ts:3415](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L3415)

___

### totalValueMax

• `Optional` **totalValueMax**: `bigint`

**`Optional`**

**`Description`**

Filter sales invoices where the grand total value is less than or equal to this amount. Evaluated in the base currency subunit (e.g., cents). Ignored if set to 0.

**`Example`**

```ts
1500000
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 total_value_max = 71;

#### Defined in

[src/sales_invoices.scailo_pb.ts:3703](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L3703)

___

### totalValueMin

• `Optional` **totalValueMin**: `bigint`

**`Optional`**

**`Description`**

Filter sales invoices where the grand total value is greater than or equal to this amount. Evaluated in the base currency subunit (e.g., cents). Ignored if set to 0.

**`Example`**

```ts
500000
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 total_value_min = 70;

#### Defined in

[src/sales_invoices.scailo_pb.ts:3687](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L3687)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_invoices.scailo_pb.ts:3722](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L3722)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_invoices.scailo_pb.ts:3720](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L3720)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesInvoicesServiceCountReq"``

#### Defined in

[src/sales_invoices.scailo_pb.ts:3721](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L3721)

## Methods

### clone

▸ **clone**(): [`SalesInvoicesServiceCountReq`](SalesInvoicesServiceCountReq.md)

Create a deep copy.

#### Returns

[`SalesInvoicesServiceCountReq`](SalesInvoicesServiceCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesInvoicesServiceCountReq`](SalesInvoicesServiceCountReq.md) \| `PlainMessage`\<[`SalesInvoicesServiceCountReq`](SalesInvoicesServiceCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesInvoicesServiceCountReq`](SalesInvoicesServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesInvoicesServiceCountReq`](SalesInvoicesServiceCountReq.md)\>

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
| `a` | `undefined` \| [`SalesInvoicesServiceCountReq`](SalesInvoicesServiceCountReq.md) \| `PlainMessage`\<[`SalesInvoicesServiceCountReq`](SalesInvoicesServiceCountReq.md)\> |
| `b` | `undefined` \| [`SalesInvoicesServiceCountReq`](SalesInvoicesServiceCountReq.md) \| `PlainMessage`\<[`SalesInvoicesServiceCountReq`](SalesInvoicesServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/sales_invoices.scailo_pb.ts:3763](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L3763)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesInvoicesServiceCountReq`](SalesInvoicesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesInvoicesServiceCountReq`](SalesInvoicesServiceCountReq.md)

#### Defined in

[src/sales_invoices.scailo_pb.ts:3751](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L3751)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesInvoicesServiceCountReq`](SalesInvoicesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesInvoicesServiceCountReq`](SalesInvoicesServiceCountReq.md)

#### Defined in

[src/sales_invoices.scailo_pb.ts:3755](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L3755)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesInvoicesServiceCountReq`](SalesInvoicesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesInvoicesServiceCountReq`](SalesInvoicesServiceCountReq.md)

#### Defined in

[src/sales_invoices.scailo_pb.ts:3759](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L3759)
