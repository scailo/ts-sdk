[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / OutwardJobsFreeIssueMaterialsServiceUpdateRequest

# Class: OutwardJobsFreeIssueMaterialsServiceUpdateRequest

Describes the parameters necessary to update a record

**`Generated`**

from message Scailo.OutwardJobsFreeIssueMaterialsServiceUpdateRequest

## Hierarchy

- `Message`\<[`OutwardJobsFreeIssueMaterialsServiceUpdateRequest`](OutwardJobsFreeIssueMaterialsServiceUpdateRequest.md)\>

  ↳ **`OutwardJobsFreeIssueMaterialsServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](OutwardJobsFreeIssueMaterialsServiceUpdateRequest.md#constructor)

### Properties

- [formData](OutwardJobsFreeIssueMaterialsServiceUpdateRequest.md#formdata)
- [id](OutwardJobsFreeIssueMaterialsServiceUpdateRequest.md#id)
- [notifyUsers](OutwardJobsFreeIssueMaterialsServiceUpdateRequest.md#notifyusers)
- [referenceId](OutwardJobsFreeIssueMaterialsServiceUpdateRequest.md#referenceid)
- [userComment](OutwardJobsFreeIssueMaterialsServiceUpdateRequest.md#usercomment)
- [vaultFolderId](OutwardJobsFreeIssueMaterialsServiceUpdateRequest.md#vaultfolderid)
- [fields](OutwardJobsFreeIssueMaterialsServiceUpdateRequest.md#fields)
- [runtime](OutwardJobsFreeIssueMaterialsServiceUpdateRequest.md#runtime)
- [typeName](OutwardJobsFreeIssueMaterialsServiceUpdateRequest.md#typename)

### Methods

- [clone](OutwardJobsFreeIssueMaterialsServiceUpdateRequest.md#clone)
- [equals](OutwardJobsFreeIssueMaterialsServiceUpdateRequest.md#equals)
- [fromBinary](OutwardJobsFreeIssueMaterialsServiceUpdateRequest.md#frombinary)
- [fromJson](OutwardJobsFreeIssueMaterialsServiceUpdateRequest.md#fromjson)
- [fromJsonString](OutwardJobsFreeIssueMaterialsServiceUpdateRequest.md#fromjsonstring)
- [getType](OutwardJobsFreeIssueMaterialsServiceUpdateRequest.md#gettype)
- [toBinary](OutwardJobsFreeIssueMaterialsServiceUpdateRequest.md#tobinary)
- [toJSON](OutwardJobsFreeIssueMaterialsServiceUpdateRequest.md#tojson)
- [toJson](OutwardJobsFreeIssueMaterialsServiceUpdateRequest.md#tojson-1)
- [toJsonString](OutwardJobsFreeIssueMaterialsServiceUpdateRequest.md#tojsonstring)
- [equals](OutwardJobsFreeIssueMaterialsServiceUpdateRequest.md#equals-1)
- [fromBinary](OutwardJobsFreeIssueMaterialsServiceUpdateRequest.md#frombinary-1)
- [fromJson](OutwardJobsFreeIssueMaterialsServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](OutwardJobsFreeIssueMaterialsServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new OutwardJobsFreeIssueMaterialsServiceUpdateRequest**(`data?`): [`OutwardJobsFreeIssueMaterialsServiceUpdateRequest`](OutwardJobsFreeIssueMaterialsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`OutwardJobsFreeIssueMaterialsServiceUpdateRequest`](OutwardJobsFreeIssueMaterialsServiceUpdateRequest.md)\> |

#### Returns

[`OutwardJobsFreeIssueMaterialsServiceUpdateRequest`](OutwardJobsFreeIssueMaterialsServiceUpdateRequest.md)

#### Overrides

Message\&lt;OutwardJobsFreeIssueMaterialsServiceUpdateRequest\&gt;.constructor

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:375

## Properties

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:373

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record that needs to be updated

**`Generated`**

from field: uint64 id = 2;

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:345

___

### notifyUsers

• **notifyUsers**: `boolean` = `false`

Optional boolean value that stores if a notification needs to be sent to users about the update to the record. This is useful when a subsequent operation needs to be performed immediately (such as send to verification after updating the revision)

**`Generated`**

from field: bool notify_users = 3;

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:352

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the outward job free issue material

**`Generated`**

from field: string reference_id = 10;

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:366

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:338

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:359

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:382

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:380

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.OutwardJobsFreeIssueMaterialsServiceUpdateRequest"``

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:381

## Methods

### clone

▸ **clone**(): [`OutwardJobsFreeIssueMaterialsServiceUpdateRequest`](OutwardJobsFreeIssueMaterialsServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`OutwardJobsFreeIssueMaterialsServiceUpdateRequest`](OutwardJobsFreeIssueMaterialsServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`OutwardJobsFreeIssueMaterialsServiceUpdateRequest`](OutwardJobsFreeIssueMaterialsServiceUpdateRequest.md) \| `PlainMessage`\<[`OutwardJobsFreeIssueMaterialsServiceUpdateRequest`](OutwardJobsFreeIssueMaterialsServiceUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`OutwardJobsFreeIssueMaterialsServiceUpdateRequest`](OutwardJobsFreeIssueMaterialsServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`OutwardJobsFreeIssueMaterialsServiceUpdateRequest`](OutwardJobsFreeIssueMaterialsServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`OutwardJobsFreeIssueMaterialsServiceUpdateRequest`](OutwardJobsFreeIssueMaterialsServiceUpdateRequest.md) \| `PlainMessage`\<[`OutwardJobsFreeIssueMaterialsServiceUpdateRequest`](OutwardJobsFreeIssueMaterialsServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`OutwardJobsFreeIssueMaterialsServiceUpdateRequest`](OutwardJobsFreeIssueMaterialsServiceUpdateRequest.md) \| `PlainMessage`\<[`OutwardJobsFreeIssueMaterialsServiceUpdateRequest`](OutwardJobsFreeIssueMaterialsServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:403

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`OutwardJobsFreeIssueMaterialsServiceUpdateRequest`](OutwardJobsFreeIssueMaterialsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`OutwardJobsFreeIssueMaterialsServiceUpdateRequest`](OutwardJobsFreeIssueMaterialsServiceUpdateRequest.md)

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:391

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`OutwardJobsFreeIssueMaterialsServiceUpdateRequest`](OutwardJobsFreeIssueMaterialsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobsFreeIssueMaterialsServiceUpdateRequest`](OutwardJobsFreeIssueMaterialsServiceUpdateRequest.md)

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:395

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`OutwardJobsFreeIssueMaterialsServiceUpdateRequest`](OutwardJobsFreeIssueMaterialsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobsFreeIssueMaterialsServiceUpdateRequest`](OutwardJobsFreeIssueMaterialsServiceUpdateRequest.md)

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:399
