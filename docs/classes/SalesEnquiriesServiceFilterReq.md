[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesEnquiriesServiceFilterReq

# Class: SalesEnquiriesServiceFilterReq

Advanced filter request for searching and paginating sales enquiries using multiple logical criteria.
This message encapsulates pagination controls, sorting keys, lifecycle status filters,
timestamp ranges, and entity references.

**Note:** This is the primary message layout used by the frontend and external API clients
to build robust data-table queries, reporting views, and targeted record lookups.

**`Generated`**

from message Scailo.SalesEnquiriesServiceFilterReq

## Hierarchy

- `Message`\<[`SalesEnquiriesServiceFilterReq`](SalesEnquiriesServiceFilterReq.md)\>

  ↳ **`SalesEnquiriesServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](SalesEnquiriesServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](SalesEnquiriesServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](SalesEnquiriesServiceFilterReq.md#approvedonend)
- [approvedOnStart](SalesEnquiriesServiceFilterReq.md#approvedonstart)
- [approverRoleId](SalesEnquiriesServiceFilterReq.md#approverroleid)
- [buyerClientId](SalesEnquiriesServiceFilterReq.md#buyerclientid)
- [completedOnEnd](SalesEnquiriesServiceFilterReq.md#completedonend)
- [completedOnStart](SalesEnquiriesServiceFilterReq.md#completedonstart)
- [consigneeClientId](SalesEnquiriesServiceFilterReq.md#consigneeclientid)
- [count](SalesEnquiriesServiceFilterReq.md#count)
- [creationTimestampEnd](SalesEnquiriesServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](SalesEnquiriesServiceFilterReq.md#creationtimestampstart)
- [currencyId](SalesEnquiriesServiceFilterReq.md#currencyid)
- [deliveryDateEnd](SalesEnquiriesServiceFilterReq.md#deliverydateend)
- [deliveryDateExact](SalesEnquiriesServiceFilterReq.md#deliverydateexact)
- [deliveryDateStart](SalesEnquiriesServiceFilterReq.md#deliverydatestart)
- [entityUuid](SalesEnquiriesServiceFilterReq.md#entityuuid)
- [finalRefNumber](SalesEnquiriesServiceFilterReq.md#finalrefnumber)
- [formData](SalesEnquiriesServiceFilterReq.md#formdata)
- [includeFormData](SalesEnquiriesServiceFilterReq.md#includeformdata)
- [isActive](SalesEnquiriesServiceFilterReq.md#isactive)
- [modificationTimestampEnd](SalesEnquiriesServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](SalesEnquiriesServiceFilterReq.md#modificationtimestampstart)
- [offset](SalesEnquiriesServiceFilterReq.md#offset)
- [referenceId](SalesEnquiriesServiceFilterReq.md#referenceid)
- [sortKey](SalesEnquiriesServiceFilterReq.md#sortkey)
- [sortOrder](SalesEnquiriesServiceFilterReq.md#sortorder)
- [status](SalesEnquiriesServiceFilterReq.md#status)
- [fields](SalesEnquiriesServiceFilterReq.md#fields)
- [runtime](SalesEnquiriesServiceFilterReq.md#runtime)
- [typeName](SalesEnquiriesServiceFilterReq.md#typename)

### Methods

- [clone](SalesEnquiriesServiceFilterReq.md#clone)
- [equals](SalesEnquiriesServiceFilterReq.md#equals)
- [fromBinary](SalesEnquiriesServiceFilterReq.md#frombinary)
- [fromJson](SalesEnquiriesServiceFilterReq.md#fromjson)
- [fromJsonString](SalesEnquiriesServiceFilterReq.md#fromjsonstring)
- [getType](SalesEnquiriesServiceFilterReq.md#gettype)
- [toBinary](SalesEnquiriesServiceFilterReq.md#tobinary)
- [toJSON](SalesEnquiriesServiceFilterReq.md#tojson)
- [toJson](SalesEnquiriesServiceFilterReq.md#tojson-1)
- [toJsonString](SalesEnquiriesServiceFilterReq.md#tojsonstring)
- [equals](SalesEnquiriesServiceFilterReq.md#equals-1)
- [fromBinary](SalesEnquiriesServiceFilterReq.md#frombinary-1)
- [fromJson](SalesEnquiriesServiceFilterReq.md#fromjson-1)
- [fromJsonString](SalesEnquiriesServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesEnquiriesServiceFilterReq**(`data?`): [`SalesEnquiriesServiceFilterReq`](SalesEnquiriesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesEnquiriesServiceFilterReq`](SalesEnquiriesServiceFilterReq.md)\> |

