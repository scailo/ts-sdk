[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / OutwardJobFreeIssueMaterialReturnItem

# Class: OutwardJobFreeIssueMaterialReturnItem

Describes the parameters that constitute an item associated to a outward job free issue material return

**`Generated`**

from message Scailo.OutwardJobFreeIssueMaterialReturnItem

## Hierarchy

- `Message`\<[`OutwardJobFreeIssueMaterialReturnItem`](OutwardJobFreeIssueMaterialReturnItem.md)\>

  ↳ **`OutwardJobFreeIssueMaterialReturnItem`**

## Table of contents

### Constructors

- [constructor](OutwardJobFreeIssueMaterialReturnItem.md#constructor)

### Properties

- [approvalMetadata](OutwardJobFreeIssueMaterialReturnItem.md#approvalmetadata)
- [entityUuid](OutwardJobFreeIssueMaterialReturnItem.md#entityuuid)
- [familyId](OutwardJobFreeIssueMaterialReturnItem.md#familyid)
- [internalQuantity](OutwardJobFreeIssueMaterialReturnItem.md#internalquantity)
- [itemHash](OutwardJobFreeIssueMaterialReturnItem.md#itemhash)
- [metadata](OutwardJobFreeIssueMaterialReturnItem.md#metadata)
- [needApproval](OutwardJobFreeIssueMaterialReturnItem.md#needapproval)
- [outwardJobFreeIssueMaterialReturnId](OutwardJobFreeIssueMaterialReturnItem.md#outwardjobfreeissuematerialreturnid)
- [userComment](OutwardJobFreeIssueMaterialReturnItem.md#usercomment)
- [vendorQuantity](OutwardJobFreeIssueMaterialReturnItem.md#vendorquantity)
- [vendorUomId](OutwardJobFreeIssueMaterialReturnItem.md#vendoruomid)
- [fields](OutwardJobFreeIssueMaterialReturnItem.md#fields)
- [runtime](OutwardJobFreeIssueMaterialReturnItem.md#runtime)
- [typeName](OutwardJobFreeIssueMaterialReturnItem.md#typename)

### Methods

- [clone](OutwardJobFreeIssueMaterialReturnItem.md#clone)
- [equals](OutwardJobFreeIssueMaterialReturnItem.md#equals)
- [fromBinary](OutwardJobFreeIssueMaterialReturnItem.md#frombinary)
- [fromJson](OutwardJobFreeIssueMaterialReturnItem.md#fromjson)
- [fromJsonString](OutwardJobFreeIssueMaterialReturnItem.md#fromjsonstring)
- [getType](OutwardJobFreeIssueMaterialReturnItem.md#gettype)
- [toBinary](OutwardJobFreeIssueMaterialReturnItem.md#tobinary)
- [toJSON](OutwardJobFreeIssueMaterialReturnItem.md#tojson)
- [toJson](OutwardJobFreeIssueMaterialReturnItem.md#tojson-1)
- [toJsonString](OutwardJobFreeIssueMaterialReturnItem.md#tojsonstring)
- [equals](OutwardJobFreeIssueMaterialReturnItem.md#equals-1)
- [fromBinary](OutwardJobFreeIssueMaterialReturnItem.md#frombinary-1)
- [fromJson](OutwardJobFreeIssueMaterialReturnItem.md#fromjson-1)
- [fromJsonString](OutwardJobFreeIssueMaterialReturnItem.md#fromjsonstring-1)

## Constructors

### constructor

• **new OutwardJobFreeIssueMaterialReturnItem**(`data?`): [`OutwardJobFreeIssueMaterialReturnItem`](OutwardJobFreeIssueMaterialReturnItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`OutwardJobFreeIssueMaterialReturnItem`](OutwardJobFreeIssueMaterialReturnItem.md)\> |

#### Returns

[`OutwardJobFreeIssueMaterialReturnItem`](OutwardJobFreeIssueMaterialReturnItem.md)

#### Overrides

Message\&lt;OutwardJobFreeIssueMaterialReturnItem\&gt;.constructor

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:802

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

Stores the approval metadata

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:744

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:730

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 11;

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:772

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

The quantity (in cents) being dispatched in internal unit of material

**`Generated`**

from field: uint64 internal_quantity = 13;

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:786

___

### itemHash

• **itemHash**: `string` = `""`

Stores the item hash to be dispatched

**`Generated`**

from field: string item_hash = 12;

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:779

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this outward job free issue material return

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:737

___

### needApproval

• **needApproval**: `boolean` = `false`

Denotes if this record requires approval (or has been approved)

**`Generated`**

from field: bool need_approval = 4;

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:751

___

### outwardJobFreeIssueMaterialReturnId

• **outwardJobFreeIssueMaterialReturnId**: `bigint` = `protoInt64.zero`

Stores the outward job free issue material return ID

**`Generated`**

from field: uint64 outward_job_free_issue_material_return_id = 10;

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:765

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might have added during an operation

**`Generated`**

from field: string user_comment = 5;

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:758

___

### vendorQuantity

• **vendorQuantity**: `bigint` = `protoInt64.zero`

Stores the quantity (in cents) being dispatched in vendor's unit of material

**`Generated`**

from field: uint64 vendor_quantity = 15;

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:800

___

### vendorUomId

• **vendorUomId**: `bigint` = `protoInt64.zero`

Stores the ID of the vendor's unit of material

**`Generated`**

from field: uint64 vendor_uom_id = 14;

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:793

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:809

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:807

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.OutwardJobFreeIssueMaterialReturnItem"``

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:808

## Methods

### clone

▸ **clone**(): [`OutwardJobFreeIssueMaterialReturnItem`](OutwardJobFreeIssueMaterialReturnItem.md)

Create a deep copy.

#### Returns

[`OutwardJobFreeIssueMaterialReturnItem`](OutwardJobFreeIssueMaterialReturnItem.md)

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
| `other` | `undefined` \| ``null`` \| [`OutwardJobFreeIssueMaterialReturnItem`](OutwardJobFreeIssueMaterialReturnItem.md) \| `PlainMessage`\<[`OutwardJobFreeIssueMaterialReturnItem`](OutwardJobFreeIssueMaterialReturnItem.md)\> |

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

▸ **getType**(): `MessageType`\<[`OutwardJobFreeIssueMaterialReturnItem`](OutwardJobFreeIssueMaterialReturnItem.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`OutwardJobFreeIssueMaterialReturnItem`](OutwardJobFreeIssueMaterialReturnItem.md)\>

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
| `a` | `undefined` \| [`OutwardJobFreeIssueMaterialReturnItem`](OutwardJobFreeIssueMaterialReturnItem.md) \| `PlainMessage`\<[`OutwardJobFreeIssueMaterialReturnItem`](OutwardJobFreeIssueMaterialReturnItem.md)\> |
| `b` | `undefined` \| [`OutwardJobFreeIssueMaterialReturnItem`](OutwardJobFreeIssueMaterialReturnItem.md) \| `PlainMessage`\<[`OutwardJobFreeIssueMaterialReturnItem`](OutwardJobFreeIssueMaterialReturnItem.md)\> |

#### Returns

`boolean`

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:835

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`OutwardJobFreeIssueMaterialReturnItem`](OutwardJobFreeIssueMaterialReturnItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`OutwardJobFreeIssueMaterialReturnItem`](OutwardJobFreeIssueMaterialReturnItem.md)

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:823

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`OutwardJobFreeIssueMaterialReturnItem`](OutwardJobFreeIssueMaterialReturnItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobFreeIssueMaterialReturnItem`](OutwardJobFreeIssueMaterialReturnItem.md)

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:827

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`OutwardJobFreeIssueMaterialReturnItem`](OutwardJobFreeIssueMaterialReturnItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobFreeIssueMaterialReturnItem`](OutwardJobFreeIssueMaterialReturnItem.md)

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:831
