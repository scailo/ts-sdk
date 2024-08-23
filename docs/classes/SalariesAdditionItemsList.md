[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / SalariesAdditionItemsList

# Class: SalariesAdditionItemsList

Describes the message consisting of the list of salary addition items

**`Generated`**

from message Scailo.SalariesAdditionItemsList

## Hierarchy

- `Message`\<[`SalariesAdditionItemsList`](SalariesAdditionItemsList.md)\>

  ↳ **`SalariesAdditionItemsList`**

## Table of contents

### Constructors

- [constructor](SalariesAdditionItemsList.md#constructor)

### Properties

- [list](SalariesAdditionItemsList.md#list)
- [fields](SalariesAdditionItemsList.md#fields)
- [runtime](SalariesAdditionItemsList.md#runtime)
- [typeName](SalariesAdditionItemsList.md#typename)

### Methods

- [clone](SalariesAdditionItemsList.md#clone)
- [equals](SalariesAdditionItemsList.md#equals)
- [fromBinary](SalariesAdditionItemsList.md#frombinary)
- [fromJson](SalariesAdditionItemsList.md#fromjson)
- [fromJsonString](SalariesAdditionItemsList.md#fromjsonstring)
- [getType](SalariesAdditionItemsList.md#gettype)
- [toBinary](SalariesAdditionItemsList.md#tobinary)
- [toJSON](SalariesAdditionItemsList.md#tojson)
- [toJson](SalariesAdditionItemsList.md#tojson-1)
- [toJsonString](SalariesAdditionItemsList.md#tojsonstring)
- [equals](SalariesAdditionItemsList.md#equals-1)
- [fromBinary](SalariesAdditionItemsList.md#frombinary-1)
- [fromJson](SalariesAdditionItemsList.md#fromjson-1)
- [fromJsonString](SalariesAdditionItemsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalariesAdditionItemsList**(`data?`): [`SalariesAdditionItemsList`](SalariesAdditionItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalariesAdditionItemsList`](SalariesAdditionItemsList.md)\> |

#### Returns

[`SalariesAdditionItemsList`](SalariesAdditionItemsList.md)

#### Overrides

Message\&lt;SalariesAdditionItemsList\&gt;.constructor

#### Defined in

src/salaries.scailo_pb.ts:1132

## Properties

### list

• **list**: [`SalaryAdditionItem`](SalaryAdditionItem.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.SalaryAdditionItem list = 1;

#### Defined in

src/salaries.scailo_pb.ts:1130

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/salaries.scailo_pb.ts:1139

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/salaries.scailo_pb.ts:1137

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalariesAdditionItemsList"``

#### Defined in

src/salaries.scailo_pb.ts:1138

## Methods

### clone

▸ **clone**(): [`SalariesAdditionItemsList`](SalariesAdditionItemsList.md)

Create a deep copy.

#### Returns

[`SalariesAdditionItemsList`](SalariesAdditionItemsList.md)

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
| `other` | `undefined` \| ``null`` \| [`SalariesAdditionItemsList`](SalariesAdditionItemsList.md) \| `PlainMessage`\<[`SalariesAdditionItemsList`](SalariesAdditionItemsList.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalariesAdditionItemsList`](SalariesAdditionItemsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalariesAdditionItemsList`](SalariesAdditionItemsList.md)\>

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
| `a` | `undefined` \| [`SalariesAdditionItemsList`](SalariesAdditionItemsList.md) \| `PlainMessage`\<[`SalariesAdditionItemsList`](SalariesAdditionItemsList.md)\> |
| `b` | `undefined` \| [`SalariesAdditionItemsList`](SalariesAdditionItemsList.md) \| `PlainMessage`\<[`SalariesAdditionItemsList`](SalariesAdditionItemsList.md)\> |

#### Returns

`boolean`

#### Defined in

src/salaries.scailo_pb.ts:1155

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalariesAdditionItemsList`](SalariesAdditionItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalariesAdditionItemsList`](SalariesAdditionItemsList.md)

#### Defined in

src/salaries.scailo_pb.ts:1143

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalariesAdditionItemsList`](SalariesAdditionItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalariesAdditionItemsList`](SalariesAdditionItemsList.md)

#### Defined in

src/salaries.scailo_pb.ts:1147

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalariesAdditionItemsList`](SalariesAdditionItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalariesAdditionItemsList`](SalariesAdditionItemsList.md)

#### Defined in

src/salaries.scailo_pb.ts:1151
