[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesOrder

# Class: SalesOrder

Describes the parameters that are part of a standard response

**`Generated`**

from message Scailo.SalesOrder

## Hierarchy

- `Message`\<[`SalesOrder`](SalesOrder.md)\>

  ↳ **`SalesOrder`**

## Table of contents

### Constructors

- [constructor](SalesOrder.md#constructor)

### Properties

- [amendmentCount](SalesOrder.md#amendmentcount)
- [approvalMetadata](SalesOrder.md#approvalmetadata)
- [buyerClientId](SalesOrder.md#buyerclientid)
- [completedOn](SalesOrder.md#completedon)
- [consigneeClientId](SalesOrder.md#consigneeclientid)
- [currencyId](SalesOrder.md#currencyid)
- [entityUuid](SalesOrder.md#entityuuid)
- [finalRefNumber](SalesOrder.md#finalrefnumber)
- [formData](SalesOrder.md#formdata)
- [list](SalesOrder.md#list)
- [locationId](SalesOrder.md#locationid)
- [logs](SalesOrder.md#logs)
- [metadata](SalesOrder.md#metadata)
- [miscellaneousCost](SalesOrder.md#miscellaneouscost)
- [overallDiscount](SalesOrder.md#overalldiscount)
- [paymentAdvance](SalesOrder.md#paymentadvance)
- [paymentCycleInDays](SalesOrder.md#paymentcycleindays)
- [projectId](SalesOrder.md#projectid)
- [referenceId](SalesOrder.md#referenceid)
- [roundOff](SalesOrder.md#roundoff)
- [status](SalesOrder.md#status)
- [totalValue](SalesOrder.md#totalvalue)
- [vaultFolderId](SalesOrder.md#vaultfolderid)
- [fields](SalesOrder.md#fields)
- [runtime](SalesOrder.md#runtime)
- [typeName](SalesOrder.md#typename)

### Methods

- [clone](SalesOrder.md#clone)
- [equals](SalesOrder.md#equals)
- [fromBinary](SalesOrder.md#frombinary)
- [fromJson](SalesOrder.md#fromjson)
- [fromJsonString](SalesOrder.md#fromjsonstring)
- [getType](SalesOrder.md#gettype)
- [toBinary](SalesOrder.md#tobinary)
- [toJSON](SalesOrder.md#tojson)
- [toJson](SalesOrder.md#tojson-1)
- [toJsonString](SalesOrder.md#tojsonstring)
- [equals](SalesOrder.md#equals-1)
- [fromBinary](SalesOrder.md#frombinary-1)
- [fromJson](SalesOrder.md#fromjson-1)
- [fromJsonString](SalesOrder.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesOrder**(`data?`): [`SalesOrder`](SalesOrder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesOrder`](SalesOrder.md)\> |

#### Returns

[`SalesOrder`](SalesOrder.md)

#### Overrides

Message\&lt;SalesOrder\&gt;.constructor

#### Defined in

[src/sales_orders.scailo_pb.ts:1055](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_orders.scailo_pb.ts#L1055)

## Properties

### amendmentCount

• **amendmentCount**: `bigint` = `protoInt64.zero`

The number of times that the sales order has been amended

**`Generated`**

from field: uint64 amendment_count = 22;

#### Defined in

[src/sales_orders.scailo_pb.ts:1032](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_orders.scailo_pb.ts#L1032)

___

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

**`Description`**

Detailed approval workflow state (Approver ID, Role, and Timestamps).

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/sales_orders.scailo_pb.ts:899](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_orders.scailo_pb.ts#L899)

___

### buyerClientId

• **buyerClientId**: `bigint` = `protoInt64.zero`

The ID of the buyer (client)

**`Generated`**

from field: uint64 buyer_client_id = 13;

#### Defined in

[src/sales_orders.scailo_pb.ts:969](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_orders.scailo_pb.ts#L969)

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

[src/sales_orders.scailo_pb.ts:925](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_orders.scailo_pb.ts#L925)

___

### consigneeClientId

• **consigneeClientId**: `bigint` = `protoInt64.zero`

The ID of the consignee (client)

**`Generated`**

from field: uint64 consignee_client_id = 12;

#### Defined in

[src/sales_orders.scailo_pb.ts:962](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_orders.scailo_pb.ts#L962)

___

### currencyId

• **currencyId**: `bigint` = `protoInt64.zero`

The associated ID of the currency

**`Generated`**

from field: uint64 currency_id = 15;

#### Defined in

[src/sales_orders.scailo_pb.ts:983](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_orders.scailo_pb.ts#L983)

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

[src/sales_orders.scailo_pb.ts:883](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_orders.scailo_pb.ts#L883)

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

[src/sales_orders.scailo_pb.ts:955](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_orders.scailo_pb.ts#L955)

___

### formData

• **formData**: [`FormFieldDatum`](FormFieldDatum.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatum form_data = 50;

#### Defined in

[src/sales_orders.scailo_pb.ts:1053](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_orders.scailo_pb.ts#L1053)

___

### list

• **list**: [`SalesOrderItem`](SalesOrderItem.md)[] = `[]`

The list of associated sales order items

**`Generated`**

from field: repeated Scailo.SalesOrderItem list = 40;

#### Defined in

[src/sales_orders.scailo_pb.ts:1046](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_orders.scailo_pb.ts#L1046)

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The ID of the location

**`Generated`**

from field: uint64 location_id = 14;

#### Defined in

[src/sales_orders.scailo_pb.ts:976](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_orders.scailo_pb.ts#L976)

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

**`Description`**

Comprehensive audit trail of every operation performed on this record.

**`Generated`**

from field: repeated Scailo.LogbookLogConciseSLC logs = 5;

#### Defined in

[src/sales_orders.scailo_pb.ts:915](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_orders.scailo_pb.ts#L915)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

**`Description`**

Standard employee and record metadata including timestamps.

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/sales_orders.scailo_pb.ts:891](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_orders.scailo_pb.ts#L891)

___

### miscellaneousCost

• **miscellaneousCost**: `bigint` = `protoInt64.zero`

Any miscellaneous cost

**`Generated`**

from field: uint64 miscellaneous_cost = 17;

#### Defined in

[src/sales_orders.scailo_pb.ts:997](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_orders.scailo_pb.ts#L997)

___

### overallDiscount

• **overallDiscount**: `bigint` = `protoInt64.zero`

The optional discount amount

**`Generated`**

from field: uint64 overall_discount = 18;

#### Defined in

[src/sales_orders.scailo_pb.ts:1004](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_orders.scailo_pb.ts#L1004)

___

### paymentAdvance

• **paymentAdvance**: `bigint` = `protoInt64.zero`

The amount paid in advance

**`Generated`**

from field: uint64 payment_advance = 20;

#### Defined in

[src/sales_orders.scailo_pb.ts:1018](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_orders.scailo_pb.ts#L1018)

___

### paymentCycleInDays

• **paymentCycleInDays**: `bigint` = `protoInt64.zero`

The payment cycle in days

**`Generated`**

from field: uint64 payment_cycle_in_days = 21;

#### Defined in

[src/sales_orders.scailo_pb.ts:1025](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_orders.scailo_pb.ts#L1025)

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The optional associated ID of the project

**`Generated`**

from field: uint64 project_id = 16;

#### Defined in

[src/sales_orders.scailo_pb.ts:990](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_orders.scailo_pb.ts#L990)

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

[src/sales_orders.scailo_pb.ts:945](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_orders.scailo_pb.ts#L945)

___

### roundOff

• **roundOff**: `bigint` = `protoInt64.zero`

The applicable round off amount (optional, and can be positive or negative)

**`Generated`**

from field: int64 round_off = 19;

#### Defined in

[src/sales_orders.scailo_pb.ts:1011](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_orders.scailo_pb.ts#L1011)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

**`Description`**

The current lifecycle status (e.g., DRAFT, VERIFIED, STANDING).

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

[src/sales_orders.scailo_pb.ts:907](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_orders.scailo_pb.ts#L907)

___

### totalValue

• **totalValue**: `number` = `0`

Stores the total value of the sales order (as a double, which requires no adjustments)

**`Generated`**

from field: double total_value = 30;

#### Defined in

[src/sales_orders.scailo_pb.ts:1039](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_orders.scailo_pb.ts#L1039)

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

[src/sales_orders.scailo_pb.ts:935](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_orders.scailo_pb.ts#L935)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_orders.scailo_pb.ts:1062](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_orders.scailo_pb.ts#L1062)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_orders.scailo_pb.ts:1060](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_orders.scailo_pb.ts#L1060)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesOrder"``

#### Defined in

[src/sales_orders.scailo_pb.ts:1061](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_orders.scailo_pb.ts#L1061)

## Methods

### clone

▸ **clone**(): [`SalesOrder`](SalesOrder.md)

Create a deep copy.

#### Returns

[`SalesOrder`](SalesOrder.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesOrder`](SalesOrder.md) \| `PlainMessage`\<[`SalesOrder`](SalesOrder.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesOrder`](SalesOrder.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesOrder`](SalesOrder.md)\>

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
| `a` | `undefined` \| [`SalesOrder`](SalesOrder.md) \| `PlainMessage`\<[`SalesOrder`](SalesOrder.md)\> |
| `b` | `undefined` \| [`SalesOrder`](SalesOrder.md) \| `PlainMessage`\<[`SalesOrder`](SalesOrder.md)\> |

#### Returns

`boolean`

#### Defined in

[src/sales_orders.scailo_pb.ts:1100](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_orders.scailo_pb.ts#L1100)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesOrder`](SalesOrder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesOrder`](SalesOrder.md)

#### Defined in

[src/sales_orders.scailo_pb.ts:1088](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_orders.scailo_pb.ts#L1088)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesOrder`](SalesOrder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesOrder`](SalesOrder.md)

#### Defined in

[src/sales_orders.scailo_pb.ts:1092](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_orders.scailo_pb.ts#L1092)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesOrder`](SalesOrder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesOrder`](SalesOrder.md)

#### Defined in

[src/sales_orders.scailo_pb.ts:1096](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_orders.scailo_pb.ts#L1096)
