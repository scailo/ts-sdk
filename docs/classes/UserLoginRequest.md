[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / UserLoginRequest

# Class: UserLoginRequest

Describes the data structure for a user to login

**`Generated`**

from message Scailo.UserLoginRequest

## Hierarchy

- `Message`\<[`UserLoginRequest`](UserLoginRequest.md)\>

  ↳ **`UserLoginRequest`**

## Table of contents

### Constructors

- [constructor](UserLoginRequest.md#constructor)

### Properties

- [expiresIn](UserLoginRequest.md#expiresin)
- [otp](UserLoginRequest.md#otp)
- [plainTextPassword](UserLoginRequest.md#plaintextpassword)
- [username](UserLoginRequest.md#username)
- [fields](UserLoginRequest.md#fields)
- [runtime](UserLoginRequest.md#runtime)
- [typeName](UserLoginRequest.md#typename)

### Methods

- [clone](UserLoginRequest.md#clone)
- [equals](UserLoginRequest.md#equals)
- [fromBinary](UserLoginRequest.md#frombinary)
- [fromJson](UserLoginRequest.md#fromjson)
- [fromJsonString](UserLoginRequest.md#fromjsonstring)
- [getType](UserLoginRequest.md#gettype)
- [toBinary](UserLoginRequest.md#tobinary)
- [toJSON](UserLoginRequest.md#tojson)
- [toJson](UserLoginRequest.md#tojson-1)
- [toJsonString](UserLoginRequest.md#tojsonstring)
- [equals](UserLoginRequest.md#equals-1)
- [fromBinary](UserLoginRequest.md#frombinary-1)
- [fromJson](UserLoginRequest.md#fromjson-1)
- [fromJsonString](UserLoginRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new UserLoginRequest**(`data?`): [`UserLoginRequest`](UserLoginRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`UserLoginRequest`](UserLoginRequest.md)\> |

#### Returns

[`UserLoginRequest`](UserLoginRequest.md)

#### Overrides

Message\&lt;UserLoginRequest\&gt;.constructor

#### Defined in

src/login.scailo_pb.ts:45

## Properties

### expiresIn

• **expiresIn**: `bigint` = `protoInt64.zero`

Optional session expiry time in seconds. The value is ignored if set to 0.

**`Generated`**

from field: uint64 expires_in = 20;

#### Defined in

src/login.scailo_pb.ts:43

___

### otp

• **otp**: `string` = `""`

The MFA OTP of the user

**`Generated`**

from field: string otp = 13;

#### Defined in

src/login.scailo_pb.ts:36

___

### plainTextPassword

• **plainTextPassword**: `string` = `""`

The password of the user

**`Generated`**

from field: string plain_text_password = 12;

#### Defined in

src/login.scailo_pb.ts:29

___

### username

• **username**: `string` = `""`

Username of the user

**`Generated`**

from field: string username = 1;

#### Defined in

src/login.scailo_pb.ts:22

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/login.scailo_pb.ts:52

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/login.scailo_pb.ts:50

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.UserLoginRequest"``

#### Defined in

src/login.scailo_pb.ts:51

## Methods

### clone

▸ **clone**(): [`UserLoginRequest`](UserLoginRequest.md)

Create a deep copy.

#### Returns

[`UserLoginRequest`](UserLoginRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`UserLoginRequest`](UserLoginRequest.md) \| `PlainMessage`\<[`UserLoginRequest`](UserLoginRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`UserLoginRequest`](UserLoginRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`UserLoginRequest`](UserLoginRequest.md)\>

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
| `a` | `undefined` \| [`UserLoginRequest`](UserLoginRequest.md) \| `PlainMessage`\<[`UserLoginRequest`](UserLoginRequest.md)\> |
| `b` | `undefined` \| [`UserLoginRequest`](UserLoginRequest.md) \| `PlainMessage`\<[`UserLoginRequest`](UserLoginRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/login.scailo_pb.ts:71

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`UserLoginRequest`](UserLoginRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`UserLoginRequest`](UserLoginRequest.md)

#### Defined in

src/login.scailo_pb.ts:59

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`UserLoginRequest`](UserLoginRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`UserLoginRequest`](UserLoginRequest.md)

#### Defined in

src/login.scailo_pb.ts:63

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`UserLoginRequest`](UserLoginRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`UserLoginRequest`](UserLoginRequest.md)

#### Defined in

src/login.scailo_pb.ts:67
