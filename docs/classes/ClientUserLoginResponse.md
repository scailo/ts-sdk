[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / ClientUserLoginResponse

# Class: ClientUserLoginResponse

Describes the response to a client user login request

**`Generated`**

from message Scailo.ClientUserLoginResponse

## Hierarchy

- `Message`\<[`ClientUserLoginResponse`](ClientUserLoginResponse.md)\>

  ↳ **`ClientUserLoginResponse`**

## Table of contents

### Constructors

- [constructor](ClientUserLoginResponse.md#constructor)

### Properties

- [authToken](ClientUserLoginResponse.md#authtoken)
- [clientUuid](ClientUserLoginResponse.md#clientuuid)
- [expiresAt](ClientUserLoginResponse.md#expiresat)
- [username](ClientUserLoginResponse.md#username)
- [fields](ClientUserLoginResponse.md#fields)
- [runtime](ClientUserLoginResponse.md#runtime)
- [typeName](ClientUserLoginResponse.md#typename)

### Methods

- [clone](ClientUserLoginResponse.md#clone)
- [equals](ClientUserLoginResponse.md#equals)
- [fromBinary](ClientUserLoginResponse.md#frombinary)
- [fromJson](ClientUserLoginResponse.md#fromjson)
- [fromJsonString](ClientUserLoginResponse.md#fromjsonstring)
- [getType](ClientUserLoginResponse.md#gettype)
- [toBinary](ClientUserLoginResponse.md#tobinary)
- [toJSON](ClientUserLoginResponse.md#tojson)
- [toJson](ClientUserLoginResponse.md#tojson-1)
- [toJsonString](ClientUserLoginResponse.md#tojsonstring)
- [equals](ClientUserLoginResponse.md#equals-1)
- [fromBinary](ClientUserLoginResponse.md#frombinary-1)
- [fromJson](ClientUserLoginResponse.md#fromjson-1)
- [fromJsonString](ClientUserLoginResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new ClientUserLoginResponse**(`data?`): [`ClientUserLoginResponse`](ClientUserLoginResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ClientUserLoginResponse`](ClientUserLoginResponse.md)\> |

#### Returns

[`ClientUserLoginResponse`](ClientUserLoginResponse.md)

#### Overrides

Message\&lt;ClientUserLoginResponse\&gt;.constructor

#### Defined in

src/logins.scailo_pb.ts:461

## Properties

### authToken

• **authToken**: `string` = `""`

The token that needs to be used as part of every request

**`Generated`**

from field: string auth_token = 2;

#### Defined in

src/logins.scailo_pb.ts:445

___

### clientUuid

• **clientUuid**: `string` = `""`

The UUID of the client

**`Generated`**

from field: string client_uuid = 10;

#### Defined in

src/logins.scailo_pb.ts:459

___

### expiresAt

• **expiresAt**: `bigint` = `protoInt64.zero`

The unix timestamp after which the auth_token is invalid

**`Generated`**

from field: uint64 expires_at = 3;

#### Defined in

src/logins.scailo_pb.ts:452

___

### username

• **username**: `string` = `""`

Username of the user that just logged in

**`Generated`**

from field: string username = 1;

#### Defined in

src/logins.scailo_pb.ts:438

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/logins.scailo_pb.ts:468

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/logins.scailo_pb.ts:466

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ClientUserLoginResponse"``

#### Defined in

src/logins.scailo_pb.ts:467

## Methods

### clone

▸ **clone**(): [`ClientUserLoginResponse`](ClientUserLoginResponse.md)

Create a deep copy.

#### Returns

[`ClientUserLoginResponse`](ClientUserLoginResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`ClientUserLoginResponse`](ClientUserLoginResponse.md) \| `PlainMessage`\<[`ClientUserLoginResponse`](ClientUserLoginResponse.md)\> |

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

▸ **getType**(): `MessageType`\<[`ClientUserLoginResponse`](ClientUserLoginResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ClientUserLoginResponse`](ClientUserLoginResponse.md)\>

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
| `a` | `undefined` \| [`ClientUserLoginResponse`](ClientUserLoginResponse.md) \| `PlainMessage`\<[`ClientUserLoginResponse`](ClientUserLoginResponse.md)\> |
| `b` | `undefined` \| [`ClientUserLoginResponse`](ClientUserLoginResponse.md) \| `PlainMessage`\<[`ClientUserLoginResponse`](ClientUserLoginResponse.md)\> |

#### Returns

`boolean`

#### Defined in

src/logins.scailo_pb.ts:487

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ClientUserLoginResponse`](ClientUserLoginResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ClientUserLoginResponse`](ClientUserLoginResponse.md)

#### Defined in

src/logins.scailo_pb.ts:475

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ClientUserLoginResponse`](ClientUserLoginResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ClientUserLoginResponse`](ClientUserLoginResponse.md)

#### Defined in

src/logins.scailo_pb.ts:479

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ClientUserLoginResponse`](ClientUserLoginResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ClientUserLoginResponse`](ClientUserLoginResponse.md)

#### Defined in

src/logins.scailo_pb.ts:483
