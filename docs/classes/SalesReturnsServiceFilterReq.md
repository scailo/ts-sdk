[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesReturnsServiceFilterReq

# Class: SalesReturnsServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Scailo.SalesReturnsServiceFilterReq

## Hierarchy

- `Message`\<[`SalesReturnsServiceFilterReq`](SalesReturnsServiceFilterReq.md)\>

  ↳ **`SalesReturnsServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](SalesReturnsServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](SalesReturnsServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](SalesReturnsServiceFilterReq.md#approvedonend)
- [approvedOnStart](SalesReturnsServiceFilterReq.md#approvedonstart)
- [approverRoleId](SalesReturnsServiceFilterReq.md#approverroleid)
- [billingStatus](SalesReturnsServiceFilterReq.md#billingstatus)
- [buyerClientId](SalesReturnsServiceFilterReq.md#buyerclientid)
- [completedOnEnd](SalesReturnsServiceFilterReq.md#completedonend)
- [completedOnStart](SalesReturnsServiceFilterReq.md#completedonstart)
- [consigneeClientId](SalesReturnsServiceFilterReq.md#consigneeclientid)
- [count](SalesReturnsServiceFilterReq.md#count)
- [creationTimestampEnd](SalesReturnsServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](SalesReturnsServiceFilterReq.md#creationtimestampstart)
- [entityUuid](SalesReturnsServiceFilterReq.md#entityuuid)
- [familyId](SalesReturnsServiceFilterReq.md#familyid)
- [finalRefNumber](SalesReturnsServiceFilterReq.md#finalrefnumber)
- [formData](SalesReturnsServiceFilterReq.md#formdata)
- [includeFormData](SalesReturnsServiceFilterReq.md#includeformdata)
- [isActive](SalesReturnsServiceFilterReq.md#isactive)
- [locationId](SalesReturnsServiceFilterReq.md#locationid)
- [modificationTimestampEnd](SalesReturnsServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](SalesReturnsServiceFilterReq.md#modificationtimestampstart)
- [offset](SalesReturnsServiceFilterReq.md#offset)
- [projectId](SalesReturnsServiceFilterReq.md#projectid)
- [refFrom](SalesReturnsServiceFilterReq.md#reffrom)
- [refId](SalesReturnsServiceFilterReq.md#refid)
- [referenceId](SalesReturnsServiceFilterReq.md#referenceid)
- [sortKey](SalesReturnsServiceFilterReq.md#sortkey)
- [sortOrder](SalesReturnsServiceFilterReq.md#sortorder)
- [status](SalesReturnsServiceFilterReq.md#status)
- [fields](SalesReturnsServiceFilterReq.md#fields)
- [runtime](SalesReturnsServiceFilterReq.md#runtime)
- [typeName](SalesReturnsServiceFilterReq.md#typename)

### Methods

- [clone](SalesReturnsServiceFilterReq.md#clone)
- [equals](SalesReturnsServiceFilterReq.md#equals)
- [fromBinary](SalesReturnsServiceFilterReq.md#frombinary)
- [fromJson](SalesReturnsServiceFilterReq.md#fromjson)
- [fromJsonString](SalesReturnsServiceFilterReq.md#fromjsonstring)
- [getType](SalesReturnsServiceFilterReq.md#gettype)
- [toBinary](SalesReturnsServiceFilterReq.md#tobinary)
- [toJSON](SalesReturnsServiceFilterReq.md#tojson)
- [toJson](SalesReturnsServiceFilterReq.md#tojson-1)
- [toJsonString](SalesReturnsServiceFilterReq.md#tojsonstring)
- [equals](SalesReturnsServiceFilterReq.md#equals-1)
- [fromBinary](SalesReturnsServiceFilterReq.md#frombinary-1)
- [fromJson](SalesReturnsServiceFilterReq.md#fromjson-1)
- [fromJsonString](SalesReturnsServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesReturnsServiceFilterReq**(`data?`): [`SalesReturnsServiceFilterReq`](SalesReturnsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesReturnsServiceFilterReq`](SalesReturnsServiceFilterReq.md)\> |

