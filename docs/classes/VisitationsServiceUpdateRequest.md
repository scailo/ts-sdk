[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / VisitationsServiceUpdateRequest

# Class: VisitationsServiceUpdateRequest

Describes the parameters necessary to update a record

**`Generated`**

from message Scailo.VisitationsServiceUpdateRequest

## Hierarchy

- `Message`\<[`VisitationsServiceUpdateRequest`](VisitationsServiceUpdateRequest.md)\>

  ↳ **`VisitationsServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](VisitationsServiceUpdateRequest.md#constructor)

### Properties

- [description](VisitationsServiceUpdateRequest.md#description)
- [entryTimestamp](VisitationsServiceUpdateRequest.md#entrytimestamp)
- [exitTimestamp](VisitationsServiceUpdateRequest.md#exittimestamp)
- [formData](VisitationsServiceUpdateRequest.md#formdata)
- [id](VisitationsServiceUpdateRequest.md#id)
- [notifyUsers](VisitationsServiceUpdateRequest.md#notifyusers)
- [referenceId](VisitationsServiceUpdateRequest.md#referenceid)
- [userComment](VisitationsServiceUpdateRequest.md#usercomment)
- [vaultFolderId](VisitationsServiceUpdateRequest.md#vaultfolderid)
- [fields](VisitationsServiceUpdateRequest.md#fields)
- [runtime](VisitationsServiceUpdateRequest.md#runtime)
- [typeName](VisitationsServiceUpdateRequest.md#typename)

### Methods

- [clone](VisitationsServiceUpdateRequest.md#clone)
- [equals](VisitationsServiceUpdateRequest.md#equals)
- [fromBinary](VisitationsServiceUpdateRequest.md#frombinary)
- [fromJson](VisitationsServiceUpdateRequest.md#fromjson)
- [fromJsonString](VisitationsServiceUpdateRequest.md#fromjsonstring)
- [getType](VisitationsServiceUpdateRequest.md#gettype)
- [toBinary](VisitationsServiceUpdateRequest.md#tobinary)
- [toJSON](VisitationsServiceUpdateRequest.md#tojson)
- [toJson](VisitationsServiceUpdateRequest.md#tojson-1)
- [toJsonString](VisitationsServiceUpdateRequest.md#tojsonstring)
- [equals](VisitationsServiceUpdateRequest.md#equals-1)
- [fromBinary](VisitationsServiceUpdateRequest.md#frombinary-1)
- [fromJson](VisitationsServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](VisitationsServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new VisitationsServiceUpdateRequest**(`data?`): [`VisitationsServiceUpdateRequest`](VisitationsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`VisitationsServiceUpdateRequest`](VisitationsServiceUpdateRequest.md)\> |

#### Returns

[`VisitationsServiceUpdateRequest`](VisitationsServiceUpdateRequest.md)

#### Overrides

Message\&lt;VisitationsServiceUpdateRequest\&gt;.constructor

#### Defined in

src/visitations.scailo_pb.ts:310

## Properties

### description

• **description**: `string` = `""`

The description of the visitation

**`Generated`**

from field: string description = 14;

#### Defined in

src/visitations.scailo_pb.ts:301

___

### entryTimestamp

• **entryTimestamp**: `bigint` = `protoInt64.zero`

The UNIX timestamp from when the visitation begins

**`Generated`**

from field: uint64 entry_timestamp = 12;

#### Defined in

src/visitations.scailo_pb.ts:287

___

### exitTimestamp

• **exitTimestamp**: `bigint` = `protoInt64.zero`

The UNIX timestamp from when the visitation ends

**`Generated`**

from field: uint64 exit_timestamp = 13;

#### Defined in

src/visitations.scailo_pb.ts:294

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

src/visitations.scailo_pb.ts:308

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record that needs to be updated

**`Generated`**

from field: uint64 id = 2;

#### Defined in

src/visitations.scailo_pb.ts:259

___

### notifyUsers

• **notifyUsers**: `boolean` = `false`

Optional boolean value that stores if a notification needs to be sent to users about the update to the record. This is useful when a subsequent operation needs to be performed immediately (such as send to verification after updating the revision)

**`Generated`**

from field: bool notify_users = 3;

#### Defined in

src/visitations.scailo_pb.ts:266

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the visitation

**`Generated`**

from field: string reference_id = 10;

#### Defined in

src/visitations.scailo_pb.ts:280

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/visitations.scailo_pb.ts:252

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

src/visitations.scailo_pb.ts:273

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/visitations.scailo_pb.ts:317

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/visitations.scailo_pb.ts:315

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.VisitationsServiceUpdateRequest"``

#### Defined in

src/visitations.scailo_pb.ts:316

## Methods

### clone

▸ **clone**(): [`VisitationsServiceUpdateRequest`](VisitationsServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`VisitationsServiceUpdateRequest`](VisitationsServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`VisitationsServiceUpdateRequest`](VisitationsServiceUpdateRequest.md) \| `PlainMessage`\<[`VisitationsServiceUpdateRequest`](VisitationsServiceUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`VisitationsServiceUpdateRequest`](VisitationsServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`VisitationsServiceUpdateRequest`](VisitationsServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`VisitationsServiceUpdateRequest`](VisitationsServiceUpdateRequest.md) \| `PlainMessage`\<[`VisitationsServiceUpdateRequest`](VisitationsServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`VisitationsServiceUpdateRequest`](VisitationsServiceUpdateRequest.md) \| `PlainMessage`\<[`VisitationsServiceUpdateRequest`](VisitationsServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/visitations.scailo_pb.ts:341

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`VisitationsServiceUpdateRequest`](VisitationsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`VisitationsServiceUpdateRequest`](VisitationsServiceUpdateRequest.md)

#### Defined in

src/visitations.scailo_pb.ts:329

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`VisitationsServiceUpdateRequest`](VisitationsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VisitationsServiceUpdateRequest`](VisitationsServiceUpdateRequest.md)

#### Defined in

src/visitations.scailo_pb.ts:333

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`VisitationsServiceUpdateRequest`](VisitationsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VisitationsServiceUpdateRequest`](VisitationsServiceUpdateRequest.md)

#### Defined in

src/visitations.scailo_pb.ts:337
