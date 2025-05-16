[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / FilterReturnableInventoryForIdentifierUUID

# Class: FilterReturnableInventoryForIdentifierUUID

Describes the message that consists of parameters that are required to filter returnable inventory for a record with the given identifier

**`Generated`**

from message Scailo.FilterReturnableInventoryForIdentifierUUID

## Hierarchy

- `Message`\<[`FilterReturnableInventoryForIdentifierUUID`](FilterReturnableInventoryForIdentifierUUID.md)\>

  ↳ **`FilterReturnableInventoryForIdentifierUUID`**

## Table of contents

### Constructors

- [constructor](FilterReturnableInventoryForIdentifierUUID.md#constructor)

### Properties

- [filter](FilterReturnableInventoryForIdentifierUUID.md#filter)
- [uuid](FilterReturnableInventoryForIdentifierUUID.md#uuid)
- [fields](FilterReturnableInventoryForIdentifierUUID.md#fields)
- [runtime](FilterReturnableInventoryForIdentifierUUID.md#runtime)
- [typeName](FilterReturnableInventoryForIdentifierUUID.md#typename)

### Methods

- [clone](FilterReturnableInventoryForIdentifierUUID.md#clone)
- [equals](FilterReturnableInventoryForIdentifierUUID.md#equals)
- [fromBinary](FilterReturnableInventoryForIdentifierUUID.md#frombinary)
- [fromJson](FilterReturnableInventoryForIdentifierUUID.md#fromjson)
- [fromJsonString](FilterReturnableInventoryForIdentifierUUID.md#fromjsonstring)
- [getType](FilterReturnableInventoryForIdentifierUUID.md#gettype)
- [toBinary](FilterReturnableInventoryForIdentifierUUID.md#tobinary)
- [toJSON](FilterReturnableInventoryForIdentifierUUID.md#tojson)
- [toJson](FilterReturnableInventoryForIdentifierUUID.md#tojson-1)
- [toJsonString](FilterReturnableInventoryForIdentifierUUID.md#tojsonstring)
- [equals](FilterReturnableInventoryForIdentifierUUID.md#equals-1)
- [fromBinary](FilterReturnableInventoryForIdentifierUUID.md#frombinary-1)
- [fromJson](FilterReturnableInventoryForIdentifierUUID.md#fromjson-1)
- [fromJsonString](FilterReturnableInventoryForIdentifierUUID.md#fromjsonstring-1)

## Constructors

### constructor

• **new FilterReturnableInventoryForIdentifierUUID**(`data?`): [`FilterReturnableInventoryForIdentifierUUID`](FilterReturnableInventoryForIdentifierUUID.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`FilterReturnableInventoryForIdentifierUUID`](FilterReturnableInventoryForIdentifierUUID.md)\> |

#### Returns

[`FilterReturnableInventoryForIdentifierUUID`](FilterReturnableInventoryForIdentifierUUID.md)

#### Overrides

Message\&lt;FilterReturnableInventoryForIdentifierUUID\&gt;.constructor

#### Defined in

src/inventory.scailo_pb.ts:1167

## Properties

### filter

• `Optional` **filter**: [`FilterReturnableInventoryReq`](FilterReturnableInventoryReq.md)

The returnable inventory filter to apply

**`Generated`**

from field: Scailo.FilterReturnableInventoryReq filter = 10;

#### Defined in

src/inventory.scailo_pb.ts:1165

___

### uuid

• **uuid**: `string` = `""`

UUID of the resource

**`Generated`**

from field: string uuid = 1;

#### Defined in

src/inventory.scailo_pb.ts:1158

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/inventory.scailo_pb.ts:1174

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/inventory.scailo_pb.ts:1172

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.FilterReturnableInventoryForIdentifierUUID"``

#### Defined in

src/inventory.scailo_pb.ts:1173

## Methods

### clone

▸ **clone**(): [`FilterReturnableInventoryForIdentifierUUID`](FilterReturnableInventoryForIdentifierUUID.md)

Create a deep copy.

#### Returns

[`FilterReturnableInventoryForIdentifierUUID`](FilterReturnableInventoryForIdentifierUUID.md)

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
| `other` | `undefined` \| ``null`` \| [`FilterReturnableInventoryForIdentifierUUID`](FilterReturnableInventoryForIdentifierUUID.md) \| `PlainMessage`\<[`FilterReturnableInventoryForIdentifierUUID`](FilterReturnableInventoryForIdentifierUUID.md)\> |

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

▸ **getType**(): `MessageType`\<[`FilterReturnableInventoryForIdentifierUUID`](FilterReturnableInventoryForIdentifierUUID.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`FilterReturnableInventoryForIdentifierUUID`](FilterReturnableInventoryForIdentifierUUID.md)\>

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
| `a` | `undefined` \| [`FilterReturnableInventoryForIdentifierUUID`](FilterReturnableInventoryForIdentifierUUID.md) \| `PlainMessage`\<[`FilterReturnableInventoryForIdentifierUUID`](FilterReturnableInventoryForIdentifierUUID.md)\> |
| `b` | `undefined` \| [`FilterReturnableInventoryForIdentifierUUID`](FilterReturnableInventoryForIdentifierUUID.md) \| `PlainMessage`\<[`FilterReturnableInventoryForIdentifierUUID`](FilterReturnableInventoryForIdentifierUUID.md)\> |

#### Returns

`boolean`

#### Defined in

src/inventory.scailo_pb.ts:1191

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`FilterReturnableInventoryForIdentifierUUID`](FilterReturnableInventoryForIdentifierUUID.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`FilterReturnableInventoryForIdentifierUUID`](FilterReturnableInventoryForIdentifierUUID.md)

#### Defined in

src/inventory.scailo_pb.ts:1179

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`FilterReturnableInventoryForIdentifierUUID`](FilterReturnableInventoryForIdentifierUUID.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`FilterReturnableInventoryForIdentifierUUID`](FilterReturnableInventoryForIdentifierUUID.md)

#### Defined in

src/inventory.scailo_pb.ts:1183

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`FilterReturnableInventoryForIdentifierUUID`](FilterReturnableInventoryForIdentifierUUID.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`FilterReturnableInventoryForIdentifierUUID`](FilterReturnableInventoryForIdentifierUUID.md)

#### Defined in

src/inventory.scailo_pb.ts:1187
