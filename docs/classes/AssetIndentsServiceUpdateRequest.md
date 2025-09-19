[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / AssetIndentsServiceUpdateRequest

# Class: AssetIndentsServiceUpdateRequest

Describes the parameters necessary to update a record

**`Generated`**

from message Scailo.AssetIndentsServiceUpdateRequest

## Hierarchy

- `Message`\<[`AssetIndentsServiceUpdateRequest`](AssetIndentsServiceUpdateRequest.md)\>

  ↳ **`AssetIndentsServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](AssetIndentsServiceUpdateRequest.md#constructor)

### Properties

- [formData](AssetIndentsServiceUpdateRequest.md#formdata)
- [id](AssetIndentsServiceUpdateRequest.md#id)
- [notifyUsers](AssetIndentsServiceUpdateRequest.md#notifyusers)
- [projectId](AssetIndentsServiceUpdateRequest.md#projectid)
- [referenceId](AssetIndentsServiceUpdateRequest.md#referenceid)
- [userComment](AssetIndentsServiceUpdateRequest.md#usercomment)
- [userId](AssetIndentsServiceUpdateRequest.md#userid)
- [vaultFolderId](AssetIndentsServiceUpdateRequest.md#vaultfolderid)
- [fields](AssetIndentsServiceUpdateRequest.md#fields)
- [runtime](AssetIndentsServiceUpdateRequest.md#runtime)
- [typeName](AssetIndentsServiceUpdateRequest.md#typename)

### Methods

- [clone](AssetIndentsServiceUpdateRequest.md#clone)
- [equals](AssetIndentsServiceUpdateRequest.md#equals)
- [fromBinary](AssetIndentsServiceUpdateRequest.md#frombinary)
- [fromJson](AssetIndentsServiceUpdateRequest.md#fromjson)
- [fromJsonString](AssetIndentsServiceUpdateRequest.md#fromjsonstring)
- [getType](AssetIndentsServiceUpdateRequest.md#gettype)
- [toBinary](AssetIndentsServiceUpdateRequest.md#tobinary)
- [toJSON](AssetIndentsServiceUpdateRequest.md#tojson)
- [toJson](AssetIndentsServiceUpdateRequest.md#tojson-1)
- [toJsonString](AssetIndentsServiceUpdateRequest.md#tojsonstring)
- [equals](AssetIndentsServiceUpdateRequest.md#equals-1)
- [fromBinary](AssetIndentsServiceUpdateRequest.md#frombinary-1)
- [fromJson](AssetIndentsServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](AssetIndentsServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new AssetIndentsServiceUpdateRequest**(`data?`): [`AssetIndentsServiceUpdateRequest`](AssetIndentsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`AssetIndentsServiceUpdateRequest`](AssetIndentsServiceUpdateRequest.md)\> |

#### Returns

[`AssetIndentsServiceUpdateRequest`](AssetIndentsServiceUpdateRequest.md)

#### Overrides

Message\&lt;AssetIndentsServiceUpdateRequest\&gt;.constructor

#### Defined in

[src/asset_indents.scailo_pb.ts:373](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/asset_indents.scailo_pb.ts#L373)

## Properties

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

[src/asset_indents.scailo_pb.ts:371](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/asset_indents.scailo_pb.ts#L371)

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record that needs to be updated

**`Generated`**

from field: uint64 id = 2;

#### Defined in

[src/asset_indents.scailo_pb.ts:329](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/asset_indents.scailo_pb.ts#L329)

___

### notifyUsers

• **notifyUsers**: `boolean` = `false`

Optional boolean value that stores if a notification needs to be sent to users about the update to the record. This is useful when a subsequent operation needs to be performed immediately (such as send to verification after updating the revision)

**`Generated`**

from field: bool notify_users = 3;

#### Defined in

[src/asset_indents.scailo_pb.ts:336](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/asset_indents.scailo_pb.ts#L336)

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The associated project ID

**`Generated`**

from field: uint64 project_id = 8;

#### Defined in

[src/asset_indents.scailo_pb.ts:343](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/asset_indents.scailo_pb.ts#L343)

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the asset indent

**`Generated`**

from field: string reference_id = 10;

#### Defined in

[src/asset_indents.scailo_pb.ts:357](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/asset_indents.scailo_pb.ts#L357)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/asset_indents.scailo_pb.ts:322](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/asset_indents.scailo_pb.ts#L322)

___

### userId

• **userId**: `bigint` = `protoInt64.zero`

The ID of the associated user

**`Generated`**

from field: uint64 user_id = 15;

#### Defined in

[src/asset_indents.scailo_pb.ts:364](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/asset_indents.scailo_pb.ts#L364)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

[src/asset_indents.scailo_pb.ts:350](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/asset_indents.scailo_pb.ts#L350)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/asset_indents.scailo_pb.ts:380](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/asset_indents.scailo_pb.ts#L380)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/asset_indents.scailo_pb.ts:378](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/asset_indents.scailo_pb.ts#L378)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.AssetIndentsServiceUpdateRequest"``

#### Defined in

[src/asset_indents.scailo_pb.ts:379](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/asset_indents.scailo_pb.ts#L379)

## Methods

### clone

▸ **clone**(): [`AssetIndentsServiceUpdateRequest`](AssetIndentsServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`AssetIndentsServiceUpdateRequest`](AssetIndentsServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`AssetIndentsServiceUpdateRequest`](AssetIndentsServiceUpdateRequest.md) \| `PlainMessage`\<[`AssetIndentsServiceUpdateRequest`](AssetIndentsServiceUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`AssetIndentsServiceUpdateRequest`](AssetIndentsServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`AssetIndentsServiceUpdateRequest`](AssetIndentsServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`AssetIndentsServiceUpdateRequest`](AssetIndentsServiceUpdateRequest.md) \| `PlainMessage`\<[`AssetIndentsServiceUpdateRequest`](AssetIndentsServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`AssetIndentsServiceUpdateRequest`](AssetIndentsServiceUpdateRequest.md) \| `PlainMessage`\<[`AssetIndentsServiceUpdateRequest`](AssetIndentsServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/asset_indents.scailo_pb.ts:403](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/asset_indents.scailo_pb.ts#L403)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`AssetIndentsServiceUpdateRequest`](AssetIndentsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`AssetIndentsServiceUpdateRequest`](AssetIndentsServiceUpdateRequest.md)

#### Defined in

[src/asset_indents.scailo_pb.ts:391](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/asset_indents.scailo_pb.ts#L391)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`AssetIndentsServiceUpdateRequest`](AssetIndentsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AssetIndentsServiceUpdateRequest`](AssetIndentsServiceUpdateRequest.md)

#### Defined in

[src/asset_indents.scailo_pb.ts:395](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/asset_indents.scailo_pb.ts#L395)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`AssetIndentsServiceUpdateRequest`](AssetIndentsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AssetIndentsServiceUpdateRequest`](AssetIndentsServiceUpdateRequest.md)

#### Defined in

[src/asset_indents.scailo_pb.ts:399](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/asset_indents.scailo_pb.ts#L399)
