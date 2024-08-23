[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / InwardJobsServiceUpdateRequest

# Class: InwardJobsServiceUpdateRequest

Describes the parameters necessary to update a record

**`Generated`**

from message Scailo.InwardJobsServiceUpdateRequest

## Hierarchy

- `Message`\<[`InwardJobsServiceUpdateRequest`](InwardJobsServiceUpdateRequest.md)\>

  ↳ **`InwardJobsServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](InwardJobsServiceUpdateRequest.md#constructor)

### Properties

- [buyerClientId](InwardJobsServiceUpdateRequest.md#buyerclientid)
- [consigneeClientId](InwardJobsServiceUpdateRequest.md#consigneeclientid)
- [formData](InwardJobsServiceUpdateRequest.md#formdata)
- [id](InwardJobsServiceUpdateRequest.md#id)
- [notifyUsers](InwardJobsServiceUpdateRequest.md#notifyusers)
- [projectId](InwardJobsServiceUpdateRequest.md#projectid)
- [referenceId](InwardJobsServiceUpdateRequest.md#referenceid)
- [userComment](InwardJobsServiceUpdateRequest.md#usercomment)
- [vaultFolderId](InwardJobsServiceUpdateRequest.md#vaultfolderid)
- [fields](InwardJobsServiceUpdateRequest.md#fields)
- [runtime](InwardJobsServiceUpdateRequest.md#runtime)
- [typeName](InwardJobsServiceUpdateRequest.md#typename)

### Methods

- [clone](InwardJobsServiceUpdateRequest.md#clone)
- [equals](InwardJobsServiceUpdateRequest.md#equals)
- [fromBinary](InwardJobsServiceUpdateRequest.md#frombinary)
- [fromJson](InwardJobsServiceUpdateRequest.md#fromjson)
- [fromJsonString](InwardJobsServiceUpdateRequest.md#fromjsonstring)
- [getType](InwardJobsServiceUpdateRequest.md#gettype)
- [toBinary](InwardJobsServiceUpdateRequest.md#tobinary)
- [toJSON](InwardJobsServiceUpdateRequest.md#tojson)
- [toJson](InwardJobsServiceUpdateRequest.md#tojson-1)
- [toJsonString](InwardJobsServiceUpdateRequest.md#tojsonstring)
- [equals](InwardJobsServiceUpdateRequest.md#equals-1)
- [fromBinary](InwardJobsServiceUpdateRequest.md#frombinary-1)
- [fromJson](InwardJobsServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](InwardJobsServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new InwardJobsServiceUpdateRequest**(`data?`): [`InwardJobsServiceUpdateRequest`](InwardJobsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`InwardJobsServiceUpdateRequest`](InwardJobsServiceUpdateRequest.md)\> |

#### Returns

[`InwardJobsServiceUpdateRequest`](InwardJobsServiceUpdateRequest.md)

#### Overrides

Message\&lt;InwardJobsServiceUpdateRequest\&gt;.constructor

#### Defined in

src/inward_jobs.scailo_pb.ts:578

## Properties

### buyerClientId

• **buyerClientId**: `bigint` = `protoInt64.zero`

The ID of the buyer (client)

**`Generated`**

from field: uint64 buyer_client_id = 13;

#### Defined in

src/inward_jobs.scailo_pb.ts:562

___

### consigneeClientId

• **consigneeClientId**: `bigint` = `protoInt64.zero`

The ID of the consignee (client)

**`Generated`**

from field: uint64 consignee_client_id = 12;

#### Defined in

src/inward_jobs.scailo_pb.ts:555

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

src/inward_jobs.scailo_pb.ts:576

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record that needs to be updated

**`Generated`**

from field: uint64 id = 2;

#### Defined in

src/inward_jobs.scailo_pb.ts:527

___

### notifyUsers

• **notifyUsers**: `boolean` = `false`

Optional boolean value that stores if a notification needs to be sent to users about the update to the record. This is useful when a subsequent operation needs to be performed immediately (such as send to verification after updating the revision)

**`Generated`**

from field: bool notify_users = 3;

#### Defined in

src/inward_jobs.scailo_pb.ts:534

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The optional associated ID of the project

**`Generated`**

from field: uint64 project_id = 15;

#### Defined in

src/inward_jobs.scailo_pb.ts:569

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the inward job

**`Generated`**

from field: string reference_id = 10;

#### Defined in

src/inward_jobs.scailo_pb.ts:548

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/inward_jobs.scailo_pb.ts:520

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

src/inward_jobs.scailo_pb.ts:541

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/inward_jobs.scailo_pb.ts:585

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/inward_jobs.scailo_pb.ts:583

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.InwardJobsServiceUpdateRequest"``

#### Defined in

src/inward_jobs.scailo_pb.ts:584

## Methods

### clone

▸ **clone**(): [`InwardJobsServiceUpdateRequest`](InwardJobsServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`InwardJobsServiceUpdateRequest`](InwardJobsServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`InwardJobsServiceUpdateRequest`](InwardJobsServiceUpdateRequest.md) \| `PlainMessage`\<[`InwardJobsServiceUpdateRequest`](InwardJobsServiceUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`InwardJobsServiceUpdateRequest`](InwardJobsServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`InwardJobsServiceUpdateRequest`](InwardJobsServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`InwardJobsServiceUpdateRequest`](InwardJobsServiceUpdateRequest.md) \| `PlainMessage`\<[`InwardJobsServiceUpdateRequest`](InwardJobsServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`InwardJobsServiceUpdateRequest`](InwardJobsServiceUpdateRequest.md) \| `PlainMessage`\<[`InwardJobsServiceUpdateRequest`](InwardJobsServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/inward_jobs.scailo_pb.ts:609

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`InwardJobsServiceUpdateRequest`](InwardJobsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`InwardJobsServiceUpdateRequest`](InwardJobsServiceUpdateRequest.md)

#### Defined in

src/inward_jobs.scailo_pb.ts:597

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`InwardJobsServiceUpdateRequest`](InwardJobsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InwardJobsServiceUpdateRequest`](InwardJobsServiceUpdateRequest.md)

#### Defined in

src/inward_jobs.scailo_pb.ts:601

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`InwardJobsServiceUpdateRequest`](InwardJobsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InwardJobsServiceUpdateRequest`](InwardJobsServiceUpdateRequest.md)

#### Defined in

src/inward_jobs.scailo_pb.ts:605
