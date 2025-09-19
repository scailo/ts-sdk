[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / UserLoginResponse

# Class: UserLoginResponse

Describes the response to a user login request

**`Generated`**

from message Scailo.UserLoginResponse

## Hierarchy

- `Message`\<[`UserLoginResponse`](UserLoginResponse.md)\>

  ↳ **`UserLoginResponse`**

## Table of contents

### Constructors

- [constructor](UserLoginResponse.md#constructor)

### Properties

- [authToken](UserLoginResponse.md#authtoken)
- [expiresAt](UserLoginResponse.md#expiresat)
- [username](UserLoginResponse.md#username)
- [fields](UserLoginResponse.md#fields)
- [runtime](UserLoginResponse.md#runtime)
- [typeName](UserLoginResponse.md#typename)

### Methods

- [clone](UserLoginResponse.md#clone)
- [equals](UserLoginResponse.md#equals)
- [fromBinary](UserLoginResponse.md#frombinary)
- [fromJson](UserLoginResponse.md#fromjson)
- [fromJsonString](UserLoginResponse.md#fromjsonstring)
- [getType](UserLoginResponse.md#gettype)
- [toBinary](UserLoginResponse.md#tobinary)
- [toJSON](UserLoginResponse.md#tojson)
- [toJson](UserLoginResponse.md#tojson-1)
- [toJsonString](UserLoginResponse.md#tojsonstring)
- [equals](UserLoginResponse.md#equals-1)
- [fromBinary](UserLoginResponse.md#frombinary-1)
- [fromJson](UserLoginResponse.md#fromjson-1)
- [fromJsonString](UserLoginResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new UserLoginResponse**(`data?`): [`UserLoginResponse`](UserLoginResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`UserLoginResponse`](UserLoginResponse.md)\> |

#### Returns

[`UserLoginResponse`](UserLoginResponse.md)

#### Overrides

Message\&lt;UserLoginResponse\&gt;.constructor

#### Defined in

[src/login.scailo_pb.ts:104](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/login.scailo_pb.ts#L104)

## Properties

### authToken

• **authToken**: `string` = `""`

The token that needs to be used as part of every request

**`Generated`**

from field: string auth_token = 2;

#### Defined in

[src/login.scailo_pb.ts:95](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/login.scailo_pb.ts#L95)

___

### expiresAt

• **expiresAt**: `bigint` = `protoInt64.zero`

The unix timestamp after which the auth_token is invalid

**`Generated`**

from field: uint64 expires_at = 3;

#### Defined in

[src/login.scailo_pb.ts:102](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/login.scailo_pb.ts#L102)

___

### username

• **username**: `string` = `""`

Username of the user that just logged in

**`Generated`**

from field: string username = 1;

#### Defined in

[src/login.scailo_pb.ts:88](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/login.scailo_pb.ts#L88)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/login.scailo_pb.ts:111](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/login.scailo_pb.ts#L111)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/login.scailo_pb.ts:109](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/login.scailo_pb.ts#L109)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.UserLoginResponse"``

#### Defined in

[src/login.scailo_pb.ts:110](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/login.scailo_pb.ts#L110)

## Methods

### clone

▸ **clone**(): [`UserLoginResponse`](UserLoginResponse.md)

Create a deep copy.

#### Returns

[`UserLoginResponse`](UserLoginResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`UserLoginResponse`](UserLoginResponse.md) \| `PlainMessage`\<[`UserLoginResponse`](UserLoginResponse.md)\> |

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

▸ **getType**(): `MessageType`\<[`UserLoginResponse`](UserLoginResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`UserLoginResponse`](UserLoginResponse.md)\>

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
| `a` | `undefined` \| [`UserLoginResponse`](UserLoginResponse.md) \| `PlainMessage`\<[`UserLoginResponse`](UserLoginResponse.md)\> |
| `b` | `undefined` \| [`UserLoginResponse`](UserLoginResponse.md) \| `PlainMessage`\<[`UserLoginResponse`](UserLoginResponse.md)\> |

#### Returns

`boolean`

#### Defined in

[src/login.scailo_pb.ts:129](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/login.scailo_pb.ts#L129)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`UserLoginResponse`](UserLoginResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`UserLoginResponse`](UserLoginResponse.md)

#### Defined in

[src/login.scailo_pb.ts:117](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/login.scailo_pb.ts#L117)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`UserLoginResponse`](UserLoginResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`UserLoginResponse`](UserLoginResponse.md)

#### Defined in

[src/login.scailo_pb.ts:121](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/login.scailo_pb.ts#L121)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`UserLoginResponse`](UserLoginResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`UserLoginResponse`](UserLoginResponse.md)

#### Defined in

[src/login.scailo_pb.ts:125](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/login.scailo_pb.ts#L125)
