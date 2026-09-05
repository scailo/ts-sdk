[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / PurchasesOrdersServiceFilterReq

# Class: PurchasesOrdersServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Scailo.PurchasesOrdersServiceFilterReq

## Hierarchy

- `Message`\<[`PurchasesOrdersServiceFilterReq`](PurchasesOrdersServiceFilterReq.md)\>

  ↳ **`PurchasesOrdersServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](PurchasesOrdersServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](PurchasesOrdersServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](PurchasesOrdersServiceFilterReq.md#approvedonend)
- [approvedOnStart](PurchasesOrdersServiceFilterReq.md#approvedonstart)
- [approverRoleId](PurchasesOrdersServiceFilterReq.md#approverroleid)
- [buyerLocationId](PurchasesOrdersServiceFilterReq.md#buyerlocationid)
- [completedOnEnd](PurchasesOrdersServiceFilterReq.md#completedonend)
- [completedOnStart](PurchasesOrdersServiceFilterReq.md#completedonstart)
- [consigneeLocationId](PurchasesOrdersServiceFilterReq.md#consigneelocationid)
- [count](PurchasesOrdersServiceFilterReq.md#count)
- [creationTimestampEnd](PurchasesOrdersServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](PurchasesOrdersServiceFilterReq.md#creationtimestampstart)
- [currencyId](PurchasesOrdersServiceFilterReq.md#currencyid)
- [deliveryDateEnd](PurchasesOrdersServiceFilterReq.md#deliverydateend)
- [deliveryDateExact](PurchasesOrdersServiceFilterReq.md#deliverydateexact)
- [deliveryDateStart](PurchasesOrdersServiceFilterReq.md#deliverydatestart)
- [entityUuid](PurchasesOrdersServiceFilterReq.md#entityuuid)
- [familyId](PurchasesOrdersServiceFilterReq.md#familyid)
- [finalRefNumber](PurchasesOrdersServiceFilterReq.md#finalrefnumber)
- [formData](PurchasesOrdersServiceFilterReq.md#formdata)
- [includeFormData](PurchasesOrdersServiceFilterReq.md#includeformdata)
- [isActive](PurchasesOrdersServiceFilterReq.md#isactive)
- [modificationTimestampEnd](PurchasesOrdersServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](PurchasesOrdersServiceFilterReq.md#modificationtimestampstart)
- [offset](PurchasesOrdersServiceFilterReq.md#offset)
- [projectId](PurchasesOrdersServiceFilterReq.md#projectid)
- [referenceId](PurchasesOrdersServiceFilterReq.md#referenceid)
- [sortKey](PurchasesOrdersServiceFilterReq.md#sortkey)
- [sortOrder](PurchasesOrdersServiceFilterReq.md#sortorder)
- [status](PurchasesOrdersServiceFilterReq.md#status)
- [totalValueMax](PurchasesOrdersServiceFilterReq.md#totalvaluemax)
- [totalValueMin](PurchasesOrdersServiceFilterReq.md#totalvaluemin)
- [vendorId](PurchasesOrdersServiceFilterReq.md#vendorid)
- [fields](PurchasesOrdersServiceFilterReq.md#fields)
- [runtime](PurchasesOrdersServiceFilterReq.md#runtime)
- [typeName](PurchasesOrdersServiceFilterReq.md#typename)

### Methods

- [clone](PurchasesOrdersServiceFilterReq.md#clone)
- [equals](PurchasesOrdersServiceFilterReq.md#equals)
- [fromBinary](PurchasesOrdersServiceFilterReq.md#frombinary)
- [fromJson](PurchasesOrdersServiceFilterReq.md#fromjson)
- [fromJsonString](PurchasesOrdersServiceFilterReq.md#fromjsonstring)
- [getType](PurchasesOrdersServiceFilterReq.md#gettype)
- [toBinary](PurchasesOrdersServiceFilterReq.md#tobinary)
- [toJSON](PurchasesOrdersServiceFilterReq.md#tojson)
- [toJson](PurchasesOrdersServiceFilterReq.md#tojson-1)
- [toJsonString](PurchasesOrdersServiceFilterReq.md#tojsonstring)
- [equals](PurchasesOrdersServiceFilterReq.md#equals-1)
- [fromBinary](PurchasesOrdersServiceFilterReq.md#frombinary-1)
- [fromJson](PurchasesOrdersServiceFilterReq.md#fromjson-1)
- [fromJsonString](PurchasesOrdersServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new PurchasesOrdersServiceFilterReq**(`data?`): [`PurchasesOrdersServiceFilterReq`](PurchasesOrdersServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`PurchasesOrdersServiceFilterReq`](PurchasesOrdersServiceFilterReq.md)\> |

#### Returns

[`PurchasesOrdersServiceFilterReq`](PurchasesOrdersServiceFilterReq.md)

#### Overrides

Message\&lt;PurchasesOrdersServiceFilterReq\&gt;.constructor

#### Defined in

[src/purchases_orders.scailo_pb.ts:2658](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_orders.scailo_pb.ts#L2658)

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

[src/purchases_orders.scailo_pb.ts:2476](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_orders.scailo_pb.ts#L2476)

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

[src/purchases_orders.scailo_pb.ts:2460](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_orders.scailo_pb.ts#L2460)

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

[src/purchases_orders.scailo_pb.ts:2444](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_orders.scailo_pb.ts#L2444)

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

[src/purchases_orders.scailo_pb.ts:2492](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_orders.scailo_pb.ts#L2492)

___

### buyerLocationId

• **buyerLocationId**: `bigint` = `protoInt64.zero`

The associated buyer location ID

**`Generated`**

from field: uint64 buyer_location_id = 23;

#### Defined in

[src/purchases_orders.scailo_pb.ts:2570](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_orders.scailo_pb.ts#L2570)

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

[src/purchases_orders.scailo_pb.ts:2524](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_orders.scailo_pb.ts#L2524)

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

[src/purchases_orders.scailo_pb.ts:2508](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_orders.scailo_pb.ts#L2508)

___

### consigneeLocationId

• **consigneeLocationId**: `bigint` = `protoInt64.zero`

The associated consignee location ID

**`Generated`**

from field: uint64 consignee_location_id = 22;

#### Defined in

[src/purchases_orders.scailo_pb.ts:2563](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_orders.scailo_pb.ts#L2563)

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

[src/purchases_orders.scailo_pb.ts:2298](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_orders.scailo_pb.ts#L2298)

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

[src/purchases_orders.scailo_pb.ts:2368](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_orders.scailo_pb.ts#L2368)

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

[src/purchases_orders.scailo_pb.ts:2352](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_orders.scailo_pb.ts#L2352)

___

### currencyId

• **currencyId**: `bigint` = `protoInt64.zero`

The ID of the associated currency

**`Generated`**

from field: uint64 currency_id = 25;

#### Defined in

[src/purchases_orders.scailo_pb.ts:2584](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_orders.scailo_pb.ts#L2584)

___

### deliveryDateEnd

• **deliveryDateEnd**: `string` = `""`

The end delivery date of the item in the purchase order

**`Generated`**

from field: string delivery_date_end = 43;

#### Defined in

[src/purchases_orders.scailo_pb.ts:2619](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_orders.scailo_pb.ts#L2619)

___

### deliveryDateExact

• **deliveryDateExact**: `string` = `""`

The exact delivery date of the item in the purchase order

**`Generated`**

from field: string delivery_date_exact = 41;

#### Defined in

[src/purchases_orders.scailo_pb.ts:2605](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_orders.scailo_pb.ts#L2605)

___

### deliveryDateStart

• **deliveryDateStart**: `string` = `""`

The start delivery date of the item in the purchase order

**`Generated`**

from field: string delivery_date_start = 42;

#### Defined in

[src/purchases_orders.scailo_pb.ts:2612](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_orders.scailo_pb.ts#L2612)

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

[src/purchases_orders.scailo_pb.ts:2416](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_orders.scailo_pb.ts#L2416)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family

**`Generated`**

from field: uint64 family_id = 40;

#### Defined in

[src/purchases_orders.scailo_pb.ts:2598](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_orders.scailo_pb.ts#L2598)

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

[src/purchases_orders.scailo_pb.ts:2556](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_orders.scailo_pb.ts#L2556)

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

**`Optional`**

**`Description`**

Filter based on dynamic form field values.

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

[src/purchases_orders.scailo_pb.ts:2643](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_orders.scailo_pb.ts#L2643)

___

### includeFormData

• **includeFormData**: `boolean` = `false`

**`Optional`**

**`Description`**

If `true`, the response will include the associated custom form field values for each record.
Set to `false` to improve performance when form data is not needed.

**`Example`**

```ts
true
```

**`Generated`**

from field: bool include_form_data = 501;

#### Defined in

[src/purchases_orders.scailo_pb.ts:2656](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_orders.scailo_pb.ts#L2656)

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

[src/purchases_orders.scailo_pb.ts:2282](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_orders.scailo_pb.ts#L2282)

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

[src/purchases_orders.scailo_pb.ts:2400](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_orders.scailo_pb.ts#L2400)

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

[src/purchases_orders.scailo_pb.ts:2384](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_orders.scailo_pb.ts#L2384)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

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

from field: uint64 offset = 3;

#### Defined in

[src/purchases_orders.scailo_pb.ts:2314](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_orders.scailo_pb.ts#L2314)

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The ID of the associated project

**`Generated`**

from field: uint64 project_id = 26;

#### Defined in

[src/purchases_orders.scailo_pb.ts:2591](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_orders.scailo_pb.ts#L2591)

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

[src/purchases_orders.scailo_pb.ts:2540](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_orders.scailo_pb.ts#L2540)

___

### sortKey

• **sortKey**: [`PURCHASE_ORDER_SORT_KEY`](../enums/PURCHASE_ORDER_SORT_KEY.md) = `PURCHASE_ORDER_SORT_KEY.PURCHASE_ORDER_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: Scailo.PURCHASE_ORDER_SORT_KEY sort_key = 5;

#### Defined in

[src/purchases_orders.scailo_pb.ts:2336](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_orders.scailo_pb.ts#L2336)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

**`Optional`**

**`Description`**

Sort direction.

**`Example`**

```ts
DESCENDING
```

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

[src/purchases_orders.scailo_pb.ts:2326](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_orders.scailo_pb.ts#L2326)

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

[src/purchases_orders.scailo_pb.ts:2428](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_orders.scailo_pb.ts#L2428)

___

### totalValueMax

• **totalValueMax**: `bigint` = `protoInt64.zero`

Stores the maximum value of the purchase order (ignored if 0)

**`Generated`**

from field: uint64 total_value_max = 51;

#### Defined in

[src/purchases_orders.scailo_pb.ts:2633](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_orders.scailo_pb.ts#L2633)

___

### totalValueMin

• **totalValueMin**: `bigint` = `protoInt64.zero`

Stores the minimum value of the purchase order (ignored if 0)

**`Generated`**

from field: uint64 total_value_min = 50;

#### Defined in

[src/purchases_orders.scailo_pb.ts:2626](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_orders.scailo_pb.ts#L2626)

___

### vendorId

• **vendorId**: `bigint` = `protoInt64.zero`

The ID of the associated vendor

**`Generated`**

from field: uint64 vendor_id = 24;

#### Defined in

[src/purchases_orders.scailo_pb.ts:2577](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_orders.scailo_pb.ts#L2577)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/purchases_orders.scailo_pb.ts:2665](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_orders.scailo_pb.ts#L2665)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/purchases_orders.scailo_pb.ts:2663](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_orders.scailo_pb.ts#L2663)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.PurchasesOrdersServiceFilterReq"``

#### Defined in

[src/purchases_orders.scailo_pb.ts:2664](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_orders.scailo_pb.ts#L2664)

## Methods

### clone

▸ **clone**(): [`PurchasesOrdersServiceFilterReq`](PurchasesOrdersServiceFilterReq.md)

Create a deep copy.

#### Returns

[`PurchasesOrdersServiceFilterReq`](PurchasesOrdersServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`PurchasesOrdersServiceFilterReq`](PurchasesOrdersServiceFilterReq.md) \| `PlainMessage`\<[`PurchasesOrdersServiceFilterReq`](PurchasesOrdersServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`PurchasesOrdersServiceFilterReq`](PurchasesOrdersServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`PurchasesOrdersServiceFilterReq`](PurchasesOrdersServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`PurchasesOrdersServiceFilterReq`](PurchasesOrdersServiceFilterReq.md) \| `PlainMessage`\<[`PurchasesOrdersServiceFilterReq`](PurchasesOrdersServiceFilterReq.md)\> |
| `b` | `undefined` \| [`PurchasesOrdersServiceFilterReq`](PurchasesOrdersServiceFilterReq.md) \| `PlainMessage`\<[`PurchasesOrdersServiceFilterReq`](PurchasesOrdersServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/purchases_orders.scailo_pb.ts:2712](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_orders.scailo_pb.ts#L2712)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PurchasesOrdersServiceFilterReq`](PurchasesOrdersServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`PurchasesOrdersServiceFilterReq`](PurchasesOrdersServiceFilterReq.md)

#### Defined in

[src/purchases_orders.scailo_pb.ts:2700](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_orders.scailo_pb.ts#L2700)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PurchasesOrdersServiceFilterReq`](PurchasesOrdersServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchasesOrdersServiceFilterReq`](PurchasesOrdersServiceFilterReq.md)

#### Defined in

[src/purchases_orders.scailo_pb.ts:2704](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_orders.scailo_pb.ts#L2704)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PurchasesOrdersServiceFilterReq`](PurchasesOrdersServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchasesOrdersServiceFilterReq`](PurchasesOrdersServiceFilterReq.md)

#### Defined in

[src/purchases_orders.scailo_pb.ts:2708](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_orders.scailo_pb.ts#L2708)
