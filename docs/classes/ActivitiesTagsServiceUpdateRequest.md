[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ActivitiesTagsServiceUpdateRequest

# Class: ActivitiesTagsServiceUpdateRequest

Describes the parameters necessary to update a record

**`Generated`**

from message Scailo.ActivitiesTagsServiceUpdateRequest

## Hierarchy

- `Message`\<[`ActivitiesTagsServiceUpdateRequest`](ActivitiesTagsServiceUpdateRequest.md)\>

  ↳ **`ActivitiesTagsServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](ActivitiesTagsServiceUpdateRequest.md#constructor)

### Properties

- [bgColor](ActivitiesTagsServiceUpdateRequest.md#bgcolor)
- [description](ActivitiesTagsServiceUpdateRequest.md#description)
- [fgColor](ActivitiesTagsServiceUpdateRequest.md#fgcolor)
- [id](ActivitiesTagsServiceUpdateRequest.md#id)
- [name](ActivitiesTagsServiceUpdateRequest.md#name)
- [notifyUsers](ActivitiesTagsServiceUpdateRequest.md#notifyusers)
- [userComment](ActivitiesTagsServiceUpdateRequest.md#usercomment)
- [fields](ActivitiesTagsServiceUpdateRequest.md#fields)
- [runtime](ActivitiesTagsServiceUpdateRequest.md#runtime)
- [typeName](ActivitiesTagsServiceUpdateRequest.md#typename)

### Methods

- [clone](ActivitiesTagsServiceUpdateRequest.md#clone)
- [equals](ActivitiesTagsServiceUpdateRequest.md#equals)
- [fromBinary](ActivitiesTagsServiceUpdateRequest.md#frombinary)
- [fromJson](ActivitiesTagsServiceUpdateRequest.md#fromjson)
- [fromJsonString](ActivitiesTagsServiceUpdateRequest.md#fromjsonstring)
- [getType](ActivitiesTagsServiceUpdateRequest.md#gettype)
- [toBinary](ActivitiesTagsServiceUpdateRequest.md#tobinary)
- [toJSON](ActivitiesTagsServiceUpdateRequest.md#tojson)
- [toJson](ActivitiesTagsServiceUpdateRequest.md#tojson-1)
- [toJsonString](ActivitiesTagsServiceUpdateRequest.md#tojsonstring)
- [equals](ActivitiesTagsServiceUpdateRequest.md#equals-1)
- [fromBinary](ActivitiesTagsServiceUpdateRequest.md#frombinary-1)
- [fromJson](ActivitiesTagsServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](ActivitiesTagsServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new ActivitiesTagsServiceUpdateRequest**(`data?`): [`ActivitiesTagsServiceUpdateRequest`](ActivitiesTagsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ActivitiesTagsServiceUpdateRequest`](ActivitiesTagsServiceUpdateRequest.md)\> |

#### Returns

[`ActivitiesTagsServiceUpdateRequest`](ActivitiesTagsServiceUpdateRequest.md)

#### Overrides

Message\&lt;ActivitiesTagsServiceUpdateRequest\&gt;.constructor

#### Defined in

[src/activities_tags.scailo_pb.ts:247](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities_tags.scailo_pb.ts#L247)

## Properties

### bgColor

• **bgColor**: `string` = `""`

The background color that is displayed for easy recognition

**`Generated`**

from field: string bg_color = 13;

#### Defined in

[src/activities_tags.scailo_pb.ts:238](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities_tags.scailo_pb.ts#L238)

___

### description

• **description**: `string` = `""`

The description of the activity tag

**`Generated`**

from field: string description = 18;

#### Defined in

[src/activities_tags.scailo_pb.ts:245](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities_tags.scailo_pb.ts#L245)

___

### fgColor

• **fgColor**: `string` = `""`

The color of the text that is displayed for easy recognition

**`Generated`**

from field: string fg_color = 12;

#### Defined in

[src/activities_tags.scailo_pb.ts:231](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities_tags.scailo_pb.ts#L231)

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record that needs to be updated

**`Generated`**

from field: uint64 id = 2;

#### Defined in

[src/activities_tags.scailo_pb.ts:210](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities_tags.scailo_pb.ts#L210)

___

### name

• **name**: `string` = `""`

The name of the activity tag

**`Generated`**

from field: string name = 10;

#### Defined in

[src/activities_tags.scailo_pb.ts:224](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities_tags.scailo_pb.ts#L224)

___

### notifyUsers

• **notifyUsers**: `boolean` = `false`

Optional boolean value that activities tags if a notification needs to be sent to users about the update to the record. This is useful when a subsequent operation needs to be performed immediately (such as send to verification after updating the revision)

**`Generated`**

from field: bool notify_users = 3;

#### Defined in

[src/activities_tags.scailo_pb.ts:217](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities_tags.scailo_pb.ts#L217)

___

### userComment

• **userComment**: `string` = `""`

ActivitiesTags any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/activities_tags.scailo_pb.ts:203](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities_tags.scailo_pb.ts#L203)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/activities_tags.scailo_pb.ts:254](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities_tags.scailo_pb.ts#L254)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/activities_tags.scailo_pb.ts:252](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities_tags.scailo_pb.ts#L252)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ActivitiesTagsServiceUpdateRequest"``

#### Defined in

[src/activities_tags.scailo_pb.ts:253](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities_tags.scailo_pb.ts#L253)

## Methods

### clone

▸ **clone**(): [`ActivitiesTagsServiceUpdateRequest`](ActivitiesTagsServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`ActivitiesTagsServiceUpdateRequest`](ActivitiesTagsServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`ActivitiesTagsServiceUpdateRequest`](ActivitiesTagsServiceUpdateRequest.md) \| `PlainMessage`\<[`ActivitiesTagsServiceUpdateRequest`](ActivitiesTagsServiceUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`ActivitiesTagsServiceUpdateRequest`](ActivitiesTagsServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ActivitiesTagsServiceUpdateRequest`](ActivitiesTagsServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`ActivitiesTagsServiceUpdateRequest`](ActivitiesTagsServiceUpdateRequest.md) \| `PlainMessage`\<[`ActivitiesTagsServiceUpdateRequest`](ActivitiesTagsServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`ActivitiesTagsServiceUpdateRequest`](ActivitiesTagsServiceUpdateRequest.md) \| `PlainMessage`\<[`ActivitiesTagsServiceUpdateRequest`](ActivitiesTagsServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/activities_tags.scailo_pb.ts:276](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities_tags.scailo_pb.ts#L276)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ActivitiesTagsServiceUpdateRequest`](ActivitiesTagsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ActivitiesTagsServiceUpdateRequest`](ActivitiesTagsServiceUpdateRequest.md)

#### Defined in

[src/activities_tags.scailo_pb.ts:264](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities_tags.scailo_pb.ts#L264)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ActivitiesTagsServiceUpdateRequest`](ActivitiesTagsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActivitiesTagsServiceUpdateRequest`](ActivitiesTagsServiceUpdateRequest.md)

#### Defined in

[src/activities_tags.scailo_pb.ts:268](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities_tags.scailo_pb.ts#L268)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ActivitiesTagsServiceUpdateRequest`](ActivitiesTagsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActivitiesTagsServiceUpdateRequest`](ActivitiesTagsServiceUpdateRequest.md)

#### Defined in

[src/activities_tags.scailo_pb.ts:272](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities_tags.scailo_pb.ts#L272)
