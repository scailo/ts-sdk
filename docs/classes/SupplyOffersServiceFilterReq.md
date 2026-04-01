[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SupplyOffersServiceFilterReq

# Class: SupplyOffersServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Scailo.SupplyOffersServiceFilterReq

## Hierarchy

- `Message`\<[`SupplyOffersServiceFilterReq`](SupplyOffersServiceFilterReq.md)\>

  ↳ **`SupplyOffersServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](SupplyOffersServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](SupplyOffersServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](SupplyOffersServiceFilterReq.md#approvedonend)
- [approvedOnStart](SupplyOffersServiceFilterReq.md#approvedonstart)
- [approverRoleId](SupplyOffersServiceFilterReq.md#approverroleid)
- [buyerLocationId](SupplyOffersServiceFilterReq.md#buyerlocationid)
- [completedOnEnd](SupplyOffersServiceFilterReq.md#completedonend)
- [completedOnStart](SupplyOffersServiceFilterReq.md#completedonstart)
- [consigneeLocationId](SupplyOffersServiceFilterReq.md#consigneelocationid)
- [count](SupplyOffersServiceFilterReq.md#count)
- [creationTimestampEnd](SupplyOffersServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](SupplyOffersServiceFilterReq.md#creationtimestampstart)
- [currencyId](SupplyOffersServiceFilterReq.md#currencyid)
- [deliveryDateEnd](SupplyOffersServiceFilterReq.md#deliverydateend)
- [deliveryDateExact](SupplyOffersServiceFilterReq.md#deliverydateexact)
- [deliveryDateStart](SupplyOffersServiceFilterReq.md#deliverydatestart)
- [entityUuid](SupplyOffersServiceFilterReq.md#entityuuid)
- [familyId](SupplyOffersServiceFilterReq.md#familyid)
- [finalRefNumber](SupplyOffersServiceFilterReq.md#finalrefnumber)
- [formData](SupplyOffersServiceFilterReq.md#formdata)
- [isActive](SupplyOffersServiceFilterReq.md#isactive)
- [modificationTimestampEnd](SupplyOffersServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](SupplyOffersServiceFilterReq.md#modificationtimestampstart)
- [offset](SupplyOffersServiceFilterReq.md#offset)
- [projectId](SupplyOffersServiceFilterReq.md#projectid)
- [referenceId](SupplyOffersServiceFilterReq.md#referenceid)
- [sortKey](SupplyOffersServiceFilterReq.md#sortkey)
- [sortOrder](SupplyOffersServiceFilterReq.md#sortorder)
- [status](SupplyOffersServiceFilterReq.md#status)
- [totalValueMax](SupplyOffersServiceFilterReq.md#totalvaluemax)
- [totalValueMin](SupplyOffersServiceFilterReq.md#totalvaluemin)
- [vendorId](SupplyOffersServiceFilterReq.md#vendorid)
- [fields](SupplyOffersServiceFilterReq.md#fields)
- [runtime](SupplyOffersServiceFilterReq.md#runtime)
- [typeName](SupplyOffersServiceFilterReq.md#typename)

### Methods

- [clone](SupplyOffersServiceFilterReq.md#clone)
- [equals](SupplyOffersServiceFilterReq.md#equals)
- [fromBinary](SupplyOffersServiceFilterReq.md#frombinary)
- [fromJson](SupplyOffersServiceFilterReq.md#fromjson)
- [fromJsonString](SupplyOffersServiceFilterReq.md#fromjsonstring)
- [getType](SupplyOffersServiceFilterReq.md#gettype)
- [toBinary](SupplyOffersServiceFilterReq.md#tobinary)
- [toJSON](SupplyOffersServiceFilterReq.md#tojson)
- [toJson](SupplyOffersServiceFilterReq.md#tojson-1)
- [toJsonString](SupplyOffersServiceFilterReq.md#tojsonstring)
- [equals](SupplyOffersServiceFilterReq.md#equals-1)
- [fromBinary](SupplyOffersServiceFilterReq.md#frombinary-1)
- [fromJson](SupplyOffersServiceFilterReq.md#fromjson-1)
- [fromJsonString](SupplyOffersServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new SupplyOffersServiceFilterReq**(`data?`): [`SupplyOffersServiceFilterReq`](SupplyOffersServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SupplyOffersServiceFilterReq`](SupplyOffersServiceFilterReq.md)\> |