#### Returns

[`SalesEnquiriesServiceFilterReq`](SalesEnquiriesServiceFilterReq.md)

#### Overrides

Message\&lt;SalesEnquiriesServiceFilterReq\&gt;.constructor

#### Defined in

[src/sales_enquiries.scailo_pb.ts:2907](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_enquiries.scailo_pb.ts#L2907)

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

[src/sales_enquiries.scailo_pb.ts:2706](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_enquiries.scailo_pb.ts#L2706)

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

[src/sales_enquiries.scailo_pb.ts:2690](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_enquiries.scailo_pb.ts#L2690)

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

[src/sales_enquiries.scailo_pb.ts:2674](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_enquiries.scailo_pb.ts#L2674)

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

[src/sales_enquiries.scailo_pb.ts:2722](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_enquiries.scailo_pb.ts#L2722)

___

### buyerClientId

• `Optional` **buyerClientId**: `bigint`

**`Optional`**

**`Description`**

The unique internal identifier of the prospective buyer client (the entity that would be financially responsible for the requested order).

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

[src/sales_enquiries.scailo_pb.ts:2818](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_enquiries.scailo_pb.ts#L2818)

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

[src/sales_enquiries.scailo_pb.ts:2754](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_enquiries.scailo_pb.ts#L2754)

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

[src/sales_enquiries.scailo_pb.ts:2738](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_enquiries.scailo_pb.ts#L2738)

___

### consigneeClientId

• `Optional` **consigneeClientId**: `bigint`

**`Optional`**

**`Description`**

The unique internal identifier of the prospective consignee client (the entity inquiring about receiving the goods or services).

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

[src/sales_enquiries.scailo_pb.ts:2802](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_enquiries.scailo_pb.ts#L2802)

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

[src/sales_enquiries.scailo_pb.ts:2528](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_enquiries.scailo_pb.ts#L2528)

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

[src/sales_enquiries.scailo_pb.ts:2598](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_enquiries.scailo_pb.ts#L2598)

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

[src/sales_enquiries.scailo_pb.ts:2582](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_enquiries.scailo_pb.ts#L2582)

___

### currencyId

• `Optional` **currencyId**: `bigint`

**`Optional`**

**`Description`**

The unique internal identifier of the currency associated with the enquiry, used to frame any prospective financial discussions or quotes.

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

[src/sales_enquiries.scailo_pb.ts:2834](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_enquiries.scailo_pb.ts#L2834)

___

### deliveryDateEnd

• `Optional` **deliveryDateEnd**: `string`

**`Optional`**

**`Description`**

Filter sales enquiries containing line items scheduled for delivery ON or BEFORE this specific date.

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

[src/sales_enquiries.scailo_pb.ts:2882](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_enquiries.scailo_pb.ts#L2882)

___

### deliveryDateExact

• `Optional` **deliveryDateExact**: `string`

**`Optional`**

**`Description`**

Filter sales enquiries containing line items scheduled for exact delivery on this specific date.

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

[src/sales_enquiries.scailo_pb.ts:2850](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_enquiries.scailo_pb.ts#L2850)

___

### deliveryDateStart

• `Optional` **deliveryDateStart**: `string`

**`Optional`**

**`Description`**

Filter sales enquiries containing line items scheduled for delivery ON or AFTER this specific date.

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

[src/sales_enquiries.scailo_pb.ts:2866](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_enquiries.scailo_pb.ts#L2866)

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

[src/sales_enquiries.scailo_pb.ts:2646](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_enquiries.scailo_pb.ts#L2646)

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

[src/sales_enquiries.scailo_pb.ts:2786](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_enquiries.scailo_pb.ts#L2786)

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

**`Optional`**

**`Description`**

Filter based on dynamic form field values.

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:2892](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_enquiries.scailo_pb.ts#L2892)

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

[src/sales_enquiries.scailo_pb.ts:2905](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_enquiries.scailo_pb.ts#L2905)

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

[src/sales_enquiries.scailo_pb.ts:2512](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_enquiries.scailo_pb.ts#L2512)

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

[src/sales_enquiries.scailo_pb.ts:2630](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_enquiries.scailo_pb.ts#L2630)

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

[src/sales_enquiries.scailo_pb.ts:2614](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_enquiries.scailo_pb.ts#L2614)

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

[src/sales_enquiries.scailo_pb.ts:2544](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_enquiries.scailo_pb.ts#L2544)

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

[src/sales_enquiries.scailo_pb.ts:2770](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_enquiries.scailo_pb.ts#L2770)

___

### sortKey

• `Optional` **sortKey**: [`SALES_ENQUIRY_SORT_KEY`](../enums/SALES_ENQUIRY_SORT_KEY.md)

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: optional Scailo.SALES_ENQUIRY_SORT_KEY sort_key = 5;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:2566](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_enquiries.scailo_pb.ts#L2566)

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

[src/sales_enquiries.scailo_pb.ts:2556](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_enquiries.scailo_pb.ts#L2556)

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

[src/sales_enquiries.scailo_pb.ts:2658](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_enquiries.scailo_pb.ts#L2658)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_enquiries.scailo_pb.ts:2914](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_enquiries.scailo_pb.ts#L2914)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_enquiries.scailo_pb.ts:2912](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_enquiries.scailo_pb.ts#L2912)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesEnquiriesServiceFilterReq"``

#### Defined in

[src/sales_enquiries.scailo_pb.ts:2913](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_enquiries.scailo_pb.ts#L2913)

## Methods

### clone

▸ **clone**(): [`SalesEnquiriesServiceFilterReq`](SalesEnquiriesServiceFilterReq.md)

Create a deep copy.

#### Returns

[`SalesEnquiriesServiceFilterReq`](SalesEnquiriesServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesEnquiriesServiceFilterReq`](SalesEnquiriesServiceFilterReq.md) \| `PlainMessage`\<[`SalesEnquiriesServiceFilterReq`](SalesEnquiriesServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesEnquiriesServiceFilterReq`](SalesEnquiriesServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesEnquiriesServiceFilterReq`](SalesEnquiriesServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`SalesEnquiriesServiceFilterReq`](SalesEnquiriesServiceFilterReq.md) \| `PlainMessage`\<[`SalesEnquiriesServiceFilterReq`](SalesEnquiriesServiceFilterReq.md)\> |
| `b` | `undefined` \| [`SalesEnquiriesServiceFilterReq`](SalesEnquiriesServiceFilterReq.md) \| `PlainMessage`\<[`SalesEnquiriesServiceFilterReq`](SalesEnquiriesServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/sales_enquiries.scailo_pb.ts:2956](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_enquiries.scailo_pb.ts#L2956)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesEnquiriesServiceFilterReq`](SalesEnquiriesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesEnquiriesServiceFilterReq`](SalesEnquiriesServiceFilterReq.md)

#### Defined in

[src/sales_enquiries.scailo_pb.ts:2944](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_enquiries.scailo_pb.ts#L2944)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesEnquiriesServiceFilterReq`](SalesEnquiriesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesEnquiriesServiceFilterReq`](SalesEnquiriesServiceFilterReq.md)

#### Defined in

[src/sales_enquiries.scailo_pb.ts:2948](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_enquiries.scailo_pb.ts#L2948)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesEnquiriesServiceFilterReq`](SalesEnquiriesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesEnquiriesServiceFilterReq`](SalesEnquiriesServiceFilterReq.md)

#### Defined in

[src/sales_enquiries.scailo_pb.ts:2952](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_enquiries.scailo_pb.ts#L2952)
