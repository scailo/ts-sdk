[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / UsersServicePasswordResetReq

# Class: UsersServicePasswordResetReq

Describes the message that is required to reset a user's password through an email

**`Generated`**

from message Scailo.UsersServicePasswordResetReq

## Hierarchy

- `Message`\<[`UsersServicePasswordResetReq`](UsersServicePasswordResetReq.md)\>

  ↳ **`UsersServicePasswordResetReq`**

## Table of contents

### Constructors

- [constructor](UsersServicePasswordResetReq.md#constructor)

### Properties

- [domainPrefix](UsersServicePasswordResetReq.md#domainprefix)
- [username](UsersServicePasswordResetReq.md#username)
- [fields](UsersServicePasswordResetReq.md#fields)
- [runtime](UsersServicePasswordResetReq.md#runtime)
- [typeName](UsersServicePasswordResetReq.md#typename)

### Methods

- [clone](UsersServicePasswordResetReq.md#clone)
- [equals](UsersServicePasswordResetReq.md#equals)
- [fromBinary](UsersServicePasswordResetReq.md#frombinary)
- [fromJson](UsersServicePasswordResetReq.md#fromjson)
- [fromJsonString](UsersServicePasswordResetReq.md#fromjsonstring)
- [getType](UsersServicePasswordResetReq.md#gettype)
- [toBinary](UsersServicePasswordResetReq.md#tobinary)
- [toJSON](UsersServicePasswordResetReq.md#tojson)
- [toJson](UsersServicePasswordResetReq.md#tojson-1)
- [toJsonString](UsersServicePasswordResetReq.md#tojsonstring)
- [equals](UsersServicePasswordResetReq.md#equals-1)
- [fromBinary](UsersServicePasswordResetReq.md#frombinary-1)
- [fromJson](UsersServicePasswordResetReq.md#fromjson-1)
- [fromJsonString](UsersServicePasswordResetReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new UsersServicePasswordResetReq**(`data?`): [`UsersServicePasswordResetReq`](UsersServicePasswordResetReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`UsersServicePasswordResetReq`](UsersServicePasswordResetReq.md)\> |

#### Returns

[`UsersServicePasswordResetReq`](UsersServicePasswordResetReq.md)

#### Overrides

Message\&lt;UsersServicePasswordResetReq\&gt;.constructor

#### Defined in

[src/users.scailo_pb.ts:2429](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/users.scailo_pb.ts#L2429)

## Properties

### domainPrefix

• **domainPrefix**: `string` = `""`

The optional domain prefix that is used to generate the magic link that will allow the user to update the password. If this is empty, then the default authless access domain is used. This is useful in case of password redirections need to happen at custom domains.

**`Generated`**

from field: string domain_prefix = 20;

#### Defined in

[src/users.scailo_pb.ts:2427](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/users.scailo_pb.ts#L2427)

___

### username

• **username**: `string` = `""`

The username of the user

**`Generated`**

from field: string username = 10;

#### Defined in

[src/users.scailo_pb.ts:2420](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/users.scailo_pb.ts#L2420)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/users.scailo_pb.ts:2436](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/users.scailo_pb.ts#L2436)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/users.scailo_pb.ts:2434](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/users.scailo_pb.ts#L2434)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.UsersServicePasswordResetReq"``

#### Defined in

[src/users.scailo_pb.ts:2435](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/users.scailo_pb.ts#L2435)

## Methods

### clone

▸ **clone**(): [`UsersServicePasswordResetReq`](UsersServicePasswordResetReq.md)

Create a deep copy.

#### Returns

[`UsersServicePasswordResetReq`](UsersServicePasswordResetReq.md)

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
| `other` | `undefined` \| ``null`` \| [`UsersServicePasswordResetReq`](UsersServicePasswordResetReq.md) \| `PlainMessage`\<[`UsersServicePasswordResetReq`](UsersServicePasswordResetReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`UsersServicePasswordResetReq`](UsersServicePasswordResetReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`UsersServicePasswordResetReq`](UsersServicePasswordResetReq.md)\>

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
| `a` | `undefined` \| [`UsersServicePasswordResetReq`](UsersServicePasswordResetReq.md) \| `PlainMessage`\<[`UsersServicePasswordResetReq`](UsersServicePasswordResetReq.md)\> |
| `b` | `undefined` \| [`UsersServicePasswordResetReq`](UsersServicePasswordResetReq.md) \| `PlainMessage`\<[`UsersServicePasswordResetReq`](UsersServicePasswordResetReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/users.scailo_pb.ts:2453](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/users.scailo_pb.ts#L2453)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`UsersServicePasswordResetReq`](UsersServicePasswordResetReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`UsersServicePasswordResetReq`](UsersServicePasswordResetReq.md)

#### Defined in

[src/users.scailo_pb.ts:2441](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/users.scailo_pb.ts#L2441)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`UsersServicePasswordResetReq`](UsersServicePasswordResetReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`UsersServicePasswordResetReq`](UsersServicePasswordResetReq.md)

#### Defined in

[src/users.scailo_pb.ts:2445](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/users.scailo_pb.ts#L2445)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`UsersServicePasswordResetReq`](UsersServicePasswordResetReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`UsersServicePasswordResetReq`](UsersServicePasswordResetReq.md)

#### Defined in

[src/users.scailo_pb.ts:2449](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/users.scailo_pb.ts#L2449)
