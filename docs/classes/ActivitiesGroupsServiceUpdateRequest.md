[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ActivitiesGroupsServiceUpdateRequest

# Class: ActivitiesGroupsServiceUpdateRequest

Describes the parameters necessary to update a record

**`Generated`**

from message Scailo.ActivitiesGroupsServiceUpdateRequest

## Hierarchy

- `Message`\<[`ActivitiesGroupsServiceUpdateRequest`](ActivitiesGroupsServiceUpdateRequest.md)\>

  ↳ **`ActivitiesGroupsServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](ActivitiesGroupsServiceUpdateRequest.md#constructor)

### Properties

- [description](ActivitiesGroupsServiceUpdateRequest.md#description)
- [id](ActivitiesGroupsServiceUpdateRequest.md#id)
- [name](ActivitiesGroupsServiceUpdateRequest.md#name)
- [notifyUsers](ActivitiesGroupsServiceUpdateRequest.md#notifyusers)
- [projectId](ActivitiesGroupsServiceUpdateRequest.md#projectid)
- [userComment](ActivitiesGroupsServiceUpdateRequest.md#usercomment)
- [fields](ActivitiesGroupsServiceUpdateRequest.md#fields)
- [runtime](ActivitiesGroupsServiceUpdateRequest.md#runtime)
- [typeName](ActivitiesGroupsServiceUpdateRequest.md#typename)

### Methods

- [clone](ActivitiesGroupsServiceUpdateRequest.md#clone)
- [equals](ActivitiesGroupsServiceUpdateRequest.md#equals)
- [fromBinary](ActivitiesGroupsServiceUpdateRequest.md#frombinary)
- [fromJson](ActivitiesGroupsServiceUpdateRequest.md#fromjson)
- [fromJsonString](ActivitiesGroupsServiceUpdateRequest.md#fromjsonstring)
- [getType](ActivitiesGroupsServiceUpdateRequest.md#gettype)
- [toBinary](ActivitiesGroupsServiceUpdateRequest.md#tobinary)
- [toJSON](ActivitiesGroupsServiceUpdateRequest.md#tojson)
- [toJson](ActivitiesGroupsServiceUpdateRequest.md#tojson-1)
- [toJsonString](ActivitiesGroupsServiceUpdateRequest.md#tojsonstring)
- [equals](ActivitiesGroupsServiceUpdateRequest.md#equals-1)
- [fromBinary](ActivitiesGroupsServiceUpdateRequest.md#frombinary-1)
- [fromJson](ActivitiesGroupsServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](ActivitiesGroupsServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new ActivitiesGroupsServiceUpdateRequest**(`data?`): [`ActivitiesGroupsServiceUpdateRequest`](ActivitiesGroupsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ActivitiesGroupsServiceUpdateRequest`](ActivitiesGroupsServiceUpdateRequest.md)\> |

#### Returns

[`ActivitiesGroupsServiceUpdateRequest`](ActivitiesGroupsServiceUpdateRequest.md)

#### Overrides

Message\&lt;ActivitiesGroupsServiceUpdateRequest\&gt;.constructor

#### Defined in

src/activities_groups.scailo_pb.ts:224

## Properties

### description

• **description**: `string` = `""`

The description of the activity group

**`Generated`**

from field: string description = 13;

#### Defined in

src/activities_groups.scailo_pb.ts:222

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record that needs to be updated

**`Generated`**

from field: uint64 id = 2;

#### Defined in

src/activities_groups.scailo_pb.ts:194

___

### name

• **name**: `string` = `""`

The name of the activity group

**`Generated`**

from field: string name = 10;

#### Defined in

src/activities_groups.scailo_pb.ts:215

___

### notifyUsers

• **notifyUsers**: `boolean` = `false`

Optional boolean value that activities groups if a notification needs to be sent to users about the update to the record. This is useful when a subsequent operation needs to be performed immediately (such as send to verification after updating the revision)

**`Generated`**

from field: bool notify_users = 3;

#### Defined in

src/activities_groups.scailo_pb.ts:201

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The associated project ID

**`Generated`**

from field: uint64 project_id = 9;

#### Defined in

src/activities_groups.scailo_pb.ts:208

___

### userComment

• **userComment**: `string` = `""`

ActivitiesGroups any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/activities_groups.scailo_pb.ts:187

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/activities_groups.scailo_pb.ts:231

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/activities_groups.scailo_pb.ts:229

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ActivitiesGroupsServiceUpdateRequest"``

#### Defined in

src/activities_groups.scailo_pb.ts:230

## Methods

### clone

▸ **clone**(): [`ActivitiesGroupsServiceUpdateRequest`](ActivitiesGroupsServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`ActivitiesGroupsServiceUpdateRequest`](ActivitiesGroupsServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`ActivitiesGroupsServiceUpdateRequest`](ActivitiesGroupsServiceUpdateRequest.md) \| `PlainMessage`\<[`ActivitiesGroupsServiceUpdateRequest`](ActivitiesGroupsServiceUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`ActivitiesGroupsServiceUpdateRequest`](ActivitiesGroupsServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ActivitiesGroupsServiceUpdateRequest`](ActivitiesGroupsServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`ActivitiesGroupsServiceUpdateRequest`](ActivitiesGroupsServiceUpdateRequest.md) \| `PlainMessage`\<[`ActivitiesGroupsServiceUpdateRequest`](ActivitiesGroupsServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`ActivitiesGroupsServiceUpdateRequest`](ActivitiesGroupsServiceUpdateRequest.md) \| `PlainMessage`\<[`ActivitiesGroupsServiceUpdateRequest`](ActivitiesGroupsServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/activities_groups.scailo_pb.ts:252

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ActivitiesGroupsServiceUpdateRequest`](ActivitiesGroupsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ActivitiesGroupsServiceUpdateRequest`](ActivitiesGroupsServiceUpdateRequest.md)

#### Defined in

src/activities_groups.scailo_pb.ts:240

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ActivitiesGroupsServiceUpdateRequest`](ActivitiesGroupsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActivitiesGroupsServiceUpdateRequest`](ActivitiesGroupsServiceUpdateRequest.md)

#### Defined in

src/activities_groups.scailo_pb.ts:244

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ActivitiesGroupsServiceUpdateRequest`](ActivitiesGroupsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActivitiesGroupsServiceUpdateRequest`](ActivitiesGroupsServiceUpdateRequest.md)

#### Defined in

src/activities_groups.scailo_pb.ts:248
