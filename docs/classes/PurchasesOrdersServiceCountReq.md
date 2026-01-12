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

[src/purchases_orders.scailo_pb.ts:2533](https://github.com/scailo/ts-sdk/blob/7c8082796d1ee35579f9f1a973974add6b332cf6/src/purchases_orders.scailo_pb.ts#L2533)

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 13;

#### Defined in

[src/purchases_orders.scailo_pb.ts:2412](https://github.com/scailo/ts-sdk/blob/7c8082796d1ee35579f9f1a973974add6b332cf6/src/purchases_orders.scailo_pb.ts#L2412)

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 12;

#### Defined in

[src/purchases_orders.scailo_pb.ts:2405](https://github.com/scailo/ts-sdk/blob/7c8082796d1ee35579f9f1a973974add6b332cf6/src/purchases_orders.scailo_pb.ts#L2405)

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 11;

#### Defined in

[src/purchases_orders.scailo_pb.ts:2398](https://github.com/scailo/ts-sdk/blob/7c8082796d1ee35579f9f1a973974add6b332cf6/src/purchases_orders.scailo_pb.ts#L2398)

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 14;

#### Defined in

[src/purchases_orders.scailo_pb.ts:2419](https://github.com/scailo/ts-sdk/blob/7c8082796d1ee35579f9f1a973974add6b332cf6/src/purchases_orders.scailo_pb.ts#L2419)

___

### buyerLocationId

• **buyerLocationId**: `bigint` = `protoInt64.zero`

The associated buyer location ID

**`Generated`**

from field: uint64 buyer_location_id = 23;

#### Defined in

[src/purchases_orders.scailo_pb.ts:2461](https://github.com/scailo/ts-sdk/blob/7c8082796d1ee35579f9f1a973974add6b332cf6/src/purchases_orders.scailo_pb.ts#L2461)

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: uint64 completed_on_end = 16;

#### Defined in

[src/purchases_orders.scailo_pb.ts:2433](https://github.com/scailo/ts-sdk/blob/7c8082796d1ee35579f9f1a973974add6b332cf6/src/purchases_orders.scailo_pb.ts#L2433)

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: uint64 completed_on_start = 15;

#### Defined in

[src/purchases_orders.scailo_pb.ts:2426](https://github.com/scailo/ts-sdk/blob/7c8082796d1ee35579f9f1a973974add6b332cf6/src/purchases_orders.scailo_pb.ts#L2426)

___

### consigneeLocationId

• **consigneeLocationId**: `bigint` = `protoInt64.zero`

The associated consignee location ID

**`Generated`**

from field: uint64 consignee_location_id = 22;

#### Defined in

[src/purchases_orders.scailo_pb.ts:2454](https://github.com/scailo/ts-sdk/blob/7c8082796d1ee35579f9f1a973974add6b332cf6/src/purchases_orders.scailo_pb.ts#L2454)

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

[src/purchases_orders.scailo_pb.ts:2363](https://github.com/scailo/ts-sdk/blob/7c8082796d1ee35579f9f1a973974add6b332cf6/src/purchases_orders.scailo_pb.ts#L2363)

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

[src/purchases_orders.scailo_pb.ts:2356](https://github.com/scailo/ts-sdk/blob/7c8082796d1ee35579f9f1a973974add6b332cf6/src/purchases_orders.scailo_pb.ts#L2356)

___

### currencyId

• **currencyId**: `bigint` = `protoInt64.zero`

The ID of the associated currency

**`Generated`**

from field: uint64 currency_id = 25;

#### Defined in

[src/purchases_orders.scailo_pb.ts:2475](https://github.com/scailo/ts-sdk/blob/7c8082796d1ee35579f9f1a973974add6b332cf6/src/purchases_orders.scailo_pb.ts#L2475)

___

### deliveryDateEnd

• **deliveryDateEnd**: `string` = `""`

The end delivery date of the item in the purchase order

**`Generated`**

from field: string delivery_date_end = 43;

#### Defined in

[src/purchases_orders.scailo_pb.ts:2510](https://github.com/scailo/ts-sdk/blob/7c8082796d1ee35579f9f1a973974add6b332cf6/src/purchases_orders.scailo_pb.ts#L2510)

___

### deliveryDateExact

• **deliveryDateExact**: `string` = `""`

The exact delivery date of the item in the purchase order

**`Generated`**

from field: string delivery_date_exact = 41;

#### Defined in

[src/purchases_orders.scailo_pb.ts:2496](https://github.com/scailo/ts-sdk/blob/7c8082796d1ee35579f9f1a973974add6b332cf6/src/purchases_orders.scailo_pb.ts#L2496)

___

### deliveryDateStart

• **deliveryDateStart**: `string` = `""`

The start delivery date of the item in the purchase order

**`Generated`**

from field: string delivery_date_start = 42;

#### Defined in

[src/purchases_orders.scailo_pb.ts:2503](https://github.com/scailo/ts-sdk/blob/7c8082796d1ee35579f9f1a973974add6b332cf6/src/purchases_orders.scailo_pb.ts#L2503)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

[src/purchases_orders.scailo_pb.ts:2384](https://github.com/scailo/ts-sdk/blob/7c8082796d1ee35579f9f1a973974add6b332cf6/src/purchases_orders.scailo_pb.ts#L2384)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family

**`Generated`**

from field: uint64 family_id = 40;

#### Defined in

[src/purchases_orders.scailo_pb.ts:2489](https://github.com/scailo/ts-sdk/blob/7c8082796d1ee35579f9f1a973974add6b332cf6/src/purchases_orders.scailo_pb.ts#L2489)

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 21;

#### Defined in

[src/purchases_orders.scailo_pb.ts:2447](https://github.com/scailo/ts-sdk/blob/7c8082796d1ee35579f9f1a973974add6b332cf6/src/purchases_orders.scailo_pb.ts#L2447)

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

The list of form data filters

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

[src/purchases_orders.scailo_pb.ts:2531](https://github.com/scailo/ts-sdk/blob/7c8082796d1ee35579f9f1a973974add6b332cf6/src/purchases_orders.scailo_pb.ts#L2531)

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/purchases_orders.scailo_pb.ts:2349](https://github.com/scailo/ts-sdk/blob/7c8082796d1ee35579f9f1a973974add6b332cf6/src/purchases_orders.scailo_pb.ts#L2349)

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

[src/purchases_orders.scailo_pb.ts:2377](https://github.com/scailo/ts-sdk/blob/7c8082796d1ee35579f9f1a973974add6b332cf6/src/purchases_orders.scailo_pb.ts#L2377)

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

[src/purchases_orders.scailo_pb.ts:2370](https://github.com/scailo/ts-sdk/blob/7c8082796d1ee35579f9f1a973974add6b332cf6/src/purchases_orders.scailo_pb.ts#L2370)

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The ID of the associated project

**`Generated`**

from field: uint64 project_id = 26;

#### Defined in

[src/purchases_orders.scailo_pb.ts:2482](https://github.com/scailo/ts-sdk/blob/7c8082796d1ee35579f9f1a973974add6b332cf6/src/purchases_orders.scailo_pb.ts#L2482)

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the purchase order

**`Generated`**

from field: string reference_id = 20;

#### Defined in

[src/purchases_orders.scailo_pb.ts:2440](https://github.com/scailo/ts-sdk/blob/7c8082796d1ee35579f9f1a973974add6b332cf6/src/purchases_orders.scailo_pb.ts#L2440)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this purchase order

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/purchases_orders.scailo_pb.ts:2391](https://github.com/scailo/ts-sdk/blob/7c8082796d1ee35579f9f1a973974add6b332cf6/src/purchases_orders.scailo_pb.ts#L2391)

___

### totalValueMax

• **totalValueMax**: `bigint` = `protoInt64.zero`

Stores the maximum value of the purchase order (ignored if 0)

**`Generated`**

from field: uint64 total_value_max = 51;

#### Defined in

[src/purchases_orders.scailo_pb.ts:2524](https://github.com/scailo/ts-sdk/blob/7c8082796d1ee35579f9f1a973974add6b332cf6/src/purchases_orders.scailo_pb.ts#L2524)

___

### totalValueMin

• **totalValueMin**: `bigint` = `protoInt64.zero`

Stores the minimum value of the purchase order (ignored if 0)

**`Generated`**

from field: uint64 total_value_min = 50;

#### Defined in

[src/purchases_orders.scailo_pb.ts:2517](https://github.com/scailo/ts-sdk/blob/7c8082796d1ee35579f9f1a973974add6b332cf6/src/purchases_orders.scailo_pb.ts#L2517)

___

### vendorId

• **vendorId**: `bigint` = `protoInt64.zero`

The ID of the associated vendor

**`Generated`**

from field: uint64 vendor_id = 24;

#### Defined in

[src/purchases_orders.scailo_pb.ts:2468](https://github.com/scailo/ts-sdk/blob/7c8082796d1ee35579f9f1a973974add6b332cf6/src/purchases_orders.scailo_pb.ts#L2468)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/purchases_orders.scailo_pb.ts:2540](https://github.com/scailo/ts-sdk/blob/7c8082796d1ee35579f9f1a973974add6b332cf6/src/purchases_orders.scailo_pb.ts#L2540)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/purchases_orders.scailo_pb.ts:2538](https://github.com/scailo/ts-sdk/blob/7c8082796d1ee35579f9f1a973974add6b332cf6/src/purchases_orders.scailo_pb.ts#L2538)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.PurchasesOrdersServiceCountReq"``

#### Defined in

[src/purchases_orders.scailo_pb.ts:2539](https://github.com/scailo/ts-sdk/blob/7c8082796d1ee35579f9f1a973974add6b332cf6/src/purchases_orders.scailo_pb.ts#L2539)

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

[src/purchases_orders.scailo_pb.ts:2582](https://github.com/scailo/ts-sdk/blob/7c8082796d1ee35579f9f1a973974add6b332cf6/src/purchases_orders.scailo_pb.ts#L2582)

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

[src/purchases_orders.scailo_pb.ts:2570](https://github.com/scailo/ts-sdk/blob/7c8082796d1ee35579f9f1a973974add6b332cf6/src/purchases_orders.scailo_pb.ts#L2570)

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

[src/purchases_orders.scailo_pb.ts:2574](https://github.com/scailo/ts-sdk/blob/7c8082796d1ee35579f9f1a973974add6b332cf6/src/purchases_orders.scailo_pb.ts#L2574)

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

[src/purchases_orders.scailo_pb.ts:2578](https://github.com/scailo/ts-sdk/blob/7c8082796d1ee35579f9f1a973974add6b332cf6/src/purchases_orders.scailo_pb.ts#L2578)
