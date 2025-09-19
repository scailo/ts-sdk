[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / AnnouncementsServiceUpdateRequest

# Class: AnnouncementsServiceUpdateRequest

Describes the parameters necessary to update a record

**`Generated`**

from message Scailo.AnnouncementsServiceUpdateRequest

## Hierarchy

- `Message`\<[`AnnouncementsServiceUpdateRequest`](AnnouncementsServiceUpdateRequest.md)\>

  ↳ **`AnnouncementsServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](AnnouncementsServiceUpdateRequest.md#constructor)

### Properties

- [description](AnnouncementsServiceUpdateRequest.md#description)
- [endOn](AnnouncementsServiceUpdateRequest.md#endon)
- [id](AnnouncementsServiceUpdateRequest.md#id)
- [notifyUsers](AnnouncementsServiceUpdateRequest.md#notifyusers)
- [startOn](AnnouncementsServiceUpdateRequest.md#starton)
- [title](AnnouncementsServiceUpdateRequest.md#title)
- [userComment](AnnouncementsServiceUpdateRequest.md#usercomment)
- [vaultFolderId](AnnouncementsServiceUpdateRequest.md#vaultfolderid)
- [fields](AnnouncementsServiceUpdateRequest.md#fields)
- [runtime](AnnouncementsServiceUpdateRequest.md#runtime)
- [typeName](AnnouncementsServiceUpdateRequest.md#typename)

### Methods

- [clone](AnnouncementsServiceUpdateRequest.md#clone)
- [equals](AnnouncementsServiceUpdateRequest.md#equals)
- [fromBinary](AnnouncementsServiceUpdateRequest.md#frombinary)
- [fromJson](AnnouncementsServiceUpdateRequest.md#fromjson)
- [fromJsonString](AnnouncementsServiceUpdateRequest.md#fromjsonstring)
- [getType](AnnouncementsServiceUpdateRequest.md#gettype)
- [toBinary](AnnouncementsServiceUpdateRequest.md#tobinary)
- [toJSON](AnnouncementsServiceUpdateRequest.md#tojson)
- [toJson](AnnouncementsServiceUpdateRequest.md#tojson-1)
- [toJsonString](AnnouncementsServiceUpdateRequest.md#tojsonstring)
- [equals](AnnouncementsServiceUpdateRequest.md#equals-1)
- [fromBinary](AnnouncementsServiceUpdateRequest.md#frombinary-1)
- [fromJson](AnnouncementsServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](AnnouncementsServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new AnnouncementsServiceUpdateRequest**(`data?`): [`AnnouncementsServiceUpdateRequest`](AnnouncementsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`AnnouncementsServiceUpdateRequest`](AnnouncementsServiceUpdateRequest.md)\> |

#### Returns

[`AnnouncementsServiceUpdateRequest`](AnnouncementsServiceUpdateRequest.md)

#### Overrides

Message\&lt;AnnouncementsServiceUpdateRequest\&gt;.constructor

#### Defined in

[src/announcements.scailo_pb.ts:262](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/announcements.scailo_pb.ts#L262)

## Properties

### description

• **description**: `string` = `""`

The description of the announcement

**`Generated`**

from field: string description = 11;

#### Defined in

[src/announcements.scailo_pb.ts:246](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/announcements.scailo_pb.ts#L246)

___

### endOn

• **endOn**: `bigint` = `protoInt64.zero`

The end timestamp

**`Generated`**

from field: uint64 end_on = 13;

#### Defined in

[src/announcements.scailo_pb.ts:260](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/announcements.scailo_pb.ts#L260)

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record that needs to be updated

**`Generated`**

from field: uint64 id = 2;

#### Defined in

[src/announcements.scailo_pb.ts:218](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/announcements.scailo_pb.ts#L218)

___

### notifyUsers

• **notifyUsers**: `boolean` = `false`

Optional boolean value that stores if a notification needs to be sent to users about the update to the record. This is useful when a subsequent operation needs to be performed immediately (such as send to verification after updating the revision)

**`Generated`**

from field: bool notify_users = 3;

#### Defined in

[src/announcements.scailo_pb.ts:225](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/announcements.scailo_pb.ts#L225)

___

### startOn

• **startOn**: `bigint` = `protoInt64.zero`

The start timestamp

**`Generated`**

from field: uint64 start_on = 12;

#### Defined in

[src/announcements.scailo_pb.ts:253](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/announcements.scailo_pb.ts#L253)

___

### title

• **title**: `string` = `""`

The title of the announcement

**`Generated`**

from field: string title = 10;

#### Defined in

[src/announcements.scailo_pb.ts:239](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/announcements.scailo_pb.ts#L239)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/announcements.scailo_pb.ts:211](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/announcements.scailo_pb.ts#L211)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

[src/announcements.scailo_pb.ts:232](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/announcements.scailo_pb.ts#L232)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/announcements.scailo_pb.ts:269](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/announcements.scailo_pb.ts#L269)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/announcements.scailo_pb.ts:267](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/announcements.scailo_pb.ts#L267)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.AnnouncementsServiceUpdateRequest"``

#### Defined in

[src/announcements.scailo_pb.ts:268](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/announcements.scailo_pb.ts#L268)

## Methods

### clone

▸ **clone**(): [`AnnouncementsServiceUpdateRequest`](AnnouncementsServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`AnnouncementsServiceUpdateRequest`](AnnouncementsServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`AnnouncementsServiceUpdateRequest`](AnnouncementsServiceUpdateRequest.md) \| `PlainMessage`\<[`AnnouncementsServiceUpdateRequest`](AnnouncementsServiceUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`AnnouncementsServiceUpdateRequest`](AnnouncementsServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`AnnouncementsServiceUpdateRequest`](AnnouncementsServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`AnnouncementsServiceUpdateRequest`](AnnouncementsServiceUpdateRequest.md) \| `PlainMessage`\<[`AnnouncementsServiceUpdateRequest`](AnnouncementsServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`AnnouncementsServiceUpdateRequest`](AnnouncementsServiceUpdateRequest.md) \| `PlainMessage`\<[`AnnouncementsServiceUpdateRequest`](AnnouncementsServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/announcements.scailo_pb.ts:292](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/announcements.scailo_pb.ts#L292)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`AnnouncementsServiceUpdateRequest`](AnnouncementsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`AnnouncementsServiceUpdateRequest`](AnnouncementsServiceUpdateRequest.md)

#### Defined in

[src/announcements.scailo_pb.ts:280](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/announcements.scailo_pb.ts#L280)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`AnnouncementsServiceUpdateRequest`](AnnouncementsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AnnouncementsServiceUpdateRequest`](AnnouncementsServiceUpdateRequest.md)

#### Defined in

[src/announcements.scailo_pb.ts:284](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/announcements.scailo_pb.ts#L284)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`AnnouncementsServiceUpdateRequest`](AnnouncementsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AnnouncementsServiceUpdateRequest`](AnnouncementsServiceUpdateRequest.md)

#### Defined in

[src/announcements.scailo_pb.ts:288](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/announcements.scailo_pb.ts#L288)
