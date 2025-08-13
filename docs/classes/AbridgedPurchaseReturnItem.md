[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / AbridgedPurchaseReturnItem

# Class: AbridgedPurchaseReturnItem

Describes the abridged version of each purchase return item

**`Generated`**

from message Scailo.AbridgedPurchaseReturnItem

## Hierarchy

- `Message`\<[`AbridgedPurchaseReturnItem`](AbridgedPurchaseReturnItem.md)\>

  ↳ **`AbridgedPurchaseReturnItem`**

## Table of contents

### Constructors

- [constructor](AbridgedPurchaseReturnItem.md#constructor)

### Properties

- [familyId](AbridgedPurchaseReturnItem.md#familyid)
- [purchaseReturnId](AbridgedPurchaseReturnItem.md#purchasereturnid)
- [quantity](AbridgedPurchaseReturnItem.md#quantity)
- [fields](AbridgedPurchaseReturnItem.md#fields)
- [runtime](AbridgedPurchaseReturnItem.md#runtime)
- [typeName](AbridgedPurchaseReturnItem.md#typename)

### Methods

- [clone](AbridgedPurchaseReturnItem.md#clone)
- [equals](AbridgedPurchaseReturnItem.md#equals)
- [fromBinary](AbridgedPurchaseReturnItem.md#frombinary)
- [fromJson](AbridgedPurchaseReturnItem.md#fromjson)
- [fromJsonString](AbridgedPurchaseReturnItem.md#fromjsonstring)
- [getType](AbridgedPurchaseReturnItem.md#gettype)
- [toBinary](AbridgedPurchaseReturnItem.md#tobinary)
- [toJSON](AbridgedPurchaseReturnItem.md#tojson)
- [toJson](AbridgedPurchaseReturnItem.md#tojson-1)
- [toJsonString](AbridgedPurchaseReturnItem.md#tojsonstring)
- [equals](AbridgedPurchaseReturnItem.md#equals-1)
- [fromBinary](AbridgedPurchaseReturnItem.md#frombinary-1)
- [fromJson](AbridgedPurchaseReturnItem.md#fromjson-1)
- [fromJsonString](AbridgedPurchaseReturnItem.md#fromjsonstring-1)

## Constructors

### constructor

• **new AbridgedPurchaseReturnItem**(`data?`): [`AbridgedPurchaseReturnItem`](AbridgedPurchaseReturnItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`AbridgedPurchaseReturnItem`](AbridgedPurchaseReturnItem.md)\> |

#### Returns

[`AbridgedPurchaseReturnItem`](AbridgedPurchaseReturnItem.md)

#### Overrides

Message\&lt;AbridgedPurchaseReturnItem\&gt;.constructor

#### Defined in

src/inventory.scailo_pb.ts:1799

## Properties

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 20;

#### Defined in

src/inventory.scailo_pb.ts:1790

___

### purchaseReturnId

• **purchaseReturnId**: `bigint` = `protoInt64.zero`

Stores the purchase return ID

**`Generated`**

from field: uint64 purchase_return_id = 10;

#### Defined in

src/inventory.scailo_pb.ts:1783

___

### quantity

• **quantity**: `bigint` = `protoInt64.zero`

The quantity of the item (in cents)

**`Generated`**

from field: int64 quantity = 30;

#### Defined in

src/inventory.scailo_pb.ts:1797

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/inventory.scailo_pb.ts:1806

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/inventory.scailo_pb.ts:1804

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.AbridgedPurchaseReturnItem"``

#### Defined in

src/inventory.scailo_pb.ts:1805

## Methods

### clone

▸ **clone**(): [`AbridgedPurchaseReturnItem`](AbridgedPurchaseReturnItem.md)

Create a deep copy.

#### Returns

[`AbridgedPurchaseReturnItem`](AbridgedPurchaseReturnItem.md)

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
| `other` | `undefined` \| ``null`` \| [`AbridgedPurchaseReturnItem`](AbridgedPurchaseReturnItem.md) \| `PlainMessage`\<[`AbridgedPurchaseReturnItem`](AbridgedPurchaseReturnItem.md)\> |

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

▸ **getType**(): `MessageType`\<[`AbridgedPurchaseReturnItem`](AbridgedPurchaseReturnItem.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`AbridgedPurchaseReturnItem`](AbridgedPurchaseReturnItem.md)\>

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
| `a` | `undefined` \| [`AbridgedPurchaseReturnItem`](AbridgedPurchaseReturnItem.md) \| `PlainMessage`\<[`AbridgedPurchaseReturnItem`](AbridgedPurchaseReturnItem.md)\> |
| `b` | `undefined` \| [`AbridgedPurchaseReturnItem`](AbridgedPurchaseReturnItem.md) \| `PlainMessage`\<[`AbridgedPurchaseReturnItem`](AbridgedPurchaseReturnItem.md)\> |

#### Returns

`boolean`

#### Defined in

src/inventory.scailo_pb.ts:1824

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`AbridgedPurchaseReturnItem`](AbridgedPurchaseReturnItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`AbridgedPurchaseReturnItem`](AbridgedPurchaseReturnItem.md)

#### Defined in

src/inventory.scailo_pb.ts:1812

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`AbridgedPurchaseReturnItem`](AbridgedPurchaseReturnItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AbridgedPurchaseReturnItem`](AbridgedPurchaseReturnItem.md)

#### Defined in

src/inventory.scailo_pb.ts:1816

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`AbridgedPurchaseReturnItem`](AbridgedPurchaseReturnItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AbridgedPurchaseReturnItem`](AbridgedPurchaseReturnItem.md)

#### Defined in

src/inventory.scailo_pb.ts:1820
