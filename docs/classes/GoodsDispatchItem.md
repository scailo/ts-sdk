[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / GoodsDispatchItem

# Class: GoodsDispatchItem

Represents a complete Goods Dispatch Item entity within the system.
This message encapsulates the comprehensive state of a single physical family line being fulfilled
and shipped to a buyer. It includes the exact inventory traceability (via the item hash), mapped
logistical quantities across both internal and client units of measure, and associated approval metadata.

**Note:** This payload is utilized in read operations to provide downstream systems (like billing or Warehouse Management System)
with the exact logistical state of an individual dispatched item for physical inventory deduction and
accurate invoice generation.

**`Generated`**

from message Scailo.GoodsDispatchItem

## Hierarchy

- `Message`\<[`GoodsDispatchItem`](GoodsDispatchItem.md)\>

  ↳ **`GoodsDispatchItem`**

## Table of contents

### Constructors

- [constructor](GoodsDispatchItem.md#constructor)

### Properties

- [approvalMetadata](GoodsDispatchItem.md#approvalmetadata)
- [clientFamilyCode](GoodsDispatchItem.md#clientfamilycode)
- [clientQuantity](GoodsDispatchItem.md#clientquantity)
- [clientUomId](GoodsDispatchItem.md#clientuomid)
- [entityUuid](GoodsDispatchItem.md#entityuuid)
- [familyId](GoodsDispatchItem.md#familyid)
- [goodsDispatchId](GoodsDispatchItem.md#goodsdispatchid)
- [internalQuantity](GoodsDispatchItem.md#internalquantity)
- [itemHash](GoodsDispatchItem.md#itemhash)
- [metadata](GoodsDispatchItem.md#metadata)
- [needApproval](GoodsDispatchItem.md#needapproval)
- [userComment](GoodsDispatchItem.md#usercomment)
- [fields](GoodsDispatchItem.md#fields)
- [runtime](GoodsDispatchItem.md#runtime)
- [typeName](GoodsDispatchItem.md#typename)

### Methods

- [clone](GoodsDispatchItem.md#clone)
- [equals](GoodsDispatchItem.md#equals)
- [fromBinary](GoodsDispatchItem.md#frombinary)
- [fromJson](GoodsDispatchItem.md#fromjson)
- [fromJsonString](GoodsDispatchItem.md#fromjsonstring)
- [getType](GoodsDispatchItem.md#gettype)
- [toBinary](GoodsDispatchItem.md#tobinary)
- [toJSON](GoodsDispatchItem.md#tojson)
- [toJson](GoodsDispatchItem.md#tojson-1)
- [toJsonString](GoodsDispatchItem.md#tojsonstring)
- [equals](GoodsDispatchItem.md#equals-1)
- [fromBinary](GoodsDispatchItem.md#frombinary-1)
- [fromJson](GoodsDispatchItem.md#fromjson-1)
- [fromJsonString](GoodsDispatchItem.md#fromjsonstring-1)

## Constructors

### constructor

• **new GoodsDispatchItem**(`data?`): [`GoodsDispatchItem`](GoodsDispatchItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`GoodsDispatchItem`](GoodsDispatchItem.md)\> |

#### Returns

[`GoodsDispatchItem`](GoodsDispatchItem.md)

#### Overrides

Message\&lt;GoodsDispatchItem\&gt;.constructor

#### Defined in

[src/goods_dispatches.scailo_pb.ts:1634](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/goods_dispatches.scailo_pb.ts#L1634)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

**`Description`**

Detailed approval workflow state (Approver ID, Role, and Timestamps).

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:1540](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/goods_dispatches.scailo_pb.ts#L1540)

___

### clientFamilyCode

• **clientFamilyCode**: `string` = `""`

**`Description`**

The client's specific alphanumeric part number, SKU, or family code used for their internal receiving and logistics referencing.

**`Example`**

```ts
"CLI-SKU-992"
```

**`Generated`**

from field: string client_family_code = 16;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:1632](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/goods_dispatches.scailo_pb.ts#L1632)

___

### clientQuantity

• **clientQuantity**: `bigint` = `protoInt64.zero`

**`Description`**

The physical quantity being dispatched, represented in the client's specific unit of measure. Stored in subunits to maintain fractional precision.

**`Example`**

```ts
5000
```

**`Generated`**

from field: uint64 client_quantity = 15;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:1622](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/goods_dispatches.scailo_pb.ts#L1622)

___

### clientUomId

• **clientUomId**: `bigint` = `protoInt64.zero`

**`Description`**

The unique internal identifier of the Unit of Measure (UOM) requested by the client for this dispatched item.

**`Example`**

```ts
12
```

**`Generated`**

from field: uint64 client_uom_id = 14;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:1612](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/goods_dispatches.scailo_pb.ts#L1612)

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

[src/goods_dispatches.scailo_pb.ts:1524](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/goods_dispatches.scailo_pb.ts#L1524)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

**`Description`**

The unique internal identifier of the family or catalog item being physically picked and dispatched.

**`Example`**

```ts
505
```

**`Generated`**

from field: uint64 family_id = 11;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:1582](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/goods_dispatches.scailo_pb.ts#L1582)

___

### goodsDispatchId

• **goodsDispatchId**: `bigint` = `protoInt64.zero`

**`Description`**

The unique internal identifier of the parent goods dispatch document to which this logistical line item will be attached.

**`Example`**

```ts
1024
```

**`Generated`**

from field: uint64 goods_dispatch_id = 10;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:1572](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/goods_dispatches.scailo_pb.ts#L1572)

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

**`Description`**

The physical quantity being dispatched, represented in the system's internal base unit of measure. Stored in subunits to maintain fractional precision.

**`Example`**

```ts
10000
```

**`Generated`**

from field: uint64 internal_quantity = 13;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:1602](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/goods_dispatches.scailo_pb.ts#L1602)

___

### itemHash

• **itemHash**: `string` = `""`

**`Description`**

The cryptographic hash representing the exact inventory instance, batch, or serial pool being dispatched. This guarantees strict traceability of physical goods leaving the facility.

**`Example`**

```ts
"a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6a7b8c9d0e1f2a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6a7b8c9d0e1f2"
```

**`Generated`**

from field: string item_hash = 12;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:1592](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/goods_dispatches.scailo_pb.ts#L1592)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

**`Description`**

Standard employee and record metadata including timestamps.

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:1532](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/goods_dispatches.scailo_pb.ts#L1532)

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

[src/goods_dispatches.scailo_pb.ts:1552](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/goods_dispatches.scailo_pb.ts#L1552)

___

### userComment

• **userComment**: `string` = `""`

**`Description`**

Audit log comment or justification captured during the last modification or transactional operation.

**`Example`**

```ts
"This is a comment for audit purposes."
```

**`Generated`**

from field: string user_comment = 5;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:1562](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/goods_dispatches.scailo_pb.ts#L1562)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/goods_dispatches.scailo_pb.ts:1641](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/goods_dispatches.scailo_pb.ts#L1641)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/goods_dispatches.scailo_pb.ts:1639](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/goods_dispatches.scailo_pb.ts#L1639)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.GoodsDispatchItem"``

#### Defined in

[src/goods_dispatches.scailo_pb.ts:1640](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/goods_dispatches.scailo_pb.ts#L1640)

## Methods

### clone

▸ **clone**(): [`GoodsDispatchItem`](GoodsDispatchItem.md)

Create a deep copy.

#### Returns

[`GoodsDispatchItem`](GoodsDispatchItem.md)

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
| `other` | `undefined` \| ``null`` \| [`GoodsDispatchItem`](GoodsDispatchItem.md) \| `PlainMessage`\<[`GoodsDispatchItem`](GoodsDispatchItem.md)\> |

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

▸ **getType**(): `MessageType`\<[`GoodsDispatchItem`](GoodsDispatchItem.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`GoodsDispatchItem`](GoodsDispatchItem.md)\>

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
| `a` | `undefined` \| [`GoodsDispatchItem`](GoodsDispatchItem.md) \| `PlainMessage`\<[`GoodsDispatchItem`](GoodsDispatchItem.md)\> |
| `b` | `undefined` \| [`GoodsDispatchItem`](GoodsDispatchItem.md) \| `PlainMessage`\<[`GoodsDispatchItem`](GoodsDispatchItem.md)\> |

#### Returns

`boolean`

#### Defined in

[src/goods_dispatches.scailo_pb.ts:1668](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/goods_dispatches.scailo_pb.ts#L1668)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`GoodsDispatchItem`](GoodsDispatchItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`GoodsDispatchItem`](GoodsDispatchItem.md)

#### Defined in

[src/goods_dispatches.scailo_pb.ts:1656](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/goods_dispatches.scailo_pb.ts#L1656)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`GoodsDispatchItem`](GoodsDispatchItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GoodsDispatchItem`](GoodsDispatchItem.md)

#### Defined in

[src/goods_dispatches.scailo_pb.ts:1660](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/goods_dispatches.scailo_pb.ts#L1660)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`GoodsDispatchItem`](GoodsDispatchItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GoodsDispatchItem`](GoodsDispatchItem.md)

#### Defined in

[src/goods_dispatches.scailo_pb.ts:1664](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/goods_dispatches.scailo_pb.ts#L1664)
