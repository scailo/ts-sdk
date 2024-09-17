[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / InwardJobFreeIssueMaterialItem

# Class: InwardJobFreeIssueMaterialItem

Describes the parameters that constitute an item associated to a inward job free issue material

**`Generated`**

from message Scailo.InwardJobFreeIssueMaterialItem

## Hierarchy

- `Message`\<[`InwardJobFreeIssueMaterialItem`](InwardJobFreeIssueMaterialItem.md)\>

  ↳ **`InwardJobFreeIssueMaterialItem`**

## Table of contents

### Constructors

- [constructor](InwardJobFreeIssueMaterialItem.md#constructor)

### Properties

- [approvalMetadata](InwardJobFreeIssueMaterialItem.md#approvalmetadata)
- [clientFamilyCode](InwardJobFreeIssueMaterialItem.md#clientfamilycode)
- [clientQuantity](InwardJobFreeIssueMaterialItem.md#clientquantity)
- [clientUomId](InwardJobFreeIssueMaterialItem.md#clientuomid)
- [entityUuid](InwardJobFreeIssueMaterialItem.md#entityuuid)
- [familyId](InwardJobFreeIssueMaterialItem.md#familyid)
- [internalQuantity](InwardJobFreeIssueMaterialItem.md#internalquantity)
- [inwardJobFreeIssueMaterialId](InwardJobFreeIssueMaterialItem.md#inwardjobfreeissuematerialid)
- [metadata](InwardJobFreeIssueMaterialItem.md#metadata)
- [needApproval](InwardJobFreeIssueMaterialItem.md#needapproval)
- [userComment](InwardJobFreeIssueMaterialItem.md#usercomment)
- [fields](InwardJobFreeIssueMaterialItem.md#fields)
- [runtime](InwardJobFreeIssueMaterialItem.md#runtime)
- [typeName](InwardJobFreeIssueMaterialItem.md#typename)

### Methods

- [clone](InwardJobFreeIssueMaterialItem.md#clone)
- [equals](InwardJobFreeIssueMaterialItem.md#equals)
- [fromBinary](InwardJobFreeIssueMaterialItem.md#frombinary)
- [fromJson](InwardJobFreeIssueMaterialItem.md#fromjson)
- [fromJsonString](InwardJobFreeIssueMaterialItem.md#fromjsonstring)
- [getType](InwardJobFreeIssueMaterialItem.md#gettype)
- [toBinary](InwardJobFreeIssueMaterialItem.md#tobinary)
- [toJSON](InwardJobFreeIssueMaterialItem.md#tojson)
- [toJson](InwardJobFreeIssueMaterialItem.md#tojson-1)
- [toJsonString](InwardJobFreeIssueMaterialItem.md#tojsonstring)
- [equals](InwardJobFreeIssueMaterialItem.md#equals-1)
- [fromBinary](InwardJobFreeIssueMaterialItem.md#frombinary-1)
- [fromJson](InwardJobFreeIssueMaterialItem.md#fromjson-1)
- [fromJsonString](InwardJobFreeIssueMaterialItem.md#fromjsonstring-1)

## Constructors

### constructor

• **new InwardJobFreeIssueMaterialItem**(`data?`): [`InwardJobFreeIssueMaterialItem`](InwardJobFreeIssueMaterialItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`InwardJobFreeIssueMaterialItem`](InwardJobFreeIssueMaterialItem.md)\> |

#### Returns

[`InwardJobFreeIssueMaterialItem`](InwardJobFreeIssueMaterialItem.md)

#### Overrides

Message\&lt;InwardJobFreeIssueMaterialItem\&gt;.constructor

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:844

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

Stores the approval metadata

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:786

___

### clientFamilyCode

• **clientFamilyCode**: `string` = `""`

Stores the family code as defined by the client

**`Generated`**

from field: string client_family_code = 16;

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:842

___

### clientQuantity

• **clientQuantity**: `bigint` = `protoInt64.zero`

Stores the quantity (in cents) being received in client's unit of material

**`Generated`**

from field: uint64 client_quantity = 15;

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:835

___

### clientUomId

• **clientUomId**: `bigint` = `protoInt64.zero`

Stores the ID of the client's unit of material

**`Generated`**

from field: uint64 client_uom_id = 14;

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:828

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:772

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 11;

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:814

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

The quantity (in cents) being received in internal unit of material

**`Generated`**

from field: uint64 internal_quantity = 13;

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:821

___

### inwardJobFreeIssueMaterialId

• **inwardJobFreeIssueMaterialId**: `bigint` = `protoInt64.zero`

Stores the inward job free issue material ID

**`Generated`**

from field: uint64 inward_job_free_issue_material_id = 10;

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:807

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this inward job free issue material

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:779

___

### needApproval

• **needApproval**: `boolean` = `false`

Denotes if this record requires approval (or has been approved)

**`Generated`**

from field: bool need_approval = 4;

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:793

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might have added during an operation

**`Generated`**

from field: string user_comment = 5;

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:800

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:851

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:849

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.InwardJobFreeIssueMaterialItem"``

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:850

## Methods

### clone

▸ **clone**(): [`InwardJobFreeIssueMaterialItem`](InwardJobFreeIssueMaterialItem.md)

Create a deep copy.

#### Returns

[`InwardJobFreeIssueMaterialItem`](InwardJobFreeIssueMaterialItem.md)

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
| `other` | `undefined` \| ``null`` \| [`InwardJobFreeIssueMaterialItem`](InwardJobFreeIssueMaterialItem.md) \| `PlainMessage`\<[`InwardJobFreeIssueMaterialItem`](InwardJobFreeIssueMaterialItem.md)\> |

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

▸ **getType**(): `MessageType`\<[`InwardJobFreeIssueMaterialItem`](InwardJobFreeIssueMaterialItem.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`InwardJobFreeIssueMaterialItem`](InwardJobFreeIssueMaterialItem.md)\>

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
| `a` | `undefined` \| [`InwardJobFreeIssueMaterialItem`](InwardJobFreeIssueMaterialItem.md) \| `PlainMessage`\<[`InwardJobFreeIssueMaterialItem`](InwardJobFreeIssueMaterialItem.md)\> |
| `b` | `undefined` \| [`InwardJobFreeIssueMaterialItem`](InwardJobFreeIssueMaterialItem.md) \| `PlainMessage`\<[`InwardJobFreeIssueMaterialItem`](InwardJobFreeIssueMaterialItem.md)\> |

#### Returns

`boolean`

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:877

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`InwardJobFreeIssueMaterialItem`](InwardJobFreeIssueMaterialItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`InwardJobFreeIssueMaterialItem`](InwardJobFreeIssueMaterialItem.md)

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:865

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`InwardJobFreeIssueMaterialItem`](InwardJobFreeIssueMaterialItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InwardJobFreeIssueMaterialItem`](InwardJobFreeIssueMaterialItem.md)

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:869

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`InwardJobFreeIssueMaterialItem`](InwardJobFreeIssueMaterialItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InwardJobFreeIssueMaterialItem`](InwardJobFreeIssueMaterialItem.md)

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:873
