[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / BoolRules

# Class: BoolRules

BoolRules describes the constraints applied to `bool` values

**`Generated`**

from message genesis_validate.BoolRules

## Hierarchy

- `Message`\<[`BoolRules`](BoolRules.md)\>

  ↳ **`BoolRules`**

## Table of contents

### Constructors

- [constructor](BoolRules.md#constructor)

### Properties

- [const](BoolRules.md#const)
- [fields](BoolRules.md#fields)
- [runtime](BoolRules.md#runtime)
- [typeName](BoolRules.md#typename)

### Methods

- [clone](BoolRules.md#clone)
- [equals](BoolRules.md#equals)
- [fromBinary](BoolRules.md#frombinary)
- [fromJson](BoolRules.md#fromjson)
- [fromJsonString](BoolRules.md#fromjsonstring)
- [getType](BoolRules.md#gettype)
- [toBinary](BoolRules.md#tobinary)
- [toJSON](BoolRules.md#tojson)
- [toJson](BoolRules.md#tojson-1)
- [toJsonString](BoolRules.md#tojsonstring)
- [equals](BoolRules.md#equals-1)
- [fromBinary](BoolRules.md#frombinary-1)
- [fromJson](BoolRules.md#fromjson-1)
- [fromJsonString](BoolRules.md#fromjsonstring-1)

## Constructors

### constructor

• **new BoolRules**(`data?`): [`BoolRules`](BoolRules.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`BoolRules`](BoolRules.md)\> |

#### Returns

[`BoolRules`](BoolRules.md)

#### Overrides

Message\&lt;BoolRules\&gt;.constructor

#### Defined in

src/genesis.validate.scailo_pb.ts:1526

## Properties

### const

• `Optional` **const**: `boolean`

Const specifies that this field must be exactly the specified value

**`Generated`**

from field: optional bool const = 1;

#### Defined in

src/genesis.validate.scailo_pb.ts:1524

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/genesis.validate.scailo_pb.ts:1533

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto2`

#### Defined in

src/genesis.validate.scailo_pb.ts:1531

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"genesis_validate.BoolRules"``

#### Defined in

src/genesis.validate.scailo_pb.ts:1532

## Methods

### clone

▸ **clone**(): [`BoolRules`](BoolRules.md)

Create a deep copy.

#### Returns

[`BoolRules`](BoolRules.md)

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
| `other` | `undefined` \| ``null`` \| [`BoolRules`](BoolRules.md) \| `PlainMessage`\<[`BoolRules`](BoolRules.md)\> |

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

▸ **getType**(): `MessageType`\<[`BoolRules`](BoolRules.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`BoolRules`](BoolRules.md)\>

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
| `a` | `undefined` \| [`BoolRules`](BoolRules.md) \| `PlainMessage`\<[`BoolRules`](BoolRules.md)\> |
| `b` | `undefined` \| [`BoolRules`](BoolRules.md) \| `PlainMessage`\<[`BoolRules`](BoolRules.md)\> |

#### Returns

`boolean`

#### Defined in

src/genesis.validate.scailo_pb.ts:1549

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`BoolRules`](BoolRules.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`BoolRules`](BoolRules.md)

#### Defined in

src/genesis.validate.scailo_pb.ts:1537

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`BoolRules`](BoolRules.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`BoolRules`](BoolRules.md)

#### Defined in

src/genesis.validate.scailo_pb.ts:1541

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`BoolRules`](BoolRules.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`BoolRules`](BoolRules.md)

#### Defined in

src/genesis.validate.scailo_pb.ts:1545
