[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / EquationsFamiliesList

# Class: EquationsFamiliesList

Describes the message consisting of the list of equations families

**`Generated`**

from message Scailo.EquationsFamiliesList

## Hierarchy

- `Message`\<[`EquationsFamiliesList`](EquationsFamiliesList.md)\>

  ↳ **`EquationsFamiliesList`**

## Table of contents

### Constructors

- [constructor](EquationsFamiliesList.md#constructor)

### Properties

- [list](EquationsFamiliesList.md#list)
- [fields](EquationsFamiliesList.md#fields)
- [runtime](EquationsFamiliesList.md#runtime)
- [typeName](EquationsFamiliesList.md#typename)

### Methods

- [clone](EquationsFamiliesList.md#clone)
- [equals](EquationsFamiliesList.md#equals)
- [fromBinary](EquationsFamiliesList.md#frombinary)
- [fromJson](EquationsFamiliesList.md#fromjson)
- [fromJsonString](EquationsFamiliesList.md#fromjsonstring)
- [getType](EquationsFamiliesList.md#gettype)
- [toBinary](EquationsFamiliesList.md#tobinary)
- [toJSON](EquationsFamiliesList.md#tojson)
- [toJson](EquationsFamiliesList.md#tojson-1)
- [toJsonString](EquationsFamiliesList.md#tojsonstring)
- [equals](EquationsFamiliesList.md#equals-1)
- [fromBinary](EquationsFamiliesList.md#frombinary-1)
- [fromJson](EquationsFamiliesList.md#fromjson-1)
- [fromJsonString](EquationsFamiliesList.md#fromjsonstring-1)

## Constructors

### constructor

• **new EquationsFamiliesList**(`data?`): [`EquationsFamiliesList`](EquationsFamiliesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`EquationsFamiliesList`](EquationsFamiliesList.md)\> |

#### Returns

[`EquationsFamiliesList`](EquationsFamiliesList.md)

#### Overrides

Message\&lt;EquationsFamiliesList\&gt;.constructor

#### Defined in

src/equations_families.scailo_pb.ts:789

## Properties

### list

• **list**: [`EquationFamily`](EquationFamily.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.EquationFamily list = 1;

#### Defined in

src/equations_families.scailo_pb.ts:787

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/equations_families.scailo_pb.ts:796

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/equations_families.scailo_pb.ts:794

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.EquationsFamiliesList"``

#### Defined in

src/equations_families.scailo_pb.ts:795

## Methods

### clone

▸ **clone**(): [`EquationsFamiliesList`](EquationsFamiliesList.md)

Create a deep copy.

#### Returns

[`EquationsFamiliesList`](EquationsFamiliesList.md)

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
| `other` | `undefined` \| ``null`` \| [`EquationsFamiliesList`](EquationsFamiliesList.md) \| `PlainMessage`\<[`EquationsFamiliesList`](EquationsFamiliesList.md)\> |

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

▸ **getType**(): `MessageType`\<[`EquationsFamiliesList`](EquationsFamiliesList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`EquationsFamiliesList`](EquationsFamiliesList.md)\>

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
| `a` | `undefined` \| [`EquationsFamiliesList`](EquationsFamiliesList.md) \| `PlainMessage`\<[`EquationsFamiliesList`](EquationsFamiliesList.md)\> |
| `b` | `undefined` \| [`EquationsFamiliesList`](EquationsFamiliesList.md) \| `PlainMessage`\<[`EquationsFamiliesList`](EquationsFamiliesList.md)\> |

#### Returns

`boolean`

#### Defined in

src/equations_families.scailo_pb.ts:812

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`EquationsFamiliesList`](EquationsFamiliesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`EquationsFamiliesList`](EquationsFamiliesList.md)

#### Defined in

src/equations_families.scailo_pb.ts:800

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`EquationsFamiliesList`](EquationsFamiliesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EquationsFamiliesList`](EquationsFamiliesList.md)

#### Defined in

src/equations_families.scailo_pb.ts:804

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`EquationsFamiliesList`](EquationsFamiliesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EquationsFamiliesList`](EquationsFamiliesList.md)

#### Defined in

src/equations_families.scailo_pb.ts:808
