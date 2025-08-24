[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / BooleanResponse

# Class: BooleanResponse

Describes the boolean response

**`Generated`**

from message Scailo.BooleanResponse

## Hierarchy

- `Message`\<[`BooleanResponse`](BooleanResponse.md)\>

  ↳ **`BooleanResponse`**

## Table of contents

### Constructors

- [constructor](BooleanResponse.md#constructor)

### Properties

- [value](BooleanResponse.md#value)
- [fields](BooleanResponse.md#fields)
- [runtime](BooleanResponse.md#runtime)
- [typeName](BooleanResponse.md#typename)

### Methods

- [clone](BooleanResponse.md#clone)
- [equals](BooleanResponse.md#equals)
- [fromBinary](BooleanResponse.md#frombinary)
- [fromJson](BooleanResponse.md#fromjson)
- [fromJsonString](BooleanResponse.md#fromjsonstring)
- [getType](BooleanResponse.md#gettype)
- [toBinary](BooleanResponse.md#tobinary)
- [toJSON](BooleanResponse.md#tojson)
- [toJson](BooleanResponse.md#tojson-1)
- [toJsonString](BooleanResponse.md#tojsonstring)
- [equals](BooleanResponse.md#equals-1)
- [fromBinary](BooleanResponse.md#frombinary-1)
- [fromJson](BooleanResponse.md#fromjson-1)
- [fromJsonString](BooleanResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new BooleanResponse**(`data?`): [`BooleanResponse`](BooleanResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`BooleanResponse`](BooleanResponse.md)\> |

#### Returns

[`BooleanResponse`](BooleanResponse.md)

#### Overrides

Message\&lt;BooleanResponse\&gt;.constructor

#### Defined in

src/base.scailo_pb.ts:1242

## Properties

### value

• **value**: `boolean` = `false`

Stores if the value is true or false

**`Generated`**

from field: bool value = 1;

#### Defined in

src/base.scailo_pb.ts:1240

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/base.scailo_pb.ts:1249

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/base.scailo_pb.ts:1247

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.BooleanResponse"``

#### Defined in

src/base.scailo_pb.ts:1248

## Methods

### clone

▸ **clone**(): [`BooleanResponse`](BooleanResponse.md)

Create a deep copy.

#### Returns

[`BooleanResponse`](BooleanResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`BooleanResponse`](BooleanResponse.md) \| `PlainMessage`\<[`BooleanResponse`](BooleanResponse.md)\> |

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

▸ **getType**(): `MessageType`\<[`BooleanResponse`](BooleanResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`BooleanResponse`](BooleanResponse.md)\>

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
| `a` | `undefined` \| [`BooleanResponse`](BooleanResponse.md) \| `PlainMessage`\<[`BooleanResponse`](BooleanResponse.md)\> |
| `b` | `undefined` \| [`BooleanResponse`](BooleanResponse.md) \| `PlainMessage`\<[`BooleanResponse`](BooleanResponse.md)\> |

#### Returns

`boolean`

#### Defined in

src/base.scailo_pb.ts:1265

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`BooleanResponse`](BooleanResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`BooleanResponse`](BooleanResponse.md)

#### Defined in

src/base.scailo_pb.ts:1253

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`BooleanResponse`](BooleanResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`BooleanResponse`](BooleanResponse.md)

#### Defined in

src/base.scailo_pb.ts:1257

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`BooleanResponse`](BooleanResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`BooleanResponse`](BooleanResponse.md)

#### Defined in

src/base.scailo_pb.ts:1261
