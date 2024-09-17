[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / InventoryHashSearchReq

# Class: InventoryHashSearchReq

Describes the request to search for an inventory item using the item's hash

**`Generated`**

from message Scailo.InventoryHashSearchReq

## Hierarchy

- `Message`\<[`InventoryHashSearchReq`](InventoryHashSearchReq.md)\>

  ↳ **`InventoryHashSearchReq`**

## Table of contents

### Constructors

- [constructor](InventoryHashSearchReq.md#constructor)

### Properties

- [hash](InventoryHashSearchReq.md#hash)
- [fields](InventoryHashSearchReq.md#fields)
- [runtime](InventoryHashSearchReq.md#runtime)
- [typeName](InventoryHashSearchReq.md#typename)

### Methods

- [clone](InventoryHashSearchReq.md#clone)
- [equals](InventoryHashSearchReq.md#equals)
- [fromBinary](InventoryHashSearchReq.md#frombinary)
- [fromJson](InventoryHashSearchReq.md#fromjson)
- [fromJsonString](InventoryHashSearchReq.md#fromjsonstring)
- [getType](InventoryHashSearchReq.md#gettype)
- [toBinary](InventoryHashSearchReq.md#tobinary)
- [toJSON](InventoryHashSearchReq.md#tojson)
- [toJson](InventoryHashSearchReq.md#tojson-1)
- [toJsonString](InventoryHashSearchReq.md#tojsonstring)
- [equals](InventoryHashSearchReq.md#equals-1)
- [fromBinary](InventoryHashSearchReq.md#frombinary-1)
- [fromJson](InventoryHashSearchReq.md#fromjson-1)
- [fromJsonString](InventoryHashSearchReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new InventoryHashSearchReq**(`data?`): [`InventoryHashSearchReq`](InventoryHashSearchReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`InventoryHashSearchReq`](InventoryHashSearchReq.md)\> |

#### Returns

[`InventoryHashSearchReq`](InventoryHashSearchReq.md)

#### Overrides

Message\&lt;InventoryHashSearchReq\&gt;.constructor

#### Defined in

src/inventory.scailo_pb.ts:564

## Properties

### hash

• **hash**: `string` = `""`

The hash of the item

**`Generated`**

from field: string hash = 1;

#### Defined in

src/inventory.scailo_pb.ts:562

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/inventory.scailo_pb.ts:571

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/inventory.scailo_pb.ts:569

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.InventoryHashSearchReq"``

#### Defined in

src/inventory.scailo_pb.ts:570

## Methods

### clone

▸ **clone**(): [`InventoryHashSearchReq`](InventoryHashSearchReq.md)

Create a deep copy.

#### Returns

[`InventoryHashSearchReq`](InventoryHashSearchReq.md)

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
| `other` | `undefined` \| ``null`` \| [`InventoryHashSearchReq`](InventoryHashSearchReq.md) \| `PlainMessage`\<[`InventoryHashSearchReq`](InventoryHashSearchReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`InventoryHashSearchReq`](InventoryHashSearchReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`InventoryHashSearchReq`](InventoryHashSearchReq.md)\>

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
| `a` | `undefined` \| [`InventoryHashSearchReq`](InventoryHashSearchReq.md) \| `PlainMessage`\<[`InventoryHashSearchReq`](InventoryHashSearchReq.md)\> |
| `b` | `undefined` \| [`InventoryHashSearchReq`](InventoryHashSearchReq.md) \| `PlainMessage`\<[`InventoryHashSearchReq`](InventoryHashSearchReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/inventory.scailo_pb.ts:587

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`InventoryHashSearchReq`](InventoryHashSearchReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`InventoryHashSearchReq`](InventoryHashSearchReq.md)

#### Defined in

src/inventory.scailo_pb.ts:575

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`InventoryHashSearchReq`](InventoryHashSearchReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InventoryHashSearchReq`](InventoryHashSearchReq.md)

#### Defined in

src/inventory.scailo_pb.ts:579

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`InventoryHashSearchReq`](InventoryHashSearchReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InventoryHashSearchReq`](InventoryHashSearchReq.md)

#### Defined in

src/inventory.scailo_pb.ts:583
