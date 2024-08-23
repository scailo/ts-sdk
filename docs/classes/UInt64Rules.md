[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / UInt64Rules

# Class: UInt64Rules

UInt64Rules describes the constraints applied to `uint64` values

**`Generated`**

from message genesis_validate.UInt64Rules

## Hierarchy

- `Message`\<[`UInt64Rules`](UInt64Rules.md)\>

  ↳ **`UInt64Rules`**

## Table of contents

### Constructors

- [constructor](UInt64Rules.md#constructor)

### Properties

- [const](UInt64Rules.md#const)
- [gt](UInt64Rules.md#gt)
- [gte](UInt64Rules.md#gte)
- [ignoreEmpty](UInt64Rules.md#ignoreempty)
- [in](UInt64Rules.md#in)
- [lt](UInt64Rules.md#lt)
- [lte](UInt64Rules.md#lte)
- [notIn](UInt64Rules.md#notin)
- [fields](UInt64Rules.md#fields)
- [runtime](UInt64Rules.md#runtime)
- [typeName](UInt64Rules.md#typename)

### Methods

- [clone](UInt64Rules.md#clone)
- [equals](UInt64Rules.md#equals)
- [fromBinary](UInt64Rules.md#frombinary)
- [fromJson](UInt64Rules.md#fromjson)
- [fromJsonString](UInt64Rules.md#fromjsonstring)
- [getType](UInt64Rules.md#gettype)
- [toBinary](UInt64Rules.md#tobinary)
- [toJSON](UInt64Rules.md#tojson)
- [toJson](UInt64Rules.md#tojson-1)
- [toJsonString](UInt64Rules.md#tojsonstring)
- [equals](UInt64Rules.md#equals-1)
- [fromBinary](UInt64Rules.md#frombinary-1)
- [fromJson](UInt64Rules.md#fromjson-1)
- [fromJsonString](UInt64Rules.md#fromjsonstring-1)

## Constructors

### constructor

• **new UInt64Rules**(`data?`): [`UInt64Rules`](UInt64Rules.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`UInt64Rules`](UInt64Rules.md)\> |

#### Returns

[`UInt64Rules`](UInt64Rules.md)

#### Overrides

Message\&lt;UInt64Rules\&gt;.constructor

#### Defined in

src/genesis.validate.scailo_pb.ts:842

## Properties

### const

• `Optional` **const**: `bigint`

Const specifies that this field must be exactly the specified value

**`Generated`**

from field: optional uint64 const = 1;

#### Defined in

src/genesis.validate.scailo_pb.ts:782

___

### gt

• `Optional` **gt**: `bigint`

Gt specifies that this field must be greater than the specified value,
exclusive. If the value of Gt is larger than a specified Lt or Lte, the
range is reversed.

**`Generated`**

from field: optional uint64 gt = 4;

#### Defined in

src/genesis.validate.scailo_pb.ts:807

___

### gte

• `Optional` **gte**: `bigint`

Gte specifies that this field must be greater than or equal to the
specified value, inclusive. If the value of Gte is larger than a
specified Lt or Lte, the range is reversed.

**`Generated`**

from field: optional uint64 gte = 5;

#### Defined in

src/genesis.validate.scailo_pb.ts:816

___

### ignoreEmpty

• `Optional` **ignoreEmpty**: `boolean`

IgnoreEmpty specifies that the validation rules of this field should be
evaluated only if the field is not empty

**`Generated`**

from field: optional bool ignore_empty = 8;

#### Defined in

src/genesis.validate.scailo_pb.ts:840

___

### in

• **in**: `bigint`[] = `[]`

In specifies that this field must be equal to one of the specified
values

**`Generated`**

from field: repeated uint64 in = 6;

#### Defined in

src/genesis.validate.scailo_pb.ts:824

___

### lt

• `Optional` **lt**: `bigint`

Lt specifies that this field must be less than the specified value,
exclusive

**`Generated`**

from field: optional uint64 lt = 2;

#### Defined in

src/genesis.validate.scailo_pb.ts:790

___

### lte

• `Optional` **lte**: `bigint`

Lte specifies that this field must be less than or equal to the
specified value, inclusive

**`Generated`**

from field: optional uint64 lte = 3;

#### Defined in

src/genesis.validate.scailo_pb.ts:798

___

### notIn

• **notIn**: `bigint`[] = `[]`

NotIn specifies that this field cannot be equal to one of the specified
values

**`Generated`**

from field: repeated uint64 not_in = 7;

#### Defined in

src/genesis.validate.scailo_pb.ts:832

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/genesis.validate.scailo_pb.ts:849

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto2`

#### Defined in

src/genesis.validate.scailo_pb.ts:847

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"genesis_validate.UInt64Rules"``

#### Defined in

src/genesis.validate.scailo_pb.ts:848

## Methods

### clone

▸ **clone**(): [`UInt64Rules`](UInt64Rules.md)

Create a deep copy.

#### Returns

[`UInt64Rules`](UInt64Rules.md)

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
| `other` | `undefined` \| ``null`` \| [`UInt64Rules`](UInt64Rules.md) \| `PlainMessage`\<[`UInt64Rules`](UInt64Rules.md)\> |

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

▸ **getType**(): `MessageType`\<[`UInt64Rules`](UInt64Rules.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`UInt64Rules`](UInt64Rules.md)\>

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
| `a` | `undefined` \| [`UInt64Rules`](UInt64Rules.md) \| `PlainMessage`\<[`UInt64Rules`](UInt64Rules.md)\> |
| `b` | `undefined` \| [`UInt64Rules`](UInt64Rules.md) \| `PlainMessage`\<[`UInt64Rules`](UInt64Rules.md)\> |

#### Returns

`boolean`

#### Defined in

src/genesis.validate.scailo_pb.ts:872

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`UInt64Rules`](UInt64Rules.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`UInt64Rules`](UInt64Rules.md)

#### Defined in

src/genesis.validate.scailo_pb.ts:860

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`UInt64Rules`](UInt64Rules.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`UInt64Rules`](UInt64Rules.md)

#### Defined in

src/genesis.validate.scailo_pb.ts:864

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`UInt64Rules`](UInt64Rules.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`UInt64Rules`](UInt64Rules.md)

#### Defined in

src/genesis.validate.scailo_pb.ts:868
