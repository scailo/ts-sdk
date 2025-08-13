[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / AbridgedGoodsReceiptItem

# Class: AbridgedGoodsReceiptItem

Describes the abridged version of each goods receipt item

**`Generated`**

from message Scailo.AbridgedGoodsReceiptItem

## Hierarchy

- `Message`\<[`AbridgedGoodsReceiptItem`](AbridgedGoodsReceiptItem.md)\>

  ↳ **`AbridgedGoodsReceiptItem`**

## Table of contents

### Constructors

- [constructor](AbridgedGoodsReceiptItem.md#constructor)

### Properties

- [familyId](AbridgedGoodsReceiptItem.md#familyid)
- [goodsReceiptId](AbridgedGoodsReceiptItem.md#goodsreceiptid)
- [quantity](AbridgedGoodsReceiptItem.md#quantity)
- [fields](AbridgedGoodsReceiptItem.md#fields)
- [runtime](AbridgedGoodsReceiptItem.md#runtime)
- [typeName](AbridgedGoodsReceiptItem.md#typename)

### Methods

- [clone](AbridgedGoodsReceiptItem.md#clone)
- [equals](AbridgedGoodsReceiptItem.md#equals)
- [fromBinary](AbridgedGoodsReceiptItem.md#frombinary)
- [fromJson](AbridgedGoodsReceiptItem.md#fromjson)
- [fromJsonString](AbridgedGoodsReceiptItem.md#fromjsonstring)
- [getType](AbridgedGoodsReceiptItem.md#gettype)
- [toBinary](AbridgedGoodsReceiptItem.md#tobinary)
- [toJSON](AbridgedGoodsReceiptItem.md#tojson)
- [toJson](AbridgedGoodsReceiptItem.md#tojson-1)
- [toJsonString](AbridgedGoodsReceiptItem.md#tojsonstring)
- [equals](AbridgedGoodsReceiptItem.md#equals-1)
- [fromBinary](AbridgedGoodsReceiptItem.md#frombinary-1)
- [fromJson](AbridgedGoodsReceiptItem.md#fromjson-1)
- [fromJsonString](AbridgedGoodsReceiptItem.md#fromjsonstring-1)

## Constructors

### constructor

• **new AbridgedGoodsReceiptItem**(`data?`): [`AbridgedGoodsReceiptItem`](AbridgedGoodsReceiptItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`AbridgedGoodsReceiptItem`](AbridgedGoodsReceiptItem.md)\> |

#### Returns

[`AbridgedGoodsReceiptItem`](AbridgedGoodsReceiptItem.md)

#### Overrides

Message\&lt;AbridgedGoodsReceiptItem\&gt;.constructor

#### Defined in

src/inventory.scailo_pb.ts:1741

## Properties

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 20;

#### Defined in

src/inventory.scailo_pb.ts:1732

___

### goodsReceiptId

• **goodsReceiptId**: `bigint` = `protoInt64.zero`

Stores the goods receipt ID

**`Generated`**

from field: uint64 goods_receipt_id = 10;

#### Defined in

src/inventory.scailo_pb.ts:1725

___

### quantity

• **quantity**: `bigint` = `protoInt64.zero`

The quantity of the item (in cents)

**`Generated`**

from field: int64 quantity = 30;

#### Defined in

src/inventory.scailo_pb.ts:1739

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/inventory.scailo_pb.ts:1748

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/inventory.scailo_pb.ts:1746

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.AbridgedGoodsReceiptItem"``

#### Defined in

src/inventory.scailo_pb.ts:1747

## Methods

### clone

▸ **clone**(): [`AbridgedGoodsReceiptItem`](AbridgedGoodsReceiptItem.md)

Create a deep copy.

#### Returns

[`AbridgedGoodsReceiptItem`](AbridgedGoodsReceiptItem.md)

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
| `other` | `undefined` \| ``null`` \| [`AbridgedGoodsReceiptItem`](AbridgedGoodsReceiptItem.md) \| `PlainMessage`\<[`AbridgedGoodsReceiptItem`](AbridgedGoodsReceiptItem.md)\> |

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

▸ **getType**(): `MessageType`\<[`AbridgedGoodsReceiptItem`](AbridgedGoodsReceiptItem.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`AbridgedGoodsReceiptItem`](AbridgedGoodsReceiptItem.md)\>

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
| `a` | `undefined` \| [`AbridgedGoodsReceiptItem`](AbridgedGoodsReceiptItem.md) \| `PlainMessage`\<[`AbridgedGoodsReceiptItem`](AbridgedGoodsReceiptItem.md)\> |
| `b` | `undefined` \| [`AbridgedGoodsReceiptItem`](AbridgedGoodsReceiptItem.md) \| `PlainMessage`\<[`AbridgedGoodsReceiptItem`](AbridgedGoodsReceiptItem.md)\> |

#### Returns

`boolean`

#### Defined in

src/inventory.scailo_pb.ts:1766

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`AbridgedGoodsReceiptItem`](AbridgedGoodsReceiptItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`AbridgedGoodsReceiptItem`](AbridgedGoodsReceiptItem.md)

#### Defined in

src/inventory.scailo_pb.ts:1754

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`AbridgedGoodsReceiptItem`](AbridgedGoodsReceiptItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AbridgedGoodsReceiptItem`](AbridgedGoodsReceiptItem.md)

#### Defined in

src/inventory.scailo_pb.ts:1758

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`AbridgedGoodsReceiptItem`](AbridgedGoodsReceiptItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AbridgedGoodsReceiptItem`](AbridgedGoodsReceiptItem.md)

#### Defined in

src/inventory.scailo_pb.ts:1762
