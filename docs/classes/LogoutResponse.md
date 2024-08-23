[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / LogoutResponse

# Class: LogoutResponse

Describes the response data structure to a logout request

**`Generated`**

from message Scailo.LogoutResponse

## Hierarchy

- `Message`\<[`LogoutResponse`](LogoutResponse.md)\>

  ↳ **`LogoutResponse`**

## Table of contents

### Constructors

- [constructor](LogoutResponse.md#constructor)

### Properties

- [fields](LogoutResponse.md#fields)
- [runtime](LogoutResponse.md#runtime)
- [typeName](LogoutResponse.md#typename)

### Methods

- [clone](LogoutResponse.md#clone)
- [equals](LogoutResponse.md#equals)
- [fromBinary](LogoutResponse.md#frombinary)
- [fromJson](LogoutResponse.md#fromjson)
- [fromJsonString](LogoutResponse.md#fromjsonstring)
- [getType](LogoutResponse.md#gettype)
- [toBinary](LogoutResponse.md#tobinary)
- [toJSON](LogoutResponse.md#tojson)
- [toJson](LogoutResponse.md#tojson-1)
- [toJsonString](LogoutResponse.md#tojsonstring)
- [equals](LogoutResponse.md#equals-1)
- [fromBinary](LogoutResponse.md#frombinary-1)
- [fromJson](LogoutResponse.md#fromjson-1)
- [fromJsonString](LogoutResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new LogoutResponse**(`data?`): [`LogoutResponse`](LogoutResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`LogoutResponse`](LogoutResponse.md)\> |

#### Returns

[`LogoutResponse`](LogoutResponse.md)

#### Overrides

Message\&lt;LogoutResponse\&gt;.constructor

#### Defined in

src/logins.scailo_pb.ts:209

## Properties

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/logins.scailo_pb.ts:216

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/logins.scailo_pb.ts:214

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.LogoutResponse"``

#### Defined in

src/logins.scailo_pb.ts:215

## Methods

### clone

▸ **clone**(): [`LogoutResponse`](LogoutResponse.md)

Create a deep copy.

#### Returns

[`LogoutResponse`](LogoutResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`LogoutResponse`](LogoutResponse.md) \| `PlainMessage`\<[`LogoutResponse`](LogoutResponse.md)\> |

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

▸ **getType**(): `MessageType`\<[`LogoutResponse`](LogoutResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`LogoutResponse`](LogoutResponse.md)\>

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
| `a` | `undefined` \| [`LogoutResponse`](LogoutResponse.md) \| `PlainMessage`\<[`LogoutResponse`](LogoutResponse.md)\> |
| `b` | `undefined` \| [`LogoutResponse`](LogoutResponse.md) \| `PlainMessage`\<[`LogoutResponse`](LogoutResponse.md)\> |

#### Returns

`boolean`

#### Defined in

src/logins.scailo_pb.ts:231

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`LogoutResponse`](LogoutResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`LogoutResponse`](LogoutResponse.md)

#### Defined in

src/logins.scailo_pb.ts:219

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`LogoutResponse`](LogoutResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`LogoutResponse`](LogoutResponse.md)

#### Defined in

src/logins.scailo_pb.ts:223

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`LogoutResponse`](LogoutResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`LogoutResponse`](LogoutResponse.md)

#### Defined in

src/logins.scailo_pb.ts:227
