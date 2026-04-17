[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ActivitiesStatusesServiceCreateRequest

# Class: ActivitiesStatusesServiceCreateRequest

Describes the parameters necessary to create a record

**`Generated`**

from message Scailo.ActivitiesStatusesServiceCreateRequest

## Hierarchy

- `Message`\<[`ActivitiesStatusesServiceCreateRequest`](ActivitiesStatusesServiceCreateRequest.md)\>

  ↳ **`ActivitiesStatusesServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](ActivitiesStatusesServiceCreateRequest.md#constructor)

### Properties

- [bgColor](ActivitiesStatusesServiceCreateRequest.md#bgcolor)
- [code](ActivitiesStatusesServiceCreateRequest.md#code)
- [description](ActivitiesStatusesServiceCreateRequest.md#description)
- [entityUuid](ActivitiesStatusesServiceCreateRequest.md#entityuuid)
- [fgColor](ActivitiesStatusesServiceCreateRequest.md#fgcolor)
- [name](ActivitiesStatusesServiceCreateRequest.md#name)
- [userComment](ActivitiesStatusesServiceCreateRequest.md#usercomment)
- [fields](ActivitiesStatusesServiceCreateRequest.md#fields)
- [runtime](ActivitiesStatusesServiceCreateRequest.md#runtime)
- [typeName](ActivitiesStatusesServiceCreateRequest.md#typename)

### Methods

- [clone](ActivitiesStatusesServiceCreateRequest.md#clone)
- [equals](ActivitiesStatusesServiceCreateRequest.md#equals)
- [fromBinary](ActivitiesStatusesServiceCreateRequest.md#frombinary)
- [fromJson](ActivitiesStatusesServiceCreateRequest.md#fromjson)
- [fromJsonString](ActivitiesStatusesServiceCreateRequest.md#fromjsonstring)
- [getType](ActivitiesStatusesServiceCreateRequest.md#gettype)
- [toBinary](ActivitiesStatusesServiceCreateRequest.md#tobinary)
- [toJSON](ActivitiesStatusesServiceCreateRequest.md#tojson)
- [toJson](ActivitiesStatusesServiceCreateRequest.md#tojson-1)
- [toJsonString](ActivitiesStatusesServiceCreateRequest.md#tojsonstring)
- [equals](ActivitiesStatusesServiceCreateRequest.md#equals-1)
- [fromBinary](ActivitiesStatusesServiceCreateRequest.md#frombinary-1)
- [fromJson](ActivitiesStatusesServiceCreateRequest.md#fromjson-1)
- [fromJsonString](ActivitiesStatusesServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new ActivitiesStatusesServiceCreateRequest**(`data?`): [`ActivitiesStatusesServiceCreateRequest`](ActivitiesStatusesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ActivitiesStatusesServiceCreateRequest`](ActivitiesStatusesServiceCreateRequest.md)\> |

#### Returns

[`ActivitiesStatusesServiceCreateRequest`](ActivitiesStatusesServiceCreateRequest.md)

#### Overrides

Message\&lt;ActivitiesStatusesServiceCreateRequest\&gt;.constructor

#### Defined in

