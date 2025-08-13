[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / AbridgedPurchaseIndentItem

# Class: AbridgedPurchaseIndentItem

Describes the abridged version of each purchase indent item

**`Generated`**

from message Scailo.AbridgedPurchaseIndentItem

## Hierarchy

- `Message`\<[`AbridgedPurchaseIndentItem`](AbridgedPurchaseIndentItem.md)\>

  ↳ **`AbridgedPurchaseIndentItem`**

## Table of contents

### Constructors

- [constructor](AbridgedPurchaseIndentItem.md#constructor)

### Properties

- [familyId](AbridgedPurchaseIndentItem.md#familyid)
- [purchaseIndentId](AbridgedPurchaseIndentItem.md#purchaseindentid)
- [quantity](AbridgedPurchaseIndentItem.md#quantity)
- [fields](AbridgedPurchaseIndentItem.md#fields)
- [runtime](AbridgedPurchaseIndentItem.md#runtime)
- [typeName](AbridgedPurchaseIndentItem.md#typename)

### Methods

- [clone](AbridgedPurchaseIndentItem.md#clone)
- [equals](AbridgedPurchaseIndentItem.md#equals)
- [fromBinary](AbridgedPurchaseIndentItem.md#frombinary)
- [fromJson](AbridgedPurchaseIndentItem.md#fromjson)
- [fromJsonString](AbridgedPurchaseIndentItem.md#fromjsonstring)
- [getType](AbridgedPurchaseIndentItem.md#gettype)
- [toBinary](AbridgedPurchaseIndentItem.md#tobinary)
- [toJSON](AbridgedPurchaseIndentItem.md#tojson)
- [toJson](AbridgedPurchaseIndentItem.md#tojson-1)
- [toJsonString](AbridgedPurchaseIndentItem.md#tojsonstring)
- [equals](AbridgedPurchaseIndentItem.md#equals-1)
- [fromBinary](AbridgedPurchaseIndentItem.md#frombinary-1)
- [fromJson](AbridgedPurchaseIndentItem.md#fromjson-1)
- [fromJsonString](AbridgedPurchaseIndentItem.md#fromjsonstring-1)

## Constructors

### constructor

• **new AbridgedPurchaseIndentItem**(`data?`): [`AbridgedPurchaseIndentItem`](AbridgedPurchaseIndentItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`AbridgedPurchaseIndentItem`](AbridgedPurchaseIndentItem.md)\> |

#### Returns

[`AbridgedPurchaseIndentItem`](AbridgedPurchaseIndentItem.md)

#### Overrides

Message\&lt;AbridgedPurchaseIndentItem\&gt;.constructor

#### Defined in

src/inventory.scailo_pb.ts:1625

## Properties

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 20;

#### Defined in

src/inventory.scailo_pb.ts:1616

___

### purchaseIndentId

• **purchaseIndentId**: `bigint` = `protoInt64.zero`

Stores the purchase indent ID

**`Generated`**

from field: uint64 purchase_indent_id = 10;

#### Defined in

src/inventory.scailo_pb.ts:1609

___

### quantity

• **quantity**: `bigint` = `protoInt64.zero`

The quantity of the item (in cents)

**`Generated`**

from field: int64 quantity = 30;

#### Defined in

src/inventory.scailo_pb.ts:1623

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/inventory.scailo_pb.ts:1632

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/inventory.scailo_pb.ts:1630

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.AbridgedPurchaseIndentItem"``

#### Defined in

src/inventory.scailo_pb.ts:1631

## Methods

### clone

▸ **clone**(): [`AbridgedPurchaseIndentItem`](AbridgedPurchaseIndentItem.md)

Create a deep copy.

#### Returns

[`AbridgedPurchaseIndentItem`](AbridgedPurchaseIndentItem.md)

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
| `other` | `undefined` \| ``null`` \| [`AbridgedPurchaseIndentItem`](AbridgedPurchaseIndentItem.md) \| `PlainMessage`\<[`AbridgedPurchaseIndentItem`](AbridgedPurchaseIndentItem.md)\> |

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

▸ **getType**(): `MessageType`\<[`AbridgedPurchaseIndentItem`](AbridgedPurchaseIndentItem.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`AbridgedPurchaseIndentItem`](AbridgedPurchaseIndentItem.md)\>

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
| `a` | `undefined` \| [`AbridgedPurchaseIndentItem`](AbridgedPurchaseIndentItem.md) \| `PlainMessage`\<[`AbridgedPurchaseIndentItem`](AbridgedPurchaseIndentItem.md)\> |
| `b` | `undefined` \| [`AbridgedPurchaseIndentItem`](AbridgedPurchaseIndentItem.md) \| `PlainMessage`\<[`AbridgedPurchaseIndentItem`](AbridgedPurchaseIndentItem.md)\> |

#### Returns

`boolean`

#### Defined in

src/inventory.scailo_pb.ts:1650

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`AbridgedPurchaseIndentItem`](AbridgedPurchaseIndentItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`AbridgedPurchaseIndentItem`](AbridgedPurchaseIndentItem.md)

#### Defined in

src/inventory.scailo_pb.ts:1638

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`AbridgedPurchaseIndentItem`](AbridgedPurchaseIndentItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AbridgedPurchaseIndentItem`](AbridgedPurchaseIndentItem.md)

#### Defined in

src/inventory.scailo_pb.ts:1642

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`AbridgedPurchaseIndentItem`](AbridgedPurchaseIndentItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AbridgedPurchaseIndentItem`](AbridgedPurchaseIndentItem.md)

#### Defined in

src/inventory.scailo_pb.ts:1646
