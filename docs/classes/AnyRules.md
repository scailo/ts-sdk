[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / AnyRules

# Class: AnyRules

AnyRules describe constraints applied exclusively to the
`google.protobuf.Any` well-known type

**`Generated`**

from message genesis_validate.AnyRules

## Hierarchy

- `Message`\<[`AnyRules`](AnyRules.md)\>

  ↳ **`AnyRules`**

## Table of contents

### Constructors

- [constructor](AnyRules.md#constructor)

### Properties

- [in](AnyRules.md#in)
- [notIn](AnyRules.md#notin)
- [required](AnyRules.md#required)
- [fields](AnyRules.md#fields)
- [runtime](AnyRules.md#runtime)
- [typeName](AnyRules.md#typename)

### Methods

- [clone](AnyRules.md#clone)
- [equals](AnyRules.md#equals)
- [fromBinary](AnyRules.md#frombinary)
- [fromJson](AnyRules.md#fromjson)
- [fromJsonString](AnyRules.md#fromjsonstring)
- [getType](AnyRules.md#gettype)
- [toBinary](AnyRules.md#tobinary)
- [toJSON](AnyRules.md#tojson)
- [toJson](AnyRules.md#tojson-1)
- [toJsonString](AnyRules.md#tojsonstring)
- [equals](AnyRules.md#equals-1)
- [fromBinary](AnyRules.md#frombinary-1)
- [fromJson](AnyRules.md#fromjson-1)
- [fromJsonString](AnyRules.md#fromjsonstring-1)

## Constructors

### constructor

• **new AnyRules**(`data?`): [`AnyRules`](AnyRules.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`AnyRules`](AnyRules.md)\> |

#### Returns

[`AnyRules`](AnyRules.md)

#### Overrides

Message\&lt;AnyRules\&gt;.constructor

#### Defined in

src/genesis.validate.scailo_pb.ts:2329

## Properties

### in

• **in**: `string`[] = `[]`

In specifies that this field's `type_url` must be equal to one of the
specified values.

**`Generated`**

from field: repeated string in = 2;

#### Defined in

src/genesis.validate.scailo_pb.ts:2319

___

### notIn

• **notIn**: `string`[] = `[]`

NotIn specifies that this field's `type_url` must not be equal to any of
the specified values.

**`Generated`**

from field: repeated string not_in = 3;

#### Defined in

src/genesis.validate.scailo_pb.ts:2327

___

### required

• `Optional` **required**: `boolean`

Required specifies that this field must be set

**`Generated`**

from field: optional bool required = 1;

#### Defined in

src/genesis.validate.scailo_pb.ts:2311

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/genesis.validate.scailo_pb.ts:2336

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto2`

#### Defined in

src/genesis.validate.scailo_pb.ts:2334

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"genesis_validate.AnyRules"``

#### Defined in

src/genesis.validate.scailo_pb.ts:2335

## Methods

### clone

▸ **clone**(): [`AnyRules`](AnyRules.md)

Create a deep copy.

#### Returns

[`AnyRules`](AnyRules.md)

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
| `other` | `undefined` \| ``null`` \| [`AnyRules`](AnyRules.md) \| `PlainMessage`\<[`AnyRules`](AnyRules.md)\> |

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

▸ **getType**(): `MessageType`\<[`AnyRules`](AnyRules.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`AnyRules`](AnyRules.md)\>

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
| `a` | `undefined` \| [`AnyRules`](AnyRules.md) \| `PlainMessage`\<[`AnyRules`](AnyRules.md)\> |
| `b` | `undefined` \| [`AnyRules`](AnyRules.md) \| `PlainMessage`\<[`AnyRules`](AnyRules.md)\> |

#### Returns

`boolean`

#### Defined in

src/genesis.validate.scailo_pb.ts:2354

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`AnyRules`](AnyRules.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`AnyRules`](AnyRules.md)

#### Defined in

src/genesis.validate.scailo_pb.ts:2342

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`AnyRules`](AnyRules.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AnyRules`](AnyRules.md)

#### Defined in

src/genesis.validate.scailo_pb.ts:2346

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`AnyRules`](AnyRules.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AnyRules`](AnyRules.md)

#### Defined in

src/genesis.validate.scailo_pb.ts:2350