#### Returns

[`SupplyOffersServiceFilterReq`](SupplyOffersServiceFilterReq.md)

#### Overrides

Message\&lt;SupplyOffersServiceFilterReq\&gt;.constructor

#### Defined in

[src/supply_offers.scailo_pb.ts:2208](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/supply_offers.scailo_pb.ts#L2208)

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

[src/supply_offers.scailo_pb.ts:2042](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/supply_offers.scailo_pb.ts#L2042)

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

[src/supply_offers.scailo_pb.ts:2026](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/supply_offers.scailo_pb.ts#L2026)

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

[src/supply_offers.scailo_pb.ts:2010](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/supply_offers.scailo_pb.ts#L2010)

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

[src/supply_offers.scailo_pb.ts:2058](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/supply_offers.scailo_pb.ts#L2058)

___

### buyerLocationId

• **buyerLocationId**: `bigint` = `protoInt64.zero`

The associated buyer location ID

**`Generated`**

from field: uint64 buyer_location_id = 23;

#### Defined in

[src/supply_offers.scailo_pb.ts:2136](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/supply_offers.scailo_pb.ts#L2136)

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

[src/supply_offers.scailo_pb.ts:2090](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/supply_offers.scailo_pb.ts#L2090)

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

[src/supply_offers.scailo_pb.ts:2074](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/supply_offers.scailo_pb.ts#L2074)

___

### consigneeLocationId

• **consigneeLocationId**: `bigint` = `protoInt64.zero`

The associated consignee location ID

**`Generated`**

from field: uint64 consignee_location_id = 22;

#### Defined in

[src/supply_offers.scailo_pb.ts:2129](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/supply_offers.scailo_pb.ts#L2129)

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

[src/supply_offers.scailo_pb.ts:1864](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/supply_offers.scailo_pb.ts#L1864)

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

[src/supply_offers.scailo_pb.ts:1934](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/supply_offers.scailo_pb.ts#L1934)

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

[src/supply_offers.scailo_pb.ts:1918](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/supply_offers.scailo_pb.ts#L1918)

___

### currencyId

• **currencyId**: `bigint` = `protoInt64.zero`

The ID of the associated currency

**`Generated`**

from field: uint64 currency_id = 25;

#### Defined in

[src/supply_offers.scailo_pb.ts:2150](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/supply_offers.scailo_pb.ts#L2150)

___

### deliveryDateEnd

• **deliveryDateEnd**: `string` = `""`

The end delivery date of the item in the supply offer

**`Generated`**

from field: string delivery_date_end = 43;

#### Defined in

[src/supply_offers.scailo_pb.ts:2185](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/supply_offers.scailo_pb.ts#L2185)

___

### deliveryDateExact

• **deliveryDateExact**: `string` = `""`

The exact delivery date of the item in the supply offer

**`Generated`**

from field: string delivery_date_exact = 41;

#### Defined in

[src/supply_offers.scailo_pb.ts:2171](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/supply_offers.scailo_pb.ts#L2171)

___

### deliveryDateStart

• **deliveryDateStart**: `string` = `""`

The start delivery date of the item in the supply offer

**`Generated`**

from field: string delivery_date_start = 42;

#### Defined in

[src/supply_offers.scailo_pb.ts:2178](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/supply_offers.scailo_pb.ts#L2178)

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

[src/supply_offers.scailo_pb.ts:1982](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/supply_offers.scailo_pb.ts#L1982)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family

**`Generated`**

from field: uint64 family_id = 40;

#### Defined in

[src/supply_offers.scailo_pb.ts:2164](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/supply_offers.scailo_pb.ts#L2164)

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

[src/supply_offers.scailo_pb.ts:2122](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/supply_offers.scailo_pb.ts#L2122)

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

The list of form data filters

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

[src/supply_offers.scailo_pb.ts:2206](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/supply_offers.scailo_pb.ts#L2206)

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

[src/supply_offers.scailo_pb.ts:1848](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/supply_offers.scailo_pb.ts#L1848)

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

[src/supply_offers.scailo_pb.ts:1966](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/supply_offers.scailo_pb.ts#L1966)

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

[src/supply_offers.scailo_pb.ts:1950](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/supply_offers.scailo_pb.ts#L1950)

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

[src/supply_offers.scailo_pb.ts:1880](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/supply_offers.scailo_pb.ts#L1880)

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The ID of the associated project

**`Generated`**

from field: uint64 project_id = 26;

#### Defined in

[src/supply_offers.scailo_pb.ts:2157](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/supply_offers.scailo_pb.ts#L2157)

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

[src/supply_offers.scailo_pb.ts:2106](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/supply_offers.scailo_pb.ts#L2106)

___

### sortKey

• **sortKey**: [`SUPPLY_OFFER_SORT_KEY`](../enums/SUPPLY_OFFER_SORT_KEY.md) = `SUPPLY_OFFER_SORT_KEY.SUPPLY_OFFER_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: Scailo.SUPPLY_OFFER_SORT_KEY sort_key = 5;

#### Defined in

[src/supply_offers.scailo_pb.ts:1902](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/supply_offers.scailo_pb.ts#L1902)

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

[src/supply_offers.scailo_pb.ts:1892](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/supply_offers.scailo_pb.ts#L1892)

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

[src/supply_offers.scailo_pb.ts:1994](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/supply_offers.scailo_pb.ts#L1994)

___

### totalValueMax

• **totalValueMax**: `bigint` = `protoInt64.zero`

Stores the maximum value of the supply offer (ignored if 0)

**`Generated`**

from field: uint64 total_value_max = 51;

#### Defined in

[src/supply_offers.scailo_pb.ts:2199](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/supply_offers.scailo_pb.ts#L2199)

___

### totalValueMin

• **totalValueMin**: `bigint` = `protoInt64.zero`

Stores the minimum value of the supply offer (ignored if 0)

**`Generated`**

from field: uint64 total_value_min = 50;

#### Defined in

[src/supply_offers.scailo_pb.ts:2192](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/supply_offers.scailo_pb.ts#L2192)

___

### vendorId

• **vendorId**: `bigint` = `protoInt64.zero`

The ID of the associated vendor

**`Generated`**

from field: uint64 vendor_id = 24;

#### Defined in

[src/supply_offers.scailo_pb.ts:2143](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/supply_offers.scailo_pb.ts#L2143)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/supply_offers.scailo_pb.ts:2215](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/supply_offers.scailo_pb.ts#L2215)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/supply_offers.scailo_pb.ts:2213](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/supply_offers.scailo_pb.ts#L2213)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SupplyOffersServiceFilterReq"``

#### Defined in

[src/supply_offers.scailo_pb.ts:2214](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/supply_offers.scailo_pb.ts#L2214)

## Methods

### clone

▸ **clone**(): [`SupplyOffersServiceFilterReq`](SupplyOffersServiceFilterReq.md)

Create a deep copy.

#### Returns

[`SupplyOffersServiceFilterReq`](SupplyOffersServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`SupplyOffersServiceFilterReq`](SupplyOffersServiceFilterReq.md) \| `PlainMessage`\<[`SupplyOffersServiceFilterReq`](SupplyOffersServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`SupplyOffersServiceFilterReq`](SupplyOffersServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SupplyOffersServiceFilterReq`](SupplyOffersServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`SupplyOffersServiceFilterReq`](SupplyOffersServiceFilterReq.md) \| `PlainMessage`\<[`SupplyOffersServiceFilterReq`](SupplyOffersServiceFilterReq.md)\> |
| `b` | `undefined` \| [`SupplyOffersServiceFilterReq`](SupplyOffersServiceFilterReq.md) \| `PlainMessage`\<[`SupplyOffersServiceFilterReq`](SupplyOffersServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/supply_offers.scailo_pb.ts:2261](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/supply_offers.scailo_pb.ts#L2261)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SupplyOffersServiceFilterReq`](SupplyOffersServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SupplyOffersServiceFilterReq`](SupplyOffersServiceFilterReq.md)

#### Defined in

[src/supply_offers.scailo_pb.ts:2249](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/supply_offers.scailo_pb.ts#L2249)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SupplyOffersServiceFilterReq`](SupplyOffersServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SupplyOffersServiceFilterReq`](SupplyOffersServiceFilterReq.md)

#### Defined in

[src/supply_offers.scailo_pb.ts:2253](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/supply_offers.scailo_pb.ts#L2253)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SupplyOffersServiceFilterReq`](SupplyOffersServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SupplyOffersServiceFilterReq`](SupplyOffersServiceFilterReq.md)

#### Defined in

[src/supply_offers.scailo_pb.ts:2257](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/supply_offers.scailo_pb.ts#L2257)
