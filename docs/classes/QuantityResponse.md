[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / QuantityResponse

# Class: QuantityResponse

Describes the quantity response

**`Generated`**

from message Scailo.QuantityResponse

## Hierarchy

- `Message`\<[`QuantityResponse`](QuantityResponse.md)\>

  ↳ **`QuantityResponse`**

## Table of contents

### Constructors

- [constructor](QuantityResponse.md#constructor)

### Properties

- [quantity](QuantityResponse.md#quantity)
- [fields](QuantityResponse.md#fields)
- [runtime](QuantityResponse.md#runtime)
- [typeName](QuantityResponse.md#typename)

### Methods

- [clone](QuantityResponse.md#clone)
- [equals](QuantityResponse.md#equals)
- [fromBinary](QuantityResponse.md#frombinary)
- [fromJson](QuantityResponse.md#fromjson)
- [fromJsonString](QuantityResponse.md#fromjsonstring)
- [getType](QuantityResponse.md#gettype)
- [toBinary](QuantityResponse.md#tobinary)
- [toJSON](QuantityResponse.md#tojson)
- [toJson](QuantityResponse.md#tojson-1)
- [toJsonString](QuantityResponse.md#tojsonstring)
- [equals](QuantityResponse.md#equals-1)
- [fromBinary](QuantityResponse.md#frombinary-1)
- [fromJson](QuantityResponse.md#fromjson-1)
- [fromJsonString](QuantityResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new QuantityResponse**(`data?`): [`QuantityResponse`](QuantityResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`QuantityResponse`](QuantityResponse.md)\> |

#### Returns

[`QuantityResponse`](QuantityResponse.md)

#### Overrides

Message\&lt;QuantityResponse\&gt;.constructor

#### Defined in

src/base.scailo_pb.ts:1646

## Properties

### quantity

• **quantity**: `bigint` = `protoInt64.zero`

The quantity (has to be int currently, since certain locations might need negative values, such as "required quantity" responses)

**`Generated`**

from field: int64 quantity = 1;

#### Defined in

src/base.scailo_pb.ts:1644

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/base.scailo_pb.ts:1653

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/base.scailo_pb.ts:1651

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.QuantityResponse"``

#### Defined in

src/base.scailo_pb.ts:1652

## Methods

### clone

▸ **clone**(): [`QuantityResponse`](QuantityResponse.md)

Create a deep copy.

#### Returns

[`QuantityResponse`](QuantityResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`QuantityResponse`](QuantityResponse.md) \| `PlainMessage`\<[`QuantityResponse`](QuantityResponse.md)\> |

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

▸ **getType**(): `MessageType`\<[`QuantityResponse`](QuantityResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`QuantityResponse`](QuantityResponse.md)\>

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
| `a` | `undefined` \| [`QuantityResponse`](QuantityResponse.md) \| `PlainMessage`\<[`QuantityResponse`](QuantityResponse.md)\> |
| `b` | `undefined` \| [`QuantityResponse`](QuantityResponse.md) \| `PlainMessage`\<[`QuantityResponse`](QuantityResponse.md)\> |

#### Returns

`boolean`

#### Defined in

src/base.scailo_pb.ts:1669

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QuantityResponse`](QuantityResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`QuantityResponse`](QuantityResponse.md)

#### Defined in

src/base.scailo_pb.ts:1657

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QuantityResponse`](QuantityResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuantityResponse`](QuantityResponse.md)

#### Defined in

src/base.scailo_pb.ts:1661

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QuantityResponse`](QuantityResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuantityResponse`](QuantityResponse.md)

#### Defined in

src/base.scailo_pb.ts:1665
