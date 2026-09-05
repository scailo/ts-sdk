[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / UsersServicePasswordResetReq

# Class: UsersServicePasswordResetReq

Request message used to safely initiate an asynchronous user password recovery and reset sequence via email.

**Side Effects:**
- Generates a secure, short-lived single-use cryptographic verification token.
- Dispatches a automated recovery email containing a deep-linked "magic link" to the user's primary registered address.

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

[src/users.scailo_pb.ts:3439](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/users.scailo_pb.ts#L3439)

## Properties

### domainPrefix

• `Optional` **domainPrefix**: `string`

**`Optional`**

**`Description`**

A custom domain prefix or external FQDN string used to override standard redirect endpoints when constructing the recovery link.

**`Example`**

```ts
"https://users.acme.com/auth/reset"
```

**`Regex`**

.*

**`Format`**

If omitted, the system defaults to the pre-configured authless gateway domain. Highly recommended when integrating white-labeled portals.

**`Generated`**

from field: optional string domain_prefix = 20;

#### Defined in

[src/users.scailo_pb.ts:3437](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/users.scailo_pb.ts#L3437)

___

### username

• **username**: `string` = `""`

**`Mandatory`**

**`Description`**

The unique system-level login alias matching the account requiring a password recovery event.

**`Example`**

```ts
"jane.doe"
```

**`Regex`**

.+

**`Format`**

Must be a non-empty string.

**`Generated`**

from field: string username = 10;

#### Defined in

[src/users.scailo_pb.ts:3421](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/users.scailo_pb.ts#L3421)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/users.scailo_pb.ts:3446](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/users.scailo_pb.ts#L3446)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/users.scailo_pb.ts:3444](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/users.scailo_pb.ts#L3444)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.UsersServicePasswordResetReq"``

#### Defined in

[src/users.scailo_pb.ts:3445](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/users.scailo_pb.ts#L3445)

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

[src/users.scailo_pb.ts:3463](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/users.scailo_pb.ts#L3463)

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

[src/users.scailo_pb.ts:3451](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/users.scailo_pb.ts#L3451)

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

[src/users.scailo_pb.ts:3455](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/users.scailo_pb.ts#L3455)

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

[src/users.scailo_pb.ts:3459](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/users.scailo_pb.ts#L3459)
