[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / UserPrimaryInfo

# Class: UserPrimaryInfo

Describes the message that is used internally to validate user

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

src/users.scailo_pb.ts:1053

## Properties

### bloodGroup

• **bloodGroup**: `string` = `""`

THe Blood Group of the user

**`Generated`**

from field: string blood_group = 20;

#### Defined in

src/users.scailo_pb.ts:1051

___

### mfaSecret

• **mfaSecret**: `Uint8Array`

Stores the MFA secret

**`Generated`**

from field: bytes mfa_secret = 16;

#### Defined in

src/users.scailo_pb.ts:1044

___

### mfaStatus

• **mfaStatus**: `boolean` = `false`

Stores if MFA has been enabled by the user

**`Generated`**

from field: bool mfa_status = 15;

#### Defined in

src/users.scailo_pb.ts:1037

___

### mobileRoleId

• **mobileRoleId**: `bigint` = `protoInt64.zero`

The associated mobile role ID

**`Generated`**

from field: uint64 mobile_role_id = 14;

#### Defined in

src/users.scailo_pb.ts:1030

___

### name

• **name**: `string` = `""`

The name of the user

**`Generated`**

from field: string name = 11;

#### Defined in

src/users.scailo_pb.ts:1009

___

### password

• **password**: `Uint8Array`

Stores the hashed password

**`Generated`**

from field: bytes password = 12;

#### Defined in

src/users.scailo_pb.ts:1016

___

### roleId

• **roleId**: `bigint` = `protoInt64.zero`

The associated role ID

**`Generated`**

from field: uint64 role_id = 13;

#### Defined in

src/users.scailo_pb.ts:1023

___

### userType

• **userType**: [`USER_TYPE`](../enums/USER_TYPE.md) = `USER_TYPE.USER_TYPE_ANY_UNSPECIFIED`

Stores the user type

**`Generated`**

from field: Scailo.USER_TYPE user_type = 7;

#### Defined in

src/users.scailo_pb.ts:995

___

### username

• **username**: `string` = `""`

The username of the user

**`Generated`**

from field: string username = 10;

#### Defined in

src/users.scailo_pb.ts:1002

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/users.scailo_pb.ts:1060

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/users.scailo_pb.ts:1058

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.UserPrimaryInfo"``

#### Defined in

src/users.scailo_pb.ts:1059

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

src/users.scailo_pb.ts:1084

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

src/users.scailo_pb.ts:1072

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

src/users.scailo_pb.ts:1076

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

src/users.scailo_pb.ts:1080
