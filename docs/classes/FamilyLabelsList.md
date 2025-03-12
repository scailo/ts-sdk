[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / FamilyLabelsList

# Class: FamilyLabelsList

Describes the message consisting of the list of family labels

**`Generated`**

from message Scailo.FamilyLabelsList

## Hierarchy

- `Message`\<[`FamilyLabelsList`](FamilyLabelsList.md)\>

  ↳ **`FamilyLabelsList`**

## Table of contents

### Constructors

- [constructor](FamilyLabelsList.md#constructor)

### Properties

- [list](FamilyLabelsList.md#list)
- [fields](FamilyLabelsList.md#fields)
- [runtime](FamilyLabelsList.md#runtime)
- [typeName](FamilyLabelsList.md#typename)

### Methods

- [clone](FamilyLabelsList.md#clone)
- [equals](FamilyLabelsList.md#equals)
- [fromBinary](FamilyLabelsList.md#frombinary)
- [fromJson](FamilyLabelsList.md#fromjson)
- [fromJsonString](FamilyLabelsList.md#fromjsonstring)
- [getType](FamilyLabelsList.md#gettype)
- [toBinary](FamilyLabelsList.md#tobinary)
- [toJSON](FamilyLabelsList.md#tojson)
- [toJson](FamilyLabelsList.md#tojson-1)
- [toJsonString](FamilyLabelsList.md#tojsonstring)
- [equals](FamilyLabelsList.md#equals-1)
- [fromBinary](FamilyLabelsList.md#frombinary-1)
- [fromJson](FamilyLabelsList.md#fromjson-1)
- [fromJsonString](FamilyLabelsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new FamilyLabelsList**(`data?`): [`FamilyLabelsList`](FamilyLabelsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`FamilyLabelsList`](FamilyLabelsList.md)\> |

#### Returns

[`FamilyLabelsList`](FamilyLabelsList.md)

#### Overrides

Message\&lt;FamilyLabelsList\&gt;.constructor

#### Defined in

src/families.scailo_pb.ts:1987

## Properties

### list

• **list**: [`FamilyLabel`](FamilyLabel.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.FamilyLabel list = 1;

#### Defined in

src/families.scailo_pb.ts:1985

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/families.scailo_pb.ts:1994

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/families.scailo_pb.ts:1992

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.FamilyLabelsList"``

#### Defined in

src/families.scailo_pb.ts:1993

## Methods

### clone

▸ **clone**(): [`FamilyLabelsList`](FamilyLabelsList.md)

Create a deep copy.

#### Returns

[`FamilyLabelsList`](FamilyLabelsList.md)

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
| `other` | `undefined` \| ``null`` \| [`FamilyLabelsList`](FamilyLabelsList.md) \| `PlainMessage`\<[`FamilyLabelsList`](FamilyLabelsList.md)\> |

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

▸ **getType**(): `MessageType`\<[`FamilyLabelsList`](FamilyLabelsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`FamilyLabelsList`](FamilyLabelsList.md)\>

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
| `a` | `undefined` \| [`FamilyLabelsList`](FamilyLabelsList.md) \| `PlainMessage`\<[`FamilyLabelsList`](FamilyLabelsList.md)\> |
| `b` | `undefined` \| [`FamilyLabelsList`](FamilyLabelsList.md) \| `PlainMessage`\<[`FamilyLabelsList`](FamilyLabelsList.md)\> |

#### Returns

`boolean`

#### Defined in

src/families.scailo_pb.ts:2010

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`FamilyLabelsList`](FamilyLabelsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`FamilyLabelsList`](FamilyLabelsList.md)

#### Defined in

src/families.scailo_pb.ts:1998

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`FamilyLabelsList`](FamilyLabelsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`FamilyLabelsList`](FamilyLabelsList.md)

#### Defined in

src/families.scailo_pb.ts:2002

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`FamilyLabelsList`](FamilyLabelsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`FamilyLabelsList`](FamilyLabelsList.md)

#### Defined in

src/families.scailo_pb.ts:2006