[src/activities_statuses.scailo_pb.ts:150](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/activities_statuses.scailo_pb.ts#L150)

## Properties

### bgColor

• **bgColor**: `string` = `""`

The background color that is displayed for easy recognition

**`Generated`**

from field: string bg_color = 13;

#### Defined in

[src/activities_statuses.scailo_pb.ts:141](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/activities_statuses.scailo_pb.ts#L141)

___

### code

• **code**: `string` = `""`

The unique code by which the activity status is classified

**`Generated`**

from field: string code = 11;

#### Defined in

[src/activities_statuses.scailo_pb.ts:127](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/activities_statuses.scailo_pb.ts#L127)

___

### description

• **description**: `string` = `""`

The description of the activity status

**`Generated`**

from field: string description = 14;

#### Defined in

[src/activities_statuses.scailo_pb.ts:148](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/activities_statuses.scailo_pb.ts#L148)

___

### entityUuid

• **entityUuid**: `string` = `""`

**`Optional`**

**`Description`**

The globally unique identifier for the Organization or Business Entity.

**`Example`**

```ts
"550e8400-e29b-41d4-a716-446655440000"
```

**`Regex`**

^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$

**`Format`**

If provided, must be a valid v4 UUID in canonical hyphenated form.

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/activities_statuses.scailo_pb.ts:106](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/activities_statuses.scailo_pb.ts#L106)

___

### fgColor

• **fgColor**: `string` = `""`

The color of the text that is displayed for easy recognition

**`Generated`**

from field: string fg_color = 12;

#### Defined in

[src/activities_statuses.scailo_pb.ts:134](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/activities_statuses.scailo_pb.ts#L134)

___

### name

• **name**: `string` = `""`

The name of the activity status

**`Generated`**

from field: string name = 10;

#### Defined in

[src/activities_statuses.scailo_pb.ts:120](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/activities_statuses.scailo_pb.ts#L120)

___

### userComment

• **userComment**: `string` = `""`

ActivitiesStatuses any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 2;

#### Defined in

[src/activities_statuses.scailo_pb.ts:113](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/activities_statuses.scailo_pb.ts#L113)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/activities_statuses.scailo_pb.ts:157](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/activities_statuses.scailo_pb.ts#L157)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/activities_statuses.scailo_pb.ts:155](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/activities_statuses.scailo_pb.ts#L155)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ActivitiesStatusesServiceCreateRequest"``

#### Defined in

[src/activities_statuses.scailo_pb.ts:156](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/activities_statuses.scailo_pb.ts#L156)

## Methods

### clone

▸ **clone**(): [`ActivitiesStatusesServiceCreateRequest`](ActivitiesStatusesServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`ActivitiesStatusesServiceCreateRequest`](ActivitiesStatusesServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`ActivitiesStatusesServiceCreateRequest`](ActivitiesStatusesServiceCreateRequest.md) \| `PlainMessage`\<[`ActivitiesStatusesServiceCreateRequest`](ActivitiesStatusesServiceCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`ActivitiesStatusesServiceCreateRequest`](ActivitiesStatusesServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ActivitiesStatusesServiceCreateRequest`](ActivitiesStatusesServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`ActivitiesStatusesServiceCreateRequest`](ActivitiesStatusesServiceCreateRequest.md) \| `PlainMessage`\<[`ActivitiesStatusesServiceCreateRequest`](ActivitiesStatusesServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`ActivitiesStatusesServiceCreateRequest`](ActivitiesStatusesServiceCreateRequest.md) \| `PlainMessage`\<[`ActivitiesStatusesServiceCreateRequest`](ActivitiesStatusesServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/activities_statuses.scailo_pb.ts:179](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/activities_statuses.scailo_pb.ts#L179)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ActivitiesStatusesServiceCreateRequest`](ActivitiesStatusesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ActivitiesStatusesServiceCreateRequest`](ActivitiesStatusesServiceCreateRequest.md)

#### Defined in

[src/activities_statuses.scailo_pb.ts:167](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/activities_statuses.scailo_pb.ts#L167)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ActivitiesStatusesServiceCreateRequest`](ActivitiesStatusesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActivitiesStatusesServiceCreateRequest`](ActivitiesStatusesServiceCreateRequest.md)

#### Defined in

[src/activities_statuses.scailo_pb.ts:171](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/activities_statuses.scailo_pb.ts#L171)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ActivitiesStatusesServiceCreateRequest`](ActivitiesStatusesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActivitiesStatusesServiceCreateRequest`](ActivitiesStatusesServiceCreateRequest.md)

#### Defined in

[src/activities_statuses.scailo_pb.ts:175](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/activities_statuses.scailo_pb.ts#L175)
