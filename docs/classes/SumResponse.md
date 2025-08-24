[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SumResponse

# Class: SumResponse

Describes the sum reponse

**`Generated`**

from message Scailo.SumResponse

## Hierarchy

- `Message`\<[`SumResponse`](SumResponse.md)\>

  ↳ **`SumResponse`**

## Table of contents

### Constructors

- [constructor](SumResponse.md#constructor)

### Properties

- [sum](SumResponse.md#sum)
- [fields](SumResponse.md#fields)
- [runtime](SumResponse.md#runtime)
- [typeName](SumResponse.md#typename)

### Methods

- [clone](SumResponse.md#clone)
- [equals](SumResponse.md#equals)
- [fromBinary](SumResponse.md#frombinary)
- [fromJson](SumResponse.md#fromjson)
- [fromJsonString](SumResponse.md#fromjsonstring)
- [getType](SumResponse.md#gettype)
- [toBinary](SumResponse.md#tobinary)
- [toJSON](SumResponse.md#tojson)
- [toJson](SumResponse.md#tojson-1)
- [toJsonString](SumResponse.md#tojsonstring)
- [equals](SumResponse.md#equals-1)
- [fromBinary](SumResponse.md#frombinary-1)
- [fromJson](SumResponse.md#fromjson-1)
- [fromJsonString](SumResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new SumResponse**(`data?`): [`SumResponse`](SumResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SumResponse`](SumResponse.md)\> |

#### Returns

[`SumResponse`](SumResponse.md)

#### Overrides

Message\&lt;SumResponse\&gt;.constructor

#### Defined in

src/base.scailo_pb.ts:1702

## Properties

### sum

• **sum**: `number` = `0`

The sum of all the records

**`Generated`**

from field: double sum = 1;

#### Defined in

src/base.scailo_pb.ts:1700

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/base.scailo_pb.ts:1709

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/base.scailo_pb.ts:1707

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SumResponse"``

#### Defined in

src/base.scailo_pb.ts:1708

## Methods

### clone

▸ **clone**(): [`SumResponse`](SumResponse.md)

Create a deep copy.

#### Returns

[`SumResponse`](SumResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`SumResponse`](SumResponse.md) \| `PlainMessage`\<[`SumResponse`](SumResponse.md)\> |

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

▸ **getType**(): `MessageType`\<[`SumResponse`](SumResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SumResponse`](SumResponse.md)\>

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
| `a` | `undefined` \| [`SumResponse`](SumResponse.md) \| `PlainMessage`\<[`SumResponse`](SumResponse.md)\> |
| `b` | `undefined` \| [`SumResponse`](SumResponse.md) \| `PlainMessage`\<[`SumResponse`](SumResponse.md)\> |

#### Returns

`boolean`

#### Defined in

src/base.scailo_pb.ts:1725

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SumResponse`](SumResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SumResponse`](SumResponse.md)

#### Defined in

src/base.scailo_pb.ts:1713

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SumResponse`](SumResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SumResponse`](SumResponse.md)

#### Defined in

src/base.scailo_pb.ts:1717

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SumResponse`](SumResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SumResponse`](SumResponse.md)

#### Defined in

src/base.scailo_pb.ts:1721
