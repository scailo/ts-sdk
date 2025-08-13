[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / AbridgedInventoryItem

# Class: AbridgedInventoryItem

Describes the abridged version of each inventory item

**`Generated`**

from message Scailo.AbridgedInventoryItem

## Hierarchy

- `Message`\<[`AbridgedInventoryItem`](AbridgedInventoryItem.md)\>

  ↳ **`AbridgedInventoryItem`**

## Table of contents

### Constructors

- [constructor](AbridgedInventoryItem.md#constructor)

### Properties

- [familyId](AbridgedInventoryItem.md#familyid)
- [hash](AbridgedInventoryItem.md#hash)
- [quantity](AbridgedInventoryItem.md#quantity)
- [fields](AbridgedInventoryItem.md#fields)
- [runtime](AbridgedInventoryItem.md#runtime)
- [typeName](AbridgedInventoryItem.md#typename)

### Methods

- [clone](AbridgedInventoryItem.md#clone)
- [equals](AbridgedInventoryItem.md#equals)
- [fromBinary](AbridgedInventoryItem.md#frombinary)
- [fromJson](AbridgedInventoryItem.md#fromjson)
- [fromJsonString](AbridgedInventoryItem.md#fromjsonstring)
- [getType](AbridgedInventoryItem.md#gettype)
- [toBinary](AbridgedInventoryItem.md#tobinary)
- [toJSON](AbridgedInventoryItem.md#tojson)
- [toJson](AbridgedInventoryItem.md#tojson-1)
- [toJsonString](AbridgedInventoryItem.md#tojsonstring)
- [equals](AbridgedInventoryItem.md#equals-1)
- [fromBinary](AbridgedInventoryItem.md#frombinary-1)
- [fromJson](AbridgedInventoryItem.md#fromjson-1)
- [fromJsonString](AbridgedInventoryItem.md#fromjsonstring-1)

## Constructors

### constructor

• **new AbridgedInventoryItem**(`data?`): [`AbridgedInventoryItem`](AbridgedInventoryItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`AbridgedInventoryItem`](AbridgedInventoryItem.md)\> |

#### Returns

[`AbridgedInventoryItem`](AbridgedInventoryItem.md)

#### Overrides

Message\&lt;AbridgedInventoryItem\&gt;.constructor

#### Defined in

src/inventory.scailo_pb.ts:1567

## Properties

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the ID of the associated family

**`Generated`**

from field: uint64 family_id = 10;

#### Defined in

src/inventory.scailo_pb.ts:1551

___

### hash

• **hash**: `string` = `""`

The computed hash of the inventory item

**`Generated`**

from field: string hash = 20;

#### Defined in

src/inventory.scailo_pb.ts:1558

___

### quantity

• **quantity**: `bigint` = `protoInt64.zero`

Stores the quantity (in cents)

**`Generated`**

from field: int64 quantity = 30;

#### Defined in

src/inventory.scailo_pb.ts:1565

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/inventory.scailo_pb.ts:1574

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/inventory.scailo_pb.ts:1572

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.AbridgedInventoryItem"``

#### Defined in

src/inventory.scailo_pb.ts:1573

## Methods

### clone

▸ **clone**(): [`AbridgedInventoryItem`](AbridgedInventoryItem.md)

Create a deep copy.

#### Returns

[`AbridgedInventoryItem`](AbridgedInventoryItem.md)

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
| `other` | `undefined` \| ``null`` \| [`AbridgedInventoryItem`](AbridgedInventoryItem.md) \| `PlainMessage`\<[`AbridgedInventoryItem`](AbridgedInventoryItem.md)\> |

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

▸ **getType**(): `MessageType`\<[`AbridgedInventoryItem`](AbridgedInventoryItem.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`AbridgedInventoryItem`](AbridgedInventoryItem.md)\>

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
| `a` | `undefined` \| [`AbridgedInventoryItem`](AbridgedInventoryItem.md) \| `PlainMessage`\<[`AbridgedInventoryItem`](AbridgedInventoryItem.md)\> |
| `b` | `undefined` \| [`AbridgedInventoryItem`](AbridgedInventoryItem.md) \| `PlainMessage`\<[`AbridgedInventoryItem`](AbridgedInventoryItem.md)\> |

#### Returns

`boolean`

#### Defined in

src/inventory.scailo_pb.ts:1592

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`AbridgedInventoryItem`](AbridgedInventoryItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`AbridgedInventoryItem`](AbridgedInventoryItem.md)

#### Defined in

src/inventory.scailo_pb.ts:1580

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`AbridgedInventoryItem`](AbridgedInventoryItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AbridgedInventoryItem`](AbridgedInventoryItem.md)

#### Defined in

src/inventory.scailo_pb.ts:1584

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`AbridgedInventoryItem`](AbridgedInventoryItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AbridgedInventoryItem`](AbridgedInventoryItem.md)

#### Defined in

src/inventory.scailo_pb.ts:1588
