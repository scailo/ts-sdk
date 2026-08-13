[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / MeetingsServiceUpdateRequest

# Class: MeetingsServiceUpdateRequest

Describes the parameters necessary to update a record

**`Generated`**

from message Scailo.MeetingsServiceUpdateRequest

## Hierarchy

- `Message`\<[`MeetingsServiceUpdateRequest`](MeetingsServiceUpdateRequest.md)\>

  ↳ **`MeetingsServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](MeetingsServiceUpdateRequest.md#constructor)

### Properties

- [description](MeetingsServiceUpdateRequest.md#description)
- [endsAt](MeetingsServiceUpdateRequest.md#endsat)
- [formData](MeetingsServiceUpdateRequest.md#formdata)
- [id](MeetingsServiceUpdateRequest.md#id)
- [notifyUsers](MeetingsServiceUpdateRequest.md#notifyusers)
- [projectId](MeetingsServiceUpdateRequest.md#projectid)
- [startsAt](MeetingsServiceUpdateRequest.md#startsat)
- [title](MeetingsServiceUpdateRequest.md#title)
- [userComment](MeetingsServiceUpdateRequest.md#usercomment)
- [vaultFolderId](MeetingsServiceUpdateRequest.md#vaultfolderid)
- [fields](MeetingsServiceUpdateRequest.md#fields)
- [runtime](MeetingsServiceUpdateRequest.md#runtime)
- [typeName](MeetingsServiceUpdateRequest.md#typename)

### Methods

- [clone](MeetingsServiceUpdateRequest.md#clone)
- [equals](MeetingsServiceUpdateRequest.md#equals)
- [fromBinary](MeetingsServiceUpdateRequest.md#frombinary)
- [fromJson](MeetingsServiceUpdateRequest.md#fromjson)
- [fromJsonString](MeetingsServiceUpdateRequest.md#fromjsonstring)
- [getType](MeetingsServiceUpdateRequest.md#gettype)
- [toBinary](MeetingsServiceUpdateRequest.md#tobinary)
- [toJSON](MeetingsServiceUpdateRequest.md#tojson)
- [toJson](MeetingsServiceUpdateRequest.md#tojson-1)
- [toJsonString](MeetingsServiceUpdateRequest.md#tojsonstring)
- [equals](MeetingsServiceUpdateRequest.md#equals-1)
- [fromBinary](MeetingsServiceUpdateRequest.md#frombinary-1)
- [fromJson](MeetingsServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](MeetingsServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new MeetingsServiceUpdateRequest**(`data?`): [`MeetingsServiceUpdateRequest`](MeetingsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`MeetingsServiceUpdateRequest`](MeetingsServiceUpdateRequest.md)\> |

#### Returns

[`MeetingsServiceUpdateRequest`](MeetingsServiceUpdateRequest.md)

#### Overrides

Message\&lt;MeetingsServiceUpdateRequest\&gt;.constructor

#### Defined in

[src/meetings.scailo_pb.ts:575](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/meetings.scailo_pb.ts#L575)

## Properties

### description

• **description**: `string` = `""`

The description of the meeting

**`Generated`**

from field: string description = 13;

#### Defined in

[src/meetings.scailo_pb.ts:559](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/meetings.scailo_pb.ts#L559)

___

### endsAt

• **endsAt**: `bigint` = `protoInt64.zero`

The end UNIX timestamp

**`Generated`**

from field: uint64 ends_at = 12;

#### Defined in

[src/meetings.scailo_pb.ts:552](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/meetings.scailo_pb.ts#L552)

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

**`Optional`**

**`Description`**

A collection of dynamic form fields for organization-specific data.

**`Example`**

```ts
[]
```

**`Format`**

An array/list of FormFieldDatumCreateRequest entries. Can be left empty if no custom attributes are needed.

**`Generated`**

from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

[src/meetings.scailo_pb.ts:573](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/meetings.scailo_pb.ts#L573)

___

### id

• **id**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The unique internal identifier of the target record that needs to be updated.

**`Example`**

```ts
1024
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 id = 2;

#### Defined in

[src/meetings.scailo_pb.ts:505](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/meetings.scailo_pb.ts#L505)

___

### notifyUsers

• **notifyUsers**: `boolean` = `false`

**`Optional`**

**`Description`**

Flag to trigger system notifications to relevant users upon update. Set to true if subsequent workflows (like verification) depend on this change.

**`Example`**

```ts
true
```

**`Generated`**

from field: bool notify_users = 3;

#### Defined in

[src/meetings.scailo_pb.ts:517](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/meetings.scailo_pb.ts#L517)

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The associated project ID

**`Generated`**

from field: uint64 project_id = 9;

#### Defined in

[src/meetings.scailo_pb.ts:531](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/meetings.scailo_pb.ts#L531)

___

### startsAt

• **startsAt**: `bigint` = `protoInt64.zero`

The start UNIX timestamp

**`Generated`**

from field: uint64 starts_at = 11;

#### Defined in

[src/meetings.scailo_pb.ts:545](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/meetings.scailo_pb.ts#L545)

___

### title

• **title**: `string` = `""`

The title of the meeting

**`Generated`**

from field: string title = 10;

#### Defined in

[src/meetings.scailo_pb.ts:538](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/meetings.scailo_pb.ts#L538)

___

### userComment

• **userComment**: `string` = `""`

**`Optional`**

**`Description`**

Audit log comment or justification for creating this record. This is stored in the record's history for compliance purposes.

**`Example`**

```ts
"This is a comment for audit purposes."
```

**`Regex`**

.*

**`Format`**

May contain any UTF-8 characters or be left empty.

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/meetings.scailo_pb.ts:489](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/meetings.scailo_pb.ts#L489)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 8;

#### Defined in

[src/meetings.scailo_pb.ts:524](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/meetings.scailo_pb.ts#L524)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/meetings.scailo_pb.ts:582](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/meetings.scailo_pb.ts#L582)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/meetings.scailo_pb.ts:580](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/meetings.scailo_pb.ts#L580)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.MeetingsServiceUpdateRequest"``

#### Defined in

[src/meetings.scailo_pb.ts:581](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/meetings.scailo_pb.ts#L581)

## Methods

### clone

▸ **clone**(): [`MeetingsServiceUpdateRequest`](MeetingsServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`MeetingsServiceUpdateRequest`](MeetingsServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`MeetingsServiceUpdateRequest`](MeetingsServiceUpdateRequest.md) \| `PlainMessage`\<[`MeetingsServiceUpdateRequest`](MeetingsServiceUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`MeetingsServiceUpdateRequest`](MeetingsServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`MeetingsServiceUpdateRequest`](MeetingsServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`MeetingsServiceUpdateRequest`](MeetingsServiceUpdateRequest.md) \| `PlainMessage`\<[`MeetingsServiceUpdateRequest`](MeetingsServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`MeetingsServiceUpdateRequest`](MeetingsServiceUpdateRequest.md) \| `PlainMessage`\<[`MeetingsServiceUpdateRequest`](MeetingsServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/meetings.scailo_pb.ts:607](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/meetings.scailo_pb.ts#L607)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`MeetingsServiceUpdateRequest`](MeetingsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`MeetingsServiceUpdateRequest`](MeetingsServiceUpdateRequest.md)

#### Defined in

[src/meetings.scailo_pb.ts:595](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/meetings.scailo_pb.ts#L595)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`MeetingsServiceUpdateRequest`](MeetingsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`MeetingsServiceUpdateRequest`](MeetingsServiceUpdateRequest.md)

#### Defined in

[src/meetings.scailo_pb.ts:599](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/meetings.scailo_pb.ts#L599)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`MeetingsServiceUpdateRequest`](MeetingsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`MeetingsServiceUpdateRequest`](MeetingsServiceUpdateRequest.md)

#### Defined in

[src/meetings.scailo_pb.ts:603](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/meetings.scailo_pb.ts#L603)
