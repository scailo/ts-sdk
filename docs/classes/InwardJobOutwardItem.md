[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / InwardJobOutwardItem

# Class: InwardJobOutwardItem

Describes the parameters that constitute an outward item associated to a inward job

**`Generated`**

from message Scailo.InwardJobOutwardItem

## Hierarchy

- `Message`\<[`InwardJobOutwardItem`](InwardJobOutwardItem.md)\>

  ↳ **`InwardJobOutwardItem`**

## Table of contents

### Constructors

- [constructor](InwardJobOutwardItem.md#constructor)

### Properties

- [approvalMetadata](InwardJobOutwardItem.md#approvalmetadata)
- [clientFamilyCode](InwardJobOutwardItem.md#clientfamilycode)
- [clientQuantity](InwardJobOutwardItem.md#clientquantity)
- [clientUomId](InwardJobOutwardItem.md#clientuomid)
- [deliveryDate](InwardJobOutwardItem.md#deliverydate)
- [entityUuid](InwardJobOutwardItem.md#entityuuid)
- [familyId](InwardJobOutwardItem.md#familyid)
- [internalQuantity](InwardJobOutwardItem.md#internalquantity)
- [inwardJobId](InwardJobOutwardItem.md#inwardjobid)
- [metadata](InwardJobOutwardItem.md#metadata)
- [needApproval](InwardJobOutwardItem.md#needapproval)
- [specifications](InwardJobOutwardItem.md#specifications)
- [userComment](InwardJobOutwardItem.md#usercomment)
- [fields](InwardJobOutwardItem.md#fields)
- [runtime](InwardJobOutwardItem.md#runtime)
- [typeName](InwardJobOutwardItem.md#typename)

### Methods

- [clone](InwardJobOutwardItem.md#clone)
- [equals](InwardJobOutwardItem.md#equals)
- [fromBinary](InwardJobOutwardItem.md#frombinary)
- [fromJson](InwardJobOutwardItem.md#fromjson)
- [fromJsonString](InwardJobOutwardItem.md#fromjsonstring)
- [getType](InwardJobOutwardItem.md#gettype)
- [toBinary](InwardJobOutwardItem.md#tobinary)
- [toJSON](InwardJobOutwardItem.md#tojson)
- [toJson](InwardJobOutwardItem.md#tojson-1)
- [toJsonString](InwardJobOutwardItem.md#tojsonstring)
- [equals](InwardJobOutwardItem.md#equals-1)
- [fromBinary](InwardJobOutwardItem.md#frombinary-1)
- [fromJson](InwardJobOutwardItem.md#fromjson-1)
- [fromJsonString](InwardJobOutwardItem.md#fromjsonstring-1)

## Constructors

### constructor

• **new InwardJobOutwardItem**(`data?`): [`InwardJobOutwardItem`](InwardJobOutwardItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`InwardJobOutwardItem`](InwardJobOutwardItem.md)\> |

#### Returns

[`InwardJobOutwardItem`](InwardJobOutwardItem.md)

#### Overrides

Message\&lt;InwardJobOutwardItem\&gt;.constructor

#### Defined in

src/inward_jobs.scailo_pb.ts:2892

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

Stores the approval metadata

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

src/inward_jobs.scailo_pb.ts:2820

___

### clientFamilyCode

• **clientFamilyCode**: `string` = `""`

Stores the family code as given by the client

**`Generated`**

from field: string client_family_code = 15;

#### Defined in

src/inward_jobs.scailo_pb.ts:2876

___

### clientQuantity

• **clientQuantity**: `bigint` = `protoInt64.zero`

Stores the quantity (in cents) being ordered in client's unit of material

**`Generated`**

from field: uint64 client_quantity = 14;

#### Defined in

src/inward_jobs.scailo_pb.ts:2869

___

### clientUomId

• **clientUomId**: `bigint` = `protoInt64.zero`

Stores the ID of the client's unit of material

**`Generated`**

from field: uint64 client_uom_id = 13;

#### Defined in

src/inward_jobs.scailo_pb.ts:2862

___

### deliveryDate

• **deliveryDate**: `string` = `""`

The delivery date of the item

**`Generated`**

from field: string delivery_date = 16;

#### Defined in

src/inward_jobs.scailo_pb.ts:2883

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/inward_jobs.scailo_pb.ts:2806

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 11;

#### Defined in

src/inward_jobs.scailo_pb.ts:2848

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

The quantity (in cents) being ordered in internal unit of material

**`Generated`**

from field: uint64 internal_quantity = 12;

#### Defined in

src/inward_jobs.scailo_pb.ts:2855

___

### inwardJobId

• **inwardJobId**: `bigint` = `protoInt64.zero`

Stores the inward job ID

**`Generated`**

from field: uint64 inward_job_id = 10;

#### Defined in

src/inward_jobs.scailo_pb.ts:2841

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this inward job

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

src/inward_jobs.scailo_pb.ts:2813

___

### needApproval

• **needApproval**: `boolean` = `false`

Denotes if this record requires approval (or has been approved)

**`Generated`**

from field: bool need_approval = 4;

#### Defined in

src/inward_jobs.scailo_pb.ts:2827

___

### specifications

• **specifications**: `string` = `""`

Any extra specifications with regards to the item

**`Generated`**

from field: string specifications = 17;

#### Defined in

src/inward_jobs.scailo_pb.ts:2890

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might have added during an operation

**`Generated`**

from field: string user_comment = 5;

#### Defined in

src/inward_jobs.scailo_pb.ts:2834

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/inward_jobs.scailo_pb.ts:2899

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/inward_jobs.scailo_pb.ts:2897

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.InwardJobOutwardItem"``

#### Defined in

src/inward_jobs.scailo_pb.ts:2898

## Methods

### clone

▸ **clone**(): [`InwardJobOutwardItem`](InwardJobOutwardItem.md)

Create a deep copy.

#### Returns

[`InwardJobOutwardItem`](InwardJobOutwardItem.md)

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
| `other` | `undefined` \| ``null`` \| [`InwardJobOutwardItem`](InwardJobOutwardItem.md) \| `PlainMessage`\<[`InwardJobOutwardItem`](InwardJobOutwardItem.md)\> |

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

▸ **getType**(): `MessageType`\<[`InwardJobOutwardItem`](InwardJobOutwardItem.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`InwardJobOutwardItem`](InwardJobOutwardItem.md)\>

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
| `a` | `undefined` \| [`InwardJobOutwardItem`](InwardJobOutwardItem.md) \| `PlainMessage`\<[`InwardJobOutwardItem`](InwardJobOutwardItem.md)\> |
| `b` | `undefined` \| [`InwardJobOutwardItem`](InwardJobOutwardItem.md) \| `PlainMessage`\<[`InwardJobOutwardItem`](InwardJobOutwardItem.md)\> |

#### Returns

`boolean`

#### Defined in

src/inward_jobs.scailo_pb.ts:2927

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`InwardJobOutwardItem`](InwardJobOutwardItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`InwardJobOutwardItem`](InwardJobOutwardItem.md)

#### Defined in

src/inward_jobs.scailo_pb.ts:2915

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`InwardJobOutwardItem`](InwardJobOutwardItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InwardJobOutwardItem`](InwardJobOutwardItem.md)

#### Defined in

src/inward_jobs.scailo_pb.ts:2919

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`InwardJobOutwardItem`](InwardJobOutwardItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InwardJobOutwardItem`](InwardJobOutwardItem.md)

#### Defined in

src/inward_jobs.scailo_pb.ts:2923
