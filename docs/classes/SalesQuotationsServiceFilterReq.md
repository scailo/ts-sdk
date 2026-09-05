[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesQuotationsServiceFilterReq

# Class: SalesQuotationsServiceFilterReq

Advanced filter request for searching and paginating sales quotations using multiple logical criteria.
This message encapsulates pagination controls, sorting keys, lifecycle status filters,
timestamp ranges, and entity references.

**Note:** This is the primary message layout used by the frontend and external API clients
to build robust data-table queries, reporting views, and targeted record lookups.

**`Generated`**

from message Scailo.SalesQuotationsServiceFilterReq

## Hierarchy

- `Message`\<[`SalesQuotationsServiceFilterReq`](SalesQuotationsServiceFilterReq.md)\>

  ↳ **`SalesQuotationsServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](SalesQuotationsServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](SalesQuotationsServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](SalesQuotationsServiceFilterReq.md#approvedonend)
- [approvedOnStart](SalesQuotationsServiceFilterReq.md#approvedonstart)
- [approverRoleId](SalesQuotationsServiceFilterReq.md#approverroleid)
- [buyerClientId](SalesQuotationsServiceFilterReq.md#buyerclientid)
- [completedOnEnd](SalesQuotationsServiceFilterReq.md#completedonend)
- [completedOnStart](SalesQuotationsServiceFilterReq.md#completedonstart)
- [consigneeClientId](SalesQuotationsServiceFilterReq.md#consigneeclientid)
- [count](SalesQuotationsServiceFilterReq.md#count)
- [creationTimestampEnd](SalesQuotationsServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](SalesQuotationsServiceFilterReq.md#creationtimestampstart)
- [currencyId](SalesQuotationsServiceFilterReq.md#currencyid)
- [deliveryDateEnd](SalesQuotationsServiceFilterReq.md#deliverydateend)
- [deliveryDateExact](SalesQuotationsServiceFilterReq.md#deliverydateexact)
- [deliveryDateStart](SalesQuotationsServiceFilterReq.md#deliverydatestart)
- [entityUuid](SalesQuotationsServiceFilterReq.md#entityuuid)
- [familyId](SalesQuotationsServiceFilterReq.md#familyid)
- [finalRefNumber](SalesQuotationsServiceFilterReq.md#finalrefnumber)
- [formData](SalesQuotationsServiceFilterReq.md#formdata)
- [includeFormData](SalesQuotationsServiceFilterReq.md#includeformdata)
- [isActive](SalesQuotationsServiceFilterReq.md#isactive)
- [locationId](SalesQuotationsServiceFilterReq.md#locationid)
- [modificationTimestampEnd](SalesQuotationsServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](SalesQuotationsServiceFilterReq.md#modificationtimestampstart)
- [offset](SalesQuotationsServiceFilterReq.md#offset)
- [projectId](SalesQuotationsServiceFilterReq.md#projectid)
- [referenceId](SalesQuotationsServiceFilterReq.md#referenceid)
- [sortKey](SalesQuotationsServiceFilterReq.md#sortkey)
- [sortOrder](SalesQuotationsServiceFilterReq.md#sortorder)
- [status](SalesQuotationsServiceFilterReq.md#status)
- [fields](SalesQuotationsServiceFilterReq.md#fields)
- [runtime](SalesQuotationsServiceFilterReq.md#runtime)
- [typeName](SalesQuotationsServiceFilterReq.md#typename)

### Methods

- [clone](SalesQuotationsServiceFilterReq.md#clone)
- [equals](SalesQuotationsServiceFilterReq.md#equals)
- [fromBinary](SalesQuotationsServiceFilterReq.md#frombinary)
- [fromJson](SalesQuotationsServiceFilterReq.md#fromjson)
- [fromJsonString](SalesQuotationsServiceFilterReq.md#fromjsonstring)
- [getType](SalesQuotationsServiceFilterReq.md#gettype)
- [toBinary](SalesQuotationsServiceFilterReq.md#tobinary)
- [toJSON](SalesQuotationsServiceFilterReq.md#tojson)
- [toJson](SalesQuotationsServiceFilterReq.md#tojson-1)
- [toJsonString](SalesQuotationsServiceFilterReq.md#tojsonstring)
- [equals](SalesQuotationsServiceFilterReq.md#equals-1)
- [fromBinary](SalesQuotationsServiceFilterReq.md#frombinary-1)
- [fromJson](SalesQuotationsServiceFilterReq.md#fromjson-1)
- [fromJsonString](SalesQuotationsServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesQuotationsServiceFilterReq**(`data?`): [`SalesQuotationsServiceFilterReq`](SalesQuotationsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesQuotationsServiceFilterReq`](SalesQuotationsServiceFilterReq.md)\> |

#### Returns

[`SalesQuotationsServiceFilterReq`](SalesQuotationsServiceFilterReq.md)

