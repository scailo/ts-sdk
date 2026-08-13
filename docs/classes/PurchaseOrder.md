[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / PurchaseOrder

# Class: PurchaseOrder

Describes the parameters that are part of a standard response

**`Generated`**

from message Scailo.PurchaseOrder

## Hierarchy

- `Message`\<[`PurchaseOrder`](PurchaseOrder.md)\>

  ↳ **`PurchaseOrder`**

## Table of contents

### Constructors

- [constructor](PurchaseOrder.md#constructor)

### Properties

- [amendmentCount](PurchaseOrder.md#amendmentcount)
- [approvalMetadata](PurchaseOrder.md#approvalmetadata)
- [buyerLocationId](PurchaseOrder.md#buyerlocationid)
- [completedOn](PurchaseOrder.md#completedon)
- [consigneeLocationId](PurchaseOrder.md#consigneelocationid)
- [currencyId](PurchaseOrder.md#currencyid)
- [entityUuid](PurchaseOrder.md#entityuuid)
- [finalRefNumber](PurchaseOrder.md#finalrefnumber)
- [formData](PurchaseOrder.md#formdata)
- [list](PurchaseOrder.md#list)
- [logs](PurchaseOrder.md#logs)
- [metadata](PurchaseOrder.md#metadata)
- [miscellaneousCost](PurchaseOrder.md#miscellaneouscost)
- [overallDiscount](PurchaseOrder.md#overalldiscount)
- [paymentAdvance](PurchaseOrder.md#paymentadvance)
- [paymentCycleInDays](PurchaseOrder.md#paymentcycleindays)
- [projectId](PurchaseOrder.md#projectid)
- [referenceId](PurchaseOrder.md#referenceid)
- [roundOff](PurchaseOrder.md#roundoff)
- [status](PurchaseOrder.md#status)
- [totalValue](PurchaseOrder.md#totalvalue)
- [vaultFolderId](PurchaseOrder.md#vaultfolderid)
- [vendorId](PurchaseOrder.md#vendorid)
- [fields](PurchaseOrder.md#fields)
- [runtime](PurchaseOrder.md#runtime)
- [typeName](PurchaseOrder.md#typename)

### Methods

- [clone](PurchaseOrder.md#clone)
- [equals](PurchaseOrder.md#equals)
- [fromBinary](PurchaseOrder.md#frombinary)
- [fromJson](PurchaseOrder.md#fromjson)
- [fromJsonString](PurchaseOrder.md#fromjsonstring)
- [getType](PurchaseOrder.md#gettype)
- [toBinary](PurchaseOrder.md#tobinary)
- [toJSON](PurchaseOrder.md#tojson)
- [toJson](PurchaseOrder.md#tojson-1)
- [toJsonString](PurchaseOrder.md#tojsonstring)
- [equals](PurchaseOrder.md#equals-1)
- [fromBinary](PurchaseOrder.md#frombinary-1)
- [fromJson](PurchaseOrder.md#fromjson-1)
- [fromJsonString](PurchaseOrder.md#fromjsonstring-1)

## Constructors

### constructor

• **new PurchaseOrder**(`data?`): [`PurchaseOrder`](PurchaseOrder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`PurchaseOrder`](PurchaseOrder.md)\> |

#### Returns

[`PurchaseOrder`](PurchaseOrder.md)

#### Overrides

Message\&lt;PurchaseOrder\&gt;.constructor

#### Defined in

[src/purchases_orders.scailo_pb.ts:1149](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_orders.scailo_pb.ts#L1149)

## Properties

### amendmentCount

• **amendmentCount**: `bigint` = `protoInt64.zero`

**`Description`**

The number of times that this record has been amended after approval.

**`Example`**

```ts
5
```

**`Generated`**

from field: uint64 amendment_count = 22;

#### Defined in

[src/purchases_orders.scailo_pb.ts:1125](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_orders.scailo_pb.ts#L1125)

___

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

**`Description`**

Detailed approval workflow state (Approver ID, Role, and Timestamps).

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/purchases_orders.scailo_pb.ts:989](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_orders.scailo_pb.ts#L989)

___

### buyerLocationId

• **buyerLocationId**: `bigint` = `protoInt64.zero`

The location ID of the buyer

**`Generated`**

from field: uint64 buyer_location_id = 13;

#### Defined in

[src/purchases_orders.scailo_pb.ts:1059](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_orders.scailo_pb.ts#L1059)

___

### completedOn

• **completedOn**: `bigint` = `protoInt64.zero`

**`Description`**

UNIX timestamp of when the record transitioned to the COMPLETED state.

**`Example`**

```ts
1698400000
```

**`Generated`**

from field: uint64 completed_on = 6;

#### Defined in

[src/purchases_orders.scailo_pb.ts:1015](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_orders.scailo_pb.ts#L1015)

___

### consigneeLocationId

• **consigneeLocationId**: `bigint` = `protoInt64.zero`

The location ID of the consignee

**`Generated`**

from field: uint64 consignee_location_id = 12;

#### Defined in

[src/purchases_orders.scailo_pb.ts:1052](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_orders.scailo_pb.ts#L1052)

___

### currencyId

• **currencyId**: `bigint` = `protoInt64.zero`

The associated ID of the currency

**`Generated`**

from field: uint64 currency_id = 15;

#### Defined in

[src/purchases_orders.scailo_pb.ts:1073](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_orders.scailo_pb.ts#L1073)

___

### entityUuid

• **entityUuid**: `string` = `""`

**`Description`**

The organization's globally unique identifier.

**`Example`**

```ts
"550e8400-e29b-41d4-a716-446655440000"
```

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/purchases_orders.scailo_pb.ts:973](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_orders.scailo_pb.ts#L973)

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

**`Description`**

The system-generated immutable reference number.

**`Example`**

```ts
"ABS-2023-X9Z2"
```

**`Generated`**

from field: string final_ref_number = 11;

#### Defined in

[src/purchases_orders.scailo_pb.ts:1045](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_orders.scailo_pb.ts#L1045)

___

### formData

• **formData**: [`FormFieldDatum`](FormFieldDatum.md)[] = `[]`

**`Description`**

Collection of organization-specific dynamic data.

**`Generated`**

from field: repeated Scailo.FormFieldDatum form_data = 50;

#### Defined in

[src/purchases_orders.scailo_pb.ts:1147](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_orders.scailo_pb.ts#L1147)

___

### list

• **list**: [`PurchaseOrderItem`](PurchaseOrderItem.md)[] = `[]`

The list of associated purchase order items

**`Generated`**

from field: repeated Scailo.PurchaseOrderItem list = 40;

#### Defined in

[src/purchases_orders.scailo_pb.ts:1139](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_orders.scailo_pb.ts#L1139)

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

**`Description`**

Comprehensive audit trail of every operation performed on this record.

**`Generated`**

from field: repeated Scailo.LogbookLogConciseSLC logs = 5;

#### Defined in

[src/purchases_orders.scailo_pb.ts:1005](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_orders.scailo_pb.ts#L1005)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

**`Description`**

Standard employee and record metadata including timestamps.

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/purchases_orders.scailo_pb.ts:981](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_orders.scailo_pb.ts#L981)

___

### miscellaneousCost

• **miscellaneousCost**: `bigint` = `protoInt64.zero`

Any miscellaneous cost

**`Generated`**

from field: uint64 miscellaneous_cost = 17;

#### Defined in

[src/purchases_orders.scailo_pb.ts:1087](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_orders.scailo_pb.ts#L1087)

___

### overallDiscount

• **overallDiscount**: `bigint` = `protoInt64.zero`

The optional discount amount

**`Generated`**

from field: uint64 overall_discount = 18;

#### Defined in

[src/purchases_orders.scailo_pb.ts:1094](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_orders.scailo_pb.ts#L1094)

___

### paymentAdvance

• **paymentAdvance**: `bigint` = `protoInt64.zero`

The amount paid in advance

**`Generated`**

from field: uint64 payment_advance = 20;

#### Defined in

[src/purchases_orders.scailo_pb.ts:1108](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_orders.scailo_pb.ts#L1108)

___

### paymentCycleInDays

• **paymentCycleInDays**: `bigint` = `protoInt64.zero`

The payment cycle in days

**`Generated`**

from field: uint64 payment_cycle_in_days = 21;

#### Defined in

[src/purchases_orders.scailo_pb.ts:1115](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_orders.scailo_pb.ts#L1115)

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The optional associated ID of the project

**`Generated`**

from field: uint64 project_id = 16;

#### Defined in

[src/purchases_orders.scailo_pb.ts:1080](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_orders.scailo_pb.ts#L1080)

___

### referenceId

• **referenceId**: `string` = `""`

**`Description`**

The user-provided reference ID.

**`Example`**

```ts
"ABS-2023-001"
```

**`Generated`**

from field: string reference_id = 10;

#### Defined in

[src/purchases_orders.scailo_pb.ts:1035](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_orders.scailo_pb.ts#L1035)

___

### roundOff

• **roundOff**: `bigint` = `protoInt64.zero`

The applicable round off amount (optional, and can be positive or negative)

**`Generated`**

from field: int64 round_off = 19;

#### Defined in

[src/purchases_orders.scailo_pb.ts:1101](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_orders.scailo_pb.ts#L1101)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

**`Description`**

The current lifecycle status (e.g., DRAFT, VERIFIED, STANDING).

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

[src/purchases_orders.scailo_pb.ts:997](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_orders.scailo_pb.ts#L997)

___

### totalValue

• **totalValue**: `number` = `0`

Stores the total value of the purchase order (as a double, which requires no adjustments)

**`Generated`**

from field: double total_value = 30;

#### Defined in

[src/purchases_orders.scailo_pb.ts:1132](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_orders.scailo_pb.ts#L1132)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

**`Description`**

Link to the document storage folder.

**`Example`**

```ts
15234
```

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

[src/purchases_orders.scailo_pb.ts:1025](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_orders.scailo_pb.ts#L1025)

___

### vendorId

• **vendorId**: `bigint` = `protoInt64.zero`

The ID of the vendor

**`Generated`**

from field: uint64 vendor_id = 14;

#### Defined in

[src/purchases_orders.scailo_pb.ts:1066](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_orders.scailo_pb.ts#L1066)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/purchases_orders.scailo_pb.ts:1156](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_orders.scailo_pb.ts#L1156)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/purchases_orders.scailo_pb.ts:1154](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_orders.scailo_pb.ts#L1154)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.PurchaseOrder"``

#### Defined in

[src/purchases_orders.scailo_pb.ts:1155](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_orders.scailo_pb.ts#L1155)

## Methods

### clone

▸ **clone**(): [`PurchaseOrder`](PurchaseOrder.md)

Create a deep copy.

#### Returns

[`PurchaseOrder`](PurchaseOrder.md)

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
| `other` | `undefined` \| ``null`` \| [`PurchaseOrder`](PurchaseOrder.md) \| `PlainMessage`\<[`PurchaseOrder`](PurchaseOrder.md)\> |

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

▸ **getType**(): `MessageType`\<[`PurchaseOrder`](PurchaseOrder.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`PurchaseOrder`](PurchaseOrder.md)\>

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
| `a` | `undefined` \| [`PurchaseOrder`](PurchaseOrder.md) \| `PlainMessage`\<[`PurchaseOrder`](PurchaseOrder.md)\> |
| `b` | `undefined` \| [`PurchaseOrder`](PurchaseOrder.md) \| `PlainMessage`\<[`PurchaseOrder`](PurchaseOrder.md)\> |

#### Returns

`boolean`

#### Defined in

[src/purchases_orders.scailo_pb.ts:1194](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_orders.scailo_pb.ts#L1194)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PurchaseOrder`](PurchaseOrder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`PurchaseOrder`](PurchaseOrder.md)

#### Defined in

[src/purchases_orders.scailo_pb.ts:1182](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_orders.scailo_pb.ts#L1182)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PurchaseOrder`](PurchaseOrder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchaseOrder`](PurchaseOrder.md)

#### Defined in

[src/purchases_orders.scailo_pb.ts:1186](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_orders.scailo_pb.ts#L1186)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PurchaseOrder`](PurchaseOrder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchaseOrder`](PurchaseOrder.md)

#### Defined in

[src/purchases_orders.scailo_pb.ts:1190](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_orders.scailo_pb.ts#L1190)
