[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ReplaceableIndentsServiceUpdateRequest

# Class: ReplaceableIndentsServiceUpdateRequest

Describes the parameters necessary to update a record

**`Generated`**

from message Scailo.ReplaceableIndentsServiceUpdateRequest

## Hierarchy

- `Message`\<[`ReplaceableIndentsServiceUpdateRequest`](ReplaceableIndentsServiceUpdateRequest.md)\>

  ↳ **`ReplaceableIndentsServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](ReplaceableIndentsServiceUpdateRequest.md#constructor)

### Properties

- [description](ReplaceableIndentsServiceUpdateRequest.md#description)
- [formData](ReplaceableIndentsServiceUpdateRequest.md#formdata)
- [id](ReplaceableIndentsServiceUpdateRequest.md#id)
- [notifyUsers](ReplaceableIndentsServiceUpdateRequest.md#notifyusers)
- [referenceId](ReplaceableIndentsServiceUpdateRequest.md#referenceid)
- [supervisor](ReplaceableIndentsServiceUpdateRequest.md#supervisor)
- [userComment](ReplaceableIndentsServiceUpdateRequest.md#usercomment)
- [vaultFolderId](ReplaceableIndentsServiceUpdateRequest.md#vaultfolderid)
- [fields](ReplaceableIndentsServiceUpdateRequest.md#fields)
- [runtime](ReplaceableIndentsServiceUpdateRequest.md#runtime)
- [typeName](ReplaceableIndentsServiceUpdateRequest.md#typename)

### Methods

- [clone](ReplaceableIndentsServiceUpdateRequest.md#clone)
- [equals](ReplaceableIndentsServiceUpdateRequest.md#equals)
- [fromBinary](ReplaceableIndentsServiceUpdateRequest.md#frombinary)
- [fromJson](ReplaceableIndentsServiceUpdateRequest.md#fromjson)
- [fromJsonString](ReplaceableIndentsServiceUpdateRequest.md#fromjsonstring)
- [getType](ReplaceableIndentsServiceUpdateRequest.md#gettype)
- [toBinary](ReplaceableIndentsServiceUpdateRequest.md#tobinary)
- [toJSON](ReplaceableIndentsServiceUpdateRequest.md#tojson)
- [toJson](ReplaceableIndentsServiceUpdateRequest.md#tojson-1)
- [toJsonString](ReplaceableIndentsServiceUpdateRequest.md#tojsonstring)
- [equals](ReplaceableIndentsServiceUpdateRequest.md#equals-1)
- [fromBinary](ReplaceableIndentsServiceUpdateRequest.md#frombinary-1)
- [fromJson](ReplaceableIndentsServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](ReplaceableIndentsServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new ReplaceableIndentsServiceUpdateRequest**(`data?`): [`ReplaceableIndentsServiceUpdateRequest`](ReplaceableIndentsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ReplaceableIndentsServiceUpdateRequest`](ReplaceableIndentsServiceUpdateRequest.md)\> |

#### Returns

[`ReplaceableIndentsServiceUpdateRequest`](ReplaceableIndentsServiceUpdateRequest.md)

#### Overrides

Message\&lt;ReplaceableIndentsServiceUpdateRequest\&gt;.constructor

#### Defined in

src/replaceable_indents.scailo_pb.ts:389

## Properties

### description

• **description**: `string` = `""`

The description of the replaceable indent

**`Generated`**

from field: string description = 16;

#### Defined in

src/replaceable_indents.scailo_pb.ts:380

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

src/replaceable_indents.scailo_pb.ts:387

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record that needs to be updated

**`Generated`**

from field: uint64 id = 2;

#### Defined in

src/replaceable_indents.scailo_pb.ts:345

___

### notifyUsers

• **notifyUsers**: `boolean` = `false`

Optional boolean value that stores if a notification needs to be sent to users about the update to the record. This is useful when a subsequent operation needs to be performed immediately (such as send to verification after updating the revision)

**`Generated`**

from field: bool notify_users = 3;

#### Defined in

src/replaceable_indents.scailo_pb.ts:352

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the replaceable indent

**`Generated`**

from field: string reference_id = 10;

#### Defined in

src/replaceable_indents.scailo_pb.ts:366

___

### supervisor

• **supervisor**: `string` = `""`

The username of the supervisor

**`Generated`**

from field: string supervisor = 13;

#### Defined in

src/replaceable_indents.scailo_pb.ts:373

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/replaceable_indents.scailo_pb.ts:338

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

src/replaceable_indents.scailo_pb.ts:359

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/replaceable_indents.scailo_pb.ts:396

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/replaceable_indents.scailo_pb.ts:394

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ReplaceableIndentsServiceUpdateRequest"``

#### Defined in

src/replaceable_indents.scailo_pb.ts:395

## Methods

### clone

▸ **clone**(): [`ReplaceableIndentsServiceUpdateRequest`](ReplaceableIndentsServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`ReplaceableIndentsServiceUpdateRequest`](ReplaceableIndentsServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`ReplaceableIndentsServiceUpdateRequest`](ReplaceableIndentsServiceUpdateRequest.md) \| `PlainMessage`\<[`ReplaceableIndentsServiceUpdateRequest`](ReplaceableIndentsServiceUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`ReplaceableIndentsServiceUpdateRequest`](ReplaceableIndentsServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ReplaceableIndentsServiceUpdateRequest`](ReplaceableIndentsServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`ReplaceableIndentsServiceUpdateRequest`](ReplaceableIndentsServiceUpdateRequest.md) \| `PlainMessage`\<[`ReplaceableIndentsServiceUpdateRequest`](ReplaceableIndentsServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`ReplaceableIndentsServiceUpdateRequest`](ReplaceableIndentsServiceUpdateRequest.md) \| `PlainMessage`\<[`ReplaceableIndentsServiceUpdateRequest`](ReplaceableIndentsServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/replaceable_indents.scailo_pb.ts:419

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ReplaceableIndentsServiceUpdateRequest`](ReplaceableIndentsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ReplaceableIndentsServiceUpdateRequest`](ReplaceableIndentsServiceUpdateRequest.md)

#### Defined in

src/replaceable_indents.scailo_pb.ts:407

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ReplaceableIndentsServiceUpdateRequest`](ReplaceableIndentsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ReplaceableIndentsServiceUpdateRequest`](ReplaceableIndentsServiceUpdateRequest.md)

#### Defined in

src/replaceable_indents.scailo_pb.ts:411

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ReplaceableIndentsServiceUpdateRequest`](ReplaceableIndentsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ReplaceableIndentsServiceUpdateRequest`](ReplaceableIndentsServiceUpdateRequest.md)

#### Defined in

src/replaceable_indents.scailo_pb.ts:415
