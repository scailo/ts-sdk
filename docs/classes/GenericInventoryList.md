[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / GenericInventoryList

# Class: GenericInventoryList

Describes the message consisting of the list of generic inventory

**`Generated`**

from message Scailo.GenericInventoryList

## Hierarchy

- `Message`\<[`GenericInventoryList`](GenericInventoryList.md)\>

  ↳ **`GenericInventoryList`**

## Table of contents

### Constructors

- [constructor](GenericInventoryList.md#constructor)

### Properties

- [list](GenericInventoryList.md#list)
- [fields](GenericInventoryList.md#fields)
- [runtime](GenericInventoryList.md#runtime)
- [typeName](GenericInventoryList.md#typename)

### Methods

- [clone](GenericInventoryList.md#clone)
- [equals](GenericInventoryList.md#equals)
- [fromBinary](GenericInventoryList.md#frombinary)
- [fromJson](GenericInventoryList.md#fromjson)
- [fromJsonString](GenericInventoryList.md#fromjsonstring)
- [getType](GenericInventoryList.md#gettype)
- [toBinary](GenericInventoryList.md#tobinary)
- [toJSON](GenericInventoryList.md#tojson)
- [toJson](GenericInventoryList.md#tojson-1)
- [toJsonString](GenericInventoryList.md#tojsonstring)
- [equals](GenericInventoryList.md#equals-1)
- [fromBinary](GenericInventoryList.md#frombinary-1)
- [fromJson](GenericInventoryList.md#fromjson-1)
- [fromJsonString](GenericInventoryList.md#fromjsonstring-1)

## Constructors

### constructor

• **new GenericInventoryList**(`data?`): [`GenericInventoryList`](GenericInventoryList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`GenericInventoryList`](GenericInventoryList.md)\> |

#### Returns

[`GenericInventoryList`](GenericInventoryList.md)

#### Overrides

Message\&lt;GenericInventoryList\&gt;.constructor

#### Defined in

src/inventory.scailo_pb.ts:358

## Properties

### list

• **list**: [`GenericInventory`](GenericInventory.md)[] = `[]`

List of generic inventory

**`Generated`**

from field: repeated Scailo.GenericInventory list = 1;

#### Defined in

src/inventory.scailo_pb.ts:356

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/inventory.scailo_pb.ts:365

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/inventory.scailo_pb.ts:363

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.GenericInventoryList"``

#### Defined in

src/inventory.scailo_pb.ts:364

## Methods

### clone

▸ **clone**(): [`GenericInventoryList`](GenericInventoryList.md)

Create a deep copy.

#### Returns

[`GenericInventoryList`](GenericInventoryList.md)

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
| `other` | `undefined` \| ``null`` \| [`GenericInventoryList`](GenericInventoryList.md) \| `PlainMessage`\<[`GenericInventoryList`](GenericInventoryList.md)\> |

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

▸ **getType**(): `MessageType`\<[`GenericInventoryList`](GenericInventoryList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`GenericInventoryList`](GenericInventoryList.md)\>

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
| `a` | `undefined` \| [`GenericInventoryList`](GenericInventoryList.md) \| `PlainMessage`\<[`GenericInventoryList`](GenericInventoryList.md)\> |
| `b` | `undefined` \| [`GenericInventoryList`](GenericInventoryList.md) \| `PlainMessage`\<[`GenericInventoryList`](GenericInventoryList.md)\> |

#### Returns

`boolean`

#### Defined in

src/inventory.scailo_pb.ts:381

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`GenericInventoryList`](GenericInventoryList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`GenericInventoryList`](GenericInventoryList.md)

#### Defined in

src/inventory.scailo_pb.ts:369

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`GenericInventoryList`](GenericInventoryList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GenericInventoryList`](GenericInventoryList.md)

#### Defined in

src/inventory.scailo_pb.ts:373

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`GenericInventoryList`](GenericInventoryList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GenericInventoryList`](GenericInventoryList.md)

#### Defined in

src/inventory.scailo_pb.ts:377
