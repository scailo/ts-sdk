[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / PurchasesOrdersServiceCountReq

# Class: PurchasesOrdersServiceCountReq

Describes the base request payload of a count search

**`Generated`**

from message Scailo.PurchasesOrdersServiceCountReq

## Hierarchy

- `Message`\<[`PurchasesOrdersServiceCountReq`](PurchasesOrdersServiceCountReq.md)\>

  ↳ **`PurchasesOrdersServiceCountReq`**

## Table of contents

### Constructors

- [constructor](PurchasesOrdersServiceCountReq.md#constructor)

### Properties

- [approvedByUserId](PurchasesOrdersServiceCountReq.md#approvedbyuserid)
- [approvedOnEnd](PurchasesOrdersServiceCountReq.md#approvedonend)
- [approvedOnStart](PurchasesOrdersServiceCountReq.md#approvedonstart)
- [approverRoleId](PurchasesOrdersServiceCountReq.md#approverroleid)
- [buyerLocationId](PurchasesOrdersServiceCountReq.md#buyerlocationid)
- [completedOnEnd](PurchasesOrdersServiceCountReq.md#completedonend)
- [completedOnStart](PurchasesOrdersServiceCountReq.md#completedonstart)
- [consigneeLocationId](PurchasesOrdersServiceCountReq.md#consigneelocationid)
- [creationTimestampEnd](PurchasesOrdersServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](PurchasesOrdersServiceCountReq.md#creationtimestampstart)
- [currencyId](PurchasesOrdersServiceCountReq.md#currencyid)
- [deliveryDateEnd](PurchasesOrdersServiceCountReq.md#deliverydateend)
- [deliveryDateExact](PurchasesOrdersServiceCountReq.md#deliverydateexact)
- [deliveryDateStart](PurchasesOrdersServiceCountReq.md#deliverydatestart)
- [entityUuid](PurchasesOrdersServiceCountReq.md#entityuuid)
- [familyId](PurchasesOrdersServiceCountReq.md#familyid)
- [finalRefNumber](PurchasesOrdersServiceCountReq.md#finalrefnumber)
- [formData](PurchasesOrdersServiceCountReq.md#formdata)
- [isActive](PurchasesOrdersServiceCountReq.md#isactive)
- [modificationTimestampEnd](PurchasesOrdersServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](PurchasesOrdersServiceCountReq.md#modificationtimestampstart)
- [projectId](PurchasesOrdersServiceCountReq.md#projectid)
- [referenceId](PurchasesOrdersServiceCountReq.md#referenceid)
- [status](PurchasesOrdersServiceCountReq.md#status)
- [totalValueMax](PurchasesOrdersServiceCountReq.md#totalvaluemax)
- [totalValueMin](PurchasesOrdersServiceCountReq.md#totalvaluemin)
- [vendorId](PurchasesOrdersServiceCountReq.md#vendorid)
- [fields](PurchasesOrdersServiceCountReq.md#fields)
- [runtime](PurchasesOrdersServiceCountReq.md#runtime)
- [typeName](PurchasesOrdersServiceCountReq.md#typename)

### Methods

- [clone](PurchasesOrdersServiceCountReq.md#clone)
- [equals](PurchasesOrdersServiceCountReq.md#equals)
- [fromBinary](PurchasesOrdersServiceCountReq.md#frombinary)
- [fromJson](PurchasesOrdersServiceCountReq.md#fromjson)
- [fromJsonString](PurchasesOrdersServiceCountReq.md#fromjsonstring)
- [getType](PurchasesOrdersServiceCountReq.md#gettype)
- [toBinary](PurchasesOrdersServiceCountReq.md#tobinary)
- [toJSON](PurchasesOrdersServiceCountReq.md#tojson)
- [toJson](PurchasesOrdersServiceCountReq.md#tojson-1)
- [toJsonString](PurchasesOrdersServiceCountReq.md#tojsonstring)
- [equals](PurchasesOrdersServiceCountReq.md#equals-1)
- [fromBinary](PurchasesOrdersServiceCountReq.md#frombinary-1)
- [fromJson](PurchasesOrdersServiceCountReq.md#fromjson-1)
- [fromJsonString](PurchasesOrdersServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new PurchasesOrdersServiceCountReq**(`data?`): [`PurchasesOrdersServiceCountReq`](PurchasesOrdersServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`PurchasesOrdersServiceCountReq`](PurchasesOrdersServiceCountReq.md)\> |

#### Returns

[`PurchasesOrdersServiceCountReq`](PurchasesOrdersServiceCountReq.md)

#### Overrides

Message\&lt;PurchasesOrdersServiceCountReq\&gt;.constructor

#### Defined in

[src/purchases_orders.scailo_pb.ts:2929](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/purchases_orders.scailo_pb.ts#L2929)

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

[src/purchases_orders.scailo_pb.ts:2763](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/purchases_orders.scailo_pb.ts#L2763)

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

[src/purchases_orders.scailo_pb.ts:2747](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/purchases_orders.scailo_pb.ts#L2747)

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

[src/purchases_orders.scailo_pb.ts:2731](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/purchases_orders.scailo_pb.ts#L2731)

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

[src/purchases_orders.scailo_pb.ts:2779](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/purchases_orders.scailo_pb.ts#L2779)

___

### buyerLocationId

• **buyerLocationId**: `bigint` = `protoInt64.zero`

The associated buyer location ID

**`Generated`**

from field: uint64 buyer_location_id = 23;

#### Defined in

[src/purchases_orders.scailo_pb.ts:2857](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/purchases_orders.scailo_pb.ts#L2857)

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

[src/purchases_orders.scailo_pb.ts:2811](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/purchases_orders.scailo_pb.ts#L2811)

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

[src/purchases_orders.scailo_pb.ts:2795](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/purchases_orders.scailo_pb.ts#L2795)

___

### consigneeLocationId

• **consigneeLocationId**: `bigint` = `protoInt64.zero`

The associated consignee location ID

**`Generated`**

from field: uint64 consignee_location_id = 22;

#### Defined in

[src/purchases_orders.scailo_pb.ts:2850](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/purchases_orders.scailo_pb.ts#L2850)

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

[src/purchases_orders.scailo_pb.ts:2655](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/purchases_orders.scailo_pb.ts#L2655)

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

[src/purchases_orders.scailo_pb.ts:2639](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/purchases_orders.scailo_pb.ts#L2639)

___

### currencyId

• **currencyId**: `bigint` = `protoInt64.zero`

The ID of the associated currency

**`Generated`**

from field: uint64 currency_id = 25;

#### Defined in

[src/purchases_orders.scailo_pb.ts:2871](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/purchases_orders.scailo_pb.ts#L2871)

___

### deliveryDateEnd

• **deliveryDateEnd**: `string` = `""`

The end delivery date of the item in the purchase order

**`Generated`**

from field: string delivery_date_end = 43;

#### Defined in

[src/purchases_orders.scailo_pb.ts:2906](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/purchases_orders.scailo_pb.ts#L2906)

___

### deliveryDateExact

• **deliveryDateExact**: `string` = `""`

The exact delivery date of the item in the purchase order

**`Generated`**

from field: string delivery_date_exact = 41;

#### Defined in

[src/purchases_orders.scailo_pb.ts:2892](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/purchases_orders.scailo_pb.ts#L2892)

___

### deliveryDateStart

• **deliveryDateStart**: `string` = `""`

The start delivery date of the item in the purchase order

**`Generated`**

from field: string delivery_date_start = 42;

#### Defined in

[src/purchases_orders.scailo_pb.ts:2899](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/purchases_orders.scailo_pb.ts#L2899)

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

[src/purchases_orders.scailo_pb.ts:2703](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/purchases_orders.scailo_pb.ts#L2703)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family

**`Generated`**

from field: uint64 family_id = 40;

#### Defined in

[src/purchases_orders.scailo_pb.ts:2885](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/purchases_orders.scailo_pb.ts#L2885)

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

[src/purchases_orders.scailo_pb.ts:2843](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/purchases_orders.scailo_pb.ts#L2843)

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

The list of form data filters

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

[src/purchases_orders.scailo_pb.ts:2927](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/purchases_orders.scailo_pb.ts#L2927)

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

[src/purchases_orders.scailo_pb.ts:2623](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/purchases_orders.scailo_pb.ts#L2623)

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

[src/purchases_orders.scailo_pb.ts:2687](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/purchases_orders.scailo_pb.ts#L2687)

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

[src/purchases_orders.scailo_pb.ts:2671](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/purchases_orders.scailo_pb.ts#L2671)

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The ID of the associated project

**`Generated`**

from field: uint64 project_id = 26;

#### Defined in

[src/purchases_orders.scailo_pb.ts:2878](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/purchases_orders.scailo_pb.ts#L2878)

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

[src/purchases_orders.scailo_pb.ts:2827](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/purchases_orders.scailo_pb.ts#L2827)

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

[src/purchases_orders.scailo_pb.ts:2715](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/purchases_orders.scailo_pb.ts#L2715)

___

### totalValueMax

• **totalValueMax**: `bigint` = `protoInt64.zero`

Stores the maximum value of the purchase order (ignored if 0)

**`Generated`**

from field: uint64 total_value_max = 51;

#### Defined in

[src/purchases_orders.scailo_pb.ts:2920](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/purchases_orders.scailo_pb.ts#L2920)

___

### totalValueMin

• **totalValueMin**: `bigint` = `protoInt64.zero`

Stores the minimum value of the purchase order (ignored if 0)

**`Generated`**

from field: uint64 total_value_min = 50;

#### Defined in

[src/purchases_orders.scailo_pb.ts:2913](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/purchases_orders.scailo_pb.ts#L2913)

___

### vendorId

• **vendorId**: `bigint` = `protoInt64.zero`

The ID of the associated vendor

**`Generated`**

from field: uint64 vendor_id = 24;

#### Defined in

[src/purchases_orders.scailo_pb.ts:2864](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/purchases_orders.scailo_pb.ts#L2864)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/purchases_orders.scailo_pb.ts:2936](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/purchases_orders.scailo_pb.ts#L2936)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/purchases_orders.scailo_pb.ts:2934](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/purchases_orders.scailo_pb.ts#L2934)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.PurchasesOrdersServiceCountReq"``

#### Defined in

[src/purchases_orders.scailo_pb.ts:2935](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/purchases_orders.scailo_pb.ts#L2935)

## Methods

### clone

▸ **clone**(): [`PurchasesOrdersServiceCountReq`](PurchasesOrdersServiceCountReq.md)

Create a deep copy.

#### Returns

[`PurchasesOrdersServiceCountReq`](PurchasesOrdersServiceCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`PurchasesOrdersServiceCountReq`](PurchasesOrdersServiceCountReq.md) \| `PlainMessage`\<[`PurchasesOrdersServiceCountReq`](PurchasesOrdersServiceCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`PurchasesOrdersServiceCountReq`](PurchasesOrdersServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`PurchasesOrdersServiceCountReq`](PurchasesOrdersServiceCountReq.md)\>

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
| `a` | `undefined` \| [`PurchasesOrdersServiceCountReq`](PurchasesOrdersServiceCountReq.md) \| `PlainMessage`\<[`PurchasesOrdersServiceCountReq`](PurchasesOrdersServiceCountReq.md)\> |
| `b` | `undefined` \| [`PurchasesOrdersServiceCountReq`](PurchasesOrdersServiceCountReq.md) \| `PlainMessage`\<[`PurchasesOrdersServiceCountReq`](PurchasesOrdersServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/purchases_orders.scailo_pb.ts:2978](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/purchases_orders.scailo_pb.ts#L2978)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PurchasesOrdersServiceCountReq`](PurchasesOrdersServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`PurchasesOrdersServiceCountReq`](PurchasesOrdersServiceCountReq.md)

#### Defined in

[src/purchases_orders.scailo_pb.ts:2966](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/purchases_orders.scailo_pb.ts#L2966)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PurchasesOrdersServiceCountReq`](PurchasesOrdersServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchasesOrdersServiceCountReq`](PurchasesOrdersServiceCountReq.md)

#### Defined in

[src/purchases_orders.scailo_pb.ts:2970](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/purchases_orders.scailo_pb.ts#L2970)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PurchasesOrdersServiceCountReq`](PurchasesOrdersServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchasesOrdersServiceCountReq`](PurchasesOrdersServiceCountReq.md)

#### Defined in

[src/purchases_orders.scailo_pb.ts:2974](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/purchases_orders.scailo_pb.ts#L2974)
