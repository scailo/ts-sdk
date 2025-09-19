[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / EquationsFamiliesItemsList

# Class: EquationsFamiliesItemsList

Describes the message consisting of the list of equation family items

**`Generated`**

from message Scailo.EquationsFamiliesItemsList

## Hierarchy

- `Message`\<[`EquationsFamiliesItemsList`](EquationsFamiliesItemsList.md)\>

  ↳ **`EquationsFamiliesItemsList`**

## Table of contents

### Constructors

- [constructor](EquationsFamiliesItemsList.md#constructor)

### Properties

- [list](EquationsFamiliesItemsList.md#list)
- [fields](EquationsFamiliesItemsList.md#fields)
- [runtime](EquationsFamiliesItemsList.md#runtime)
- [typeName](EquationsFamiliesItemsList.md#typename)

### Methods

- [clone](EquationsFamiliesItemsList.md#clone)
- [equals](EquationsFamiliesItemsList.md#equals)
- [fromBinary](EquationsFamiliesItemsList.md#frombinary)
- [fromJson](EquationsFamiliesItemsList.md#fromjson)
- [fromJsonString](EquationsFamiliesItemsList.md#fromjsonstring)
- [getType](EquationsFamiliesItemsList.md#gettype)
- [toBinary](EquationsFamiliesItemsList.md#tobinary)
- [toJSON](EquationsFamiliesItemsList.md#tojson)
- [toJson](EquationsFamiliesItemsList.md#tojson-1)
- [toJsonString](EquationsFamiliesItemsList.md#tojsonstring)
- [equals](EquationsFamiliesItemsList.md#equals-1)
- [fromBinary](EquationsFamiliesItemsList.md#frombinary-1)
- [fromJson](EquationsFamiliesItemsList.md#fromjson-1)
- [fromJsonString](EquationsFamiliesItemsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new EquationsFamiliesItemsList**(`data?`): [`EquationsFamiliesItemsList`](EquationsFamiliesItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`EquationsFamiliesItemsList`](EquationsFamiliesItemsList.md)\> |

#### Returns

[`EquationsFamiliesItemsList`](EquationsFamiliesItemsList.md)

#### Overrides

Message\&lt;EquationsFamiliesItemsList\&gt;.constructor

#### Defined in

[src/equations_families.scailo_pb.ts:831](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_families.scailo_pb.ts#L831)

## Properties

### list

• **list**: [`EquationFamilyItem`](EquationFamilyItem.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.EquationFamilyItem list = 1;

#### Defined in

[src/equations_families.scailo_pb.ts:829](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_families.scailo_pb.ts#L829)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/equations_families.scailo_pb.ts:838](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_families.scailo_pb.ts#L838)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/equations_families.scailo_pb.ts:836](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_families.scailo_pb.ts#L836)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.EquationsFamiliesItemsList"``

#### Defined in

[src/equations_families.scailo_pb.ts:837](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_families.scailo_pb.ts#L837)

## Methods

### clone

▸ **clone**(): [`EquationsFamiliesItemsList`](EquationsFamiliesItemsList.md)

Create a deep copy.

#### Returns

[`EquationsFamiliesItemsList`](EquationsFamiliesItemsList.md)

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
| `other` | `undefined` \| ``null`` \| [`EquationsFamiliesItemsList`](EquationsFamiliesItemsList.md) \| `PlainMessage`\<[`EquationsFamiliesItemsList`](EquationsFamiliesItemsList.md)\> |

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

▸ **getType**(): `MessageType`\<[`EquationsFamiliesItemsList`](EquationsFamiliesItemsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`EquationsFamiliesItemsList`](EquationsFamiliesItemsList.md)\>

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
| `a` | `undefined` \| [`EquationsFamiliesItemsList`](EquationsFamiliesItemsList.md) \| `PlainMessage`\<[`EquationsFamiliesItemsList`](EquationsFamiliesItemsList.md)\> |
| `b` | `undefined` \| [`EquationsFamiliesItemsList`](EquationsFamiliesItemsList.md) \| `PlainMessage`\<[`EquationsFamiliesItemsList`](EquationsFamiliesItemsList.md)\> |

#### Returns

`boolean`

#### Defined in

[src/equations_families.scailo_pb.ts:854](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_families.scailo_pb.ts#L854)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`EquationsFamiliesItemsList`](EquationsFamiliesItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`EquationsFamiliesItemsList`](EquationsFamiliesItemsList.md)

#### Defined in

[src/equations_families.scailo_pb.ts:842](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_families.scailo_pb.ts#L842)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`EquationsFamiliesItemsList`](EquationsFamiliesItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EquationsFamiliesItemsList`](EquationsFamiliesItemsList.md)

#### Defined in

[src/equations_families.scailo_pb.ts:846](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_families.scailo_pb.ts#L846)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`EquationsFamiliesItemsList`](EquationsFamiliesItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EquationsFamiliesItemsList`](EquationsFamiliesItemsList.md)

#### Defined in

[src/equations_families.scailo_pb.ts:850](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_families.scailo_pb.ts#L850)
