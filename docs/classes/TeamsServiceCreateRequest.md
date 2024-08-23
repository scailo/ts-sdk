[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / TeamsServiceCreateRequest

# Class: TeamsServiceCreateRequest

Describes the parameters necessary to create a record

**`Generated`**

from message Scailo.TeamsServiceCreateRequest

## Hierarchy

- `Message`\<[`TeamsServiceCreateRequest`](TeamsServiceCreateRequest.md)\>

  ↳ **`TeamsServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](TeamsServiceCreateRequest.md#constructor)

### Properties

- [code](TeamsServiceCreateRequest.md#code)
- [description](TeamsServiceCreateRequest.md#description)
- [entityUuid](TeamsServiceCreateRequest.md#entityuuid)
- [leadUserId](TeamsServiceCreateRequest.md#leaduserid)
- [name](TeamsServiceCreateRequest.md#name)
- [userComment](TeamsServiceCreateRequest.md#usercomment)
- [vaultFolderId](TeamsServiceCreateRequest.md#vaultfolderid)
- [fields](TeamsServiceCreateRequest.md#fields)
- [runtime](TeamsServiceCreateRequest.md#runtime)
- [typeName](TeamsServiceCreateRequest.md#typename)

### Methods

- [clone](TeamsServiceCreateRequest.md#clone)
- [equals](TeamsServiceCreateRequest.md#equals)
- [fromBinary](TeamsServiceCreateRequest.md#frombinary)
- [fromJson](TeamsServiceCreateRequest.md#fromjson)
- [fromJsonString](TeamsServiceCreateRequest.md#fromjsonstring)
- [getType](TeamsServiceCreateRequest.md#gettype)
- [toBinary](TeamsServiceCreateRequest.md#tobinary)
- [toJSON](TeamsServiceCreateRequest.md#tojson)
- [toJson](TeamsServiceCreateRequest.md#tojson-1)
- [toJsonString](TeamsServiceCreateRequest.md#tojsonstring)
- [equals](TeamsServiceCreateRequest.md#equals-1)
- [fromBinary](TeamsServiceCreateRequest.md#frombinary-1)
- [fromJson](TeamsServiceCreateRequest.md#fromjson-1)
- [fromJsonString](TeamsServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new TeamsServiceCreateRequest**(`data?`): [`TeamsServiceCreateRequest`](TeamsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`TeamsServiceCreateRequest`](TeamsServiceCreateRequest.md)\> |

#### Returns

[`TeamsServiceCreateRequest`](TeamsServiceCreateRequest.md)

#### Overrides

Message\&lt;TeamsServiceCreateRequest\&gt;.constructor

#### Defined in

src/teams.scailo_pb.ts:267

## Properties

### code

• **code**: `string` = `""`

The code of the team

**`Generated`**

from field: string code = 11;

#### Defined in

src/teams.scailo_pb.ts:251

___

### description

• **description**: `string` = `""`

The description of the team

**`Generated`**

from field: string description = 13;

#### Defined in

src/teams.scailo_pb.ts:265

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/teams.scailo_pb.ts:223

___

### leadUserId

• **leadUserId**: `bigint` = `protoInt64.zero`

The ID of the user who is the team lead of this team

**`Generated`**

from field: uint64 lead_user_id = 12;

#### Defined in

src/teams.scailo_pb.ts:258

___

### name

• **name**: `string` = `""`

The name of the team

**`Generated`**

from field: string name = 10;

#### Defined in

src/teams.scailo_pb.ts:244

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 2;

#### Defined in

src/teams.scailo_pb.ts:230

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

src/teams.scailo_pb.ts:237

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/teams.scailo_pb.ts:274

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/teams.scailo_pb.ts:272

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.TeamsServiceCreateRequest"``

#### Defined in

src/teams.scailo_pb.ts:273

## Methods

### clone

▸ **clone**(): [`TeamsServiceCreateRequest`](TeamsServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`TeamsServiceCreateRequest`](TeamsServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`TeamsServiceCreateRequest`](TeamsServiceCreateRequest.md) \| `PlainMessage`\<[`TeamsServiceCreateRequest`](TeamsServiceCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`TeamsServiceCreateRequest`](TeamsServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`TeamsServiceCreateRequest`](TeamsServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`TeamsServiceCreateRequest`](TeamsServiceCreateRequest.md) \| `PlainMessage`\<[`TeamsServiceCreateRequest`](TeamsServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`TeamsServiceCreateRequest`](TeamsServiceCreateRequest.md) \| `PlainMessage`\<[`TeamsServiceCreateRequest`](TeamsServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/teams.scailo_pb.ts:296

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`TeamsServiceCreateRequest`](TeamsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`TeamsServiceCreateRequest`](TeamsServiceCreateRequest.md)

#### Defined in

src/teams.scailo_pb.ts:284

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`TeamsServiceCreateRequest`](TeamsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`TeamsServiceCreateRequest`](TeamsServiceCreateRequest.md)

#### Defined in

src/teams.scailo_pb.ts:288

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`TeamsServiceCreateRequest`](TeamsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`TeamsServiceCreateRequest`](TeamsServiceCreateRequest.md)

#### Defined in

src/teams.scailo_pb.ts:292
