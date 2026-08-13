[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / WorkOrderItem

# Class: WorkOrderItem

Describes the parameters that constitute an item associated to a work order

**`Generated`**

from message Scailo.WorkOrderItem

## Hierarchy

- `Message`\<[`WorkOrderItem`](WorkOrderItem.md)\>

  ↳ **`WorkOrderItem`**

## Table of contents

### Constructors

- [constructor](WorkOrderItem.md#constructor)

### Properties

- [approvalMetadata](WorkOrderItem.md#approvalmetadata)
- [deliveryDate](WorkOrderItem.md#deliverydate)
- [entityUuid](WorkOrderItem.md#entityuuid)
- [familyId](WorkOrderItem.md#familyid)
- [metadata](WorkOrderItem.md#metadata)
- [needApproval](WorkOrderItem.md#needapproval)
- [quantity](WorkOrderItem.md#quantity)
- [userComment](WorkOrderItem.md#usercomment)
- [workOrderId](WorkOrderItem.md#workorderid)
- [fields](WorkOrderItem.md#fields)
- [runtime](WorkOrderItem.md#runtime)
- [typeName](WorkOrderItem.md#typename)

### Methods

- [clone](WorkOrderItem.md#clone)
- [equals](WorkOrderItem.md#equals)
- [fromBinary](WorkOrderItem.md#frombinary)
- [fromJson](WorkOrderItem.md#fromjson)
- [fromJsonString](WorkOrderItem.md#fromjsonstring)
- [getType](WorkOrderItem.md#gettype)
- [toBinary](WorkOrderItem.md#tobinary)
- [toJSON](WorkOrderItem.md#tojson)
- [toJson](WorkOrderItem.md#tojson-1)
- [toJsonString](WorkOrderItem.md#tojsonstring)
- [equals](WorkOrderItem.md#equals-1)
- [fromBinary](WorkOrderItem.md#frombinary-1)
- [fromJson](WorkOrderItem.md#fromjson-1)
- [fromJsonString](WorkOrderItem.md#fromjsonstring-1)

## Constructors

### constructor

• **new WorkOrderItem**(`data?`): [`WorkOrderItem`](WorkOrderItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`WorkOrderItem`](WorkOrderItem.md)\> |

#### Returns

[`WorkOrderItem`](WorkOrderItem.md)

#### Overrides

Message\&lt;WorkOrderItem\&gt;.constructor

#### Defined in

[src/work_orders.scailo_pb.ts:1058](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/work_orders.scailo_pb.ts#L1058)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

**`Description`**

Detailed approval workflow state (Approver ID, Role, and Timestamps).

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/work_orders.scailo_pb.ts:1009](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/work_orders.scailo_pb.ts#L1009)

___

### deliveryDate

• **deliveryDate**: `string` = `""`

The delivery date of the item

**`Generated`**

from field: string delivery_date = 13;

#### Defined in

[src/work_orders.scailo_pb.ts:1056](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/work_orders.scailo_pb.ts#L1056)

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

[src/work_orders.scailo_pb.ts:993](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/work_orders.scailo_pb.ts#L993)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 11;

#### Defined in

[src/work_orders.scailo_pb.ts:1042](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/work_orders.scailo_pb.ts#L1042)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

**`Description`**

Standard employee and record metadata including timestamps.

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/work_orders.scailo_pb.ts:1001](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/work_orders.scailo_pb.ts#L1001)

___

### needApproval

• **needApproval**: `boolean` = `false`

**`Description`**

A boolean flag indicating whether this specific record requires further administrative approval.

**`Example`**

```ts
false
```

**`Format`**

Boolean true or false.

**`Generated`**

from field: bool need_approval = 4;

#### Defined in

[src/work_orders.scailo_pb.ts:1021](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/work_orders.scailo_pb.ts#L1021)

___

### quantity

• **quantity**: `bigint` = `protoInt64.zero`

The quantity of the item

**`Generated`**

from field: uint64 quantity = 12;

#### Defined in

[src/work_orders.scailo_pb.ts:1049](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/work_orders.scailo_pb.ts#L1049)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might have added during an operation

**`Generated`**

from field: string user_comment = 5;

#### Defined in

[src/work_orders.scailo_pb.ts:1028](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/work_orders.scailo_pb.ts#L1028)

___

### workOrderId

• **workOrderId**: `bigint` = `protoInt64.zero`

Stores the work order ID

**`Generated`**

from field: uint64 work_order_id = 10;

#### Defined in

[src/work_orders.scailo_pb.ts:1035](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/work_orders.scailo_pb.ts#L1035)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/work_orders.scailo_pb.ts:1065](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/work_orders.scailo_pb.ts#L1065)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/work_orders.scailo_pb.ts:1063](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/work_orders.scailo_pb.ts#L1063)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.WorkOrderItem"``

#### Defined in

[src/work_orders.scailo_pb.ts:1064](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/work_orders.scailo_pb.ts#L1064)

## Methods

### clone

▸ **clone**(): [`WorkOrderItem`](WorkOrderItem.md)

Create a deep copy.

#### Returns

[`WorkOrderItem`](WorkOrderItem.md)

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
| `other` | `undefined` \| ``null`` \| [`WorkOrderItem`](WorkOrderItem.md) \| `PlainMessage`\<[`WorkOrderItem`](WorkOrderItem.md)\> |

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

▸ **getType**(): `MessageType`\<[`WorkOrderItem`](WorkOrderItem.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`WorkOrderItem`](WorkOrderItem.md)\>

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
| `a` | `undefined` \| [`WorkOrderItem`](WorkOrderItem.md) \| `PlainMessage`\<[`WorkOrderItem`](WorkOrderItem.md)\> |
| `b` | `undefined` \| [`WorkOrderItem`](WorkOrderItem.md) \| `PlainMessage`\<[`WorkOrderItem`](WorkOrderItem.md)\> |

#### Returns

`boolean`

#### Defined in

[src/work_orders.scailo_pb.ts:1089](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/work_orders.scailo_pb.ts#L1089)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`WorkOrderItem`](WorkOrderItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`WorkOrderItem`](WorkOrderItem.md)

#### Defined in

[src/work_orders.scailo_pb.ts:1077](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/work_orders.scailo_pb.ts#L1077)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`WorkOrderItem`](WorkOrderItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`WorkOrderItem`](WorkOrderItem.md)

#### Defined in

[src/work_orders.scailo_pb.ts:1081](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/work_orders.scailo_pb.ts#L1081)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`WorkOrderItem`](WorkOrderItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`WorkOrderItem`](WorkOrderItem.md)

#### Defined in

[src/work_orders.scailo_pb.ts:1085](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/work_orders.scailo_pb.ts#L1085)
