[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / MeetingsServiceActionableCreateRequest

# Class: MeetingsServiceActionableCreateRequest

Describes the parameters required to add an actionable to a meeting

**`Generated`**

from message Scailo.MeetingsServiceActionableCreateRequest

## Hierarchy

- `Message`\<[`MeetingsServiceActionableCreateRequest`](MeetingsServiceActionableCreateRequest.md)\>

  ↳ **`MeetingsServiceActionableCreateRequest`**

## Table of contents

### Constructors

- [constructor](MeetingsServiceActionableCreateRequest.md#constructor)

### Properties

- [activityTagId](MeetingsServiceActionableCreateRequest.md#activitytagid)
- [content](MeetingsServiceActionableCreateRequest.md#content)
- [meetingId](MeetingsServiceActionableCreateRequest.md#meetingid)
- [title](MeetingsServiceActionableCreateRequest.md#title)
- [userComment](MeetingsServiceActionableCreateRequest.md#usercomment)
- [fields](MeetingsServiceActionableCreateRequest.md#fields)
- [runtime](MeetingsServiceActionableCreateRequest.md#runtime)
- [typeName](MeetingsServiceActionableCreateRequest.md#typename)

### Methods

- [clone](MeetingsServiceActionableCreateRequest.md#clone)
- [equals](MeetingsServiceActionableCreateRequest.md#equals)
- [fromBinary](MeetingsServiceActionableCreateRequest.md#frombinary)
- [fromJson](MeetingsServiceActionableCreateRequest.md#fromjson)
- [fromJsonString](MeetingsServiceActionableCreateRequest.md#fromjsonstring)
- [getType](MeetingsServiceActionableCreateRequest.md#gettype)
- [toBinary](MeetingsServiceActionableCreateRequest.md#tobinary)
- [toJSON](MeetingsServiceActionableCreateRequest.md#tojson)
- [toJson](MeetingsServiceActionableCreateRequest.md#tojson-1)
- [toJsonString](MeetingsServiceActionableCreateRequest.md#tojsonstring)
- [equals](MeetingsServiceActionableCreateRequest.md#equals-1)
- [fromBinary](MeetingsServiceActionableCreateRequest.md#frombinary-1)
- [fromJson](MeetingsServiceActionableCreateRequest.md#fromjson-1)
- [fromJsonString](MeetingsServiceActionableCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new MeetingsServiceActionableCreateRequest**(`data?`): [`MeetingsServiceActionableCreateRequest`](MeetingsServiceActionableCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`MeetingsServiceActionableCreateRequest`](MeetingsServiceActionableCreateRequest.md)\> |

#### Returns

[`MeetingsServiceActionableCreateRequest`](MeetingsServiceActionableCreateRequest.md)

#### Overrides

Message\&lt;MeetingsServiceActionableCreateRequest\&gt;.constructor

#### Defined in

src/meetings.scailo_pb.ts:1445

## Properties

### activityTagId

• **activityTagId**: `bigint` = `protoInt64.zero`

Stores the optional activity tag ID

**`Generated`**

from field: uint64 activity_tag_id = 13;

#### Defined in

src/meetings.scailo_pb.ts:1443

___

### content

• **content**: `string` = `""`

The content of the actionable

**`Generated`**

from field: string content = 12;

#### Defined in

src/meetings.scailo_pb.ts:1436

___

### meetingId

• **meetingId**: `bigint` = `protoInt64.zero`

Stores the meeting ID

**`Generated`**

from field: uint64 meeting_id = 10;

#### Defined in

src/meetings.scailo_pb.ts:1422

___

### title

• **title**: `string` = `""`

The title of the actionable

**`Generated`**

from field: string title = 11;

#### Defined in

src/meetings.scailo_pb.ts:1429

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/meetings.scailo_pb.ts:1415

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/meetings.scailo_pb.ts:1452

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/meetings.scailo_pb.ts:1450

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.MeetingsServiceActionableCreateRequest"``

#### Defined in

src/meetings.scailo_pb.ts:1451

## Methods

### clone

▸ **clone**(): [`MeetingsServiceActionableCreateRequest`](MeetingsServiceActionableCreateRequest.md)

Create a deep copy.

#### Returns

[`MeetingsServiceActionableCreateRequest`](MeetingsServiceActionableCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`MeetingsServiceActionableCreateRequest`](MeetingsServiceActionableCreateRequest.md) \| `PlainMessage`\<[`MeetingsServiceActionableCreateRequest`](MeetingsServiceActionableCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`MeetingsServiceActionableCreateRequest`](MeetingsServiceActionableCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`MeetingsServiceActionableCreateRequest`](MeetingsServiceActionableCreateRequest.md)\>

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
| `a` | `undefined` \| [`MeetingsServiceActionableCreateRequest`](MeetingsServiceActionableCreateRequest.md) \| `PlainMessage`\<[`MeetingsServiceActionableCreateRequest`](MeetingsServiceActionableCreateRequest.md)\> |
| `b` | `undefined` \| [`MeetingsServiceActionableCreateRequest`](MeetingsServiceActionableCreateRequest.md) \| `PlainMessage`\<[`MeetingsServiceActionableCreateRequest`](MeetingsServiceActionableCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/meetings.scailo_pb.ts:1472

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`MeetingsServiceActionableCreateRequest`](MeetingsServiceActionableCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`MeetingsServiceActionableCreateRequest`](MeetingsServiceActionableCreateRequest.md)

#### Defined in

src/meetings.scailo_pb.ts:1460

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`MeetingsServiceActionableCreateRequest`](MeetingsServiceActionableCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`MeetingsServiceActionableCreateRequest`](MeetingsServiceActionableCreateRequest.md)

#### Defined in

src/meetings.scailo_pb.ts:1464

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`MeetingsServiceActionableCreateRequest`](MeetingsServiceActionableCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`MeetingsServiceActionableCreateRequest`](MeetingsServiceActionableCreateRequest.md)

#### Defined in

src/meetings.scailo_pb.ts:1468
