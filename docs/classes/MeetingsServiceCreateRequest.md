[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / MeetingsServiceCreateRequest

# Class: MeetingsServiceCreateRequest

Describes the parameters necessary to create a record

**`Generated`**

from message Scailo.MeetingsServiceCreateRequest

## Hierarchy

- `Message`\<[`MeetingsServiceCreateRequest`](MeetingsServiceCreateRequest.md)\>

  ↳ **`MeetingsServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](MeetingsServiceCreateRequest.md#constructor)

### Properties

- [description](MeetingsServiceCreateRequest.md#description)
- [endsAt](MeetingsServiceCreateRequest.md#endsat)
- [entityUuid](MeetingsServiceCreateRequest.md#entityuuid)
- [formData](MeetingsServiceCreateRequest.md#formdata)
- [projectId](MeetingsServiceCreateRequest.md#projectid)
- [startsAt](MeetingsServiceCreateRequest.md#startsat)
- [title](MeetingsServiceCreateRequest.md#title)
- [userComment](MeetingsServiceCreateRequest.md#usercomment)
- [vaultFolderId](MeetingsServiceCreateRequest.md#vaultfolderid)
- [fields](MeetingsServiceCreateRequest.md#fields)
- [runtime](MeetingsServiceCreateRequest.md#runtime)
- [typeName](MeetingsServiceCreateRequest.md#typename)

### Methods

- [clone](MeetingsServiceCreateRequest.md#clone)
- [equals](MeetingsServiceCreateRequest.md#equals)
- [fromBinary](MeetingsServiceCreateRequest.md#frombinary)
- [fromJson](MeetingsServiceCreateRequest.md#fromjson)
- [fromJsonString](MeetingsServiceCreateRequest.md#fromjsonstring)
- [getType](MeetingsServiceCreateRequest.md#gettype)
- [toBinary](MeetingsServiceCreateRequest.md#tobinary)
- [toJSON](MeetingsServiceCreateRequest.md#tojson)
- [toJson](MeetingsServiceCreateRequest.md#tojson-1)
- [toJsonString](MeetingsServiceCreateRequest.md#tojsonstring)
- [equals](MeetingsServiceCreateRequest.md#equals-1)
- [fromBinary](MeetingsServiceCreateRequest.md#frombinary-1)
- [fromJson](MeetingsServiceCreateRequest.md#fromjson-1)
- [fromJsonString](MeetingsServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new MeetingsServiceCreateRequest**(`data?`): [`MeetingsServiceCreateRequest`](MeetingsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`MeetingsServiceCreateRequest`](MeetingsServiceCreateRequest.md)\> |

#### Returns

[`MeetingsServiceCreateRequest`](MeetingsServiceCreateRequest.md)

#### Overrides

Message\&lt;MeetingsServiceCreateRequest\&gt;.constructor

#### Defined in

src/meetings.scailo_pb.ts:407

## Properties

### description

• **description**: `string` = `""`

The description of the meeting

**`Generated`**

from field: string description = 13;

#### Defined in

src/meetings.scailo_pb.ts:398

___

### endsAt

• **endsAt**: `bigint` = `protoInt64.zero`

The end UNIX timestamp

**`Generated`**

from field: uint64 ends_at = 12;

#### Defined in

src/meetings.scailo_pb.ts:391

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/meetings.scailo_pb.ts:349

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

src/meetings.scailo_pb.ts:405

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The associated project ID

**`Generated`**

from field: uint64 project_id = 9;

#### Defined in

src/meetings.scailo_pb.ts:370

___

### startsAt

• **startsAt**: `bigint` = `protoInt64.zero`

The start UNIX timestamp

**`Generated`**

from field: uint64 starts_at = 11;

#### Defined in

src/meetings.scailo_pb.ts:384

___

### title

• **title**: `string` = `""`

The title of the meeting

**`Generated`**

from field: string title = 10;

#### Defined in

src/meetings.scailo_pb.ts:377

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 2;

#### Defined in

src/meetings.scailo_pb.ts:356

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 8;

#### Defined in

src/meetings.scailo_pb.ts:363

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/meetings.scailo_pb.ts:414

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/meetings.scailo_pb.ts:412

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.MeetingsServiceCreateRequest"``

#### Defined in

src/meetings.scailo_pb.ts:413

## Methods

### clone

▸ **clone**(): [`MeetingsServiceCreateRequest`](MeetingsServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`MeetingsServiceCreateRequest`](MeetingsServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`MeetingsServiceCreateRequest`](MeetingsServiceCreateRequest.md) \| `PlainMessage`\<[`MeetingsServiceCreateRequest`](MeetingsServiceCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`MeetingsServiceCreateRequest`](MeetingsServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`MeetingsServiceCreateRequest`](MeetingsServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`MeetingsServiceCreateRequest`](MeetingsServiceCreateRequest.md) \| `PlainMessage`\<[`MeetingsServiceCreateRequest`](MeetingsServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`MeetingsServiceCreateRequest`](MeetingsServiceCreateRequest.md) \| `PlainMessage`\<[`MeetingsServiceCreateRequest`](MeetingsServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/meetings.scailo_pb.ts:438

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`MeetingsServiceCreateRequest`](MeetingsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`MeetingsServiceCreateRequest`](MeetingsServiceCreateRequest.md)

#### Defined in

src/meetings.scailo_pb.ts:426

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`MeetingsServiceCreateRequest`](MeetingsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`MeetingsServiceCreateRequest`](MeetingsServiceCreateRequest.md)

#### Defined in

src/meetings.scailo_pb.ts:430

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`MeetingsServiceCreateRequest`](MeetingsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`MeetingsServiceCreateRequest`](MeetingsServiceCreateRequest.md)

#### Defined in

src/meetings.scailo_pb.ts:434
