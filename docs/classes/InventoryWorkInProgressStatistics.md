[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / InventoryWorkInProgressStatistics

# Class: InventoryWorkInProgressStatistics

Describes the message consisting of the work in progress inventory statistics for the given family ID

**`Generated`**

from message Scailo.InventoryWorkInProgressStatistics

## Hierarchy

- `Message`\<[`InventoryWorkInProgressStatistics`](InventoryWorkInProgressStatistics.md)\>

  ↳ **`InventoryWorkInProgressStatistics`**

## Table of contents

### Constructors

- [constructor](InventoryWorkInProgressStatistics.md#constructor)

### Properties

- [inventoryItems](InventoryWorkInProgressStatistics.md#inventoryitems)
- [productionPlans](InventoryWorkInProgressStatistics.md#productionplans)
- [fields](InventoryWorkInProgressStatistics.md#fields)
- [runtime](InventoryWorkInProgressStatistics.md#runtime)
- [typeName](InventoryWorkInProgressStatistics.md#typename)

### Methods

- [clone](InventoryWorkInProgressStatistics.md#clone)
- [equals](InventoryWorkInProgressStatistics.md#equals)
- [fromBinary](InventoryWorkInProgressStatistics.md#frombinary)
- [fromJson](InventoryWorkInProgressStatistics.md#fromjson)
- [fromJsonString](InventoryWorkInProgressStatistics.md#fromjsonstring)
- [getType](InventoryWorkInProgressStatistics.md#gettype)
- [toBinary](InventoryWorkInProgressStatistics.md#tobinary)
- [toJSON](InventoryWorkInProgressStatistics.md#tojson)
- [toJson](InventoryWorkInProgressStatistics.md#tojson-1)
- [toJsonString](InventoryWorkInProgressStatistics.md#tojsonstring)
- [equals](InventoryWorkInProgressStatistics.md#equals-1)
- [fromBinary](InventoryWorkInProgressStatistics.md#frombinary-1)
- [fromJson](InventoryWorkInProgressStatistics.md#fromjson-1)
- [fromJsonString](InventoryWorkInProgressStatistics.md#fromjsonstring-1)

## Constructors

### constructor

• **new InventoryWorkInProgressStatistics**(`data?`): [`InventoryWorkInProgressStatistics`](InventoryWorkInProgressStatistics.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`InventoryWorkInProgressStatistics`](InventoryWorkInProgressStatistics.md)\> |

#### Returns

[`InventoryWorkInProgressStatistics`](InventoryWorkInProgressStatistics.md)

#### Overrides

Message\&lt;InventoryWorkInProgressStatistics\&gt;.constructor

#### Defined in

src/inventory.scailo_pb.ts:1850

## Properties

### inventoryItems

• **inventoryItems**: [`AbridgedInventoryItem`](AbridgedInventoryItem.md)[] = `[]`

List of abridged inventory items

**`Generated`**

from field: repeated Scailo.AbridgedInventoryItem inventory_items = 20;

#### Defined in

src/inventory.scailo_pb.ts:1848

___

### productionPlans

• **productionPlans**: [`AbridgedProductionPlanItem`](AbridgedProductionPlanItem.md)[] = `[]`

List of abridged production plan items

**`Generated`**

from field: repeated Scailo.AbridgedProductionPlanItem production_plans = 10;

#### Defined in

src/inventory.scailo_pb.ts:1841

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/inventory.scailo_pb.ts:1857

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/inventory.scailo_pb.ts:1855

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.InventoryWorkInProgressStatistics"``

#### Defined in

src/inventory.scailo_pb.ts:1856

## Methods

### clone

▸ **clone**(): [`InventoryWorkInProgressStatistics`](InventoryWorkInProgressStatistics.md)

Create a deep copy.

#### Returns

[`InventoryWorkInProgressStatistics`](InventoryWorkInProgressStatistics.md)

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
| `other` | `undefined` \| ``null`` \| [`InventoryWorkInProgressStatistics`](InventoryWorkInProgressStatistics.md) \| `PlainMessage`\<[`InventoryWorkInProgressStatistics`](InventoryWorkInProgressStatistics.md)\> |

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

▸ **getType**(): `MessageType`\<[`InventoryWorkInProgressStatistics`](InventoryWorkInProgressStatistics.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`InventoryWorkInProgressStatistics`](InventoryWorkInProgressStatistics.md)\>

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
| `a` | `undefined` \| [`InventoryWorkInProgressStatistics`](InventoryWorkInProgressStatistics.md) \| `PlainMessage`\<[`InventoryWorkInProgressStatistics`](InventoryWorkInProgressStatistics.md)\> |
| `b` | `undefined` \| [`InventoryWorkInProgressStatistics`](InventoryWorkInProgressStatistics.md) \| `PlainMessage`\<[`InventoryWorkInProgressStatistics`](InventoryWorkInProgressStatistics.md)\> |

#### Returns

`boolean`

#### Defined in

src/inventory.scailo_pb.ts:1874

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`InventoryWorkInProgressStatistics`](InventoryWorkInProgressStatistics.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`InventoryWorkInProgressStatistics`](InventoryWorkInProgressStatistics.md)

#### Defined in

src/inventory.scailo_pb.ts:1862

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`InventoryWorkInProgressStatistics`](InventoryWorkInProgressStatistics.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InventoryWorkInProgressStatistics`](InventoryWorkInProgressStatistics.md)

#### Defined in

src/inventory.scailo_pb.ts:1866

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`InventoryWorkInProgressStatistics`](InventoryWorkInProgressStatistics.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InventoryWorkInProgressStatistics`](InventoryWorkInProgressStatistics.md)

#### Defined in

src/inventory.scailo_pb.ts:1870
