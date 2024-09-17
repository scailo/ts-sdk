[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / TeamsServiceUpdateRequest

# Class: TeamsServiceUpdateRequest

Describes the parameters necessary to update a record

**`Generated`**

from message Scailo.TeamsServiceUpdateRequest

## Hierarchy

- `Message`\<[`TeamsServiceUpdateRequest`](TeamsServiceUpdateRequest.md)\>

  ↳ **`TeamsServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](TeamsServiceUpdateRequest.md#constructor)

### Properties

- [code](TeamsServiceUpdateRequest.md#code)
- [description](TeamsServiceUpdateRequest.md#description)
- [id](TeamsServiceUpdateRequest.md#id)
- [leadUserId](TeamsServiceUpdateRequest.md#leaduserid)
- [name](TeamsServiceUpdateRequest.md#name)
- [notifyUsers](TeamsServiceUpdateRequest.md#notifyusers)
- [userComment](TeamsServiceUpdateRequest.md#usercomment)
- [vaultFolderId](TeamsServiceUpdateRequest.md#vaultfolderid)
- [fields](TeamsServiceUpdateRequest.md#fields)
- [runtime](TeamsServiceUpdateRequest.md#runtime)
- [typeName](TeamsServiceUpdateRequest.md#typename)

### Methods

- [clone](TeamsServiceUpdateRequest.md#clone)
- [equals](TeamsServiceUpdateRequest.md#equals)
- [fromBinary](TeamsServiceUpdateRequest.md#frombinary)
- [fromJson](TeamsServiceUpdateRequest.md#fromjson)
- [fromJsonString](TeamsServiceUpdateRequest.md#fromjsonstring)
- [getType](TeamsServiceUpdateRequest.md#gettype)
- [toBinary](TeamsServiceUpdateRequest.md#tobinary)
- [toJSON](TeamsServiceUpdateRequest.md#tojson)
- [toJson](TeamsServiceUpdateRequest.md#tojson-1)
- [toJsonString](TeamsServiceUpdateRequest.md#tojsonstring)
- [equals](TeamsServiceUpdateRequest.md#equals-1)
- [fromBinary](TeamsServiceUpdateRequest.md#frombinary-1)
- [fromJson](TeamsServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](TeamsServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new TeamsServiceUpdateRequest**(`data?`): [`TeamsServiceUpdateRequest`](TeamsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`TeamsServiceUpdateRequest`](TeamsServiceUpdateRequest.md)\> |

#### Returns

[`TeamsServiceUpdateRequest`](TeamsServiceUpdateRequest.md)

#### Overrides

Message\&lt;TeamsServiceUpdateRequest\&gt;.constructor

#### Defined in

src/teams.scailo_pb.ts:364

## Properties

### code

• **code**: `string` = `""`

The code of the team

**`Generated`**

from field: string code = 11;

#### Defined in

src/teams.scailo_pb.ts:348

___

### description

• **description**: `string` = `""`

The description of the team

**`Generated`**

from field: string description = 13;

#### Defined in

src/teams.scailo_pb.ts:362

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record that needs to be updated

**`Generated`**

from field: uint64 id = 2;

#### Defined in

src/teams.scailo_pb.ts:320

___

### leadUserId

• **leadUserId**: `bigint` = `protoInt64.zero`

The ID of the user who is the team lead of this team

**`Generated`**

from field: uint64 lead_user_id = 12;

#### Defined in

src/teams.scailo_pb.ts:355

___

### name

• **name**: `string` = `""`

The name of the team

**`Generated`**

from field: string name = 10;

#### Defined in

src/teams.scailo_pb.ts:341

___

### notifyUsers

• **notifyUsers**: `boolean` = `false`

Optional boolean value that stores if a notification needs to be sent to users about the update to the record. This is useful when a subsequent operation needs to be performed immediately (such as send to verification after updating the revision)

**`Generated`**

from field: bool notify_users = 3;

#### Defined in

src/teams.scailo_pb.ts:327

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/teams.scailo_pb.ts:313

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

src/teams.scailo_pb.ts:334

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/teams.scailo_pb.ts:371

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/teams.scailo_pb.ts:369

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.TeamsServiceUpdateRequest"``

#### Defined in

src/teams.scailo_pb.ts:370

## Methods

### clone

▸ **clone**(): [`TeamsServiceUpdateRequest`](TeamsServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`TeamsServiceUpdateRequest`](TeamsServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`TeamsServiceUpdateRequest`](TeamsServiceUpdateRequest.md) \| `PlainMessage`\<[`TeamsServiceUpdateRequest`](TeamsServiceUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`TeamsServiceUpdateRequest`](TeamsServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`TeamsServiceUpdateRequest`](TeamsServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`TeamsServiceUpdateRequest`](TeamsServiceUpdateRequest.md) \| `PlainMessage`\<[`TeamsServiceUpdateRequest`](TeamsServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`TeamsServiceUpdateRequest`](TeamsServiceUpdateRequest.md) \| `PlainMessage`\<[`TeamsServiceUpdateRequest`](TeamsServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/teams.scailo_pb.ts:394

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`TeamsServiceUpdateRequest`](TeamsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`TeamsServiceUpdateRequest`](TeamsServiceUpdateRequest.md)

#### Defined in

src/teams.scailo_pb.ts:382

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`TeamsServiceUpdateRequest`](TeamsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`TeamsServiceUpdateRequest`](TeamsServiceUpdateRequest.md)

#### Defined in

src/teams.scailo_pb.ts:386

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`TeamsServiceUpdateRequest`](TeamsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`TeamsServiceUpdateRequest`](TeamsServiceUpdateRequest.md)

#### Defined in

src/teams.scailo_pb.ts:390
