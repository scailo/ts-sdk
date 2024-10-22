[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / InventoryInteractionsList

# Class: InventoryInteractionsList

Describes the list of inventory interactions

**`Generated`**

from message Scailo.InventoryInteractionsList

## Hierarchy

- `Message`\<[`InventoryInteractionsList`](InventoryInteractionsList.md)\>

  ↳ **`InventoryInteractionsList`**

## Table of contents

### Constructors

- [constructor](InventoryInteractionsList.md#constructor)

### Properties

- [list](InventoryInteractionsList.md#list)
- [fields](InventoryInteractionsList.md#fields)
- [runtime](InventoryInteractionsList.md#runtime)
- [typeName](InventoryInteractionsList.md#typename)

### Methods

- [clone](InventoryInteractionsList.md#clone)
- [equals](InventoryInteractionsList.md#equals)
- [fromBinary](InventoryInteractionsList.md#frombinary)
- [fromJson](InventoryInteractionsList.md#fromjson)
- [fromJsonString](InventoryInteractionsList.md#fromjsonstring)
- [getType](InventoryInteractionsList.md#gettype)
- [toBinary](InventoryInteractionsList.md#tobinary)
- [toJSON](InventoryInteractionsList.md#tojson)
- [toJson](InventoryInteractionsList.md#tojson-1)
- [toJsonString](InventoryInteractionsList.md#tojsonstring)
- [equals](InventoryInteractionsList.md#equals-1)
- [fromBinary](InventoryInteractionsList.md#frombinary-1)
- [fromJson](InventoryInteractionsList.md#fromjson-1)
- [fromJsonString](InventoryInteractionsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new InventoryInteractionsList**(`data?`): [`InventoryInteractionsList`](InventoryInteractionsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`InventoryInteractionsList`](InventoryInteractionsList.md)\> |

#### Returns

[`InventoryInteractionsList`](InventoryInteractionsList.md)

#### Overrides

Message\&lt;InventoryInteractionsList\&gt;.constructor

#### Defined in

src/base.scailo_pb.ts:3620

## Properties

### list

• **list**: [`InventoryInteraction`](InventoryInteraction.md)[] = `[]`

List of interactions

**`Generated`**

from field: repeated Scailo.InventoryInteraction list = 1;

#### Defined in

src/base.scailo_pb.ts:3618

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/base.scailo_pb.ts:3627

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/base.scailo_pb.ts:3625

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.InventoryInteractionsList"``

#### Defined in

src/base.scailo_pb.ts:3626

## Methods

### clone

▸ **clone**(): [`InventoryInteractionsList`](InventoryInteractionsList.md)

Create a deep copy.

#### Returns

[`InventoryInteractionsList`](InventoryInteractionsList.md)

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
| `other` | `undefined` \| ``null`` \| [`InventoryInteractionsList`](InventoryInteractionsList.md) \| `PlainMessage`\<[`InventoryInteractionsList`](InventoryInteractionsList.md)\> |

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

▸ **getType**(): `MessageType`\<[`InventoryInteractionsList`](InventoryInteractionsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`InventoryInteractionsList`](InventoryInteractionsList.md)\>

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
| `a` | `undefined` \| [`InventoryInteractionsList`](InventoryInteractionsList.md) \| `PlainMessage`\<[`InventoryInteractionsList`](InventoryInteractionsList.md)\> |
| `b` | `undefined` \| [`InventoryInteractionsList`](InventoryInteractionsList.md) \| `PlainMessage`\<[`InventoryInteractionsList`](InventoryInteractionsList.md)\> |

#### Returns

`boolean`

#### Defined in

src/base.scailo_pb.ts:3643

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`InventoryInteractionsList`](InventoryInteractionsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`InventoryInteractionsList`](InventoryInteractionsList.md)

#### Defined in

src/base.scailo_pb.ts:3631

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`InventoryInteractionsList`](InventoryInteractionsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InventoryInteractionsList`](InventoryInteractionsList.md)

#### Defined in

src/base.scailo_pb.ts:3635

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`InventoryInteractionsList`](InventoryInteractionsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InventoryInteractionsList`](InventoryInteractionsList.md)

#### Defined in

src/base.scailo_pb.ts:3639
