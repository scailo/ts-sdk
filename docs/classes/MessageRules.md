[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / MessageRules

# Class: MessageRules

MessageRules describe the constraints applied to embedded message values.
For message-type fields, validation is performed recursively.

**`Generated`**

from message genesis_validate.MessageRules

## Hierarchy

- `Message`\<[`MessageRules`](MessageRules.md)\>

  ↳ **`MessageRules`**

## Table of contents

### Constructors

- [constructor](MessageRules.md#constructor)

### Properties

- [required](MessageRules.md#required)
- [skip](MessageRules.md#skip)
- [fields](MessageRules.md#fields)
- [runtime](MessageRules.md#runtime)
- [typeName](MessageRules.md#typename)

### Methods

- [clone](MessageRules.md#clone)
- [equals](MessageRules.md#equals)
- [fromBinary](MessageRules.md#frombinary)
- [fromJson](MessageRules.md#fromjson)
- [fromJsonString](MessageRules.md#fromjsonstring)
- [getType](MessageRules.md#gettype)
- [toBinary](MessageRules.md#tobinary)
- [toJSON](MessageRules.md#tojson)
- [toJson](MessageRules.md#tojson-1)
- [toJsonString](MessageRules.md#tojsonstring)
- [equals](MessageRules.md#equals-1)
- [fromBinary](MessageRules.md#frombinary-1)
- [fromJson](MessageRules.md#fromjson-1)
- [fromJsonString](MessageRules.md#fromjsonstring-1)

## Constructors

### constructor

• **new MessageRules**(`data?`): [`MessageRules`](MessageRules.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`MessageRules`](MessageRules.md)\> |

#### Returns

[`MessageRules`](MessageRules.md)

#### Overrides

Message\&lt;MessageRules\&gt;.constructor

#### Defined in

src/genesis.validate.scailo_pb.ts:2103

## Properties

### required

• `Optional` **required**: `boolean`

Required specifies that this field must be set

**`Generated`**

from field: optional bool required = 2;

#### Defined in

src/genesis.validate.scailo_pb.ts:2101

___

### skip

• `Optional` **skip**: `boolean`

Skip specifies that the validation rules of this field should not be
evaluated

**`Generated`**

from field: optional bool skip = 1;

#### Defined in

src/genesis.validate.scailo_pb.ts:2094

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/genesis.validate.scailo_pb.ts:2110

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto2`

#### Defined in

src/genesis.validate.scailo_pb.ts:2108

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"genesis_validate.MessageRules"``

#### Defined in

src/genesis.validate.scailo_pb.ts:2109

## Methods

### clone

▸ **clone**(): [`MessageRules`](MessageRules.md)

Create a deep copy.

#### Returns

[`MessageRules`](MessageRules.md)

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
| `other` | `undefined` \| ``null`` \| [`MessageRules`](MessageRules.md) \| `PlainMessage`\<[`MessageRules`](MessageRules.md)\> |

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

▸ **getType**(): `MessageType`\<[`MessageRules`](MessageRules.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`MessageRules`](MessageRules.md)\>

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
| `a` | `undefined` \| [`MessageRules`](MessageRules.md) \| `PlainMessage`\<[`MessageRules`](MessageRules.md)\> |
| `b` | `undefined` \| [`MessageRules`](MessageRules.md) \| `PlainMessage`\<[`MessageRules`](MessageRules.md)\> |

#### Returns

`boolean`

#### Defined in

src/genesis.validate.scailo_pb.ts:2127

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`MessageRules`](MessageRules.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`MessageRules`](MessageRules.md)

#### Defined in

src/genesis.validate.scailo_pb.ts:2115

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`MessageRules`](MessageRules.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`MessageRules`](MessageRules.md)

#### Defined in

src/genesis.validate.scailo_pb.ts:2119

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`MessageRules`](MessageRules.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`MessageRules`](MessageRules.md)

#### Defined in

src/genesis.validate.scailo_pb.ts:2123
