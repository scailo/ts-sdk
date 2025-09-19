[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / Announcement

# Class: Announcement

Describes the parameters that are part of a standard response

**`Generated`**

from message Scailo.Announcement

## Hierarchy

- `Message`\<[`Announcement`](Announcement.md)\>

  ↳ **`Announcement`**

## Table of contents

### Constructors

- [constructor](Announcement.md#constructor)

### Properties

- [approvalMetadata](Announcement.md#approvalmetadata)
- [completedOn](Announcement.md#completedon)
- [description](Announcement.md#description)
- [endOn](Announcement.md#endon)
- [entityUuid](Announcement.md#entityuuid)
- [logs](Announcement.md#logs)
- [metadata](Announcement.md#metadata)
- [startOn](Announcement.md#starton)
- [status](Announcement.md#status)
- [title](Announcement.md#title)
- [vaultFolderId](Announcement.md#vaultfolderid)
- [fields](Announcement.md#fields)
- [runtime](Announcement.md#runtime)
- [typeName](Announcement.md#typename)

### Methods

- [clone](Announcement.md#clone)
- [equals](Announcement.md#equals)
- [fromBinary](Announcement.md#frombinary)
- [fromJson](Announcement.md#fromjson)
- [fromJsonString](Announcement.md#fromjsonstring)
- [getType](Announcement.md#gettype)
- [toBinary](Announcement.md#tobinary)
- [toJSON](Announcement.md#tojson)
- [toJson](Announcement.md#tojson-1)
- [toJsonString](Announcement.md#tojsonstring)
- [equals](Announcement.md#equals-1)
- [fromBinary](Announcement.md#frombinary-1)
- [fromJson](Announcement.md#fromjson-1)
- [fromJsonString](Announcement.md#fromjsonstring-1)

## Constructors

### constructor

• **new Announcement**(`data?`): [`Announcement`](Announcement.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`Announcement`](Announcement.md)\> |

#### Returns

[`Announcement`](Announcement.md)

#### Overrides

Message\&lt;Announcement\&gt;.constructor

#### Defined in

[src/announcements.scailo_pb.ts:381](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/announcements.scailo_pb.ts#L381)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

Stores the approval metadata

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/announcements.scailo_pb.ts:323](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/announcements.scailo_pb.ts#L323)

___

### completedOn

• **completedOn**: `bigint` = `protoInt64.zero`

The timestamp of when this announcement was marked as completed

**`Generated`**

from field: uint64 completed_on = 6;

#### Defined in

[src/announcements.scailo_pb.ts:344](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/announcements.scailo_pb.ts#L344)

___

### description

• **description**: `string` = `""`

The description of the announcement

**`Generated`**

from field: string description = 11;

#### Defined in

[src/announcements.scailo_pb.ts:365](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/announcements.scailo_pb.ts#L365)

___

### endOn

• **endOn**: `bigint` = `protoInt64.zero`

The end timestamp

**`Generated`**

from field: uint64 end_on = 13;

#### Defined in

[src/announcements.scailo_pb.ts:379](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/announcements.scailo_pb.ts#L379)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/announcements.scailo_pb.ts:309](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/announcements.scailo_pb.ts#L309)

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

Stores the logs of every operation performed on this announcement

**`Generated`**

from field: repeated Scailo.LogbookLogConciseSLC logs = 5;

#### Defined in

[src/announcements.scailo_pb.ts:337](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/announcements.scailo_pb.ts#L337)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this announcement

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/announcements.scailo_pb.ts:316](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/announcements.scailo_pb.ts#L316)

___

### startOn

• **startOn**: `bigint` = `protoInt64.zero`

The start timestamp

**`Generated`**

from field: uint64 start_on = 12;

#### Defined in

[src/announcements.scailo_pb.ts:372](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/announcements.scailo_pb.ts#L372)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this announcement

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

[src/announcements.scailo_pb.ts:330](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/announcements.scailo_pb.ts#L330)

___

### title

• **title**: `string` = `""`

The title of the announcement

**`Generated`**

from field: string title = 10;

#### Defined in

[src/announcements.scailo_pb.ts:358](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/announcements.scailo_pb.ts#L358)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

[src/announcements.scailo_pb.ts:351](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/announcements.scailo_pb.ts#L351)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/announcements.scailo_pb.ts:388](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/announcements.scailo_pb.ts#L388)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/announcements.scailo_pb.ts:386](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/announcements.scailo_pb.ts#L386)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.Announcement"``

#### Defined in

[src/announcements.scailo_pb.ts:387](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/announcements.scailo_pb.ts#L387)

## Methods

### clone

▸ **clone**(): [`Announcement`](Announcement.md)

Create a deep copy.

#### Returns

[`Announcement`](Announcement.md)

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
| `other` | `undefined` \| ``null`` \| [`Announcement`](Announcement.md) \| `PlainMessage`\<[`Announcement`](Announcement.md)\> |

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

▸ **getType**(): `MessageType`\<[`Announcement`](Announcement.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`Announcement`](Announcement.md)\>

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
| `a` | `undefined` \| [`Announcement`](Announcement.md) \| `PlainMessage`\<[`Announcement`](Announcement.md)\> |
| `b` | `undefined` \| [`Announcement`](Announcement.md) \| `PlainMessage`\<[`Announcement`](Announcement.md)\> |

#### Returns

`boolean`

#### Defined in

[src/announcements.scailo_pb.ts:414](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/announcements.scailo_pb.ts#L414)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`Announcement`](Announcement.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`Announcement`](Announcement.md)

#### Defined in

[src/announcements.scailo_pb.ts:402](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/announcements.scailo_pb.ts#L402)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`Announcement`](Announcement.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`Announcement`](Announcement.md)

#### Defined in

[src/announcements.scailo_pb.ts:406](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/announcements.scailo_pb.ts#L406)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`Announcement`](Announcement.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`Announcement`](Announcement.md)

#### Defined in

[src/announcements.scailo_pb.ts:410](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/announcements.scailo_pb.ts#L410)
