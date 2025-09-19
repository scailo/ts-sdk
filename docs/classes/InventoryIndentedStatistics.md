[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / InventoryIndentedStatistics

# Class: InventoryIndentedStatistics

Describes the message consisting of the indented inventory statistics for the given family ID

**`Generated`**

from message Scailo.InventoryIndentedStatistics

## Hierarchy

- `Message`\<[`InventoryIndentedStatistics`](InventoryIndentedStatistics.md)\>

  ↳ **`InventoryIndentedStatistics`**

## Table of contents

### Constructors

- [constructor](InventoryIndentedStatistics.md#constructor)

### Properties

- [purchaseIndents](InventoryIndentedStatistics.md#purchaseindents)
- [purchaseOrders](InventoryIndentedStatistics.md#purchaseorders)
- [fields](InventoryIndentedStatistics.md#fields)
- [runtime](InventoryIndentedStatistics.md#runtime)
- [typeName](InventoryIndentedStatistics.md#typename)

### Methods

- [clone](InventoryIndentedStatistics.md#clone)
- [equals](InventoryIndentedStatistics.md#equals)
- [fromBinary](InventoryIndentedStatistics.md#frombinary)
- [fromJson](InventoryIndentedStatistics.md#fromjson)
- [fromJsonString](InventoryIndentedStatistics.md#fromjsonstring)
- [getType](InventoryIndentedStatistics.md#gettype)
- [toBinary](InventoryIndentedStatistics.md#tobinary)
- [toJSON](InventoryIndentedStatistics.md#tojson)
- [toJson](InventoryIndentedStatistics.md#tojson-1)
- [toJsonString](InventoryIndentedStatistics.md#tojsonstring)
- [equals](InventoryIndentedStatistics.md#equals-1)
- [fromBinary](InventoryIndentedStatistics.md#frombinary-1)
- [fromJson](InventoryIndentedStatistics.md#fromjson-1)
- [fromJsonString](InventoryIndentedStatistics.md#fromjsonstring-1)

## Constructors

### constructor

• **new InventoryIndentedStatistics**(`data?`): [`InventoryIndentedStatistics`](InventoryIndentedStatistics.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`InventoryIndentedStatistics`](InventoryIndentedStatistics.md)\> |

#### Returns

[`InventoryIndentedStatistics`](InventoryIndentedStatistics.md)

#### Overrides

Message\&lt;InventoryIndentedStatistics\&gt;.constructor

#### Defined in

[src/inventory.scailo_pb.ts:1900](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inventory.scailo_pb.ts#L1900)

## Properties

### purchaseIndents

• **purchaseIndents**: [`AbridgedPurchaseIndentItem`](AbridgedPurchaseIndentItem.md)[] = `[]`

List of abridged purchase indent items

**`Generated`**

from field: repeated Scailo.AbridgedPurchaseIndentItem purchase_indents = 10;

#### Defined in

[src/inventory.scailo_pb.ts:1891](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inventory.scailo_pb.ts#L1891)

___

### purchaseOrders

• **purchaseOrders**: [`AbridgedPurchaseOrderItem`](AbridgedPurchaseOrderItem.md)[] = `[]`

List of abridged purchase order items

**`Generated`**

from field: repeated Scailo.AbridgedPurchaseOrderItem purchase_orders = 20;

#### Defined in

[src/inventory.scailo_pb.ts:1898](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inventory.scailo_pb.ts#L1898)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/inventory.scailo_pb.ts:1907](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inventory.scailo_pb.ts#L1907)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/inventory.scailo_pb.ts:1905](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inventory.scailo_pb.ts#L1905)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.InventoryIndentedStatistics"``

#### Defined in

[src/inventory.scailo_pb.ts:1906](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inventory.scailo_pb.ts#L1906)

## Methods

### clone

▸ **clone**(): [`InventoryIndentedStatistics`](InventoryIndentedStatistics.md)

Create a deep copy.

#### Returns

[`InventoryIndentedStatistics`](InventoryIndentedStatistics.md)

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
| `other` | `undefined` \| ``null`` \| [`InventoryIndentedStatistics`](InventoryIndentedStatistics.md) \| `PlainMessage`\<[`InventoryIndentedStatistics`](InventoryIndentedStatistics.md)\> |

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

▸ **getType**(): `MessageType`\<[`InventoryIndentedStatistics`](InventoryIndentedStatistics.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`InventoryIndentedStatistics`](InventoryIndentedStatistics.md)\>

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
| `a` | `undefined` \| [`InventoryIndentedStatistics`](InventoryIndentedStatistics.md) \| `PlainMessage`\<[`InventoryIndentedStatistics`](InventoryIndentedStatistics.md)\> |
| `b` | `undefined` \| [`InventoryIndentedStatistics`](InventoryIndentedStatistics.md) \| `PlainMessage`\<[`InventoryIndentedStatistics`](InventoryIndentedStatistics.md)\> |

#### Returns

`boolean`

#### Defined in

[src/inventory.scailo_pb.ts:1924](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inventory.scailo_pb.ts#L1924)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`InventoryIndentedStatistics`](InventoryIndentedStatistics.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`InventoryIndentedStatistics`](InventoryIndentedStatistics.md)

#### Defined in

[src/inventory.scailo_pb.ts:1912](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inventory.scailo_pb.ts#L1912)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`InventoryIndentedStatistics`](InventoryIndentedStatistics.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InventoryIndentedStatistics`](InventoryIndentedStatistics.md)

#### Defined in

[src/inventory.scailo_pb.ts:1916](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inventory.scailo_pb.ts#L1916)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`InventoryIndentedStatistics`](InventoryIndentedStatistics.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InventoryIndentedStatistics`](InventoryIndentedStatistics.md)

#### Defined in

[src/inventory.scailo_pb.ts:1920](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inventory.scailo_pb.ts#L1920)
