[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / Project

# Class: Project

Describes the parameters that are part of a standard response

**`Generated`**

from message Scailo.Project

## Hierarchy

- `Message`\<[`Project`](Project.md)\>

  ↳ **`Project`**

## Table of contents

### Constructors

- [constructor](Project.md#constructor)

### Properties

- [approvalMetadata](Project.md#approvalmetadata)
- [clientId](Project.md#clientid)
- [completedOn](Project.md#completedon)
- [description](Project.md#description)
- [entityUuid](Project.md#entityuuid)
- [finalRefNumber](Project.md#finalrefnumber)
- [formData](Project.md#formdata)
- [logs](Project.md#logs)
- [metadata](Project.md#metadata)
- [referenceId](Project.md#referenceid)
- [status](Project.md#status)
- [vaultFolderId](Project.md#vaultfolderid)
- [fields](Project.md#fields)
- [runtime](Project.md#runtime)
- [typeName](Project.md#typename)

### Methods

- [clone](Project.md#clone)
- [equals](Project.md#equals)
- [fromBinary](Project.md#frombinary)
- [fromJson](Project.md#fromjson)
- [fromJsonString](Project.md#fromjsonstring)
- [getType](Project.md#gettype)
- [toBinary](Project.md#tobinary)
- [toJSON](Project.md#tojson)
- [toJson](Project.md#tojson-1)
- [toJsonString](Project.md#tojsonstring)
- [equals](Project.md#equals-1)
- [fromBinary](Project.md#frombinary-1)
- [fromJson](Project.md#fromjson-1)
- [fromJsonString](Project.md#fromjsonstring-1)

## Constructors

### constructor

• **new Project**(`data?`): [`Project`](Project.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`Project`](Project.md)\> |

#### Returns

[`Project`](Project.md)

#### Overrides

Message\&lt;Project\&gt;.constructor

#### Defined in

src/projects.scailo_pb.ts:373

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

Stores the approval metadata

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

src/projects.scailo_pb.ts:308

___

### clientId

• **clientId**: `bigint` = `protoInt64.zero`

The optional ID of the associated client

**`Generated`**

from field: uint64 client_id = 12;

#### Defined in

src/projects.scailo_pb.ts:357

___

### completedOn

• **completedOn**: `bigint` = `protoInt64.zero`

The timestamp of when this project was marked as completed

**`Generated`**

from field: uint64 completed_on = 6;

#### Defined in

src/projects.scailo_pb.ts:329

___

### description

• **description**: `string` = `""`

The description of the project

**`Generated`**

from field: string description = 13;

#### Defined in

src/projects.scailo_pb.ts:364

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/projects.scailo_pb.ts:294

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 11;

#### Defined in

src/projects.scailo_pb.ts:350

___

### formData

• **formData**: [`FormFieldDatum`](FormFieldDatum.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatum form_data = 30;

#### Defined in

src/projects.scailo_pb.ts:371

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

Stores the logs of every operation performed on this project

**`Generated`**

from field: repeated Scailo.LogbookLogConciseSLC logs = 5;

#### Defined in

src/projects.scailo_pb.ts:322

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this project

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

src/projects.scailo_pb.ts:301

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the project

**`Generated`**

from field: string reference_id = 10;

#### Defined in

src/projects.scailo_pb.ts:343

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this project

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

src/projects.scailo_pb.ts:315

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

src/projects.scailo_pb.ts:336

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/projects.scailo_pb.ts:380

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/projects.scailo_pb.ts:378

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.Project"``

#### Defined in

src/projects.scailo_pb.ts:379

## Methods

### clone

▸ **clone**(): [`Project`](Project.md)

Create a deep copy.

#### Returns

[`Project`](Project.md)

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
| `other` | `undefined` \| ``null`` \| [`Project`](Project.md) \| `PlainMessage`\<[`Project`](Project.md)\> |

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

▸ **getType**(): `MessageType`\<[`Project`](Project.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`Project`](Project.md)\>

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
| `a` | `undefined` \| [`Project`](Project.md) \| `PlainMessage`\<[`Project`](Project.md)\> |
| `b` | `undefined` \| [`Project`](Project.md) \| `PlainMessage`\<[`Project`](Project.md)\> |

#### Returns

`boolean`

#### Defined in

src/projects.scailo_pb.ts:407

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`Project`](Project.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`Project`](Project.md)

#### Defined in

src/projects.scailo_pb.ts:395

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`Project`](Project.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`Project`](Project.md)

#### Defined in

src/projects.scailo_pb.ts:399

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`Project`](Project.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`Project`](Project.md)

#### Defined in

src/projects.scailo_pb.ts:403
