[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / ActivitiesServiceActivityTagAssociationCreateRequest

# Class: ActivitiesServiceActivityTagAssociationCreateRequest

Describes the parameters necessary to create an activity tag association

**`Generated`**

from message Scailo.ActivitiesServiceActivityTagAssociationCreateRequest

## Hierarchy

- `Message`\<[`ActivitiesServiceActivityTagAssociationCreateRequest`](ActivitiesServiceActivityTagAssociationCreateRequest.md)\>

  ↳ **`ActivitiesServiceActivityTagAssociationCreateRequest`**

## Table of contents

### Constructors

- [constructor](ActivitiesServiceActivityTagAssociationCreateRequest.md#constructor)

### Properties

- [activityId](ActivitiesServiceActivityTagAssociationCreateRequest.md#activityid)
- [activityTagId](ActivitiesServiceActivityTagAssociationCreateRequest.md#activitytagid)
- [userComment](ActivitiesServiceActivityTagAssociationCreateRequest.md#usercomment)
- [fields](ActivitiesServiceActivityTagAssociationCreateRequest.md#fields)
- [runtime](ActivitiesServiceActivityTagAssociationCreateRequest.md#runtime)
- [typeName](ActivitiesServiceActivityTagAssociationCreateRequest.md#typename)

### Methods

- [clone](ActivitiesServiceActivityTagAssociationCreateRequest.md#clone)
- [equals](ActivitiesServiceActivityTagAssociationCreateRequest.md#equals)
- [fromBinary](ActivitiesServiceActivityTagAssociationCreateRequest.md#frombinary)
- [fromJson](ActivitiesServiceActivityTagAssociationCreateRequest.md#fromjson)
- [fromJsonString](ActivitiesServiceActivityTagAssociationCreateRequest.md#fromjsonstring)
- [getType](ActivitiesServiceActivityTagAssociationCreateRequest.md#gettype)
- [toBinary](ActivitiesServiceActivityTagAssociationCreateRequest.md#tobinary)
- [toJSON](ActivitiesServiceActivityTagAssociationCreateRequest.md#tojson)
- [toJson](ActivitiesServiceActivityTagAssociationCreateRequest.md#tojson-1)
- [toJsonString](ActivitiesServiceActivityTagAssociationCreateRequest.md#tojsonstring)
- [equals](ActivitiesServiceActivityTagAssociationCreateRequest.md#equals-1)
- [fromBinary](ActivitiesServiceActivityTagAssociationCreateRequest.md#frombinary-1)
- [fromJson](ActivitiesServiceActivityTagAssociationCreateRequest.md#fromjson-1)
- [fromJsonString](ActivitiesServiceActivityTagAssociationCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new ActivitiesServiceActivityTagAssociationCreateRequest**(`data?`): [`ActivitiesServiceActivityTagAssociationCreateRequest`](ActivitiesServiceActivityTagAssociationCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ActivitiesServiceActivityTagAssociationCreateRequest`](ActivitiesServiceActivityTagAssociationCreateRequest.md)\> |

#### Returns

[`ActivitiesServiceActivityTagAssociationCreateRequest`](ActivitiesServiceActivityTagAssociationCreateRequest.md)

#### Overrides

Message\&lt;ActivitiesServiceActivityTagAssociationCreateRequest\&gt;.constructor

#### Defined in

src/activities.scailo_pb.ts:2395

## Properties

### activityId

• **activityId**: `bigint` = `protoInt64.zero`

Stores the activity ID

**`Generated`**

from field: uint64 activity_id = 10;

#### Defined in

src/activities.scailo_pb.ts:2386

___

### activityTagId

• **activityTagId**: `bigint` = `protoInt64.zero`

Stores the activity tag ID

**`Generated`**

from field: uint64 activity_tag_id = 11;

#### Defined in

src/activities.scailo_pb.ts:2393

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/activities.scailo_pb.ts:2379

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/activities.scailo_pb.ts:2402

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/activities.scailo_pb.ts:2400

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ActivitiesServiceActivityTagAssociationCreateRequest"``

#### Defined in

src/activities.scailo_pb.ts:2401

## Methods

### clone

▸ **clone**(): [`ActivitiesServiceActivityTagAssociationCreateRequest`](ActivitiesServiceActivityTagAssociationCreateRequest.md)

Create a deep copy.

#### Returns

[`ActivitiesServiceActivityTagAssociationCreateRequest`](ActivitiesServiceActivityTagAssociationCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`ActivitiesServiceActivityTagAssociationCreateRequest`](ActivitiesServiceActivityTagAssociationCreateRequest.md) \| `PlainMessage`\<[`ActivitiesServiceActivityTagAssociationCreateRequest`](ActivitiesServiceActivityTagAssociationCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`ActivitiesServiceActivityTagAssociationCreateRequest`](ActivitiesServiceActivityTagAssociationCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ActivitiesServiceActivityTagAssociationCreateRequest`](ActivitiesServiceActivityTagAssociationCreateRequest.md)\>

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
| `a` | `undefined` \| [`ActivitiesServiceActivityTagAssociationCreateRequest`](ActivitiesServiceActivityTagAssociationCreateRequest.md) \| `PlainMessage`\<[`ActivitiesServiceActivityTagAssociationCreateRequest`](ActivitiesServiceActivityTagAssociationCreateRequest.md)\> |
| `b` | `undefined` \| [`ActivitiesServiceActivityTagAssociationCreateRequest`](ActivitiesServiceActivityTagAssociationCreateRequest.md) \| `PlainMessage`\<[`ActivitiesServiceActivityTagAssociationCreateRequest`](ActivitiesServiceActivityTagAssociationCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/activities.scailo_pb.ts:2420

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ActivitiesServiceActivityTagAssociationCreateRequest`](ActivitiesServiceActivityTagAssociationCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ActivitiesServiceActivityTagAssociationCreateRequest`](ActivitiesServiceActivityTagAssociationCreateRequest.md)

#### Defined in

src/activities.scailo_pb.ts:2408

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ActivitiesServiceActivityTagAssociationCreateRequest`](ActivitiesServiceActivityTagAssociationCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActivitiesServiceActivityTagAssociationCreateRequest`](ActivitiesServiceActivityTagAssociationCreateRequest.md)

#### Defined in

src/activities.scailo_pb.ts:2412

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ActivitiesServiceActivityTagAssociationCreateRequest`](ActivitiesServiceActivityTagAssociationCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActivitiesServiceActivityTagAssociationCreateRequest`](ActivitiesServiceActivityTagAssociationCreateRequest.md)

#### Defined in

src/activities.scailo_pb.ts:2416
