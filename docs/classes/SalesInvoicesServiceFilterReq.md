[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesInvoicesServiceFilterReq

# Class: SalesInvoicesServiceFilterReq

Advanced filter request for searching and paginating sales invoices using multiple logical criteria.
This message encapsulates pagination controls, sorting keys, lifecycle status filters,
timestamp ranges, and entity references.

**Note:** This is the primary message layout used by the frontend and external API clients
to build robust data-table queries, reporting views, and targeted record lookups.

**`Generated`**

from message Scailo.SalesInvoicesServiceFilterReq

## Hierarchy

- `Message`\<[`SalesInvoicesServiceFilterReq`](SalesInvoicesServiceFilterReq.md)\>

  ↳ **`SalesInvoicesServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](SalesInvoicesServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](SalesInvoicesServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](SalesInvoicesServiceFilterReq.md#approvedonend)
- [approvedOnStart](SalesInvoicesServiceFilterReq.md#approvedonstart)
- [approverRoleId](SalesInvoicesServiceFilterReq.md#approverroleid)
- [bankAccountId](SalesInvoicesServiceFilterReq.md#bankaccountid)
- [buyerClientId](SalesInvoicesServiceFilterReq.md#buyerclientid)
- [completedOnEnd](SalesInvoicesServiceFilterReq.md#completedonend)
- [completedOnStart](SalesInvoicesServiceFilterReq.md#completedonstart)
- [consigneeClientId](SalesInvoicesServiceFilterReq.md#consigneeclientid)
- [count](SalesInvoicesServiceFilterReq.md#count)
- [creationTimestampEnd](SalesInvoicesServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](SalesInvoicesServiceFilterReq.md#creationtimestampstart)
- [currencyId](SalesInvoicesServiceFilterReq.md#currencyid)
- [entityUuid](SalesInvoicesServiceFilterReq.md#entityuuid)
- [familyId](SalesInvoicesServiceFilterReq.md#familyid)
- [finalRefNumber](SalesInvoicesServiceFilterReq.md#finalrefnumber)
- [formData](SalesInvoicesServiceFilterReq.md#formdata)
- [includeFormData](SalesInvoicesServiceFilterReq.md#includeformdata)
- [isActive](SalesInvoicesServiceFilterReq.md#isactive)
- [modificationTimestampEnd](SalesInvoicesServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](SalesInvoicesServiceFilterReq.md#modificationtimestampstart)
- [offset](SalesInvoicesServiceFilterReq.md#offset)
- [projectId](SalesInvoicesServiceFilterReq.md#projectid)
- [refFrom](SalesInvoicesServiceFilterReq.md#reffrom)
- [refId](SalesInvoicesServiceFilterReq.md#refid)
- [referenceId](SalesInvoicesServiceFilterReq.md#referenceid)
- [sortKey](SalesInvoicesServiceFilterReq.md#sortkey)
- [sortOrder](SalesInvoicesServiceFilterReq.md#sortorder)
- [status](SalesInvoicesServiceFilterReq.md#status)
- [totalValueMax](SalesInvoicesServiceFilterReq.md#totalvaluemax)
- [totalValueMin](SalesInvoicesServiceFilterReq.md#totalvaluemin)
- [fields](SalesInvoicesServiceFilterReq.md#fields)
- [runtime](SalesInvoicesServiceFilterReq.md#runtime)
- [typeName](SalesInvoicesServiceFilterReq.md#typename)

### Methods

- [clone](SalesInvoicesServiceFilterReq.md#clone)
- [equals](SalesInvoicesServiceFilterReq.md#equals)
- [fromBinary](SalesInvoicesServiceFilterReq.md#frombinary)
- [fromJson](SalesInvoicesServiceFilterReq.md#fromjson)
- [fromJsonString](SalesInvoicesServiceFilterReq.md#fromjsonstring)
- [getType](SalesInvoicesServiceFilterReq.md#gettype)
- [toBinary](SalesInvoicesServiceFilterReq.md#tobinary)
- [toJSON](SalesInvoicesServiceFilterReq.md#tojson)
- [toJson](SalesInvoicesServiceFilterReq.md#tojson-1)
- [toJsonString](SalesInvoicesServiceFilterReq.md#tojsonstring)
- [equals](SalesInvoicesServiceFilterReq.md#equals-1)
- [fromBinary](SalesInvoicesServiceFilterReq.md#frombinary-1)
- [fromJson](SalesInvoicesServiceFilterReq.md#fromjson-1)
- [fromJsonString](SalesInvoicesServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesInvoicesServiceFilterReq**(`data?`): [`SalesInvoicesServiceFilterReq`](SalesInvoicesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesInvoicesServiceFilterReq`](SalesInvoicesServiceFilterReq.md)\> |

#### Returns

[`SalesInvoicesServiceFilterReq`](SalesInvoicesServiceFilterReq.md)

#### Overrides

Message\&lt;SalesInvoicesServiceFilterReq\&gt;.constructor

#### Defined in

[src/sales_invoices.scailo_pb.ts:3242](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L3242)

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

[src/sales_invoices.scailo_pb.ts:2977](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L2977)

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

[src/sales_invoices.scailo_pb.ts:2961](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L2961)

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

[src/sales_invoices.scailo_pb.ts:2945](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L2945)

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

[src/sales_invoices.scailo_pb.ts:2993](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L2993)

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

[src/sales_invoices.scailo_pb.ts:3121](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L3121)

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

[src/sales_invoices.scailo_pb.ts:3169](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L3169)

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

