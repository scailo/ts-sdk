[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / OutwardJobOutwardItem

# Class: OutwardJobOutwardItem

Describes the parameters that constitute an outward item associated to a outward job

**`Generated`**

from message Scailo.OutwardJobOutwardItem

## Hierarchy

- `Message`\<[`OutwardJobOutwardItem`](OutwardJobOutwardItem.md)\>

  ↳ **`OutwardJobOutwardItem`**

## Table of contents

### Constructors

- [constructor](OutwardJobOutwardItem.md#constructor)

### Properties

- [approvalMetadata](OutwardJobOutwardItem.md#approvalmetadata)
- [entityUuid](OutwardJobOutwardItem.md#entityuuid)
- [familyId](OutwardJobOutwardItem.md#familyid)
- [internalQuantity](OutwardJobOutwardItem.md#internalquantity)
- [itemHash](OutwardJobOutwardItem.md#itemhash)
- [metadata](OutwardJobOutwardItem.md#metadata)
- [needApproval](OutwardJobOutwardItem.md#needapproval)
- [outwardJobId](OutwardJobOutwardItem.md#outwardjobid)
- [specifications](OutwardJobOutwardItem.md#specifications)
- [userComment](OutwardJobOutwardItem.md#usercomment)
- [fields](OutwardJobOutwardItem.md#fields)
- [runtime](OutwardJobOutwardItem.md#runtime)
- [typeName](OutwardJobOutwardItem.md#typename)

### Methods

- [clone](OutwardJobOutwardItem.md#clone)
- [equals](OutwardJobOutwardItem.md#equals)
- [fromBinary](OutwardJobOutwardItem.md#frombinary)
- [fromJson](OutwardJobOutwardItem.md#fromjson)
- [fromJsonString](OutwardJobOutwardItem.md#fromjsonstring)
- [getType](OutwardJobOutwardItem.md#gettype)
- [toBinary](OutwardJobOutwardItem.md#tobinary)
- [toJSON](OutwardJobOutwardItem.md#tojson)
- [toJson](OutwardJobOutwardItem.md#tojson-1)
- [toJsonString](OutwardJobOutwardItem.md#tojsonstring)
- [equals](OutwardJobOutwardItem.md#equals-1)
- [fromBinary](OutwardJobOutwardItem.md#frombinary-1)
- [fromJson](OutwardJobOutwardItem.md#fromjson-1)
- [fromJsonString](OutwardJobOutwardItem.md#fromjsonstring-1)

## Constructors

### constructor

• **new OutwardJobOutwardItem**(`data?`): [`OutwardJobOutwardItem`](OutwardJobOutwardItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`OutwardJobOutwardItem`](OutwardJobOutwardItem.md)\> |

#### Returns

[`OutwardJobOutwardItem`](OutwardJobOutwardItem.md)

#### Overrides

Message\&lt;OutwardJobOutwardItem\&gt;.constructor

#### Defined in

src/outward_jobs.scailo_pb.ts:2631

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

Stores the approval metadata

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

src/outward_jobs.scailo_pb.ts:2580

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/outward_jobs.scailo_pb.ts:2566

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 11;

#### Defined in

src/outward_jobs.scailo_pb.ts:2608

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

The quantity of the item

**`Generated`**

from field: uint64 internal_quantity = 13;

#### Defined in

src/outward_jobs.scailo_pb.ts:2622

___

### itemHash

• **itemHash**: `string` = `""`

Stores the optional item hash to be dispatched

**`Generated`**

from field: string item_hash = 12;

#### Defined in

src/outward_jobs.scailo_pb.ts:2615

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this outward job

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

src/outward_jobs.scailo_pb.ts:2573

___

### needApproval

• **needApproval**: `boolean` = `false`

Denotes if this record requires approval (or has been approved)

**`Generated`**

from field: bool need_approval = 4;

#### Defined in

src/outward_jobs.scailo_pb.ts:2587

___

### outwardJobId

• **outwardJobId**: `bigint` = `protoInt64.zero`

Stores the outward job ID

**`Generated`**

from field: uint64 outward_job_id = 10;

#### Defined in

src/outward_jobs.scailo_pb.ts:2601

___

### specifications

• **specifications**: `string` = `""`

Any extra specifications with regards to the item

**`Generated`**

from field: string specifications = 14;

#### Defined in

src/outward_jobs.scailo_pb.ts:2629

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might have added during an operation

**`Generated`**

from field: string user_comment = 5;

#### Defined in

src/outward_jobs.scailo_pb.ts:2594

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/outward_jobs.scailo_pb.ts:2638

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/outward_jobs.scailo_pb.ts:2636

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.OutwardJobOutwardItem"``

#### Defined in

src/outward_jobs.scailo_pb.ts:2637

## Methods

### clone

▸ **clone**(): [`OutwardJobOutwardItem`](OutwardJobOutwardItem.md)

Create a deep copy.

#### Returns

[`OutwardJobOutwardItem`](OutwardJobOutwardItem.md)

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
| `other` | `undefined` \| ``null`` \| [`OutwardJobOutwardItem`](OutwardJobOutwardItem.md) \| `PlainMessage`\<[`OutwardJobOutwardItem`](OutwardJobOutwardItem.md)\> |

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

▸ **getType**(): `MessageType`\<[`OutwardJobOutwardItem`](OutwardJobOutwardItem.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`OutwardJobOutwardItem`](OutwardJobOutwardItem.md)\>

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
| `a` | `undefined` \| [`OutwardJobOutwardItem`](OutwardJobOutwardItem.md) \| `PlainMessage`\<[`OutwardJobOutwardItem`](OutwardJobOutwardItem.md)\> |
| `b` | `undefined` \| [`OutwardJobOutwardItem`](OutwardJobOutwardItem.md) \| `PlainMessage`\<[`OutwardJobOutwardItem`](OutwardJobOutwardItem.md)\> |

#### Returns

`boolean`

#### Defined in

src/outward_jobs.scailo_pb.ts:2663

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`OutwardJobOutwardItem`](OutwardJobOutwardItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`OutwardJobOutwardItem`](OutwardJobOutwardItem.md)

#### Defined in

src/outward_jobs.scailo_pb.ts:2651

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`OutwardJobOutwardItem`](OutwardJobOutwardItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobOutwardItem`](OutwardJobOutwardItem.md)

#### Defined in

src/outward_jobs.scailo_pb.ts:2655

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`OutwardJobOutwardItem`](OutwardJobOutwardItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobOutwardItem`](OutwardJobOutwardItem.md)

#### Defined in

src/outward_jobs.scailo_pb.ts:2659
