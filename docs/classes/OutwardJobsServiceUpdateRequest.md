[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / OutwardJobsServiceUpdateRequest

# Class: OutwardJobsServiceUpdateRequest

Describes the parameters necessary to update a record

**`Generated`**

from message Scailo.OutwardJobsServiceUpdateRequest

## Hierarchy

- `Message`\<[`OutwardJobsServiceUpdateRequest`](OutwardJobsServiceUpdateRequest.md)\>

  ↳ **`OutwardJobsServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](OutwardJobsServiceUpdateRequest.md#constructor)

### Properties

- [formData](OutwardJobsServiceUpdateRequest.md#formdata)
- [id](OutwardJobsServiceUpdateRequest.md#id)
- [notifyUsers](OutwardJobsServiceUpdateRequest.md#notifyusers)
- [projectId](OutwardJobsServiceUpdateRequest.md#projectid)
- [referenceId](OutwardJobsServiceUpdateRequest.md#referenceid)
- [userComment](OutwardJobsServiceUpdateRequest.md#usercomment)
- [vaultFolderId](OutwardJobsServiceUpdateRequest.md#vaultfolderid)
- [fields](OutwardJobsServiceUpdateRequest.md#fields)
- [runtime](OutwardJobsServiceUpdateRequest.md#runtime)
- [typeName](OutwardJobsServiceUpdateRequest.md#typename)

### Methods

- [clone](OutwardJobsServiceUpdateRequest.md#clone)
- [equals](OutwardJobsServiceUpdateRequest.md#equals)
- [fromBinary](OutwardJobsServiceUpdateRequest.md#frombinary)
- [fromJson](OutwardJobsServiceUpdateRequest.md#fromjson)
- [fromJsonString](OutwardJobsServiceUpdateRequest.md#fromjsonstring)
- [getType](OutwardJobsServiceUpdateRequest.md#gettype)
- [toBinary](OutwardJobsServiceUpdateRequest.md#tobinary)
- [toJSON](OutwardJobsServiceUpdateRequest.md#tojson)
- [toJson](OutwardJobsServiceUpdateRequest.md#tojson-1)
- [toJsonString](OutwardJobsServiceUpdateRequest.md#tojsonstring)
- [equals](OutwardJobsServiceUpdateRequest.md#equals-1)
- [fromBinary](OutwardJobsServiceUpdateRequest.md#frombinary-1)
- [fromJson](OutwardJobsServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](OutwardJobsServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new OutwardJobsServiceUpdateRequest**(`data?`): [`OutwardJobsServiceUpdateRequest`](OutwardJobsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`OutwardJobsServiceUpdateRequest`](OutwardJobsServiceUpdateRequest.md)\> |

#### Returns

[`OutwardJobsServiceUpdateRequest`](OutwardJobsServiceUpdateRequest.md)

#### Overrides

Message\&lt;OutwardJobsServiceUpdateRequest\&gt;.constructor

#### Defined in

src/outward_jobs.scailo_pb.ts:500

## Properties

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

src/outward_jobs.scailo_pb.ts:498

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record that needs to be updated

**`Generated`**

from field: uint64 id = 2;

#### Defined in

src/outward_jobs.scailo_pb.ts:463

___

### notifyUsers

• **notifyUsers**: `boolean` = `false`

Optional boolean value that stores if a notification needs to be sent to users about the update to the record. This is useful when a subsequent operation needs to be performed immediately (such as send to verification after updating the revision)

**`Generated`**

from field: bool notify_users = 3;

#### Defined in

src/outward_jobs.scailo_pb.ts:470

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The optional associated ID of the project

**`Generated`**

from field: uint64 project_id = 16;

#### Defined in

src/outward_jobs.scailo_pb.ts:491

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the outward job

**`Generated`**

from field: string reference_id = 10;

#### Defined in

src/outward_jobs.scailo_pb.ts:484

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/outward_jobs.scailo_pb.ts:456

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

src/outward_jobs.scailo_pb.ts:477

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/outward_jobs.scailo_pb.ts:507

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/outward_jobs.scailo_pb.ts:505

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.OutwardJobsServiceUpdateRequest"``

#### Defined in

src/outward_jobs.scailo_pb.ts:506

## Methods

### clone

▸ **clone**(): [`OutwardJobsServiceUpdateRequest`](OutwardJobsServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`OutwardJobsServiceUpdateRequest`](OutwardJobsServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`OutwardJobsServiceUpdateRequest`](OutwardJobsServiceUpdateRequest.md) \| `PlainMessage`\<[`OutwardJobsServiceUpdateRequest`](OutwardJobsServiceUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`OutwardJobsServiceUpdateRequest`](OutwardJobsServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`OutwardJobsServiceUpdateRequest`](OutwardJobsServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`OutwardJobsServiceUpdateRequest`](OutwardJobsServiceUpdateRequest.md) \| `PlainMessage`\<[`OutwardJobsServiceUpdateRequest`](OutwardJobsServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`OutwardJobsServiceUpdateRequest`](OutwardJobsServiceUpdateRequest.md) \| `PlainMessage`\<[`OutwardJobsServiceUpdateRequest`](OutwardJobsServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/outward_jobs.scailo_pb.ts:529

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`OutwardJobsServiceUpdateRequest`](OutwardJobsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`OutwardJobsServiceUpdateRequest`](OutwardJobsServiceUpdateRequest.md)

#### Defined in

src/outward_jobs.scailo_pb.ts:517

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`OutwardJobsServiceUpdateRequest`](OutwardJobsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobsServiceUpdateRequest`](OutwardJobsServiceUpdateRequest.md)

#### Defined in

src/outward_jobs.scailo_pb.ts:521

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`OutwardJobsServiceUpdateRequest`](OutwardJobsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobsServiceUpdateRequest`](OutwardJobsServiceUpdateRequest.md)

#### Defined in

src/outward_jobs.scailo_pb.ts:525
