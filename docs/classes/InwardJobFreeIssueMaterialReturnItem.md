[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / InwardJobFreeIssueMaterialReturnItem

# Class: InwardJobFreeIssueMaterialReturnItem

Describes the parameters that constitute an item associated to a inward job free issue material return

**`Generated`**

from message Scailo.InwardJobFreeIssueMaterialReturnItem

## Hierarchy

- `Message`\<[`InwardJobFreeIssueMaterialReturnItem`](InwardJobFreeIssueMaterialReturnItem.md)\>

  ↳ **`InwardJobFreeIssueMaterialReturnItem`**

## Table of contents

### Constructors

- [constructor](InwardJobFreeIssueMaterialReturnItem.md#constructor)

### Properties

- [approvalMetadata](InwardJobFreeIssueMaterialReturnItem.md#approvalmetadata)
- [clientFamilyCode](InwardJobFreeIssueMaterialReturnItem.md#clientfamilycode)
- [clientQuantity](InwardJobFreeIssueMaterialReturnItem.md#clientquantity)
- [clientUomId](InwardJobFreeIssueMaterialReturnItem.md#clientuomid)
- [entityUuid](InwardJobFreeIssueMaterialReturnItem.md#entityuuid)
- [familyId](InwardJobFreeIssueMaterialReturnItem.md#familyid)
- [internalQuantity](InwardJobFreeIssueMaterialReturnItem.md#internalquantity)
- [inwardJobFreeIssueMaterialReturnId](InwardJobFreeIssueMaterialReturnItem.md#inwardjobfreeissuematerialreturnid)
- [itemHash](InwardJobFreeIssueMaterialReturnItem.md#itemhash)
- [metadata](InwardJobFreeIssueMaterialReturnItem.md#metadata)
- [needApproval](InwardJobFreeIssueMaterialReturnItem.md#needapproval)
- [userComment](InwardJobFreeIssueMaterialReturnItem.md#usercomment)
- [fields](InwardJobFreeIssueMaterialReturnItem.md#fields)
- [runtime](InwardJobFreeIssueMaterialReturnItem.md#runtime)
- [typeName](InwardJobFreeIssueMaterialReturnItem.md#typename)

### Methods

- [clone](InwardJobFreeIssueMaterialReturnItem.md#clone)
- [equals](InwardJobFreeIssueMaterialReturnItem.md#equals)
- [fromBinary](InwardJobFreeIssueMaterialReturnItem.md#frombinary)
- [fromJson](InwardJobFreeIssueMaterialReturnItem.md#fromjson)
- [fromJsonString](InwardJobFreeIssueMaterialReturnItem.md#fromjsonstring)
- [getType](InwardJobFreeIssueMaterialReturnItem.md#gettype)
- [toBinary](InwardJobFreeIssueMaterialReturnItem.md#tobinary)
- [toJSON](InwardJobFreeIssueMaterialReturnItem.md#tojson)
- [toJson](InwardJobFreeIssueMaterialReturnItem.md#tojson-1)
- [toJsonString](InwardJobFreeIssueMaterialReturnItem.md#tojsonstring)
- [equals](InwardJobFreeIssueMaterialReturnItem.md#equals-1)
- [fromBinary](InwardJobFreeIssueMaterialReturnItem.md#frombinary-1)
- [fromJson](InwardJobFreeIssueMaterialReturnItem.md#fromjson-1)
- [fromJsonString](InwardJobFreeIssueMaterialReturnItem.md#fromjsonstring-1)

## Constructors

### constructor

• **new InwardJobFreeIssueMaterialReturnItem**(`data?`): [`InwardJobFreeIssueMaterialReturnItem`](InwardJobFreeIssueMaterialReturnItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`InwardJobFreeIssueMaterialReturnItem`](InwardJobFreeIssueMaterialReturnItem.md)\> |

#### Returns

[`InwardJobFreeIssueMaterialReturnItem`](InwardJobFreeIssueMaterialReturnItem.md)

#### Overrides

Message\&lt;InwardJobFreeIssueMaterialReturnItem\&gt;.constructor

#### Defined in

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1049](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L1049)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

**`Description`**

Detailed approval workflow state (Approver ID, Role, and Timestamps).

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:979](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L979)

___

### clientFamilyCode

• **clientFamilyCode**: `string` = `""`

Stores the family code as defined by the client

**`Generated`**

from field: string client_family_code = 16;

#### Defined in

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1047](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L1047)

___

### clientQuantity

• **clientQuantity**: `bigint` = `protoInt64.zero`

Stores the quantity (in cents) being dispatched in client's unit of material

**`Generated`**

from field: uint64 client_quantity = 15;

#### Defined in

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1040](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L1040)

___

### clientUomId

• **clientUomId**: `bigint` = `protoInt64.zero`

Stores the ID of the client's unit of material

**`Generated`**

from field: uint64 client_uom_id = 14;

#### Defined in

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1033](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L1033)

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

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:963](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L963)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 11;

#### Defined in

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1012](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L1012)

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

The quantity (in cents) being dispatched in internal unit of material

**`Generated`**

from field: uint64 internal_quantity = 13;

#### Defined in

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1026](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L1026)

___

### inwardJobFreeIssueMaterialReturnId

• **inwardJobFreeIssueMaterialReturnId**: `bigint` = `protoInt64.zero`

Stores the inward job free issue material return ID

**`Generated`**

from field: uint64 inward_job_free_issue_material_return_id = 10;

#### Defined in

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1005](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L1005)

___

### itemHash

• **itemHash**: `string` = `""`

Stores the item hash to be dispatched

**`Generated`**

from field: string item_hash = 12;

#### Defined in

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1019](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L1019)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

**`Description`**

Standard employee and record metadata including timestamps.

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:971](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L971)

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

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:991](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L991)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might have added during an operation

**`Generated`**

from field: string user_comment = 5;

#### Defined in

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:998](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L998)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1056](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L1056)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1054](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L1054)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.InwardJobFreeIssueMaterialReturnItem"``

#### Defined in

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1055](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L1055)

## Methods

### clone

▸ **clone**(): [`InwardJobFreeIssueMaterialReturnItem`](InwardJobFreeIssueMaterialReturnItem.md)

Create a deep copy.

#### Returns

[`InwardJobFreeIssueMaterialReturnItem`](InwardJobFreeIssueMaterialReturnItem.md)

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
| `other` | `undefined` \| ``null`` \| [`InwardJobFreeIssueMaterialReturnItem`](InwardJobFreeIssueMaterialReturnItem.md) \| `PlainMessage`\<[`InwardJobFreeIssueMaterialReturnItem`](InwardJobFreeIssueMaterialReturnItem.md)\> |

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

▸ **getType**(): `MessageType`\<[`InwardJobFreeIssueMaterialReturnItem`](InwardJobFreeIssueMaterialReturnItem.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`InwardJobFreeIssueMaterialReturnItem`](InwardJobFreeIssueMaterialReturnItem.md)\>

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
| `a` | `undefined` \| [`InwardJobFreeIssueMaterialReturnItem`](InwardJobFreeIssueMaterialReturnItem.md) \| `PlainMessage`\<[`InwardJobFreeIssueMaterialReturnItem`](InwardJobFreeIssueMaterialReturnItem.md)\> |
| `b` | `undefined` \| [`InwardJobFreeIssueMaterialReturnItem`](InwardJobFreeIssueMaterialReturnItem.md) \| `PlainMessage`\<[`InwardJobFreeIssueMaterialReturnItem`](InwardJobFreeIssueMaterialReturnItem.md)\> |

#### Returns

`boolean`

#### Defined in

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1083](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L1083)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`InwardJobFreeIssueMaterialReturnItem`](InwardJobFreeIssueMaterialReturnItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`InwardJobFreeIssueMaterialReturnItem`](InwardJobFreeIssueMaterialReturnItem.md)

#### Defined in

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1071](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L1071)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`InwardJobFreeIssueMaterialReturnItem`](InwardJobFreeIssueMaterialReturnItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InwardJobFreeIssueMaterialReturnItem`](InwardJobFreeIssueMaterialReturnItem.md)

#### Defined in

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1075](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L1075)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`InwardJobFreeIssueMaterialReturnItem`](InwardJobFreeIssueMaterialReturnItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InwardJobFreeIssueMaterialReturnItem`](InwardJobFreeIssueMaterialReturnItem.md)

#### Defined in

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1079](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L1079)
