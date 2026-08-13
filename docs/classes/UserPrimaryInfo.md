[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / UserPrimaryInfo

# Class: UserPrimaryInfo

Micro-structure utilized strictly for internal authentication, identity verification, and cryptographic evaluation.
This message isolates sensitive credential states, role matrices, Multi-Factor Authentication (MFA) secrets,
and critical baseline attributes required to securely issue session tokens.

**Security Warning:** This message handles raw cryptographic data and password hashes. It must never
be exposed directly to public-facing edge services or untrusted client layers.

**`Generated`**

from message Scailo.UserPrimaryInfo

## Hierarchy

- `Message`\<[`UserPrimaryInfo`](UserPrimaryInfo.md)\>

  ↳ **`UserPrimaryInfo`**

## Table of contents

### Constructors

- [constructor](UserPrimaryInfo.md#constructor)

### Properties

- [bloodGroup](UserPrimaryInfo.md#bloodgroup)
- [mfaSecret](UserPrimaryInfo.md#mfasecret)
- [mfaStatus](UserPrimaryInfo.md#mfastatus)
- [mobileRoleId](UserPrimaryInfo.md#mobileroleid)
- [name](UserPrimaryInfo.md#name)
- [password](UserPrimaryInfo.md#password)
- [roleId](UserPrimaryInfo.md#roleid)
- [userType](UserPrimaryInfo.md#usertype)
- [username](UserPrimaryInfo.md#username)
- [fields](UserPrimaryInfo.md#fields)
- [runtime](UserPrimaryInfo.md#runtime)
- [typeName](UserPrimaryInfo.md#typename)

### Methods

- [clone](UserPrimaryInfo.md#clone)
- [equals](UserPrimaryInfo.md#equals)
- [fromBinary](UserPrimaryInfo.md#frombinary)
- [fromJson](UserPrimaryInfo.md#fromjson)
- [fromJsonString](UserPrimaryInfo.md#fromjsonstring)
- [getType](UserPrimaryInfo.md#gettype)
- [toBinary](UserPrimaryInfo.md#tobinary)
- [toJSON](UserPrimaryInfo.md#tojson)
- [toJson](UserPrimaryInfo.md#tojson-1)
- [toJsonString](UserPrimaryInfo.md#tojsonstring)
- [equals](UserPrimaryInfo.md#equals-1)
- [fromBinary](UserPrimaryInfo.md#frombinary-1)
- [fromJson](UserPrimaryInfo.md#fromjson-1)
- [fromJsonString](UserPrimaryInfo.md#fromjsonstring-1)

## Constructors

### constructor

• **new UserPrimaryInfo**(`data?`): [`UserPrimaryInfo`](UserPrimaryInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`UserPrimaryInfo`](UserPrimaryInfo.md)\> |

#### Returns

[`UserPrimaryInfo`](UserPrimaryInfo.md)

#### Overrides

Message\&lt;UserPrimaryInfo\&gt;.constructor

#### Defined in

[src/users.scailo_pb.ts:1706](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/users.scailo_pb.ts#L1706)

## Properties

### bloodGroup

• **bloodGroup**: `string` = `""`

**`Description`**

Medical identifier indicating the user's legal ABO blood group for emergency or corporate wellness logs.

**`Example`**

```ts
"O+"
```

**`Generated`**

from field: string blood_group = 20;

#### Defined in

[src/users.scailo_pb.ts:1704](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/users.scailo_pb.ts#L1704)

___

### mfaSecret

• **mfaSecret**: `Uint8Array`

**`Description`**

The encrypted or raw binary cryptographic secret used to evaluate Time-Based One-Time Password (TOTP) seed structures during verification loops.

**`Example`**

```ts
"\x4e\x58\x57\x32\x4d\x34\x33\x55..."
```

**`Format`**

Sensitive byte array. Access must remain strictly isolated within internal authentication boundaries.

**`Generated`**

from field: bytes mfa_secret = 16;

#### Defined in

[src/users.scailo_pb.ts:1694](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/users.scailo_pb.ts#L1694)

___

### mfaStatus

• **mfaStatus**: `boolean` = `false`

**`Description`**

Security flag determining whether Multi-Factor Authentication (MFA) has been explicitly provisioned and enabled for this user account.

**`Example`**

```ts
true
```

**`Format`**

Boolean value (`true` or `false`).

**`Generated`**

from field: bool mfa_status = 15;

#### Defined in

[src/users.scailo_pb.ts:1682](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/users.scailo_pb.ts#L1682)

___

### mobileRoleId

• **mobileRoleId**: `bigint` = `protoInt64.zero`

**`Description`**

The unique internal identifier of a secondary security role tailored exclusively for mobile application endpoints.

**`Example`**

```ts
2048
```

**`Generated`**

from field: uint64 mobile_role_id = 14;

#### Defined in

[src/users.scailo_pb.ts:1670](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/users.scailo_pb.ts#L1670)

___

### name

• **name**: `string` = `""`

**`Description`**

The official or full legal name of the user as recognized on statutory documentation.

**`Example`**

```ts
"Jane Doe"
```

**`Generated`**

from field: string name = 11;

#### Defined in

[src/users.scailo_pb.ts:1638](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/users.scailo_pb.ts#L1638)

___

### password

• **password**: `Uint8Array`

**`Description`**

The securely salted and compiled binary representation of the user's password hash.

**`Example`**

```ts
"\x24\x32\x61\x24\x31\x32\x24\x4b\x53..."
```

**`Format`**

Byte array containing the evaluated cryptographic digest (e.g., bcrypt payload).

**`Generated`**

from field: bytes password = 12;

#### Defined in

[src/users.scailo_pb.ts:1650](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/users.scailo_pb.ts#L1650)

___

### roleId

• **roleId**: `bigint` = `protoInt64.zero`

**`Description`**

The unique internal identifier of the primary web application access or RBAC security role.

**`Example`**

```ts
1024
```

**`Generated`**

from field: uint64 role_id = 13;

#### Defined in

[src/users.scailo_pb.ts:1660](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/users.scailo_pb.ts#L1660)

___

### userType

• **userType**: [`USER_TYPE`](../enums/USER_TYPE.md) = `USER_TYPE.USER_TYPE_ANY_UNSPECIFIED`

**`Description`**

The categorical classification of the user entity determining their system scope and behavioral rules.

**`Example`**

```ts
USER_TYPE_EMPLOYEE
```

**`Generated`**

from field: Scailo.USER_TYPE user_type = 7;

#### Defined in

[src/users.scailo_pb.ts:1618](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/users.scailo_pb.ts#L1618)

___

### username

• **username**: `string` = `""`

**`Description`**

The unique system-level login alias used by the actor to authenticate against the platform.

**`Example`**

```ts
"jane.doe"
```

**`Generated`**

from field: string username = 10;

#### Defined in

[src/users.scailo_pb.ts:1628](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/users.scailo_pb.ts#L1628)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/users.scailo_pb.ts:1713](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/users.scailo_pb.ts#L1713)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/users.scailo_pb.ts:1711](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/users.scailo_pb.ts#L1711)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.UserPrimaryInfo"``

#### Defined in

[src/users.scailo_pb.ts:1712](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/users.scailo_pb.ts#L1712)

## Methods

### clone

▸ **clone**(): [`UserPrimaryInfo`](UserPrimaryInfo.md)

Create a deep copy.

#### Returns

[`UserPrimaryInfo`](UserPrimaryInfo.md)

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
| `other` | `undefined` \| ``null`` \| [`UserPrimaryInfo`](UserPrimaryInfo.md) \| `PlainMessage`\<[`UserPrimaryInfo`](UserPrimaryInfo.md)\> |

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

▸ **getType**(): `MessageType`\<[`UserPrimaryInfo`](UserPrimaryInfo.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`UserPrimaryInfo`](UserPrimaryInfo.md)\>

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
| `a` | `undefined` \| [`UserPrimaryInfo`](UserPrimaryInfo.md) \| `PlainMessage`\<[`UserPrimaryInfo`](UserPrimaryInfo.md)\> |
| `b` | `undefined` \| [`UserPrimaryInfo`](UserPrimaryInfo.md) \| `PlainMessage`\<[`UserPrimaryInfo`](UserPrimaryInfo.md)\> |

#### Returns

`boolean`

#### Defined in

[src/users.scailo_pb.ts:1737](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/users.scailo_pb.ts#L1737)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`UserPrimaryInfo`](UserPrimaryInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`UserPrimaryInfo`](UserPrimaryInfo.md)

#### Defined in

[src/users.scailo_pb.ts:1725](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/users.scailo_pb.ts#L1725)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`UserPrimaryInfo`](UserPrimaryInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`UserPrimaryInfo`](UserPrimaryInfo.md)

#### Defined in

[src/users.scailo_pb.ts:1729](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/users.scailo_pb.ts#L1729)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`UserPrimaryInfo`](UserPrimaryInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`UserPrimaryInfo`](UserPrimaryInfo.md)

#### Defined in

[src/users.scailo_pb.ts:1733](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/users.scailo_pb.ts#L1733)
