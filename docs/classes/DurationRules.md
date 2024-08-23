[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / DurationRules

# Class: DurationRules

DurationRules describe the constraints applied exclusively to the
`google.protobuf.Duration` well-known type

**`Generated`**

from message genesis_validate.DurationRules

## Hierarchy

- `Message`\<[`DurationRules`](DurationRules.md)\>

  ↳ **`DurationRules`**

## Table of contents

### Constructors

- [constructor](DurationRules.md#constructor)

### Properties

- [const](DurationRules.md#const)
- [gt](DurationRules.md#gt)
- [gte](DurationRules.md#gte)
- [in](DurationRules.md#in)
- [lt](DurationRules.md#lt)
- [lte](DurationRules.md#lte)
- [notIn](DurationRules.md#notin)
- [required](DurationRules.md#required)
- [fields](DurationRules.md#fields)
- [runtime](DurationRules.md#runtime)
- [typeName](DurationRules.md#typename)

### Methods

- [clone](DurationRules.md#clone)
- [equals](DurationRules.md#equals)
- [fromBinary](DurationRules.md#frombinary)
- [fromJson](DurationRules.md#fromjson)
- [fromJsonString](DurationRules.md#fromjsonstring)
- [getType](DurationRules.md#gettype)
- [toBinary](DurationRules.md#tobinary)
- [toJSON](DurationRules.md#tojson)
- [toJson](DurationRules.md#tojson-1)
- [toJsonString](DurationRules.md#tojsonstring)
- [equals](DurationRules.md#equals-1)
- [fromBinary](DurationRules.md#frombinary-1)
- [fromJson](DurationRules.md#fromjson-1)
- [fromJsonString](DurationRules.md#fromjsonstring-1)

## Constructors

### constructor

• **new DurationRules**(`data?`): [`DurationRules`](DurationRules.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`DurationRules`](DurationRules.md)\> |

#### Returns

[`DurationRules`](DurationRules.md)

#### Overrides

Message\&lt;DurationRules\&gt;.constructor

#### Defined in

src/genesis.validate.scailo_pb.ts:2428

## Properties

### const

• `Optional` **const**: `Duration`

Const specifies that this field must be exactly the specified value

**`Generated`**

from field: optional google.protobuf.Duration const = 2;

#### Defined in

src/genesis.validate.scailo_pb.ts:2378

___

### gt

• `Optional` **gt**: `Duration`

Gt specifies that this field must be greater than the specified value,
exclusive

**`Generated`**

from field: optional google.protobuf.Duration gt = 5;

#### Defined in

src/genesis.validate.scailo_pb.ts:2402

___

### gte

• `Optional` **gte**: `Duration`

Gte specifies that this field must be greater than the specified value,
inclusive

**`Generated`**

from field: optional google.protobuf.Duration gte = 6;

#### Defined in

src/genesis.validate.scailo_pb.ts:2410

___

### in

• **in**: `Duration`[] = `[]`

In specifies that this field must be equal to one of the specified
values

**`Generated`**

from field: repeated google.protobuf.Duration in = 7;

#### Defined in

src/genesis.validate.scailo_pb.ts:2418

___

### lt

• `Optional` **lt**: `Duration`

Lt specifies that this field must be less than the specified value,
exclusive

**`Generated`**

from field: optional google.protobuf.Duration lt = 3;

#### Defined in

src/genesis.validate.scailo_pb.ts:2386

___

### lte

• `Optional` **lte**: `Duration`

Lt specifies that this field must be less than the specified value,
inclusive

**`Generated`**

from field: optional google.protobuf.Duration lte = 4;

#### Defined in

src/genesis.validate.scailo_pb.ts:2394

___

### notIn

• **notIn**: `Duration`[] = `[]`

NotIn specifies that this field cannot be equal to one of the specified
values

**`Generated`**

from field: repeated google.protobuf.Duration not_in = 8;

#### Defined in

src/genesis.validate.scailo_pb.ts:2426

___

### required

• `Optional` **required**: `boolean`

Required specifies that this field must be set

**`Generated`**

from field: optional bool required = 1;

#### Defined in

src/genesis.validate.scailo_pb.ts:2371

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/genesis.validate.scailo_pb.ts:2435

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto2`

#### Defined in

src/genesis.validate.scailo_pb.ts:2433

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"genesis_validate.DurationRules"``

#### Defined in

src/genesis.validate.scailo_pb.ts:2434

## Methods

### clone

▸ **clone**(): [`DurationRules`](DurationRules.md)

Create a deep copy.

#### Returns

[`DurationRules`](DurationRules.md)

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
| `other` | `undefined` \| ``null`` \| [`DurationRules`](DurationRules.md) \| `PlainMessage`\<[`DurationRules`](DurationRules.md)\> |

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

▸ **getType**(): `MessageType`\<[`DurationRules`](DurationRules.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`DurationRules`](DurationRules.md)\>

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
| `a` | `undefined` \| [`DurationRules`](DurationRules.md) \| `PlainMessage`\<[`DurationRules`](DurationRules.md)\> |
| `b` | `undefined` \| [`DurationRules`](DurationRules.md) \| `PlainMessage`\<[`DurationRules`](DurationRules.md)\> |

#### Returns

`boolean`

#### Defined in

src/genesis.validate.scailo_pb.ts:2458

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`DurationRules`](DurationRules.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`DurationRules`](DurationRules.md)

#### Defined in

src/genesis.validate.scailo_pb.ts:2446

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`DurationRules`](DurationRules.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`DurationRules`](DurationRules.md)

#### Defined in

src/genesis.validate.scailo_pb.ts:2450

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`DurationRules`](DurationRules.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`DurationRules`](DurationRules.md)

#### Defined in

src/genesis.validate.scailo_pb.ts:2454
