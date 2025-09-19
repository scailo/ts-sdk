[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ActivityTagAssociation

# Class: ActivityTagAssociation

Describes the parameters that constitute an activity tag association

**`Generated`**

from message Scailo.ActivityTagAssociation

## Hierarchy

- `Message`\<[`ActivityTagAssociation`](ActivityTagAssociation.md)\>

  ↳ **`ActivityTagAssociation`**

## Table of contents

### Constructors

- [constructor](ActivityTagAssociation.md#constructor)

### Properties

- [activityId](ActivityTagAssociation.md#activityid)
- [activityTagId](ActivityTagAssociation.md#activitytagid)
- [entityUuid](ActivityTagAssociation.md#entityuuid)
- [metadata](ActivityTagAssociation.md#metadata)
- [userComment](ActivityTagAssociation.md#usercomment)
- [fields](ActivityTagAssociation.md#fields)
- [runtime](ActivityTagAssociation.md#runtime)
- [typeName](ActivityTagAssociation.md#typename)

### Methods

- [clone](ActivityTagAssociation.md#clone)
- [equals](ActivityTagAssociation.md#equals)
- [fromBinary](ActivityTagAssociation.md#frombinary)
- [fromJson](ActivityTagAssociation.md#fromjson)
- [fromJsonString](ActivityTagAssociation.md#fromjsonstring)
- [getType](ActivityTagAssociation.md#gettype)
- [toBinary](ActivityTagAssociation.md#tobinary)
- [toJSON](ActivityTagAssociation.md#tojson)
- [toJson](ActivityTagAssociation.md#tojson-1)
- [toJsonString](ActivityTagAssociation.md#tojsonstring)
- [equals](ActivityTagAssociation.md#equals-1)
- [fromBinary](ActivityTagAssociation.md#frombinary-1)
- [fromJson](ActivityTagAssociation.md#fromjson-1)
- [fromJsonString](ActivityTagAssociation.md#fromjsonstring-1)

## Constructors

### constructor

• **new ActivityTagAssociation**(`data?`): [`ActivityTagAssociation`](ActivityTagAssociation.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ActivityTagAssociation`](ActivityTagAssociation.md)\> |

#### Returns

[`ActivityTagAssociation`](ActivityTagAssociation.md)

#### Overrides

Message\&lt;ActivityTagAssociation\&gt;.constructor

#### Defined in

[src/activities.scailo_pb.ts:2475](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L2475)

## Properties

### activityId

• **activityId**: `bigint` = `protoInt64.zero`

Stores the activity ID

**`Generated`**

from field: uint64 activity_id = 10;

#### Defined in

[src/activities.scailo_pb.ts:2466](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L2466)

___

### activityTagId

• **activityTagId**: `bigint` = `protoInt64.zero`

Stores the activity tag ID

**`Generated`**

from field: uint64 activity_tag_id = 11;

#### Defined in

[src/activities.scailo_pb.ts:2473](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L2473)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/activities.scailo_pb.ts:2445](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L2445)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this activity

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/activities.scailo_pb.ts:2452](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L2452)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might have added during an operation

**`Generated`**

from field: string user_comment = 5;

#### Defined in

[src/activities.scailo_pb.ts:2459](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L2459)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/activities.scailo_pb.ts:2482](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L2482)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/activities.scailo_pb.ts:2480](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L2480)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ActivityTagAssociation"``

#### Defined in

[src/activities.scailo_pb.ts:2481](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L2481)

## Methods

### clone

▸ **clone**(): [`ActivityTagAssociation`](ActivityTagAssociation.md)

Create a deep copy.

#### Returns

[`ActivityTagAssociation`](ActivityTagAssociation.md)

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
| `other` | `undefined` \| ``null`` \| [`ActivityTagAssociation`](ActivityTagAssociation.md) \| `PlainMessage`\<[`ActivityTagAssociation`](ActivityTagAssociation.md)\> |

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

▸ **getType**(): `MessageType`\<[`ActivityTagAssociation`](ActivityTagAssociation.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ActivityTagAssociation`](ActivityTagAssociation.md)\>

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
| `a` | `undefined` \| [`ActivityTagAssociation`](ActivityTagAssociation.md) \| `PlainMessage`\<[`ActivityTagAssociation`](ActivityTagAssociation.md)\> |
| `b` | `undefined` \| [`ActivityTagAssociation`](ActivityTagAssociation.md) \| `PlainMessage`\<[`ActivityTagAssociation`](ActivityTagAssociation.md)\> |

#### Returns

`boolean`

#### Defined in

[src/activities.scailo_pb.ts:2502](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L2502)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ActivityTagAssociation`](ActivityTagAssociation.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ActivityTagAssociation`](ActivityTagAssociation.md)

#### Defined in

[src/activities.scailo_pb.ts:2490](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L2490)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ActivityTagAssociation`](ActivityTagAssociation.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActivityTagAssociation`](ActivityTagAssociation.md)

#### Defined in

[src/activities.scailo_pb.ts:2494](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L2494)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ActivityTagAssociation`](ActivityTagAssociation.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActivityTagAssociation`](ActivityTagAssociation.md)

#### Defined in

[src/activities.scailo_pb.ts:2498](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L2498)
