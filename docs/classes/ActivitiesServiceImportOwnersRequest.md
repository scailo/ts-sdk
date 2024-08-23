[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / ActivitiesServiceImportOwnersRequest

# Class: ActivitiesServiceImportOwnersRequest

Describes the data model to handle importing of employees from the given identifier representing a team or a department

**`Generated`**

from message Scailo.ActivitiesServiceImportOwnersRequest

## Hierarchy

- `Message`\<[`ActivitiesServiceImportOwnersRequest`](ActivitiesServiceImportOwnersRequest.md)\>

  ↳ **`ActivitiesServiceImportOwnersRequest`**

## Table of contents

### Constructors

- [constructor](ActivitiesServiceImportOwnersRequest.md#constructor)

### Properties

- [activityId](ActivitiesServiceImportOwnersRequest.md#activityid)
- [deleteExisting](ActivitiesServiceImportOwnersRequest.md#deleteexisting)
- [resourceId](ActivitiesServiceImportOwnersRequest.md#resourceid)
- [userComment](ActivitiesServiceImportOwnersRequest.md#usercomment)
- [fields](ActivitiesServiceImportOwnersRequest.md#fields)
- [runtime](ActivitiesServiceImportOwnersRequest.md#runtime)
- [typeName](ActivitiesServiceImportOwnersRequest.md#typename)

### Methods

- [clone](ActivitiesServiceImportOwnersRequest.md#clone)
- [equals](ActivitiesServiceImportOwnersRequest.md#equals)
- [fromBinary](ActivitiesServiceImportOwnersRequest.md#frombinary)
- [fromJson](ActivitiesServiceImportOwnersRequest.md#fromjson)
- [fromJsonString](ActivitiesServiceImportOwnersRequest.md#fromjsonstring)
- [getType](ActivitiesServiceImportOwnersRequest.md#gettype)
- [toBinary](ActivitiesServiceImportOwnersRequest.md#tobinary)
- [toJSON](ActivitiesServiceImportOwnersRequest.md#tojson)
- [toJson](ActivitiesServiceImportOwnersRequest.md#tojson-1)
- [toJsonString](ActivitiesServiceImportOwnersRequest.md#tojsonstring)
- [equals](ActivitiesServiceImportOwnersRequest.md#equals-1)
- [fromBinary](ActivitiesServiceImportOwnersRequest.md#frombinary-1)
- [fromJson](ActivitiesServiceImportOwnersRequest.md#fromjson-1)
- [fromJsonString](ActivitiesServiceImportOwnersRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new ActivitiesServiceImportOwnersRequest**(`data?`): [`ActivitiesServiceImportOwnersRequest`](ActivitiesServiceImportOwnersRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ActivitiesServiceImportOwnersRequest`](ActivitiesServiceImportOwnersRequest.md)\> |

#### Returns

[`ActivitiesServiceImportOwnersRequest`](ActivitiesServiceImportOwnersRequest.md)

#### Overrides

Message\&lt;ActivitiesServiceImportOwnersRequest\&gt;.constructor

#### Defined in

src/activities.scailo_pb.ts:2750

## Properties

### activityId

• **activityId**: `bigint` = `protoInt64.zero`

The ID of the activity

**`Generated`**

from field: uint64 activity_id = 2;

#### Defined in

src/activities.scailo_pb.ts:2734

___

### deleteExisting

• **deleteExisting**: `boolean` = `false`

Stores if the existing employees in the activity need to be deleted before adding from the source record

**`Generated`**

from field: bool delete_existing = 4;

#### Defined in

src/activities.scailo_pb.ts:2748

___

### resourceId

• **resourceId**: `bigint` = `protoInt64.zero`

The ID of the team or the department from which employees need to be added to the activity

**`Generated`**

from field: uint64 resource_id = 3;

#### Defined in

src/activities.scailo_pb.ts:2741

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/activities.scailo_pb.ts:2727

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/activities.scailo_pb.ts:2757

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/activities.scailo_pb.ts:2755

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ActivitiesServiceImportOwnersRequest"``

#### Defined in

src/activities.scailo_pb.ts:2756

## Methods

### clone

▸ **clone**(): [`ActivitiesServiceImportOwnersRequest`](ActivitiesServiceImportOwnersRequest.md)

Create a deep copy.

#### Returns

[`ActivitiesServiceImportOwnersRequest`](ActivitiesServiceImportOwnersRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`ActivitiesServiceImportOwnersRequest`](ActivitiesServiceImportOwnersRequest.md) \| `PlainMessage`\<[`ActivitiesServiceImportOwnersRequest`](ActivitiesServiceImportOwnersRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`ActivitiesServiceImportOwnersRequest`](ActivitiesServiceImportOwnersRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ActivitiesServiceImportOwnersRequest`](ActivitiesServiceImportOwnersRequest.md)\>

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
| `a` | `undefined` \| [`ActivitiesServiceImportOwnersRequest`](ActivitiesServiceImportOwnersRequest.md) \| `PlainMessage`\<[`ActivitiesServiceImportOwnersRequest`](ActivitiesServiceImportOwnersRequest.md)\> |
| `b` | `undefined` \| [`ActivitiesServiceImportOwnersRequest`](ActivitiesServiceImportOwnersRequest.md) \| `PlainMessage`\<[`ActivitiesServiceImportOwnersRequest`](ActivitiesServiceImportOwnersRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/activities.scailo_pb.ts:2776

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ActivitiesServiceImportOwnersRequest`](ActivitiesServiceImportOwnersRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ActivitiesServiceImportOwnersRequest`](ActivitiesServiceImportOwnersRequest.md)

#### Defined in

src/activities.scailo_pb.ts:2764

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ActivitiesServiceImportOwnersRequest`](ActivitiesServiceImportOwnersRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActivitiesServiceImportOwnersRequest`](ActivitiesServiceImportOwnersRequest.md)

#### Defined in

src/activities.scailo_pb.ts:2768

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ActivitiesServiceImportOwnersRequest`](ActivitiesServiceImportOwnersRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActivitiesServiceImportOwnersRequest`](ActivitiesServiceImportOwnersRequest.md)

#### Defined in

src/activities.scailo_pb.ts:2772
