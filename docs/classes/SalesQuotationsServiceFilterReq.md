[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesQuotationsServiceFilterReq

# Class: SalesQuotationsServiceFilterReq

Describes the base request payload of a filter search

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

[src/sales_quotations.scailo_pb.ts:2427](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_quotations.scailo_pb.ts#L2427)

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

[src/sales_quotations.scailo_pb.ts:2275](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_quotations.scailo_pb.ts#L2275)

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

[src/sales_quotations.scailo_pb.ts:2259](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_quotations.scailo_pb.ts#L2259)

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

[src/sales_quotations.scailo_pb.ts:2243](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_quotations.scailo_pb.ts#L2243)

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

[src/sales_quotations.scailo_pb.ts:2291](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_quotations.scailo_pb.ts#L2291)

___

### buyerClientId

• **buyerClientId**: `bigint` = `protoInt64.zero`

The associated buyer client ID

**`Generated`**

from field: uint64 buyer_client_id = 23;

#### Defined in

[src/sales_quotations.scailo_pb.ts:2369](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_quotations.scailo_pb.ts#L2369)

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

[src/sales_quotations.scailo_pb.ts:2323](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_quotations.scailo_pb.ts#L2323)

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

[src/sales_quotations.scailo_pb.ts:2307](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_quotations.scailo_pb.ts#L2307)

___

### consigneeClientId

• **consigneeClientId**: `bigint` = `protoInt64.zero`

The associated consignee client ID

**`Generated`**

from field: uint64 consignee_client_id = 22;

#### Defined in

[src/sales_quotations.scailo_pb.ts:2362](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_quotations.scailo_pb.ts#L2362)

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

[src/sales_quotations.scailo_pb.ts:2097](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_quotations.scailo_pb.ts#L2097)

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

[src/sales_quotations.scailo_pb.ts:2167](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_quotations.scailo_pb.ts#L2167)

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

[src/sales_quotations.scailo_pb.ts:2151](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_quotations.scailo_pb.ts#L2151)

___

### currencyId

• **currencyId**: `bigint` = `protoInt64.zero`

The ID of the associated currency

**`Generated`**

from field: uint64 currency_id = 25;

#### Defined in

[src/sales_quotations.scailo_pb.ts:2383](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_quotations.scailo_pb.ts#L2383)

___

### deliveryDateEnd

• **deliveryDateEnd**: `string` = `""`

The end delivery date of the item in the sales quotation

**`Generated`**

from field: string delivery_date_end = 43;

#### Defined in

[src/sales_quotations.scailo_pb.ts:2418](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_quotations.scailo_pb.ts#L2418)

___

### deliveryDateExact

• **deliveryDateExact**: `string` = `""`

The exact delivery date of the item in the sales quotation

**`Generated`**

from field: string delivery_date_exact = 41;

#### Defined in

[src/sales_quotations.scailo_pb.ts:2404](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_quotations.scailo_pb.ts#L2404)

___

### deliveryDateStart

• **deliveryDateStart**: `string` = `""`

The start delivery date of the item in the sales quotation

**`Generated`**

from field: string delivery_date_start = 42;

#### Defined in

[src/sales_quotations.scailo_pb.ts:2411](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_quotations.scailo_pb.ts#L2411)

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

[src/sales_quotations.scailo_pb.ts:2215](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_quotations.scailo_pb.ts#L2215)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family

**`Generated`**

from field: uint64 family_id = 40;

#### Defined in

[src/sales_quotations.scailo_pb.ts:2397](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_quotations.scailo_pb.ts#L2397)

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

[src/sales_quotations.scailo_pb.ts:2355](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_quotations.scailo_pb.ts#L2355)

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

The list of form data filters

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

[src/sales_quotations.scailo_pb.ts:2425](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_quotations.scailo_pb.ts#L2425)

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

[src/sales_quotations.scailo_pb.ts:2081](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_quotations.scailo_pb.ts#L2081)

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The ID of the associated location

**`Generated`**

from field: uint64 location_id = 24;

#### Defined in

[src/sales_quotations.scailo_pb.ts:2376](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_quotations.scailo_pb.ts#L2376)

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

[src/sales_quotations.scailo_pb.ts:2199](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_quotations.scailo_pb.ts#L2199)

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

[src/sales_quotations.scailo_pb.ts:2183](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_quotations.scailo_pb.ts#L2183)

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

[src/sales_quotations.scailo_pb.ts:2113](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_quotations.scailo_pb.ts#L2113)

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The ID of the associated project

**`Generated`**

from field: uint64 project_id = 26;

#### Defined in

[src/sales_quotations.scailo_pb.ts:2390](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_quotations.scailo_pb.ts#L2390)

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

[src/sales_quotations.scailo_pb.ts:2339](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_quotations.scailo_pb.ts#L2339)

___

### sortKey

• **sortKey**: [`SALES_QUOTATION_SORT_KEY`](../enums/SALES_QUOTATION_SORT_KEY.md) = `SALES_QUOTATION_SORT_KEY.SALES_QUOTATION_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: Scailo.SALES_QUOTATION_SORT_KEY sort_key = 5;

#### Defined in

[src/sales_quotations.scailo_pb.ts:2135](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_quotations.scailo_pb.ts#L2135)

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

[src/sales_quotations.scailo_pb.ts:2125](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_quotations.scailo_pb.ts#L2125)

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

[src/sales_quotations.scailo_pb.ts:2227](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_quotations.scailo_pb.ts#L2227)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_quotations.scailo_pb.ts:2434](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_quotations.scailo_pb.ts#L2434)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_quotations.scailo_pb.ts:2432](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_quotations.scailo_pb.ts#L2432)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesQuotationsServiceFilterReq"``

#### Defined in

[src/sales_quotations.scailo_pb.ts:2433](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_quotations.scailo_pb.ts#L2433)

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

[src/sales_quotations.scailo_pb.ts:2478](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_quotations.scailo_pb.ts#L2478)

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

[src/sales_quotations.scailo_pb.ts:2466](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_quotations.scailo_pb.ts#L2466)

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

[src/sales_quotations.scailo_pb.ts:2470](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_quotations.scailo_pb.ts#L2470)

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

[src/sales_quotations.scailo_pb.ts:2474](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_quotations.scailo_pb.ts#L2474)
