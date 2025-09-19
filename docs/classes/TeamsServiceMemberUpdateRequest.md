[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / TeamsServiceMemberUpdateRequest

# Class: TeamsServiceMemberUpdateRequest

Describes the parameters required to update a member in a team

**`Generated`**

from message Scailo.TeamsServiceMemberUpdateRequest

## Hierarchy

- `Message`\<[`TeamsServiceMemberUpdateRequest`](TeamsServiceMemberUpdateRequest.md)\>

  ↳ **`TeamsServiceMemberUpdateRequest`**

## Table of contents

### Constructors

- [constructor](TeamsServiceMemberUpdateRequest.md#constructor)

### Properties

- [id](TeamsServiceMemberUpdateRequest.md#id)
- [userComment](TeamsServiceMemberUpdateRequest.md#usercomment)
- [fields](TeamsServiceMemberUpdateRequest.md#fields)
- [runtime](TeamsServiceMemberUpdateRequest.md#runtime)
- [typeName](TeamsServiceMemberUpdateRequest.md#typename)

### Methods

- [clone](TeamsServiceMemberUpdateRequest.md#clone)
- [equals](TeamsServiceMemberUpdateRequest.md#equals)
- [fromBinary](TeamsServiceMemberUpdateRequest.md#frombinary)
- [fromJson](TeamsServiceMemberUpdateRequest.md#fromjson)
- [fromJsonString](TeamsServiceMemberUpdateRequest.md#fromjsonstring)
- [getType](TeamsServiceMemberUpdateRequest.md#gettype)
- [toBinary](TeamsServiceMemberUpdateRequest.md#tobinary)
- [toJSON](TeamsServiceMemberUpdateRequest.md#tojson)
- [toJson](TeamsServiceMemberUpdateRequest.md#tojson-1)
- [toJsonString](TeamsServiceMemberUpdateRequest.md#tojsonstring)
- [equals](TeamsServiceMemberUpdateRequest.md#equals-1)
- [fromBinary](TeamsServiceMemberUpdateRequest.md#frombinary-1)
- [fromJson](TeamsServiceMemberUpdateRequest.md#fromjson-1)
- [fromJsonString](TeamsServiceMemberUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new TeamsServiceMemberUpdateRequest**(`data?`): [`TeamsServiceMemberUpdateRequest`](TeamsServiceMemberUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`TeamsServiceMemberUpdateRequest`](TeamsServiceMemberUpdateRequest.md)\> |

#### Returns

[`TeamsServiceMemberUpdateRequest`](TeamsServiceMemberUpdateRequest.md)

#### Overrides

Message\&lt;TeamsServiceMemberUpdateRequest\&gt;.constructor

#### Defined in

[src/teams.scailo_pb.ts:608](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/teams.scailo_pb.ts#L608)

## Properties

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record

**`Generated`**

from field: uint64 id = 2;

#### Defined in

[src/teams.scailo_pb.ts:606](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/teams.scailo_pb.ts#L606)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/teams.scailo_pb.ts:599](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/teams.scailo_pb.ts#L599)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/teams.scailo_pb.ts:615](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/teams.scailo_pb.ts#L615)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/teams.scailo_pb.ts:613](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/teams.scailo_pb.ts#L613)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.TeamsServiceMemberUpdateRequest"``

#### Defined in

[src/teams.scailo_pb.ts:614](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/teams.scailo_pb.ts#L614)

## Methods

### clone

▸ **clone**(): [`TeamsServiceMemberUpdateRequest`](TeamsServiceMemberUpdateRequest.md)

Create a deep copy.

#### Returns

[`TeamsServiceMemberUpdateRequest`](TeamsServiceMemberUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`TeamsServiceMemberUpdateRequest`](TeamsServiceMemberUpdateRequest.md) \| `PlainMessage`\<[`TeamsServiceMemberUpdateRequest`](TeamsServiceMemberUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`TeamsServiceMemberUpdateRequest`](TeamsServiceMemberUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`TeamsServiceMemberUpdateRequest`](TeamsServiceMemberUpdateRequest.md)\>

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
| `a` | `undefined` \| [`TeamsServiceMemberUpdateRequest`](TeamsServiceMemberUpdateRequest.md) \| `PlainMessage`\<[`TeamsServiceMemberUpdateRequest`](TeamsServiceMemberUpdateRequest.md)\> |
| `b` | `undefined` \| [`TeamsServiceMemberUpdateRequest`](TeamsServiceMemberUpdateRequest.md) \| `PlainMessage`\<[`TeamsServiceMemberUpdateRequest`](TeamsServiceMemberUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/teams.scailo_pb.ts:632](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/teams.scailo_pb.ts#L632)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`TeamsServiceMemberUpdateRequest`](TeamsServiceMemberUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`TeamsServiceMemberUpdateRequest`](TeamsServiceMemberUpdateRequest.md)

#### Defined in

[src/teams.scailo_pb.ts:620](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/teams.scailo_pb.ts#L620)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`TeamsServiceMemberUpdateRequest`](TeamsServiceMemberUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`TeamsServiceMemberUpdateRequest`](TeamsServiceMemberUpdateRequest.md)

#### Defined in

[src/teams.scailo_pb.ts:624](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/teams.scailo_pb.ts#L624)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`TeamsServiceMemberUpdateRequest`](TeamsServiceMemberUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`TeamsServiceMemberUpdateRequest`](TeamsServiceMemberUpdateRequest.md)

#### Defined in

[src/teams.scailo_pb.ts:628](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/teams.scailo_pb.ts#L628)
