[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / OutwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest

# Class: OutwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest

Describes the parameters necessary to update a record

**`Generated`**

from message Scailo.OutwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest

## Hierarchy

- `Message`\<[`OutwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest`](OutwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest.md)\>

  ↳ **`OutwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](OutwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest.md#constructor)

### Properties

- [formData](OutwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest.md#formdata)
- [id](OutwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest.md#id)
- [notifyUsers](OutwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest.md#notifyusers)
- [referenceId](OutwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest.md#referenceid)
- [userComment](OutwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest.md#usercomment)
- [vaultFolderId](OutwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest.md#vaultfolderid)
- [fields](OutwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest.md#fields)
- [runtime](OutwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest.md#runtime)
- [typeName](OutwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest.md#typename)

### Methods

- [clone](OutwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest.md#clone)
- [equals](OutwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest.md#equals)
- [fromBinary](OutwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest.md#frombinary)
- [fromJson](OutwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest.md#fromjson)
- [fromJsonString](OutwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest.md#fromjsonstring)
- [getType](OutwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest.md#gettype)
- [toBinary](OutwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest.md#tobinary)
- [toJSON](OutwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest.md#tojson)
- [toJson](OutwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest.md#tojson-1)
- [toJsonString](OutwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest.md#tojsonstring)
- [equals](OutwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest.md#equals-1)
- [fromBinary](OutwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest.md#frombinary-1)
- [fromJson](OutwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](OutwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new OutwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest**(`data?`): [`OutwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest`](OutwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`OutwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest`](OutwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest.md)\> |

#### Returns

[`OutwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest`](OutwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest.md)

#### Overrides

Message\&lt;OutwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest\&gt;.constructor

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:394](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L394)

## Properties

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:392](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L392)

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record that needs to be updated

**`Generated`**

from field: uint64 id = 2;

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:364](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L364)

___

### notifyUsers

• **notifyUsers**: `boolean` = `false`

Optional boolean value that stores if a notification needs to be sent to users about the update to the record. This is useful when a subsequent operation needs to be performed immediately (such as send to verification after updating the revision)

**`Generated`**

from field: bool notify_users = 3;

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:371](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L371)

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the outward job free issue material return

**`Generated`**

from field: string reference_id = 10;

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:385](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L385)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:357](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L357)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:378](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L378)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:401](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L401)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:399](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L399)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.OutwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest"``

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:400](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L400)

## Methods

### clone

▸ **clone**(): [`OutwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest`](OutwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`OutwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest`](OutwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`OutwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest`](OutwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest.md) \| `PlainMessage`\<[`OutwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest`](OutwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`OutwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest`](OutwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`OutwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest`](OutwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`OutwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest`](OutwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest.md) \| `PlainMessage`\<[`OutwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest`](OutwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`OutwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest`](OutwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest.md) \| `PlainMessage`\<[`OutwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest`](OutwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:422](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L422)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`OutwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest`](OutwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`OutwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest`](OutwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest.md)

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:410](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L410)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`OutwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest`](OutwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest`](OutwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest.md)

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:414](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L414)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`OutwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest`](OutwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest`](OutwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest.md)

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:418](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L418)
