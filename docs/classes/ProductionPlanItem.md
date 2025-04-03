[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ProductionPlanItem

# Class: ProductionPlanItem

Describes the parameters that constitute an item associated to a production plan

**`Generated`**

from message Scailo.ProductionPlanItem

## Hierarchy

- `Message`\<[`ProductionPlanItem`](ProductionPlanItem.md)\>

  ↳ **`ProductionPlanItem`**

## Table of contents

### Constructors

- [constructor](ProductionPlanItem.md#constructor)

### Properties

- [approvalMetadata](ProductionPlanItem.md#approvalmetadata)
- [entityUuid](ProductionPlanItem.md#entityuuid)
- [familyId](ProductionPlanItem.md#familyid)
- [metadata](ProductionPlanItem.md#metadata)
- [needApproval](ProductionPlanItem.md#needapproval)
- [productionPlanId](ProductionPlanItem.md#productionplanid)
- [quantity](ProductionPlanItem.md#quantity)
- [userComment](ProductionPlanItem.md#usercomment)
- [fields](ProductionPlanItem.md#fields)
- [runtime](ProductionPlanItem.md#runtime)
- [typeName](ProductionPlanItem.md#typename)

### Methods

- [clone](ProductionPlanItem.md#clone)
- [equals](ProductionPlanItem.md#equals)
- [fromBinary](ProductionPlanItem.md#frombinary)
- [fromJson](ProductionPlanItem.md#fromjson)
- [fromJsonString](ProductionPlanItem.md#fromjsonstring)
- [getType](ProductionPlanItem.md#gettype)
- [toBinary](ProductionPlanItem.md#tobinary)
- [toJSON](ProductionPlanItem.md#tojson)
- [toJson](ProductionPlanItem.md#tojson-1)
- [toJsonString](ProductionPlanItem.md#tojsonstring)
- [equals](ProductionPlanItem.md#equals-1)
- [fromBinary](ProductionPlanItem.md#frombinary-1)
- [fromJson](ProductionPlanItem.md#fromjson-1)
- [fromJsonString](ProductionPlanItem.md#fromjsonstring-1)

## Constructors

### constructor

• **new ProductionPlanItem**(`data?`): [`ProductionPlanItem`](ProductionPlanItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ProductionPlanItem`](ProductionPlanItem.md)\> |

#### Returns

[`ProductionPlanItem`](ProductionPlanItem.md)

#### Overrides

Message\&lt;ProductionPlanItem\&gt;.constructor

#### Defined in

src/production_plans.scailo_pb.ts:973

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

Stores the approval metadata

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

src/production_plans.scailo_pb.ts:936

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/production_plans.scailo_pb.ts:922

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 11;

#### Defined in

src/production_plans.scailo_pb.ts:964

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this production plan

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

src/production_plans.scailo_pb.ts:929

___

### needApproval

• **needApproval**: `boolean` = `false`

Denotes if this record requires approval (or has been approved)

**`Generated`**

from field: bool need_approval = 4;

#### Defined in

src/production_plans.scailo_pb.ts:943

___

### productionPlanId

• **productionPlanId**: `bigint` = `protoInt64.zero`

Stores the production plan ID

**`Generated`**

from field: uint64 production_plan_id = 10;

#### Defined in

src/production_plans.scailo_pb.ts:957

___

### quantity

• **quantity**: `bigint` = `protoInt64.zero`

The quantity being manufactured

**`Generated`**

from field: uint64 quantity = 12;

#### Defined in

src/production_plans.scailo_pb.ts:971

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might have added during an operation

**`Generated`**

from field: string user_comment = 5;

#### Defined in

src/production_plans.scailo_pb.ts:950

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/production_plans.scailo_pb.ts:980

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/production_plans.scailo_pb.ts:978

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ProductionPlanItem"``

#### Defined in

src/production_plans.scailo_pb.ts:979

## Methods

### clone

▸ **clone**(): [`ProductionPlanItem`](ProductionPlanItem.md)

Create a deep copy.

#### Returns

[`ProductionPlanItem`](ProductionPlanItem.md)

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
| `other` | `undefined` \| ``null`` \| [`ProductionPlanItem`](ProductionPlanItem.md) \| `PlainMessage`\<[`ProductionPlanItem`](ProductionPlanItem.md)\> |

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

▸ **getType**(): `MessageType`\<[`ProductionPlanItem`](ProductionPlanItem.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ProductionPlanItem`](ProductionPlanItem.md)\>

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
| `a` | `undefined` \| [`ProductionPlanItem`](ProductionPlanItem.md) \| `PlainMessage`\<[`ProductionPlanItem`](ProductionPlanItem.md)\> |
| `b` | `undefined` \| [`ProductionPlanItem`](ProductionPlanItem.md) \| `PlainMessage`\<[`ProductionPlanItem`](ProductionPlanItem.md)\> |

#### Returns

`boolean`

#### Defined in

src/production_plans.scailo_pb.ts:1003

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ProductionPlanItem`](ProductionPlanItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ProductionPlanItem`](ProductionPlanItem.md)

#### Defined in

src/production_plans.scailo_pb.ts:991

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ProductionPlanItem`](ProductionPlanItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProductionPlanItem`](ProductionPlanItem.md)

#### Defined in

src/production_plans.scailo_pb.ts:995

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ProductionPlanItem`](ProductionPlanItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProductionPlanItem`](ProductionPlanItem.md)

#### Defined in

src/production_plans.scailo_pb.ts:999