[src/sales_invoices.scailo_pb.ts:3025](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L3025)

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

[src/sales_invoices.scailo_pb.ts:3009](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L3009)

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

[src/sales_invoices.scailo_pb.ts:3153](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L3153)

___

### count

• **count**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

Number of records to fetch. **Critical:** Use `-1` to retrieve all records. A value of `0` will return no results. Default is `0`.

**`Example`**

```ts
100
```

**`Regex`**

^(?:-1|0|[1-9][0-9]*)$

**`Format`**

Must be -1 or any non-negative integer (>= -1).

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/sales_invoices.scailo_pb.ts:2799](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L2799)

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

[src/sales_invoices.scailo_pb.ts:2869](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L2869)

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

[src/sales_invoices.scailo_pb.ts:2853](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L2853)

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

[src/sales_invoices.scailo_pb.ts:3105](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L3105)

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

[src/sales_invoices.scailo_pb.ts:2917](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L2917)

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

[src/sales_invoices.scailo_pb.ts:3137](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L3137)

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

[src/sales_invoices.scailo_pb.ts:3057](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L3057)

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

**`Optional`**

**`Description`**

Filter based on dynamic form field values.

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

[src/sales_invoices.scailo_pb.ts:3227](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L3227)

___

### includeFormData

• `Optional` **includeFormData**: `boolean`

**`Optional`**

**`Description`**

If `true`, the response will include the associated custom form field values for each record.
Set to `false` to improve performance when form data is not needed.

**`Example`**

```ts
true
```

**`Generated`**

from field: optional bool include_form_data = 501;

#### Defined in

[src/sales_invoices.scailo_pb.ts:3240](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L3240)

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

[src/sales_invoices.scailo_pb.ts:2783](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L2783)

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

[src/sales_invoices.scailo_pb.ts:2901](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L2901)

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

[src/sales_invoices.scailo_pb.ts:2885](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L2885)

___

### offset

• `Optional` **offset**: `bigint`

**`Optional`**

**`Description`**

Number of records to skip (offset) for pagination.

**`Example`**

```ts
0
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 offset = 3;

#### Defined in

[src/sales_invoices.scailo_pb.ts:2815](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L2815)

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

[src/sales_invoices.scailo_pb.ts:3185](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L3185)

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

[src/sales_invoices.scailo_pb.ts:3073](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L3073)

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

[src/sales_invoices.scailo_pb.ts:3089](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L3089)

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

[src/sales_invoices.scailo_pb.ts:3041](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L3041)

___

### sortKey

• `Optional` **sortKey**: [`SALES_INVOICE_SORT_KEY`](../enums/SALES_INVOICE_SORT_KEY.md)

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: optional Scailo.SALES_INVOICE_SORT_KEY sort_key = 5;

#### Defined in

[src/sales_invoices.scailo_pb.ts:2837](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L2837)

___

### sortOrder

• `Optional` **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md)

**`Optional`**

**`Description`**

Sort direction.

**`Example`**

```ts
DESCENDING
```

**`Generated`**

from field: optional Scailo.SORT_ORDER sort_order = 4;

#### Defined in

[src/sales_invoices.scailo_pb.ts:2827](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L2827)

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

[src/sales_invoices.scailo_pb.ts:2929](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L2929)

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

[src/sales_invoices.scailo_pb.ts:3217](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L3217)

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

[src/sales_invoices.scailo_pb.ts:3201](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L3201)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_invoices.scailo_pb.ts:3249](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L3249)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_invoices.scailo_pb.ts:3247](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L3247)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesInvoicesServiceFilterReq"``

#### Defined in

[src/sales_invoices.scailo_pb.ts:3248](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L3248)

## Methods

### clone

▸ **clone**(): [`SalesInvoicesServiceFilterReq`](SalesInvoicesServiceFilterReq.md)

Create a deep copy.

#### Returns

[`SalesInvoicesServiceFilterReq`](SalesInvoicesServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesInvoicesServiceFilterReq`](SalesInvoicesServiceFilterReq.md) \| `PlainMessage`\<[`SalesInvoicesServiceFilterReq`](SalesInvoicesServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesInvoicesServiceFilterReq`](SalesInvoicesServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesInvoicesServiceFilterReq`](SalesInvoicesServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`SalesInvoicesServiceFilterReq`](SalesInvoicesServiceFilterReq.md) \| `PlainMessage`\<[`SalesInvoicesServiceFilterReq`](SalesInvoicesServiceFilterReq.md)\> |
| `b` | `undefined` \| [`SalesInvoicesServiceFilterReq`](SalesInvoicesServiceFilterReq.md) \| `PlainMessage`\<[`SalesInvoicesServiceFilterReq`](SalesInvoicesServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/sales_invoices.scailo_pb.ts:3295](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L3295)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesInvoicesServiceFilterReq`](SalesInvoicesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesInvoicesServiceFilterReq`](SalesInvoicesServiceFilterReq.md)

#### Defined in

[src/sales_invoices.scailo_pb.ts:3283](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L3283)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesInvoicesServiceFilterReq`](SalesInvoicesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesInvoicesServiceFilterReq`](SalesInvoicesServiceFilterReq.md)

#### Defined in

[src/sales_invoices.scailo_pb.ts:3287](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L3287)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesInvoicesServiceFilterReq`](SalesInvoicesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesInvoicesServiceFilterReq`](SalesInvoicesServiceFilterReq.md)

#### Defined in

[src/sales_invoices.scailo_pb.ts:3291](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L3291)
