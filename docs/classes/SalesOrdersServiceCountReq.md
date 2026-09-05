[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesOrdersServiceCountReq

# Class: SalesOrdersServiceCountReq

Target filter request for counting sales order records matching specific logical criteria.
This message encapsulates lifecycle status filters, timestamp ranges, workflow markers,
and entity references to determine the total size of a targeted dataset.

**Note:** This is the primary message layout used by backend calculation engines, reporting
services, and frontend pagination headers to evaluate total record matches dynamically
before or alongside retrieving paginated results.

**`Generated`**

from message Scailo.SalesOrdersServiceCountReq

## Hierarchy

- `Message`\<[`SalesOrdersServiceCountReq`](SalesOrdersServiceCountReq.md)\>

  ↳ **`SalesOrdersServiceCountReq`**

## Table of contents

### Constructors

- [constructor](SalesOrdersServiceCountReq.md#constructor)

### Properties

- [approvedByUserId](SalesOrdersServiceCountReq.md#approvedbyuserid)
- [approvedOnEnd](SalesOrdersServiceCountReq.md#approvedonend)
- [approvedOnStart](SalesOrdersServiceCountReq.md#approvedonstart)
- [approverRoleId](SalesOrdersServiceCountReq.md#approverroleid)
- [buyerClientId](SalesOrdersServiceCountReq.md#buyerclientid)
- [completedOnEnd](SalesOrdersServiceCountReq.md#completedonend)
- [completedOnStart](SalesOrdersServiceCountReq.md#completedonstart)
- [consigneeClientId](SalesOrdersServiceCountReq.md#consigneeclientid)
- [creationTimestampEnd](SalesOrdersServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](SalesOrdersServiceCountReq.md#creationtimestampstart)
- [currencyId](SalesOrdersServiceCountReq.md#currencyid)
- [deliveryDateEnd](SalesOrdersServiceCountReq.md#deliverydateend)
- [deliveryDateExact](SalesOrdersServiceCountReq.md#deliverydateexact)
- [deliveryDateStart](SalesOrdersServiceCountReq.md#deliverydatestart)
- [entityUuid](SalesOrdersServiceCountReq.md#entityuuid)
- [familyId](SalesOrdersServiceCountReq.md#familyid)
- [finalRefNumber](SalesOrdersServiceCountReq.md#finalrefnumber)
- [formData](SalesOrdersServiceCountReq.md#formdata)
- [isActive](SalesOrdersServiceCountReq.md#isactive)
- [locationId](SalesOrdersServiceCountReq.md#locationid)
- [modificationTimestampEnd](SalesOrdersServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](SalesOrdersServiceCountReq.md#modificationtimestampstart)
- [projectId](SalesOrdersServiceCountReq.md#projectid)
- [referenceId](SalesOrdersServiceCountReq.md#referenceid)
- [status](SalesOrdersServiceCountReq.md#status)
- [totalValueMax](SalesOrdersServiceCountReq.md#totalvaluemax)
- [totalValueMin](SalesOrdersServiceCountReq.md#totalvaluemin)
- [fields](SalesOrdersServiceCountReq.md#fields)
- [runtime](SalesOrdersServiceCountReq.md#runtime)
- [typeName](SalesOrdersServiceCountReq.md#typename)

### Methods

- [clone](SalesOrdersServiceCountReq.md#clone)
- [equals](SalesOrdersServiceCountReq.md#equals)
- [fromBinary](SalesOrdersServiceCountReq.md#frombinary)
- [fromJson](SalesOrdersServiceCountReq.md#fromjson)
- [fromJsonString](SalesOrdersServiceCountReq.md#fromjsonstring)
- [getType](SalesOrdersServiceCountReq.md#gettype)
- [toBinary](SalesOrdersServiceCountReq.md#tobinary)
- [toJSON](SalesOrdersServiceCountReq.md#tojson)
- [toJson](SalesOrdersServiceCountReq.md#tojson-1)
- [toJsonString](SalesOrdersServiceCountReq.md#tojsonstring)
- [equals](SalesOrdersServiceCountReq.md#equals-1)
- [fromBinary](SalesOrdersServiceCountReq.md#frombinary-1)
- [fromJson](SalesOrdersServiceCountReq.md#fromjson-1)
- [fromJsonString](SalesOrdersServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesOrdersServiceCountReq**(`data?`): [`SalesOrdersServiceCountReq`](SalesOrdersServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesOrdersServiceCountReq`](SalesOrdersServiceCountReq.md)\> |

#### Returns

[`SalesOrdersServiceCountReq`](SalesOrdersServiceCountReq.md)

#### Overrides

Message\&lt;SalesOrdersServiceCountReq\&gt;.constructor

#### Defined in

[src/sales_orders.scailo_pb.ts:4148](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_orders.scailo_pb.ts#L4148)

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

[src/sales_orders.scailo_pb.ts:3880](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_orders.scailo_pb.ts#L3880)

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

[src/sales_orders.scailo_pb.ts:3864](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_orders.scailo_pb.ts#L3864)

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

[src/sales_orders.scailo_pb.ts:3848](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_orders.scailo_pb.ts#L3848)

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

[src/sales_orders.scailo_pb.ts:3896](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_orders.scailo_pb.ts#L3896)

___

### buyerClientId

• `Optional` **buyerClientId**: `bigint`

**`Optional`**

**`Description`**

The unique internal identifier of the buyer client (the entity financially responsible for the order).

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

[src/sales_orders.scailo_pb.ts:3992](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_orders.scailo_pb.ts#L3992)

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

[src/sales_orders.scailo_pb.ts:3928](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_orders.scailo_pb.ts#L3928)

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

[src/sales_orders.scailo_pb.ts:3912](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_orders.scailo_pb.ts#L3912)

___

### consigneeClientId

• `Optional` **consigneeClientId**: `bigint`

**`Optional`**

**`Description`**

The unique internal identifier of the consignee client (the entity physically receiving the goods or services).

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

[src/sales_orders.scailo_pb.ts:3976](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_orders.scailo_pb.ts#L3976)

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

[src/sales_orders.scailo_pb.ts:3772](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_orders.scailo_pb.ts#L3772)

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

[src/sales_orders.scailo_pb.ts:3756](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_orders.scailo_pb.ts#L3756)

___

### currencyId

• `Optional` **currencyId**: `bigint`

**`Optional`**

**`Description`**

The unique internal identifier of the currency used for all financial calculations, billing, and pricing within this order.

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

[src/sales_orders.scailo_pb.ts:4024](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_orders.scailo_pb.ts#L4024)

___

### deliveryDateEnd

• `Optional` **deliveryDateEnd**: `string`

**`Optional`**

**`Description`**

Count sales orders containing line items scheduled for delivery ON or BEFORE this specific date.

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

[src/sales_orders.scailo_pb.ts:4104](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_orders.scailo_pb.ts#L4104)

___

### deliveryDateExact

• `Optional` **deliveryDateExact**: `string`

**`Optional`**

**`Description`**

Count sales orders containing line items scheduled for exact delivery on this specific date.

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

[src/sales_orders.scailo_pb.ts:4072](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_orders.scailo_pb.ts#L4072)

___

### deliveryDateStart

• `Optional` **deliveryDateStart**: `string`

**`Optional`**

**`Description`**

Count sales orders containing line items scheduled for delivery ON or AFTER this specific date.

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

[src/sales_orders.scailo_pb.ts:4088](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_orders.scailo_pb.ts#L4088)

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

[src/sales_orders.scailo_pb.ts:3820](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_orders.scailo_pb.ts#L3820)

___

### familyId

• `Optional` **familyId**: `bigint`

**`Optional`**

**`Description`**

Count sales orders that contain at least one line item belonging to this specific family ID.

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

[src/sales_orders.scailo_pb.ts:4056](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_orders.scailo_pb.ts#L4056)

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

[src/sales_orders.scailo_pb.ts:3960](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_orders.scailo_pb.ts#L3960)

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

**`Optional`**

**`Description`**

Count based on dynamic form field values.

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

[src/sales_orders.scailo_pb.ts:4146](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_orders.scailo_pb.ts#L4146)

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

[src/sales_orders.scailo_pb.ts:3740](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_orders.scailo_pb.ts#L3740)

___

### locationId

• `Optional` **locationId**: `bigint`

**`Optional`**

**`Description`**

The unique internal identifier of the originating location (e.g., specific warehouse, plant, or office) responsible for fulfilling this order.

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

[src/sales_orders.scailo_pb.ts:4008](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_orders.scailo_pb.ts#L4008)

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

[src/sales_orders.scailo_pb.ts:3804](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_orders.scailo_pb.ts#L3804)

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

[src/sales_orders.scailo_pb.ts:3788](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_orders.scailo_pb.ts#L3788)

___

### projectId

• `Optional` **projectId**: `bigint`

**`Optional`**

**`Description`**

The unique internal identifier of an associated project, used to track sales revenue and fulfillment against specific long-term initiatives.

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

[src/sales_orders.scailo_pb.ts:4040](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_orders.scailo_pb.ts#L4040)

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

[src/sales_orders.scailo_pb.ts:3944](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_orders.scailo_pb.ts#L3944)

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

[src/sales_orders.scailo_pb.ts:3832](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_orders.scailo_pb.ts#L3832)

___

### totalValueMax

• `Optional` **totalValueMax**: `bigint`

**`Optional`**

**`Description`**

Count sales orders where the grand total value is less than or equal to this amount. Evaluated in the base currency subunit (e.g., cents). Ignored if set to 0.

**`Example`**

```ts
1500000
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 total_value_max = 51;

#### Defined in

[src/sales_orders.scailo_pb.ts:4136](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_orders.scailo_pb.ts#L4136)

___

### totalValueMin

• `Optional` **totalValueMin**: `bigint`

**`Optional`**

**`Description`**

Count sales orders where the grand total value is greater than or equal to this amount. Evaluated in the base currency subunit (e.g., cents). Ignored if set to 0.

**`Example`**

```ts
500000
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 total_value_min = 50;

#### Defined in

[src/sales_orders.scailo_pb.ts:4120](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_orders.scailo_pb.ts#L4120)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_orders.scailo_pb.ts:4155](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_orders.scailo_pb.ts#L4155)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_orders.scailo_pb.ts:4153](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_orders.scailo_pb.ts#L4153)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesOrdersServiceCountReq"``

#### Defined in

[src/sales_orders.scailo_pb.ts:4154](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_orders.scailo_pb.ts#L4154)

## Methods

### clone

▸ **clone**(): [`SalesOrdersServiceCountReq`](SalesOrdersServiceCountReq.md)

Create a deep copy.

#### Returns

[`SalesOrdersServiceCountReq`](SalesOrdersServiceCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesOrdersServiceCountReq`](SalesOrdersServiceCountReq.md) \| `PlainMessage`\<[`SalesOrdersServiceCountReq`](SalesOrdersServiceCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesOrdersServiceCountReq`](SalesOrdersServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesOrdersServiceCountReq`](SalesOrdersServiceCountReq.md)\>

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
| `a` | `undefined` \| [`SalesOrdersServiceCountReq`](SalesOrdersServiceCountReq.md) \| `PlainMessage`\<[`SalesOrdersServiceCountReq`](SalesOrdersServiceCountReq.md)\> |
| `b` | `undefined` \| [`SalesOrdersServiceCountReq`](SalesOrdersServiceCountReq.md) \| `PlainMessage`\<[`SalesOrdersServiceCountReq`](SalesOrdersServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/sales_orders.scailo_pb.ts:4197](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_orders.scailo_pb.ts#L4197)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesOrdersServiceCountReq`](SalesOrdersServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesOrdersServiceCountReq`](SalesOrdersServiceCountReq.md)

#### Defined in

[src/sales_orders.scailo_pb.ts:4185](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_orders.scailo_pb.ts#L4185)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesOrdersServiceCountReq`](SalesOrdersServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesOrdersServiceCountReq`](SalesOrdersServiceCountReq.md)

#### Defined in

[src/sales_orders.scailo_pb.ts:4189](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_orders.scailo_pb.ts#L4189)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesOrdersServiceCountReq`](SalesOrdersServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesOrdersServiceCountReq`](SalesOrdersServiceCountReq.md)

#### Defined in

[src/sales_orders.scailo_pb.ts:4193](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_orders.scailo_pb.ts#L4193)
