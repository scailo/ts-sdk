[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / AnnouncementsServiceCreateRequest

# Class: AnnouncementsServiceCreateRequest

Describes the parameters necessary to create a record

**`Generated`**

from message Scailo.AnnouncementsServiceCreateRequest

## Hierarchy

- `Message`\<[`AnnouncementsServiceCreateRequest`](AnnouncementsServiceCreateRequest.md)\>

  ↳ **`AnnouncementsServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](AnnouncementsServiceCreateRequest.md#constructor)

### Properties

- [description](AnnouncementsServiceCreateRequest.md#description)
- [endOn](AnnouncementsServiceCreateRequest.md#endon)
- [entityUuid](AnnouncementsServiceCreateRequest.md#entityuuid)
- [startOn](AnnouncementsServiceCreateRequest.md#starton)
- [title](AnnouncementsServiceCreateRequest.md#title)
- [userComment](AnnouncementsServiceCreateRequest.md#usercomment)
- [vaultFolderId](AnnouncementsServiceCreateRequest.md#vaultfolderid)
- [fields](AnnouncementsServiceCreateRequest.md#fields)
- [runtime](AnnouncementsServiceCreateRequest.md#runtime)
- [typeName](AnnouncementsServiceCreateRequest.md#typename)

### Methods

- [clone](AnnouncementsServiceCreateRequest.md#clone)
- [equals](AnnouncementsServiceCreateRequest.md#equals)
- [fromBinary](AnnouncementsServiceCreateRequest.md#frombinary)
- [fromJson](AnnouncementsServiceCreateRequest.md#fromjson)
- [fromJsonString](AnnouncementsServiceCreateRequest.md#fromjsonstring)
- [getType](AnnouncementsServiceCreateRequest.md#gettype)
- [toBinary](AnnouncementsServiceCreateRequest.md#tobinary)
- [toJSON](AnnouncementsServiceCreateRequest.md#tojson)
- [toJson](AnnouncementsServiceCreateRequest.md#tojson-1)
- [toJsonString](AnnouncementsServiceCreateRequest.md#tojsonstring)
- [equals](AnnouncementsServiceCreateRequest.md#equals-1)
- [fromBinary](AnnouncementsServiceCreateRequest.md#frombinary-1)
- [fromJson](AnnouncementsServiceCreateRequest.md#fromjson-1)
- [fromJsonString](AnnouncementsServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new AnnouncementsServiceCreateRequest**(`data?`): [`AnnouncementsServiceCreateRequest`](AnnouncementsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`AnnouncementsServiceCreateRequest`](AnnouncementsServiceCreateRequest.md)\> |

#### Returns

[`AnnouncementsServiceCreateRequest`](AnnouncementsServiceCreateRequest.md)

#### Overrides

Message\&lt;AnnouncementsServiceCreateRequest\&gt;.constructor

#### Defined in

src/announcements.scailo_pb.ts:165

## Properties

### description

• **description**: `string` = `""`

The description of the announcement

**`Generated`**

from field: string description = 11;

#### Defined in

src/announcements.scailo_pb.ts:149

___

### endOn

• **endOn**: `bigint` = `protoInt64.zero`

The end timestamp

**`Generated`**

from field: uint64 end_on = 13;

#### Defined in

src/announcements.scailo_pb.ts:163

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/announcements.scailo_pb.ts:121

___

### startOn

• **startOn**: `bigint` = `protoInt64.zero`

The start timestamp

**`Generated`**

from field: uint64 start_on = 12;

#### Defined in

src/announcements.scailo_pb.ts:156

___

### title

• **title**: `string` = `""`

The title of the announcement

**`Generated`**

from field: string title = 10;

#### Defined in

src/announcements.scailo_pb.ts:142

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 2;

#### Defined in

src/announcements.scailo_pb.ts:128

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

src/announcements.scailo_pb.ts:135

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/announcements.scailo_pb.ts:172

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/announcements.scailo_pb.ts:170

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.AnnouncementsServiceCreateRequest"``

#### Defined in

src/announcements.scailo_pb.ts:171

## Methods

### clone

▸ **clone**(): [`AnnouncementsServiceCreateRequest`](AnnouncementsServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`AnnouncementsServiceCreateRequest`](AnnouncementsServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`AnnouncementsServiceCreateRequest`](AnnouncementsServiceCreateRequest.md) \| `PlainMessage`\<[`AnnouncementsServiceCreateRequest`](AnnouncementsServiceCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`AnnouncementsServiceCreateRequest`](AnnouncementsServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`AnnouncementsServiceCreateRequest`](AnnouncementsServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`AnnouncementsServiceCreateRequest`](AnnouncementsServiceCreateRequest.md) \| `PlainMessage`\<[`AnnouncementsServiceCreateRequest`](AnnouncementsServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`AnnouncementsServiceCreateRequest`](AnnouncementsServiceCreateRequest.md) \| `PlainMessage`\<[`AnnouncementsServiceCreateRequest`](AnnouncementsServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/announcements.scailo_pb.ts:194

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`AnnouncementsServiceCreateRequest`](AnnouncementsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`AnnouncementsServiceCreateRequest`](AnnouncementsServiceCreateRequest.md)

#### Defined in

src/announcements.scailo_pb.ts:182

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`AnnouncementsServiceCreateRequest`](AnnouncementsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AnnouncementsServiceCreateRequest`](AnnouncementsServiceCreateRequest.md)

#### Defined in

src/announcements.scailo_pb.ts:186

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`AnnouncementsServiceCreateRequest`](AnnouncementsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AnnouncementsServiceCreateRequest`](AnnouncementsServiceCreateRequest.md)

#### Defined in

src/announcements.scailo_pb.ts:190
