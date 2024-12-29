[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / Label

# Class: Label

Describes the data structure of each label on the platform

**`Generated`**

from message Scailo.Label

## Hierarchy

- `Message`\<[`Label`](Label.md)\>

  ↳ **`Label`**

## Table of contents

### Constructors

- [constructor](Label.md#constructor)

### Properties

- [code](Label.md#code)
- [description](Label.md#description)
- [entityUuid](Label.md#entityuuid)
- [metadata](Label.md#metadata)
- [name](Label.md#name)
- [fields](Label.md#fields)
- [runtime](Label.md#runtime)
- [typeName](Label.md#typename)

### Methods

- [clone](Label.md#clone)
- [equals](Label.md#equals)
- [fromBinary](Label.md#frombinary)
- [fromJson](Label.md#fromjson)
- [fromJsonString](Label.md#fromjsonstring)
- [getType](Label.md#gettype)
- [toBinary](Label.md#tobinary)
- [toJSON](Label.md#tojson)
- [toJson](Label.md#tojson-1)
- [toJsonString](Label.md#tojsonstring)
- [equals](Label.md#equals-1)
- [fromBinary](Label.md#frombinary-1)
- [fromJson](Label.md#fromjson-1)
- [fromJsonString](Label.md#fromjsonstring-1)

## Constructors

### constructor

• **new Label**(`data?`): [`Label`](Label.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`Label`](Label.md)\> |

#### Returns

[`Label`](Label.md)

#### Overrides

Message\&lt;Label\&gt;.constructor

#### Defined in

src/labels.scailo_pb.ts:103

## Properties

### code

• **code**: `string` = `""`

The unique code by which the label is classified

**`Generated`**

from field: string code = 21;

#### Defined in

src/labels.scailo_pb.ts:94

___

### description

• **description**: `string` = `""`

A short description of the label

**`Generated`**

from field: string description = 11;

#### Defined in

src/labels.scailo_pb.ts:101

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/labels.scailo_pb.ts:73

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this resource

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

src/labels.scailo_pb.ts:80

___

### name

• **name**: `string` = `""`

The name of the label

**`Generated`**

from field: string name = 10;

#### Defined in

src/labels.scailo_pb.ts:87

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/labels.scailo_pb.ts:110

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/labels.scailo_pb.ts:108

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.Label"``

#### Defined in

src/labels.scailo_pb.ts:109

## Methods

### clone

▸ **clone**(): [`Label`](Label.md)

Create a deep copy.

#### Returns

[`Label`](Label.md)

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
| `other` | `undefined` \| ``null`` \| [`Label`](Label.md) \| `PlainMessage`\<[`Label`](Label.md)\> |

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

▸ **getType**(): `MessageType`\<[`Label`](Label.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`Label`](Label.md)\>

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
| `a` | `undefined` \| [`Label`](Label.md) \| `PlainMessage`\<[`Label`](Label.md)\> |
| `b` | `undefined` \| [`Label`](Label.md) \| `PlainMessage`\<[`Label`](Label.md)\> |

#### Returns

`boolean`

#### Defined in

src/labels.scailo_pb.ts:130

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`Label`](Label.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`Label`](Label.md)

#### Defined in

src/labels.scailo_pb.ts:118

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`Label`](Label.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`Label`](Label.md)

#### Defined in

src/labels.scailo_pb.ts:122

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`Label`](Label.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`Label`](Label.md)

#### Defined in

src/labels.scailo_pb.ts:126
