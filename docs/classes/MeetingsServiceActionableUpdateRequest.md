[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / MeetingsServiceActionableUpdateRequest

# Class: MeetingsServiceActionableUpdateRequest

Describes the parameters required to update an actionable in a meeting

**`Generated`**

from message Scailo.MeetingsServiceActionableUpdateRequest

## Hierarchy

- `Message`\<[`MeetingsServiceActionableUpdateRequest`](MeetingsServiceActionableUpdateRequest.md)\>

  ↳ **`MeetingsServiceActionableUpdateRequest`**

## Table of contents

### Constructors

- [constructor](MeetingsServiceActionableUpdateRequest.md#constructor)

### Properties

- [activityTagId](MeetingsServiceActionableUpdateRequest.md#activitytagid)
- [content](MeetingsServiceActionableUpdateRequest.md#content)
- [id](MeetingsServiceActionableUpdateRequest.md#id)
- [title](MeetingsServiceActionableUpdateRequest.md#title)
- [userComment](MeetingsServiceActionableUpdateRequest.md#usercomment)
- [fields](MeetingsServiceActionableUpdateRequest.md#fields)
- [runtime](MeetingsServiceActionableUpdateRequest.md#runtime)
- [typeName](MeetingsServiceActionableUpdateRequest.md#typename)

### Methods

- [clone](MeetingsServiceActionableUpdateRequest.md#clone)
- [equals](MeetingsServiceActionableUpdateRequest.md#equals)
- [fromBinary](MeetingsServiceActionableUpdateRequest.md#frombinary)
- [fromJson](MeetingsServiceActionableUpdateRequest.md#fromjson)
- [fromJsonString](MeetingsServiceActionableUpdateRequest.md#fromjsonstring)
- [getType](MeetingsServiceActionableUpdateRequest.md#gettype)
- [toBinary](MeetingsServiceActionableUpdateRequest.md#tobinary)
- [toJSON](MeetingsServiceActionableUpdateRequest.md#tojson)
- [toJson](MeetingsServiceActionableUpdateRequest.md#tojson-1)
- [toJsonString](MeetingsServiceActionableUpdateRequest.md#tojsonstring)
- [equals](MeetingsServiceActionableUpdateRequest.md#equals-1)
- [fromBinary](MeetingsServiceActionableUpdateRequest.md#frombinary-1)
- [fromJson](MeetingsServiceActionableUpdateRequest.md#fromjson-1)
- [fromJsonString](MeetingsServiceActionableUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new MeetingsServiceActionableUpdateRequest**(`data?`): [`MeetingsServiceActionableUpdateRequest`](MeetingsServiceActionableUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`MeetingsServiceActionableUpdateRequest`](MeetingsServiceActionableUpdateRequest.md)\> |

#### Returns

[`MeetingsServiceActionableUpdateRequest`](MeetingsServiceActionableUpdateRequest.md)

#### Overrides

Message\&lt;MeetingsServiceActionableUpdateRequest\&gt;.constructor

#### Defined in

src/meetings.scailo_pb.ts:1503

## Properties

### activityTagId

• **activityTagId**: `bigint` = `protoInt64.zero`

Stores the optional activity tag ID

**`Generated`**

from field: uint64 activity_tag_id = 13;

#### Defined in

src/meetings.scailo_pb.ts:1501

___

### content

• **content**: `string` = `""`

The content of the actionable

**`Generated`**

from field: string content = 12;

#### Defined in

src/meetings.scailo_pb.ts:1494

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record

**`Generated`**

from field: uint64 id = 2;

#### Defined in

src/meetings.scailo_pb.ts:1480

___

### title

• **title**: `string` = `""`

The title of the actionable

**`Generated`**

from field: string title = 11;

#### Defined in

src/meetings.scailo_pb.ts:1487

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/meetings.scailo_pb.ts:1473

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/meetings.scailo_pb.ts:1510

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/meetings.scailo_pb.ts:1508

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.MeetingsServiceActionableUpdateRequest"``

#### Defined in

src/meetings.scailo_pb.ts:1509

## Methods

### clone

▸ **clone**(): [`MeetingsServiceActionableUpdateRequest`](MeetingsServiceActionableUpdateRequest.md)

Create a deep copy.

#### Returns

[`MeetingsServiceActionableUpdateRequest`](MeetingsServiceActionableUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`MeetingsServiceActionableUpdateRequest`](MeetingsServiceActionableUpdateRequest.md) \| `PlainMessage`\<[`MeetingsServiceActionableUpdateRequest`](MeetingsServiceActionableUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`MeetingsServiceActionableUpdateRequest`](MeetingsServiceActionableUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`MeetingsServiceActionableUpdateRequest`](MeetingsServiceActionableUpdateRequest.md)\>

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
| `a` | `undefined` \| [`MeetingsServiceActionableUpdateRequest`](MeetingsServiceActionableUpdateRequest.md) \| `PlainMessage`\<[`MeetingsServiceActionableUpdateRequest`](MeetingsServiceActionableUpdateRequest.md)\> |
| `b` | `undefined` \| [`MeetingsServiceActionableUpdateRequest`](MeetingsServiceActionableUpdateRequest.md) \| `PlainMessage`\<[`MeetingsServiceActionableUpdateRequest`](MeetingsServiceActionableUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/meetings.scailo_pb.ts:1530

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`MeetingsServiceActionableUpdateRequest`](MeetingsServiceActionableUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`MeetingsServiceActionableUpdateRequest`](MeetingsServiceActionableUpdateRequest.md)

#### Defined in

src/meetings.scailo_pb.ts:1518

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`MeetingsServiceActionableUpdateRequest`](MeetingsServiceActionableUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`MeetingsServiceActionableUpdateRequest`](MeetingsServiceActionableUpdateRequest.md)

#### Defined in

src/meetings.scailo_pb.ts:1522

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`MeetingsServiceActionableUpdateRequest`](MeetingsServiceActionableUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`MeetingsServiceActionableUpdateRequest`](MeetingsServiceActionableUpdateRequest.md)

#### Defined in

src/meetings.scailo_pb.ts:1526
