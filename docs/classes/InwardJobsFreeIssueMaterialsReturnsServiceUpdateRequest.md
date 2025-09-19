[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / InwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest

# Class: InwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest

Describes the parameters necessary to update a record

**`Generated`**

from message Scailo.InwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest

## Hierarchy

- `Message`\<[`InwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest`](InwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest.md)\>

  ↳ **`InwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](InwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest.md#constructor)

### Properties

- [formData](InwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest.md#formdata)
- [id](InwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest.md#id)
- [notifyUsers](InwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest.md#notifyusers)
- [referenceId](InwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest.md#referenceid)
- [userComment](InwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest.md#usercomment)
- [vaultFolderId](InwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest.md#vaultfolderid)
- [fields](InwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest.md#fields)
- [runtime](InwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest.md#runtime)
- [typeName](InwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest.md#typename)

### Methods

- [clone](InwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest.md#clone)
- [equals](InwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest.md#equals)
- [fromBinary](InwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest.md#frombinary)
- [fromJson](InwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest.md#fromjson)
- [fromJsonString](InwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest.md#fromjsonstring)
- [getType](InwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest.md#gettype)
- [toBinary](InwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest.md#tobinary)
- [toJSON](InwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest.md#tojson)
- [toJson](InwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest.md#tojson-1)
- [toJsonString](InwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest.md#tojsonstring)
- [equals](InwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest.md#equals-1)
- [fromBinary](InwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest.md#frombinary-1)
- [fromJson](InwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](InwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new InwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest**(`data?`): [`InwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest`](InwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`InwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest`](InwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest.md)\> |

#### Returns

[`InwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest`](InwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest.md)

#### Overrides

Message\&lt;InwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest\&gt;.constructor

#### Defined in

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:402](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L402)

## Properties

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:400](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L400)

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record that needs to be updated

**`Generated`**

from field: uint64 id = 2;

#### Defined in

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:372](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L372)

___

### notifyUsers

• **notifyUsers**: `boolean` = `false`

Optional boolean value that stores if a notification needs to be sent to users about the update to the record. This is useful when a subsequent operation needs to be performed immediately (such as send to verification after updating the revision)

**`Generated`**

from field: bool notify_users = 3;

#### Defined in

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:379](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L379)

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the inward job free issue material return

**`Generated`**

from field: string reference_id = 10;

#### Defined in

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:393](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L393)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:365](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L365)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:386](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L386)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:409](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L409)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:407](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L407)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.InwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest"``

#### Defined in

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:408](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L408)

## Methods

### clone

▸ **clone**(): [`InwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest`](InwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`InwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest`](InwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`InwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest`](InwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest.md) \| `PlainMessage`\<[`InwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest`](InwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`InwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest`](InwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`InwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest`](InwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`InwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest`](InwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest.md) \| `PlainMessage`\<[`InwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest`](InwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`InwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest`](InwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest.md) \| `PlainMessage`\<[`InwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest`](InwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:430](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L430)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`InwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest`](InwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`InwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest`](InwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest.md)

#### Defined in

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:418](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L418)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`InwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest`](InwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest`](InwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest.md)

#### Defined in

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:422](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L422)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`InwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest`](InwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest`](InwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest.md)

#### Defined in

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:426](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L426)
