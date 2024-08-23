[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / StringResponse

# Class: StringResponse

Describes a generic response that consists of string as payload

**`Generated`**

from message Scailo.StringResponse

## Hierarchy

- `Message`\<[`StringResponse`](StringResponse.md)\>

  ↳ **`StringResponse`**

## Table of contents

### Constructors

- [constructor](StringResponse.md#constructor)

### Properties

- [value](StringResponse.md#value)
- [fields](StringResponse.md#fields)
- [runtime](StringResponse.md#runtime)
- [typeName](StringResponse.md#typename)

### Methods

- [clone](StringResponse.md#clone)
- [equals](StringResponse.md#equals)
- [fromBinary](StringResponse.md#frombinary)
- [fromJson](StringResponse.md#fromjson)
- [fromJsonString](StringResponse.md#fromjsonstring)
- [getType](StringResponse.md#gettype)
- [toBinary](StringResponse.md#tobinary)
- [toJSON](StringResponse.md#tojson)
- [toJson](StringResponse.md#tojson-1)
- [toJsonString](StringResponse.md#tojsonstring)
- [equals](StringResponse.md#equals-1)
- [fromBinary](StringResponse.md#frombinary-1)
- [fromJson](StringResponse.md#fromjson-1)
- [fromJsonString](StringResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new StringResponse**(`data?`): [`StringResponse`](StringResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`StringResponse`](StringResponse.md)\> |

#### Returns

[`StringResponse`](StringResponse.md)

#### Overrides

Message\&lt;StringResponse\&gt;.constructor

#### Defined in

src/base.scailo_pb.ts:1270

## Properties

### value

• **value**: `string` = `""`

Stores the reponse content in string

**`Generated`**

from field: string value = 1;

#### Defined in

src/base.scailo_pb.ts:1268

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/base.scailo_pb.ts:1277

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/base.scailo_pb.ts:1275

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.StringResponse"``

#### Defined in

src/base.scailo_pb.ts:1276

## Methods

### clone

▸ **clone**(): [`StringResponse`](StringResponse.md)

Create a deep copy.

#### Returns

[`StringResponse`](StringResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`StringResponse`](StringResponse.md) \| `PlainMessage`\<[`StringResponse`](StringResponse.md)\> |

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

▸ **getType**(): `MessageType`\<[`StringResponse`](StringResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`StringResponse`](StringResponse.md)\>

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
| `a` | `undefined` \| [`StringResponse`](StringResponse.md) \| `PlainMessage`\<[`StringResponse`](StringResponse.md)\> |
| `b` | `undefined` \| [`StringResponse`](StringResponse.md) \| `PlainMessage`\<[`StringResponse`](StringResponse.md)\> |

#### Returns

`boolean`

#### Defined in

src/base.scailo_pb.ts:1293

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`StringResponse`](StringResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`StringResponse`](StringResponse.md)

#### Defined in

src/base.scailo_pb.ts:1281

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`StringResponse`](StringResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`StringResponse`](StringResponse.md)

#### Defined in

src/base.scailo_pb.ts:1285

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`StringResponse`](StringResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`StringResponse`](StringResponse.md)

#### Defined in

src/base.scailo_pb.ts:1289
