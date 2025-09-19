[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ActivityTag

# Class: ActivityTag

Describes the parameters that are part of a standard response

**`Generated`**

from message Scailo.ActivityTag

## Hierarchy

- `Message`\<[`ActivityTag`](ActivityTag.md)\>

  ↳ **`ActivityTag`**

## Table of contents

### Constructors

- [constructor](ActivityTag.md#constructor)

### Properties

- [approvalMetadata](ActivityTag.md#approvalmetadata)
- [bgColor](ActivityTag.md#bgcolor)
- [code](ActivityTag.md#code)
- [description](ActivityTag.md#description)
- [entityUuid](ActivityTag.md#entityuuid)
- [fgColor](ActivityTag.md#fgcolor)
- [isLeaf](ActivityTag.md#isleaf)
- [logs](ActivityTag.md#logs)
- [metadata](ActivityTag.md#metadata)
- [name](ActivityTag.md#name)
- [parentActivityTagId](ActivityTag.md#parentactivitytagid)
- [status](ActivityTag.md#status)
- [fields](ActivityTag.md#fields)
- [runtime](ActivityTag.md#runtime)
- [typeName](ActivityTag.md#typename)

### Methods

- [clone](ActivityTag.md#clone)
- [equals](ActivityTag.md#equals)
- [fromBinary](ActivityTag.md#frombinary)
- [fromJson](ActivityTag.md#fromjson)
- [fromJsonString](ActivityTag.md#fromjsonstring)
- [getType](ActivityTag.md#gettype)
- [toBinary](ActivityTag.md#tobinary)
- [toJSON](ActivityTag.md#tojson)
- [toJson](ActivityTag.md#tojson-1)
- [toJsonString](ActivityTag.md#tojsonstring)
- [equals](ActivityTag.md#equals-1)
- [fromBinary](ActivityTag.md#frombinary-1)
- [fromJson](ActivityTag.md#fromjson-1)
- [fromJsonString](ActivityTag.md#fromjsonstring-1)

## Constructors

### constructor

• **new ActivityTag**(`data?`): [`ActivityTag`](ActivityTag.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ActivityTag`](ActivityTag.md)\> |

#### Returns

[`ActivityTag`](ActivityTag.md)

#### Overrides

Message\&lt;ActivityTag\&gt;.constructor

#### Defined in

[src/activities_tags.scailo_pb.ts:372](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities_tags.scailo_pb.ts#L372)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

ActivitiesTags the approval metadata

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/activities_tags.scailo_pb.ts:307](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities_tags.scailo_pb.ts#L307)

___

### bgColor

• **bgColor**: `string` = `""`

The background color that is displayed for easy recognition

**`Generated`**

from field: string bg_color = 13;

#### Defined in

[src/activities_tags.scailo_pb.ts:349](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities_tags.scailo_pb.ts#L349)

___

### code

• **code**: `string` = `""`

The unique code by which the activity tag is classified

**`Generated`**

from field: string code = 11;

#### Defined in

[src/activities_tags.scailo_pb.ts:335](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities_tags.scailo_pb.ts#L335)

___

### description

• **description**: `string` = `""`

The description of the activity tag

**`Generated`**

from field: string description = 18;

#### Defined in

[src/activities_tags.scailo_pb.ts:370](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities_tags.scailo_pb.ts#L370)

___

### entityUuid

• **entityUuid**: `string` = `""`

ActivitiesTags a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/activities_tags.scailo_pb.ts:293](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities_tags.scailo_pb.ts#L293)

___

### fgColor

• **fgColor**: `string` = `""`

The color of the text that is displayed for easy recognition

**`Generated`**

from field: string fg_color = 12;

#### Defined in

[src/activities_tags.scailo_pb.ts:342](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities_tags.scailo_pb.ts#L342)

___

### isLeaf

• **isLeaf**: `boolean` = `false`

Stores if this is a leaf activity tag or a non-leaf activity tag

**`Generated`**

from field: bool is_leaf = 17;

#### Defined in

[src/activities_tags.scailo_pb.ts:363](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities_tags.scailo_pb.ts#L363)

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

ActivitiesTags the logs of every operation performed on this activity tag

**`Generated`**

from field: repeated Scailo.LogbookLogConciseSLC logs = 5;

#### Defined in

[src/activities_tags.scailo_pb.ts:321](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities_tags.scailo_pb.ts#L321)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

ActivitiesTags the metadata of this activity tag

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/activities_tags.scailo_pb.ts:300](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities_tags.scailo_pb.ts#L300)

___

### name

• **name**: `string` = `""`

The name of the activity tag

**`Generated`**

from field: string name = 10;

#### Defined in

[src/activities_tags.scailo_pb.ts:328](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities_tags.scailo_pb.ts#L328)

___

### parentActivityTagId

• **parentActivityTagId**: `bigint` = `protoInt64.zero`

The ID of the associated non-leaf parent activity tag (0, if the first activity tag that is being created is a leaf activity tag)

**`Generated`**

from field: uint64 parent_activity_tag_id = 16;

#### Defined in

[src/activities_tags.scailo_pb.ts:356](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities_tags.scailo_pb.ts#L356)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this activity tag

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

[src/activities_tags.scailo_pb.ts:314](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities_tags.scailo_pb.ts#L314)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/activities_tags.scailo_pb.ts:379](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities_tags.scailo_pb.ts#L379)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/activities_tags.scailo_pb.ts:377](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities_tags.scailo_pb.ts#L377)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ActivityTag"``

#### Defined in

[src/activities_tags.scailo_pb.ts:378](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities_tags.scailo_pb.ts#L378)

## Methods

### clone

▸ **clone**(): [`ActivityTag`](ActivityTag.md)

Create a deep copy.

#### Returns

[`ActivityTag`](ActivityTag.md)

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
| `other` | `undefined` \| ``null`` \| [`ActivityTag`](ActivityTag.md) \| `PlainMessage`\<[`ActivityTag`](ActivityTag.md)\> |

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

▸ **getType**(): `MessageType`\<[`ActivityTag`](ActivityTag.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ActivityTag`](ActivityTag.md)\>

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
| `a` | `undefined` \| [`ActivityTag`](ActivityTag.md) \| `PlainMessage`\<[`ActivityTag`](ActivityTag.md)\> |
| `b` | `undefined` \| [`ActivityTag`](ActivityTag.md) \| `PlainMessage`\<[`ActivityTag`](ActivityTag.md)\> |

#### Returns

`boolean`

#### Defined in

[src/activities_tags.scailo_pb.ts:406](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities_tags.scailo_pb.ts#L406)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ActivityTag`](ActivityTag.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ActivityTag`](ActivityTag.md)

#### Defined in

[src/activities_tags.scailo_pb.ts:394](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities_tags.scailo_pb.ts#L394)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ActivityTag`](ActivityTag.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActivityTag`](ActivityTag.md)

#### Defined in

[src/activities_tags.scailo_pb.ts:398](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities_tags.scailo_pb.ts#L398)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ActivityTag`](ActivityTag.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActivityTag`](ActivityTag.md)

#### Defined in

[src/activities_tags.scailo_pb.ts:402](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities_tags.scailo_pb.ts#L402)
