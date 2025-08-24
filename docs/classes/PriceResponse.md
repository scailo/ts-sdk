[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / PriceResponse

# Class: PriceResponse

Describes a generic response that consists of price as payload

**`Generated`**

from message Scailo.PriceResponse

## Hierarchy

- `Message`\<[`PriceResponse`](PriceResponse.md)\>

  ↳ **`PriceResponse`**

## Table of contents

### Constructors

- [constructor](PriceResponse.md#constructor)

### Properties

- [value](PriceResponse.md#value)
- [fields](PriceResponse.md#fields)
- [runtime](PriceResponse.md#runtime)
- [typeName](PriceResponse.md#typename)

### Methods

- [clone](PriceResponse.md#clone)
- [equals](PriceResponse.md#equals)
- [fromBinary](PriceResponse.md#frombinary)
- [fromJson](PriceResponse.md#fromjson)
- [fromJsonString](PriceResponse.md#fromjsonstring)
- [getType](PriceResponse.md#gettype)
- [toBinary](PriceResponse.md#tobinary)
- [toJSON](PriceResponse.md#tojson)
- [toJson](PriceResponse.md#tojson-1)
- [toJsonString](PriceResponse.md#tojsonstring)
- [equals](PriceResponse.md#equals-1)
- [fromBinary](PriceResponse.md#frombinary-1)
- [fromJson](PriceResponse.md#fromjson-1)
- [fromJsonString](PriceResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new PriceResponse**(`data?`): [`PriceResponse`](PriceResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`PriceResponse`](PriceResponse.md)\> |

#### Returns

[`PriceResponse`](PriceResponse.md)

#### Overrides

Message\&lt;PriceResponse\&gt;.constructor

#### Defined in

src/base.scailo_pb.ts:1368

## Properties

### value

• **value**: `bigint` = `protoInt64.zero`

Stores the price as an integer (in cents)

**`Generated`**

from field: int64 value = 1;

#### Defined in

src/base.scailo_pb.ts:1366

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/base.scailo_pb.ts:1375

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/base.scailo_pb.ts:1373

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.PriceResponse"``

#### Defined in

src/base.scailo_pb.ts:1374

## Methods

### clone

▸ **clone**(): [`PriceResponse`](PriceResponse.md)

Create a deep copy.

#### Returns

[`PriceResponse`](PriceResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`PriceResponse`](PriceResponse.md) \| `PlainMessage`\<[`PriceResponse`](PriceResponse.md)\> |

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

▸ **getType**(): `MessageType`\<[`PriceResponse`](PriceResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`PriceResponse`](PriceResponse.md)\>

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
| `a` | `undefined` \| [`PriceResponse`](PriceResponse.md) \| `PlainMessage`\<[`PriceResponse`](PriceResponse.md)\> |
| `b` | `undefined` \| [`PriceResponse`](PriceResponse.md) \| `PlainMessage`\<[`PriceResponse`](PriceResponse.md)\> |

#### Returns

`boolean`

#### Defined in

src/base.scailo_pb.ts:1391

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PriceResponse`](PriceResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`PriceResponse`](PriceResponse.md)

#### Defined in

src/base.scailo_pb.ts:1379

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PriceResponse`](PriceResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PriceResponse`](PriceResponse.md)

#### Defined in

src/base.scailo_pb.ts:1383

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PriceResponse`](PriceResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PriceResponse`](PriceResponse.md)

#### Defined in

src/base.scailo_pb.ts:1387
