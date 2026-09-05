[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ProformaInvoicesServiceFilterReq

# Class: ProformaInvoicesServiceFilterReq

Advanced filter request for searching and paginating proforma invoices using multiple logical criteria.
This message encapsulates pagination controls, sorting keys, lifecycle status filters,
timestamp ranges, and entity references.

**Note:** This is the primary message layout used by the frontend and external API clients
to build robust data-table queries, reporting views, and targeted record lookups.

**`Generated`**

from message Scailo.ProformaInvoicesServiceFilterReq

## Hierarchy

- `Message`\<[`ProformaInvoicesServiceFilterReq`](ProformaInvoicesServiceFilterReq.md)\>

  ↳ **`ProformaInvoicesServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](ProformaInvoicesServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](ProformaInvoicesServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](ProformaInvoicesServiceFilterReq.md#approvedonend)
- [approvedOnStart](ProformaInvoicesServiceFilterReq.md#approvedonstart)
- [approverRoleId](ProformaInvoicesServiceFilterReq.md#approverroleid)
- [bankAccountId](ProformaInvoicesServiceFilterReq.md#bankaccountid)
- [billingStatus](ProformaInvoicesServiceFilterReq.md#billingstatus)
- [buyerClientId](ProformaInvoicesServiceFilterReq.md#buyerclientid)
- [completedOnEnd](ProformaInvoicesServiceFilterReq.md#completedonend)
- [completedOnStart](ProformaInvoicesServiceFilterReq.md#completedonstart)
- [consigneeClientId](ProformaInvoicesServiceFilterReq.md#consigneeclientid)
- [count](ProformaInvoicesServiceFilterReq.md#count)
- [creationTimestampEnd](ProformaInvoicesServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](ProformaInvoicesServiceFilterReq.md#creationtimestampstart)
- [currencyId](ProformaInvoicesServiceFilterReq.md#currencyid)
- [entityUuid](ProformaInvoicesServiceFilterReq.md#entityuuid)
- [familyId](ProformaInvoicesServiceFilterReq.md#familyid)
- [finalRefNumber](ProformaInvoicesServiceFilterReq.md#finalrefnumber)
- [formData](ProformaInvoicesServiceFilterReq.md#formdata)
- [includeFormData](ProformaInvoicesServiceFilterReq.md#includeformdata)
- [isActive](ProformaInvoicesServiceFilterReq.md#isactive)
- [modificationTimestampEnd](ProformaInvoicesServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](ProformaInvoicesServiceFilterReq.md#modificationtimestampstart)
- [offset](ProformaInvoicesServiceFilterReq.md#offset)
- [projectId](ProformaInvoicesServiceFilterReq.md#projectid)
- [refFrom](ProformaInvoicesServiceFilterReq.md#reffrom)
- [refId](ProformaInvoicesServiceFilterReq.md#refid)
- [referenceId](ProformaInvoicesServiceFilterReq.md#referenceid)
- [sortKey](ProformaInvoicesServiceFilterReq.md#sortkey)
- [sortOrder](ProformaInvoicesServiceFilterReq.md#sortorder)
- [status](ProformaInvoicesServiceFilterReq.md#status)
- [totalValueMax](ProformaInvoicesServiceFilterReq.md#totalvaluemax)
- [totalValueMin](ProformaInvoicesServiceFilterReq.md#totalvaluemin)
- [fields](ProformaInvoicesServiceFilterReq.md#fields)
- [runtime](ProformaInvoicesServiceFilterReq.md#runtime)
- [typeName](ProformaInvoicesServiceFilterReq.md#typename)

### Methods

- [clone](ProformaInvoicesServiceFilterReq.md#clone)
- [equals](ProformaInvoicesServiceFilterReq.md#equals)
- [fromBinary](ProformaInvoicesServiceFilterReq.md#frombinary)
- [fromJson](ProformaInvoicesServiceFilterReq.md#fromjson)
- [fromJsonString](ProformaInvoicesServiceFilterReq.md#fromjsonstring)
- [getType](ProformaInvoicesServiceFilterReq.md#gettype)
- [toBinary](ProformaInvoicesServiceFilterReq.md#tobinary)
- [toJSON](ProformaInvoicesServiceFilterReq.md#tojson)
- [toJson](ProformaInvoicesServiceFilterReq.md#tojson-1)
- [toJsonString](ProformaInvoicesServiceFilterReq.md#tojsonstring)
- [equals](ProformaInvoicesServiceFilterReq.md#equals-1)
- [fromBinary](ProformaInvoicesServiceFilterReq.md#frombinary-1)
- [fromJson](ProformaInvoicesServiceFilterReq.md#fromjson-1)
- [fromJsonString](ProformaInvoicesServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new ProformaInvoicesServiceFilterReq**(`data?`): [`ProformaInvoicesServiceFilterReq`](ProformaInvoicesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ProformaInvoicesServiceFilterReq`](ProformaInvoicesServiceFilterReq.md)\> |

#### Returns

[`ProformaInvoicesServiceFilterReq`](ProformaInvoicesServiceFilterReq.md)

#### Overrides

Message\&lt;ProformaInvoicesServiceFilterReq\&gt;.constructor

