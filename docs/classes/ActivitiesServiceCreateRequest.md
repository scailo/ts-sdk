[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ActivitiesServiceCreateRequest

# Class: ActivitiesServiceCreateRequest

Describes the parameters necessary to create a record

**`Generated`**

from message Scailo.ActivitiesServiceCreateRequest

## Hierarchy

- `Message`\<[`ActivitiesServiceCreateRequest`](ActivitiesServiceCreateRequest.md)\>

  ↳ **`ActivitiesServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](ActivitiesServiceCreateRequest.md#constructor)

### Properties

- [activityGroupId](ActivitiesServiceCreateRequest.md#activitygroupid)
- [activityStatusId](ActivitiesServiceCreateRequest.md#activitystatusid)
- [assignSelfAsOwner](ActivitiesServiceCreateRequest.md#assignselfasowner)
- [assignSelfAsSupervisor](ActivitiesServiceCreateRequest.md#assignselfassupervisor)
- [description](ActivitiesServiceCreateRequest.md#description)
- [dueBy](ActivitiesServiceCreateRequest.md#dueby)
- [entityUuid](ActivitiesServiceCreateRequest.md#entityuuid)
- [startsAt](ActivitiesServiceCreateRequest.md#startsat)
- [title](ActivitiesServiceCreateRequest.md#title)
- [userComment](ActivitiesServiceCreateRequest.md#usercomment)
- [vaultFolderId](ActivitiesServiceCreateRequest.md#vaultfolderid)
- [fields](ActivitiesServiceCreateRequest.md#fields)
- [runtime](ActivitiesServiceCreateRequest.md#runtime)
- [typeName](ActivitiesServiceCreateRequest.md#typename)

### Methods

- [clone](ActivitiesServiceCreateRequest.md#clone)
- [equals](ActivitiesServiceCreateRequest.md#equals)
- [fromBinary](ActivitiesServiceCreateRequest.md#frombinary)
- [fromJson](ActivitiesServiceCreateRequest.md#fromjson)
- [fromJsonString](ActivitiesServiceCreateRequest.md#fromjsonstring)
- [getType](ActivitiesServiceCreateRequest.md#gettype)
- [toBinary](ActivitiesServiceCreateRequest.md#tobinary)
- [toJSON](ActivitiesServiceCreateRequest.md#tojson)
- [toJson](ActivitiesServiceCreateRequest.md#tojson-1)
- [toJsonString](ActivitiesServiceCreateRequest.md#tojsonstring)
- [equals](ActivitiesServiceCreateRequest.md#equals-1)
- [fromBinary](ActivitiesServiceCreateRequest.md#frombinary-1)
- [fromJson](ActivitiesServiceCreateRequest.md#fromjson-1)
- [fromJsonString](ActivitiesServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new ActivitiesServiceCreateRequest**(`data?`): [`ActivitiesServiceCreateRequest`](ActivitiesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ActivitiesServiceCreateRequest`](ActivitiesServiceCreateRequest.md)\> |

#### Returns

[`ActivitiesServiceCreateRequest`](ActivitiesServiceCreateRequest.md)

#### Overrides

Message\&lt;ActivitiesServiceCreateRequest\&gt;.constructor

#### Defined in

[src/activities.scailo_pb.ts:460](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L460)

## Properties

### activityGroupId

• **activityGroupId**: `bigint` = `protoInt64.zero`

The associated activity group ID

**`Generated`**

from field: uint64 activity_group_id = 8;

#### Defined in

[src/activities.scailo_pb.ts:409](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L409)

___

### activityStatusId

• **activityStatusId**: `bigint` = `protoInt64.zero`

The associated activity status ID

**`Generated`**

from field: uint64 activity_status_id = 9;

#### Defined in

[src/activities.scailo_pb.ts:416](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L416)

___

### assignSelfAsOwner

• **assignSelfAsOwner**: `boolean` = `false`

Assign self (the user creating the activity) as an owner

**`Generated`**

from field: bool assign_self_as_owner = 80;

#### Defined in

[src/activities.scailo_pb.ts:451](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L451)

___

### assignSelfAsSupervisor

• **assignSelfAsSupervisor**: `boolean` = `false`

Assign self (the user creating the activity) as a supervisor

**`Generated`**

from field: bool assign_self_as_supervisor = 81;

#### Defined in

[src/activities.scailo_pb.ts:458](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L458)

___

### description

• **description**: `string` = `""`

The description of the activity

**`Generated`**

from field: string description = 13;

#### Defined in

[src/activities.scailo_pb.ts:444](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L444)

___

### dueBy

• **dueBy**: `bigint` = `protoInt64.zero`

The UNIX timestamp of when the activity needs to be completed

**`Generated`**

from field: uint64 due_by = 12;

#### Defined in

[src/activities.scailo_pb.ts:437](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L437)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/activities.scailo_pb.ts:388](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L388)

___

### startsAt

• **startsAt**: `bigint` = `protoInt64.zero`

The start UNIX timestamp

**`Generated`**

from field: uint64 starts_at = 11;

#### Defined in

[src/activities.scailo_pb.ts:430](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L430)

___

### title

• **title**: `string` = `""`

The title of the activity

**`Generated`**

from field: string title = 10;

#### Defined in

[src/activities.scailo_pb.ts:423](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L423)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 2;

#### Defined in

[src/activities.scailo_pb.ts:395](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L395)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 7;

#### Defined in

[src/activities.scailo_pb.ts:402](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L402)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/activities.scailo_pb.ts:467](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L467)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/activities.scailo_pb.ts:465](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L465)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ActivitiesServiceCreateRequest"``

#### Defined in

[src/activities.scailo_pb.ts:466](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L466)

## Methods

### clone

▸ **clone**(): [`ActivitiesServiceCreateRequest`](ActivitiesServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`ActivitiesServiceCreateRequest`](ActivitiesServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`ActivitiesServiceCreateRequest`](ActivitiesServiceCreateRequest.md) \| `PlainMessage`\<[`ActivitiesServiceCreateRequest`](ActivitiesServiceCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`ActivitiesServiceCreateRequest`](ActivitiesServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ActivitiesServiceCreateRequest`](ActivitiesServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`ActivitiesServiceCreateRequest`](ActivitiesServiceCreateRequest.md) \| `PlainMessage`\<[`ActivitiesServiceCreateRequest`](ActivitiesServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`ActivitiesServiceCreateRequest`](ActivitiesServiceCreateRequest.md) \| `PlainMessage`\<[`ActivitiesServiceCreateRequest`](ActivitiesServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/activities.scailo_pb.ts:493](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L493)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ActivitiesServiceCreateRequest`](ActivitiesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ActivitiesServiceCreateRequest`](ActivitiesServiceCreateRequest.md)

#### Defined in

[src/activities.scailo_pb.ts:481](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L481)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ActivitiesServiceCreateRequest`](ActivitiesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActivitiesServiceCreateRequest`](ActivitiesServiceCreateRequest.md)

#### Defined in

[src/activities.scailo_pb.ts:485](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L485)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ActivitiesServiceCreateRequest`](ActivitiesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActivitiesServiceCreateRequest`](ActivitiesServiceCreateRequest.md)

#### Defined in

[src/activities.scailo_pb.ts:489](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L489)
