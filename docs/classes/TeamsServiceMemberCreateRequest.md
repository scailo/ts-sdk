[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / TeamsServiceMemberCreateRequest

# Class: TeamsServiceMemberCreateRequest

Describes the parameters required to add a member to a team

**`Generated`**

from message Scailo.TeamsServiceMemberCreateRequest

## Hierarchy

- `Message`\<[`TeamsServiceMemberCreateRequest`](TeamsServiceMemberCreateRequest.md)\>

  ↳ **`TeamsServiceMemberCreateRequest`**

## Table of contents

### Constructors

- [constructor](TeamsServiceMemberCreateRequest.md#constructor)

### Properties

- [teamId](TeamsServiceMemberCreateRequest.md#teamid)
- [userComment](TeamsServiceMemberCreateRequest.md#usercomment)
- [userId](TeamsServiceMemberCreateRequest.md#userid)
- [fields](TeamsServiceMemberCreateRequest.md#fields)
- [runtime](TeamsServiceMemberCreateRequest.md#runtime)
- [typeName](TeamsServiceMemberCreateRequest.md#typename)

### Methods

- [clone](TeamsServiceMemberCreateRequest.md#clone)
- [equals](TeamsServiceMemberCreateRequest.md#equals)
- [fromBinary](TeamsServiceMemberCreateRequest.md#frombinary)
- [fromJson](TeamsServiceMemberCreateRequest.md#fromjson)
- [fromJsonString](TeamsServiceMemberCreateRequest.md#fromjsonstring)
- [getType](TeamsServiceMemberCreateRequest.md#gettype)
- [toBinary](TeamsServiceMemberCreateRequest.md#tobinary)
- [toJSON](TeamsServiceMemberCreateRequest.md#tojson)
- [toJson](TeamsServiceMemberCreateRequest.md#tojson-1)
- [toJsonString](TeamsServiceMemberCreateRequest.md#tojsonstring)
- [equals](TeamsServiceMemberCreateRequest.md#equals-1)
- [fromBinary](TeamsServiceMemberCreateRequest.md#frombinary-1)
- [fromJson](TeamsServiceMemberCreateRequest.md#fromjson-1)
- [fromJsonString](TeamsServiceMemberCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new TeamsServiceMemberCreateRequest**(`data?`): [`TeamsServiceMemberCreateRequest`](TeamsServiceMemberCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`TeamsServiceMemberCreateRequest`](TeamsServiceMemberCreateRequest.md)\> |

#### Returns

[`TeamsServiceMemberCreateRequest`](TeamsServiceMemberCreateRequest.md)

#### Overrides

Message\&lt;TeamsServiceMemberCreateRequest\&gt;.constructor

#### Defined in

[src/teams.scailo_pb.ts:557](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/teams.scailo_pb.ts#L557)

## Properties

### teamId

• **teamId**: `bigint` = `protoInt64.zero`

Stores the ID of the team

**`Generated`**

from field: uint64 team_id = 10;

#### Defined in

[src/teams.scailo_pb.ts:548](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/teams.scailo_pb.ts#L548)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/teams.scailo_pb.ts:541](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/teams.scailo_pb.ts#L541)

___

### userId

• **userId**: `bigint` = `protoInt64.zero`

The ID of the user that is part of the team

**`Generated`**

from field: uint64 user_id = 11;

#### Defined in

[src/teams.scailo_pb.ts:555](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/teams.scailo_pb.ts#L555)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/teams.scailo_pb.ts:564](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/teams.scailo_pb.ts#L564)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/teams.scailo_pb.ts:562](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/teams.scailo_pb.ts#L562)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.TeamsServiceMemberCreateRequest"``

#### Defined in

[src/teams.scailo_pb.ts:563](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/teams.scailo_pb.ts#L563)

## Methods

### clone

▸ **clone**(): [`TeamsServiceMemberCreateRequest`](TeamsServiceMemberCreateRequest.md)

Create a deep copy.

#### Returns

[`TeamsServiceMemberCreateRequest`](TeamsServiceMemberCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`TeamsServiceMemberCreateRequest`](TeamsServiceMemberCreateRequest.md) \| `PlainMessage`\<[`TeamsServiceMemberCreateRequest`](TeamsServiceMemberCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`TeamsServiceMemberCreateRequest`](TeamsServiceMemberCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`TeamsServiceMemberCreateRequest`](TeamsServiceMemberCreateRequest.md)\>

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
| `a` | `undefined` \| [`TeamsServiceMemberCreateRequest`](TeamsServiceMemberCreateRequest.md) \| `PlainMessage`\<[`TeamsServiceMemberCreateRequest`](TeamsServiceMemberCreateRequest.md)\> |
| `b` | `undefined` \| [`TeamsServiceMemberCreateRequest`](TeamsServiceMemberCreateRequest.md) \| `PlainMessage`\<[`TeamsServiceMemberCreateRequest`](TeamsServiceMemberCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/teams.scailo_pb.ts:582](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/teams.scailo_pb.ts#L582)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`TeamsServiceMemberCreateRequest`](TeamsServiceMemberCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`TeamsServiceMemberCreateRequest`](TeamsServiceMemberCreateRequest.md)

#### Defined in

[src/teams.scailo_pb.ts:570](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/teams.scailo_pb.ts#L570)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`TeamsServiceMemberCreateRequest`](TeamsServiceMemberCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`TeamsServiceMemberCreateRequest`](TeamsServiceMemberCreateRequest.md)

#### Defined in

[src/teams.scailo_pb.ts:574](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/teams.scailo_pb.ts#L574)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`TeamsServiceMemberCreateRequest`](TeamsServiceMemberCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`TeamsServiceMemberCreateRequest`](TeamsServiceMemberCreateRequest.md)

#### Defined in

[src/teams.scailo_pb.ts:578](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/teams.scailo_pb.ts#L578)
