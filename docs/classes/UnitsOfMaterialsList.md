[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / UnitsOfMaterialsList

# Class: UnitsOfMaterialsList

Describes the message consisting of the list of records

**`Generated`**

from message Scailo.UnitsOfMaterialsList

## Hierarchy

- `Message`\<[`UnitsOfMaterialsList`](UnitsOfMaterialsList.md)\>

  ↳ **`UnitsOfMaterialsList`**

## Table of contents

### Constructors

- [constructor](UnitsOfMaterialsList.md#constructor)

### Properties

- [list](UnitsOfMaterialsList.md#list)
- [fields](UnitsOfMaterialsList.md#fields)
- [runtime](UnitsOfMaterialsList.md#runtime)
- [typeName](UnitsOfMaterialsList.md#typename)

### Methods

- [clone](UnitsOfMaterialsList.md#clone)
- [equals](UnitsOfMaterialsList.md#equals)
- [fromBinary](UnitsOfMaterialsList.md#frombinary)
- [fromJson](UnitsOfMaterialsList.md#fromjson)
- [fromJsonString](UnitsOfMaterialsList.md#fromjsonstring)
- [getType](UnitsOfMaterialsList.md#gettype)
- [toBinary](UnitsOfMaterialsList.md#tobinary)
- [toJSON](UnitsOfMaterialsList.md#tojson)
- [toJson](UnitsOfMaterialsList.md#tojson-1)
- [toJsonString](UnitsOfMaterialsList.md#tojsonstring)
- [equals](UnitsOfMaterialsList.md#equals-1)
- [fromBinary](UnitsOfMaterialsList.md#frombinary-1)
- [fromJson](UnitsOfMaterialsList.md#fromjson-1)
- [fromJsonString](UnitsOfMaterialsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new UnitsOfMaterialsList**(`data?`): [`UnitsOfMaterialsList`](UnitsOfMaterialsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`UnitsOfMaterialsList`](UnitsOfMaterialsList.md)\> |

#### Returns

[`UnitsOfMaterialsList`](UnitsOfMaterialsList.md)

#### Overrides

Message\&lt;UnitsOfMaterialsList\&gt;.constructor

#### Defined in

[src/units_of_materials.scailo_pb.ts:353](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/units_of_materials.scailo_pb.ts#L353)

## Properties

### list

• **list**: [`UnitOfMaterial`](UnitOfMaterial.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.UnitOfMaterial list = 1;

#### Defined in

[src/units_of_materials.scailo_pb.ts:351](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/units_of_materials.scailo_pb.ts#L351)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/units_of_materials.scailo_pb.ts:360](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/units_of_materials.scailo_pb.ts#L360)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/units_of_materials.scailo_pb.ts:358](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/units_of_materials.scailo_pb.ts#L358)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.UnitsOfMaterialsList"``

#### Defined in

[src/units_of_materials.scailo_pb.ts:359](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/units_of_materials.scailo_pb.ts#L359)

## Methods

### clone

▸ **clone**(): [`UnitsOfMaterialsList`](UnitsOfMaterialsList.md)

Create a deep copy.

#### Returns

[`UnitsOfMaterialsList`](UnitsOfMaterialsList.md)

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
| `other` | `undefined` \| ``null`` \| [`UnitsOfMaterialsList`](UnitsOfMaterialsList.md) \| `PlainMessage`\<[`UnitsOfMaterialsList`](UnitsOfMaterialsList.md)\> |

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

▸ **getType**(): `MessageType`\<[`UnitsOfMaterialsList`](UnitsOfMaterialsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`UnitsOfMaterialsList`](UnitsOfMaterialsList.md)\>

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
| `a` | `undefined` \| [`UnitsOfMaterialsList`](UnitsOfMaterialsList.md) \| `PlainMessage`\<[`UnitsOfMaterialsList`](UnitsOfMaterialsList.md)\> |
| `b` | `undefined` \| [`UnitsOfMaterialsList`](UnitsOfMaterialsList.md) \| `PlainMessage`\<[`UnitsOfMaterialsList`](UnitsOfMaterialsList.md)\> |

#### Returns

`boolean`

#### Defined in

[src/units_of_materials.scailo_pb.ts:376](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/units_of_materials.scailo_pb.ts#L376)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`UnitsOfMaterialsList`](UnitsOfMaterialsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`UnitsOfMaterialsList`](UnitsOfMaterialsList.md)

#### Defined in

[src/units_of_materials.scailo_pb.ts:364](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/units_of_materials.scailo_pb.ts#L364)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`UnitsOfMaterialsList`](UnitsOfMaterialsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`UnitsOfMaterialsList`](UnitsOfMaterialsList.md)

#### Defined in

[src/units_of_materials.scailo_pb.ts:368](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/units_of_materials.scailo_pb.ts#L368)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`UnitsOfMaterialsList`](UnitsOfMaterialsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`UnitsOfMaterialsList`](UnitsOfMaterialsList.md)

#### Defined in

[src/units_of_materials.scailo_pb.ts:372](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/units_of_materials.scailo_pb.ts#L372)
