[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / OutwardJobFreeIssueMaterialItem

# Class: OutwardJobFreeIssueMaterialItem

Describes the parameters that constitute an item associated to a outward job free issue material

**`Generated`**

from message Scailo.OutwardJobFreeIssueMaterialItem

## Hierarchy

- `Message`\<[`OutwardJobFreeIssueMaterialItem`](OutwardJobFreeIssueMaterialItem.md)\>

  ↳ **`OutwardJobFreeIssueMaterialItem`**

## Table of contents

### Constructors

- [constructor](OutwardJobFreeIssueMaterialItem.md#constructor)

### Properties

- [approvalMetadata](OutwardJobFreeIssueMaterialItem.md#approvalmetadata)
- [entityUuid](OutwardJobFreeIssueMaterialItem.md#entityuuid)
- [familyId](OutwardJobFreeIssueMaterialItem.md#familyid)
- [internalQuantity](OutwardJobFreeIssueMaterialItem.md#internalquantity)
- [itemHash](OutwardJobFreeIssueMaterialItem.md#itemhash)
- [metadata](OutwardJobFreeIssueMaterialItem.md#metadata)
- [needApproval](OutwardJobFreeIssueMaterialItem.md#needapproval)
- [outwardJobFreeIssueMaterialId](OutwardJobFreeIssueMaterialItem.md#outwardjobfreeissuematerialid)
- [userComment](OutwardJobFreeIssueMaterialItem.md#usercomment)
- [vendorFamilyCode](OutwardJobFreeIssueMaterialItem.md#vendorfamilycode)
- [vendorQuantity](OutwardJobFreeIssueMaterialItem.md#vendorquantity)
- [vendorUomId](OutwardJobFreeIssueMaterialItem.md#vendoruomid)
- [fields](OutwardJobFreeIssueMaterialItem.md#fields)
- [runtime](OutwardJobFreeIssueMaterialItem.md#runtime)
- [typeName](OutwardJobFreeIssueMaterialItem.md#typename)

### Methods

- [clone](OutwardJobFreeIssueMaterialItem.md#clone)
- [equals](OutwardJobFreeIssueMaterialItem.md#equals)
- [fromBinary](OutwardJobFreeIssueMaterialItem.md#frombinary)
- [fromJson](OutwardJobFreeIssueMaterialItem.md#fromjson)
- [fromJsonString](OutwardJobFreeIssueMaterialItem.md#fromjsonstring)
- [getType](OutwardJobFreeIssueMaterialItem.md#gettype)
- [toBinary](OutwardJobFreeIssueMaterialItem.md#tobinary)
- [toJSON](OutwardJobFreeIssueMaterialItem.md#tojson)
- [toJson](OutwardJobFreeIssueMaterialItem.md#tojson-1)
- [toJsonString](OutwardJobFreeIssueMaterialItem.md#tojsonstring)
- [equals](OutwardJobFreeIssueMaterialItem.md#equals-1)
- [fromBinary](OutwardJobFreeIssueMaterialItem.md#frombinary-1)
- [fromJson](OutwardJobFreeIssueMaterialItem.md#fromjson-1)
- [fromJsonString](OutwardJobFreeIssueMaterialItem.md#fromjsonstring-1)

## Constructors

### constructor

• **new OutwardJobFreeIssueMaterialItem**(`data?`): [`OutwardJobFreeIssueMaterialItem`](OutwardJobFreeIssueMaterialItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`OutwardJobFreeIssueMaterialItem`](OutwardJobFreeIssueMaterialItem.md)\> |

#### Returns

[`OutwardJobFreeIssueMaterialItem`](OutwardJobFreeIssueMaterialItem.md)

#### Overrides

Message\&lt;OutwardJobFreeIssueMaterialItem\&gt;.constructor

#### Defined in

[src/outward_jobs_free_issue_materials.scailo_pb.ts:1116](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/outward_jobs_free_issue_materials.scailo_pb.ts#L1116)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

**`Description`**

Detailed approval workflow state (Approver ID, Role, and Timestamps).

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/outward_jobs_free_issue_materials.scailo_pb.ts:1046](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/outward_jobs_free_issue_materials.scailo_pb.ts#L1046)

___

### entityUuid

• **entityUuid**: `string` = `""`

**`Description`**

The organization's globally unique identifier.

**`Example`**

```ts
"550e8400-e29b-41d4-a716-446655440000"
```

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/outward_jobs_free_issue_materials.scailo_pb.ts:1030](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/outward_jobs_free_issue_materials.scailo_pb.ts#L1030)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 11;

#### Defined in

[src/outward_jobs_free_issue_materials.scailo_pb.ts:1079](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/outward_jobs_free_issue_materials.scailo_pb.ts#L1079)

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

The quantity (in cents) being received in internal unit of material

**`Generated`**

from field: uint64 internal_quantity = 13;

#### Defined in

[src/outward_jobs_free_issue_materials.scailo_pb.ts:1093](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/outward_jobs_free_issue_materials.scailo_pb.ts#L1093)

___

### itemHash

• **itemHash**: `string` = `""`

Stores the item hash to be sent

**`Generated`**

from field: string item_hash = 12;

#### Defined in

[src/outward_jobs_free_issue_materials.scailo_pb.ts:1086](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/outward_jobs_free_issue_materials.scailo_pb.ts#L1086)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

**`Description`**

Standard employee and record metadata including timestamps.

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/outward_jobs_free_issue_materials.scailo_pb.ts:1038](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/outward_jobs_free_issue_materials.scailo_pb.ts#L1038)

___

### needApproval

• **needApproval**: `boolean` = `false`

**`Description`**

A boolean flag indicating whether this specific record requires further administrative approval.

**`Example`**

```ts
false
```

**`Format`**

Boolean true or false.

**`Generated`**

from field: bool need_approval = 4;

#### Defined in

[src/outward_jobs_free_issue_materials.scailo_pb.ts:1058](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/outward_jobs_free_issue_materials.scailo_pb.ts#L1058)

___

### outwardJobFreeIssueMaterialId

• **outwardJobFreeIssueMaterialId**: `bigint` = `protoInt64.zero`

Stores the outward job free issue material ID

**`Generated`**

from field: uint64 outward_job_free_issue_material_id = 10;

#### Defined in

[src/outward_jobs_free_issue_materials.scailo_pb.ts:1072](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/outward_jobs_free_issue_materials.scailo_pb.ts#L1072)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might have added during an operation

**`Generated`**

from field: string user_comment = 5;

#### Defined in

[src/outward_jobs_free_issue_materials.scailo_pb.ts:1065](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/outward_jobs_free_issue_materials.scailo_pb.ts#L1065)

___

### vendorFamilyCode

• **vendorFamilyCode**: `string` = `""`

Stores the family code as defined by the vendor

**`Generated`**

from field: string vendor_family_code = 16;

#### Defined in

[src/outward_jobs_free_issue_materials.scailo_pb.ts:1114](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/outward_jobs_free_issue_materials.scailo_pb.ts#L1114)

___

### vendorQuantity

• **vendorQuantity**: `bigint` = `protoInt64.zero`

Stores the quantity (in cents) being received in vendor's unit of material

**`Generated`**

from field: uint64 vendor_quantity = 15;

#### Defined in

[src/outward_jobs_free_issue_materials.scailo_pb.ts:1107](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/outward_jobs_free_issue_materials.scailo_pb.ts#L1107)

___

### vendorUomId

• **vendorUomId**: `bigint` = `protoInt64.zero`

Stores the ID of the vendor's unit of material

**`Generated`**

from field: uint64 vendor_uom_id = 14;

#### Defined in

[src/outward_jobs_free_issue_materials.scailo_pb.ts:1100](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/outward_jobs_free_issue_materials.scailo_pb.ts#L1100)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/outward_jobs_free_issue_materials.scailo_pb.ts:1123](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/outward_jobs_free_issue_materials.scailo_pb.ts#L1123)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/outward_jobs_free_issue_materials.scailo_pb.ts:1121](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/outward_jobs_free_issue_materials.scailo_pb.ts#L1121)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.OutwardJobFreeIssueMaterialItem"``

#### Defined in

[src/outward_jobs_free_issue_materials.scailo_pb.ts:1122](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/outward_jobs_free_issue_materials.scailo_pb.ts#L1122)

## Methods

### clone

▸ **clone**(): [`OutwardJobFreeIssueMaterialItem`](OutwardJobFreeIssueMaterialItem.md)

Create a deep copy.

#### Returns

[`OutwardJobFreeIssueMaterialItem`](OutwardJobFreeIssueMaterialItem.md)

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
| `other` | `undefined` \| ``null`` \| [`OutwardJobFreeIssueMaterialItem`](OutwardJobFreeIssueMaterialItem.md) \| `PlainMessage`\<[`OutwardJobFreeIssueMaterialItem`](OutwardJobFreeIssueMaterialItem.md)\> |

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

▸ **getType**(): `MessageType`\<[`OutwardJobFreeIssueMaterialItem`](OutwardJobFreeIssueMaterialItem.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`OutwardJobFreeIssueMaterialItem`](OutwardJobFreeIssueMaterialItem.md)\>

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
| `a` | `undefined` \| [`OutwardJobFreeIssueMaterialItem`](OutwardJobFreeIssueMaterialItem.md) \| `PlainMessage`\<[`OutwardJobFreeIssueMaterialItem`](OutwardJobFreeIssueMaterialItem.md)\> |
| `b` | `undefined` \| [`OutwardJobFreeIssueMaterialItem`](OutwardJobFreeIssueMaterialItem.md) \| `PlainMessage`\<[`OutwardJobFreeIssueMaterialItem`](OutwardJobFreeIssueMaterialItem.md)\> |

#### Returns

`boolean`

#### Defined in

[src/outward_jobs_free_issue_materials.scailo_pb.ts:1150](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/outward_jobs_free_issue_materials.scailo_pb.ts#L1150)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`OutwardJobFreeIssueMaterialItem`](OutwardJobFreeIssueMaterialItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`OutwardJobFreeIssueMaterialItem`](OutwardJobFreeIssueMaterialItem.md)

#### Defined in

[src/outward_jobs_free_issue_materials.scailo_pb.ts:1138](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/outward_jobs_free_issue_materials.scailo_pb.ts#L1138)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`OutwardJobFreeIssueMaterialItem`](OutwardJobFreeIssueMaterialItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobFreeIssueMaterialItem`](OutwardJobFreeIssueMaterialItem.md)

#### Defined in

[src/outward_jobs_free_issue_materials.scailo_pb.ts:1142](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/outward_jobs_free_issue_materials.scailo_pb.ts#L1142)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`OutwardJobFreeIssueMaterialItem`](OutwardJobFreeIssueMaterialItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobFreeIssueMaterialItem`](OutwardJobFreeIssueMaterialItem.md)

#### Defined in

[src/outward_jobs_free_issue_materials.scailo_pb.ts:1146](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/outward_jobs_free_issue_materials.scailo_pb.ts#L1146)