#### Overrides

Message\&lt;SalesQuotationsServiceFilterReq\&gt;.constructor

#### Defined in

[src/sales_quotations.scailo_pb.ts:3294](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_quotations.scailo_pb.ts#L3294)

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

[src/sales_quotations.scailo_pb.ts:3045](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_quotations.scailo_pb.ts#L3045)

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

[src/sales_quotations.scailo_pb.ts:3029](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_quotations.scailo_pb.ts#L3029)

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

[src/sales_quotations.scailo_pb.ts:3013](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_quotations.scailo_pb.ts#L3013)

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

[src/sales_quotations.scailo_pb.ts:3061](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_quotations.scailo_pb.ts#L3061)

___

### buyerClientId

• `Optional` **buyerClientId**: `bigint`

**`Optional`**

**`Description`**

The unique internal identifier of the buyer client (the entity proposed to be financially responsible for the quotation).

**`Example`**

```ts
1051
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Unsigned 64-bit integer greater than 0.

**`Generated`**

from field: optional uint64 buyer_client_id = 23;

#### Defined in

[src/sales_quotations.scailo_pb.ts:3157](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_quotations.scailo_pb.ts#L3157)

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

[src/sales_quotations.scailo_pb.ts:3093](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_quotations.scailo_pb.ts#L3093)

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

[src/sales_quotations.scailo_pb.ts:3077](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_quotations.scailo_pb.ts#L3077)

___

### consigneeClientId

• `Optional` **consigneeClientId**: `bigint`

**`Optional`**

**`Description`**

The unique internal identifier of the consignee client (the entity proposed to physically receive the goods or services).

**`Example`**

```ts
1050
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Unsigned 64-bit integer greater than 0.

**`Generated`**

from field: optional uint64 consignee_client_id = 22;

#### Defined in

[src/sales_quotations.scailo_pb.ts:3141](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_quotations.scailo_pb.ts#L3141)

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

[src/sales_quotations.scailo_pb.ts:2867](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_quotations.scailo_pb.ts#L2867)

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

[src/sales_quotations.scailo_pb.ts:2937](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_quotations.scailo_pb.ts#L2937)

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

[src/sales_quotations.scailo_pb.ts:2921](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_quotations.scailo_pb.ts#L2921)

___

### currencyId

• `Optional` **currencyId**: `bigint`

**`Optional`**

**`Description`**

The unique internal identifier of the currency used for all financial calculations, billing, and pricing within this quotation.

**`Example`**

```ts
3
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Unsigned 64-bit integer greater than 0.

**`Generated`**

from field: optional uint64 currency_id = 25;

#### Defined in

[src/sales_quotations.scailo_pb.ts:3189](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_quotations.scailo_pb.ts#L3189)

___

### deliveryDateEnd

• `Optional` **deliveryDateEnd**: `string`

**`Optional`**

**`Description`**

Filter sales quotations containing line items scheduled for delivery ON or BEFORE this specific proposed date.

**`Example`**

```ts
"2023-11-30"
```

**`Regex`**

.*

**`Format`**

String following the standard date format (e.g., YYYY-MM-DD).

**`Generated`**

from field: optional string delivery_date_end = 43;

#### Defined in

[src/sales_quotations.scailo_pb.ts:3269](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_quotations.scailo_pb.ts#L3269)

___

### deliveryDateExact

• `Optional` **deliveryDateExact**: `string`

**`Optional`**

**`Description`**

Filter sales quotations containing line items scheduled for exact delivery on this specific proposed date.

**`Example`**

```ts
"2023-11-15"
```

**`Regex`**

.*

**`Format`**

String following the standard date format (e.g., YYYY-MM-DD).

**`Generated`**

from field: optional string delivery_date_exact = 41;

#### Defined in

[src/sales_quotations.scailo_pb.ts:3237](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_quotations.scailo_pb.ts#L3237)

___

### deliveryDateStart

• `Optional` **deliveryDateStart**: `string`

**`Optional`**

**`Description`**

Filter sales quotations containing line items scheduled for delivery ON or AFTER this specific proposed date.

**`Example`**

```ts
"2023-11-01"
```

**`Regex`**

.*

**`Format`**

String following the standard date format (e.g., YYYY-MM-DD).

**`Generated`**

from field: optional string delivery_date_start = 42;

#### Defined in

[src/sales_quotations.scailo_pb.ts:3253](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_quotations.scailo_pb.ts#L3253)

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

[src/sales_quotations.scailo_pb.ts:2985](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_quotations.scailo_pb.ts#L2985)

___

### familyId

• `Optional` **familyId**: `bigint`

**`Optional`**

**`Description`**

Filter sales quotations that contain at least one line item belonging to this specific family ID.

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

[src/sales_quotations.scailo_pb.ts:3221](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_quotations.scailo_pb.ts#L3221)

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

[src/sales_quotations.scailo_pb.ts:3125](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_quotations.scailo_pb.ts#L3125)

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

**`Optional`**

**`Description`**

Filter based on dynamic form field values.

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

[src/sales_quotations.scailo_pb.ts:3279](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_quotations.scailo_pb.ts#L3279)

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

[src/sales_quotations.scailo_pb.ts:3292](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_quotations.scailo_pb.ts#L3292)

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

[src/sales_quotations.scailo_pb.ts:2851](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_quotations.scailo_pb.ts#L2851)

___

### locationId

• `Optional` **locationId**: `bigint`

**`Optional`**

**`Description`**

The unique internal identifier of the originating location (e.g., specific warehouse, plant, or office) proposed to fulfill this quotation if converted.

**`Example`**

```ts
42
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Unsigned 64-bit integer greater than 0.

**`Generated`**

from field: optional uint64 location_id = 24;

#### Defined in

[src/sales_quotations.scailo_pb.ts:3173](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_quotations.scailo_pb.ts#L3173)

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

[src/sales_quotations.scailo_pb.ts:2969](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_quotations.scailo_pb.ts#L2969)

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

[src/sales_quotations.scailo_pb.ts:2953](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_quotations.scailo_pb.ts#L2953)

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

[src/sales_quotations.scailo_pb.ts:2883](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_quotations.scailo_pb.ts#L2883)

___

### projectId

• `Optional` **projectId**: `bigint`

**`Optional`**

**`Description`**

The unique internal identifier of an associated project, used to track potential sales revenue against specific long-term initiatives.

**`Example`**

```ts
88
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 project_id = 26;

#### Defined in

[src/sales_quotations.scailo_pb.ts:3205](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_quotations.scailo_pb.ts#L3205)

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

[src/sales_quotations.scailo_pb.ts:3109](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_quotations.scailo_pb.ts#L3109)

___

### sortKey

• `Optional` **sortKey**: [`SALES_QUOTATION_SORT_KEY`](../enums/SALES_QUOTATION_SORT_KEY.md)

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: optional Scailo.SALES_QUOTATION_SORT_KEY sort_key = 5;

#### Defined in

[src/sales_quotations.scailo_pb.ts:2905](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_quotations.scailo_pb.ts#L2905)

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

[src/sales_quotations.scailo_pb.ts:2895](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_quotations.scailo_pb.ts#L2895)

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

[src/sales_quotations.scailo_pb.ts:2997](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_quotations.scailo_pb.ts#L2997)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_quotations.scailo_pb.ts:3301](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_quotations.scailo_pb.ts#L3301)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_quotations.scailo_pb.ts:3299](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_quotations.scailo_pb.ts#L3299)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesQuotationsServiceFilterReq"``

#### Defined in

[src/sales_quotations.scailo_pb.ts:3300](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_quotations.scailo_pb.ts#L3300)

## Methods

### clone

▸ **clone**(): [`SalesQuotationsServiceFilterReq`](SalesQuotationsServiceFilterReq.md)

Create a deep copy.

#### Returns

[`SalesQuotationsServiceFilterReq`](SalesQuotationsServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesQuotationsServiceFilterReq`](SalesQuotationsServiceFilterReq.md) \| `PlainMessage`\<[`SalesQuotationsServiceFilterReq`](SalesQuotationsServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesQuotationsServiceFilterReq`](SalesQuotationsServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesQuotationsServiceFilterReq`](SalesQuotationsServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`SalesQuotationsServiceFilterReq`](SalesQuotationsServiceFilterReq.md) \| `PlainMessage`\<[`SalesQuotationsServiceFilterReq`](SalesQuotationsServiceFilterReq.md)\> |
| `b` | `undefined` \| [`SalesQuotationsServiceFilterReq`](SalesQuotationsServiceFilterReq.md) \| `PlainMessage`\<[`SalesQuotationsServiceFilterReq`](SalesQuotationsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/sales_quotations.scailo_pb.ts:3346](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_quotations.scailo_pb.ts#L3346)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesQuotationsServiceFilterReq`](SalesQuotationsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesQuotationsServiceFilterReq`](SalesQuotationsServiceFilterReq.md)

#### Defined in

[src/sales_quotations.scailo_pb.ts:3334](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_quotations.scailo_pb.ts#L3334)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesQuotationsServiceFilterReq`](SalesQuotationsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesQuotationsServiceFilterReq`](SalesQuotationsServiceFilterReq.md)

#### Defined in

[src/sales_quotations.scailo_pb.ts:3338](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_quotations.scailo_pb.ts#L3338)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesQuotationsServiceFilterReq`](SalesQuotationsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesQuotationsServiceFilterReq`](SalesQuotationsServiceFilterReq.md)

#### Defined in

[src/sales_quotations.scailo_pb.ts:3342](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_quotations.scailo_pb.ts#L3342)
