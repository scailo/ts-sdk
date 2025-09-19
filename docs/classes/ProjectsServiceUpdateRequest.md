[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ProjectsServiceUpdateRequest

# Class: ProjectsServiceUpdateRequest

Describes the parameters necessary to update a record

**`Generated`**

from message Scailo.ProjectsServiceUpdateRequest

## Hierarchy

- `Message`\<[`ProjectsServiceUpdateRequest`](ProjectsServiceUpdateRequest.md)\>

  ↳ **`ProjectsServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](ProjectsServiceUpdateRequest.md#constructor)

### Properties

- [clientId](ProjectsServiceUpdateRequest.md#clientid)
- [description](ProjectsServiceUpdateRequest.md#description)
- [formData](ProjectsServiceUpdateRequest.md#formdata)
- [id](ProjectsServiceUpdateRequest.md#id)
- [notifyUsers](ProjectsServiceUpdateRequest.md#notifyusers)
- [referenceId](ProjectsServiceUpdateRequest.md#referenceid)
- [userComment](ProjectsServiceUpdateRequest.md#usercomment)
- [vaultFolderId](ProjectsServiceUpdateRequest.md#vaultfolderid)
- [fields](ProjectsServiceUpdateRequest.md#fields)
- [runtime](ProjectsServiceUpdateRequest.md#runtime)
- [typeName](ProjectsServiceUpdateRequest.md#typename)

### Methods

- [clone](ProjectsServiceUpdateRequest.md#clone)
- [equals](ProjectsServiceUpdateRequest.md#equals)
- [fromBinary](ProjectsServiceUpdateRequest.md#frombinary)
- [fromJson](ProjectsServiceUpdateRequest.md#fromjson)
- [fromJsonString](ProjectsServiceUpdateRequest.md#fromjsonstring)
- [getType](ProjectsServiceUpdateRequest.md#gettype)
- [toBinary](ProjectsServiceUpdateRequest.md#tobinary)
- [toJSON](ProjectsServiceUpdateRequest.md#tojson)
- [toJson](ProjectsServiceUpdateRequest.md#tojson-1)
- [toJsonString](ProjectsServiceUpdateRequest.md#tojsonstring)
- [equals](ProjectsServiceUpdateRequest.md#equals-1)
- [fromBinary](ProjectsServiceUpdateRequest.md#frombinary-1)
- [fromJson](ProjectsServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](ProjectsServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new ProjectsServiceUpdateRequest**(`data?`): [`ProjectsServiceUpdateRequest`](ProjectsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ProjectsServiceUpdateRequest`](ProjectsServiceUpdateRequest.md)\> |

#### Returns

[`ProjectsServiceUpdateRequest`](ProjectsServiceUpdateRequest.md)

#### Overrides

Message\&lt;ProjectsServiceUpdateRequest\&gt;.constructor

#### Defined in

[src/projects.scailo_pb.ts:247](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/projects.scailo_pb.ts#L247)

## Properties

### clientId

• **clientId**: `bigint` = `protoInt64.zero`

The optional ID of the associated client

**`Generated`**

from field: uint64 client_id = 12;

#### Defined in

[src/projects.scailo_pb.ts:231](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/projects.scailo_pb.ts#L231)

___

### description

• **description**: `string` = `""`

The description of the project

**`Generated`**

from field: string description = 13;

#### Defined in

[src/projects.scailo_pb.ts:238](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/projects.scailo_pb.ts#L238)

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

[src/projects.scailo_pb.ts:245](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/projects.scailo_pb.ts#L245)

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record that needs to be updated

**`Generated`**

from field: uint64 id = 2;

#### Defined in

[src/projects.scailo_pb.ts:203](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/projects.scailo_pb.ts#L203)

___

### notifyUsers

• **notifyUsers**: `boolean` = `false`

Optional boolean value that stores if a notification needs to be sent to users about the update to the record. This is useful when a subsequent operation needs to be performed immediately (such as send to verification after updating the revision)

**`Generated`**

from field: bool notify_users = 3;

#### Defined in

[src/projects.scailo_pb.ts:210](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/projects.scailo_pb.ts#L210)

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the project

**`Generated`**

from field: string reference_id = 10;

#### Defined in

[src/projects.scailo_pb.ts:224](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/projects.scailo_pb.ts#L224)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/projects.scailo_pb.ts:196](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/projects.scailo_pb.ts#L196)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

[src/projects.scailo_pb.ts:217](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/projects.scailo_pb.ts#L217)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/projects.scailo_pb.ts:254](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/projects.scailo_pb.ts#L254)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/projects.scailo_pb.ts:252](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/projects.scailo_pb.ts#L252)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ProjectsServiceUpdateRequest"``

#### Defined in

[src/projects.scailo_pb.ts:253](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/projects.scailo_pb.ts#L253)

## Methods

### clone

▸ **clone**(): [`ProjectsServiceUpdateRequest`](ProjectsServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`ProjectsServiceUpdateRequest`](ProjectsServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`ProjectsServiceUpdateRequest`](ProjectsServiceUpdateRequest.md) \| `PlainMessage`\<[`ProjectsServiceUpdateRequest`](ProjectsServiceUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`ProjectsServiceUpdateRequest`](ProjectsServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ProjectsServiceUpdateRequest`](ProjectsServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`ProjectsServiceUpdateRequest`](ProjectsServiceUpdateRequest.md) \| `PlainMessage`\<[`ProjectsServiceUpdateRequest`](ProjectsServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`ProjectsServiceUpdateRequest`](ProjectsServiceUpdateRequest.md) \| `PlainMessage`\<[`ProjectsServiceUpdateRequest`](ProjectsServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/projects.scailo_pb.ts:277](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/projects.scailo_pb.ts#L277)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ProjectsServiceUpdateRequest`](ProjectsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ProjectsServiceUpdateRequest`](ProjectsServiceUpdateRequest.md)

#### Defined in

[src/projects.scailo_pb.ts:265](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/projects.scailo_pb.ts#L265)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ProjectsServiceUpdateRequest`](ProjectsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProjectsServiceUpdateRequest`](ProjectsServiceUpdateRequest.md)

#### Defined in

[src/projects.scailo_pb.ts:269](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/projects.scailo_pb.ts#L269)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ProjectsServiceUpdateRequest`](ProjectsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProjectsServiceUpdateRequest`](ProjectsServiceUpdateRequest.md)

#### Defined in

[src/projects.scailo_pb.ts:273](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/projects.scailo_pb.ts#L273)
