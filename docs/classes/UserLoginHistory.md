[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / UserLoginHistory

# Class: UserLoginHistory

Stores the user login history

**`Generated`**

from message Scailo.UserLoginHistory

## Hierarchy

- `Message`\<[`UserLoginHistory`](UserLoginHistory.md)\>

  ↳ **`UserLoginHistory`**

## Table of contents

### Constructors

- [constructor](UserLoginHistory.md#constructor)

### Properties

- [entityUuid](UserLoginHistory.md#entityuuid)
- [expiresAt](UserLoginHistory.md#expiresat)
- [ipAddr](UserLoginHistory.md#ipaddr)
- [metadata](UserLoginHistory.md#metadata)
- [urlScheme](UserLoginHistory.md#urlscheme)
- [username](UserLoginHistory.md#username)
- [fields](UserLoginHistory.md#fields)
- [runtime](UserLoginHistory.md#runtime)
- [typeName](UserLoginHistory.md#typename)

### Methods

- [clone](UserLoginHistory.md#clone)
- [equals](UserLoginHistory.md#equals)
- [fromBinary](UserLoginHistory.md#frombinary)
- [fromJson](UserLoginHistory.md#fromjson)
- [fromJsonString](UserLoginHistory.md#fromjsonstring)
- [getType](UserLoginHistory.md#gettype)
- [toBinary](UserLoginHistory.md#tobinary)
- [toJSON](UserLoginHistory.md#tojson)
- [toJson](UserLoginHistory.md#tojson-1)
- [toJsonString](UserLoginHistory.md#tojsonstring)
- [equals](UserLoginHistory.md#equals-1)
- [fromBinary](UserLoginHistory.md#frombinary-1)
- [fromJson](UserLoginHistory.md#fromjson-1)
- [fromJsonString](UserLoginHistory.md#fromjsonstring-1)

## Constructors

### constructor

• **new UserLoginHistory**(`data?`): [`UserLoginHistory`](UserLoginHistory.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`UserLoginHistory`](UserLoginHistory.md)\> |

#### Returns

[`UserLoginHistory`](UserLoginHistory.md)

#### Overrides

Message\&lt;UserLoginHistory\&gt;.constructor

#### Defined in

src/login.scailo_pb.ts:285

## Properties

### entityUuid

• **entityUuid**: `string` = `""`

Storages a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/login.scailo_pb.ts:248

___

### expiresAt

• **expiresAt**: `bigint` = `protoInt64.zero`

The expiry timestamp

**`Generated`**

from field: uint64 expires_at = 13;

#### Defined in

src/login.scailo_pb.ts:283

___

### ipAddr

• **ipAddr**: `string` = `""`

The IP address

**`Generated`**

from field: string ip_addr = 12;

#### Defined in

src/login.scailo_pb.ts:276

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Storages the metadata of this storage

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

src/login.scailo_pb.ts:255

___

### urlScheme

• **urlScheme**: `string` = `""`

The URL scheme

**`Generated`**

from field: string url_scheme = 10;

#### Defined in

src/login.scailo_pb.ts:262

___

### username

• **username**: `string` = `""`

The username

**`Generated`**

from field: string username = 11;

#### Defined in

src/login.scailo_pb.ts:269

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/login.scailo_pb.ts:292

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/login.scailo_pb.ts:290

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.UserLoginHistory"``

#### Defined in

src/login.scailo_pb.ts:291

## Methods

### clone

▸ **clone**(): [`UserLoginHistory`](UserLoginHistory.md)

Create a deep copy.

#### Returns

[`UserLoginHistory`](UserLoginHistory.md)

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
| `other` | `undefined` \| ``null`` \| [`UserLoginHistory`](UserLoginHistory.md) \| `PlainMessage`\<[`UserLoginHistory`](UserLoginHistory.md)\> |

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

▸ **getType**(): `MessageType`\<[`UserLoginHistory`](UserLoginHistory.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`UserLoginHistory`](UserLoginHistory.md)\>

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
| `a` | `undefined` \| [`UserLoginHistory`](UserLoginHistory.md) \| `PlainMessage`\<[`UserLoginHistory`](UserLoginHistory.md)\> |
| `b` | `undefined` \| [`UserLoginHistory`](UserLoginHistory.md) \| `PlainMessage`\<[`UserLoginHistory`](UserLoginHistory.md)\> |

#### Returns

`boolean`

#### Defined in

src/login.scailo_pb.ts:313

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`UserLoginHistory`](UserLoginHistory.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`UserLoginHistory`](UserLoginHistory.md)

#### Defined in

src/login.scailo_pb.ts:301

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`UserLoginHistory`](UserLoginHistory.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`UserLoginHistory`](UserLoginHistory.md)

#### Defined in

src/login.scailo_pb.ts:305

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`UserLoginHistory`](UserLoginHistory.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`UserLoginHistory`](UserLoginHistory.md)

#### Defined in

src/login.scailo_pb.ts:309
