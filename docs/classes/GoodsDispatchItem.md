[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / GoodsDispatchItem

# Class: GoodsDispatchItem

Describes the parameters that constitute an item associated to a goods dispatch

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

[src/goods_dispatches.scailo_pb.ts:1218](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/goods_dispatches.scailo_pb.ts#L1218)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

**`Description`**

Detailed approval workflow state (Approver ID, Role, and Timestamps).

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:1152](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/goods_dispatches.scailo_pb.ts#L1152)

___

### clientFamilyCode

• **clientFamilyCode**: `string` = `""`

Stores the family code as defined by the client

**`Generated`**

from field: string client_family_code = 16;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:1216](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/goods_dispatches.scailo_pb.ts#L1216)

___

### clientQuantity

• **clientQuantity**: `bigint` = `protoInt64.zero`

Stores the quantity (in cents) being dispatched in client's unit of material

**`Generated`**

from field: uint64 client_quantity = 15;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:1209](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/goods_dispatches.scailo_pb.ts#L1209)

___

### clientUomId

• **clientUomId**: `bigint` = `protoInt64.zero`

Stores the ID of the client's unit of material

**`Generated`**

from field: uint64 client_uom_id = 14;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:1202](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/goods_dispatches.scailo_pb.ts#L1202)

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

[src/goods_dispatches.scailo_pb.ts:1136](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/goods_dispatches.scailo_pb.ts#L1136)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 11;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:1181](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/goods_dispatches.scailo_pb.ts#L1181)

___

### goodsDispatchId

• **goodsDispatchId**: `bigint` = `protoInt64.zero`

Stores the goods dispatch ID

**`Generated`**

from field: uint64 goods_dispatch_id = 10;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:1174](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/goods_dispatches.scailo_pb.ts#L1174)

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

The quantity (in cents) being dispatched in internal unit of material

**`Generated`**

from field: uint64 internal_quantity = 13;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:1195](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/goods_dispatches.scailo_pb.ts#L1195)

___

### itemHash

• **itemHash**: `string` = `""`

Stores the item hash to be dispatched

**`Generated`**

from field: string item_hash = 12;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:1188](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/goods_dispatches.scailo_pb.ts#L1188)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

**`Description`**

Standard employee and record metadata including timestamps.

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:1144](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/goods_dispatches.scailo_pb.ts#L1144)

___

### needApproval

• **needApproval**: `boolean` = `false`

**`Description`**

The approval state of the record

**`Generated`**

from field: bool need_approval = 4;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:1160](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/goods_dispatches.scailo_pb.ts#L1160)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might have added during an operation

**`Generated`**

from field: string user_comment = 5;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:1167](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/goods_dispatches.scailo_pb.ts#L1167)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/goods_dispatches.scailo_pb.ts:1225](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/goods_dispatches.scailo_pb.ts#L1225)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/goods_dispatches.scailo_pb.ts:1223](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/goods_dispatches.scailo_pb.ts#L1223)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.GoodsDispatchItem"``

#### Defined in

[src/goods_dispatches.scailo_pb.ts:1224](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/goods_dispatches.scailo_pb.ts#L1224)

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

[src/goods_dispatches.scailo_pb.ts:1252](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/goods_dispatches.scailo_pb.ts#L1252)

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

[src/goods_dispatches.scailo_pb.ts:1240](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/goods_dispatches.scailo_pb.ts#L1240)

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

[src/goods_dispatches.scailo_pb.ts:1244](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/goods_dispatches.scailo_pb.ts#L1244)

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

[src/goods_dispatches.scailo_pb.ts:1248](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/goods_dispatches.scailo_pb.ts#L1248)
