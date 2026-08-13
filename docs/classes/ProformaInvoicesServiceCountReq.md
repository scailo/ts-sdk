[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ProformaInvoicesServiceCountReq

# Class: ProformaInvoicesServiceCountReq

Target filter request for counting proforma invoice records matching specific logical criteria.
This message encapsulates lifecycle status filters, timestamp ranges, workflow markers,
and entity references to determine the total size of a targeted dataset.

**Note:** This is the primary message layout used by backend calculation engines, reporting
services, and frontend pagination headers to evaluate total record matches dynamically
before or alongside retrieving paginated results.

**`Generated`**

from message Scailo.ProformaInvoicesServiceCountReq

## Hierarchy

- `Message`\<[`ProformaInvoicesServiceCountReq`](ProformaInvoicesServiceCountReq.md)\>

  ↳ **`ProformaInvoicesServiceCountReq`**

## Table of contents

### Constructors

- [constructor](ProformaInvoicesServiceCountReq.md#constructor)

### Properties

- [approvedByUserId](ProformaInvoicesServiceCountReq.md#approvedbyuserid)
- [approvedOnEnd](ProformaInvoicesServiceCountReq.md#approvedonend)
- [approvedOnStart](ProformaInvoicesServiceCountReq.md#approvedonstart)
- [approverRoleId](ProformaInvoicesServiceCountReq.md#approverroleid)
- [bankAccountId](ProformaInvoicesServiceCountReq.md#bankaccountid)
- [billingStatus](ProformaInvoicesServiceCountReq.md#billingstatus)
- [buyerClientId](ProformaInvoicesServiceCountReq.md#buyerclientid)
- [completedOnEnd](ProformaInvoicesServiceCountReq.md#completedonend)
- [completedOnStart](ProformaInvoicesServiceCountReq.md#completedonstart)
- [consigneeClientId](ProformaInvoicesServiceCountReq.md#consigneeclientid)
- [creationTimestampEnd](ProformaInvoicesServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](ProformaInvoicesServiceCountReq.md#creationtimestampstart)
- [currencyId](ProformaInvoicesServiceCountReq.md#currencyid)
- [entityUuid](ProformaInvoicesServiceCountReq.md#entityuuid)
- [familyId](ProformaInvoicesServiceCountReq.md#familyid)
- [finalRefNumber](ProformaInvoicesServiceCountReq.md#finalrefnumber)
- [formData](ProformaInvoicesServiceCountReq.md#formdata)
- [isActive](ProformaInvoicesServiceCountReq.md#isactive)
- [modificationTimestampEnd](ProformaInvoicesServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](ProformaInvoicesServiceCountReq.md#modificationtimestampstart)
- [projectId](ProformaInvoicesServiceCountReq.md#projectid)
- [refFrom](ProformaInvoicesServiceCountReq.md#reffrom)
- [refId](ProformaInvoicesServiceCountReq.md#refid)
- [referenceId](ProformaInvoicesServiceCountReq.md#referenceid)
- [status](ProformaInvoicesServiceCountReq.md#status)
- [totalValueMax](ProformaInvoicesServiceCountReq.md#totalvaluemax)
- [totalValueMin](ProformaInvoicesServiceCountReq.md#totalvaluemin)
- [fields](ProformaInvoicesServiceCountReq.md#fields)
- [runtime](ProformaInvoicesServiceCountReq.md#runtime)
- [typeName](ProformaInvoicesServiceCountReq.md#typename)

### Methods

- [clone](ProformaInvoicesServiceCountReq.md#clone)
- [equals](ProformaInvoicesServiceCountReq.md#equals)
- [fromBinary](ProformaInvoicesServiceCountReq.md#frombinary)
- [fromJson](ProformaInvoicesServiceCountReq.md#fromjson)
- [fromJsonString](ProformaInvoicesServiceCountReq.md#fromjsonstring)
- [getType](ProformaInvoicesServiceCountReq.md#gettype)
- [toBinary](ProformaInvoicesServiceCountReq.md#tobinary)
- [toJSON](ProformaInvoicesServiceCountReq.md#tojson)
- [toJson](ProformaInvoicesServiceCountReq.md#tojson-1)
- [toJsonString](ProformaInvoicesServiceCountReq.md#tojsonstring)
- [equals](ProformaInvoicesServiceCountReq.md#equals-1)
- [fromBinary](ProformaInvoicesServiceCountReq.md#frombinary-1)
- [fromJson](ProformaInvoicesServiceCountReq.md#fromjson-1)
- [fromJsonString](ProformaInvoicesServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new ProformaInvoicesServiceCountReq**(`data?`): [`ProformaInvoicesServiceCountReq`](ProformaInvoicesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ProformaInvoicesServiceCountReq`](ProformaInvoicesServiceCountReq.md)\> |

#### Returns

[`ProformaInvoicesServiceCountReq`](ProformaInvoicesServiceCountReq.md)

#### Overrides

Message\&lt;ProformaInvoicesServiceCountReq\&gt;.constructor

#### Defined in

[src/proforma_invoices.scailo_pb.ts:3792](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/proforma_invoices.scailo_pb.ts#L3792)

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

[src/proforma_invoices.scailo_pb.ts:3524](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/proforma_invoices.scailo_pb.ts#L3524)

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

[src/proforma_invoices.scailo_pb.ts:3508](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/proforma_invoices.scailo_pb.ts#L3508)

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

[src/proforma_invoices.scailo_pb.ts:3492](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/proforma_invoices.scailo_pb.ts#L3492)

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

[src/proforma_invoices.scailo_pb.ts:3540](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/proforma_invoices.scailo_pb.ts#L3540)

___

### bankAccountId

• `Optional` **bankAccountId**: `bigint`

**`Optional`**

**`Description`**

The unique internal identifier of the organization's bank account designated to receive advance payments based on this proforma invoice.

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

[src/proforma_invoices.scailo_pb.ts:3668](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/proforma_invoices.scailo_pb.ts#L3668)

___

### billingStatus

• `Optional` **billingStatus**: [`PROFORMA_INVOICE_BILLING_STATUS`](../enums/PROFORMA_INVOICE_BILLING_STATUS.md)

**`Optional`**

**`Description`**

Filter proforma invoices based on their financial conversion lifecycle state—specifically, whether they remain as preliminary estimates (unbilled) or have been formally converted into finalized Sales Invoices (billed).

**`Example`**

```ts
PROFORMA_INVOICE_BILLING_STATUS_UNBILLED
```

**`Regex`**

^[A-Z_]+$

**`Format`**

Valid PROFORMA_INVOICE_BILLING_STATUS enum value.

**`Generated`**

from field: optional Scailo.PROFORMA_INVOICE_BILLING_STATUS billing_status = 50;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:3700](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/proforma_invoices.scailo_pb.ts#L3700)

___

### buyerClientId

• `Optional` **buyerClientId**: `bigint`

**`Optional`**

**`Description`**

Filter proforma invoices by the unique internal identifier of the buyer client (the entity financially responsible) associated with the linked source document (e.g., Sales Order).

**`Example`**

```ts
1051
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 buyer_client_id = 61;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:3732](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/proforma_invoices.scailo_pb.ts#L3732)

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

[src/proforma_invoices.scailo_pb.ts:3572](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/proforma_invoices.scailo_pb.ts#L3572)

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

[src/proforma_invoices.scailo_pb.ts:3556](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/proforma_invoices.scailo_pb.ts#L3556)

___

### consigneeClientId

• `Optional` **consigneeClientId**: `bigint`

**`Optional`**

**`Description`**

Filter proforma invoices by the unique internal identifier of the consignee client associated with the linked source document (e.g., Sales Order).

**`Example`**

```ts
1050
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 consignee_client_id = 60;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:3716](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/proforma_invoices.scailo_pb.ts#L3716)

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

[src/proforma_invoices.scailo_pb.ts:3416](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/proforma_invoices.scailo_pb.ts#L3416)

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

[src/proforma_invoices.scailo_pb.ts:3400](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/proforma_invoices.scailo_pb.ts#L3400)

___

### currencyId

• `Optional` **currencyId**: `bigint`

**`Optional`**

**`Description`**

The unique internal identifier of the currency used for all financial estimations within this proforma invoice.

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

[src/proforma_invoices.scailo_pb.ts:3652](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/proforma_invoices.scailo_pb.ts#L3652)

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

[src/proforma_invoices.scailo_pb.ts:3464](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/proforma_invoices.scailo_pb.ts#L3464)

___

### familyId

• `Optional` **familyId**: `bigint`

**`Optional`**

**`Description`**

Filter proforma invoices that contain at least one line item belonging to this specific family ID.

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

[src/proforma_invoices.scailo_pb.ts:3684](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/proforma_invoices.scailo_pb.ts#L3684)

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

[src/proforma_invoices.scailo_pb.ts:3604](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/proforma_invoices.scailo_pb.ts#L3604)

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

**`Optional`**

**`Description`**

Count based on dynamic form field values.

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:3790](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/proforma_invoices.scailo_pb.ts#L3790)

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

[src/proforma_invoices.scailo_pb.ts:3384](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/proforma_invoices.scailo_pb.ts#L3384)

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

[src/proforma_invoices.scailo_pb.ts:3448](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/proforma_invoices.scailo_pb.ts#L3448)

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

[src/proforma_invoices.scailo_pb.ts:3432](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/proforma_invoices.scailo_pb.ts#L3432)

___

### projectId

• `Optional` **projectId**: `bigint`

**`Optional`**

**`Description`**

Filter proforma invoices by the unique internal identifier of the project associated with the linked source document (e.g., Sales Order).

**`Example`**

```ts
88
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 project_id = 62;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:3748](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/proforma_invoices.scailo_pb.ts#L3748)

___

### refFrom

• `Optional` **refFrom**: [`PROFORMA_INVOICE_REF_FROM`](../enums/PROFORMA_INVOICE_REF_FROM.md)

**`Optional`**

**`Description`**

The specific module or record type from which the preliminary invoice originates and against which the estimated quantity is being checked (e.g., Sales Order).

**`Example`**

```ts
"PROFORMA_INVOICE_REF_FROM_SALES_ORDER"
```

**`Regex`**

^[A-Z_]+$

**`Format`**

Valid PROFORMA_INVOICE_REF_FROM enum value. Cannot be unspecified (0).

**`Generated`**

from field: optional Scailo.PROFORMA_INVOICE_REF_FROM ref_from = 22;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:3620](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/proforma_invoices.scailo_pb.ts#L3620)

___

### refId

• `Optional` **refId**: `bigint`

**`Optional`**

**`Description`**

The unique internal identifier of the specific referenced source document (e.g., the ID of the actual Sales Order being evaluated).

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

[src/proforma_invoices.scailo_pb.ts:3636](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/proforma_invoices.scailo_pb.ts#L3636)

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

[src/proforma_invoices.scailo_pb.ts:3588](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/proforma_invoices.scailo_pb.ts#L3588)

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

[src/proforma_invoices.scailo_pb.ts:3476](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/proforma_invoices.scailo_pb.ts#L3476)

___

### totalValueMax

• `Optional` **totalValueMax**: `bigint`

**`Optional`**

**`Description`**

Filter proforma invoices where the grand total value is less than or equal to this amount. Evaluated in the base currency subunit (e.g., cents). Ignored if set to 0.

**`Example`**

```ts
1500000
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 total_value_max = 81;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:3780](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/proforma_invoices.scailo_pb.ts#L3780)

___

### totalValueMin

• `Optional` **totalValueMin**: `bigint`

**`Optional`**

**`Description`**

Filter proforma invoices where the grand total value is greater than or equal to this amount. Evaluated in the base currency subunit (e.g., cents). Ignored if set to 0.

**`Example`**

```ts
500000
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 total_value_min = 80;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:3764](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/proforma_invoices.scailo_pb.ts#L3764)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/proforma_invoices.scailo_pb.ts:3799](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/proforma_invoices.scailo_pb.ts#L3799)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/proforma_invoices.scailo_pb.ts:3797](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/proforma_invoices.scailo_pb.ts#L3797)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ProformaInvoicesServiceCountReq"``

#### Defined in

[src/proforma_invoices.scailo_pb.ts:3798](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/proforma_invoices.scailo_pb.ts#L3798)

## Methods

### clone

▸ **clone**(): [`ProformaInvoicesServiceCountReq`](ProformaInvoicesServiceCountReq.md)

Create a deep copy.

#### Returns

[`ProformaInvoicesServiceCountReq`](ProformaInvoicesServiceCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`ProformaInvoicesServiceCountReq`](ProformaInvoicesServiceCountReq.md) \| `PlainMessage`\<[`ProformaInvoicesServiceCountReq`](ProformaInvoicesServiceCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`ProformaInvoicesServiceCountReq`](ProformaInvoicesServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ProformaInvoicesServiceCountReq`](ProformaInvoicesServiceCountReq.md)\>

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
| `a` | `undefined` \| [`ProformaInvoicesServiceCountReq`](ProformaInvoicesServiceCountReq.md) \| `PlainMessage`\<[`ProformaInvoicesServiceCountReq`](ProformaInvoicesServiceCountReq.md)\> |
| `b` | `undefined` \| [`ProformaInvoicesServiceCountReq`](ProformaInvoicesServiceCountReq.md) \| `PlainMessage`\<[`ProformaInvoicesServiceCountReq`](ProformaInvoicesServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/proforma_invoices.scailo_pb.ts:3841](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/proforma_invoices.scailo_pb.ts#L3841)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ProformaInvoicesServiceCountReq`](ProformaInvoicesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ProformaInvoicesServiceCountReq`](ProformaInvoicesServiceCountReq.md)

#### Defined in

[src/proforma_invoices.scailo_pb.ts:3829](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/proforma_invoices.scailo_pb.ts#L3829)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ProformaInvoicesServiceCountReq`](ProformaInvoicesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProformaInvoicesServiceCountReq`](ProformaInvoicesServiceCountReq.md)

#### Defined in

[src/proforma_invoices.scailo_pb.ts:3833](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/proforma_invoices.scailo_pb.ts#L3833)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ProformaInvoicesServiceCountReq`](ProformaInvoicesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProformaInvoicesServiceCountReq`](ProformaInvoicesServiceCountReq.md)

#### Defined in

[src/proforma_invoices.scailo_pb.ts:3837](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/proforma_invoices.scailo_pb.ts#L3837)