#### Returns

[`SalesReturnsServiceFilterReq`](SalesReturnsServiceFilterReq.md)

#### Overrides

Message\&lt;SalesReturnsServiceFilterReq\&gt;.constructor

#### Defined in

[src/sales_returns.scailo_pb.ts:2207](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_returns.scailo_pb.ts#L2207)

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

[src/sales_returns.scailo_pb.ts:2045](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_returns.scailo_pb.ts#L2045)

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

[src/sales_returns.scailo_pb.ts:2029](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_returns.scailo_pb.ts#L2029)

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

[src/sales_returns.scailo_pb.ts:2013](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_returns.scailo_pb.ts#L2013)

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

[src/sales_returns.scailo_pb.ts:2061](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_returns.scailo_pb.ts#L2061)

___

### billingStatus

• **billingStatus**: [`SALES_RETURN_BILLING_STATUS`](../enums/SALES_RETURN_BILLING_STATUS.md) = `SALES_RETURN_BILLING_STATUS.SALES_RETURN_BILLING_STATUS_ANY_UNSPECIFIED`

The status of the sales return bill

**`Generated`**

from field: Scailo.SALES_RETURN_BILLING_STATUS billing_status = 40;

#### Defined in

[src/sales_returns.scailo_pb.ts:2153](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_returns.scailo_pb.ts#L2153)

___

### buyerClientId

• **buyerClientId**: `bigint` = `protoInt64.zero`

The associated buyer client ID of the linked sales order

**`Generated`**

from field: uint64 buyer_client_id = 61;

#### Defined in

[src/sales_returns.scailo_pb.ts:2175](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_returns.scailo_pb.ts#L2175)

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

[src/sales_returns.scailo_pb.ts:2093](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_returns.scailo_pb.ts#L2093)

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

[src/sales_returns.scailo_pb.ts:2077](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_returns.scailo_pb.ts#L2077)

___

### consigneeClientId

• **consigneeClientId**: `bigint` = `protoInt64.zero`

Sales Order related filters
The associated consignee client ID of the linked sales order

**`Generated`**

from field: uint64 consignee_client_id = 60;

#### Defined in

[src/sales_returns.scailo_pb.ts:2168](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_returns.scailo_pb.ts#L2168)

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

[src/sales_returns.scailo_pb.ts:1867](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_returns.scailo_pb.ts#L1867)

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

[src/sales_returns.scailo_pb.ts:1937](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_returns.scailo_pb.ts#L1937)

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

[src/sales_returns.scailo_pb.ts:1921](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_returns.scailo_pb.ts#L1921)

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

[src/sales_returns.scailo_pb.ts:1985](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_returns.scailo_pb.ts#L1985)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family

**`Generated`**

from field: uint64 family_id = 50;

#### Defined in

[src/sales_returns.scailo_pb.ts:2160](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_returns.scailo_pb.ts#L2160)

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

[src/sales_returns.scailo_pb.ts:2125](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_returns.scailo_pb.ts#L2125)

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

**`Optional`**

**`Description`**

Filter based on dynamic form field values.

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

[src/sales_returns.scailo_pb.ts:2192](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_returns.scailo_pb.ts#L2192)

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

[src/sales_returns.scailo_pb.ts:2205](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_returns.scailo_pb.ts#L2205)

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

[src/sales_returns.scailo_pb.ts:1851](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_returns.scailo_pb.ts#L1851)

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The location ID of where the record is created

**`Generated`**

from field: uint64 location_id = 25;

#### Defined in

[src/sales_returns.scailo_pb.ts:2146](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_returns.scailo_pb.ts#L2146)

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

[src/sales_returns.scailo_pb.ts:1969](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_returns.scailo_pb.ts#L1969)

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

[src/sales_returns.scailo_pb.ts:1953](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_returns.scailo_pb.ts#L1953)

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

[src/sales_returns.scailo_pb.ts:1883](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_returns.scailo_pb.ts#L1883)

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The ID of the associated project of the linked sales order

**`Generated`**

from field: uint64 project_id = 62;

#### Defined in

[src/sales_returns.scailo_pb.ts:2182](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_returns.scailo_pb.ts#L2182)

___

### refFrom

• **refFrom**: [`SALES_RETURN_REF_FROM`](../enums/SALES_RETURN_REF_FROM.md) = `SALES_RETURN_REF_FROM.SALES_RETURN_REF_FROM_ANY_UNSPECIFIED`

The associated reference

**`Generated`**

from field: Scailo.SALES_RETURN_REF_FROM ref_from = 22;

#### Defined in

[src/sales_returns.scailo_pb.ts:2132](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_returns.scailo_pb.ts#L2132)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: uint64 ref_id = 23;

#### Defined in

[src/sales_returns.scailo_pb.ts:2139](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_returns.scailo_pb.ts#L2139)

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

[src/sales_returns.scailo_pb.ts:2109](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_returns.scailo_pb.ts#L2109)

___

### sortKey

• **sortKey**: [`SALES_RETURN_SORT_KEY`](../enums/SALES_RETURN_SORT_KEY.md) = `SALES_RETURN_SORT_KEY.SALES_RETURN_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: Scailo.SALES_RETURN_SORT_KEY sort_key = 5;

#### Defined in

[src/sales_returns.scailo_pb.ts:1905](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_returns.scailo_pb.ts#L1905)

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

[src/sales_returns.scailo_pb.ts:1895](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_returns.scailo_pb.ts#L1895)

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

[src/sales_returns.scailo_pb.ts:1997](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_returns.scailo_pb.ts#L1997)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_returns.scailo_pb.ts:2214](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_returns.scailo_pb.ts#L2214)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_returns.scailo_pb.ts:2212](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_returns.scailo_pb.ts#L2212)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesReturnsServiceFilterReq"``

#### Defined in

[src/sales_returns.scailo_pb.ts:2213](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_returns.scailo_pb.ts#L2213)

## Methods

### clone

▸ **clone**(): [`SalesReturnsServiceFilterReq`](SalesReturnsServiceFilterReq.md)

Create a deep copy.

#### Returns

[`SalesReturnsServiceFilterReq`](SalesReturnsServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesReturnsServiceFilterReq`](SalesReturnsServiceFilterReq.md) \| `PlainMessage`\<[`SalesReturnsServiceFilterReq`](SalesReturnsServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesReturnsServiceFilterReq`](SalesReturnsServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesReturnsServiceFilterReq`](SalesReturnsServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`SalesReturnsServiceFilterReq`](SalesReturnsServiceFilterReq.md) \| `PlainMessage`\<[`SalesReturnsServiceFilterReq`](SalesReturnsServiceFilterReq.md)\> |
| `b` | `undefined` \| [`SalesReturnsServiceFilterReq`](SalesReturnsServiceFilterReq.md) \| `PlainMessage`\<[`SalesReturnsServiceFilterReq`](SalesReturnsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/sales_returns.scailo_pb.ts:2258](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_returns.scailo_pb.ts#L2258)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesReturnsServiceFilterReq`](SalesReturnsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesReturnsServiceFilterReq`](SalesReturnsServiceFilterReq.md)

#### Defined in

[src/sales_returns.scailo_pb.ts:2246](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_returns.scailo_pb.ts#L2246)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesReturnsServiceFilterReq`](SalesReturnsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesReturnsServiceFilterReq`](SalesReturnsServiceFilterReq.md)

#### Defined in

[src/sales_returns.scailo_pb.ts:2250](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_returns.scailo_pb.ts#L2250)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesReturnsServiceFilterReq`](SalesReturnsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesReturnsServiceFilterReq`](SalesReturnsServiceFilterReq.md)

#### Defined in

[src/sales_returns.scailo_pb.ts:2254](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_returns.scailo_pb.ts#L2254)
