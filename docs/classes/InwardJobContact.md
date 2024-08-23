[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / InwardJobContact

# Class: InwardJobContact

Describes the parameters that constitute a inward job contact

**`Generated`**

from message Scailo.InwardJobContact

## Hierarchy

- `Message`\<[`InwardJobContact`](InwardJobContact.md)\>

  ↳ **`InwardJobContact`**

## Table of contents

### Constructors

- [constructor](InwardJobContact.md#constructor)

### Properties

- [approvalMetadata](InwardJobContact.md#approvalmetadata)
- [associateId](InwardJobContact.md#associateid)
- [entityUuid](InwardJobContact.md#entityuuid)
- [inwardJobId](InwardJobContact.md#inwardjobid)
- [metadata](InwardJobContact.md#metadata)
- [needApproval](InwardJobContact.md#needapproval)
- [userComment](InwardJobContact.md#usercomment)
- [fields](InwardJobContact.md#fields)
- [runtime](InwardJobContact.md#runtime)
- [typeName](InwardJobContact.md#typename)

### Methods

- [clone](InwardJobContact.md#clone)
- [equals](InwardJobContact.md#equals)
- [fromBinary](InwardJobContact.md#frombinary)
- [fromJson](InwardJobContact.md#fromjson)
- [fromJsonString](InwardJobContact.md#fromjsonstring)
- [getType](InwardJobContact.md#gettype)
- [toBinary](InwardJobContact.md#tobinary)
- [toJSON](InwardJobContact.md#tojson)
- [toJson](InwardJobContact.md#tojson-1)
- [toJsonString](InwardJobContact.md#tojsonstring)
- [equals](InwardJobContact.md#equals-1)
- [fromBinary](InwardJobContact.md#frombinary-1)
- [fromJson](InwardJobContact.md#fromjson-1)
- [fromJsonString](InwardJobContact.md#fromjsonstring-1)

## Constructors

### constructor

• **new InwardJobContact**(`data?`): [`InwardJobContact`](InwardJobContact.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`InwardJobContact`](InwardJobContact.md)\> |

#### Returns

[`InwardJobContact`](InwardJobContact.md)

#### Overrides

Message\&lt;InwardJobContact\&gt;.constructor

#### Defined in

src/inward_jobs.scailo_pb.ts:3440

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

Stores the approval metadata

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

src/inward_jobs.scailo_pb.ts:3410

___

### associateId

• **associateId**: `bigint` = `protoInt64.zero`

Stores the associate ID

**`Generated`**

from field: uint64 associate_id = 11;

#### Defined in

src/inward_jobs.scailo_pb.ts:3438

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/inward_jobs.scailo_pb.ts:3396

___

### inwardJobId

• **inwardJobId**: `bigint` = `protoInt64.zero`

Stores the inward job ID

**`Generated`**

from field: uint64 inward_job_id = 10;

#### Defined in

src/inward_jobs.scailo_pb.ts:3431

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this inward job

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

src/inward_jobs.scailo_pb.ts:3403

___

### needApproval

• **needApproval**: `boolean` = `false`

Denotes if this record requires approval (or has been approved)

**`Generated`**

from field: bool need_approval = 4;

#### Defined in

src/inward_jobs.scailo_pb.ts:3417

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might have added during an operation

**`Generated`**

from field: string user_comment = 5;

#### Defined in

src/inward_jobs.scailo_pb.ts:3424

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/inward_jobs.scailo_pb.ts:3447

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/inward_jobs.scailo_pb.ts:3445

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.InwardJobContact"``

#### Defined in

src/inward_jobs.scailo_pb.ts:3446

## Methods

### clone

▸ **clone**(): [`InwardJobContact`](InwardJobContact.md)

Create a deep copy.

#### Returns

[`InwardJobContact`](InwardJobContact.md)

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
| `other` | `undefined` \| ``null`` \| [`InwardJobContact`](InwardJobContact.md) \| `PlainMessage`\<[`InwardJobContact`](InwardJobContact.md)\> |

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

▸ **getType**(): `MessageType`\<[`InwardJobContact`](InwardJobContact.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`InwardJobContact`](InwardJobContact.md)\>

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
| `a` | `undefined` \| [`InwardJobContact`](InwardJobContact.md) \| `PlainMessage`\<[`InwardJobContact`](InwardJobContact.md)\> |
| `b` | `undefined` \| [`InwardJobContact`](InwardJobContact.md) \| `PlainMessage`\<[`InwardJobContact`](InwardJobContact.md)\> |

#### Returns

`boolean`

#### Defined in

src/inward_jobs.scailo_pb.ts:3469

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`InwardJobContact`](InwardJobContact.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`InwardJobContact`](InwardJobContact.md)

#### Defined in

src/inward_jobs.scailo_pb.ts:3457

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`InwardJobContact`](InwardJobContact.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InwardJobContact`](InwardJobContact.md)

#### Defined in

src/inward_jobs.scailo_pb.ts:3461

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`InwardJobContact`](InwardJobContact.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InwardJobContact`](InwardJobContact.md)

#### Defined in

src/inward_jobs.scailo_pb.ts:3465
