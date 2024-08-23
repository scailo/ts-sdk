[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / FloatRules

# Class: FloatRules

FloatRules describes the constraints applied to `float` values

**`Generated`**

from message genesis_validate.FloatRules

## Hierarchy

- `Message`\<[`FloatRules`](FloatRules.md)\>

  ↳ **`FloatRules`**

## Table of contents

### Constructors

- [constructor](FloatRules.md#constructor)

### Properties

- [const](FloatRules.md#const)
- [gt](FloatRules.md#gt)
- [gte](FloatRules.md#gte)
- [ignoreEmpty](FloatRules.md#ignoreempty)
- [in](FloatRules.md#in)
- [lt](FloatRules.md#lt)
- [lte](FloatRules.md#lte)
- [notIn](FloatRules.md#notin)
- [fields](FloatRules.md#fields)
- [runtime](FloatRules.md#runtime)
- [typeName](FloatRules.md#typename)

### Methods

- [clone](FloatRules.md#clone)
- [equals](FloatRules.md#equals)
- [fromBinary](FloatRules.md#frombinary)
- [fromJson](FloatRules.md#fromjson)
- [fromJsonString](FloatRules.md#fromjsonstring)
- [getType](FloatRules.md#gettype)
- [toBinary](FloatRules.md#tobinary)
- [toJSON](FloatRules.md#tojson)
- [toJson](FloatRules.md#tojson-1)
- [toJsonString](FloatRules.md#tojsonstring)
- [equals](FloatRules.md#equals-1)
- [fromBinary](FloatRules.md#frombinary-1)
- [fromJson](FloatRules.md#fromjson-1)
- [fromJsonString](FloatRules.md#fromjsonstring-1)

## Constructors

### constructor

• **new FloatRules**(`data?`): [`FloatRules`](FloatRules.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`FloatRules`](FloatRules.md)\> |

#### Returns

[`FloatRules`](FloatRules.md)

#### Overrides

Message\&lt;FloatRules\&gt;.constructor

#### Defined in

src/genesis.validate.scailo_pb.ts:312

## Properties

### const

• `Optional` **const**: `number`

Const specifies that this field must be exactly the specified value

**`Generated`**

from field: optional float const = 1;

#### Defined in

src/genesis.validate.scailo_pb.ts:252

___

### gt

• `Optional` **gt**: `number`

Gt specifies that this field must be greater than the specified value,
exclusive. If the value of Gt is larger than a specified Lt or Lte, the
range is reversed.

**`Generated`**

from field: optional float gt = 4;

#### Defined in

src/genesis.validate.scailo_pb.ts:277

___

### gte

• `Optional` **gte**: `number`

Gte specifies that this field must be greater than or equal to the
specified value, inclusive. If the value of Gte is larger than a
specified Lt or Lte, the range is reversed.

**`Generated`**

from field: optional float gte = 5;

#### Defined in

src/genesis.validate.scailo_pb.ts:286

___

### ignoreEmpty

• `Optional` **ignoreEmpty**: `boolean`

IgnoreEmpty specifies that the validation rules of this field should be
evaluated only if the field is not empty

**`Generated`**

from field: optional bool ignore_empty = 8;

#### Defined in

src/genesis.validate.scailo_pb.ts:310

___

### in

• **in**: `number`[] = `[]`

In specifies that this field must be equal to one of the specified
values

**`Generated`**

from field: repeated float in = 6;

#### Defined in

src/genesis.validate.scailo_pb.ts:294

___

### lt

• `Optional` **lt**: `number`

Lt specifies that this field must be less than the specified value,
exclusive

**`Generated`**

from field: optional float lt = 2;

#### Defined in

src/genesis.validate.scailo_pb.ts:260

___

### lte

• `Optional` **lte**: `number`

Lte specifies that this field must be less than or equal to the
specified value, inclusive

**`Generated`**

from field: optional float lte = 3;

#### Defined in

src/genesis.validate.scailo_pb.ts:268

___

### notIn

• **notIn**: `number`[] = `[]`

NotIn specifies that this field cannot be equal to one of the specified
values

**`Generated`**

from field: repeated float not_in = 7;

#### Defined in

src/genesis.validate.scailo_pb.ts:302

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/genesis.validate.scailo_pb.ts:319

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto2`

#### Defined in

src/genesis.validate.scailo_pb.ts:317

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"genesis_validate.FloatRules"``

#### Defined in

src/genesis.validate.scailo_pb.ts:318

## Methods

### clone

▸ **clone**(): [`FloatRules`](FloatRules.md)

Create a deep copy.

#### Returns

[`FloatRules`](FloatRules.md)

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
| `other` | `undefined` \| ``null`` \| [`FloatRules`](FloatRules.md) \| `PlainMessage`\<[`FloatRules`](FloatRules.md)\> |

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

▸ **getType**(): `MessageType`\<[`FloatRules`](FloatRules.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`FloatRules`](FloatRules.md)\>

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
| `a` | `undefined` \| [`FloatRules`](FloatRules.md) \| `PlainMessage`\<[`FloatRules`](FloatRules.md)\> |
| `b` | `undefined` \| [`FloatRules`](FloatRules.md) \| `PlainMessage`\<[`FloatRules`](FloatRules.md)\> |

#### Returns

`boolean`

#### Defined in

src/genesis.validate.scailo_pb.ts:342

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`FloatRules`](FloatRules.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`FloatRules`](FloatRules.md)

#### Defined in

src/genesis.validate.scailo_pb.ts:330

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`FloatRules`](FloatRules.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`FloatRules`](FloatRules.md)

#### Defined in

src/genesis.validate.scailo_pb.ts:334

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`FloatRules`](FloatRules.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`FloatRules`](FloatRules.md)

#### Defined in

src/genesis.validate.scailo_pb.ts:338