#### Defined in

[src/proforma_invoices.scailo_pb.ts:3302](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L3302)

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

[src/proforma_invoices.scailo_pb.ts:3021](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L3021)

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

[src/proforma_invoices.scailo_pb.ts:3005](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L3005)

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

[src/proforma_invoices.scailo_pb.ts:2989](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L2989)

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

[src/proforma_invoices.scailo_pb.ts:3037](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L3037)

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

[src/proforma_invoices.scailo_pb.ts:3165](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L3165)

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

[src/proforma_invoices.scailo_pb.ts:3197](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L3197)

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

[src/proforma_invoices.scailo_pb.ts:3229](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L3229)

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

[src/proforma_invoices.scailo_pb.ts:3069](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L3069)

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

[src/proforma_invoices.scailo_pb.ts:3053](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L3053)

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

[src/proforma_invoices.scailo_pb.ts:3213](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L3213)

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

[src/proforma_invoices.scailo_pb.ts:2843](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L2843)

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

[src/proforma_invoices.scailo_pb.ts:2913](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L2913)

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

[src/proforma_invoices.scailo_pb.ts:2897](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L2897)

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

[src/proforma_invoices.scailo_pb.ts:3149](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L3149)

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

[src/proforma_invoices.scailo_pb.ts:2961](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L2961)

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

[src/proforma_invoices.scailo_pb.ts:3181](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L3181)

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

[src/proforma_invoices.scailo_pb.ts:3101](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L3101)

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

**`Optional`**

**`Description`**

Filter based on dynamic form field values.

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:3287](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L3287)

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

[src/proforma_invoices.scailo_pb.ts:3300](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L3300)

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

[src/proforma_invoices.scailo_pb.ts:2827](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L2827)

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

[src/proforma_invoices.scailo_pb.ts:2945](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L2945)

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

[src/proforma_invoices.scailo_pb.ts:2929](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L2929)

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

[src/proforma_invoices.scailo_pb.ts:2859](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L2859)

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

[src/proforma_invoices.scailo_pb.ts:3245](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L3245)

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

[src/proforma_invoices.scailo_pb.ts:3117](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L3117)

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

[src/proforma_invoices.scailo_pb.ts:3133](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L3133)

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

[src/proforma_invoices.scailo_pb.ts:3085](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L3085)

___

### sortKey

• `Optional` **sortKey**: [`PROFORMA_INVOICE_SORT_KEY`](../enums/PROFORMA_INVOICE_SORT_KEY.md)

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: optional Scailo.PROFORMA_INVOICE_SORT_KEY sort_key = 5;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:2881](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L2881)

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

[src/proforma_invoices.scailo_pb.ts:2871](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L2871)

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

[src/proforma_invoices.scailo_pb.ts:2973](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L2973)

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

[src/proforma_invoices.scailo_pb.ts:3277](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L3277)

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

[src/proforma_invoices.scailo_pb.ts:3261](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L3261)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/proforma_invoices.scailo_pb.ts:3309](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L3309)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/proforma_invoices.scailo_pb.ts:3307](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L3307)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ProformaInvoicesServiceFilterReq"``

#### Defined in

[src/proforma_invoices.scailo_pb.ts:3308](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L3308)

## Methods

### clone

▸ **clone**(): [`ProformaInvoicesServiceFilterReq`](ProformaInvoicesServiceFilterReq.md)

Create a deep copy.

#### Returns

[`ProformaInvoicesServiceFilterReq`](ProformaInvoicesServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`ProformaInvoicesServiceFilterReq`](ProformaInvoicesServiceFilterReq.md) \| `PlainMessage`\<[`ProformaInvoicesServiceFilterReq`](ProformaInvoicesServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`ProformaInvoicesServiceFilterReq`](ProformaInvoicesServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ProformaInvoicesServiceFilterReq`](ProformaInvoicesServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`ProformaInvoicesServiceFilterReq`](ProformaInvoicesServiceFilterReq.md) \| `PlainMessage`\<[`ProformaInvoicesServiceFilterReq`](ProformaInvoicesServiceFilterReq.md)\> |
| `b` | `undefined` \| [`ProformaInvoicesServiceFilterReq`](ProformaInvoicesServiceFilterReq.md) \| `PlainMessage`\<[`ProformaInvoicesServiceFilterReq`](ProformaInvoicesServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/proforma_invoices.scailo_pb.ts:3356](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L3356)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ProformaInvoicesServiceFilterReq`](ProformaInvoicesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ProformaInvoicesServiceFilterReq`](ProformaInvoicesServiceFilterReq.md)

#### Defined in

[src/proforma_invoices.scailo_pb.ts:3344](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L3344)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ProformaInvoicesServiceFilterReq`](ProformaInvoicesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProformaInvoicesServiceFilterReq`](ProformaInvoicesServiceFilterReq.md)

#### Defined in

[src/proforma_invoices.scailo_pb.ts:3348](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L3348)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ProformaInvoicesServiceFilterReq`](ProformaInvoicesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProformaInvoicesServiceFilterReq`](ProformaInvoicesServiceFilterReq.md)

#### Defined in

[src/proforma_invoices.scailo_pb.ts:3352](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L3352)
