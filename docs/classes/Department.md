[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / Department

# Class: Department

Describes the parameters that are part of a standard response

**`Generated`**

from message Scailo.Department

## Hierarchy

- `Message`\<[`Department`](Department.md)\>

  ↳ **`Department`**

## Table of contents

### Constructors

- [constructor](Department.md#constructor)

### Properties

- [approvalMetadata](Department.md#approvalmetadata)
- [code](Department.md#code)
- [completedOn](Department.md#completedon)
- [description](Department.md#description)
- [entityUuid](Department.md#entityuuid)
- [headUserId](Department.md#headuserid)
- [logs](Department.md#logs)
- [metadata](Department.md#metadata)
- [name](Department.md#name)
- [status](Department.md#status)
- [vaultFolderId](Department.md#vaultfolderid)
- [fields](Department.md#fields)
- [runtime](Department.md#runtime)
- [typeName](Department.md#typename)

### Methods

- [clone](Department.md#clone)
- [equals](Department.md#equals)
- [fromBinary](Department.md#frombinary)
- [fromJson](Department.md#fromjson)
- [fromJsonString](Department.md#fromjsonstring)
- [getType](Department.md#gettype)
- [toBinary](Department.md#tobinary)
- [toJSON](Department.md#tojson)
- [toJson](Department.md#tojson-1)
- [toJsonString](Department.md#tojsonstring)
- [equals](Department.md#equals-1)
- [fromBinary](Department.md#frombinary-1)
- [fromJson](Department.md#fromjson-1)
- [fromJsonString](Department.md#fromjsonstring-1)

## Constructors

### constructor

• **new Department**(`data?`): [`Department`](Department.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`Department`](Department.md)\> |

#### Returns

[`Department`](Department.md)

#### Overrides

Message\&lt;Department\&gt;.constructor

#### Defined in

src/departments.scailo_pb.ts:373

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

Stores the approval metadata

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

src/departments.scailo_pb.ts:315

___

### code

• **code**: `string` = `""`

The code of the department

**`Generated`**

from field: string code = 11;

#### Defined in

src/departments.scailo_pb.ts:357

___

### completedOn

• **completedOn**: `bigint` = `protoInt64.zero`

The timestamp of when this department was marked as completed

**`Generated`**

from field: uint64 completed_on = 6;

#### Defined in

src/departments.scailo_pb.ts:336

___

### description

• **description**: `string` = `""`

The description of the department

**`Generated`**

from field: string description = 13;

#### Defined in

src/departments.scailo_pb.ts:371

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/departments.scailo_pb.ts:301

___

### headUserId

• **headUserId**: `bigint` = `protoInt64.zero`

The ID of the user who is the department head of this department

**`Generated`**

from field: uint64 head_user_id = 12;

#### Defined in

src/departments.scailo_pb.ts:364

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

Stores the logs of every operation performed on this department

**`Generated`**

from field: repeated Scailo.LogbookLogConciseSLC logs = 5;

#### Defined in

src/departments.scailo_pb.ts:329

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this department

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

src/departments.scailo_pb.ts:308

___

### name

• **name**: `string` = `""`

The name of the department

**`Generated`**

from field: string name = 10;

#### Defined in

src/departments.scailo_pb.ts:350

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this department

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

src/departments.scailo_pb.ts:322

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

src/departments.scailo_pb.ts:343

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/departments.scailo_pb.ts:380

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/departments.scailo_pb.ts:378

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.Department"``

#### Defined in

src/departments.scailo_pb.ts:379

## Methods

### clone

▸ **clone**(): [`Department`](Department.md)

Create a deep copy.

#### Returns

[`Department`](Department.md)

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
| `other` | `undefined` \| ``null`` \| [`Department`](Department.md) \| `PlainMessage`\<[`Department`](Department.md)\> |

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

▸ **getType**(): `MessageType`\<[`Department`](Department.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`Department`](Department.md)\>

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
| `a` | `undefined` \| [`Department`](Department.md) \| `PlainMessage`\<[`Department`](Department.md)\> |
| `b` | `undefined` \| [`Department`](Department.md) \| `PlainMessage`\<[`Department`](Department.md)\> |

#### Returns

`boolean`

#### Defined in

src/departments.scailo_pb.ts:406

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`Department`](Department.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`Department`](Department.md)

#### Defined in

src/departments.scailo_pb.ts:394

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`Department`](Department.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`Department`](Department.md)

#### Defined in

src/departments.scailo_pb.ts:398

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`Department`](Department.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`Department`](Department.md)

#### Defined in

src/departments.scailo_pb.ts:402
